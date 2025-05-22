import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-[10px] lg:text-base text-white uppercase py-4 bg-blueGray" aria-label="Breadcrumb">
      <ol className="list-none flex flex-wrap gap-2">
        <li>
          <Link to="/" className="hover:underline">
            Главная
          </Link>
        </li>
        {pathnames.map((name, idx) => {
          const routeTo = "/" + pathnames.slice(0, idx + 1).join("/");
          const isLast = idx === pathnames.length - 1;
          return (
            <li key={routeTo} className="flex items-center gap-2">
              <span className="mx-1">|</span>
              {isLast ? (
                <span className="">{decodeURIComponent(name)}</span>
              ) : (
                <Link to={routeTo} className="hover:underline text-blue-700">
                  {decodeURIComponent(name)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;