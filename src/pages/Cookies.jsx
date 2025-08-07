import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BgOverlay from "../components/BgOverlay";
import Breadcrumbs from "../components/Breadcrumbs";

function Cookies() {
  const [showConsent, setShowConsent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowConsent(false);
    navigate("/");
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  return (
    <main className="relative bg-bg py-8 md:py-10 lg:py-20 px-5 md:px-16 xl:px-[200px] 2xl:text-2xl">
      <BgOverlay bgClass="bg-[url('/bgs/bg-history-mobile.png')] md:bg-[url('/bgs/bg-history-tablet.png')] lg:bg-[url('/bgs/bg-history.png')] 2xl:bg-[position:center_-150px]" />
      <Breadcrumbs />
      <div className="space-y-6 text-xs lg:text-base mb-16">
        <h1 className="text-3xl md:text-[40px] lg:text-[80px] text-darkGrey font-bold font-bebas mb-6 uppercase lg:py-5">
          Cookies
        </h1>

        <section>
          <div className="space-y-3">
            <p>
              Мы очень много работаем над сайтом «Достопримечательное место
              "Исторический центр города Владивостока». Делаем его современным,
              удобным, функциональным и, конечно, информативным. Знаем, как для
              вас важно, чтобы ничего не зависало, информация была актуальной,
              все продукты в каталогах соответствовали представленным в
              магазинах по цене, наличию и еще очень много других факторов. Мы
              хотим еще быстрее отвечать на запросы, реагировать на проблемы с
              сайтом и выбирать правильный вектор его развития. Для этого нам
              очень нужны ваши cookie.
            </p>

            <h3 className="font-semibold">Что это такое?</h3>
            <p>
              Говоря простым языком, cookie – это файлы, фрагменты данных с
              информацией о сайтах, куда заходит покупатель, переходах, времени,
              проведенном на какой-либо странице, то есть, некая статистика. Все
              данные хранятся прямо на ваших устройствах (компьютере, телефоне и
              т.д.). А мы берем их уже из внешних аналитических ресурсов,
              метрик, ни в коем случае не нарушая вашу конфиденциальность.
            </p>

            <h3 className="font-semibold">Зачем мы собираем cookie?</h3>
            <p>
              Повторимся – для общего удобства. Нам интересно и важно знать, что
              вы читаете на сайте, в каком разделе проводите больше всего
              времени, а где вам, совсем не интересно. На основании полученных
              данных мы можем четко отследить, что делаем правильно, а что, к
              сожалению, нет. Можем видеть, как растет ваша численность и
              насколько вы активны в целом.
            </p>

            <h3 className="font-semibold">Не хочу делиться cookie.</h3>
            <p>Хотите сделать так, чтобы ваши cookie не считывались?</p>
          </div>
        </section>
        <button
          onClick={declineCookies}
          className="w-[228px] md:w-[138px] lg:w-[274px] py-3 md:py-2 lg:py-4 text-xl md:text-[10px] lg:text-lg md:leading-none font-semibold text-orange uppercase border border-orange rounded"
        >
          Отклонить
        </button>
      </div>
    </main>
  );
}

export default Cookies;
