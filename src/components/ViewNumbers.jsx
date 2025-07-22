import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import L from "leaflet";

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

  function pointToLayer(feature, latlng) {
    return L.circleMarker(latlng, {
      radius: 2.5, // радиус 2.5px = диаметр 5px
      color: "#007bff",
      fillColor: "#007bff",
      fillOpacity: 1,
      weight: 0
    });
  }

  return geojsonData ? (
    <GeoJSON
      data={geojsonData}
      onEachFeature={onEachFeature}
      pointToLayer={pointToLayer}
    />
  ) : null;
} 