import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import * as turf from "@turf/turf";

export default function ViewOKNRegional({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [bufferData, setBufferData] = useState(null);

  useEffect(() => {
    fetch("/data/numbered/3_okn_regional.geojson")
      .then((res) => res.json())
      .then((data) => {
        console.log('Загружено объектов:', data.features.length);
        setGeojsonData(data);
        
        // Подсчитываем объекты с номерами
        const objectsWithNumbers = data.features.filter(f => 
          f.properties?.Text || f.properties?.number
        ).length;
        console.log('Объектов с номерами:', objectsWithNumbers);
        
        // Генерируем буфер только для объектов с корректными координатами и номерами
        const bufferFeatures = data.features
          .filter((f) => {
            // Проверяем наличие геометрии
            if (!f.geometry) return false;
            
            // Проверяем наличие номера
            if (!f.properties?.Text && !f.properties?.number) return false;
            
            // Проверяем корректность координат
            if (f.geometry.type === 'MultiPolygon') {
              return f.geometry.coordinates.every(polygon => 
                polygon.every(ring => 
                  ring.every(coord => 
                    Array.isArray(coord) && 
                    coord.length === 2 && 
                    typeof coord[0] === 'number' && 
                    typeof coord[1] === 'number'
                  )
                )
              );
            }
            
            return true;
          })
          .map((f) => {
            try {
              const buf = turf.buffer(f, 3, { units: "meters" });
              buf.properties = { ...f.properties };
              return buf;
            } catch (error) {
              console.warn('Ошибка создания буфера для объекта:', f.properties?.fid, error.message);
              return null;
            }
          })
          .filter(Boolean); // Убираем null значения
        console.log('Создано буферов:', bufferFeatures.length);
        setBufferData({ type: "FeatureCollection", features: bufferFeatures });
      });
  }, []);

  function onEachFeature(feature, layer) {
    // Проверяем, что у объекта есть номер
    if (!feature.properties?.Text && !feature.properties?.number) {
      return; // Пропускаем объекты без номеров
    }
    
    layer.on({
      click: () => {
        console.log('Клик по объекту:', feature.properties);
        if (onFeatureClick) onFeatureClick(feature);
      },
    });
    
    const number = feature.properties.Text || feature.properties.number;
    layer.bindTooltip(`№ ${number}`, {
      permanent: false,
      direction: "top",
    });
  }

  return geojsonData ? (
    <>
      {/* Невидимый буфер для клика */}
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
      {/* Отрисовка только объектов с номерами */}
      <GeoJSON
        data={{
          type: "FeatureCollection",
          features: geojsonData.features.filter(f => 
            f.properties?.Text || f.properties?.number
          )
        }}
        onEachFeature={onEachFeature}
        style={() => ({
          color: "#000",
          weight: 1,
          fillColor: "#f85e5b",
          fillOpacity: 0.8,
          opacity: 1,
        })}
      />
    </>
  ) : null;
}
