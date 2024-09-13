import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="flex justify-center space-x-8 mb-4">
            <Link
                to="/"
                className="text-textGrey hover:text-accentPurple hover:underline"
            >
                home
            </Link>
            <Link
                to="/blog"
                className="text-textGrey hover:text-accentPurple hover:underline"
            >
                blog
            </Link>
        </nav>
    );
}

export default NavBar;
