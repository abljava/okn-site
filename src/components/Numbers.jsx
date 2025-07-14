import { useEffect, useState } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

// Глобальный стиль для leaflet-div-icon, чтобы убрать фон и рамку
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `.leaflet-div-icon { background: none !important; border: none !important; box-shadow: none !important; }`;
  document.head.appendChild(style);
}

export default function Numbers({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/data/numbers.geojson")
      .then(res => res.json())
      .then(setGeojsonData);
  }, []);

  if (!geojsonData) return null;

  return geojsonData.features.map((feature, idx) => {
    const coords = feature.geometry.coordinates;
    const icon = L.divIcon({
      className: "number-marker",
      html: `<div style="width:3px;height:3px;border-radius:50%;background:#009933;"></div>`,
      iconSize: [5, 5],
      iconAnchor: [2.5, 2.5]
    });
    return (
      <Marker
        key={feature.properties?.fid || idx}
        position={[coords[1], coords[0]]}
        icon={icon}
        eventHandlers={onFeatureClick ? { click: () => onFeatureClick(feature) } : {}}
      />
    );
  });
} 