import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import * as turf from "@turf/turf";

export default function HistoricalPlan({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [bufferData, setBufferData] = useState(null);

  useEffect(() => {
    fetch("/data/15_historical_plan.geojson")
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

  return geojsonData ? (
    <>
      {/* Невидимый буфер для клика */}
      {bufferData && (
        <GeoJSON
          data={bufferData}
          // onEachFeature={onEachFeature}
          style={() => ({
            color: "transparent",
            fillColor: "transparent",
            fillOpacity: 0,
            weight: 0,
          })}
        />
      )}
      {/* Отрисовка самих линий */}
      <GeoJSON
        data={geojsonData}
        // onEachFeature={onEachFeature}
        style={() => ({
          color: "#acacac",
          weight: 4,
          fillColor: "#acacac",
          fillOpacity: 0.8,
          opacity: 1,
        })}
      />
    </>
  ) : null;
}
