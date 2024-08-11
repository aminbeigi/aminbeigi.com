import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './PostPage.module.css';
import { findPostBySlug } from '../../../utils';

export function PostPage() {
    const navigate = useNavigate();
    const { id: slug } = useParams<{ id?: string }>();
    const blogPost = findPostBySlug(slug ?? '');

    useEffect(() => {
        // if we don't find a blog post go to the index page
        if (!blogPost) {
            navigate('/blog');
        }
    }, [blogPost, navigate]);

    if (!blogPost) {
        return null;
    }

    return (
        <section className={styles.container} id="post-page">
            <h1 className={styles.title}>{blogPost.title}</h1>
            <p className={styles.date}>{blogPost.date}</p>

            <ReactMarkdown className={styles.content}>
                {blogPost.content}
            </ReactMarkdown>
        </section>
    );
}
