import Burger from "../Burger/Burger";

function Header() {
  return (
    <header className="relative z-10 text-white py-2">
      <div className="flex justify-between items-center mx-5">
        <Burger/>
        <a href="/" className="w-12">
          <img src="/logo.png" alt="logo" />
        </a>
        <button className="text-white text-[9px] font-semibold uppercase bg-orange rounded px-3 py-1.5">
          <span>Написать на почту</span>
        </button>
      </div>
      <div className="mt-1 border-b border-white/30 mx-5"></div>
    </header>
  );
}

export default Header;
