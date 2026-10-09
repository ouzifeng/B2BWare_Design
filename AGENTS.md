# B2Bware website: guide for people and AI agents

Read this first, every session. It is the short version of everything we know: who we sell to, what hurts them, what we say, what we never say, and how to change the site safely.

Owner: David Oak, Head of Growth. Last updated 9 Oct 2026.
If this file and a research file disagree, ask David. If anything you plan to do is not covered here, ask before doing it.

---

## 1. The company in one minute

- **B2Bware** builds and runs online ordering for businesses that sell to trade customers on account, linked to their ERP.
- **SyncSpider** is the company behind it: our own integration platform, run for 10 years, 400+ integrations. Every B2Bware connection runs on it. Use this as credibility ("we run our own integration platform"), not as a second brand.
- We **build it, link it to the ERP, and run it** as a managed service. Fixing the link after ERP or shop updates is in the monthly fee.
- Team in Austria (Ried im Innkreis), sales in the UK. Customers in the UK and DACH.

## 2. Who we sell to (B2B)

- Manufacturers, distributors and wholesalers, roughly 15 to 200 staff, selling to trade customers on account with their own prices.
- Any ERP. Sage, Business Central and NetSuite are just the ones we meet most. If no connector exists, we build it.
- Best fit: standard, coded products; dozens of orders a week or more; a team retyping orders; customers on their own price lists and part codes.
- **Not a fit:** highly configured or bespoke products (thousands of combinations), spot prices set per order, very low order volume, already fully on EDI, mid ERP migration, an in-house team already building it.
- Buyers: operations director, sales director, or the owner in smaller firms.

Sources: `docs/growth-context-brief.md` sections 2 to 5, `docs/research/sdr-call-evidence.md`.

## 3. The offer and the price (locked, use it)

- **Free consultation:** they tell us what is not working, we come back with a plan and a fixed price. They keep the plan either way.
- **£5,000 to set up** (say it flat, no "from"), **£300 a month including the first 1,000 orders**, then **about 15p an order**.
- No per-user fees. No day rates for fixes.
- Add-ons, each a flat monthly fee: EDI link, sales app for reps, approval workflows, payment methods, quotes with e-signature, WhatsApp ordering.
- Custom work: £500 a day, always quoted as a fixed price after scoping.
- Never anchor the price to the cost of the staff it replaces. Buyers told us vendors did this and it put them off.
- **B2C has no public price.** Leave it to the consultation.
- **Free trial button (3 days):** in the header and on /pricing, link is `#` until the backend signup URL exists. What the trial includes is still being decided (we can connect to their current website and build the demo around their products).

## 4. How the site is organised, and why

We sell **fixes to problems**, not modules. There are no "Order Hub" or "Sales App" pages; old module URLs redirect to the problem pages. Reason: buyers shop to fix a business problem, and our sales show portals linked to the ERP sell; the emailed-orders pitch booked meetings but closed nothing on its own.

| Page | What it is | Copy lives in | Research behind it |
|---|---|---|---|
| `/` | Homepage with an audience switch (Businesses / Consumers / Both) | `src/components/home/*`, `src/data/b2b.ts`, `src/data/b2c.ts` | `docs/research/pages/home-pain-points.md` |
| `/solutions/trade-portal` | Problem page: customers phone in the same reorders | `src/data/solutions.ts` | `trade-portal-brief.md`, `trade-portal-pain-points.md` |
| `/solutions/erp-integration` | Problem page: webshop and ERP disagree | `src/data/solutions.ts` | `erp-integration-brief.md`, `erp-integration-pain-points.md` |
| `/solutions/emailed-orders` | Problem page: emailed orders retyped | `src/data/solutions.ts` | `emailed-orders-brief.md`, `emailed-orders-pain-points.md` |
| `/solutions/b2c` | Consumer shop built on your ERP (separate story, see section 8) | `src/data/b2c.ts`, `src/components/b2c/*` | `b2c-brief.md`, `b2c-pain-points.md` |
| `/manufacturers`, `/distributors`, `/wholesalers` | Who it's for. Each has its own layout on purpose | `src/components/segments/*`, `src/data/b2b.ts` | `*-brief.md`, `*-pain-points.md` |
| `/pricing` | The price, what is included, extras | `src/components/pricing/*`, `src/data/b2b.ts` | `home-pain-points.md` (claims) |
| `/industries/*` | 8 industry pages | `src/data/industries.ts` | `industries-brief.md` |
| `/features/*` | 29 feature pages. Features link to B2B, never B2C | `src/data/features.ts` | `features-brief.md` |
| `/compare/*` | Fair comparisons with Shopify B2B, OroCommerce, Sana, Virto | `src/data/compare.ts` | `compare-brief.md` |
| `/case-studies/*` | Doppler, Kienesberger | the page files | `case-studies-brief.md` |
| `/b2b-glossary`, `/partner-program`, `/contact`, use case page | Supporting pages | `src/data/glossary.ts`, page files | `compare-glossary-usecase-brief.md`, `partner-program-brief.md` |

