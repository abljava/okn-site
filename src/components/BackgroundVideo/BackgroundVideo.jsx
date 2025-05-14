const BackgroundVideo = ({ src, className = "" }) => (
  <>
    <video
      autoPlay
      muted
      loop
      playsInline
      className={`fixed top-0 left-0 w-full h-full object-cover -z-10 ${className}`}
    >
      <source src={src} type="video/mp4" />
      Ваш браузер не поддерживает видео фон.
    </video>

    <div className="fixed inset-0 bg-[#7e8fa175] pointer-events-none -z-5"></div>
  </>
);

export default BackgroundVideo;
