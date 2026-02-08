import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TBlogPost } from '../../types';
import { getBlogPosts } from '../../blog-utils';

interface TPostProps {
  created_date: string;
  title: string;
  slug: string;
}

function Post({ created_date, title, slug }: TPostProps) {
  return (
    <div className="p-8 max-w-4xl w-full">
      <div className="text-text-grey text-xl mb-2">{created_date}</div>
      <Link to={`/blog/${slug}`}>
        <h1 className="text-blue-500 hover:underline hover:text-accent-purple text-4xl font-bold">
          {title}
        </h1>
      </Link>
    </div>
  );
}

function BlogIndexPage() {
  const [blogPosts, setBlogPosts] = useState<TBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      setIsLoading(true);
      const posts = await getBlogPosts();
      setBlogPosts(posts);
      setIsLoading(false);
    }

    loadPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="text-primary-white flex flex-col items-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="text-primary-white flex flex-col items-center">
      {blogPosts.map((blogPost: TBlogPost) => (
        <Post
          key={blogPost.id}
          title={blogPost.title}
          created_date={blogPost.created_date}
          slug={blogPost.slug}
        />
      ))}
    </div>
  );
}

export default BlogIndexPage;
