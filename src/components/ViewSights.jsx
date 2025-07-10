import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";

export default function ViewSights({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/maps/vidovie_wgs4326.geojson")
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
        color: "#ff9900",
        weight: 2,
        fillColor: "#ffcc80",
        fillOpacity: 0.3,
        opacity: 1
      })}
    />
  ) : null;
} 