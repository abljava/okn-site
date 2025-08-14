const fs = require('fs');
const path = require('path');

// Функция для очистки атрибутов объекта
function cleanProperties(properties) {
  return {
    fid: properties.fid,
    Layer: properties.Layer,
    Text: properties.Text
  };
}

// Функция для обработки GeoJSON файла
function cleanGeoJSONAttributes(inputPath, outputPath) {
  try {
    console.log(`Читаю файл: ${inputPath}`);
    
    // Читаем исходный файл
    const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
    
    console.log(`Найдено объектов: ${data.features.length}`);
    
    // Очищаем атрибуты каждого объекта
    data.features = data.features.map(feature => ({
      ...feature,
      properties: cleanProperties(feature.properties)
    }));
    
    // Создаем директорию для выходного файла, если её нет
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Записываем очищенный файл
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf8');
    
    console.log(`Файл успешно обработан и сохранен: ${outputPath}`);
    
  } catch (error) {
    console.error('Ошибка при обработке файла:', error.message);
  }
}

// Пути к файлам
const inputFile = 'public/data/numbered/2_okn_federal.geojson';
const outputFile = 'public/data/numbered/2_okn_federal_cleaned.geojson';

// Запускаем обработку
cleanGeoJSONAttributes(inputFile, outputFile);
