import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/components/HomePage/HomePage';
import BlogIndexPage from '../src/components/BlogIndexPage/BlogIndexPage';
import NotFoundPage from '../src/components/NotFoundPage/NotFoundPage';
import Layout from '../src/components/Layout/Layout';
import BlogPostPage from '../src/components/BlogPostPage/BlogPostPage';

const MOCK_BLOGS = [
  {
    id: 0,
    title: 'My First Post',
    created_date: '2024-01-01',
    content: 'Hello world',
    slug: 'my-first-post',
  },
  {
    id: 1,
    title: 'Second Post',
    created_date: '2024-02-01',
    content: 'Another post',
    slug: 'second-post',
  },
];

vi.mock('../src/blog-utils', () => ({
  getBlogPosts: () => MOCK_BLOGS,
  findPostBySlug: (slug: string) =>
    MOCK_BLOGS.find((p) => p.slug === slug) ?? null,
  getReadingTime: () => 1,
}));

function TestApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

describe('Blog Index Page', () => {
  it('renders blog post listings after loading', () => {
    render(
      <MemoryRouter initialEntries={['/blog']}>
        <TestApp />
      </MemoryRouter>
    );

    expect(screen.getByText('My First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();

    expect(screen.getByText(/2024-01-01/)).toBeInTheDocument();
    expect(screen.getByText(/2024-02-01/)).toBeInTheDocument();

    expect(screen.getByRole('navigation')).toBeInTheDocument();

    expect(screen.queryByText(/404/i)).not.toBeInTheDocument();
  });
});
