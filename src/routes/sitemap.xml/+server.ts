import { SERVICES } from '#lib/data/content';
import { listPosts } from '#lib/blog';

const SITE = 'https://saga.com.np';
const PATHS = ['/', '/services', '/about', '/pricing', '/blog', '/contact', '/privacy-policy', '/terms'];

export const GET = () => {
  const today = new Date().toISOString().slice(0, 10);
  const pages = [
    ...PATHS.map((p) => ({ path: p, lastmod: today })),
    ...SERVICES.map((s) => ({ path: `/services/${s.slug}`, lastmod: today })),
    ...listPosts().map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.date }))
  ];
  const urls = pages
    .map(
      ({ path, lastmod }) =>
        `  <url><loc>${SITE}${path === '/' ? '' : path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`
    )
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
