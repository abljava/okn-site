import fs from 'fs';

// Функция для преобразования координат из DMS в десятичные градусы
function dmsToDecimal(dmsString) {
    // Убираем все пробелы и заменяем запятую на точку
    let clean = dmsString.replace(/\s+/g, '').replace(',', '.');
    
    // Извлекаем градусы, минуты и секунды
    const match = clean.match(/(\d+)°(\d+)'([\d.]+)"/);
    if (!match) {
        console.error('Неверный формат координат:', dmsString);
        return null;
    }
    
    const degrees = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const seconds = parseFloat(match[3]);
    
    // Преобразуем в десятичные градусы
    const decimal = degrees + (minutes / 60) + (seconds / 3600);
    
    return decimal;
}

// Функция для определения примерного местоположения по координатам
function getLocationInfo(lat, lng) {
    // Владивосток находится примерно в районе 43.1155°N, 131.8855°E
    // Но ваши координаты показывают 39°N, 115°E - это район Пекина!
    
    if (lat > 39 && lat < 40 && lng > 115 && lng < 117) {
        return "Район Пекина, Китай";
    } else if (lat > 43 && lat < 44 && lng > 131 && lng < 133) {
        return "Район Владивостока, Россия";
    } else {
        return "Неизвестная территория";
    }
}

// Читаем исходный файл
const inputFile = 'src/data/coords.js';

try {
    const content = fs.readFileSync(inputFile, 'utf8');
    
    // Извлекаем координаты из массива
    const lines = content.split('\n');
    const objects = [];
    let currentObject = [];
    let objectIndex = 0;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Пропускаем служебные строки
        if (line === 'const coords = [' || line === ']') {
            continue;
        }
        
        // Если строка содержит координаты
        if (line.includes('°') && line.includes("'")) {
            // Разделяем пары координат по табуляции
            const parts = line.split('\t');
            if (parts.length === 2) {
                const lon = dmsToDecimal(parts[0]);
                const lat = dmsToDecimal(parts[1]);
                
                if (lon !== null && lat !== null) {
                    currentObject.push([lon, lat]);
                }
            }
        } else if (line === '' && currentObject.length > 0) {
            // Пустая строка означает конец объекта
            objects.push({
                index: objectIndex + 1,
                coordinates: [...currentObject],
                center: calculateCenter(currentObject)
            });
            objectIndex++;
            currentObject = [];
        }
    }
    
    // Добавляем последний объект, если он есть
    if (currentObject.length > 0) {
        objects.push({
            index: objectIndex + 1,
            coordinates: [...currentObject],
            center: calculateCenter(currentObject)
        });
    }
    
    console.log(`\n=== АНАЛИЗ ТЕРРИТОРИАЛЬНОГО РАСПОЛОЖЕНИЯ ОБЪЕКТОВ ===\n`);
    
    objects.forEach((obj, index) => {
        const center = obj.center;
        const location = getLocationInfo(center[1], center[0]); // lat, lng
        
        console.log(`Объект #${obj.index}:`);
        console.log(`  Координаты центра: ${center[1].toFixed(6)}°N, ${center[0].toFixed(6)}°E`);
        console.log(`  Территориальное расположение: ${location}`);
        console.log(`  Количество точек: ${obj.coordinates.length}`);
        
        // Показываем границы объекта
        const bounds = calculateBounds(obj.coordinates);
        console.log(`  Границы: ${bounds.minLat.toFixed(6)}°N - ${bounds.maxLat.toFixed(6)}°N, ${bounds.minLng.toFixed(6)}°E - ${bounds.maxLng.toFixed(6)}°E`);
        console.log(`  Размер: ~${calculateDistance(bounds).toFixed(2)} км`);
        
        // Показываем первые и последние координаты
        if (obj.coordinates.length > 0) {
            const first = obj.coordinates[0];
            const last = obj.coordinates[obj.coordinates.length - 1];
            console.log(`  Первая точка: ${first[1].toFixed(6)}°N, ${first[0].toFixed(6)}°E`);
            console.log(`  Последняя точка: ${last[1].toFixed(6)}°N, ${last[0].toFixed(6)}°E`);
        }
        console.log('');
    });
    
    // Общий анализ
    console.log(`\n=== ОБЩИЙ АНАЛИЗ ===`);
    console.log(`Всего объектов: ${objects.length}`);
    
    const allCoords = objects.flatMap(obj => obj.coordinates);
    const overallCenter = calculateCenter(allCoords);
    const overallLocation = getLocationInfo(overallCenter[1], overallCenter[0]);
    
    console.log(`Общий центр всех объектов: ${overallCenter[1].toFixed(6)}°N, ${overallCenter[0].toFixed(6)}°E`);
    console.log(`Общая территория: ${overallLocation}`);
    
    // Проверяем, все ли объекты в одной области
    const locations = objects.map(obj => getLocationInfo(obj.center[1], obj.center[0]));
    const uniqueLocations = [...new Set(locations)];
    
    if (uniqueLocations.length === 1) {
        console.log(`Все объекты расположены в одной области: ${uniqueLocations[0]}`);
    } else {
        console.log(`Объекты расположены в разных областях:`);
        uniqueLocations.forEach(location => {
            const count = locations.filter(loc => loc === location).length;
            console.log(`  ${location}: ${count} объектов`);
        });
    }
    
    // Анализ расстояний между объектами
    if (objects.length > 1) {
        console.log(`\n=== РАССТОЯНИЯ МЕЖДУ ОБЪЕКТАМИ ===`);
        for (let i = 0; i < objects.length; i++) {
            for (let j = i + 1; j < objects.length; j++) {
                const distance = calculateDistanceBetweenPoints(
                    objects[i].center[1], objects[i].center[0],
                    objects[j].center[1], objects[j].center[0]
                );
                console.log(`Объект #${objects[i].index} - Объект #${objects[j].index}: ~${distance.toFixed(2)} км`);
            }
        }
    }
    
    console.log(`\n=== ВАЖНОЕ ЗАМЕЧАНИЕ ===`);
    console.log(`Координаты указывают на район Пекина (39°N, 115°E), а не на Владивосток!`);
    console.log(`Возможно, координаты были взяты из другого источника или есть ошибка в данных.`);
    console.log(`Для Владивостока ожидались бы координаты примерно 43°N, 132°E.`);
    
} catch (error) {
    console.error('Ошибка при анализе файла:', error.message);
}

