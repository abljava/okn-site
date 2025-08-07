import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import BgOverlay from "../components/BgOverlay";
import MapComponent from "../components/MapComponent";
import MapWithObjects from "../components/MapWithObjects";
import FullscreenMapPortal from "../components/FullscreenMapPortal";
import OKNBorders from "../layers/OKNBorders";
// import { Numbers } from "../components/Numbers";
import OKNHistorical from "../layers/OKNHistorical";
import OKNSoviet from "../layers/OKNSoviet";
import BordersDeveloped from "../layers/BordersDeveloped";
import BordersApproved from "../layers/BordersApproved";
import OKNRegional from "../layers/OKNRegional";
import OKNFederal from "../layers/OKNFederal";
import OKNIdentified from "../layers/OKNIdentified";
import CityLanscape from "../layers/CityLanscape";
import NatureLandscape from "../layers/NatureLandscape";
import ViewSightsTracks from "../layers/ViewSightsTracks";
import BordersSites from "../layers/BordersSites";
import HistoricalPlan from "../layers/HistoricalPlan";

function ProtectedObjects() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <main className="relative  z-10 px-5 2xl:text-2xl overflow-hidden">
        <BgOverlay bgClass="bg-[url('/bgs/bg-protected-mobile.png')] md:bg-[url('/bgs/bg-protected-tablet.png')] lg:bg-[url('/bgs/bg-protected.png')] 2xl:bg-[position:center_-150px]" />
        <img
          src="/bgs/bg-main.png"
          alt="фоновое изображение"
          className="absolute -z-20 top-32 md:top-36 left-0 w-full h-full object-cover"
        />
        <div className="md:max-w-[1440px] mx-auto">
          <Breadcrumbs />
          <section className="flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
            <div className="hidden md:block"></div>
            {/* Заголовок и подзаголовок */}
            <div className="relative z-10 grid pt-8 md:pr-44 md:pl-5 md:pt-10 xl:pt-12 xl:pr-0 xl:pl-[100px] md:border-l-2 md:border-white/40 ">
              <h1 className="text-white text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
                Достопримечательное место "Исторический центр города
                Владивостока"
              </h1>
              <div className="justify-self-end  md:hidden">
                <img src="/images/photo-12.png" alt="photo" className="w-32" />
              </div>
            </div>
          </section>
          <section className="relative flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
            {/* <img
              src="/bgs/bg-1.png"
              alt="фоновое изображение"
              className="absolute -z-10 -top-20 md:top-0 lg:-top-10 xl:-top-32 2xl:-top-40 md:scale-y-90 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
            /> */}
            <div className="hidden justify-self-end pt-8 md:pt-28 md:block">
              <img
                src="/images/photo-12.png"
                alt="photo"
                className="w-32 lg:w-[360px]"
              />
            </div>
            <div className="relative z-10 grid -top-5 md:pr-44 md:pl-5 md:pt-24 lg:pt-32 xl:pr-0 xl:pl-[100px] md:border-l-2 md:border-white/40 ">
              <h1 className="text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
                Предмет охраны Достопримечательного места
              </h1>
            </div>
          </section>

          {/* Карта */}
          {/* <div className="relative -z-20 -top-16 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"> */}
          {/* <img
              src="/maps/map-objects.png"
              alt="карта"
              className="relative top-0 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
            /> */}
          {/* </div> */}
        </div>
        <div
          className="relative -z-20 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
          // onClick={() => setIsFullscreen(true)}
        >
          <MapWithObjects>
            <OKNBorders layerName="Границы достопримечательного места" />
            <OKNFederal
              layerName="Объекты культурного наследия федерального значения"
              layerColor="#ea66c9"
            />
            <OKNRegional
              layerName="Объекты культурного наследия регионального значения"
              layerColor="#f85e5b"
            />
            <OKNIdentified
              layerName="Выявленные объекты культурного наследия"
              layerColor="#ffb266"
            />
            <BordersApproved
              layerName="Утвержденные границы ОКН"
              layerColor="#ff0000"
            />
            <BordersDeveloped
              layerName="Разработанные границы ОКН"
              layerColor="#0000ff"
            />
            <OKNHistorical
              layerName="Ценная историческая застройка конца XIX - начала XX вв."
              layerColor="#a866ea"
            />
            <OKNSoviet layerName="Ценная историческая застройка 1930-1960 гг." layerColor="#75eb73"/>
            <CityLanscape layerName="Ценный городской ландшафт" layerColor="#80d4a2"/>
            <NatureLandscape layerName="Природный ландшафт" layerColor="#cbe8bc"/>
            <ViewSightsTracks layerName="Трассы видовых раскрытий" layerColor="#dd3700 "/>
            <BordersSites layerName="Границы земельных участков" layerColor="#2776bb "/>
            <HistoricalPlan layerName="Историческая планировочная структура" layerColor="#acacac "/>
          </MapWithObjects>
        </div>
        {isFullscreen && (
          <FullscreenMapPortal onClose={() => setIsFullscreen(false)}>
            <MapComponent />
          </FullscreenMapPortal>
        )}
      </main>
    </>
  );
}

export default ProtectedObjects;
