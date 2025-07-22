import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";

export default function ViewOKNBorders
({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);

  useEffect(() => {
    fetch("/test_data/okn_00.geojson")
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
      // onEachFeature={onEachFeature}
      style={() => ({
        color: "#bc6c6e",
        weight: 1,
        fillColor: "#bc6c6e",
        fillOpacity: 0.4,
        opacity: 1
      })}
    />
  ) : null;
} 