// Утилита для оптимизации GeoJSON данных
export const optimizeGeoJSON = (geojson, precision = 6) => {
  if (!geojson || !geojson.features) return geojson;

  const optimizedFeatures = geojson.features.map(feature => {
    if (!feature.geometry || !feature.geometry.coordinates) return feature;

    const optimizeCoordinates = (coords) => {
      if (Array.isArray(coords[0]) && typeof coords[0][0] === 'number') {
        return coords.map(coord => [
          Math.round(coord[0] * Math.pow(10, precision)) / Math.pow(10, precision),
          Math.round(coord[1] * Math.pow(10, precision)) / Math.pow(10, precision)
        ]);
      }
      return coords.map(optimizeCoordinates);
    };

    return {
      ...feature,
      geometry: {
        ...feature.geometry,
        coordinates: optimizeCoordinates(feature.geometry.coordinates)
      }
    };
  });

  return {
    ...geojson,
    features: optimizedFeatures
  };
};

// Функция для разделения больших GeoJSON на чанки
export const chunkGeoJSON = (geojson, chunkSize = 100) => {
  if (!geojson || !geojson.features) return [geojson];

  const chunks = [];
  for (let i = 0; i < geojson.features.length; i += chunkSize) {
    chunks.push({
      ...geojson,
      features: geojson.features.slice(i, i + chunkSize)
    });
  }
  return chunks;
};

// Функция для создания упрощенной версии для предварительного просмотра
export const createSimplifiedPreview = (geojson, tolerance = 0.0001) => {
  if (!geojson || !geojson.features) return geojson;

  const simplifiedFeatures = geojson.features.map(feature => {
    if (!feature.geometry || feature.geometry.type !== 'LineString') return feature;

    const coords = feature.geometry.coordinates;
    if (coords.length <= 2) return feature;

    // Простое упрощение - берем каждый N-й элемент
    const step = Math.max(1, Math.floor(coords.length / 10));
    const simplifiedCoords = coords.filter((_, index) => index % step === 0);

    return {
      ...feature,
      geometry: {
        ...feature.geometry,
        coordinates: simplifiedCoords
      }
    };
  });

  return {
    ...geojson,
    features: simplifiedFeatures
  };
};
