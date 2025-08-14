import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

export default function ProgressiveMapLoader({ children, center, zoom = 16 }) {
  const [isMapReady, setIsMapReady] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Имитация прогрессивной загрузки
    const timer = setTimeout(() => {
      setIsMapReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMapReady) return;

    // Прогрессивная загрузка слоев
    const totalLayers = React.Children.count(children);
    let loadedLayers = 0;

    const updateProgress = () => {
      loadedLayers++;
      setLoadingProgress((loadedLayers / totalLayers) * 100);
    };

    // Симулируем загрузку слоев
    const interval = setInterval(() => {
      if (loadedLayers < totalLayers) {
        updateProgress();
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [isMapReady, children]);

  if (!isMapReady) {
    return (
      <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Загрузка карты...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {children}
      </MapContainer>
      
      {loadingProgress < 100 && (
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 z-[1001]">
          <div className="text-sm text-gray-600 mb-2">Загрузка слоев</div>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-1">{Math.round(loadingProgress)}%</div>
        </div>
      )}
    </div>
  );
}
