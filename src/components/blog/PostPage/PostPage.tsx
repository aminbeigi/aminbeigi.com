import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

import styles from './PostPage.module.css';
import { findPostBySlug } from '../../../utils';

export function PostPage() {
    const { id: slug } = useParams();
    const blogPost = findPostBySlug(slug!)!;

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
