import { marked } from 'marked';

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  tags: string[];
};

// Posts are markdown files in src/content/blog/<slug>.md with a simple frontmatter block:
// ---
// title: ...
// description: ...
// date: 2026-10-24
// tags: a, b
// ---
const files = import.meta.glob('/src/content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

function parse(path: string, raw: string) {
  const slug = path.split('/').pop()!.replace(/\.md$/, '');
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const fm: Record<string, string> = {};
  for (const line of (match?.[1] ?? '').split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) fm[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
  }
  const meta: PostMeta = {
    slug,
    title: fm.title ?? slug,
    description: fm.description ?? '',
    date: fm.date ?? '1970-01-01',
    tags: (fm.tags ?? '').split(',').map((t) => t.trim()).filter(Boolean)
  };
  return { meta, body: match?.[2] ?? raw };
}

const posts = Object.entries(files)
  .map(([path, raw]) => parse(path, raw))
  // Hide posts dated in the future so a post can be queued ahead of its publish date.
  .filter((p) => p.meta.date <= new Date().toISOString().slice(0, 10))
  .sort((a, b) => b.meta.date.localeCompare(a.meta.date));

export const listPosts = (): PostMeta[] => posts.map((p) => p.meta);

export function getPost(slug: string) {
  const post = posts.find((p) => p.meta.slug === slug);
  if (!post) return null;
  return { meta: post.meta, html: marked.parse(post.body, { async: false }) as string };
}
