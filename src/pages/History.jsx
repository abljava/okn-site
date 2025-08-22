import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { useState, useEffect } from "react";
import { sectionOne } from "../utils/history/sections.js";
// import { sectionTwo } from "../utils/history/sections.js";
import { photos } from "../utils/history/photos.js";
import BgOverlay from "../components/BgOverlay";
import ScrollToTop from "../components/ScrollToTop.jsx";

function History() {
  const [open, setOpen] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const handleShowPhotosClick = () => {
    setShowPhotos(!showPhotos);
  };

  return (
    <main className="relative pb-16 md:pb-6 px-5 2xl:text-2xl">
      <ScrollToTop />
      <BgOverlay bgClass="bg-[url('/bgs/bg-history-mobile.png')] md:bg-[url('/bgs/bg-history-tablet.png')] lg:bg-[url('/bgs/bg-history.png')] 2xl:bg-[position:center_-150px]" />
      <img
        src="/bgs/bg-main.jpg"
        alt="фоновое изображение"
        className="absolute -z-10 top-[300px] xl:top-[700px] left-0 w-full h-full object-cover"
      />
      <div className="md:max-w-[1440px] mx-auto">
        <Breadcrumbs />
        <section className="flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
          <div className="hidden md:block"></div>
          {/* Заголовок и подзаголовок */}
          <div className="relative z-10 grid pt-8 md:pr-44 md:pl-5 md:pt-10 xl:pt-12 xl:pr-0 xl:pl-[100px] md:border-l-2 md:border-white/40 ">
            <h1 className="text-white text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
              Достопримечательное место "Исторический центр города Владивостока"
            </h1>
            <div className="justify-self-end pt-8 md:hidden">
              <img src="/images/photo-3.png" alt="photo" className="w-32" />
            </div>
          </div>
        </section>

        {/* Условный рендеринг: показываем контент или фотографии */}
        {!showPhotos ? (
          <div className="relative">
            <img
              src="/bgs/bg-main3.png"
              alt="фоновое изображение"
              className="absolute -z-10 -top-20 md:top-0 xl:-top-6 2xl:-top-20 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
            />
            <section className="relative pt-4 md:pt-0 md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
              {/* <img
                src="/bgs/bg-main4.png"
                alt="фоновое изображение"
                className="absolute -z-10 -top-20 md:top-0 xl:-top-36 2xl:-top-20 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
              /> */}
              <div className="hidden md:block md:pt-80">
                <img
                  src="/images/photo-1.png"
                  alt="photo"
                  className="absolute w-full h-auto object-cover md:w-[130px] 2xl:w-[340px]"
                />
              </div>
              <h3 className="h3 pt-28 !text-black md:hidden">
                Историческая справка по освоению территории
              </h3>
              <div className="text-xs md:pt-44 md:pr-32 xl:pr-0 xl:pt-[330px] md:border-l-2 md:border-white/40 md:pl-5 2xl:pl-[100px]">
                <h3 className="h3 pt-28 !text-black hidden md:block md:leading-8 md:w-72 xl:w-full xl:leading-[1] ">
                  Историческая справка по освоению территории
                </h3>
                <nav className="max-w-md xl:max-w-full py-8 md:py-5">
                  <button
                    className="flex items-center w-full text-sm text-left font-semibold lg:text-3xl"
                    onClick={() => setOpen(!open)}
                  >
                    Содержание
                    <svg
                      className={`ml-2 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                  {open && (
                    <ul className="mt-8 md:mt-5 space-y-[10px] lg:text-xl">
                      <li className="">
                        <a
                          href="#intro"
                          className="block xl:text-xl font-semibold hover:text-orange-500"
                        >
                          Историческая справка по освоению территории
                        </a>
                      </li>
                      {sectionOne.map((section) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.title}`}
                            className="block hover:text-orange-500"
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                      {/* <li className="">
                        <a
                          href="#intro"
                          className="block font-semibold hover:text-orange-500"
                        >
                          Историко-градостроительная справка
                        </a>
                      </li> */}
                      {/* {sectionTwo.map((section) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.title}`}
                            className="block hover:text-orange-500"
                          >
                            {section.title}
                          </a>
                        </li>
                      ))} */}
                    </ul>
                  )}
                </nav>
              </div>
            </section>

            <section className="relative md:pt-0 md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
              <div className="hidden md:block self-center md:px-2">
                <img src="images/photo-3.png" alt="photo" className="" />
              </div>
              <div className="md:border-l-2 md:border-white/40 md:pl-5 2xl:pl-[100px]">
                <div className="pb-5 xl:py-8">
                  <button
                    className="w-full py-3 xl:py-5 text-white text-sm xl:text-[22px] font-semibold lg:text-base uppercase bg-orange rounded 
            "
                    onClick={handleShowPhotosClick}
                  >
                    <span>Смотреть фото</span>
                  </button>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 md:gap-2 xl:gap-5">
                  <img
                    src="/images/photo-6.png"
                    alt="photo"
                    className="w-full h-auto object-cover"
                  />
                  <img
                    src="/images/photo-7.png"
                    alt="photo"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="flex flex-col py-8 md:py-10 space-y-8 md:space-y-10 text-xs xl:text-xl">
                  {sectionOne.map((item) => (
                    <li key={item.id} className="list-none">
                      <p id={item.title} className="block ">
                        {item.text}
                      </p>
                    </li>
                  ))}
                </div>
                <img
                  src="/images/photo-10.png"
                  alt="photo"
                  className="w-full h-auto object-cover md:hidden"
                />
                <img
                  src="/images/photo-8.png"
                  alt="photo"
                  className="hidden md:block w-full h-auto object-cover"
                />
                <img
                  src="/images/photo-11.png"
                  alt="photo"
                  className="w-full h-auto object-cover md:hidden"
                />
                <img
                  src="/images/photo-9.png"
                  alt="photo"
                  className="hidden md:block w-full h-auto object-cover"
                />
              </div>
            </section>
          </div>
        ) : (
          <div className="relative">
            <img
              src="/bgs/bg-main4.png"
              alt="фоновое изображение"
              className="absolute -z-10 -top-20 md:-top-16 lg:-top-24 xl:-top-36 2xl:-top-44 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
            />
            {/* Кнопка "Вернуться назад" в левой колонке на десктопе */}
            <div className="hidden md:block pt-8 md:pt-4 md:pr-3 xl:pr-6 xl:pt-8 xl:pb-32">
              <button
                className="w-full py-3 2xl:py-5 text-white text-sm md:text-xs 2xl:text-base font-semibold uppercase bg-darkGrey rounded"
                onClick={handleShowPhotosClick}
              >
                <span>Вернуться назад</span>
              </button>
              <div className="hidden md:block self-center md:px-2 md:pt-8">
                <img src="images/photo-3.png" alt="photo" className="" />
              </div>
            </div>
            <div className="md:border-l-2 md:border-white/40 md:pl-5 xl:pl-[100px]">
              {/* Кнопка "Вернуться назад" в правой колонке на мобилке */}
              <div className="pt-6 md:pt-4 xl:pt-8 xl:pb-32 md:hidden">
                <button
                  className="w-full py-3 xl:py-5 text-white text-sm xl:text-[22px] font-semibold lg:text-base uppercase bg-darkGrey rounded"
                  onClick={handleShowPhotosClick}
                >
                  <span>Вернуться назад</span>
                </button>
              </div>
              <div className=" text-white">
                <h3 className="py-7 md:pt-4 text-darkGrey text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
                  Исторические фотографии
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:max-w-[970px]">
                  {photos.map((photo, index) => (
                    <img
                      key={photo.id}
                      src={photo.src}
                      alt={photo.title}
                      className={`object-cover w-full ${
                        index % 3 === 2
                          ? "md:col-span-2 md:h-[200px] xl:h-[360px]"
                          : "md:col-span-1 md:h-[150px] xl:h-[270px]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default History;
