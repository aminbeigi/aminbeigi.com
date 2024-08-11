import { blogPosts } from './components/blog/data';
import type { TBlogPost } from './types';

const blogPostsBySlugCache: Map<string, TBlogPost> = new Map(
    blogPosts.map(post => [convertTitleToSlug(post.title), post])
)

export function getImageUrl(path: string) {
    return new URL(`/assets/${path}`, import.meta.url).href;
}

export function convertTitleToSlug(title: string): string {
    return title
        .toLowerCase() // convert to lowercase
        .trim() // remove leading and trailing spaces
        .replace(/[\s\W-]+/g, '-') // replace spaces and non-word characters with hyphens
        .replace(/^-+|-+$/g, ''); // remove leading and trailing hyphens
}

export function findPostBySlug(slug: string): TBlogPost | null {
    return blogPostsBySlugCache.get(slug) || null;
}
