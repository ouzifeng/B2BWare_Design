# Compare pages brief (8 October 2026)

Pages: /compare/shopify-b2b-vs-b2bware, /orocommerce-vs-b2bware, /sana-commerce-vs-b2bware, /virto-commerce-vs-b2bware. Content in landing/src/data/compare.ts. Rule applied: collateral is not evidence. Every competitor fact below was read on a source on 8 Oct 2026 unless marked "earlier research".

## Competitor facts used

### Shopify B2B
| Fact on the page | Source | Date read |
|---|---|---|
| B2B features (custom pricing per customer, draft orders, ERP integrations and APIs) in the Shopify admin | https://help.shopify.com/en/manual/b2b | 8 Oct 2026 |
| Basic, Grow, Advanced each support up to 3 catalogues; Plus unlimited; Plus from £1,800 a month; Basic £25, Grow £65, Advanced £344 monthly (UK page) | https://www.shopify.com/pricing | 8 Oct 2026 |
| Direct catalogue assignment to companies (customer-level pricing) is Plus only; "up to 3 active catalogs" on the other plans | https://help.shopify.com/en/manual/b2b/getting-started/plan-features | 8 Oct 2026 |
| B2B on every plan since 2 April 2026 | https://changelog.shopify.com/posts/key-b2b-features-now-available-on-non-plus-plans | earlier research (research/market-claims-check.md claim 2) |
| Microsoft BC connector for Shopify ships free with BC online; syncs B2B companies and catalogue prices | https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/shopify-connector-overview | earlier research (claim 3) |
| BC connector rated 2.6 / 5 from 28 reviews (latest review 29 Apr 2022, thin evidence) | https://apps.shopify.com/dynamics-365-business-central | earlier research (research/demand-market-sizing.md) |
| Shopify's own line "Feels like DTC. Acts like B2B." | https://www.shopify.com/b2b | earlier research (competitor-problem-claims.md) |

Plus price: the brief (trade-portal-brief.md) records about $2,300 a month from a distributor quote; the page uses Shopify's UK figure (£1,800 from) because it is on Shopify's own page. Re-check the US figure before quoting dollars.

### OroCommerce
oroinc.com/b2b-ecommerce returns 403 to WebFetch and Jina; the homepage https://oroinc.com/ was read through r.jina.ai on 8 Oct 2026.
- "The Leading AI-Enabled B2B Commerce Platform"; unifies commerce, CRM, CPQ, AI, content and payments.
- "Fully modeled customer account hierarchy at the core"; "Go live in months, not years."
- "No per-site or usage-based fees"; proven across "multi-org, multi-site, and high-volume enterprise operations".
- No price published on the page used.

### Sana Commerce (https://www.sana-commerce.com/, 8 Oct 2026, incl. its FAQ)
- "B2B commerce platform for manufacturers"; webstore, negotiated pricing, live stock.
- ERPs: SAP (ECC, S/4HANA) and Microsoft Dynamics (365 Finance and Supply Chain, Business Central).
- Reads pricing, stock and customer terms directly from the ERP as the page loads, no middleware.
- Implementation timeline scoped in discovery (depends on ERP set-up, catalogues, custom workflows).
- No price on the site; plan comparison and "Book a call".
- Emailed orders: not described on the homepage (stated as such, not as "Sana can't").

### Virto Commerce
- https://virtocommerce.com/ (8 Oct 2026): .NET Core / C# / ASP.NET, Kubernetes, "Atomic Architecture", open-source .NET foundation, API-first and headless, B2B, B2B2C, marketplaces and portals, "Run in your cloud or Virto Cloud".
- https://virtocommerce.com/pricing (8 Oct 2026): "start at 0.5% of GMV with 10K SKUs" (GMV model) or "2$ per order with 10K SKUs" (volume model); third-party software subscriptions are additional costs.

## Dropped from the live pages
- All of: "$175K average annual savings", "50% lower total cost", "60% lower total cost", "60+ days faster setup", "0 required apps", "Hidden costs: 0", "Dev team needed: 0".
- "Trusted by" logo list, and the "Key Quote" lines.
- "from €499/mo" and "Implementation: Included" (wrong against src/data/b2b.ts).
- Shopify: "Forced 2FA flows", "Not Available" for reps and reseller networks, "Basic Only" order validation, "$500-2K/mo B2B apps", "Large catalogs limited", all unsourced.
- Oro: "4 to 9 months", "High & Complex" TCO, "Limited" ERP support, the whole security table (GDPR, SOC 2, 99.9% SLA, no hosting claims allowed), "AI SmartAgent / SmartOrder" feature rows, "Native CRM" ticks on our side.
- Sana: "Sana-branded", "High" cost, "ERP Only" data, "Multiple Stores", "Limited customisation", "Live ATP" (not on its site).
- Virto: "3-6 months", ".NET specialists required", "Dev-heavy mapping", "Higher labor costs", "5M+ SKUs", "Virto Oz".
- Reported prices with no URL: Sana "about $10k/yr", Oro "$45k to $250k/yr" (competitor-profiles.md). Add back only with a source.
- Our own unmatched claims: native CRM, mobile sales app (kept out; sales app is an add-on in b2b.ts), white-label as a headline, multi-brand "one backend", MCP as a differentiator, "unlimited tiers", long ERP lists, SOC 2 / GDPR / SLA.
- Live-page decision-guide items using Odoo, Sage, NetSuite or QuickBooks as lists.

## Claims to back up (ours, on the new pages)
| Claim | Backing |
|---|---|
| £5,000 set-up, £300 a month incl. 1,000 orders, about 15p after, no per-user fees, no day rates for fixes | src/data/b2b.ts pricing |
| Any ERP; SyncSpider 10 years, 400+ integrations | b2b.ts faq |
| Each account sees its own prices, range, terms, live from the ERP | b2b.ts faq |
| Live in weeks, not months | b2b.ts how.intro |
| Fixes after updates in the monthly fee; we run it | b2b.ts / solutions.ts |
| Emailed, PDF and Excel orders read, checked, approved by the team before posting | b2b.ts pricing.included |
| "Send us 50 real orders" match-rate offer | b2b.ts how |
| Can take over the ERP link on an existing Shopify store | b2b.ts faq |
| Not for configured / one-by-one priced orders | b2b.ts whatWeFix.limits |
| Open: confirm in practice that B2Bware works against SAP and Dynamics and Sana-style live reads (page says "any ERP", per b2b.ts) | David |
| Open: B2Bware is not a CRM and not a marketplace; wording says so | David to confirm |

## Fairness notes
Each page has a "fits better" column for the competitor (Shopify: consumer-first, few price lists; Oro: big multi-site platform with CRM; Sana: SAP/Dynamics shops; Virto: .NET dev teams, marketplaces). Virto's per-order licence and our per-order overage are not like for like, and the page says so.
