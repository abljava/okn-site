import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";

export default function ViewBorders({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/test_data/granicy_transformed.geojson")
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
        color: "#000",
        weight: 1,
        fillColor: "#000",
        fillOpacity: 0.1,
        opacity: 1
      })}
    />
  ) : null;
}

