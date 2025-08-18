import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import BgOverlay from "../components/BgOverlay";
import MapComponent from "../components/MapComponent";
import MapWithObjects from "../components/MapWithObjects";
import FullscreenMapPortal from "../components/FullscreenMapPortal";
import OKNBorders from "../layers/OKNBorders";
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
        {/* <BgOverlay bgClass="bg-[url('/bgs/bg-protected-mobile.png')] md:bg-[url('/bgs/bg-protected-tablet.png')] lg:bg-[url('/bgs/bg-protected.png')] 2xl:bg-[position:center_-150px]" /> */}
        <div className="fixed -z-20 top-0 left-0 w-full h-full before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-30">
          <img
            src="/bgs/bg-main.png"
            alt="фоновое изображение"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:max-w-[1440px] mx-auto">
          <Breadcrumbs />
          <section className="!hidden flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
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
            <div className="hidden justify-self-end pt-8 md:pt-0 md:block">
              <img
                src="/images/photo-12.png"
                alt="photo"
                className="w-32 lg:w-[300px]"
              />
            </div>
            <div className="relative z-10 grid pb-5 md:pr-44 md:pl-5 md:py-5 xl:pr-0 xl:pl-[100px] md:border-l-2 md:border-white/40 ">
              <h1 className="text-white text-3xl/8 md:text-3xl/[1.1] lg:text-5xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
                Предмет охраны Достопримечательного места
              </h1>
            </div>
          </section>
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
            <BordersSites
              layerName="Границы земельных участков"
              layerColor="#2776bb "
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
            <OKNSoviet
              layerName="Ценная историческая застройка 1930-1960 гг."
              layerColor="#75eb73"
            />
            <CityLanscape
              layerName="Ценный городской ландшафт"
              layerColor="#80d4a2"
            />
            <NatureLandscape
              layerName="Природный ландшафт"
              layerColor="#cbe8bc"
            />
            <ViewSightsTracks
              layerName="Трассы видовых раскрытий"
              layerColor="#dd3700 "
            />
            <HistoricalPlan
              layerName="Историческая планировочная структура"
              layerColor="#7f8f97"
            />
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
