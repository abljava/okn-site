import { Link, useLocation } from 'react-router-dom';
import pageNames from '../utils/pageNames';

function getPageTitle(url) {
  const found = pageNames.find((item) => item.url === url);
  return found ? found.title : null;
}

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav
      className='text-[10px] lg:text-base text-white uppercase py-4'
      aria-label='Breadcrumb'
    >
      <ol className='list-none flex flex-wrap gap-2'>
        <li>
          <Link to='/' className='hover:underline'>
            Главная
          </Link>
        </li>
        {pathnames.map((name, idx) => {
          const routeTo = '/' + pathnames.slice(0, idx + 1).join('/');
          const isLast = idx === pathnames.length - 1;
          const displayName = getPageTitle(name) || decodeURIComponent(name);
          return (
            <li
              key={routeTo}
              className='flex items-center gap-2 max-w-[250px] md:max-w-full'
            >
              <span className='mx-1'>|</span>
              {isLast ? (
                <span
                  className='block overflow-hidden text-ellipsis whitespace-nowrap max-w-full'
                  title={displayName}
                >
                  {displayName}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className='hover:underline block overflow-hidden text-ellipsis whitespace-nowrap max-w-full'
                  title={displayName}
                >
                  {displayName}
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
