import { Link } from 'react-router-dom';

function Blog() {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">blog</h2>
            <ul>
                <li className="mb-2">
                    <Link
                        to="/blog/functional-programming-in-typescript"
                        className="text-blue-500 hover:underline hover:text-accentPurple"
                    >
                        functional programming in typescript
                    </Link>
                    <span className="text-textGrey ml-4">aug 3, 2024</span>
                </li>
            </ul>
            <Link
                to="/blog"
                className="text-blue-500 hover:underline hover:text-accentPurple"
            >
                all posts →
            </Link>
        </>
    );
}

export default Blog;
