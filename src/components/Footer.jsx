import { Link } from "react-router-dom";
import pageNames from "../utils/pageNames";

function Footer() {
  return (
    <footer className="relative z-10 shrink-0 text-white bg-bgGrey rounded-t-3xl px-5 py-4 md:px-6 md:py-4 xl:px-12 2xl:px-60 2xl:py-6">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-4 md:grid md:[grid-template-columns:auto_1fr] md:gap-x-5">
        {/* Левая колонка: Логотип */}
        <div className="flex justify-center md:justify-start items-start">
          <Link to="/" className="w-12 md:w-12 xl:w-14 2xl:w-20 flex-shrink-0">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        {/* Правая колонка: всё остальное */}
        <div className="flex flex-col gap-3 md:gap-2">
          {/* Меню */}
          <nav>
            <ul className="flex flex-col md:flex-row md:justify-between md:gap-4 items-center md:items-start gap-3 text-[13px] md:text-[11px] 2xl:text-[13px] leading-snug font-medium uppercase">
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
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-2 md:pt-2 text-[11px] 2xl:text-[13px] md:border-t md:border-white/40/20 ">
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
