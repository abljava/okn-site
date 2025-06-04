import Breadcrumbs from "../components/Breadcrumbs";
import { useState } from "react";
import { sectionOne } from "../utils/history/sections.js";
import { sectionTwo } from "../utils/history/sections.js";
import { photos } from "../utils/history/photos.js";

function History() {
  const [open, setOpen] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  console.log("sectionOne ", sectionOne);

  const handleShowPhotosClick = () => {
    setShowPhotos(!showPhotos);
  };

  return (
    <>
      <main className="relative pb-16 md:pb-6  z-10 px-5 2xl:text-2xl bg-[url('/images/bg-main.jpg')] bg-cover bg-center">
        <div className="md:max-w-[1440px] mx-auto">
          <Breadcrumbs />
          <section className="flex flex-col md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
            <div className="hidden md:block"></div>
            {/* Заголовок и подзаголовок */}
            <div className="relative z-10 grid pt-8 md:pr-44 md:pl-5 md:pt-10 xl:pt-12 xl:pr-0 2xl:pl-[100px] md:border-l-2 md:border-white/40 ">
              <h1 className="text-white text-3xl/8 md:text-3xl/[1.1] xl:text-[80px] font-bold font-bebas tracking-[0.04em]">
                Достопримечательное место "Исторический центр города
                Владивостока"
              </h1>
              <div className="justify-self-end pt-8 md:hidden">
                <img src="/images/photo-2.png" alt="photo" className="w-32" />
              </div>
            </div>
          </section>

          {/* Условный рендеринг: показываем контент или фотографии */}
          {!showPhotos ? (
            <>
              <section className="relative pt-4 md:pt-0 md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
                <div className="hidden md:block md:pt-80">
                  <img
                    src="/images/photo-1.png"
                    alt="photo"
                    className="w-full h-auto object-cover md:w-[130px] 2xl:w-[340px]"
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
                              href={`#${section.id}`}
                              className="block hover:text-orange-500"
                            >
                              {section.title}
                            </a>
                          </li>
                        ))}
                        <li className="">
                          <a
                            href="#intro"
                            className="block font-semibold hover:text-orange-500"
                          >
                            Историко-градостроительная справка
                          </a>
                        </li>
                        {sectionTwo.map((section) => (
                          <li key={section.id}>
                            <a
                              href={`#${section.id}`}
                              className="block hover:text-orange-500"
                            >
                              {section.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </nav>
                </div>
              </section>

              <section className="relative md:pt-0 md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr] ">
                <div className="hidden md:block self-center md:px-2">
                  <img src="images/photo-2.png" alt="photo" className="" />
                </div>
                <div className="md:border-l-2 md:border-white/40 md:pl-5 2xl:pl-[100px]">
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
                  <div className="flex flex-col py-8 md:py-5 space-y-8 md:space-y-6 text-xs xl:text-xl">
                    <p>
                      В июне 1859 г. генерал-губернатор Восточной Сибири граф
                      Николай Николаевич Муравьев-Амурский, посетил на борту
                      корвета-парохода «Америка» пролив Гамелен, разделяющий
                      обширный гористый полуостров и крупный остров, лежащий
                      напротив него. По его приказу «Америка» заходила во все
                      бухты северного побережья пролива, включая самую большую.
                      Места эти произвели на него очень сильное впечатление.
                      Граф распорядился назвать по аналогии с Константинополем
                      (Стамбулом), ключевым городом на пути из Европы в Азию и
                      столицей Османской империи, основные топонимы, а именно
                      пролив Босфор-Восточный, и бухту Золотой Рог.
                      Северо-западную часть бухты, удобной для устройства порта,
                      он предложил назвать Порт Владивосток – ясно обозначая
                      ключевой характер этого места для удержания
                      дальневосточных территорий России.
                    </p>
                    <p>
                      В марте 1860 г. Муравьев-Амурский отдал приказ об
                      основании военного поста в гавани Владивосток, сразу же
                      имея в виду создать здесь морской порт. По его приказу 20
                      июня 1860 г. с борта военного транспорта Сибирской
                      флотилии «Манджур» был высажен десант солдат 3-й роты
                      линейного батальона Восточной Сибири № 4 во главе с
                      прапорщиком Н.В. Комаровым, который и основал здесь
                      постоянный военный пост. В октябре 1860 г. в рапорте на
                      имя Генерал-адмирала великого князя Константина
                      Николаевича он разъяснял, что порт Владивосток по
                      сравнительной близости к Амуру и удобству сообщения с
                      бассейном этой реки, удовлетворяет вдобавок всем
                      требованиям морской науки, и поэтому должен быть главным
                      по своим морским учреждениям.
                    </p>
                    <p>
                      В течение последующих пятнадцати лет никаких значительных
                      работ по укреплению Владивостока не велось, несмотря на
                      его постепенный рост. Главной военной силой здесь все эти
                      годы оставался Горный дивизион линейной Забайкальской
                      артиллерийской бригады, прибывший во Владивосток под
                      командой прапорщика С.А. Гильдебранта в августе-сентябре
                      1862 г. и размещенный на окраинах тогдашнего поста, а
                      именно на вершинах горы Тигровой и расположенной к северу
                      от нее Батарейной сопки, что уже тогда указывало на
                      ключевое значение этих высот в системе обороны
                      Владивостока.
                    </p>
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
                  <div className="flex flex-col py-8 space-y-10 md:py-5 md:space-y-5 text-xs xl:text-xl">
                    <p>
                      16 февраля 1871 г., в соответствии с императорским указом,
                      Владивосток получил статус Главного порта Восточного
                      океана, который перенесли из Николаевска-на-Амуре. В 1875
                      г. во Владивостоке было введено городовое положение, то
                      есть он получил городское самоуправление, в статус города
                      Владивосток был возведен несколько позже, в 1880 г. Это
                      вывело Владивосток в ряды важнейших пунктов азиатской
                      части России. Однако лишь в 1876 г. главное инженерное
                      управление выделило 30 тыс. рублей на укрепление обороны
                      Владивостока и Николаевска-на-Амуре, поскольку в
                      преддверии Русско-турецкой войны 1877–1878 гг. резко
                      ухудшились отношения с Англией, имевшей большое влияние на
                      Китай. Основная часть выделенных средств предназначалась
                      Владивостоку как более важному и уязвимому пункту.
                    </p>
                    <p>
                      Летом 1876 г. из Николаевска-на-Амуре во Владивосток
                      командировали военного инженера штабс-капитана В.П.
                      Широкова для изучения вопроса об укреплении Владивостока
                      на месте. Из артиллерийского вооружения во Владивостоке на
                      складах к тому времени имелось в наличии два 6-дюймовых
                      нарезных стальных орудия, четыре чугунные 60 фунтовые
                      пушки, четыре 2-пудовые бомбовые пушки и одна 36-фунтовая.
                      Такой состав вооружения не мог обеспечить сколько-нибудь
                      удовлетворительную защиту, поэтому из Хабаровска во
                      Владивосток отправили десять 6-дюймовых нарезных мортир и
                      200 морских мин, однако до конца года они так и не
                      прибыли. Такое внимание к Владивостоку не было случайным,
                      поскольку уже 12 апреля 1877 г. Российская империя
                      объявила войну Турции, началась Русско-турецкая война
                      1877–1878 гг., в ходе которой во Владивостоке развернулось
                      полноценное оборонительное строительство
                    </p>
                  </div>
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
                  <div className="pt-8 md:pt-4 xl:pt-8 xl:pb-32">
                    <button
                      className="w-full py-3 xl:py-5 text-white text-sm xl:text-[22px] font-semibold lg:text-base uppercase bg-orange rounded 
            "
                      onClick={handleShowPhotosClick}
                    >
                      <span>Смотреть фото</span>
                    </button>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <section className="relative pt-4 md:pt-0 md:grid md:grid-cols-[167px_1fr] 2xl:grid-cols-[370px_1fr]">
              {/* Кнопка "Вернуться назад" в левой колонке на десктопе */}
              <div className="hidden md:block pt-8 md:pt-4 xl:pt-8 xl:pb-32">
                <button
                  className="w-full py-3 xl:py-5 text-white text-sm md:text-xs xl:text-[22px] font-semibold lg:text-base uppercase bg-darkGrey rounded"
                  onClick={handleShowPhotosClick}
                >
                  <span>Вернуться назад</span>
                </button>
              </div>
              <div className="md:border-l-2 md:border-white/40 md:pl-5 2xl:pl-[100px]">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {photos.map((photo, index) => (
                      <img
                        key={photo.id}
                        src={photo.src}
                        alt={photo.title}
                        className={`object-cover w-full ${index % 3 === 2 ? 'md:col-span-2 md:h-[200px]' : 'md:col-span-1 md:h-[150px]'}`}
                      />
                    ))}
                  </div>
                </div>
              </div> 
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export default History;
