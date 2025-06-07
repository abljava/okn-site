const BgOverlay = ({ children, bgClass }) => (
  <div className="relative min-h-screen w-full">
    {/* Фон-оверлей, который перекрывает всё содержимое */}
    <div className={`pointer-events-none absolute inset-0 z-20 min-h-screen w-full  bg-contain bg-no-repeat bg-top ${bgClass}`}></div>
    <div className="relative z-30">{children}</div>
  </div>
);

export default BgOverlay;

//    <div className="relative z-10 min-h-screen w-full bg-[url('/bgs/bg-history-mobile.png')] md:bg-[url('/bgs/bg-history-tablet.png')] lg:bg-[url('/bgs/bg-history.png')] 2xl:bg-[position:center_-150px] bg-contain bg-no-repeat bg-top">