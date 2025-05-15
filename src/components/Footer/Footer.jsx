import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative z-10 text-white py-2 bg-bgGrey rounded-t-3xl px-5 py-9">
      <div className="flex flex-col items-center gap-8">
        <Link to="/" className="w-16">
          <img src="/logo.png" alt="logo" />
        </Link>
        <nav className="pb-8 border-b border-white/30">
          <ul className="flex flex-col items-center gap-5 text-xs font-medium uppercase">
            <li>
              <Link to="/" className="">
                Исторические сведения
              </Link>
            </li>
            <li>
              <Link to="/" className="">
                Предмет охраны Достопримечательного места
              </Link>
            </li>
            <li className="text-center">
              <Link to="/" className="">
                режимы использования земель и требования к градостроительному
                регламенту
              </Link>
            </li>
            <li>
              <Link to="/" className="">
                Авторский коллектив
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col items-center gap-4 text-xs">
          <a
            href="mailto:hist.center-vl@mail.ru"
            className="underline hover:text-orange transition-colors"
          >
            hist.center-vl@mail.ru
          </a>
          <p>©ООО 2024. Все права защищены</p>
          <Link
            to="/"
            className="underline hover:text-orange transition-colors"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
