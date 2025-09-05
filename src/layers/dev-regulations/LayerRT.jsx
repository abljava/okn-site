import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import * as turf from "@turf/turf";
import L from "leaflet";

export default function LayerRT({ onFeatureClick, layerColor = "#000" }) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [bufferData, setBufferData] = useState(null);
  const [pointsData, setPointsData] = useState(null);

  useEffect(() => {
    // Загружаем данные линий
    fetch("/test-data/dev-regulations/rt.geojson")
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
    // Загружаем данные точек
    fetch("/test-data/dev-regulations/rt_point.geojson")
      .then((res) => res.json())
      .then((data) => {
        setPointsData(data);
      })
      .catch((error) => {
        console.error("Ошибка загрузки точек:", error);
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
          // onEachFeature={onEachFeature}
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
          // onEachFeature={onEachFeature}
          style={() => ({
            color: layerColor,
            weight: 2,
            fillColor: layerColor,
            fillOpacity: 0.3,
            opacity: 1,
            dashArray: "8, 8",
          })}
        />
      )}

      {/* Отрисовка точек */}
      {pointsData && (
        <>
          <GeoJSON
            data={pointsData}
            // onEachFeature={onEachPointFeature}
            pointToLayer={(feature, latlng) => {
              const rawText = feature?.properties?.Text ?? "";
              const label = String(rawText)
                .replace(/^\\pxqc;/, "")
                .replace(/\\P/g, " ");

              const html = `
                <div style="
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  width:28px;height:28px;
                  border:2px solid ${layerColor};
                  border-radius:50%;
                  background:rgba(255,255,255,0.95);
                  color:#000;
                  font-size:10px;line-height:1.1;font-weight:600;
                  text-align:center;padding:2px;
                  box-shadow:0 0 0 2px #fff;
                ">
                  <span>${label}</span>
                </div>`;

              return L.marker(latlng, {
                icon: L.divIcon({
                  className: "okn-dot-label",
                  html,
                  iconSize: [44, 44],
                  iconAnchor: [22, 22],
                }),
                interactive: true,
              });
            }}
          />
        </>
      )}
    </>
  );
}
