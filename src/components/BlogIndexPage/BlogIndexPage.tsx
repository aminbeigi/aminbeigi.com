import { Link } from 'react-router-dom';
import { blogPosts } from '../../data';
import { TBlogPost } from '../../types';
import { convertTitleToSlug } from '../../utils';

interface TPostProps {
    date: string;
    title: string;
}

function Post({ date, title }: TPostProps) {
    return (
        <div className="p-8 max-w-4xl w-full">
            <div className="text-textGrey text-xl mb-2">{date}</div>
            <Link to={`/blog/${convertTitleToSlug(title)}`}>
                <h1 className="text-blue-500 hover:underline hover:text-accentPurple text-4xl font-bold">
                    {title}
                </h1>
            </Link>
        </div>
    );
}

function BlogIndexPage() {
    return (
        <div className="text-primaryWhite flex flex-col items-center">
            {blogPosts.map((blogPost: TBlogPost) => (
                <Post
                    key={blogPost.id}
                    title={blogPost.title}
                    date={blogPost.date}
                />
            ))}
        </div>
    );
}

export default BlogIndexPage;
