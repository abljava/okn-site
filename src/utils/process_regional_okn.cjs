const fs = require('fs');
const path = require('path');

// Пути к файлам
const inputGeojsonPath = 'public/data/init_with_numbers/2_okn_federal.geojson';
const outputGeojsonPath = 'public/data/numbered/okn_federal_dev.geojson';
const photoDir = 'public/photo-dev/vokn';

// Загрузка данных
console.log('Загружаем данные из', inputGeojsonPath);
const geojson = JSON.parse(fs.readFileSync(inputGeojsonPath, 'utf8'));

// Получаем список доступных фото
console.log('Сканируем папку с фото:', photoDir);
const availablePhotos = [];
try {
  const photoFiles = fs.readdirSync(photoDir);
  photoFiles.forEach(file => {
    if (file.endsWith('.webp')) {
      // Извлекаем номер из имени файла (например, "10.webp" -> "10")
      const number = file.replace('.webp', '');
      availablePhotos.push({
        number: number,
        filename: file,
        path: `/photo-dev/okn/${file}`
      });
    }
  });
  console.log('Найдено фото:', availablePhotos.length);
} catch (error) {
  console.error('Ошибка при чтении папки с фото:', error.message);
}

// Создаём быстрый поиск по номеру фото
const photosByNumber = {};
availablePhotos.forEach(photo => {
  photosByNumber[photo.number] = photo;
});

let matched = 0;
let processed = 0;

console.log('Обрабатываем объекты...');
for (const feature of geojson.features) {
  if (!feature.properties) continue;
  
  processed++;
  
  // Получаем номер из поля Text
  const featureNumber = feature.properties.Text;
  if (featureNumber === undefined || featureNumber === null) continue;
  
  const key = String(featureNumber).trim();
  
  // Ищем соответствующее фото
  const photo = photosByNumber[key];
  
  if (photo) {
    // Добавляем нужные поля
    feature.properties.id = parseInt(key) || 0;
    feature.properties.number = key;
    feature.properties.description = `Объект культурного наследия регионального значения №${key}`;
    feature.properties.address = feature.properties.address || 'Адрес не указан';
    
    // Добавляем путь к изображению
    feature.properties.image = [photo.path];
    
    matched++;
    
    if (matched % 100 === 0) {
      console.log(`Обработано: ${matched} совпадений из ${processed} объектов`);
    }
  }
}

console.log(`\nРезультат:`);
console.log(`Всего объектов: ${geojson.features.length}`);
console.log(`Обработано: ${processed}`);
console.log(`Найдено совпадений с фото: ${matched}`);

// Сохраняем результат
console.log('Сохраняем результат в', outputGeojsonPath);
fs.writeFileSync(outputGeojsonPath, JSON.stringify(geojson, null, 2));
console.log('Готово!');
