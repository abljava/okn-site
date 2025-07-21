const fs = require('fs');

const file = 'src/data/objects_protected.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const result = data.map(obj => ({
  ...obj,
  number: obj.id
}));

fs.writeFileSync(file, JSON.stringify(result, null, 2), 'utf8');
console.log('Готово! Поле number добавлено ко всем объектам.');