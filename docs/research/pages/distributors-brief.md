# /distributors: segment brief

Date: 7 Oct 2026. Builds on demand-voice-of-customer.md (VoC), sdr-call-evidence.md, trade-portal-brief.md (TP), emailed-orders-brief.md, dach-opportunity.md. New sources this pass: EDA Digitalisation Survey 2023 (66 UK electrical wholesalers, phone interviews, independent researcher), Distribution Strategy Group (DSG) 2021, 2025 and 2026 surveys, B2Bware's Kienesberger case. Limits: Reddit archive rate-limited, G2 and NAW returned 403. UK distributor voice is still mostly the EDA survey.

**Distributor or wholesaler?** Mostly the same buyer. The UK Electrical Distributors' Association calls its own members "Wholesalers" in its survey. DSG and NAW say "wholesale distributors". Usage pattern (inference): UK electrical, plumbing and food say "wholesaler"; industrial, technical and multi-brand importers say "distributor"; DACH says "Großhandel" for both. The page should name both in the first screen.

## 1. Who fits

**Good fit**
- UK or DACH stockists, roughly 15 to 200 staff, on Sage 200, Business Central, NetSuite or similar.
- Account customers who reorder a known range by email, phone or rep, from thousands to tens of thousands of SKUs.
- Multi-brand catalogues and per-customer prices. Kienesberger is the template: "a trusted general distributor for various renowned European machinery and tool brands" (b2bware.com case, our own).
- An inside sales or customer service team keying orders (the SDR fit pattern: Metpro, Company of Animals).

**Poor fit**
- Trade-counter-led merchants. Builders' merchants: "92% of trade sales continue to be made over the counter" (NBG, 2023, TP 2.2). EDA wholesaler: "most of our customers still prefer to use the telephone or come into the trade counter."
- Spot or commodity pricing with no price source (Aztec Oils, SDR).
- Distributors where big-retailer EDI already carries most volume, or that are mid ERP migration (SDR).
- Large distributors with their own e-commerce teams on distribution ERPs such as P21 or Eclipse, where DCKAP, Conexiom and others are entrenched (gap-check).

## 2. Verified pain points

