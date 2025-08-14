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
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Обработчик чекбоксов
  const handleToggle = (name) => {
    setVisibleLayers((v) => ({ ...v, [name]: !v[name] }));
  };

  const togglePanel = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Добавляем onFeatureClick и фильтруем по видимости
  const layersWithProps = layers.map((child, idx) => {
    const name = layerNames[idx];
    if (!visibleLayers[name]) return null;
    return React.cloneElement(child, {
      onFeatureClick: setSelectedFeature,
      isVisible: visibleLayers[name],
      key: name,
    });
  });

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={[43.1155, 131.8855]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {layersWithProps}
      </MapContainer>

      {/* Панель управления слоями */}
      <div className="absolute z-[1000] w-[300px] md:w-[450px] xl:w-[650px] top-3 left-3 bg-white rounded-lg shadow-lg">
        {isCollapsed ? (
          // Свернутое состояние
          <div 
            className="flex items-center justify-between p-3 lg:p-4 cursor-pointer"
            onClick={togglePanel}
          >
            <span className="text-sm lg:text-base font-medium">слои</span>
            <svg 
              className="w-4 h-4 text-orange-500 transform rotate-0 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        ) : (
          // Развернутое состояние
          <div className="p-3 lg:p-6">
            <div className="flex items-center justify-between mb-3">
              <b className="text-sm lg:text-base">Слои:</b>
              <button 
                onClick={togglePanel}
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                <svg 
                  className="w-4 h-4 transform rotate-180 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            {layerNames.map((name, index) => (
              <div key={name} className="flex items-center gap-2 mb-2">
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
        )}
      </div>
      <ObjectInfoModal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </div>
  );
}
