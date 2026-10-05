import { GeoJSON } from "react-leaflet";
import L from "leaflet";
import { useGeoJson } from "./useGeoJson";

function createLabeledMarker(feature, latlng, layerColor) {
  const rawText = feature?.properties?.Text ?? "";
  const label = String(rawText)
    .replace(/^\\pxqc;/, "")
    .replace(/\\P/g, " ");

  const html = `
    <div style="
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
