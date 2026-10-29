import { Link } from "react-router-dom";
import Burger from "./Burger";
import pageNames from "../utils/pageNames";

function Header() {
  return (
    <header className="relative z-20 shrink-0 text-white py-1.5 md:py-2 2xl:py-3 border-b border-white/40">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center gap-3 lg:gap-4 px-5 2xl:px-0">
        <div className="md:hidden">
          <Burger />
        </div>
        <Link to="/" className="w-10 md:w-11 xl:w-14 2xl:w-16 flex-shrink-0">
          <img src="/logo.png" alt="logo" />
        </Link>
        <nav className="hidden md:flex flex-1 min-w-0 justify-between items-center gap-2 lg:gap-4 text-[11px] 2xl:text-[13px] leading-snug uppercase font-medium tracking-wide">
          {pageNames.map((item) => (
            <Link
              key={item.id}
              to={`/${item.url}`}
              className="hover:text-orange transition-all"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <a
          href="mailto:vladhistorycenter@gmail.com"
          className="shrink-0 whitespace-nowrap text-white text-[11px] 2xl:text-[13px] font-semibold uppercase bg-orange rounded px-3 py-1.5 2xl:px-5 2xl:py-2"
        >
          <span>Написать на почту</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
