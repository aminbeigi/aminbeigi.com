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

// Create a test router component similar to App but without BrowserRouter
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

describe('Homepage Integration', () => {
  it('renders the homepage without crashing and displays core content', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <TestApp />
      </MemoryRouter>
    );

    // Check main heading
    expect(screen.getByText('amin beigi')).toBeInTheDocument();

    // Check location and job info
    expect(screen.getByText(/sydney, australia/i)).toBeInTheDocument();
    expect(screen.getByText(/insurance australia group/i)).toBeInTheDocument();

    // Check social links are rendered
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /mail/i })).toBeInTheDocument();

    // Check navigation is present
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Check key sections are present
    expect(screen.getByText(/random facts/i)).toBeInTheDocument();
    expect(screen.getByText(/skills/i)).toBeInTheDocument();

    // Check that page content is displayed (not showing error states)
    expect(screen.queryByText(/404/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/not found/i)).not.toBeInTheDocument();
  });
});
