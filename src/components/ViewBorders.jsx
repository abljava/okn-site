import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";

export default function ViewBorders({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/data/borders.geojson")
      .then(res => res.json())
      .then(setGeojsonData);
  }, []);

  function onEachFeature(feature, layer) {
    layer.on({
      click: () => {
        if (onFeatureClick) onFeatureClick(feature);
      }
    });
  }

  return geojsonData ? (
    <GeoJSON
      data={geojsonData}
      onEachFeature={onEachFeature}
      style={() => ({
        color: "#0066cc",
        weight: 1,
        fillColor: "#99ccff",
        fillOpacity: 0.1,
        opacity: 1
      })}
    />
  ) : null;
} 