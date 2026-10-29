import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import MapWithObjects from "../components/MapWithObjects";
import OKNBorders from "../layers/protected-data/OKNBorders";
import OKNHistorical from "../layers/protected-data/OKNHistorical";
import OKNSoviet from "../layers/protected-data/OKNSoviet";
import BordersDeveloped from "../layers/protected-data/BordersDeveloped";
import BordersApproved from "../layers/protected-data/BordersApproved";
import OKNRegional from "../layers/protected-data/OKNRegional";
import OKNFederal from "../layers/protected-data/OKNFederal";
import OKNIdentified from "../layers/protected-data/OKNIdentified";
import CityLanscape from "../layers/protected-data/CityLanscape";
import NatureLandscape from "../layers/protected-data/NatureLandscape";
import ViewSightsTracks from "../layers/protected-data/ViewSightsTracks";
import BordersSites from "../layers/protected-data/BordersSites";
import HistoricalPlan from "../layers/protected-data/HistoricalPlan";

function ProtectedObjects() {
  return (
    <>
      <main className="relative z-10 px-5 2xl:text-2xl">
        {/* <BgOverlay bgClass="bg-[url('/bgs/bg-protected-mobile.png')] md:bg-[url('/bgs/bg-protected-tablet.png')] lg:bg-[url('/bgs/bg-protected.png')] 2xl:bg-[position:center_-150px]" /> */}
        <div className="fixed -z-20 top-0 left-0 w-full h-full before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-30">
          <img
            src="/bgs/bg-main.png"
            alt="фоновое изображение"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="shrink-0 overflow-hidden w-full md:max-w-[1440px] mx-auto">
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
          <section className="relative flex items-center gap-3 md:grid md:grid-cols-[72px_1fr] lg:grid-cols-[88px_1fr] 2xl:grid-cols-[110px_1fr] md:gap-0">
            <div className="hidden justify-self-end md:block">
              <img
                src="/images/photo-12.png"
                alt="photo"
                className="w-16 lg:w-[88px] 2xl:w-[110px]"
              />
            </div>
            <div className="relative z-10 py-1 md:py-2 md:pl-4 xl:pl-6 md:border-l-2 md:border-white/40">
              <h1 className="text-white text-2xl/7 md:text-3xl/8 lg:text-4xl/[1.05] xl:text-[42px]/[1.05] 2xl:text-[48px]/[1.05] font-bold font-bebas tracking-[0.04em]">
                Предмет охраны Достопримечательного места
              </h1>
            </div>
          </section>
        </div>
        <div
          className="relative z-0 h-[70vh] min-h-[320px] left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
          // onClick={() => setIsFullscreen(true)}
        >
          <MapWithObjects
            pdfSource="protected-objects"
            pdfLabel="Приказ о предмете охраны"
          >
            <OKNBorders layerName="Границы достопримечательного места" layerColor="#000" />
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
              layerColor="#2776bb"
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
              layerColor="#1aad56"
            />
            <NatureLandscape
              layerName="Природный ландшафт"
              layerColor="#46c904"
            />
            <ViewSightsTracks
              layerName="Трассы видовых раскрытий"
              layerColor="#dd3700"
            />
            <HistoricalPlan
              layerName="Историческая планировочная структура"
              layerColor="#7f8f97"
            />
          </MapWithObjects>
        </div>
      </main>
    </>
  );
}

export default ProtectedObjects;
