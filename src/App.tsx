import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import BlogIndexPage from './components/BlogIndexPage/BlogIndexPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Layout from './components/Layout/Layout';
import BlogPostPage from './components/BlogPostPage/BlogPostPage';

function printCoolMessageToConsole(): void {
    const msg = '%c Hello 🕵️! Welcome to my site';
    const styles = [
        'font-size: 12px',
        'font-family: monospace',
        'background: white',
        'display: inline-block',
        'color: black',
        'padding: 8px 19px',
        'border: 1px dashed;'
    ].join(';');
    console.log(msg, styles);
}

printCoolMessageToConsole();

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/blog" element={<BlogIndexPage />} />
                    <Route path="/blog/:id" element={<BlogPostPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
