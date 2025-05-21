import Burger from "../Burger/Burger";

function Header() {
  return (
    <header className="relative z-10 text-white 2xl:max-w-[1440px] 2xl:mx-auto lg:mx-10 xl:mx-20 mx-5 lg:py-5 py-1 border-b border-white/40 bg-blueGray">
      <div className="flex justify-between items-center gap-6">
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
