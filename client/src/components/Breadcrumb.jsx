import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
  const location = useLocation();

  // Split the pathname and remove empty parts
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav>
      <ol className="flex space-x-2 text-gray-600">
        {/* Home link */}
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Map through each part of the path */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={to}>
              <span>{' > '}</span>
              <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
