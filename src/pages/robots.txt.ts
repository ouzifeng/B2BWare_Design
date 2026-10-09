import type { APIRoute } from 'astro';

// Staging builds (PUBLIC_NOINDEX=true) block crawlers; production allows them and points to the sitemap.
export const GET: APIRoute = ({ site }) => {
  const block = import.meta.env.DEV || import.meta.env.PUBLIC_NOINDEX === 'true';
  const body = block ? 'User-agent: *\nDisallow: /\n' : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