All research file names above are in `docs/research/pages/`.

## 5. The pains we answer (B2B, verified)

These 11 come from buyer forums, reviews, competitor pages and our own sales calls. Every section on a page should answer one of them. Full detail and sources: `docs/research/pages/b2b-landing-pain-points.md` and the per-page files.

| # | Pain | Strength | What we say |
|---|---|---|---|
| 1 | Orders retyped into the ERP | Strong | Orders land in your ERP as finished sales orders. Nobody retypes them |
| 2 | Same reorders by phone and email every week | Strong | Customers reorder online from their history, at their own prices |
| 3 | Customer-specific prices break the webshop | Medium-strong | Each account sees the prices your ERP gives it: contract prices, breaks, terms |
| 4 | Shop and ERP out of sync, overnight files | Medium-strong | Prices, stock and orders synced live with your ERP |
| 5 | Every customer sends a different format and their own codes | Strong | We read PDF, email and Excel orders and learn each customer's part codes |
| 6 | Still checking every line | Strong | Send us 50 real orders and see the match rate first. Nothing posts without approval at the start |
| 7 | ERP updates break the link | Medium | We run it. Fixing it after updates is in the monthly fee |
| 8 | Fear of a big IT project and an unclear price | Medium | Fixed price before you pay anything. Live in weeks, not months |
| 9 | Vendors blaming each other | Medium | One team owns the portal, the link and the fixes |
| 10 | Portal built, then nobody uses it | Medium | We set up every account, invite customers with you, check who is ordering after 30 days |
| 11 | A tool reads the order but someone still uploads a file | Medium | We finish the job: the order goes into the ERP |

Common objections and our answers ("manual is fine", "we already have an AI tool", "our big accounts use EDI") are in `src/data/objections.ts`.

## 6. Proof we can use

- **Doppler** (umbrella and parasol manufacturer): sales agents order with live ERP prices, 70% faster order entry. Do not use "90% fewer errors" (not verified).
- **Kienesberger:** every customer sees their own prices from the ERP, across about 70,000 price entries. Do not say "real-time" or "updated in 15 minutes" for Kienesberger.
- **Harrows Darts:** UK trade portal connected to the ERP. No case study page yet; wording to be confirmed with the team.
- **SyncSpider:** 10 years, 400+ integrations.
- One public buyer quote in use: a manufacturer on Reddit saying admins spend 2 to 3 hours a day on order entry. It is one comment, never present it as a statistic.

Do not use: testimonials from SyncSpider (not B2Bware) customers, logo walls mixing customers with partners, any statistic from a blog without a traceable source.

## 7. Writing rules (non-negotiable)

1. **Never use em dashes** (the long dash) anywhere: copy, comments, commit messages. Use a comma, colon or full stop.
2. Plain British English. Short sentences. No hype words, no AI-sounding phrases ("seamless", "unlock", "empower", "revolutionise").
3. **Never invent** stats, quotes, customers, logos, results or reviews.
4. **Any ERP.** Never single out one ERP in pains, FAQs or fit lines. Write "your ERP" or "Sage, Business Central, NetSuite or whichever ERP you run".
5. **We build our own portal.** Never offer Shopify B2B builds. Connecting an existing Shopify shop to an ERP is fine.
6. **Collateral is not evidence.** Proposals and flyers give facts (price, scope, timeline), not messaging. Only put a point on a page if research shows buyers complain about it. So: no GDPR, "100% EU", "hosted in Germany", AI hype or MCP filler.
7. **Every claim needs a source.** If a pain is researched, write the fix and claim it plainly. Then log the claim once in that page's pain-points file under "Claims to back up" so David can confirm it with the team.
8. Lead with what the buyer experiences or what it costs them, never a bare number.
9. Existing customers are not a research source. Don't plan interviews with them.
10. Page titles 60 characters or less, ending "| B2Bware". Descriptions 120 to 160 characters. One H1 per page.

## 8. B2C is a separate story

`/solutions/b2c` is for businesses that run an ERP and want to sell to consumers. It has its own pains, its own layout and no public price. Don't borrow B2B claims, pricing or proof for it, and don't add B2C to B2B pages. Research: `docs/b2c-research/` and `docs/research/pages/b2c-pain-points.md`.

## 9. Hands-off areas (ask David first)

