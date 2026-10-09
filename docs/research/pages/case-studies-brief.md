# Case studies brief: Doppler and Kienesberger

Date: 8 Oct 2026. Pages: /case-studies/doppler, /case-studies/kienesberger. Content lives in landing/src/components/case-studies/caseStudies.ts.

## Sources

- **OS-D**: our original Doppler case study, https://b2bware.com/case-study-doppler/ (fetched 8 Oct 2026; /case-studies/doppler returns 404).
- **OS-K**: our original Kienesberger case study, https://b2bware.com/case-study-kienesberger/ (fetched 8 Oct 2026).
- **PRODUCT**: PRODUCT.md, Evidence on Hand.
- **GROWTH**: B2Bware-Growth-Context-Brief.md line 28.
- **B2B.TS**: landing/src/data/b2b.ts proof object.
- **BRIEFS**: research/pages/trade-portal-brief.md, manufacturers-brief.md, distributors-brief.md, page-plans.md (they quote OS-D and OS-K).

## Facts used: Kienesberger

| Fact on page | Source |
|---|---|
| Kienesberger Maschinen GmbH, Austria; founded 1986 | OS-K client profile |
| Manufacturer and wholesaler of industrial machinery, incl. circular saws and firewood processing machines | OS-K client profile |
| Distributes Kränzle, Atika, Endress, Starmix, Eibenstock, Scangrip in Austria | OS-K client profile |
| Old webshop could not mirror ERP customer-specific pricing logic | OS-K challenge |
| Syncing all prices needed over 20 million entries, risking system failure | OS-K challenge |
| Constantly changing costs | OS-K challenge ("real-time updates"; page says costs change, not that prices are live) |
| Reduced to 70k entries from 20M potential, synced from the ERP | OS-K solution; B2B.TS; page-plans.md |
| Daily updates in under 15 minutes (page says "about 15 minutes", daily, not live) | OS-K solution; B2B.TS; TP brief ("no real-time for Kienesberger") |
| Fast repeat orders, favourites, PDF price lists and downloads | OS-K advanced B2B features |
| Each customer sees own prices in their portal | PRODUCT; B2B.TS |
| Results: 20M entries avoided, 15 minutes daily update | OS-K results table |

## Facts used: Doppler

| Fact on page | Source |
|---|---|
| Austrian family company, founded 1946; umbrellas, parasols, garden furniture | OS-D client profile |
| Brands Knirps, Derby Umbrellas, Bugatti | OS-D client profile |
| Legacy portal, agents ordered via basic CSV integration with the old ERP | OS-D challenge |
| New ERP needed a complex, costly overhaul to keep the connection | OS-D challenge |
| Agents manually selected variants, added to cart, changed quantities; no real-time pricing or product data | OS-D challenge |
| Customer-specific pricing and delivery planning unavailable | OS-D challenge |
| Custom portal; agents log in and place orders on behalf of clients | OS-D solution |
| Customer-specific pricing and tiered discounts in real time | OS-D solution |
| Direct ERP integration for live product and customer data; PIM sync for images, descriptions, specs | OS-D solution |
| UX co-designed with Doppler's sales team; ordering multiple variants in seconds | OS-D solution |
| Split delivery dates per item; manual price overrides and free-of-charge lines; saved carts, historical orders, repeat purchasing | OS-D advanced features |
| Orders flow straight into the ERP, no manual input | OS-D results ("Zero Back Office Errors" description) |
| 70% faster order entry ("place orders in minutes instead of relying on manual processes") | OS-D results and key metrics; PRODUCT; B2B.TS; GROWTH |

## Left out on purpose

- **"90% fewer errors"** (GROWTH, B2B.TS): no primary source. OS-D says "Zero Back Office Errors", which contradicts it. Not used.
- **"Zero back office errors"** (OS-D): has a primary source but conflicts with GROWTH's 90%, and no method is given. Not used until the team confirms which is true. Page says only that orders flow in without manual input.
- **"Higher sales agent satisfaction", "100% automation"** (OS-D, OS-K): unmeasured, vague. Not used.
- **AI product enrichment ("250+ GB", "dozens of descriptions")** (OS-D, OS-K): not a core service per distributors-brief.md; confirm it can be sold first.
- **Automated order parsing** (OS-K): unclear whether live at Kienesberger.
- **Testimonials** on both old pages (Globesystems, Capterra): not from the customers. No quotes used.
- **Customer ERP names**: neither source names them. Pages say "the ERP".
- **"Up to 60% cheaper than enterprise platforms"** (OS-D FAQ): comparative claim, not used.

## Claims to back up

1. Doppler "70% faster order entry": stated on our own case study and in PRODUCT.md, but there is no method, baseline or measurement date. Ask the team how it was measured. The page labels it as from the original case study.
2. Doppler errors: decide between "90% fewer" and "zero back office errors", or drop both. Currently neither is on the page.
3. Kienesberger "about 15 minutes": OS-K says "under 15 minutes" daily; confirm the current figure and whether it is a full or delta sync.
4. Kienesberger "over 20 million entries": a calculation from the old Shopware set-up, not a measured system failure. The page says "would have meant" and "risk".
5. Both customers' permission to be named with the facts shown (company profile, brands). PRODUCT.md says they may be named publicly.
6. Kienesberger "manufacturer": OS-K says "manufacturer and wholesaler"; the page says both.
7. Daily steps for Kienesberger (customer logs in, sees own prices, reorders from favourites, downloads PDF price list) are taken from OS-K feature lists; confirm that customers (not only vendors and internal teams) use them.
8. The Doppler "before and after" table is a rewording of OS-D's challenge and solution lists, not a measured comparison.
9. Contact-for-reference line is not on these pages (page-plans.md open item 7).
