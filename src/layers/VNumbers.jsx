import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import L from "leaflet";

export default function VNumbers({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [objectNumbers, setObjectNumbers] = useState([]);

  useEffect(() => {
    // Загружаем объекты и собираем их номера
    fetch("/test_data/okn_objects_01_numbers.geojson")
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(objectsData => {
        const numbers = objectsData.features
          .map(f => f.properties?.number)
          .filter(Boolean);
        setObjectNumbers(numbers);
      })
      .catch(error => {
        console.error("Error loading objects data:", error);
      });
  }, []);

  useEffect(() => {
    fetch("/test_data/number_00_2.geojson")
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(setGeojsonData)
      .catch(error => {
        console.error("Error loading numbers data:", error);
      });
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
      radius: 3,
      color: "#000",
      fillColor: "#000",
      opacity: 1,
      fillOpacity: 0.8,
      weight: 0
    });
  }

  // Фильтруем точки: оставляем только те, у которых number не встречается среди объектов
  const filteredGeojson = geojsonData
    ? {
        ...geojsonData,
        features: geojsonData.features.filter(
          f => !objectNumbers.includes(f.properties?.number)
        )
      }
    : null;

  return filteredGeojson ? (
    <GeoJSON
      data={filteredGeojson}
      onEachFeature={onEachFeature}
      pointToLayer={pointToLayer}
    />
  ) : null;
}
