import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/components/HomePage/HomePage';
import BlogIndexPage from '../src/components/BlogIndexPage/BlogIndexPage';
import NotFoundPage from '../src/components/NotFoundPage/NotFoundPage';
import Layout from '../src/components/Layout/Layout';
import BlogPostPage from '../src/components/BlogPostPage/BlogPostPage';

const MOCK_BLOGS = {
  'my-first-post': {
    title: 'My First Post',
    created_date: '2024-01-01',
    content: 'Hello world from my blog',
  },
};

function TestApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

describe('Blog Post Page', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve(MOCK_BLOGS),
      })
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders a blog post with title, date, and content', async () => {
    render(
      <MemoryRouter initialEntries={['/blog/my-first-post']}>
        <TestApp />
      </MemoryRouter>
    );

    expect(await screen.findByText('My First Post')).toBeInTheDocument();
    expect(screen.getByText('2024-01-01')).toBeInTheDocument();
    expect(screen.getByText('Hello world from my blog')).toBeInTheDocument();

    expect(screen.getByRole('navigation')).toBeInTheDocument();

    expect(screen.queryByText(/404/i)).not.toBeInTheDocument();
  });
});
