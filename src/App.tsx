import { ReactNode, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

import { Navbar } from './components/home/Navbar/Navbar';
import { Hero } from './components/home/Hero/Hero';
import { About } from './components/home/About/About';
import { Contact } from './components/home/Contact/Contact';
import { IndexPage } from './components/blog/IndexPage/IndexPage';
import { PostPage } from './components/blog/PostPage/PostPage';
import { NotFoundPage } from './components/404/NotFoundPage';

import styles from './App.module.css';

interface PageLayoutProps {
    children: ReactNode;
}

function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className={styles.App}>
            <Navbar />
            {children}
            <Contact />
        </div>
    );
}

function HomePage() {
    return (
        <PageLayout>
            <Hero />
            <About />
        </PageLayout>
    );
}

function BlogIndexPage() {
    return (
        <PageLayout>
            <IndexPage />
        </PageLayout>
    );
}

function BlogPost() {
    useEffect(() => {
            hljs.highlightAll();
    }, []);

    return (
        <PageLayout>
            <PostPage />
        </PageLayout>
    );
}

export function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
