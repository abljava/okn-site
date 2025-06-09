import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Circle from "../components/Circle";
import BgOverlay from "../components/BgOverlay";

function Authors() {
  return (
    <>
      <main className="relative pb-16 md:pb-6 lg:pb-28 z-10 px-5 2xl:text-2xl bg-[url('/bgs/bg-main.jpg')] bg-cover bg-center overflow-hidden">
        <BgOverlay bgClass="bg-[url('/bgs/bg-authors-mobile.png')] md:bg-[url('/bgs/bg-authors-tablet.png')] lg:bg-[url('/bgs/bg-authors.png')] 2xl:bg-[position:center_-150px]" />
        {/* <img
          src='/bgs/bg-main.png'
          alt='фоновое изображение'
          className='absolute -z-10 top-0 left-0 w-full h-full object-cover'
        /> */}
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
              <div className="justify-self-end pt-8 md:hidden">
                <img src="/images/photo-33.png" alt="photo" className="w-32" />
              </div>
            </div>
          </section>
          {/* Круги с фото */}
          <div className="relative">
            {/* Фон для круга */}
            <picture className="absolute -top-20 md:-top-28 lg:-top-44 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none">
              <source
                media="(min-width: 1024px)"
                srcSet="/bgs/image-authors.png"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/bgs/image-authors-tablet.png"
              />
              <img
                src="/bgs/image-authors-mobile.png"
                alt=""
                className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
              />
            </picture>
            <Circle />
          </div>
          <div className="overflow-hidden">
            <img
              src="/bgs/bg-main4.png"
              alt="фоновое изображение"
              className="absolute -z-10 top-1/3 left-0 w-full h-full object-cover "
            />
            <section className="relative md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] bg-cover bg-center">
              <div className="pt-32 md:pt-28 lg:pt-56 md:pl-5 2xl:pl-[100px] md:border-l-2 md:border-white/40 ">
                <h3 className="pt-28 h3 !text-black xl:leading-[1.1]">
                  Авторский коллектив занимается разработкой проектов:
                </h3>
                <div className="text-xs md:text-sm xl:text-xl pt-6">
                  <ul className="flex flex-col space-y-2">
                    <li className="flex gap-2">
                      <span>&bull;</span>
                      <p>
                        <span className="font-semibold">
                          Зон охраны объектов культурного наследия
                        </span>{" "}
                        регионального и федерального значения
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <span>&bull;</span>
                      <p className="font-semibold">Достопримечательных мест</p>
                    </li>
                    <li className="flex gap-2">
                      <span>&bull;</span>
                      <p>
                        <span className="font-semibold">Границ территорий</span>{" "}
                        объектов культурного наследия
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <span>&bull;</span>
                      <p>
                        <span className="font-semibold">Предметов охраны</span>{" "}
                        объектов культурного наследия
                      </p>
                    </li>
                    <li className="flex gap-2">
                      <span>&bull;</span>
                      <p>
                        <span className="font-semibold">
                          Работами по выявлению
                        </span>
                        и включению в реестр новых объектов культурного наследия
                      </p>
                    </li>
                  </ul>
                  <p className="pt-5">
                    <span className="font-semibold">
                      Ваши пожелания и предложения по сотрудничеству,
                    </span>{" "}
                    касающиеся разработанной документации по
                    достопримечательному месту Исторический центр города
                    Владивостока, вы можете направить на электронный адрес{" "}
                    <a
                      href="mailto:hist.center-vl@mail.ru"
                      className="text-orange font-semibold hover:text-black transition-colors"
                    >
                      hist.center-vl@mail.ru
                    </a>
                  </p>
                </div>
              </div>
              {/* Фото */}
              <div className="hidden md:block md:col-start-1 md:row-start-1 pt-32 md:pt-28 lg:pt-56">
                <img
                  src="/images/photo-33.png"
                  alt="photo"
                  className="w-full h-auto md:w-[180px] lg:w-[360px]"
                />
              </div>
            </section>

            <section className="flex flex-col md:grid md:grid-cols-[167px_1fr_auto] 2xl:grid-cols-[370px_1fr_auto]">
              <div className="pt-16 md:pt-20">
                <h3 className="h3 !text-black  md:leading-[1]">контакты</h3>
              </div>

              <div className="flex flex-col items-start gap-6 lg:gap-12 text-xs/4 md:text-[10px] xl:text-[22px] pt-3 md:pt-20 leading-[1.4] md:border-l-2 md:border-white/40 md:pl-5 2xl:pl-[100px]">
                <div className="hidden md:block"></div>
                <div className="flex flex-col gap-3 lg:gap-5 text-xs md:text-sm xl:text-2xl">
                  <p className="font-bold">
                    Авторский коллектив, участвовавший в создании данной
                    документации, открыт к диалогу и готов принять к
                    рассмотрению поступившие предложения и мнения о
                    потенциальных изменениях документации в будущем.
                  </p>

                  {/* Первый пункт */}
                  <div className="flex items-start gap-3 lg:gap-5 border-t border-white/40 py-3 lg:py-5">
                    <img
                      src="/icons/mail.svg"
                      alt="иконка электронной почты"
                      className="lg:w-8"
                    />
                    <div className="md:text-base xl:text-2xl font-semibold hover:text-orange transition-colors ">
                      hist.center-vl@mail.ru
                    </div>
                  </div>

                  {/* Второй пункт */}
                  <div className="flex items-start gap-3 lg:gap-5 md:text-base border-t border-b border-white/40 py-3 lg:py-5">
                    <img
                      src="/icons/geo.svg"
                      alt="иконка геолокации"
                      className="lg:w-8"
                    />
                    <div className="md:text-base xl:text-2xl font-bold">
                      г. Владивосток
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:hist.center-vl@mail.ru"
                  className="text-white text-xs lg:text-2xl font-semibold uppercase bg-orange rounded px-8 py-3 lg:px-14 lg:py-5"
                >
                  <span>Написать на почту</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Authors;
