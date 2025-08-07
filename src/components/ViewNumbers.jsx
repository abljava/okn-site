import { useEffect, useState } from "react";
import { GeoJSON } from "react-leaflet";
import L from "leaflet";

export function ViewNumbers({ onFeatureClick }) {
  const [geojsonData, setGeojsonData] = useState(null);
  const [objectNumbers, setObjectNumbers] = useState([]);

  useEffect(() => {
    // Загружаем объекты и собираем их номера
    fetch("/data/okn_objects_01_numbers.geojson")
      .then(res => res.json())
      .then(objectsData => {
        const numbers = objectsData.features
          .map(f => f.properties?.number)
          .filter(Boolean);
        setObjectNumbers(numbers);
      });
  }, []);

  useEffect(() => {
    fetch("/data/number_00_2.geojson")
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
      radius: 3,
      color: "#a8400f",
      fillColor: "#7a2d43",
      opacity: 1,
      fillOpacity: 0.7,
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


// import { useEffect, useState } from "react";
// import { GeoJSON } from "react-leaflet";
// import L from "leaflet";
// import * as turf from "@turf/turf";

// export function ViewNumbers({ onFeatureClick }) {
//   const [geojsonData, setGeojsonData] = useState(null);
//   const [bufferData, setBufferData] = useState(null);

//   useEffect(() => {
//     fetch("/data/number_00_2.geojson")
//       .then(res => res.json())
//       .then(data => {
//         setGeojsonData(data);
//         // Генерируем буфер вокруг точек (например, 10 метров)
//         const bufferFeatures = data.features
//           .filter(f => f.geometry && f.geometry.type === "Point")
//           .map(f => {
//             const buf = turf.buffer(f, 10, { units: "meters" });
//             buf.properties = { ...f.properties };
//             return buf;
//           });
//         setBufferData({ type: "FeatureCollection", features: bufferFeatures });
//       });
//   }, []);

//   function onEachFeature(feature, layer) {
//     layer.on({
//       click: () => {
//         if (onFeatureClick) onFeatureClick(feature);
//       },
//       // mouseover: function () {
//       //   layer.setStyle({ radius: 6 });
//       // },
//       // mouseout: function () {
//       //   layer.setStyle({ radius: 2.5 });
//       // }
//     });
//   }

//   function pointToLayer(feature, latlng) {
//     return L.circleMarker(latlng, {
//       radius: 3, // радиус точки
//       color: "#7a2d43",
//       fillColor: "#7a2d43",
//       opacity: 1,
//       fillOpacity: .7,
//       weight: 0
//     });
//   }

//   return geojsonData ? (
//     <>
//       {/* Невидимый буфер для клика */}
//       {bufferData && (
//         <GeoJSON
//           data={bufferData}
//           onEachFeature={onEachFeature}
//           style={() => ({
//             color: "transparent",
//             fillColor: "transparent",
//             fillOpacity: 0,
//             weight: 0
//           })}
//         />
//       )}
//       {/* Отрисовка самих точек */}
//       <GeoJSON
//         data={geojsonData}
//         onEachFeature={onEachFeature}
//         pointToLayer={pointToLayer}
//       />
//     </>
//   ) : null;
// } 