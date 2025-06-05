import { Link } from "react-router-dom";
import BackgroundVideo from "../components/BackgroundVideo";

function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Видео и оверлей */}
      <BackgroundVideo src="/videos/east-to-west.mp4" className="" />
      <div className="fixed inset-0 bg-black bg-opacity-50 pointer-events-none -z-5"></div>

      <section className="relative md:max-w-[1440px] mx-auto z-10 px-5 pt-10 md:pt-0 2xl:text-2xl">
        <div className="flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
          <div className="hidden md:block"></div>
          {/* Заголовок и подзаголовок */}
          <div className="relative z-10 md:pr-44 md:border-l-2 md:border-white/40 md:pl-5 md:pt-10 2xl:pt-[100px] 2xl:pl-[100px]">
            <h1 className="text-white text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
              Достопримечательное место "Исторический центр города Владивостока"
            </h1>
            <p className="mt-4 md:mt-3 text-white text-xs/4 uppercase">
              Разработка документации, связанной с исторической архитектурой
            </p>
          </div>
        </div>

        <section className="flex flex-col md:grid md:grid-cols-[167px_1fr_auto] 2xl:grid-cols-[370px_1fr_auto]">
          <img
            src="/images/bg-01.png"
            className="absolute -z-10 pointer-events-none scale-[2.3] top-0 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none opacity-40"
            alt="background"
          />
          <div className="flex justify-between items-start gap-2">
            <h3 className="h3 md:pt-28 md:leading-[1]">введение</h3>
            <div className="md:hidden ">
              <img src="/images/photo-0.png" alt="photo" className="w-30" />
            </div>
          </div>
          <div className="hidden md:block md:col-start-3 md:row-start-1 md:justify-self-end md:pt-28 md:px-12">
            <img
              src="/images/photo-0.png"
              alt="photo"
              className="w-28 md:w-36 lg:w-48 2xl:w-64"
            />
          </div>
          <div className="flex flex-col gap-2 text-white text-xs/4 md:text-[10px] xl:text-[22px] pt-3 md:pt-28 leading-[1.4] md:border-l-2 md:border-white/40 md:pl-5 2xl:pl-[100px]">
            <p>
              <span className="font-bold">
                За последние десятилетия накопилось множество
              </span>{" "}
              неразрешённых вопросов, связанных с охраной объектов культурного
              наследия, исторических зданий и природного ландшафта. Одновременно
              с этим существует запрос на реконструкцию и реновацию городской
              среды центральной части Владивостока.
            </p>
            <p>
              <span className="font-bold">С целью создания баланса</span> в
              текущих условиях между требованиями по охране исторической среды и
              запросом к реновации городской территории, разработана
              документация - Достопримечательное место Исторический центр города
              Владивостока.
            </p>
            <p>
              <span className="font-bold">
                Достопримечательное место Исторический центр города Владивостока
              </span>
              является особым видом объекта культурного наследия регионального
              значения.
            </p>
          </div>
        </section>

        <div className="relative">
          <img
            src="/images/bg-main3.png"
            className="absolute pointer-events-none scale-[2.3] origin-top left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
            alt="background"
          />

          <div className="relative pt-44 md:pt-0 md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
            <div className="hidden md:block md:pt-40">
            <img
                src="/images/photo-1.png"
                alt="photo"
                className="w-full h-auto object-cover md:w-[130px] 2xl:w-[290px]"
              />
            </div>
            <h3 className="h3 pt-28 !text-black md:hidden">
              Для кого этот сайт?
            </h3>
            <div className="space-y-3 text-xs md:pt-44 md:pr-32 md:border-l-2 md:border-white/40 md:pl-5 2xl:pl-[100px]">
              <h3 className="h3 pt-28 !text-black hidden md:block">
                Для кого этот сайт?
              </h3>
              {/* Первый пункт */}
              <div className="flex items-start gap-3 pt-3">
                <span className="text-orange font-bold font-bebas text-3xl leading-none select-none">
                  01
                </span>
                <div className="border-t border-white/40 pt-3">
                  <div className="font-bold">
                    Для граждан не безразличных к историческому наследию.
                  </div>
                  <div>Для гостей города и туристов.</div>
                </div>
              </div>

              {/* Второй пункт */}
              <div className="flex items-start gap-3">
                <span className="text-orange font-bold font-bebas text-3xl leading-none select-none">
                  02
                </span>
                <div className="border-t border-white/40 pt-3">
                  <div className="font-bold">
                    Для тех, кто видит в объектах культурного наследия и
                    исторических зданиях не проблему,
                  </div>
                  <div className="font-normal">
                    а потенциал для дальнейшего развития города, его
                    туристической привлекательности.
                  </div>
                </div>
              </div>

              {/* Третий пункт */}
              <div className="flex items-start gap-3">
                <span className="text-orange font-bold font-bebas text-3xl leading-none select-none">
                  03
                </span>
                <div className="border-t border-b border-white/40 py-3">
                  <div className="font-bold">
                    Для тех, кто ценит аутентичность города Владивостока,
                  </div>
                  <div>
                    его характер и образ, те ощущения, которые он дарит.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex gap-2 mt-9 md:mt-0 md:gap-0 md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
            {/* Текст — в правой колонке грида */}
            <p className="text-xs max-w-[210px] md:max-w-none md:col-start-2 md:row-start-1 md:pl-5 md:pr-32 md:pt-10 2xl:pl-[100px] md:border-l-2 md:border-white/40">
              Информация, размещённая здесь, носит ознакомительный характер и
              призвана в первую очередь наглядно информировать заинтересованных
              лиц, в том числе собственников зданий и земельных участков,
              застройщиков и проектировщиков, организации и органы
              государственной власти, осуществляющие деятельность в границах
              исторического центра города.
            </p>
            {/* Картинка — в левой колонке грида */}
            <div className="md:hidden">
              <img
                src="/images/photo-1.png"
                alt="photo"
                className="w-full h-auto object-cover md:w-[120px] 2xl:w-[290px]"
              />
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/bg-2.png"
              alt="фоновая картинка"
              className="absolute pointer-events-none origin-top scale-[2.2] left-[80%]  -translate-x-1/2 w-screen max-w-none"
            />
            <div className="relative pt-32 md:pt-0 text-white text-xs">
              <div className="relative grid grid-cols-[75%_1fr] grid-rows-[auto_auto_auto] gap-x-6 gap-y-4 items-start md:grid-cols-[167px_1fr_1fr] md:grid-rows-[auto_auto] md:gap-0 2xl:grid-cols-[370px_1fr_1fr]">
                {/* 1 строка, 1 колонка: Заголовок */}
                <h3 className="h3 col-start-1 row-start-1 md:pt-36 md:col-start-1 md:row-start-1 2xl:leading-[1.1]">
                  правовой статус
                </h3>

                {/* 1 строка, 2 колонка: Круглая картинка */}
                <div className="absolute -left-5 col-start-2 row-start-1 md:static md:col-start-1 md:row-start-2 flex justify-end md:justify-start xl:justify-end text-white">
                  <img
                    src="/images/zdanie-muzeya-arseneva.png"
                    alt="здание музея арсеньева"
                    className="w-20 h-20 md:w-24 md:h-24 2xl:w-[200px] 2xl:h-[200px] 2xl:mr-16 rounded-full object-cover"
                  />
                </div>
                {/* 2 строка, 1 колонка: Текстовый блок */}
                <div className="col-start-1 row-start-2 md:col-start-2 md:row-start-2 text-xs 2xl:text-[22px]/[1.4] md:pl-5 2xl:pl-[100px] md:border-l-2 md:border-white/40">
                  <span className="font-bold">
                    Документация Достопримечательного места "Исторический центр
                    города Владивостока"
                  </span>{" "}
                  разработана в соответствии с и с действующим законодательством
                  в области охраны объектов культурного наследия, прошла
                  историко-культурную экспертизу и частично утверждена приказами
                  Инспекции по охране объектов культурного наследия Приморского
                  края.
                </div>
                {/* 3 строка, 1 колонка: Текстовый блок */}
                <div className="col-start-1 row-start-3 md:col-start-3 md:row-start-2  space-y-2 text-xs 2xl:text-[22px]/[1.4] md:pl-10 2xl:pl-16">
                  <p>
                    Согласно законодательству в границах достопримечательных
                    мест допускается ограниченное строительство и хозяйственная
                    деятельность, не нарушающая предмет охраны.
                  </p>
                  <p className="font-bold">
                    Представленные на сайте материалы защищены законом об
                    авторском праве.
                  </p>
                </div>
                {/* 3 строка, 2 колонка: Картинка */}
                <div className="absolute col-start-2 row-start-3 md:static md:pl-5 md:pt-20 2xl:pl-[100px] md:col-start-2 md:row-start-1 md:h-full flex justify-start -right-5 md:border-l-2 md:border-white/40">
                  <img
                    src="/images/photo-3.png"
                    alt="Фото"
                    className="w-24 pr-2 pt-9 max-w-none md:w-[190px] md:h-full 2xl:w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] bg-cover bg-center">
            <div className="pt-32 md:border-l-2 md:border-white/40 md:pl-5 md:pt-36 2xl:pl-[100px]">
              <h3 className="pt-28 h3 !text-black xl:leading-[1.1]">
                Знать, чтобы развивать
              </h3>
              <div className="text-xs pt-6">
                {/* Первый пункт */}
                <div className="flex items-start gap-5 pt-6">
                  <img src="/icons/pdf.svg" className="pt-6"></img>
                  <Link
                    to="/"
                    className="text-orange font-bold underline border-t border-white/40 pt-3"
                  >
                    Приказ о включении достопримечательного места в перечень
                    выявленных объектов культурного наследия
                  </Link>
                </div>

                {/* Второй пункт */}
                <div className="flex items-start gap-5 pt-6">
                  <img src="/icons/pdf.svg" className="pt-6"></img>
                  <Link
                    to="/"
                    className="text-orange font-bold underline border-t border-white/40 pt-3"
                  >
                    Приказ о включении достопримечательного места в перечень
                    выявленных объектов культурного наследия
                  </Link>
                </div>

                {/* Третий пункт */}
                <div className="flex items-start gap-5 pt-6">
                  <img src="/icons/pdf.svg" className="pt-6"></img>
                  <Link
                    to="/"
                    className="text-orange font-bold underline border-t border-b border-white/40 py-3"
                  >
                    Приказ о включении достопримечательного места в перечень
                    выявленных объектов культурного наследия
                  </Link>
                </div>
              </div>
            </div>
            {/* Картинка */}
            <div className="hidden md:block md:col-start-1 md:row-start-1 md:pt-44">
              <img
                src="/images/photo-4.png"
                alt="photo"
                className="w-full h-auto md:w-[130px] 2xl:w-[290px]"
              />
            </div>
          </div>

          {/* Видео */}
          <div className="relative my-8 md:my-0 md:pt-14 xl:pt-20 2xl:pt-[175px] md:pb-10 xl:pb-18 2xl:pb-[200px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[167px] before:w-[2px] before:bg-white/40 before:hidden md:before:block 2xl:before:left-[370px] before:z-10">
            <div className="bg-white rounded-xl pt-4 pb-8 px-4 shadow-lg flex flex-col items-center w-full ">
              <div className="overflow-hidden rounded-lg w-full h-[280px] xl:h-[400px] 2xl:h-[608px] aspect-video bg-black relative">
                <video
                  src="/videos/east-to-west.mp4"
                  controls
                  className="w-full h-full object-cover"
                  poster="/images/video-preview.png"
                />
                {/* Кнопка play */}
                <button
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="Play video"
                >
                  <span className="bg-gray-700/70 rounded-full w-14 h-14 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <polygon points="10,7 26,16 10,25" fill="#F47C2B" />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="flex justify-between w-full mt-4 px-2 text-black font-vasek">
                <span className="font-vasek text-3xl lg:text-[44px] 2xl:text-[66px]">
                  Владивосток
                </span>
                <span className="italic text-base lg:text-[22px] 2xl:text-[33px]">
                  2025
                </span>
              </div>
            </div>
          </div>

          {/* Обратная связь */}
          <div className="relative mb-14">
            <img
              src="/images/bg-0.png"
              alt="фоновая картинка"
              className="absolute -z-5 pointer-events-none origin-top scale-[2.2] right-0 -translate-x-1/2 w-screen max-w-none"
            />
            <div className="relative flex flex-col items-start pt-14 md:pt-9 gap-4 md:grid md:grid-cols-[167px_1fr] md:gap-0 2xl:grid-cols-[370px_1fr] text-white ">
              <h3 className=" pt-28 h3 lg:leading-[1]">Обратная связь</h3>
              <div className="flex flex-col gap-7 md:pl-5 md:pr-20 items-start border-l-2 border-white/40">
                <p className="font-bold text-xs">
                  Авторский коллектив, участвовавший в создании данной
                  документации, открыт к диалогу и готов принять к рассмотрению
                  поступившие предложения и мнения о потенциальных изменениях
                  документации в будущем.
                </p>
                <div className="flex gap-2 items-center md:items-start">
                  <p className="text-xs ">
                    К таким предложениям могут также относиться обоснованные
                    пожелания по включению/исключению ценных исторических
                    объектов (как зданий, так и сооружений) в состав предмета
                    охраны достопримечательного места
                  </p>
                  <div className="flex-shrink-0">
                    <img
                      alt="photo"
                      className="w-28 md:w-[250px] object-cover"
                      src="/images/photo-5.png"
                    />
                  </div>
                </div>
                <button className="text-white text-xs font-semibold uppercase bg-orange rounded px-8 py-3">
                  <span>Написать на почту</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
