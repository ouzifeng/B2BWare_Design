import { defineMiddleware } from 'astro:middleware';

// Adds FAQPage structured data to any page that renders FAQ items
// (FaqItem and B2cFaq share the faq-item_q / faq-item_a markup).
const strip = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();

export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  if (!(res.headers.get('content-type') || '').includes('text/html')) return res;
  const html = await res.text();
  const items = [...html.matchAll(/<summary class="faq-item_q"[^>]*>([\s\S]*?)<\/summary>\s*<p class="card_text faq-item_a"[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => ({ q: strip(m[1]), a: strip(m[2]) }))
    .filter((i) => i.q && i.a);
  let out = html;
  if (items.length && !html.includes('"FAQPage"')) {
    const ld = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
    }).replace(/</g, '\u003c');
    out = html.replace('</head>', `<script type="application/ld+json">${ld}</script></head>`);
  }
  return new Response(out, { status: res.status, statusText: res.statusText, headers: res.headers });
});
