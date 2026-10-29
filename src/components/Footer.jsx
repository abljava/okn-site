import { Link } from "react-router-dom";
import pageNames from "../utils/pageNames";

function Footer() {
  return (
    <footer className="relative z-10 text-white bg-bgGrey rounded-t-3xl px-6 py-5 md:py-9 xl:px-12 2xl:px-60 2xl:pb-10 2xl:pt-16">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-3 md:grid md:[grid-template-columns:auto_1fr] md:gap-8 md:gap-x-7">
        {/* Левая колонка: Логотип */}
        <div className="flex justify-center md:justify-start items-start">
          <Link to="/" className="w-10 md:w-16 2xl:w-36 flex-shrink-0">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        {/* Правая колонка: всё остальное */}
        <div className="flex flex-col gap-3 md:gap-2 xl:gap-8">
          {/* Меню */}
          <nav>
            <ul className="flex flex-col md:flex-row md:justify-between md:gap-7 items-center md:items-start gap-1.5 text-[13px] md:text-[11px] 2xl:text-[13px] leading-snug font-medium uppercase">
              {pageNames.map((item) => (
                <Link
                  key={item.id}
                  to={`/${item.url}`}
                  className="hover:text-orange transition-all text-center md:text-left"
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          </nav>
          {/* Контакты и копирайт */}
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-2 md:pt-4 xl:pt-10 text-[11px] 2xl:text-[13px] md:border-t md:border-white/40/20 ">
            <a
              href="mailto:vladhistorycenter@gmail.com"
              className="underline hover:text-orange transition-colors"
            >
              vladhistorycenter@gmail.com
            </a>
            <div className="flex flex-col md:flex-row items-center md:gap-4">
              <p>©ООО 2024. Все права защищены</p>
              <Link
                to="/politics"
                className="underline hover:text-orange transition-colors"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
