const fs = require('fs');

// Функция для обработки текста в HTML
function processTextToHTML(rawText) {
  // Убираем лишние пробелы и переносы строк
  let cleanedText = rawText
    .replace(/\r\n/g, '\n') // Нормализуем переносы строк
    .replace(/\n\s*\n/g, '\n\n') // Убираем множественные пустые строки
    .trim();
  
  // Разбиваем на абзацы (двойные переносы строк)
  let paragraphs = cleanedText.split('\n\n');
  
  // Форматируем каждый абзац в тег <p>
  let htmlParagraphs = paragraphs.map(paragraph => {
    // Убираем лишние пробелы внутри абзаца
    let cleanParagraph = paragraph.replace(/\n/g, ' ').trim();
    
    // Пропускаем пустые абзацы
    if (!cleanParagraph) return '';
    
    // Проверяем, является ли это заголовком (начинается с цифры)
    if (/^\d+\.?\s/.test(cleanParagraph)) {
      return `<h3>${cleanParagraph}</h3>`;
    }
    
    // Проверяем, является ли это подзаголовком (начинается с цифры.цифры)
    if (/^\d+\.\d+\s/.test(cleanParagraph)) {
      return `<h4>${cleanParagraph}</h4>`;
    }
    
    // Проверяем, является ли это главным заголовком (без цифр в начале)
    if (/^[А-ЯЁ][^0-9]*$/.test(cleanParagraph) && cleanParagraph.length < 100) {
      return `<h2>${cleanParagraph}</h2>`;
    }
    
    return `<p>${cleanParagraph}</p>`;
  }).filter(p => p !== ''); // Убираем пустые абзацы
  
  // Объединяем в HTML документ
  return htmlParagraphs.join('\n\n');
}

// Читаем файл
const filePath = './public/data/part_1.txt';
const content = fs.readFileSync(filePath, 'utf8');

// Обрабатываем текст
const htmlContent = processTextToHTML(content);

// Сохраняем результат
const outputPath = './public/data/processed_content.html';
fs.writeFileSync(outputPath, htmlContent, 'utf8');

console.log(`✅ Файл обработан и сохранен как: ${outputPath}`);
console.log(`📄 Количество абзацев: ${htmlContent.split('<p>').length - 1}`);
console.log(`📄 Количество заголовков: ${htmlContent.split('<h').length - 1}`);

// Показываем первые несколько абзацев для проверки
console.log('\n📝 Первые 5 элементов:');
const elements = htmlContent.split('\n\n').slice(0, 5);
elements.forEach((element, index) => {
  console.log(`\n${index + 1}. ${element}`);
});
