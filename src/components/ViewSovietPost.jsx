import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";

export default function ViewSovietPost({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/test_data/soviet_postr.geojson")
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
        color: "#3489ff",
        weight: 1,
        fillColor: "#3489ff",
        fillOpacity: 0.1,
        opacity: 1
      })}
    />
  ) : null;
}

