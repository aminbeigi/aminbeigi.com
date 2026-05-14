import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/github.css';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { findPostBySlug, getReadingTime } from '../../blog-utils';

function BlogPostPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug?: string }>();

  useEffect(() => {
    hljs.registerLanguage('typescript', typescript);
  }, []);

  const blogPost = slug ? findPostBySlug(slug) : null;

  useEffect(() => {
    if (!slug || !blogPost) {
      navigate('/blog', { replace: true });
    }
  }, [slug, blogPost, navigate]);

  useEffect(() => {
    if (blogPost) {
      hljs.highlightAll();
    }
  }, [blogPost]);

  if (!blogPost) {
    return null;
  }

  const readingTime = getReadingTime(blogPost.content);

  return (
    <article className="blog-post px-8 pb-8 text-primary-white" id="post-page">
      <header className="mb-10 space-y-3 border-b border-white/10 pb-8">
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
