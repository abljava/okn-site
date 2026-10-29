import { useCallback, useMemo, useRef } from "react";
import { GeoJSON, useMap, useMapEvents } from "react-leaflet";
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

const STROKE_REF_ZOOM = 16;
const MIN_STROKE_WEIGHT = 0.75;

function strokeForZoom(baseWeight, zoom) {
  if (zoom >= STROKE_REF_ZOOM) return baseWeight;
  return Math.max(MIN_STROKE_WEIGHT, baseWeight * 2 ** (zoom - STROKE_REF_ZOOM));
}

export default function GeoJsonLayer({
  url,
  style,
  onFeatureClick,
  interactive = false,
  numberedOnly = false,
  bufferMeters = 0,
  tooltip = "number",
  featureProps,
  scaleStroke = false,
}) {
  const rawData = useGeoJson(url);

  const data = useMemo(() => {
    if (!rawData || !featureProps) return rawData;
    return {
      ...rawData,
      features: rawData.features.map((feature) => {
        const extra = featureProps[feature.properties?.fid];
        if (!extra) return feature;
        return { ...feature, properties: { ...feature.properties, ...extra } };
      }),
    };
  }, [rawData, featureProps]);

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

  const map = useMap();
  const geoJsonRef = useRef(null);

  const styleAtZoom = useCallback(
    (zoom) => {
      if (!scaleStroke) return style;
      return {
        ...style,
        weight: strokeForZoom(style.weight ?? 1, zoom),
      };
    },
    [scaleStroke, style]
  );

  const pathStyle = useCallback(
    () => styleAtZoom(map.getZoom()),
    [map, styleAtZoom]
  );

  useMapEvents({
    zoomend() {
      if (!scaleStroke) return;
      geoJsonRef.current?.setStyle(styleAtZoom(map.getZoom()));
    },
  });

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
        ref={geoJsonRef}
        data={displayData}
        onEachFeature={onEachFeature}
        style={pathStyle}
      />
    </>
  );
}
