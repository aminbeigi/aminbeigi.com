import { Link } from 'react-router-dom';
import { convertTitleToSlug, getBlogPosts } from '../../utils';
import { TBlogPost } from '../../types';

interface TProps {
    title: string;
    date: string;
}

function BlogPost(props: TProps) {
    return (
        <ul>
            <li className="mb-2.5 flex flex-col">
                <Link
                    to={`/blog/${convertTitleToSlug(props.title)}`}
                    className="text-blue-500 hover:underline hover:text-accentPurple"
                >
                    {props.title.toLocaleLowerCase()}
                </Link>
                <span className="text-textGrey">
                    {props.date.toLowerCase()}
                </span>
            </li>
        </ul>
    );
}

function Blog() {
    return (
        <>
            <h2 className="text-xl font-medium mb-4">blog</h2>
            {getBlogPosts().map((blogPost: TBlogPost, index: number) => (
                <BlogPost
                    key={index}
                    title={blogPost.title}
                    date={blogPost.date}
                />
            ))}
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
