import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { useLayoutEffect } from 'react';

import { Navbar } from './components/home/Navbar/Navbar';
import { Hero } from './components/home/Hero/Hero';
import { About } from './components/home/About/About';
import { Contact } from './components/home/Contact/Contact';
import { IndexPage } from './components/blog/IndexPage/IndexPage';
import { Routes, Route } from 'react-router-dom';
import { PostPage } from './components/blog/PostPage/PostPage';

import styles from './App.module.css';

function HomePage() {
    return (
        <div className={styles.App}>
            <Navbar />
            <Hero />
            <About />
            <Contact />
        </div>
    );
}

function BlogIndexPage() {
    return (
        <div className={styles.App}>
            <Navbar />
            <IndexPage />
            <Contact />
        </div>
    );
}

function BlogPost() {
    useLayoutEffect(() => {
        hljs.highlightAll();
    }, []);

    return (
        <div className={styles.App}>
            <Navbar />
            <PostPage />
            <Contact />
        </div>
    );
}

export function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
    );
}
