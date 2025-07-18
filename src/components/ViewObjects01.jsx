import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";

export default function ViewObjects01({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/test_data/okn_objects_01.geojson")
      .then(res => res.json())
      .then(setGeojsonData);
  }, []);

  function onEachFeature(feature, layer) {
    layer.on({
      click: () => {
        if (onFeatureClick) onFeatureClick(feature);
      }
    });
    // Можно добавить popup с номером
    if (feature.properties && feature.properties.plaintext_2) {
      layer.bindTooltip(`№ ${feature.properties.plaintext_2}`, {permanent: false, direction: 'top'});
    }
  }

  return geojsonData ? (
    <GeoJSON
      data={geojsonData}
      onEachFeature={onEachFeature}
      style={() => ({
        color: "#c42e61",
        weight: 2,
        fillColor: "#c42e61",
        fillOpacity: 0.4,
        opacity: 1
      })}
    />
  ) : null;
} 