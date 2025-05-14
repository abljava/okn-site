import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";

function Main() {
  return (
    <main>
      {/* Видео и оверлей */}
      <BackgroundVideo src="/videos/east-to-west.mp4" />
      <div className="fixed inset-0 bg-black bg-opacity-50 pointer-events-none -z-5"></div>

      <div className="relative z-10  mx-5 mt-7">
        <div className="relative z-10">
          <h1 className="text-white text-3xl/8 font-bold font-bebas tracking-[0.04em]">
            Достопримечательное место "Исторический центр города Владивостока"
          </h1>
          <p className="mt-4 text-white text-xs/4 uppercase">
            Разработка документации, связанной с исторической архитектурой
          </p>
        </div>

        <div className="flex items-end justify-between relative w-full">
          <img
            src="/bg-01.png"
            className="absolute -z-10 pointer-events-none scale-[2.3] top-0 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none opacity-40"
            alt="background"
          />
          <h3 className="uppercase text-white text-3xl/8 font-bold font-bebas tracking-[0.04em]">
            введение
          </h3>
          <img src="/photo-0.png" alt="photo" />
        </div>
        <div className="flex flex-col gap-2 text-white text-xs/4 mt-3 leading-[1.4]">
          <p>
            <span className="font-bold">
              За последние десятилетия накопилось множество
            </span>{" "}
            неразрешённых вопросов, связанных с охраной объектов культурного
            наследия, исторических зданий и природного ландшафта. Одновременно
            с этим существует запрос на реконструкцию и реновацию городской
            среды центральной части Владивостока.
          </p>
          <p>
            <span className="font-bold">С целью создания баланса</span>{" "}
            в текущих условиях между требованиями по охране исторической среды
            и запросом к реновации городской территории, разработана
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

        <div className="relative">
          <img
            src="/bg-1.png"
            className="absolute z-10 pointer-events-none scale-[2.3] top-10 left-1/2 right-1/2 -translate-x-1/2 w-screen max-w-none"
            alt="background"
          />
          <div className="relative z-10">
            <h3 className="pt-20 text-black text-3xl/8 font-bold font-bebas uppercase tracking-[0.04em]">
              Для кого этот сайт?
            </h3>
            <div className="space-y-6">
              {/* Первый пункт */}
              <div className="flex items-start gap-3">
                <span className="text-orange font-bold font-bebas text-3xl leading-none select-none">
                  01
                </span>
                <div>
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
                <div>
                  <div className="font-bold">
                    Для тех, кто видит в объектах культурного наследия и
                    исторических зданиях не проблему,
                  </div>
                  <div>
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
                <div>
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
        </div>
      </div>
    </main>
  );
}

export default Main;
