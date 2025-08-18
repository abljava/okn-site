import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import * as turf from "@turf/turf";

export default function ViewOKNFederal({ onFeatureClick, layerColor="#ea66c9"}) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [bufferData, setBufferData] = useState(null);

  useEffect(() => {
    fetch("/data/numbered/2_okn_federal.geojson")
      .then((res) => res.json())
      .then((data) => {
        setGeojsonData(data);
        
        // Подсчитываем объекты с номерами
        const objectsWithNumbers = data.features.filter(f => 
          f.properties?.Text || f.properties?.number
        ).length;
        
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
              return null;
            }
          })
          .filter(Boolean); // Убираем null значения
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
          fillColor: layerColor,
          fillOpacity: 0.8,
          opacity: 1,
        })}
      />
    </>
  ) : null;
}
