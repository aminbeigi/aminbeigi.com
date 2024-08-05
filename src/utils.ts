import { blogPosts } from "./components/blog/data";

import { TBlogPost } from "./types";

export function getImageUrl(path: string) {
  return new URL(`/assets/${path}`, import.meta.url).href;
}

export function convertTitleToSlug(title: string): string {
  return title
    .toLowerCase() // convert to lowercase
    .trim() // remove leading and trailing spaces
    .replace(/[\s\W-]+/g, "-") // replace spaces and non-word characters with hyphens
    .replace(/^-+|-+$/g, ""); // remove leading and trailing hyphens
}

export function findPostBySlug(input: string): TBlogPost | null {
  for (const blogPost of blogPosts) {
    const slug = convertTitleToSlug(blogPost.title);
    if (slug === input) {
      return blogPost;
    }
  }
  return null;
}
