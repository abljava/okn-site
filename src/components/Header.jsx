import Burger from "./Burger";

function Header() {
  return (
    <header className="relative z-10 text-white py-1 md:py-2 lg:py-5 border-b border-white/40 bg-blueGray">
      <div className=" max-w-[1440px] mx-auto flex justify-between items-center gap-6 px-5 2xl:px-0">
        <div className="pl-7 md:hidden">
          <Burger />
        </div>
        <a href="/" className="w-12 md:w-12 lg:w-24 flex-shrink-0">
          <img src="/logo.png" alt="logo" />
        </a>
        <nav className="hidden md:flex flex-1 justify-between items-center gap-6 text-[9px] lg:text-sm xl:text-lg uppercase font-medium tracking-wide">
          <a href="#" className="hover:text-orange-400">
            Исторические сведения
          </a>
          <a href="#" className="hover:text-orange-400">
            Предмет охраны достопримечательного места
          </a>
          <a href="#" className="hover:text-orange-400">
            Режимы использования земель и требования к градостроительному
            регламенту
          </a>
          <a href="#" className="hover:text-orange-400">
            Авторский коллектив
          </a>
        </nav>
        <button className="text-white text-[9px] font-semibold lg:text-base uppercase bg-orange rounded px-3 py-1.5 lg:px-6 lg:py-4 ml-4">
          <span>Написать на почту</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
