import { useEffect } from "react";
import { GeoJSON } from "react-leaflet";
import { useLazyLayer } from "../hooks/useLazyLayer";

export default function ViewOKNBorders({ onFeatureClick, isVisible = true }) {
  const { data: geojsonData, loading, error, setVisible } = useLazyLayer("/data/1_borders.geojson", {
    priority: 'high',
    preload: true
  });

  useEffect(() => {
    setVisible(isVisible);
  }, [isVisible, setVisible]);

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
        color: "#000",
        weight: 3,
        fillColor: "#bc6c6e",
        fillOpacity: 0.8,
        opacity: 1,
        dashArray: "10, 10"
      })}
    />
  ) : null;
} 