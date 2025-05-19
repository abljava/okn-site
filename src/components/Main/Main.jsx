import { Link } from "react-router-dom";
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";

function Main() {
  return (
    <main className="md:max-w-[1440px] mx-auto relative overflow-hidden">
      {/* Видео и оверлей */}
      <BackgroundVideo src="/videos/east-to-west.mp4" className=""/>
      <div className="fixed inset-0 bg-black bg-opacity-50 pointer-events-none -z-5"></div>

      <section className="relative z-10  mx-5 mt-7 2xl:text-2xl">
        <div className="relative z-10">
          <h1 className="text-white text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
            Достопримечательное место "Исторический центр города Владивостока"
          </h1>
          <p className="mt-4 text-white text-xs/4 uppercase">
            Разработка документации, связанной с исторической архитектурой
          </p>
        </div>

        <div className="flex items-end justify-between relative w-full">
          <img
            src="/images/bg-01.png"
            className="absolute -z-10 pointer-events-none scale-[2.3] top-0 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none opacity-40"
            alt="background"
          />
          <h3 className="h3">
            введение
          </h3>
          <img src="/images/photo-0.png" alt="photo" />
        </div>
        <div className="flex flex-col gap-2 text-white text-xs/4 md:text-[10px] xl:text-[22px] mt-3 leading-[1.4]">
          <p>
            <span className="font-bold">
              За последние десятилетия накопилось множество
            </span>{" "}
            неразрешённых вопросов, связанных с охраной объектов культурного
            наследия, исторических зданий и природного ландшафта. Одновременно с
            этим существует запрос на реконструкцию и реновацию городской среды
            центральной части Владивостока.
          </p>
          <p>
            <span className="font-bold">С целью создания баланса</span> в
            текущих условиях между требованиями по охране исторической среды и
            запросом к реновации городской территории, разработана документация
            - Достопримечательное место Исторический центр города Владивостока.
          </p>
          <p>
            <span className="font-bold">
              Достопримечательное место Исторический центр города Владивостока
            </span>
            является особым видом объекта культурного наследия регионального
            значения.
          </p>
        </div>

        <div className="relative">
          <img
            src="/images/bg-main3.png"
            className="absolute pointer-events-none scale-[2.3] origin-top left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
            alt="background"
          />

          <div className="relative ">
            <h3 className="h3 pt-28 !text-black">
              Для кого этот сайт?
            </h3>
            <div className="space-y-3 text-xs">
              {/* Первый пункт */}
              <div className="flex items-start gap-3 pt-3">
                <span className="text-orange font-bold font-bebas text-3xl leading-none select-none">
                  01
                </span>
                <div className="border-t border-white pt-3">
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
                <div className="border-t border-white pt-3">
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
                <div className="border-t border-b border-white py-3">
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
          <div className="relative flex gap-2 mt-8">
            <p className="basis-2/3 text-xs">
              Информация, размещённая здесь, носит ознакомительный характер и
              призвана в первую очередь наглядно информировать заинтересованных
              лиц, в том числе собственников зданий и земельных участков,
              застройщиков и проектировщиков, организации и органы
              государственной власти, осуществляющие деятельность в границах
              исторического центра города.
            </p>
            <div className="basis-1/3 flex-shrink-0">
              <img
                src="/images/photo-1.png"
                alt="photo"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/bg-2.png"
              alt="фоновая картинка"
              className="absolute pointer-events-none origin-top scale-[2.2] left-[80%]  -translate-x-1/2 w-screen max-w-none"
            />
            <div className="relative pt-20 text-white text-xs">
              <div className="relative grid grid-cols-[75%_1fr] grid-rows-[auto_auto_auto] gap-x-6 gap-y-4 items-start">
                {/* 1 строка, 1 колонка: Заголовок */}
                <h3 className="h3 col-start-1 row-start-1">
                  правовой статус
                </h3>
                {/* 1 строка, 2 колонка: Круглая картинка */}
                <div className="absolute -left-5 col-start-2 row-start-1 flex justify-end">
                  <img
                    src="/images/zdanie-muzeya-arseneva.png"
                    alt="здание музея арсеньева"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                {/* 2 строка, 1 колонка: Текстовый блок */}
                <div className="col-start-1 row-start-2">
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
                {/* 2 строка, 2 колонка: Пустой блок */}
                <div className="col-start-2 row-start-2"></div>
                {/* 3 строка, 1 колонка: Текстовый блок */}
                <div className="col-start-1 row-start-3 text-white text-sm space-y-2">
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
                <div className="absolute col-start-2 row-start-3 flex justify-end -right-5">
                  <img
                    src="/images/photo-3.png"
                    alt="Фото"
                    className="w-32 max-w-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-cover bg-center">
            <h3 className="pt-28 h3 !text-black">
              Знать, чтобы развивать
            </h3>
            <div className="text-xs">
              {/* Первый пункт */}
              <div className="flex items-start gap-3 pt-3">
                <img src="/icons/pdf.svg" className="pt-3"></img>
                <Link
                  to="/"
                  className="text-orange font-bold underline border-t border-white pt-3"
                >
                  Приказ о включении достопримечательного места в перечень
                  выявленных объектов культурного наследия
                </Link>
              </div>

              {/* Второй пункт */}
              <div className="flex items-start gap-3 pt-3">
                <img src="/icons/pdf.svg" className="pt-3"></img>
                <Link
                  to="/"
                  className="text-orange font-bold underline border-t border-white pt-3"
                >
                  Приказ о включении достопримечательного места в перечень
                  выявленных объектов культурного наследия
                </Link>
              </div>

              {/* Третий пункт */}
              <div className="flex items-start gap-3 pt-3">
                <img src="/icons/pdf.svg" className="pt-3"></img>
                <Link
                  to="/"
                  className="text-orange font-bold underline border-t border-b border-white py-3"
                >
                  Приказ о включении достопримечательного места в перечень
                  выявленных объектов культурного наследия
                </Link>
              </div>
            </div>
          </div>

          <div className="relative my-8">
            <div className="bg-white rounded-xl pt-4 pb-8 px-4 shadow-lg flex flex-col items-center w-[340px]">
              <div className="overflow-hidden rounded-lg w-full h-[280px] aspect-video bg-black relative">
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
                <span className="font-vasek text-3xl">Владивосток</span>
                <span className="italic text-base">2025</span>
              </div>
            </div>
          </div>

          <div className="relative mb-10">
            <img
              src="/images/bg-0.png"
              alt="фоновая картинка"
              className="absolute -z-5 pointer-events-none origin-top scale-[2.2] right-0 -translate-x-1/2 w-screen max-w-none"
            />
            <div className="relative flex flex-col gap-5 items-start text-white ">
              <h3 className=" pt-28 h3">
                Обратная связь
              </h3>
              <p className="font-bold text-xs">
                Авторский коллектив, участвовавший в создании данной
                документации, открыт к диалогу и готов принять к рассмотрению
                поступившие предложения и мнения о потенциальных изменениях
                документации в будущем.
              </p>
              <p className="text-xs">
                К таким предложениям могут также относиться обоснованные
                пожелания по включению/исключению ценных исторических объектов
                (как зданий, так и сооружений) в состав предмета охраны
                достопримечательного места
              </p>
              <button className="text-white text-xs font-semibold uppercase bg-orange rounded px-8 py-3">
                <span>Написать на почту</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
