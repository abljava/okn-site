const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/sync').parse;

// Путь к CSV-файлу и папке с фото
const csvPath = path.join(__dirname, '../data/objects.csv'); // путь к вашему CSV
const photosDir = path.join(__dirname, '../../public/photo'); // путь к папке с фото

// Чтение CSV-файла
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const records = parse(csvContent, { delimiter: ';', trim: true });

// Получение списка фото
const photos = fs.existsSync(photosDir) ? fs.readdirSync(photosDir) : [];

// Фильтруем и формируем массив объектов
const objects = records
  .filter(row => row.length === 3 && row[0].trim()) // только строки с 3 колонками и номером
  .map((row, idx) => {
    // Очищаем номер: убираем только точку и пробелы после числа, буквы оставляем
    // Например: '1.' -> '1', '2а.' -> '2а', '3.   ' -> '3', '4б. ' -> '4б'
    let number = row[0].trim();
    number = number.replace(/\.$/, '').trim();
    const description = row[1].trim();
    const address = row[2].trim();
    // Ищем фото: 8.webp, 8_2.webp, 8_3.webp и т.д.
    const pattern = new RegExp(`^${number}(?:_\\d+)?\\.webp$`, 'i');
    const matchedPhotos = photos.filter(f => pattern.test(f));
    return {
      id: idx + 1,
      number,
      description,
      address,
      image: matchedPhotos.length ? matchedPhotos : null
    };
  });

// Сохраняем результат в файл (например, objectsData.json)
const outPath = path.join(__dirname, '../../src/data/objectsData.json');
fs.writeFileSync(outPath, JSON.stringify(objects, null, 2), 'utf-8');

console.log('Готово! Массив данных сохранён в', outPath); 