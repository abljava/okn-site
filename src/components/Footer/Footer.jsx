import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative z-10 text-white bg-bgGrey rounded-t-3xl px-6 py-9 xl:px-12 2xl:px-60 2xl:pb-10 2xl:pt-16">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 md:grid md:[grid-template-columns:auto_1fr] md:gap-x-7">
        {/* Левая колонка: Логотип */}
        <div className="flex justify-center md:justify-start items-start">
          <Link to="/" className="w-16 2xl:w-36 flex-shrink-0">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        {/* Правая колонка: всё остальное */}
        <div className="flex flex-col gap-6 md:gap-2 xl:gap-8">
          {/* Меню */}
          <nav>
            <ul className="flex flex-col md:flex-row md:gap-7 items-center md:items-start gap-5 text-xs font-medium uppercase md:text-[10px] xl:text-lg">
              <li>
                <Link to="/">Исторические сведения</Link>
              </li>
              <li>
                <Link to="/">Предмет охраны Достопримечательного места</Link>
              </li>
              <li className="text-center md:text-left">
                <Link to="/">
                  режимы использования земель и&nbsp;требования&nbsp;к&nbsp;градостроительному регламенту
                </Link>
              </li>
              <li>
                <Link to="/">Авторский коллектив</Link>
              </li>
            </ul>
          </nav>
          {/* Контакты и копирайт */}
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-2 md:pt-4 xl:pt-10 text-xs md:text-[10px] xl:text-base md:border-t md:border-white/20 ">
            <a
              href="mailto:hist.center-vl@mail.ru"
              className="underline hover:text-orange transition-colors"
            >
              hist.center-vl@mail.ru
            </a>
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <p>©ООО 2024. Все права защищены</p>
              <Link
                to="/"
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
