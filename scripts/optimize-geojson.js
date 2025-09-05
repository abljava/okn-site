import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Функция для оптимизации координат
function optimizeCoordinates(coords, precision = 6) {
  if (Array.isArray(coords[0]) && typeof coords[0][0] === "number") {
    return coords.map((coord) => [
      Math.round(coord[0] * Math.pow(10, precision)) / Math.pow(10, precision),
      Math.round(coord[1] * Math.pow(10, precision)) / Math.pow(10, precision),
    ]);
  }
  return coords.map((coord) => optimizeCoordinates(coord, precision));
}

// Функция для упрощения геометрии
function simplifyGeometry(feature, tolerance = 0.0001) {
  if (!feature.geometry || feature.geometry.type !== "LineString") {
    return feature;
  }

  const coords = feature.geometry.coordinates;
  if (coords.length <= 2) return feature;

  // Простое упрощение - берем каждый N-й элемент
  const step = Math.max(1, Math.floor(coords.length / 10));
  const simplifiedCoords = coords.filter((_, index) => index % step === 0);

  return {
    ...feature,
    geometry: {
      ...feature.geometry,
      coordinates: simplifiedCoords,
    },
  };
}

// Функция для оптимизации GeoJSON
function optimizeGeoJSON(geojson, options = {}) {
  const { precision = 6, simplify = false, tolerance = 0.0001 } = options;

  if (!geojson || !geojson.features) return geojson;

  const optimizedFeatures = geojson.features.map((feature) => {
    let optimizedFeature = feature;

    // Упрощаем геометрию если нужно
    if (simplify) {
      optimizedFeature = simplifyGeometry(feature, tolerance);
    }

    // Оптимизируем координаты
    if (optimizedFeature.geometry && optimizedFeature.geometry.coordinates) {
      optimizedFeature = {
        ...optimizedFeature,
        geometry: {
          ...optimizedFeature.geometry,
          coordinates: optimizeCoordinates(
            optimizedFeature.geometry.coordinates,
            precision
          ),
        },
      };
    }

    return optimizedFeature;
  });

  return {
    ...geojson,
    features: optimizedFeatures,
  };
}

// Основная функция
function main() {
  const dataDir = path.join(__dirname, "../public/data");
  const outputDir = path.join(__dirname, "../public/data/optimized");

  // Создаем папку для оптимизированных файлов
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Читаем все GeoJSON файлы
  const files = fs
    .readdirSync(dataDir)
    .filter((file) => file.endsWith(".geojson"));

  files.forEach((file) => {
    const filePath = path.join(dataDir, file);
    const outputPath = path.join(outputDir, file);

    console.log(`Обрабатываю ${file}...`);

    try {
      const geojson = JSON.parse(fs.readFileSync(filePath, "utf8"));

      // Определяем настройки оптимизации в зависимости от размера файла
      const fileSize = fs.statSync(filePath).size;
      let options = { precision: 6, simplify: false };

      if (fileSize > 1024 * 1024) {
        // Больше 1MB
        options = { precision: 5, simplify: true, tolerance: 0.0001 };
      } else if (fileSize > 500 * 1024) {
        // Больше 500KB
        options = { precision: 6, simplify: true, tolerance: 0.00005 };
      }

      const optimized = optimizeGeoJSON(geojson, options);

      // Сохраняем оптимизированный файл
      fs.writeFileSync(outputPath, JSON.stringify(optimized));

      const originalSize = fs.statSync(filePath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      const reduction = (
        ((originalSize - optimizedSize) / originalSize) *
        100
      ).toFixed(1);

      console.log(
        `  ✓ ${file}: ${(originalSize / 1024).toFixed(1)}KB → ${(
          optimizedSize / 1024
        ).toFixed(1)}KB (${reduction}% уменьшение)`
      );
    } catch (error) {
      console.error(`  ✗ Ошибка при обработке ${file}:`, error.message);
    }
  });

  console.log("\nОптимизация завершена!");
}

main();
