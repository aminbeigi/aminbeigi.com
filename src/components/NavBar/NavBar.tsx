import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'home', isActive: location.pathname === '/' },
    {
      path: '/blog',
      label: 'blog',
      isActive: location.pathname.includes('/blog'),
    },
  ];

  const getLinkClassName = (isActive: boolean) => {
    const baseClasses =
      'hover:underline decoration-2 underline-offset-4 transition-colors';
    const activeClasses =
      'text-accentPurple underline decoration-2 underline-offset-4';
    const inactiveClasses = 'text-textGrey hover:text-accentPurple';

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <nav
      className="flex justify-center space-x-12 text-xl mb-8"
      role="navigation"
      aria-label="Main navigation"
    >
      {navLinks.map(({ path, label, isActive }) => (
        <Link
          key={path}
          to={path}
          className={getLinkClassName(isActive)}
          aria-current={isActive ? 'page' : undefined}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default NavBar;