// Вспомогательные функции
function calculateCenter(coordinates) {
    const avgLng = coordinates.reduce((sum, coord) => sum + coord[0], 0) / coordinates.length;
    const avgLat = coordinates.reduce((sum, coord) => sum + coord[1], 0) / coordinates.length;
    return [avgLng, avgLat];
}

function calculateBounds(coordinates) {
    const lngs = coordinates.map(coord => coord[0]);
    const lats = coordinates.map(coord => coord[1]);
    
    return {
        minLng: Math.min(...lngs),
        maxLng: Math.max(...lngs),
        minLat: Math.min(...lats),
        maxLat: Math.max(...lats)
    };
}

function calculateDistance(bounds) {
    // Примерный расчет расстояния в километрах
    const latDiff = bounds.maxLat - bounds.minLat;
    const lngDiff = bounds.maxLng - bounds.minLng;
    
    // 1 градус широты ≈ 111 км
    // 1 градус долготы ≈ 111 * cos(широта) км
    const latKm = latDiff * 111;
    const lngKm = lngDiff * 111 * Math.cos((bounds.minLat + bounds.maxLat) / 2 * Math.PI / 180);
    
    return Math.sqrt(latKm * latKm + lngKm * lngKm);
}

function calculateDistanceBetweenPoints(lat1, lng1, lat2, lng2) {
    // Расчет расстояния между двумя точками по формуле гаверсинуса
    const R = 6371; // Радиус Земли в км
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
} 