import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();

    return (
        <nav className="flex justify-center space-x-12 text-xl">
            <Link
                to="/"
                className={`hover:underline decoration-2 underline-offset-4 ${
                    location.pathname === '/'
                        ? '!text-accentPurple underline decoration-2 underline-offset-4'
                        : 'text-textGrey hover:!text-accentPurple'
                }`}
            >
                home
            </Link>
            <Link
                to="/blog"
                className={`hover:underline decoration-2 underline-offset-4 ${
                    location.pathname === '/blog'
                        ? '!text-accentPurple underline decoration-2 underline-offset-4'
                        : 'text-textGrey hover:!text-accentPurple'
                }`}
            >
                blog
            </Link>
        </nav>
    );
}

export default NavBar;
