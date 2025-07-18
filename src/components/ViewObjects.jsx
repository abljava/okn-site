import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";

export default function ViewObjects({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/test_data/okn_objects_00_numbers.geojson")
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
        color: "#b73ced",
        weight: 2,
        fillColor: "#b73ced",
        fillOpacity: 0.4,
        opacity: 1
      })}
    />
  ) : null;
} 