#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function convertTitleToSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function extractFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (match) {
    const frontmatter = {};
    const frontmatterLines = match[1].split('\n');

    frontmatterLines.forEach((line) => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > -1) {
        const key = line.substring(0, colonIndex).trim();
        const value = line
          .substring(colonIndex + 1)
          .trim()
          .replace(/^["']|["']$/g, '');
        frontmatter[key] = value;
      }
    });

    return {
      frontmatter,
      content: match[2].trim(),
    };
  }

  return {
    frontmatter: {},
    content: content.trim(),
  };
}

function generateBlogsJson() {
  const blogsDir = join(__dirname, '../data/blogs');
  const outputPath = join(__dirname, '../public/blogs.json');

  try {
    const files = readdirSync(blogsDir).filter((file) => file.endsWith('.md'));
    const blogsData = {};

    files.forEach((file) => {
      const fullPath = join(blogsDir, file);
      const rawContent = readFileSync(fullPath, 'utf8');
      const { frontmatter, content } = extractFrontmatter(rawContent);

      // Extract title and date
      const title = frontmatter.title || file.replace('.md', '');
      const date = frontmatter.date || frontmatter.created || 'Unknown Date';

      // Generate slug
      const slug = convertTitleToSlug(title);

      blogsData[slug] = {
        title,
        date,
        content: content,
      };
    });

    // Sort by date (newest first)
    const sortedEntries = Object.entries(blogsData).sort(([, a], [, b]) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    // Convert back to object with sorted order
    const sortedBlogsData = {};
    sortedEntries.forEach(([slug, post]) => {
      sortedBlogsData[slug] = post;
    });

    writeFileSync(outputPath, JSON.stringify(sortedBlogsData, null, 2));
    console.log(
      `✅ Generated blogs.json with ${Object.keys(sortedBlogsData).length} posts`
    );
    console.log(`📁 Output: ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating blogs.json:', error.message);
    process.exit(1);
  }
}

generateBlogsJson();
