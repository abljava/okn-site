# Скрипт для очистки атрибутов GeoJSON

Этот скрипт предназначен для удаления лишних атрибутов из GeoJSON файлов, оставляя только необходимые поля.

## Возможности

- Очистка атрибутов в одном GeoJSON файле
- Обработка всех GeoJSON файлов в директории
- Настраиваемый список атрибутов для сохранения
- Статистика по уменьшению размера файла
- Проверка корректности входных данных

## Использование

### 1. Обработка одного файла

```javascript
const { cleanGeoJSONAttributes } = require('./clean_geojson_attributes.cjs');

// Оставить только fid, Layer, Text (по умолчанию)
cleanGeoJSONAttributes('input.geojson', 'output.geojson');

// Оставить пользовательские атрибуты
cleanGeoJSONAttributes('input.geojson', 'output.geojson', ['fid', 'name', 'type']);
```

### 2. Обработка всех файлов в директории

```javascript
const { processDirectory } = require('./clean_geojson_attributes.cjs');

// Обработать все .geojson файлы в директории
processDirectory('input_dir', 'output_dir');

// С пользовательскими атрибутами
processDirectory('input_dir', 'output_dir', ['fid', 'name', 'type']);
```

### 3. Запуск из командной строки

```bash
# Обработка файла с атрибутами по умолчанию
node clean_geojson_attributes.cjs

# Для обработки других файлов отредактируйте скрипт
```

## Примеры

### Обработка файла 3_okn_regional.geojson

```bash
node clean_attributes.cjs
```

Результат:
- Входной файл: `public/data/numbered/3_okn_regional.geojson` (1070.2 КБ)
- Выходной файл: `public/data/numbered/3_okn_regional_cleaned.geojson` (758.8 КБ)
- Уменьшение размера: 29.1%

### До и после очистки

**До очистки:**
```json
{
  "type": "Feature",
  "properties": {
    "fid": 1,
    "Layer": "LINES",
    "PaperSpace": null,
    "SubClasses": null,
    "Linetype": null,
    "EntityHandle": null,
    "Text": "86",
    "ogr_style": "PEN(c:#000000)",
    "font": null,
    "angle": null,
    "size": null,
    "size_u": null,
    "anchor": null,
    "color": "#000000",
    "underline": null,
    "plaintext": null,
    "fcolor": null,
    "flnum": null,
    "bold": null,
    "italic": null,
    "dx": null,
    "dx_u": null,
    "dy": null,
    "dy_u": null
  },
  "geometry": { ... }
}
```

**После очистки:**
```json
{
  "type": "Feature",
  "properties": {
    "fid": 1,
    "Layer": "LINES",
    "Text": "86"
  },
  "geometry": { ... }
}
```

## Файлы

- `clean_attributes.cjs` - Простой скрипт для обработки одного файла
- `clean_geojson_attributes.cjs` - Универсальный скрипт с дополнительными возможностями

## Требования

- Node.js версии 14 или выше
- Файлы должны быть в формате GeoJSON FeatureCollection

## Обработка ошибок

Скрипт включает проверки:
- Существование входного файла
- Корректность формата GeoJSON
- Наличие директорий для выходных файлов
