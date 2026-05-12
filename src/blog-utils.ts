import type { TBlogPost } from './types';

const WORDS_PER_MINUTE = 200;
const MIN_READING_TIME = 1;

export function getReadingTime(content: string): number {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(MIN_READING_TIME, Math.ceil(words / WORDS_PER_MINUTE));
}

function parseFrontmatter(raw: string): {
  title: string;
  isoDate: string;
  content: string;
} {
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(raw);
  if (!match) {
    throw new Error('No frontmatter found in markdown file');
  }

  const fields: Record<string, string> = {};
  for (const line of match[1].split('\n')) {
    const colon = line.indexOf(':');
    if (colon === -1) {
      continue;
    }
    fields[line.slice(0, colon).trim()] = line
      .slice(colon + 1)
      .trim()
      .replace(/^['"]|['"]$/g, '');
  }

  if (!fields.title) {
    throw new Error("Missing 'title' in frontmatter");
  }
  if (!fields.date) {
    throw new Error("Missing 'date' in frontmatter");
  }

  return {
    title: fields.title,
    isoDate: fields.date,
    content: match[2].trim(),
  };
}

function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-|-$/g, '');
}

function formatDisplayDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
}

const rawFiles = import.meta.glob('../data/blogs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

interface ParsedEntry {
  title: string;
  isoDate: string;
  content: string;
  slug: string;
}

const allPosts: TBlogPost[] = (() => {
  const entries: ParsedEntry[] = Object.values(rawFiles).map((raw) => {
    const { title, isoDate, content } = parseFrontmatter(raw);
    return { title, isoDate, content, slug: titleToSlug(title) };
  });

  entries.sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  return entries.map(({ title, isoDate, content, slug }, index) => ({
    id: index,
    title,
    created_date: formatDisplayDate(isoDate),
    content,
    slug,
  }));
})();

export function getBlogPosts(): TBlogPost[] {
  return allPosts;
}

export function findPostBySlug(slug: string): TBlogPost | null {
  return allPosts.find((p) => p.slug === slug) ?? null;
}
