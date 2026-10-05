import { useMemo } from "react";
import { GeoJSON } from "react-leaflet";
import { useGeoJson } from "./useGeoJson";
import {
  bindNumberTooltip,
  bindPlaintextTooltip,
  bufferLineStrings,
  bufferNumberedFeatures,
  filterNumberedFeatures,
} from "./geoBuffers";

const transparentStyle = {
  color: "transparent",
  fillColor: "transparent",
  fillOpacity: 0,
  weight: 0,
};

export default function GeoJsonLayer({
  url,
  style,
  onFeatureClick,
  interactive = false,
  numberedOnly = false,
  bufferMeters = 0,
  tooltip = "number",
}) {
  const data = useGeoJson(url);

  const displayData = useMemo(() => {
    if (!data) return null;
    return numberedOnly ? filterNumberedFeatures(data) : data;
  }, [data, numberedOnly]);

  const bufferData = useMemo(() => {
    if (!data || !interactive || !bufferMeters) return null;
    return numberedOnly
      ? bufferNumberedFeatures(data, bufferMeters)
      : bufferLineStrings(data, bufferMeters);
  }, [data, interactive, bufferMeters, numberedOnly]);

  const onEachFeature = useMemo(() => {
    if (!interactive) return undefined;
    return (feature, layer) => {
      if (tooltip === "plaintext_2") {
        bindPlaintextTooltip(feature, layer, onFeatureClick);
        return;
      }
      bindNumberTooltip(feature, layer, onFeatureClick);
    };
  }, [interactive, onFeatureClick, tooltip]);

  const pathStyle = useMemo(() => () => style, [style]);

  if (!displayData) return null;

  return (
    <>
      {bufferData && (
        <GeoJSON
          data={bufferData}
          onEachFeature={onEachFeature}
          style={() => transparentStyle}
        />
      )}
      <GeoJSON
        data={displayData}
        onEachFeature={onEachFeature}
        style={pathStyle}
      />
    </>
  );
}
