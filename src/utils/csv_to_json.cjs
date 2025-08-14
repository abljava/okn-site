const fs = require('fs');
const path = require('path');

// Читаем исходный JSON
const jsonPath = 'src/data/objects_protected.json';
const objects = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Получаем список всех файлов в public/photo
const photoDir = 'public/photo';
const photoFiles = fs.readdirSync(photoDir);

const result = objects.map(obj => {
  const id = obj.id;
  // Ищем все фото, начинающиеся с id.
  const images = photoFiles.filter(f => f.startsWith(id + '.') || f.startsWith(id + '_'));
  return {
    ...obj,
    image: images.length === 0 ? undefined : images.map(f => `${f}`)
  };
});

fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2), 'utf8');
console.log('Готово! Сохранено в', jsonPath);
