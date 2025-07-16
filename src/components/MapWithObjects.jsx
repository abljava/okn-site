import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import ObjectInfoModal from "./ObjectInfoModal";

export default function MapWithObjects({ children }) {
  const [selectedFeature, setSelectedFeature] = useState(null);

  // Получаем массив слоёв и их имена
  const layers = Array.isArray(children) ? children : [children];
  const layerNames = layers.map(child => child.props.layerName || child.type.name);

  // Состояние видимости слоёв
  const [visibleLayers, setVisibleLayers] = useState(
    Object.fromEntries(layerNames.map(name => [name, true]))
  );

  // Обработчик чекбоксов
  const handleToggle = (name) => {
    setVisibleLayers(v => ({ ...v, [name]: !v[name] }));
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
      <div style={{
        position: "absolute", zIndex: 1000, top: 100, left: 10, background: "#fff", padding: 10, borderRadius: 8, boxShadow: "0 2px 8px #0002"
      }}>
        <b>Слои:</b>
        {layerNames.map(name => (
          <div key={name}>
            <label>
              <input
                type="checkbox"
                checked={visibleLayers[name]}
                onChange={() => handleToggle(name)}
              />
              {name}
            </label>
          </div>
        ))}
      </div>
      <MapContainer center={[43.304348693306679, 131.8]} zoom={14} style={{ height: "600px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {layersWithProps}
      </MapContainer>
      <ObjectInfoModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />
    </>
  );
}