const BgOverlay = ({ bgClass }) => (
  <div
    className={`fixed top-0 left-0 w-full h-full -z-10 bg-contain bg-no-repeat bg-top ${bgClass}`}
  ></div>
);

export default BgOverlay;

//    <div className="relative z-10 min-h-screen w-full bg-[url('/bgs/bg-history-mobile.png')] md:bg-[url('/bgs/bg-history-tablet.png')] lg:bg-[url('/bgs/bg-history.png')] 2xl:bg-[position:center_-150px] bg-contain bg-no-repeat bg-top">
