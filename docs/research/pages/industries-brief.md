# Industries pages: what was taken, what was dropped

8 Oct 2026. Pages: landing/src/pages/industries/ (index plus 8 slugs). Content: landing/src/data/industries.ts. Components: landing/src/components/industries/. CSS: landing/public/css/industries.css.

Source: the live b2bware.com industry pages (fetched 8 Oct 2026). Rule applied: collateral is not evidence.

## Dropped from every live page

- All statistics and market-size figures (including "nine out of ten projects overrun", 90%, 65%, 60% cheaper, market projections).
- The "Trusted by" logo walls (15 to 25 logos each).
- Testimonials and quotes (Franz Einfinger, Globesystems; Dana D, Capterra).
- The "SyncSpider's B2B portal" product name (the product is B2Bware).
- Competitor comparison FAQs (OroCommerce, Spryker, Shopware B2B), "can it replace our ERP" FAQs and "do we need developers" FAQs. Replaced by shared ERP and "big IT project" answers.
- Named ERPs. Copy says "any ERP".

## Per page

### logistics-fulfillment (live: /industries/logistics-fulfillment/)
Taken: three scenarios (fulfilment partner, freight forwarder, warehouse network), client self-service, customer-specific catalogues and rates, multi-tenant clients, shipping and order sync topic, repeat orders.
Dropped: 54% logistics stat, Einfinger quote, 25+ logos, carrier and shipping integration, returns management workflows, AI order capture wording, document management claims, pricing comparison FAQ.
Claims to back up: (1) orders reach a warehouse system via the ERP; (2) many clients from one setup with separate views; (3) stock "by client and site" is available from the ERP data; (4) rates per client shown in the portal.

### construction (live: /industries/construction/)
Taken: multi-site operations, field ordering, role and approval levels, bulk and repeat orders, audit-ready records, equipment and spares.
Dropped: overrun statistics, 90% vendor-communication and 65% fulfilment figures, 60% cheaper claim, two quotes, logos, ERP/PIM vendor names, legacy ERP upgrade scenario.
Claims to back up: (1) several delivery sites per account; (2) approval limits before an order posts; (3) credit limits and stop flags checked before posting; (4) job and contract prices per customer; (5) photos of lists as orders are NOT claimed (only email and PDF).

### electronic-components (live: /industries/electronic-parts/)
Taken: three use cases (OEM supplier, high-mix low-volume, resellers and repair), tiered and contract pricing, search by spec, compliance documents, order history and reorder, email order processing.
Dropped: 27.5% B2B share projection, both quotes, logos, "real-time inventory" superlatives, automated compliance document handling (softened to documents sitting on the part).
Claims to back up: (1) search and filter by spec; (2) datasheets and certificates attach to items; (3) price breaks per customer; (4) customer part codes mapped to ours, in reels and packs; (5) Kienesberger: 20 million price entries vs 70,000 (from the case study, already approved).

### auto-parts (live: /industries/auto-parts/)
Taken: workshop, wholesaler and multi-brand scenarios, tiered pricing by buyer type, fitment-led catalogues, bulk and repeat orders, order status, multi-account.
Dropped: USD 111.53bn market figure, both quotes, 21 logos, B2B plus B2C hybrid claim (reduced to one FAQ that defers to the consultation).
Claims to back up: (1) search by vehicle uses the client's own fitment data; we do not supply a fitment database; (2) stock by depot; (3) order status visible to buyers; (4) several branch accounts under one login.

### industrial-machinery (live: /industries/industrial-machinery/)
Taken: dealer network, direct seller, service provider (as customers needing spares), self-service spare parts ordering, contract pricing, multi-location.
Dropped: 240,000 enterprises statistic, both quotes, logos, configure-to-order support and warranty tracking (the fit section says configured machines are out of scope, matching /manufacturers), manual quote workflow claims.
Claims to back up: (1) parts lists linked to machine, from the client's data; (2) agents order with live ERP prices, sales app is an add-on (same as /manufacturers); (3) Kienesberger and Doppler statements (case studies); (4) several brands or sites from one setup.

### food-packaging (live: /industries/food-packaging/)
Taken: three scenarios (food producers, distributor network, retailers), smart reordering for consumables, custom catalogues by segment, multi-user roles, document handling.
Dropped: USD 512bn market figure, both quotes, 24 logos, quote and approval workflows as a headline, custom packaging requests (moved to "not for you").
Claims to back up: (1) pack, case and pallet units held per item; (2) standing or repeat order saved per customer; (3) price lists and quantity breaks per account; (4) segment catalogues.

### beauty (live: /beauty-and-cosmetics/)
Taken: three scenarios (haircare brand into wholesale, distributor with large catalogue, D2C adding salons), variants and bundles, buyer-group portals, reordering, spreadsheet and email orders.
Dropped: USD 140bn cosmetics figure, both quotes, logos, multi-brand and multi-language headline, approval and quote workflow claims.
Claims to back up: (1) shades, sizes and sets as variants with own stock; (2) price lists per buyer group (salon, retailer, reseller); (3) case sizes and minimums; (4) trade portal kept separate from the consumer shop.

### medical-technology (live: /industries/medical-equipment/)
Taken: orders by email, PDF and phone, supplying clinics and distributors, tiered pricing, custom catalogues, approval workflows, audit-ready logs, bulk and repeat orders.
Dropped: 40% US revenue statistic, both quotes, logos, "compliant" and "healthcare compliance" language (no certification claimed; the page says regulatory work stays with the supplier).
Claims to back up: (1) approval step before an order reaches the ERP; (2) a record of who ordered, approved and changed each order; (3) separate catalogues for clinics and distributors; (4) contract prices per account.

## Cross-page claims to back up

1. Prices, stock and orders sync live with the ERP; we connect to any ERP (same claims as /manufacturers).
2. Emailed, PDF and spreadsheet orders are read, matched to customer codes and posted after team approval.
3. Fixed price: £5,000 to set up, £300 a month (from src/data/b2b.ts). The shared Pricing component also lists "hosted in the EU" in its extras (existing data file, not edited): decide whether to keep it.
4. Kienesberger 20 million vs 70,000 price entries; Doppler agents order with live ERP pricing.
5. Hero card numbers, item codes, customer names and order numbers are illustrative and labelled "Illustrative example".
6. Scenario cards describe how a buyer type typically orders; no customer outcome or saving is claimed.
