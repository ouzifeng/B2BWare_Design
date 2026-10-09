# Old b2bware.com URLs to the new site (9 Oct 2026)

Source: https://b2bware.com/page-sitemap.xml (121 pages). Every old English URL that ranks or is linked needs a 301 to its new home, so rankings carry over. German pages are listed at the end and wait for the German site decision.

## English: 301 to a new page

| Old URL | New URL |
|---|---|
| /ai-email-order-automation/ | /solutions/emailed-orders |
| /b2b-modules/ | / |
| /b2b-modules/b2b-order-hub/ | /solutions/emailed-orders |
| /b2b-modules/b2b-sales-app/ | /distributors (until Sales App content has a home) |
| /b2b-portal-pricing/ | /pricing |
| /beauty-and-cosmetics/ | /industries/beauty |
| /case-study-doppler/ | /case-studies/doppler |
| /case-study-kienesberger/ | /case-studies/kienesberger |
| /contact-us/ | /contact |
| /industries/electronic-parts/ | /industries/electronic-components |
| /industries/medical-equipment/ | /industries/medical-technology |
| /solutions/b2b-portal-for-wholesalers/ | /wholesalers |
| /solutions/b2b-portal-for-distributors/ | /distributors |
| /solutions/b2b-portal-for-manufacturers/ | /manufacturers |
| /solutions/b2b | / (already a redirect page locally) |
| /ai-email-orders, /order-hub, /modules (Webflow) | already redirect pages locally |

## English: same URL on the new site (no redirect needed)

/, /partner-program/, /features/ and all 29 /features/<slug>/ (being built with the same slugs), /compare/shopify-b2b-vs-b2bware/, /compare/orocommerce-vs-b2bware/, /compare/sana-commerce-vs-b2bware/, /compare/virto-commerce-vs-b2bware/, /industries/construction/, /industries/logistics-fulfillment/, /industries/auto-parts/, /industries/industrial-machinery/, /industries/food-packaging/

## English: not built yet

| Old URL | Plan |
|---|---|
| /compare/ | Build compare overview |
| /b2b-glossary/, /b2b-portal-glossary-a-z/ | Build glossary (one page, 301 the other to it) |
| /equipment-spare-parts-ordering-construction/ | Build use case page |
| /interactive-demo/ | Linked to live demo for now |
| /imprint/, /privacy-policy/, /cookies/ | Linked to live pages for now; need local copies before switch-over |

## English: drop (410 or 301 to home)

/ai-for-your-email-orders-norbert-test/ (test page), /b2b-e-commerce-plattform-2/ (leftover)

## German pages (waiting on the German site decision)

/anwendungsfall-1/, /automobil-zulieferindustrie/, /bauindustrie/, /distributoren/, /elektronikkomponente/, /fallstudie-doppler/, /fallstudie-kienesberger/, /funktionen/ and 29 /funktionen/<slug>/, /grosshaendler/, /hersteller/, /industriemaschinen/, /interaktive-demo/, /kontaktieren-sie-uns/, /lebensmittelverpackung/, /logistik-auftragsabwicklung/, /medizinische-industrie/, /module/, /module/order-hub/, /module/sales-app/, /preise/, /schoenheitsindustrie/, /vergleiche/ and 4 /vergleiche/<slug>/

## Switch-over notes (9 Oct 2026)
- Search indexing: the dev server is always noindex. A production build is indexable and serves /sitemap.xml and /robots.txt. Build staging with PUBLIC_NOINDEX=true to keep it out of Google.
- Canonicals are slashless (https://b2bware.com/pricing). The live site uses trailing slashes, so the host should 301 /x/ to /x.
- The 301s are Astro redirect pages; on the host they can become server rules.
- /ai-for-your-email-orders-norbert-test/ and /b2b-e-commerce-plattform-2/ now 301 to /.

## Hosting (9 Oct 2026)
- Host: Cloudflare Workers (static assets), account SyncSpider. Test site: https://b2bware-site.syncspider.workers.dev (noindex).
- Flow: local -> GitHub (SyncSpider-GmbH/B2BWare_Design, main) -> GitHub Actions -> Cloudflare. Needs repo secrets CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID.
- Redirects: scripts/redirects.mjs writes dist/_redirects from the Astro.redirect pages on every build, so they are real 301s.
- Before switch-over: /x/ to /x currently answers 307 (Cloudflare default). Add a 301 rule for trailing slashes, build production without PUBLIC_NOINDEX, then point b2bware.com at the Worker.
