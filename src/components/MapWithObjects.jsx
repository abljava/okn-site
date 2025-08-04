import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import ObjectInfoModal from "./ObjectInfoModal";

export default function MapWithObjects({ children }) {
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Получаем массив слоёв и их имена
  const layers = Array.isArray(children) ? children : [children];
  const layerNames = layers.map(
    (child) => child.props.layerName || child.type.name
  );
  
  // Получаем цвета слоёв
  const layerColors = layers.map(
    (child) => child.props.layerColor || '#000000'
  );

  // Состояние видимости слоёв
  const [visibleLayers, setVisibleLayers] = useState(
    Object.fromEntries(layerNames.map((name) => [name, true]))
  );

  // Обработчик чекбоксов
  const handleToggle = (name) => {
    setVisibleLayers((v) => ({ ...v, [name]: !v[name] }));
  };

  // Добавляем onFeatureClick и фильтруем по видимости
  const layersWithProps = layers.map((child, idx) => {
    const name = layerNames[idx];
    if (!visibleLayers[name]) return null;
    return React.cloneElement(child, {
      onFeatureClick: setSelectedFeature,
      key: name,
    });
  });

  return (
    <>
      {/* Панель управления слоями */}
      <div className="absolute z-[1000] md:w-[450px] xl:w-[650px] md:top-[10px] left-[10px] bg-white p-3 lg:p-6 rounded-lg shadow-lg">
        <b>Слои:</b>
        {layerNames.map((name, index) => (
          <div key={name} className="flex items-center gap-2">
            <label className="flex items-center gap-3 text-xs lg:text-base xl:text-lg">
              <input
                type="checkbox"
                checked={visibleLayers[name]}
                onChange={() => handleToggle(name)}
              />
              <div 
                className="w-5 h-3"
                style={{ backgroundColor: layerColors[index] }}
              ></div>
              <span>{name}</span>
            </label>
          </div>
        ))}
      </div>
      <MapContainer
        center={[43.1159, 131.8828]}
        zoom={14}
        className="h-[1000px] w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {layersWithProps}
      </MapContainer>
      <ObjectInfoModal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </>
  );
}
