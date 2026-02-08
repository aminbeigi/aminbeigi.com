import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/github.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findPostBySlug } from '../../blog-utils';
import type { TBlogPost } from '../../types';

function BlogPostPage() {
  const navigate = useNavigate();
  const { id: slug } = useParams<{ id?: string }>();
  const [blogPost, setBlogPost] = useState<TBlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Register only the languages you need
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
      setBlogPost(post);
      setIsLoading(false);

      // if we don't find a blog post go to the index page
      if (!post) {
        navigate('/blog');
        return;
      }
    }

    loadPost();
  }, [slug, navigate]);

  useEffect(() => {
    if (blogPost && !isLoading) {
      // Highlight code blocks after content is rendered
      hljs.highlightAll();
    }
  }, [blogPost, isLoading]);

  if (isLoading) {
    return (
      <section className="max-w-4xl mx-auto px-4 py-8 bg-background-black text-primary-white">
        <div>Loading...</div>
      </section>
    );
  }

  if (!blogPost) {
    return null;
  }

  return (
    <section
      className="max-w-4xl mx-auto px-4 py-8 bg-background-black text-primary-white"
      id="post-page"
    >
      <h1 className="text-4xl font-bold text-primary-white mb-2">
        {blogPost.title}
      </h1>
      <p className="text-xl text-text-grey mb-6">{blogPost.created_date}</p>
      <style>
        {`
          #post-page pre {
            border: none !important;
            background-color: #ffffffff !important;
          }
          #post-page code {
            border: none !important;
          }
        `}
      </style>
      <div className="prose prose-lg prose-invert max-w-none leading-relaxed">
        <ReactMarkdown>{blogPost.content}</ReactMarkdown>
      </div>
    </section>
  );
}

export default BlogPostPage;
