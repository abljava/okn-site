import React, { useState, useEffect, useRef } from "react";

function Circle() {
  const outerPhotos = Array(6).fill({}); // внешний круг — 6 фото
  const innerPhotos = Array(7).fill({}); // внутренний круг — 7 фото

  const containerRef = useRef(null); // Ссылка на контейнер
  const baseSize = 335; // Базовый размер, для которого рассчитаны радиусы и позиции

  const [containerWidth, setContainerWidth] = useState(baseSize);

  // Обновление размеров контейнера при монтировании и изменении размера окна
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  // Пропорциональный расчет центра и радиусов
  const scale = containerWidth / baseSize;
  const scaledCenterX = containerWidth / 2;
  // Используем scaledCenterX для scaledCenterY для сохранения пропорций круговой диаграммы
  const scaledCenterY = containerWidth / 2;

  const scaledOuterRadius = 130 * scale;
  const scaledInnerRadius = 70 * scale;
  const scaledInnerCircleGap = 8 * scale;

  // Расчет координат центров внешних кругов
  const outerCircleCenters = outerPhotos.map((_, idx) => {
    const angle = (360 / outerPhotos.length) * idx - 180; // Угол
    const rad = (angle * Math.PI) / 180; // Угол в радианах
    const x = scaledCenterX + scaledOuterRadius * Math.cos(rad);
    const y = scaledCenterY + scaledOuterRadius * Math.sin(rad);
    return { x, y };
  });

  // Расчет координат центров внутренних кругов
  const innerCircleCenters = innerPhotos.map((_, idx) => {
    const angle = (360 / innerPhotos.length) * idx - 90; // Угол
    const rad = (angle * Math.PI) / 180; // Угол в радианах
    const x = scaledCenterX + scaledInnerRadius * Math.cos(rad);
    const y = scaledCenterY + scaledInnerRadius * Math.sin(rad);
    return { x, y };
  });

  // Вычисление необходимой высоты контейнера на основе положения самых нижних кругов
  const allCircleCenters = [...outerCircleCenters, ...innerCircleCenters];
  const maxBottom = allCircleCenters.reduce((max, center) => {
    // Учитываем радиус изображения (половина ширины) для определения нижнего края
    const imageSize =
      center.y > scaledCenterY
        ? scaledOuterRadius > scaledInnerRadius
          ? 64 * scale
          : 48 * scale
        : scaledOuterRadius > scaledInnerRadius
        ? 64 * scale
        : 48 * scale; // упрощенно: нужно определить размер изображения по центру
    // Более точный расчет: найти соответствующее изображение и его размер
    const currentImageSize =
      center.y > scaledCenterY
        ? outerCircleCenters.find((c) => c === center)
          ? 64 * scale
          : 48 * scale
        : outerCircleCenters.find((c) => c === center)
        ? 64 * scale
        : 48 * scale;
    // еще точнее: проверка на вхождение в оба массива и выбор размера
    let size = 0;
    if (outerCircleCenters.includes(center)) size = 64 * scale;
    else if (innerCircleCenters.includes(center)) size = 48 * scale;

    return Math.max(max, center.y + size / 2); // Максимальная Y координата + половина высоты изображения
  }, 0);

  // Добавляем небольшой запас
  const requiredHeight = maxBottom; // Можно добавить небольшой запас если необходимо (+ 20)

  return (
    // Круги с фото
    <div
      className="relative w-full mx-auto mt-12" // w-full для растягивания по родителю, h убираем
      style={{ height: `${requiredHeight}px` }} // Устанавливаем вычисленную высоту
      ref={containerRef}
    >
      {/* SVG для линий и кругов */}
      {/* SVG должен использовать фактические размеры контейнера для корректного рисования */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${containerWidth} ${requiredHeight}`}
        style={{ zIndex: 0 }}
      >
        {/* Круг, проходящий через центры внешних кругов */}
        <circle
          cx={scaledCenterX}
          cy={scaledCenterY}
          r={scaledOuterRadius}
          stroke="white"
          strokeWidth="1"
          fill="none"
        />

        {/* Круг, проходящий через центры внутренних кругов */}
        <circle
          cx={scaledCenterX}
          cy={scaledCenterY}
          r={scaledInnerRadius}
          stroke="white"
          strokeWidth="1"
          fill="none"
        />

        {/* Второй круг для внутренних кругов (больший) */}
        <circle
          cx={scaledCenterX}
          cy={scaledCenterY}
          r={scaledInnerRadius + scaledInnerCircleGap}
          stroke="white"
          strokeWidth="1"
          fill="none"
        />

        {/* Линии, соединяющие центры внешних кругов */}
        {outerCircleCenters.map((center, index) => {
          // Определяем координаты следующего центра (для замыкания фигуры, если это последний круг)
          const nextCenter =
            outerCircleCenters[(index + 1) % outerCircleCenters.length];
          return (
            <line
              key={index}
              x1={center.x}
              y1={center.y}
              x2={nextCenter.x}
              y2={nextCenter.y}
              stroke="white"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      {/* Внешний круг */}
      {outerPhotos.map((_, idx) => {
        const center = outerCircleCenters[idx];
        const scaledImageSizeOuter = 64 * scale; // w-16 = 64px
        return (
          <div
            key={"outer-" + idx}
            className="absolute group"
            style={{
              left: `${center.x}px`,
              top: `${center.y}px`,
              transform: "translate(-50%, -50%)",
              width: `${scaledImageSizeOuter}px`,
              height: `${scaledImageSizeOuter}px`,
            }}
          >
            <img
              src="/images/authors.png"
              alt="photo"
              className="absolute inset-0 w-full h-full rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-blueGray opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-[10px] md:text-sm xl:text-2xl w-full">
                Имя Сотрудника
              </p>
            </div>
          </div>
        );
      })}
      {/* Внутренний круг */}
      {innerPhotos.map((_, idx) => {
        const center = innerCircleCenters[idx];
        const scaledImageSizeInner = 48 * scale; // w-12 = 48px
        return (
          <div
            key={"inner-" + idx}
            className="absolute group"
            style={{
              left: `${center.x}px`,
              top: `${center.y}px`,
              transform: "translate(-50%, -50%)",
              width: `${scaledImageSizeInner}px`,
              height: `${scaledImageSizeInner}px`,
            }}
          >
            <img
              src="/images/authors.png"
              alt="photo"
              className="absolute inset-0 w-full h-full rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-blueGray opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center text-[8px] md:text-xs xl:text-lg w-full">
                Имя Сотрудника
              </p>
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
}

export default Circle;