- **The header and menu** (`src/components/layout/Header.astro`) and **the footer** (`Footer.astro`). They are shared by every page and the B2C work. Only change them when David asks for that specific change.
- **`src/layouts/Base.astro`** (SEO tags, structured data) and **`src/middleware.ts`** (FAQ structured data).
- **Design.** New layouts and visual changes go through the Impeccable design skill (`.impeccable/`, `docs/DESIGN.md`). Don't hand-write one-off CSS for a page. Rejected looks so far: loud industrial, and generic "AI SaaS" card grids.
- **Forms** are not connected yet (they will go to HubSpot). Don't wire them to anything else.

## 10. How to make a change (non-technical)

You need: Node.js 22.12 or newer, and write access to this GitHub repo.

1. **Get the latest version:** `git pull`
2. **First time only:** `npm ci`
3. **See the site on your computer:** `npm run dev`, then open the address it prints (usually http://localhost:4321). It updates as you save.
4. **Edit copy:** most text lives in `src/data/*.ts` (see the table in section 4). Change the words between the quotes. Keep the quotes and commas.
5. **Check it builds:** `npm run build`. If it says "Complete!", you're fine.
6. **Publish to the test site:** `git add -A`, `git commit -m "what you changed"`, `git push`.

Pushing to `main` updates the test site in about a minute: https://b2bware-site.syncspider.workers.dev. You can watch it under the repo's **Actions** tab. If a deploy fails, the old version stays up.

**Want to try something without changing the test site?** Work on your own branch. Every branch gets its own preview link automatically:

1. `git checkout -b filip-homepage` (any name)
2. Make changes, then `git add -A`, `git commit -m "..."`, `git push -u origin filip-homepage`
3. About a minute later it's live at `https://filip-homepage-b2bware-site.syncspider.workers.dev`
4. Happy with it? `git checkout main`, `git pull`, `git merge filip-homepage`, `git push`. The test site updates.

No pull requests or approvals are needed. Small copy fixes can go straight to `main`.

Always `git pull` before you start and before you push. Other people (and David's AI agent) work on this repo too.

## 11. Hosting and SEO (already set up, don't change without David)

- **Hosting:** Cloudflare (SyncSpider account). GitHub Actions builds and deploys on every push to `main` (`.github/workflows/deploy.yml`, `wrangler.jsonc`).
- **Test site is hidden from Google:** builds use `PUBLIC_NOINDEX=true`, so every page says noindex and robots.txt blocks everything. A production build (without that setting) is indexable.
- **Redirects:** the small pages in `src/pages/` that only contain `Astro.redirect(...)` are old URLs. `scripts/redirects.mjs` turns them into real 301 redirects on every build. Add a new one by copying one of those files.
- **Sitemap** (`/sitemap.xml`) and **robots.txt** are generated automatically. New pages are added to the sitemap without you doing anything.
- **Canonical URLs** have no trailing slash (`https://b2bware.com/pricing`).
- **Structured data** (organisation, breadcrumbs, FAQ) is added automatically.
- Old-to-new URL map and switch-over checklist: `docs/research/pages/url-map.md`.
- b2bware.com still points at the old site. Switching it over is David's call.

## 12. Open decisions (don't decide these yourself)

- What the 3-day free trial includes, its label ("trial" or "demo") and its link.
- German site (about 55 old German pages).
- Rewriting the old template text in the menu ("Maximum efficiency. Zero data silos.").
- Local copies of the imprint, privacy and cookie pages before switch-over.
- Where Sales App and Order Hub content lives.
- Blog: plan is to write posts in Webflow's CMS and show them on this site.
- Phone numbers on /contact.

## 13. What's in `docs/`

| Folder / file | What it is |
|---|---|
| `docs/growth-context-brief.md` | Company, ideal customer, what converts, sales motion, objections (Sep 2026). Internal: it names prospects. Some parts are older than this guide: where they differ, this guide wins (for example pricing and Shopify B2B) |
| `docs/research/` | Market research: buyer voice, competitors, market size, SDR call evidence, DACH, claims checks |
| `docs/research/pages/` | One brief and one pain-points file per page, with "Claims to back up". Start here before editing a page |
| `docs/b2c-research/` | Consumer (B2C) research, kept separate from B2B |
| `docs/campaigns/` | Ad and campaign briefs. Note: the campaign brief still leads with a free order check; the site now leads with a free consultation |
| `docs/DESIGN.md` | Design system notes used by the Impeccable design skill |

---

## Notes for AI agents

- Read the page's brief and pain-points file in `docs/research/pages/` before changing that page.
- Explain what you plan to change before writing code. Keep replies short and plain.
- Don't take screenshots for the user; they review the page live.
- After a change: `npm run build` must pass, and grep your changes for em dashes.
- Astro docs: https://docs.astro.build. To run the dev server in the background: `astro dev --background` (`astro dev stop`, `astro dev status`, `astro dev logs`).
