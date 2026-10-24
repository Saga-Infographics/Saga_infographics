const SITE = 'https://saga.com.np';
const PATHS = ['/', '/services', '/about', '/pricing', '/contact', '/privacy-policy', '/terms'];

export const GET = () => {
  const urls = PATHS.map((p) => `  <url><loc>${SITE}${p === '/' ? '' : p}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
