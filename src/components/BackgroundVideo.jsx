const BackgroundVideo = ({ src, className = "" }) => {
  // Функция для обработки ошибок загрузки
  const handleVideoError = (e) => {
    console.error("Ошибка загрузки фонового видео:", e);
    // Можно добавить fallback на статичное изображение
    const video = e.target;
    const fallbackImage = src.replace(".webm", ".jpg");
    if (fallbackImage) {
      video.style.display = "none";
      // Создаем фоновое изображение как fallback
      const bgImage = document.createElement("div");
      bgImage.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${fallbackImage});
        background-size: cover;
        background-position: center;
        z-index: -10;
      `;
      video.parentNode.appendChild(bgImage);
    }
  };

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`fixed top-0 left-0 w-full h-full object-cover -z-10 ${className}`}
        onError={handleVideoError}
        // Дополнительные атрибуты для лучшей производительности
        disablePictureInPicture
        disableRemotePlayback
      >
        {/* Основной WebM источник */}
        <source src={src} type="video/webm" />
        {/* Резервный MP4 источник для совместимости */}
        <source src={src.replace(".webm", ".mp4")} type="video/mp4" />
        Ваш браузер не поддерживает видео фон.
      </video>

      {/* Наложение */}
      <div className="fixed inset-0 bg-[#7e8fa175] pointer-events-none -z-5"></div>
    </>
  );
};

export default BackgroundVideo;
