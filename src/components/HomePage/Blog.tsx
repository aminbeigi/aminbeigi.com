import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBlogPosts } from '../../blog-utils';
import { TBlogPost } from '../../types';

interface TProps {
  title: string;
  created_date: string;
  slug: string;
}

function BlogPost(props: TProps) {
  return (
    <ul>
      <li className="mb-2.5 flex flex-col">
        <Link
          to={`/blog/${props.slug}`}
          className="text-blue-500 hover:underline hover:text-accent-purple"
        >
          {props.title.toLowerCase()}
        </Link>
        <span className="text-text-grey">
          {props.created_date.toLowerCase()}
        </span>
      </li>
    </ul>
  );
}

function Blog() {
  const [blogPosts, setBlogPosts] = useState<TBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await getBlogPosts();
        setBlogPosts(posts);
      } catch (error) {
        console.error('Failed to load blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return (
      <>
        <h2 className="text-xl font-medium mb-4">blog</h2>
        <p className="text-text-grey">Loading posts...</p>
      </>
    );
  }

  return (
    <>
      <h2 className="text-xl font-medium mb-4">blog</h2>
      {blogPosts.map((blogPost: TBlogPost) => (
        <BlogPost
          key={blogPost.slug}
          title={blogPost.title}
          created_date={blogPost.created_date}
          slug={blogPost.slug}
        />
      ))}
      <Link
        to="/blog"
        className="text-blue-500 hover:underline hover:text-accent-purple"
      >
        all posts →
      </Link>
    </>
  );
}

export default Blog;
