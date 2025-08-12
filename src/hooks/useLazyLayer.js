import { useState, useEffect, useCallback } from 'react';
import { optimizeGeoJSON } from '../utils/geoJsonOptimizer';

// Кэш для загруженных данных
const dataCache = new Map();

export const useLazyLayer = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const {
    priority = 'low',
    preload = false,
    optimize = true,
    precision = 6
  } = options;

  const loadData = useCallback(async () => {
    if (dataCache.has(url)) {
      setData(dataCache.get(url));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const geojson = await response.json();
      
      // Оптимизируем данные если нужно
      const optimizedData = optimize ? optimizeGeoJSON(geojson, precision) : geojson;
      
      // Кэшируем данные
      dataCache.set(url, optimizedData);
      setData(optimizedData);
    } catch (err) {
      setError(err.message);
      console.error(`Error loading layer ${url}:`, err);
    } finally {
      setLoading(false);
    }
  }, [url, optimize, precision]);

  // Автоматическая загрузка при изменении видимости
  useEffect(() => {
    if (isVisible && !data && !loading) {
      loadData();
    }
  }, [isVisible, data, loading, loadData]);

  // Предзагрузка для высокоприоритетных слоев
  useEffect(() => {
    if (preload && priority === 'high' && !data && !loading) {
      loadData();
    }
  }, [preload, priority, data, loading, loadData]);

  const setVisible = useCallback((visible) => {
    setIsVisible(visible);
  }, []);

  const reload = useCallback(() => {
    dataCache.delete(url);
    setData(null);
    setError(null);
    if (isVisible) {
      loadData();
    }
  }, [url, isVisible, loadData]);

  return {
    data,
    loading,
    error,
    isVisible,
    setVisible,
    reload,
    loadData
  };
};
