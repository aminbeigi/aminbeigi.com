import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TBlogPost } from '../../types';
import { getBlogPosts, getReadingTime } from '../../blog-utils';

const EXCERPT_MAX_LENGTH = 150;

interface TPostProps {
  created_date: string;
  title: string;
  slug: string;
  content: string;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/```[\s\S]*?```/g, '')
    .replace(/#{1,6}\s+/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`~]/g, '')
    .replace(/\n+/g, ' ')
    .trim();
}

function getExcerpt(content: string): string {
  const stripped = stripMarkdown(content);
  if (stripped.length <= EXCERPT_MAX_LENGTH) {
    return stripped;
  }
  return stripped.slice(0, EXCERPT_MAX_LENGTH).replace(/\s+\S*$/, '') + '...';
}

function Post({ created_date, title, slug, content }: TPostProps) {
  const readingTime = getReadingTime(content);
  const excerpt = getExcerpt(content);

  return (
    <article className="py-6 border-b border-white/10 last:border-b-0">
      <div className="text-text-grey text-sm mb-2">
        {created_date} &middot; {readingTime} min read
      </div>
      <Link to={`/blog/${slug}`}>
        <h2 className="text-2xl font-medium text-blue-500 hover:underline hover:text-accent-purple">
          {title}
        </h2>
      </Link>
      <p className="text-text-grey mt-2 text-sm leading-relaxed">{excerpt}</p>
    </article>
  );
}

function BlogIndexPage() {
  const [blogPosts, setBlogPosts] = useState<TBlogPost[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const posts = await getBlogPosts();
      setBlogPosts(posts);
    }

    loadPosts();
  }, []);

  return (
    <div className="text-primary-white p-8">
      <div>
        {blogPosts.map((blogPost: TBlogPost) => (
          <Post
            key={blogPost.id}
            title={blogPost.title}
            created_date={blogPost.created_date}
            slug={blogPost.slug}
            content={blogPost.content}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogIndexPage;
