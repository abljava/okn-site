import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";

export function ViewNumbers({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/test_data/number_00.geojson")
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
        color: "#007bff",
        weight: 2,
        fillColor: "#007bff",
        fillOpacity: 0.2,
        opacity: 1
      })}
    />
  ) : null;
} 