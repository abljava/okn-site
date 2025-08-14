const fs = require('fs');

// Пути к файлам
const jsonPath = 'src/data/objectsData.json';
const geojsonPath = 'public/data/numbered/3_okn_regional.geojson';

// Загрузка данных
const objectsData = JSON.parse(fs.readFileSync(jsonPath));
const geojson = JSON.parse(fs.readFileSync(geojsonPath));
console.log(geojson);

// Создаём быстрый поиск по номеру
const dataByNumber = {};
for (const obj of objectsData) {
  if (obj.number !== undefined && obj.number !== null) {
    dataByNumber[String(obj.number).trim()] = obj;
  }
}

let matched = 0;
for (const feature of geojson.features) {
  if (!feature.properties) continue;
  // Ищем совпадение по номеру (учитываем возможные типы и пробелы)
  const featureNumber = feature.properties.Text;
  if (featureNumber === undefined || featureNumber === null) continue;
  // const featureNumber = feature.properties.Number || feature.properties.number;
  // if (featureNumber === undefined || featureNumber === null) continue;
  const key = String(featureNumber).trim();
  const match = dataByNumber[key];
  if (match) {
    // Добавляем нужные поля
    feature.properties.id = match.id;
    feature.properties.number = match.number;
    feature.properties.description = match.description;
    feature.properties.address = match.address;
    // Исправляем путь к изображениям
    if (match.image && Array.isArray(match.image)) {
      feature.properties.image = match.image.map(img => `/photo/${img}`);
    } else if (match.image) {
      feature.properties.image = [`/photo/${match.image}`];
    }
    matched++;
  }
}

console.log('Совпавших объектов:', matched);
fs.writeFileSync(geojsonPath, JSON.stringify(geojson, null, 2));
console.log('Готово! Результат сохранён в', geojsonPath); 