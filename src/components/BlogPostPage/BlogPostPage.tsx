import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/github.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { findPostBySlug, getReadingTime } from '../../blog-utils';
import type { TBlogPost } from '../../types';

function BlogPostPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug?: string }>();
  const [blogPost, setBlogPost] = useState<TBlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    hljs.registerLanguage('typescript', typescript);
  }, []);

  useEffect(() => {
    async function loadPost() {
      if (!slug) {
        navigate('/blog');
        return;
      }

      setIsLoading(true);
      const post = await findPostBySlug(slug);
      if (!post) {
        navigate('/blog', { replace: true });
        return;
      }
      setBlogPost(post);
      setIsLoading(false);
    }

    loadPost();
  }, [slug, navigate]);

  useEffect(() => {
    if (blogPost && !isLoading) {
      hljs.highlightAll();
    }
  }, [blogPost, isLoading]);

  if (isLoading) {
    return (
      <section
        className="py-4 text-primary-white"
        aria-busy="true"
        aria-label="Loading post"
      >
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-28 rounded bg-white/5" />
          <div className="space-y-3 border-l-2 border-accent-purple/40 pl-4">
            <div className="h-10 max-w-xl rounded bg-white/10" />
            <div className="h-4 w-48 rounded bg-white/5" />
          </div>
          <div className="space-y-2 pt-2">
            <div className="h-3 w-full rounded bg-white/5" />
            <div className="h-3 w-full rounded bg-white/5" />
            <div className="h-3 max-w-[90%] rounded bg-white/5" />
          </div>
        </div>
      </section>
    );
  }

  if (!blogPost) {
    return null;
  }

  const readingTime = getReadingTime(blogPost.content);

  return (
    <article className="blog-post py-4 text-primary-white" id="post-page">
      <header className="mb-10 space-y-3 border-b border-white/10 pb-8 pt-8">
        <h1 className="border-l-2 border-accent-purple pl-4 text-3xl font-semibold tracking-tight text-primary-white sm:text-4xl">
          {blogPost.title}
        </h1>
        <p className="pl-[calc(0.5rem+2px)] text-sm text-text-grey">
          {blogPost.created_date}{' '}
          <span className="text-text-grey/60">&middot;</span> {readingTime} min
          read
        </p>
      </header>

      <div className="blog-post-prose prose prose-lg prose-invert max-w-none leading-relaxed prose-headings:scroll-mt-20 prose-a:text-accent-purple prose-a:no-underline hover:prose-a:underline">
        <ReactMarkdown>{blogPost.content}</ReactMarkdown>
      </div>

      <Link
        to="/blog"
        className="mt-12 inline-flex items-center gap-1 text-sm tracking-wide text-text-grey hover:text-accent-purple"
      >
        <span aria-hidden>←</span> back to blog
      </Link>
    </article>
  );
}

export default BlogPostPage;
