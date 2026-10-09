# Page brief: /solutions/erp-integration

Research date: 7 October 2026. Research only, no website files touched.
Page goal: UK (DACH secondary) manufacturers, distributors and wholesalers, 15 to 200 staff, whose webshop and ERP disagree. Offer: free consultation that ends in a plan and a fixed price.

Labels: **Quote** = exact words from the source. **Paraphrase** = summary of the source. **Inference** = my reading, not the source's. File refs point to `C:\Users\David\desktop\b2bware-content\`.

---

## 1. What we already knew (do not redo)

| Finding | Label | Source |
|---|---|---|
| "Integration breaks or systems drift out of sync, and nobody knows which system is right" is the most frequent buyer problem (15+ threads/reviews) | Paraphrase | research/demand-voice-of-customer.md s1 |
| Route 3 (fix or replace a broken connector) has the best "will pay" evidence: contractor requests, $2.5k to $12k/yr connectors, managed iPaaS | Paraphrase | demand-voice-of-customer.md s7 |
| Triggers: launching B2B then hitting a connector wall; vendor mis-sell; ERP update breaks the connector (UK, Simply4Crafts, BC 26.0); iPaaS price rise (Celigo); ERP migration; key staff leaving; costly overselling error | Quote/Paraphrase | demand-voice-of-customer.md s1 triggers table |
| UK trade wholesaler on Magento + Sage 200: "It only pushed data back overnight, which caused stock issues, account/credit mismatches, and extra manual cleanup. That is not integration in my book." (r/Sage, 2026-05-16) | Quote | demand-voice-of-customer.md item 16 |
| Failed or abandoned projects: eBridge/Jitterbit "took many thousands from me... never produced any orders"; Cartspan "ghosted us" after asking to re-code 850 customer IDs (r/Sage, Jan 2024, US) | Quote/Paraphrase | demand-voice-of-customer.md items 20, 21 |
| B2B data does not map: company hierarchies, PO terms, customer-specific pricing ("B2B gets messy fast") | Quote | demand-voice-of-customer.md 2C items 26 to 31 |
| Price points: NetSuite B2B connector $12k/yr "That seems crazy!"; eBridge Sage 50 ~$5,500/yr, 3-year minimum, 200 to 250 orders/month, "I'd like to find something a bit more economical"; Codeless "was too expensive"; UK clerk vs integration "£50k by the time I left, the Dev time was about £2k" | Quote | demand-voice-of-customer.md s3.1 |
| Buyers want one owner: "all the developers point the finger at the other apps"; "I just need to pay someone to help me get this done"; "agnostic to the IPAAS as long as it works well" | Quote | demand-voice-of-customer.md 2E |
| Native tools closing the gap: BC Shopify connector is free and syncs B2B companies and catalogue prices (since Apr 2024), but is rated 2.6/5; Shopify B2B on all plans since Apr 2026, customer-specific catalogues still Plus-only | Paraphrase | market-claims-check.md claims 2, 3; demand-voice-of-customer.md 4.3 |
| Crowded in US NetSuite/Shopify (15 vendors replied to one request) | Paraphrase | demand-voice-of-customer.md 4.5 |
| Integration vendors lead with "connected systems" and rarely name a business consequence. Nobody leads with "fix what you already bought"; only DCKAP ("Failed transactions that nobody sees") and Patchworks ("Silent failures") name it | Paraphrase | competitor-problem-claims.md s3, s5 point 5 |
| Closest UK overlap: GOb2b and Codeless (Sage 200-first, software, customer or partner does the work). Nobody found publishing fixed build plus flat monthly for this buyer in the UK | Paraphrase | competitor-profiles.md synthesis |
| Gap check: "nobody does this" is false as worded. Defensible angle is packaging: one accountable team, fixed build, flat monthly. UK gap holds best but evidence thin. Space48, Vaimo, Swanky, Blue Bear, Codeless services unverified | Paraphrase | gap-check-dach-us-uk.md |
| Buyer thinking: "I don't want a year-long IT project. I've been burned before." "Will it work with our Sage, not Sage in general?" (constructed persona, not a real quote) | Inference | buyer-and-competitor-messaging.md |
| Aztec Oils: web agency built a B2B portal with no link to Sage. David: "we could have built that B2B portal and we could have integrated it into Sage." | Quote | sdr-call-evidence.md, missed opportunity |
| UK buyers ask for price early, dislike pricing "just below the cost of the existing team", fear "a 10x budget mismatch"; mid-ERP-migration is the most common timing blocker | Quote/Paraphrase | sdr-call-evidence.md; B2Bware-Growth-Context-Brief.md s4, s5 |
| ERP stays system of record; pricing comes from ERP by scheduled export or live API call per order; Sage 200 has an official REST API with a Sales Order endpoint; confirm each instance before promising | Paraphrase | B2Bware-Growth-Context-Brief.md s1, s4 point 7 |
| Nameable customers: Kienesberger (live per-customer ERP pricing in B2B portal), Doppler (sales agents order with live ERP pricing; 70% faster order entry), Harrows Darts (UK; B2B portal connected to the ERP) | Paraphrase | PRODUCT.md "Evidence on Hand" |
| BC grew from 30k to 55k customers (Nov 2023 to Apr 2026); each migration rebuilds integrations | Paraphrase/Inference | research/demand-market-sizing.md line 89 |

