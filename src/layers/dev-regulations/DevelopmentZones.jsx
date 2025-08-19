import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import * as turf from "@turf/turf";
import L from "leaflet";

export default function DevelopmentZones({
  onFeatureClick,
  layerColor = "#000",
}) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [bufferData, setBufferData] = useState(null);

  useEffect(() => {
    // Загружаем данные линий
    fetch("/test-data/dev-regulations/development_zones.geojson")
      .then((res) => res.json())
      .then((data) => {
        setGeojsonData(data);
        // Генерируем буфер вокруг линий (например, 2 метра)
        const bufferFeatures = data.features
          .filter((f) => f.geometry && f.geometry.type === "LineString")
          .map((f) => {
            const buf = turf.buffer(f, 3, { units: "meters" });
            buf.properties = { ...f.properties };
            return buf;
          });
        setBufferData({ type: "FeatureCollection", features: bufferFeatures });
      })
      .catch((error) => {
        console.error("Ошибка загрузки линий:", error);
      });
  }, []);

  function onEachFeature(feature, layer) {
    layer.on({
      click: () => {
        if (onFeatureClick) onFeatureClick(feature);
      },
    });
    if (feature.properties && feature.properties.plaintext_2) {
      layer.bindTooltip(`№ ${feature.properties.plaintext_2}`, {
        permanent: false,
        direction: "top",
      });
    }
  }

  function onEachPointFeature(feature, layer) {
    layer.on({
      click: () => {
        if (onFeatureClick) onFeatureClick(feature);
      },
    });
    if (feature.properties && feature.properties.Text) {
      layer.bindTooltip(feature.properties.Text, {
        permanent: false,
        direction: "top",
      });
    }
  }

  return (
    <>
      {/* Невидимый буфер для клика по линиям */}
      {bufferData && (
        <GeoJSON
          data={bufferData}
          onEachFeature={onEachFeature}
          style={() => ({
            color: "transparent",
            fillColor: "transparent",
            fillOpacity: 0,
            weight: 0,
          })}
        />
      )}

      {/* Отрисовка линий */}
      {geojsonData && (
        <GeoJSON
          data={geojsonData}
          onEachFeature={onEachFeature}
          style={() => ({
            color: layerColor,
            weight: 2,
            fillColor: layerColor,
            fillOpacity: 0.3,
            opacity: 1,
            // dashArray: "8, 8",
          })}
        />
      )}
    </>
  );
}