| # | Pain | Best evidence (source, short quote, URL) | Strength | Specific or shared |
|---|---|---|---|---|
| 1 | Inside sales keys emailed and phoned orders | DSG 2021: "Many distributors have a significant amount of orders that are received via e-mail and/or fax", plus "10-30 minutes of manual entry per order" (consultancy, Billtrust-sponsored) https://distributionstrategy.com/wp-content/uploads/2024/10/Distribution-Strategy-Group-2021-State-of-eCommerce-Part-1-Final.pdf . DACH: 39% of 200 wholesalers and manufacturers spend over 40% of sales time on admin (ECC KÖLN, Sep 2026, Intershop co-sponsor, dach-opportunity.md). UK: "Most of our customers are happy sending orders via email" (EDA 2023) | Strong | Shared, but "inside sales" is the distributor's word |
| 2 | Small accounts ring in the same repeat order, without part numbers | EDA 2023, UK wholesaler: "send me another 10 on the van today" https://www.eda.org.uk/wp-content/uploads/2023/04/EDA-Digitalisation-Research-Report-v5.pdf . US medical supplies distributor: "a unique list of around 30-50 items" (VoC 33) | Strong | Specific |
| 3 | Per-customer prices across a huge catalogue break the webshop | Kienesberger: "over 20 million entries" needed in Shopware (our case) https://b2bware.com/case-study-kienesberger/ . UK wholesaler: "70k+ products, multiple pricing lists" (adviser post, VoC 32). Sage user: "Multiple pricings for one item adjusted with pre-programmed rebates" (VoC 4) | Medium-strong | Shared, sharper at distributor scale |
| 4 | Website not linked to live ERP stock and prices | DSG 2026, 233 N. American distributors: 55% have not integrated systems, e.g. "an ecommerce platform not linked to live inventory" https://distributionstrategy.com/2026/04/most-distributors-have-technology-but-havent-connected-it-dsg-research-finds/ . DSG 2021 respondent: "Integration to ERP is table stakes." UK Sage 200 + Magento wholesaler: overnight sync "is not integration in my book" (VoC 16) | Strong | Shared |
| 5 | Big customers want punchout or EDI; the cost is too high | EDA 2023: "We did wave goodbye to a very good customer" (no punchout site; set-up cost more than the customer's annual spend). Only 7% of small UK electrical wholesalers offer customer-specific or punchout sites, vs 26% of medium/large. Supplier: "configurations would have been a nightmare" (VoC 37) | Medium-strong | Specific |
| 6 | Product data from hundreds of suppliers, each in its own format | EDA 2023: 32% of wholesalers create web product data themselves; one wants to stop "chasing suppliers for datasheets". DSG 2025: 42% rely heavily on third-party data https://distributionstrategy.com/2025/10/distributors-show-steady-and-strong-growth-in-ecommerce/ . Kienesberger: "most items had no images or descriptions." The widely quoted "58% say product data is the biggest barrier" (DSG 2021) could not be found in the report: do not use | Medium-strong | Specific |
| 7 | Web shop live but online share stuck | EDA 2023: 78% of UK electrical wholesalers sell under 10% online. EDA 2026 summary: digital share "has barely moved" (b2be, survey sponsor, vendor-written) https://web-prod.b2be.com/blog/eda-digitalisation-survey-2026/ . DSG 2025: only 22% very or highly satisfied with e-commerce ROI. DSG 2021 respondent: "We need a better onboarding process." | Medium | Specific |
| 8 | Manufacturers change SKUs; mapping breaks | Distributor: "they couldn't map the new SKUs to the old SKUs" (r/manufacturing, VoC 35) | Medium-weak (one source) | Specific |
| 9 | Reps on the road, orders come in randomly, stock messy | r/ERP small wholesalers, 2025: "stock gets messy fast"; "reps taking orders on the go" https://reddit.com/r/ERP/comments/1phetsu , https://reddit.com/r/ERP/comments/1pfwswn (possibly seeded posts) | Medium-weak | Shared |
| 10 | Online marketplaces take commodity lines | EDA 2023: "always going to lose out to the on-line marketplace for the standard items." FWD members named Amazon the biggest threat (The Grocer, Sep 2019). Recent Amazon Business figures are vendor surveys (Unilog) | Medium-weak, and not ours to solve | Specific |
| 11 | Thin margins, supplier rebates leak | Rebate and margin figures come from vendor blogs (Klipboard, ProfitOptics) or unverified snippets (NAW "about 4%" net, page 403) | Thin | Specific |

## 3. How B2Bware helps, and where we are weak

| Capability | Pains it answers | Distributor-specific angle |
|---|---|---|
| Ordering portal | 2, 3, 4, 7 | Each account sees its own price and "my usual items" for one-click reorder. Live stock from the ERP. Kienesberger proves per-customer pricing over a multi-brand catalogue (20M possible entries cut to about 70k). We set up accounts and invite customers, which answers pain 7 |
| AI order reading | 1, 2, 8 | Turns the inside sales inbox (PDFs, spreadsheets, "the usual") into checked ERP orders, mapping customer codes, packs and units. Mapping fixes carry over when a manufacturer renumbers |
| Webshop to ERP link | 4 | Fixes an agency-built or ageing trade shop so stock, prices and credit follow the ERP |
| Add-ons: sales app, EDI | 5, 9 | Reps order with live prices (Doppler, a manufacturer). EDI for the big accounts |

**Weak or unproven**
- **Punchout:** not in our listed offer. Pain 5 is real and specific to distributors. Ask the team whether SyncSpider can deliver cXML/OCI punchout before the page mentions it.
- **Product data (pain 6):** Kienesberger's case describes AI enrichment of "250+ GB of product data", but it is not one of the three core services. Confirm it can be sold before using it.
- **Live sync at scale:** Kienesberger pricing updates daily in about 15 minutes, not live (TP open item). Branch-level stock is unconfirmed.
- **Proof:** no UK distributor customer. Harrows is a manufacturer and Doppler is a manufacturer. Kienesberger (Austria) is our only distributor case.
- **Volume pricing:** high-line, high-order distributors will exceed 1,000 orders a month fast. Show the overage rate.
- **Not ours:** rebate management, Amazon competition, margin analytics.
- **Competition aimed at distributors:** DCKAP, WizCommerce, OrderEase, Conexiom, k-eCommerce, and in the UK Modulus365 (Sage 200) and B2B Wave (gap-check-dach-us-uk.md).

## 4. Buyer language

- Both "wholesaler" and "distributor"; "trade customers", "account customers", "our counter", "branches".
- "inside sales" (US, DSG, Rexel case); UK equivalents such as "sales office" and "internal sales" are inference, not yet seen in sources.
- "send me another 10 on the van today"; "the light fittings I usually have"; "part numbers"; "log on somewhere".
- "punch-out site", "EDI", "customers have different systems".
- "datasheets", "chasing suppliers", "product data".
- "Integration to ERP is table stakes"; "not linked to live inventory"; "not integration in my book".
- "price lists", "contract prices", "multiple pricing lists for different customer groups".
- German: "Großhandel", "Vertriebsinnendienst entlasten", "Auftragserfassung", "Medienbrüche" (dach-opportunity.md).

## 5. Recommended page angle

**Headline direction:** say it in their language: the inside sales team is still keying orders. Example: "For distributors and wholesalers: every customer's price, every order straight into your ERP." Sub: "Account customers reorder online at their own prices, emailed orders land in the ERP checked, and your inside sales team gets back to selling."

**Lead with these four pains**
1. Inside sales keying emailed and phoned orders (pain 1, strong, UK and DACH evidence).
2. The same small accounts ringing in the same reorder (pain 2, use the EDA "on the van" line as the scene).
3. Thousands of SKUs and per-customer prices that an off-the-shelf shop cannot carry (pain 3, Kienesberger proof).
4. The trade shop not linked to live ERP stock and prices (pain 4, DSG 2026, UK Sage 200 wholesaler).

Second tier, only once the team confirms: punchout for big accounts (5) and supplier product data (6). These are the most distributor-specific pains, and confirmed delivery would make them the page's main differentiator.

**Do not lead with**
- Amazon or marketplace fear: dated, vendor-sourced, and we do not solve it.
- Margin, rebate or "70% of orders are manual" statistics: vendor-written or unverified.
- "Customers want to order online" survey numbers: vendor-commissioned, weak (TP).
- AI as the headline (buyer-and-competitor-messaging.md).
- Trade-counter scenes (poor fit).
- "58% say product data is the biggest barrier": not found in the cited report.