---

## 2. New evidence (this pass)

### 2.1 Why links break: the update treadmill (strong, official sources)
- **Quote (Microsoft Learn, BC 2025 wave 1, updated 2026-08-27):** "The Shopify connector released in 2024 release wave 2 (October 2024) relies on API 2024-07. Shopify supports this API until July 1, 2025. To continue to use your integration, upgrade to the latest version of Business Central before this date." https://learn.microsoft.com/en-us/dynamics365/release-plan/2025wave1/smb/dynamics365-business-central/use-latest-update-shopify-connector
- **Paraphrase (Shopify dev docs):** Shopify releases a new API version every quarter; each is supported for at least 12 months. https://shopify.dev/docs/api/usage/versioning
- **Paraphrase (Microsoft Learn and partners):** BC online gets two major updates a year (April and October) plus monthly minor updates. https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-update-management
- **Inference:** a webshop-ERP link on BC + Shopify has at least six forced change points a year (two BC majors, four Shopify API versions). This is the factual backbone for "someone has to own it", and no competitor page uses it as a reason to buy.

### 2.2 Buyer and practitioner voice (new)
- **Quote (Dynamics Community, "Sync not working for products and inventory", date not shown, poster mentions a BC update on 15 March):** "Inventory sync shows as 'successful' in BC, but quantities are not updating in Shopify. Products are no longer mapping correctly, sync shows as 'successful' in BC. Orders are coming from Shopify, but BC no longer recognizes SKUs." Fix was to remove all products, resync and remap; root cause unknown. https://community.dynamics.com/forums/thread/details/?threadid=29a4046c-8c2d-f111-88b4-000d3a54c4d2
- **Quote (Dynamics Community, "Shopify connector is Live - some early issues discovered", date not shown):** "if you run a shop with 20 items then it will do the job for now. Other than that - needs updating fast" https://community.dynamics.com/forums/thread/details/?threadid=ac1c329f-c7c1-4526-9730-0daefa8a1f4e
- **Quote (Shopify Community, Malcolm_7, 2025-03-20, BC user, region not stated):** "I gave up - the Shopify plus was too expensive to achieve what we wanted. Busy with a custom webstore. Not ideal as lots of API's to be built." Context: only one BC customer price group syncs to a standard Shopify store; per-customer prices need Shopify B2B (confirmed by the connector team, 2024-09-07). https://community.shopify.com/t/business-central-to-shopify-customer-discount-groups/354929
- **Quote (Sage City UK, Sage 50, "over 3 years ago" so about 2023):** poster's new website orders are printed and re-keyed into Sage. Verified answer: "Should have been part of the design process but webbies cant be bother with the boring stuff!" https://communityhub.sage.com/gb/sage-50-accounts/f/general-discussion-uk/203817/importing-sales-orders-invoices . **Inference:** independent echo of the Aztec Oils pattern (agency builds shop, nobody builds the ERP link).
- **Paraphrase (Shopify App Store, BC connector, page 2 and 3 of reviews, Oct 2026):** Rococo Jewellery (UK, 2023-08-30, 1 star) "Hopeless"; Lipnus (Lithuania, 2026-03-30, 1 star) had to remap 600 SKUs by hand after a sync; Canarias Neumáticos (Spain, 2026-03-27) "Directamente no funciona, aunque te dice que si" (it doesn't work, though it says it does); El Cafetero (Chile, 2025-01-08) had to reinstall when connector updates were required. Rating now 2.6/5 from 27 reviews. https://apps.shopify.com/dynamics-365-business-central/reviews
- **Paraphrase:** on several 1-star reviews Microsoft's reply directs the merchant to a Dynamics 365 partner for help (Rococo Jewellery, Browns Deals). Same page. **Inference:** the free connector's own vendor hands the hard cases to a services firm. That is the slot this page sells into.
- **Quote (UK agency Trisec, 2026-09-24):** "Monitoring is a separate retainer, because a sync nobody watches tends to fail without anyone noticing for a fortnight." https://trisec.io/shopify-business-central-integration/
- **Quote (Eureka/Russwood testimonial, Sage 200, 2021 brochure, vendor-hosted):** "As online sales grew, it was becoming quite time consuming to manually update sales orders and stock levels. Rebuilding our website gave us an opportunity to look at how we could automate this process." https://eurekaaddons.co.uk/wp-content/uploads/2021/06/IntegrationSubscription2021.pdf . Trigger: website rebuild.
- **Paraphrase (eBridge Sage 50 Shopify app, Reputon mirror):** $299.99/month, 3.3/5 from 10 reviews; worst review (2019): contacted developers "numerous times... No response." https://reputon.com/shopify/apps/accounting/sage-50-integration-by-ebridge-connections . Capterra shows eBridge at 2.3/5 from 11 reviews (search snippet only; page returned 410).
- **Paraphrase (Celigo price pressure, third-party data, not buyer quotes):** SpendHound/Vendr report Celigo SMB pricing up about 13% year on year, some renewals much higher; Vendr median $14,706/yr. https://www.spendhound.com/marketplace/celigo-pricing , https://www.vendr.com/marketplace/celigo . Thin as buyer evidence.
- **Paraphrase (Sage City UK, Sage 200 API):** orders using the default online card payment method cannot be posted through the Sage 200 API; a non-card payment method must be configured. https://communityhub.sage.com/gb/sage-200/f/general-discussion/232711/error---you-cannot-process-orders-which-use-online-card-payments-via-the-sage-200-api . **Inference:** example of the instance-specific detail that makes "will it write back to our Sage?" a real question.

### 2.3 Price points found (new)
| Offer | Price | Source | Confidence |
|---|---|---|---|
| Trisec (UK, Rugby): integration review | £1,500, credited against build | trisec.io page above | High (on page) |
| Trisec: core sync build (products, stock, customer-specific pricing, orders; one store, one ERP) | from £8,000 | same | High |
| Trisec: full operations sync | £15,000 to £30,000; monitoring a separate retainer | same | High |
| Commercient SYNC, Sage 200 UK + BigCommerce, "managed integration" incl. 24/7 monitoring and "compatibility with eCommerce and ERP updates" | from $219/month | search snippet only; product page and pricing page show no amounts (now "build a quote around your needs") | Low |
| eBridge Sage 50 Shopify app | $299.99/month | Reputon mirror | Medium |
| Patchworks iPaaS | Not published; priced by connectors and "operations" (each payload) | https://www.patchworks.io/pricing/ | High |
| Besyncly (Eureka, UK Sage partner) | Not published; "bespoke proposal", fixed scope after free discovery | https://besyncly.com/pricing/ | High |
| Celigo | Not published; Vendr median $14,706/yr | Vendr | Medium |

**Inference:** B2Bware's £5,000 set-up plus £300/month including 1,000 orders sits below the only published UK agency build price (Trisec from £8,000 plus a separate monitoring retainer) and in line with US managed monthly fees. Publishing it, with monitoring included, is a real UK differentiator. It has not been tested on this buyer.

---

## 3. Who lands on this page and what triggered them

| Visitor | Trigger | Evidence | Label |
|---|---|---|---|
| Ops or sales director, UK distributor on Sage 200 or 50, trade shop on Magento/Woo built by an agency | Shop is live but not linked, or linked by overnight batch; staff re-key orders, fix stock and credit mismatches | UK Magento + Sage 200 wholesaler (VoC item 16); Aztec Oils (sdr-call-evidence.md); Sage City "webbies" thread | Quote |
| BC customer on Microsoft's free Shopify connector | Hits B2B limits: one price group, per-customer pricing needs Plus; or sync breaks after a BC update | Malcolm_7 (Shopify Community); Dynamics Community "Sync not working"; Simply4Crafts UK review | Quote/Paraphrase |
| Firm whose connector vendor went quiet, mis-sold or raised price | Vendor ghosted, unresponsive support, renewal jump | Cartspan, eBridge (VoC 20, 21); eBridge app review; Celigo price data | Quote/Paraphrase |
| Firm mid website rebuild or ERP move | New site or new ERP forces the link to be rebuilt | Russwood testimonial; BC growth 30k to 55k (demand-market-sizing.md); mid-migration is the top timing blocker (Growth brief s5) | Quote/Inference |
| Firm after a costly error | Oversold, wrong price, revenue miscounted for months | "silently double-counting revenue for four months" (VoC 15); "We oversold inventory again today" (VoC triggers) | Quote |
| Key person left | The one person who knew how the sync works has gone | "I am losing the previous owner in a month to retirement" (VoC triggers); no direct "integration owner left" buyer quote found | Quote / thin |

What they do next (evidence): switch connector or iPaaS (Celigo-to-n8n thread, VoC); hire a contractor and stay tool-agnostic (VoC 36); build custom (Malcolm_7); live with re-keying and hire admin (VoC 4.1, £50k clerk story). **Inference:** our page competes as much with "live with it" and "hire an admin" as with other vendors.

DACH: no new buyer evidence on webshop-ERP drift this pass (Shopware/Xentral forum hits were configuration bugs, not buying signals). Keep DACH as secondary and evidence-light.

---

## 4. Their exact words (for copy)

Use as written; all are Quotes from sources above.

- "That is not integration in my book." (UK, Sage 200 + Magento)
- "stock issues, account/credit mismatches, and extra manual cleanup" (same)
- "trade accounts, customer-specific pricing, credit checks" (same)
- "I just want inventory numbers that actually match everywhere for once."
- "Nobody actually knew what broke."
- "sync shows as 'successful'" but nothing updated (Dynamics Community)
- "it says it does" / "it doesn't work, though it says it does" (translated Spanish review)
- "held together with tape"
- "B2B gets messy fast."
- "all the developers point the finger at the other apps"
- "I just need to pay someone to help me get this done."
- "agnostic to the IPAAS as long as it works well"
- "a sync nobody watches tends to fail without anyone noticing for a fortnight" (UK agency, usable as a line of thinking, not to quote on page)
- "Should have been part of the design process" (Sage City UK, on agency-built shops)
- "ghosted us" (Cartspan)
- "That seems crazy!" (on a $12k/yr B2B connector)

**Inference:** buyers describe symptoms (doesn't match, says successful but isn't, overnight, mismatches) and blame (finger-pointing, ghosted). They never say "iPaaS", "middleware" or "data layer".

---

## 5. What competitors claim, how their pages are built, and the gap

| Vendor (country) | H1 / lead | Structure | Proof | Price shown | Managed? | Source |
|---|---|---|---|---|---|---|
| Patchworks (UK) | "Unified Ecommerce and ERP Integration"; sub "Stop manual data entry and reconcile your entire business in real-time." | Benefits (overselling, fulfilment, reconcile) > "How we untangle and de-risk your ERP integration" > sectors > FAQ > logos | 1,700 brands, 40+ logos, one quote | No | No (partners) | patchworks.io/solutions/ecommerce-erp-integration |
| Codeless Platforms (UK) | "eCommerce integration solutions to improve order management processes" | Scenarios > case studies > connector list > blog | La Guaca "600% growth"; "8,500+ customers" (competitor-profiles.md) | No (from £250/mo per profiles file) | Via Sage partners | via r.jina.ai reader |
| Celigo (US) | "Shopify – NetSuite Integration App" | Feature list (orders, stock, refunds, payouts) > platform | G2 #1, Gartner | No; free trial | Professional services | celigo.com/integrations/netsuite-shopify |
| MindCloud (US) | "Connect to anything. Automate everything." | Logos > "Full service: Integrations are hard, let us help." > testimonials | Named testimonials | No | Yes: "dedicated delivery team that scopes, builds, launches, and supports" | mindcloud.co |
| DCKAP Integrator (US) | "Integration Platform Built for ERP-Led Distributors and Manufacturers" | ERP-led > distribution workflows > EDI > proof > "What You Pay, What You Get" | 200+ distributors, G2 | Tiers, amounts hidden | Yes: "You don't need an internal integration team to keep things running." | dckap.com/integrator |
| CartSpan (US) | Long product-name H1 for QuickBooks/Sage 50 US | Why choose > testimonials > phone us | BBB A+ | No | Setup help "1-2 hours" | cartspan.com |
| eBridge | Domain now redirects to Jitterbit | n/a | n/a | App $299.99/mo | n/a | ebridgeconnections.com |
| Besyncly / Eureka (UK) | "Sage 200 and Magento 2 Integration" | Benefits > what it is > common integrations > why us | One testimonial | Bespoke proposal | "Our experienced team will take care of your set-up"; scheduled sync "at intervals that suit you" | besyncly.com |
| Commercient (US, UK pages) | "Connect Sage 200 and WooCommerce to reduce order processing lag" | Data synced > FAQ | Reviews | Quote-based now | Monitoring and update compatibility claimed (snippet) | commercient.com |
| Swanky (UK agency) | "Shopify & Sage 200 Integration" | In-house team > why integrate > Patchworks case study > partners | Natural Instinct | No | Agency build on Patchworks | swankyagency.com |
| Pivotal (UK) | "Sage 200 & Shopify Integration Guide + Free Viability Test" | Guide (£99) + free viability audit with tailored quote | None | £99 guide | Project | pivotal.digital |
| Trisec (UK) | "Shopify to Business Central: Do You Need Custom Integration in 2026?" | What free connector does > where it stops > how to decide > costs > FAQ | None | £1,500 / £8,000+ / £15k to £30k | Monitoring retainer, extra | trisec.io |
| Red Technology (UK) | "Ecommerce for Sage 200" (tradeit platform) | Financials (credit limits, VAT) > Commercials (real-time stock, price lists) | Culpitt, Canagan | No | Platform | redtechnology.com |

**Common page pattern (Inference):** H1 names the two systems or "integration"; feature list of objects synced; logos or counts; "book a demo". Price is hidden on every UK page except Trisec. FAQs (where present) ask: what does it cost, how long, how often does it sync, what if we change platform, how do you stop silent failures, what if we don't keep BC updated, can we test without risking live data.

**The gap nobody fills (Inference, from the table):**
1. **Rescue framing.** Nobody leads with "your existing link is broken or orphaned, we take it over". Every page assumes a new build.
2. **Trade data as the headline.** Contract prices, accounts, credit holds and customer part codes appear only as feature bullets (Red Technology, Commercient FAQ). Trisec is the only page that says B2B is why the free connector stops.
3. **Ownership after go-live, priced in.** DCKAP and MindCloud claim managed in the US; in the UK, monitoring is either absent from the page or a separate retainer (Trisec). Nobody in the UK publishes a fixed set-up plus a monthly fee that includes watching and fixing the link.
4. **The update treadmill as the reason.** No page explains that BC and Shopify force changes several times a year, so a link without an owner decays.
5. **"Will it work with our Sage?"** No page commits to proving the write-back on the buyer's own instance before they pay.

---

## 6. Objections and evidence-based answers

| Objection | Evidence it is real | Answer (and its source) |
|---|---|---|
| "Microsoft's connector is free." | market-claims-check.md claim 3 | True for a standard shop. It is online-only, rated 2.6/5, syncs one price group to a standard store, and per-customer catalogues need Shopify Plus (market-claims-check.md claim 2; Shopify Community thread). Microsoft itself refers hard cases to partners (App Store replies). Say "use it if it fits; we take over where it stops". |
| "We've been burned before." | eBridge, Cartspan (VoC 20, 21); Worktop "too expensive relative to the task" (sdr-call-evidence.md) | Fixed price agreed before work starts; test on real orders; free consultation ends in a written plan (Growth brief s4). Needs team sign-off on exact wording. |
| "It'll break again on the next update." | BC twice-yearly majors; Shopify quarterly API; Microsoft's July 2025 cut-off | Monthly fee covers keeping the link current through ERP and webshop updates. **Must confirm with team** this is in the £300. |
| "Is it real-time? Ours is overnight." | UK Sage 200 + Magento quote | Growth brief: prices come from the ERP by scheduled export or live API call per order. **Confirm** which objects can be live per ERP before promising "real-time". |
| "Will it write back into our Sage / BC?" | Worktop, Coba concerns (sdr-call-evidence.md); Sage 200 API card-payment limit | Yes for documented APIs; we check your instance in the consultation (Growth brief s4 point 7). Sage 50 UK has no native order import (Sage City); confirm our Sage 50 route. |
| "Who is master?" | Not asked verbatim in sources; implied by "nobody knows which system is right" (VoC s1) | ERP stays the system of record (Growth brief s1; PRODUCT.md). Safe to state. |
| "We're mid ERP migration." | Most common timing blocker (Growth brief s5; sdr-call-evidence.md) | **Inference:** offer to plan the link for the new ERP so it is ready at cut-over, rather than park the lead. Needs team view. |
| "What if you disappear / lock-in?" | Buyer fear of small vendors is inferred from ghosting stories; no buyer quote on lock-in or data ownership found | Data stays in your ERP and shop; ask team what documentation, access and exit terms we give. **Evidence thin.** |
| "£300 a month forever?" | Colyer wary of recurring cost, warmer on usage (sdr-call-evidence.md) | Price is tied to orders (1,000 included, about 15p after, per memory note b2b-pricing-locked); compare with re-keying time and with Trisec £8,000+ plus retainer. |
| "You're in Austria?" | Prospect asked "you're reaching out from Austria?" (Growth brief s3) | Name the UK sales contact and the Austrian engineering team plainly. |

---

## 7. What we can honestly claim vs what needs confirming

**Can claim now (sourced in house files):**
- ERP stays the master; we sit alongside it (Growth brief s1; PRODUCT.md).
- Engine underneath: SyncSpider, 400+ connectors (PRODUCT.md).
- Kienesberger: live per-customer ERP pricing in their B2B portal (PRODUCT.md).
- Harrows Darts (UK): B2B portal connected to the ERP (PRODUCT.md).
- Doppler: sales agents order with live ERP pricing; 70% faster order entry (PRODUCT.md). The Growth brief adds "90% fewer errors": PRODUCT.md does not list it, so confirm before use.
- Fixed set-up £5,000, £300/month incl. 1,000 orders (task brief and memory note). **Conflict:** PRODUCT.md still says package prices are "Undecided... never invent numbers". Update PRODUCT.md or confirm before the page goes live.

**Needs confirming with the team before it goes on the page:**
1. Real-time vs scheduled, per object (prices, stock, orders, customers, credit) and per ERP. syncspider.com/erp-integration/sage/ claims "real-time" generically; the Growth brief says pricing is "scheduled export or live API call per order".
2. What the £300 covers: monitoring, alerts, fixes after BC/Sage/Shopify updates, connector version upgrades, change requests. What is out of scope and how it is billed.
3. Which webshops we support in production (Shopify, Shopify B2B, WooCommerce, Magento/Adobe Commerce, Shopware, BigCommerce, own portal), not just "connector exists".
4. Which ERPs we have live write-back on today (Sage 200, Sage 50 UK, BC online, BC on-prem, NetSuite, Sage X3, IFS). Sage 50 UK and BC on-prem are the hard ones.
5. Takeover process for an existing connector: do we audit and keep it, or always rebuild?
6. Exit terms: documentation, access to mappings, notice period, data ownership.
7. Response time on breakage and who the UK contact is.
8. Whether any of the three customers will accept a quote or a named case study on this page (Kienesberger and Doppler are DACH; only Harrows Darts is UK).
9. Order overage: "about 15p" after 1,000 (memory note says ~15p; confirm exact figure).

---

## 8. Recommended page sections, in order

| # | Section | Purpose | Source |
|---|---|---|---|
| 1 | Hero: symptom headline in buyer words (prices and stock that don't match, orders that stopped syncing), subline "We take over the link between your webshop and your ERP, keep the ERP as master, and run it for a fixed monthly fee." CTA: free consultation, plan and fixed price | Match the trigger; state the managed promise in one line | s3, s4; gap 1 and 3 |
| 2 | "Sound familiar?" 5 or 6 symptoms as short lines (overnight sync, "successful" but wrong, contract prices missing, credit holds ignored, connector vendor gone quiet, broke after an update) | Recognition; this is where the exact words go | s4 |
| 3 | Why it keeps breaking: BC updates twice a year, Shopify changes its API every quarter, B2B data the standard connectors don't carry, and nobody owns it | Turn "bad luck" into a reason to buy a managed service; nobody else says this | s2.1; gap 4 |
| 4 | What we take over or rebuild: the trade data list (customer and contract prices, stock by location, orders, accounts, credit status, invoices and dispatches) with ERP as master | Answer "do you get B2B?"; only list what the team confirms | s7 items 1, 3, 4 |
| 5 | How it works: free consultation > written plan and fixed price > build and test on your real orders > we run it monthly | Answers "I've been burned" and "no big project" | Growth brief s4; buyer-and-competitor-messaging.md |
| 6 | Price: £5,000 set-up, £300/month incl. 1,000 orders, then per-order; what the monthly covers | UK buyers ask early; only Trisec publishes and charges more for build plus separate monitoring | sdr-call-evidence.md; s2.3 |
| 7 | Proof: Harrows Darts (UK) first, then Kienesberger and Doppler, each with the one specific fact we hold | Honest scale; PRODUCT.md principle 3 | PRODUCT.md |
| 8 | Systems we connect: ERPs and webshops actually live, plus "400+ connectors underneath" | Answers "will it work with our Sage, not Sage in general" | s7 items 3, 4 |
| 9 | Your options, honestly: free/native connector, DIY iPaaS, agency project, or us. When each fits | Pre-empts the "free connector" objection; builds trust | s5; s6 row 1; trisec.io uses this pattern |
| 10 | FAQ: real-time or batch? Who is master? What happens when BC/Sage/Shopify updates? We're mid ERP migration. Can you take over our current connector? What if we leave? On-prem? Where is the team? | Questions buyers need answered before booking | s6; competitor FAQs (Patchworks, Trisec, Pivotal) |
| 11 | Closing CTA: free consultation, what they get (plan, fixed price) and what to bring (ERP version, webshop, a sample of broken records) | Make the call feel low-risk and useful | Growth brief s4 point 3 |

Keep "B2B commerce", "iPaaS" and "middleware" out of headings (buyer-and-competitor-messaging.md).

---

## 9. Gaps and confidence

| Area | Confidence | Why |
|---|---|---|
| The pain exists (drift, breakage after updates, B2B data not mapping) | High | Official Microsoft/Shopify docs plus many independent reviews and threads |
| UK-specific buyer voice | Low to medium | About 4 UK items (Sage 200 + Magento wholesaler, Simply4Crafts, Rococo Jewellery, Sage City threads). Reddit could not be re-mined this pass (archive API timed out; reddit.com blocked) |
| Will pay for a managed link at our price | Medium | Indirect: contractor requests, connector spend, Trisec and US managed prices. No UK buyer has said yes to £5,000 + £300 for this route |
| Lock-in and data-ownership fears | Low | No buyer quote found; answer rests on team-confirmed exit terms |
| Competitor page structures | Medium to high | Read live; Codeless via reader proxy; Commercient's $219/mo is a search snippet, not on page |
| DACH | Low | No new evidence; keep secondary |
| Sage City and Dynamics Community depth | Low | Only a handful of threads read; dates often shown only as "over N years ago" |

Next research step if needed: a slower Reddit archive pass on r/Sage, r/Dynamics365, r/smallbusinessuk and r/ukecommerce for UK sync-breakage posts, and five short calls to existing customers asking what triggered them to fix their link.
