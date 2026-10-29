import { useEffect } from "react";
import { GeoJSON, useMap } from "react-leaflet";
import L from "leaflet";
import { useGeoJson } from "./useGeoJson";

const LABEL_REF_ZOOM = 16;
const MIN_LABEL_SCALE = 0.3;

function labelScale(zoom) {
  if (zoom >= LABEL_REF_ZOOM) return 1;
  return Math.max(MIN_LABEL_SCALE, 2 ** (zoom - LABEL_REF_ZOOM));
}

function applyLabelScale(map) {
  const scale = labelScale(map.getZoom());
  const container = map.getContainer();
  container.style.setProperty("--okn-label-scale", String(scale));
  container.classList.toggle("okn-labels-compact", scale < 0.55);
  container.classList.toggle("okn-labels-hidden", scale <= MIN_LABEL_SCALE);
}

function createLabeledMarker(feature, latlng, layerColor) {
  const rawText = feature?.properties?.Text ?? "";
  const label = String(rawText)
    .replace(/^\\pxqc;/, "")
    .replace(/\\P/g, " ");

  const html = `
    <div class="okn-dot-label-inner" style="
      display:flex;
      align-items:center;
      justify-content:center;
      width:28px;height:28px;
      border:2px solid ${layerColor};
      border-radius:50%;
      background:rgba(255,255,255,0.95);
      color:#000;
      font-size:10px;line-height:1.1;font-weight:600;
      text-align:center;padding:2px;
      box-shadow:0 0 0 2px #fff;
    ">
      <span>${label}</span>
    </div>`;

  return L.marker(latlng, {
    icon: L.divIcon({
      className: "okn-dot-label",
      html,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
    }),
    interactive: true,
  });
}

export default function LabeledLineLayer({
  linesUrl,
  pointsUrl,
  layerColor = "#000",
  dashArray,
}) {
  const lines = useGeoJson(linesUrl);
  const points = useGeoJson(pointsUrl);
  const map = useMap();

  useEffect(() => {
    applyLabelScale(map);
    const onZoom = () => applyLabelScale(map);
    map.on("zoomend", onZoom);
    return () => {
      map.off("zoomend", onZoom);
    };
  }, [map]);

  return (
    <>
      {lines && (
        <GeoJSON
          data={lines}
          style={() => ({
            color: layerColor,
            weight: 2,
            fillColor: layerColor,
            fillOpacity: 0.3,
            opacity: 1,
            ...(dashArray ? { dashArray } : {}),
          })}
        />
      )}
      {points && (
        <GeoJSON
          data={points}
          pointToLayer={(feature, latlng) =>
            createLabeledMarker(feature, latlng, layerColor)
          }
        />
      )}
    </>
  );
}
