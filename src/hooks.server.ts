import type { Handle } from '@sveltejs/kit/hooks';

const esc = (s: string) => s.replace(/"/g, '&quot;');

// Derive Open Graph / X card tags from each page's own <title> and meta description.
export const handle: Handle = ({ event, resolve }) =>
  resolve(event, {
    transformPageChunk: ({ html }) => {
      const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
      if (!title) return html;
      const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
      const url = `https://saga.com.np${event.url.pathname === '/' ? '' : event.url.pathname}`;
      const tags = [
        ['property', 'og:type', 'website'],
        ['property', 'og:site_name', 'Saga Infographics'],
        ['property', 'og:title', esc(title)],
        ['property', 'og:description', desc],
        ['property', 'og:url', url],
        ['property', 'og:image', 'https://saga.com.np/logo.png'],
        ['name', 'twitter:card', 'summary'],
        ['name', 'twitter:title', esc(title)],
        ['name', 'twitter:description', desc],
        ['name', 'twitter:image', 'https://saga.com.np/logo.png']
      ]
        .map(([k, n, c]) => `<meta ${k}="${n}" content="${c}">`)
        .join('');
      return html.replace('</head>', `${tags}</head>`);
    }
  });
