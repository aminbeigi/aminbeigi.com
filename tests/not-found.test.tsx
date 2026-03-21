import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/components/HomePage/HomePage';
import BlogIndexPage from '../src/components/BlogIndexPage/BlogIndexPage';
import NotFoundPage from '../src/components/NotFoundPage/NotFoundPage';
import Layout from '../src/components/Layout/Layout';
import BlogPostPage from '../src/components/BlogPostPage/BlogPostPage';

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

describe('Not Found Page', () => {
  it('renders 404 page for an unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/some-nonexistent-page']}>
        <TestApp />
      </MemoryRouter>
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
    expect(
      screen.getByText(
        "The page you're looking for doesn't exist or has been moved."
      )
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute(
      'href',
      '/'
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
