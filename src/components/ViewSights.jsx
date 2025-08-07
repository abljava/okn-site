import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";

export default function ViewSights({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    // fetch("/data/vidovye.geojson")
    fetch("/data/vidovye_test.geojson")
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
        color: "#985c59",
        weight: 1,
        fillColor: "#000",
        fillOpacity: 0.3,
        opacity: 1
      })}
    />
  ) : null;
} 