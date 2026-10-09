# Brief: /compare, /b2b-glossary, /equipment-spare-parts-ordering-construction

Built 9 October 2026. Owner's rule applied: collateral is not evidence.

## Pages

- `landing/src/pages/compare/index.astro` (+ `public/css/compare-index.css`). Reads `src/data/compare.ts` (not edited).
- `landing/src/pages/b2b-glossary.astro`, `src/data/glossary.ts`, `public/css/glossary.css`. DefinedTermSet JSON-LD via Base `head` slot.
- `landing/src/pages/b2b-portal-glossary-a-z.astro`: 301 to `/b2b-glossary`.
- `landing/src/pages/equipment-spare-parts-ordering-construction.astro` (+ `public/css/usecase.css`).
- One-line additions: Footer "All comparisons" (end of Compare column), Header Resources "B2B glossary" (after All features).

## Taken from the live pages

- /compare: the four matchups (Shopify B2B, OroCommerce, Sana Commerce, Virto Commerce) and the idea of an overview with a method. Entry text comes from our own `compare.ts` verdicts, not the live copy.
- Glossary: terms and meanings from both live glossaries, merged to one English A to Z (about 70 terms). Definitions rewritten neutrally in British English.
- Use case: the audience (construction and equipment), the problem (manual communication, scattered catalogues, disconnected ERP) and the solution shape (customer-specific ordering, ERP link, permissions).

## Dropped

- /compare: the 24+ client logo strip, "unbiased" claim, "bolted on / engineered from the ground up", "weeks not months", lower TCO claim, "seven differentiators", the six-criteria methodology list.
- Glossary: all German duplicate entries (Auftragsverfolgung, Mandant and so on), "24/7", "seamless", "AI-driven" phrasing, "legally recognised", security and compliance wording (audit trail "compliance", on-premise "security and compliance"), any ERP names (SAP, Odoo), HubSpot and Salesforce.
- Use case: 90%, 85%, 65%, 100% result figures, 70-90% less manual work, the 20+ logo strip, both testimonials (Globesystems, Capterra), "global support", "multi-language, multi-site" selling points, "rapid implementation", the 11-question FAQ.

## Claims to back up

1. Find by machine: portal "finds parts by machine from your own parts and machine data". Industrial-machinery industry page already says parts lists linked to machines. Confirm with the team that this is delivered in the standard build, not custom.
2. "The part list is tied to the machine, so the customer picks from what fits": depends on the customer supplying fitment data. We say we do not sell a fitment database (matches the existing industry FAQ).
3. Emailed orders "read, matched to your part numbers and posted after your team approves": matches solutions/emailed-orders.
4. Reorder and customer prices live from the ERP: match features and b2b.ts.
5. Compare overview: "what to ask any vendor" questions are framed as questions, not as claims about competitors. The Sana entry shows the existing `compare.ts` verdict, which names the ERPs Sana supports (Sana's fact, not ours).
6. Glossary: SyncSpider entry says it runs the integration layer under B2Bware. Check that wording suits the team.
7. The glossary links point only to existing /features, /solutions pages. Some feature link labels are approximate (for example "Payment methods" for net payment terms); review.

## Not done (as instructed)

- No link added from `/industries/construction` to the new use case page. Suggested: add it to the construction industry page, and to the industrial-machinery page.
- Slugs: `/equipment-spare-parts-ordering-construction` matches the live URL. `/b2b-portal-glossary-a-z` redirects with 301 (Astro static builds emit a meta refresh page; real 301 needs a host redirect rule, so add one in the host config at deploy).
