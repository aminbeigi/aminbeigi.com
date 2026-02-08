import type { TBlogPost } from './types';

interface BlogsData {
  [slug: string]: {
    title: string;
    created_date: string;
    content: string;
  };
}

let blogsCache: BlogsData | null = null;
let blogPostsCache: TBlogPost[] | null = null;

export async function loadBlogs(): Promise<BlogsData> {
  if (blogsCache) return blogsCache;

  try {
    const response = await fetch('/blogs.json');
    if (!response.ok) {
      throw new Error(`Failed to load blogs: ${response.status}`);
    }
    blogsCache = await response.json();
    return blogsCache!;
  } catch (error) {
    console.error('Error loading blogs:', error);
    blogsCache = {};
    return blogsCache;
  }
}

export async function getBlogPosts(): Promise<TBlogPost[]> {
  if (blogPostsCache) return blogPostsCache;

  const blogsData = await loadBlogs();

  blogPostsCache = Object.entries(blogsData).map(([slug, post], index) => ({
    id: index,
    title: post.title,
    created_date: post.created_date,
    content: post.content,
    slug,
  }));

  return blogPostsCache;
}

export async function findPostBySlug(slug: string): Promise<TBlogPost | null> {
  const blogsData = await loadBlogs();
  const post = blogsData[slug];

  if (!post) return null;

  return {
    id: 0, // ID not needed for single post
    title: post.title,
    created_date: post.created_date,
    content: post.content,
    slug,
  };
}

// Legacy sync functions for backward compatibility (will be empty until blogs load)
export function getBlogPostsSync(): TBlogPost[] {
  return blogPostsCache || [];
}

export function findPostBySlugSync(slug: string): TBlogPost | null {
  if (!blogsCache) return null;
  const post = blogsCache[slug];
  if (!post) return null;

  return {
    id: 0,
    title: post.title,
    created_date: post.created_date,
    content: post.content,
    slug,
  };
}
