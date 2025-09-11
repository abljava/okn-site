import { useState } from "react";
import { Link } from "react-router-dom";
import pageNames from "../utils/pageNames";

function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Иконка бургера */}
      <button
        className="flex items-center gap-2 text-white text-lg z-20"
        onClick={() => setOpen(true)}
        aria-label="Открыть меню"
      >
        <span className="flex flex-col justify-center h-6 w-6">
          <span className="block h-0.5 w-6 bg-white mb-1.5 rounded"></span>
          <span className="block h-0.5 w-6 bg-white mb-1.5 rounded"></span>
          <span className="block h-0.5 w-6 bg-white rounded"></span>
        </span>
        <span className="text-xs uppercase">меню</span>
      </button>

      {/* Модальное меню */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex ">
          <div className="relative self-start bg-white rounded-xl shadow-xl p-8 pb-16 flex flex-col items-center h-auto max-h-none">
            <button
              className="absolute top-3 right-3 text-black text-xl"
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
            >
              &times;
            </button>
            <nav className="flex flex-col gap-6 text-black text-sm uppercase mt-4">
              <Link to="/" onClick={() => setOpen(false)} className="hover:text-orange transition-all">
                Главная
              </Link>
              {pageNames.map((item) => (
                <Link
                  key={item.id}
                  to={`/${item.url}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-orange transition-all"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Burger;
