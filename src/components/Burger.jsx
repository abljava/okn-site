import { useState } from "react";
import { Link } from "react-router-dom";

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
          <div className="relative bg-white rounded-xl shadow-xl px-8 py-10 flex flex-col items-center min-w-[220px]">
            <button
              className="absolute top-3 right-3 text-black text-xl"
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
            >
              &times;
            </button>
            <nav className="flex flex-col gap-6 text-black text-sm uppercase mt-4">
              <Link to="/" onClick={() => setOpen(false)}>
                Главная
              </Link>
              <Link to="/history" onClick={() => setOpen(false)}>
                История
              </Link>
              {/* Добавьте остальные ссылки по необходимости */}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Burger;
