import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative z-10 text-white bg-bgGrey rounded-t-3xl px-5 py-9 2xl:px-60 2xl:pb-10 2xl:pt-16">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 md:grid md:[grid-template-columns:auto_1fr] md:gap-x-12">
        {/* Левая колонка: Логотип */}
        <div className="flex justify-center md:justify-start items-start">
          <Link to="/" className="w-16 2xl:w-36 flex-shrink-0">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        {/* Правая колонка: всё остальное */}
        <div className="flex flex-col gap-6">
          {/* Меню */}
          <nav>
            <ul className="flex flex-col md:flex-row md:gap-12 items-center md:items-start gap-5 text-xs font-medium uppercase">
              <li>
                <Link to="/">Исторические сведения</Link>
              </li>
              <li>
                <Link to="/">Предмет охраны Достопримечательного места</Link>
              </li>
              <li className="text-center md:text-left">
                <Link to="/">
                  режимы использования земель и требования к градостроительному регламенту
                </Link>
              </li>
              <li>
                <Link to="/">Авторский коллектив</Link>
              </li>
            </ul>
          </nav>
          {/* Контакты и копирайт */}
          <div className="flex flex-col items-center md:flex-row md:justify-between gap-2 text-xs">
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
