import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import BgOverlay from "../components/BgOverlay";
import MapComponent from "../components/MapComponent";
import MapWithObjects from "../components/MapWithObjects";
import FullscreenMapPortal from "../components/FullscreenMapPortal";
import OKNBorders from "../layers/protected-data/OKNBorders";
import OKNHistorical from "../layers/protected-data/OKNHistorical";
import OKNSoviet from "../layers/protected-data/OKNSoviet";
import BordersDeveloped from "../layers/protected-data/BordersDeveloped";
import BordersApproved from "../layers/protected-data/BordersApproved";
import OKNRegional from "../layers/protected-data/OKNRegional";
import OKNFederal from "../layers/protected-data/OKNFederal";
import OKNIdentified from "../layers/protected-data/OKNIdentified";
import BordersSites from "../layers/protected-data/BordersSites";
import Layer1 from "../layers/dev-regulations/Layer1";
import Layer2 from "../layers/dev-regulations/Layer2";
import Layer3 from "../layers/dev-regulations/Layer3";
import Layer4 from "../layers/dev-regulations/Layer4";
import LandscapeZones from "../layers/dev-regulations/LandscapeZones";
import ProtectedZones from "../layers/dev-regulations/ProtectedZones";
import DevelopmentZones from "../layers/dev-regulations/DevelopmentZones";
import LayerRCI from "../layers/dev-regulations/LayerRCI";
import LayerRIP from "../layers/dev-regulations/LayerRIP";
import LayerRGL from "../layers/dev-regulations/LayerRGL";
import LayerRT from "../layers/dev-regulations/LayerRT";
import LayerROKN from "../layers/dev-regulations/LayerROKN";
import LayerRPL from "../layers/dev-regulations/LayerRPL";

function DevelopmentRegulations() {
  return (
    <main className="relative z-10 px-5 2xl:text-2xl bg-[url('/images/bg-main.jpg')] bg-cover bg-center">
      {/* <BgOverlay bgClass="bg-[url('/bgs/bg-development-mobile.png')] md:bg-[url('/bgs/bg-development-tablet.png')] lg:bg-[url('/bgs/bg-development.png')] 2xl:bg-[position:center_-150px]" /> */}
      <div className="fixed -z-20 top-0 left-0 w-full h-full before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-30">
        <img
          src="/bgs/bg-main4.png"
          alt="фоновое изображение"
          className="absolute -z-10 -top-20 md:top-0 xl:-top-36 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
        />
      </div>
      <div className="md:max-w-[1440px] mx-auto">
        <Breadcrumbs />
        <section className="!hidden flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
          <div className="hidden md:block"></div>
          {/* Заголовок и подзаголовок */}
          <div className="relative z-10 grid pt-8 md:pr-44 md:pl-5 md:pt-10 xl:pt-12 xl:pr-0 xl:pl-[100px] md:border-l-2 md:border-white/40 ">
            <h1 className="text-white text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
              Достопримечательное место "Исторический центр города Владивостока"
            </h1>
            <div className="justify-self-end md:hidden">
              <img src="/images/photo-34.png" alt="photo" className="w-32" />
            </div>
          </div>
        </section>
        <section className="relative flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
          <div className="hidden justify-self-end md:pt-0 md:block">
            <img
              src="/images/photo-34.png"
              alt="photo"
              className="w-24 lg:w-[160px]"
            />
          </div>
          <div className="relative z-10 grid pb-5 md:pr-10 md:pl-5 md:pb-5 xl:pt-26 xl:pr-0 xl:pl-[100px] md:border-l-2 md:border-white/40 ">
            <h1 className="text-white text-3xl/8 md:text-3xl/[1.1] lg:text-5xl/[1.1] xl:text-[70px] font-bold font-bebas tracking-[0.04em]">
              проект режимов использования земель и требования к
              градостроительному регламенту
            </h1>
          </div>
        </section>
      </div>
      <div
        className="relative -z-20 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
        // onClick={() => setIsFullscreen(true)}
      >
        <MapWithObjects>
          <LandscapeZones
            layerName="Зоны охраняемого природного ландшафта"
            layerColor="#3f7f4f"
          />
          <ProtectedZones layerName="Охранные зоны" layerColor="#000" />
          <DevelopmentZones
            layerName="Зоны регулирования застройки"
            layerColor="#a5a500"
          />
          {/* <p>Границы регламентных участков, не предназначенныйх под застройку</p> */}
          <LayerROKN
            layerName="РОКН (Объекты культурного наследия) участки 1-74"
            layerColor="#a50000"
          />
          <LayerRCI
            layerName="РЦИ (Ценная историческая застройка) участки 1-35"
            layerColor="#ff7f00"
          />
          <LayerRIP
            layerName="РИП (Историческая планировочная структура) участки 1-32"
            layerColor="#a57c00"
          />
          <LayerRPL
            layerName="РПЛ (Природный ландшафт) участки 1-14"
            layerColor="#3f7f00"
          />
          <LayerRGL
            layerName="РГЛ (Ценный городской ландшафт) участки 1-25"
            layerColor="#3f7f00"
          />
          <LayerRT
            layerName="РТ (Современная планировочная структура) участки 1-7"
            layerColor="#7f7f7f"
          />
          <Layer1
            layerName="Р-1 (Регулирования застройки) участки 1-56"
            layerColor="#ffbf00"
          />
          <Layer2
            layerName="Р-2 (Регулирования застройки) участки 1-56"
            layerColor="#00bfff"
          />
          <Layer3
            layerName="Р-3 (Регулирования застройки) участки 1-45"
            layerColor="#007ca5"
          />
          <Layer4
            layerName="Р-4 (Регулирования застройки) участки 1-18"
            layerColor="#7f00ff"
          />
        </MapWithObjects>
      </div>
    </main>
  );
}

export default DevelopmentRegulations;
