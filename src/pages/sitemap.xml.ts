import type { APIRoute } from 'astro';
import { features } from '../data/features';
import { problemPages } from '../data/solutions';

// Every indexable page: static pages that are not redirects, plus the dynamic routes.
const sources = import.meta.glob('./**/*.astro', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

const toPath = (file: string) => file.replace(/^\.\//, '/').replace(/\.astro$/, '').replace(/\/index$/, '') || '/';

export const GET: APIRoute = ({ site }) => {
  const redirects = new Set<string>();
  const paths = new Set<string>();
  for (const [file, src] of Object.entries(sources)) {
    const path = toPath(file);
    if (src.includes('Astro.redirect')) { redirects.add(path); continue; }
    if (path.includes('[') || path === '/404') continue;
    paths.add(path);
  }
  features.forEach((f) => paths.add(`/features/${f.slug}`));
  Object.keys(problemPages).forEach((slug) => {
    const path = `/solutions/${slug}`;
    if (!redirects.has(path)) paths.add(path);
  });
  const urls = [...paths].sort().map((p) => `  <url><loc>${new URL(p, site).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
