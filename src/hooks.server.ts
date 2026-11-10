import type { Handle } from '@sveltejs/kit/hooks';

const OG_IMAGE = 'https://saga.com.np/og.png';
const esc = (s: string) => s.replace(/"/g, '&quot;');

// Derive Open Graph / X card tags from each page's own <title> and meta description.
export const handle: Handle = ({ event, resolve }) => {
  // Collapse www onto the apex so only one host is indexed.
  if (event.url.hostname === 'www.saga.com.np') {
    return Response.redirect(`https://saga.com.np${event.url.pathname}${event.url.search}`, 301);
  }
  return resolve(event, {
    transformPageChunk: ({ html }) => {
      const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
      if (!title) return html;
      const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
      const url = `https://saga.com.np${event.url.pathname === '/' ? '' : event.url.pathname}`;
      const isPost = /^\/blog\/[^/]+$/.test(event.url.pathname);
      const tags = [
        ['property', 'og:type', isPost ? 'article' : 'website'],
        ['property', 'og:site_name', 'Saga Infographics'],
        ['property', 'og:title', esc(title)],
        ['property', 'og:description', desc],
        ['property', 'og:url', url],
        ['property', 'og:image', OG_IMAGE],
        ['property', 'og:image:width', '1200'],
        ['property', 'og:image:height', '630'],
        ['name', 'twitter:card', 'summary_large_image'],
        ['name', 'twitter:title', esc(title)],
        ['name', 'twitter:description', desc],
        ['name', 'twitter:image', OG_IMAGE]
      ]
        .map(([k, n, c]) => `<meta ${k}="${n}" content="${c}">`)
        .join('');
      return html.replace('</head>', `${tags}</head>`);
    }
  });
};
