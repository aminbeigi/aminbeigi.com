import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findPostBySlug } from '../../utils';

function BlogPostPage() {
    const navigate = useNavigate();
    const { id: slug } = useParams<{ id?: string }>();
    const blogPost = findPostBySlug(slug ?? '');

    useEffect(() => {
        // if we don't find a blog post go to the index page
        if (!blogPost) {
            navigate('/blog');
        }

        hljs.highlightAll();
    }, [blogPost, navigate]);

    if (!blogPost) {
        return null;
    }

    return (
        <section
            className="max-w-4xl mx-auto px-4 py-8 bg-backgroundBlack text-primaryWhite"
            id="post-page"
        >
            <h1 className="text-4xl font-bold text-primaryWhite mb-2">
                {blogPost.title}
            </h1>
            <p className="text-xl text-textGrey mb-6">{blogPost.date}</p>
            <ReactMarkdown className="prose prose-lg prose-invert max-w-none leading-relaxed">
                {blogPost.content}
            </ReactMarkdown>
        </section>
    );
}

export default BlogPostPage;
