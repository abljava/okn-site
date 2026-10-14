import { Link } from "react-router-dom";
import Burger from "./Burger";
import pageNames from "../utils/pageNames";

function Header() {
  return (
    <header className="relative z-20 text-white py-1 md:py-2 lg:py-5 border-b border-white/40">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center gap-3 lg:gap-4 xl:gap-6 px-5 2xl:px-0">
        <div className="md:hidden">
          <Burger />
        </div>
        <Link to="/" className="w-12 md:w-12 xl:w-24 flex-shrink-0">
          <img src="/logo.png" alt="logo" />
        </Link>
        <nav className="hidden md:flex flex-1 min-w-0 justify-between items-center gap-3 lg:gap-4 xl:gap-6 text-[9px] lg:text-sm xl:text-lg uppercase font-medium tracking-wide">
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
          className="shrink-0 whitespace-nowrap text-white text-[9px] font-semibold lg:text-xs xl:text-base uppercase bg-orange rounded px-3 py-1.5 lg:px-4 lg:py-2 xl:px-6 xl:py-4"
        >
          <span>Написать на почту</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
