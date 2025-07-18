const fs = require('fs');
const turf = require('@turf/turf');

// Пути к файлам
const pointsPath = 'public/test_data/number_00.geojson';
const polygonsPath = 'public/test_data/okn_00.geojson';
const outputPath = 'public/test_data/okn_00_with_number.geojson';

// Загрузка данных
const points = JSON.parse(fs.readFileSync(pointsPath));
const polygons = JSON.parse(fs.readFileSync(polygonsPath));

let totalMatches = 0;
let totalPoints = 0;

// Для каждого полигона ищем точки внутри
for (const polyFeature of polygons.features) {
  // Пропускаем не-полигоны
  if (!polyFeature.geometry || (polyFeature.geometry.type !== 'Polygon' && polyFeature.geometry.type !== 'MultiPolygon')) {
    continue;
  }
  const numbers = [];
  for (const ptFeature of points.features) {
    if (!ptFeature.geometry || ptFeature.geometry.type !== 'Point') continue;
    if (turf.booleanPointInPolygon(ptFeature, polyFeature)) {
      if (ptFeature.properties && ptFeature.properties.text) {
        numbers.push(ptFeature.properties.text);
        totalPoints++;
        // Выводим информацию о совпавшей точке и полигоне
        console.log('Точка', ptFeature.properties.text, 'попала в полигон с id:', polyFeature.properties && polyFeature.properties.id);
      }
    }
  }
  if (numbers.length > 0) {
    polyFeature.properties = polyFeature.properties || {};
    polyFeature.properties.number = numbers.join(', ');
    totalMatches++;
  }
}

console.log('Число полигонов с совпавшими точками:', totalMatches);
console.log('Всего совпавших точек:', totalPoints);

// Сохраняем результат
fs.writeFileSync(outputPath, JSON.stringify(polygons, null, 2));

console.log('Готово! Результат сохранён в', outputPath); 