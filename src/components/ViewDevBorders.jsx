import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";

export default function ViewDevBorders({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/test_data/razrab_granicy_00.geojson")
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
        color: "#c4732e",
        weight: 1,
        fillColor: "#c4732e",
        fillOpacity: 0.3,
        opacity: 1
      })}
    />
  ) : null;
}

