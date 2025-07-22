const fs = require('fs');
const parse = require('csv-parse/sync').parse;
const path = require('path');

const csvPath = 'src/data/objects_protected.csv';
const photoDir = 'public/photo';
const outputPath = 'src/data/objects_protected.json';

const csv = fs.readFileSync(csvPath, 'utf8');
const records = parse(csv, {
  columns: false, // нет заголовков
  skip_empty_lines: true
});

const photoFiles = fs.readdirSync(photoDir);

const result = records.map((row, idx) => {
  const id = String(row[0]);
  // Ищем все фото, начинающиеся с id или id_
  const images = photoFiles.filter(f => f.startsWith(id + '.') || f.startsWith(id + '_'));
  return {
    id,
    number: id,
    description: row[1],
    address: row[2],
    image: images.length > 0 ? images : undefined
  };
});

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
console.log('Готово! Сохранено в', outputPath); 