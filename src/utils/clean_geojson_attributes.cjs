const fs = require('fs');
const path = require('path');

// Функция для очистки атрибутов объекта
function cleanProperties(properties, attributesToKeep = ['fid', 'Layer', 'Text']) {
  const cleaned = {};
  attributesToKeep.forEach(attr => {
    if (properties.hasOwnProperty(attr)) {
      cleaned[attr] = properties[attr];
    }
  });
  return cleaned;
}

// Функция для обработки GeoJSON файла
function cleanGeoJSONAttributes(inputPath, outputPath, attributesToKeep = ['fid', 'Layer', 'Text']) {
  try {
    console.log(`Читаю файл: ${inputPath}`);
    
    // Проверяем существование входного файла
    if (!fs.existsSync(inputPath)) {
      throw new Error(`Файл не найден: ${inputPath}`);
    }
    
    // Читаем исходный файл
    const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
    
    if (!data.features || !Array.isArray(data.features)) {
      throw new Error('Файл не является корректным GeoJSON FeatureCollection');
    }
    
    console.log(`Найдено объектов: ${data.features.length}`);
    console.log(`Оставляем атрибуты: ${attributesToKeep.join(', ')}`);
    
    // Очищаем атрибуты каждого объекта
    data.features = data.features.map(feature => ({
      ...feature,
      properties: cleanProperties(feature.properties, attributesToKeep)
    }));
    
    // Создаем директорию для выходного файла, если её нет
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Записываем очищенный файл
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf8');
    
    console.log(`Файл успешно обработан и сохранен: ${outputPath}`);
    
    // Показываем статистику
    const originalSize = fs.statSync(inputPath).size;
    const cleanedSize = fs.statSync(outputPath).size;
    const reduction = ((originalSize - cleanedSize) / originalSize * 100).toFixed(1);
    
    console.log(`Размер файла уменьшился с ${(originalSize / 1024).toFixed(1)} КБ до ${(cleanedSize / 1024).toFixed(1)} КБ (уменьшение на ${reduction}%)`);
    
  } catch (error) {
    console.error('Ошибка при обработке файла:', error.message);
  }
}

// Функция для обработки всех файлов в директории
function processDirectory(inputDir, outputDir, attributesToKeep = ['fid', 'Layer', 'Text']) {
  try {
    if (!fs.existsSync(inputDir)) {
      throw new Error(`Директория не найдена: ${inputDir}`);
    }
    
    const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.geojson'));
    
    if (files.length === 0) {
      console.log(`GeoJSON файлы не найдены в директории: ${inputDir}`);
      return;
    }
    
    console.log(`Найдено ${files.length} GeoJSON файлов для обработки`);
    
    files.forEach(file => {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, file.replace('.geojson', '_cleaned.geojson'));
      
      console.log(`\nОбрабатываю: ${file}`);
      cleanGeoJSONAttributes(inputPath, outputPath, attributesToKeep);
    });
    
  } catch (error) {
    console.error('Ошибка при обработке директории:', error.message);
  }
}

// Примеры использования:

// 1. Обработка одного файла
// cleanGeoJSONAttributes('public/data/numbered/3_okn_regional.geojson', 'public/data/numbered/3_okn_regional_cleaned.geojson');

// 2. Обработка одного файла с пользовательскими атрибутами
// cleanGeoJSONAttributes('input.geojson', 'output.geojson', ['fid', 'name', 'type']);

// 3. Обработка всех файлов в директории
// processDirectory('public/data/numbered', 'public/data/cleaned');

// Запускаем обработку конкретного файла
const inputFile = 'public/data/numbered/3_okn_regional.geojson';
const outputFile = 'public/data/numbered/3_okn_regional_cleaned.geojson';

cleanGeoJSONAttributes(inputFile, outputFile);
