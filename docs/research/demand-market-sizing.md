# Demand and market sizing: ERP-to-commerce service (UK, DACH, US)

Research date: 23 September 2026. Every number carries a source and the date it was published or fetched. **Evidence** means a figure taken directly from a source. **Inference** means my arithmetic or reading of that evidence, with the working shown.

---

## 0. Bottom line

| Question | Answer | Confidence |
|---|---|---|
| Is the target pool of firms big enough? | Yes, by a wide margin. About 263,000 manufacturers and wholesalers in the size band across UK + DACH + US (section 2). Winning 50 clients means winning about 0.02% of them. | High (official statistics) |
| Is there evidence of active pain or spend? | Yes, indirect evidence. Hiring for manual order entry is ongoing in all three markets (section 3). ERP install bases are growing fast (Business Central: 40k to 55k customers between Jul 2024 and Apr 2026). The official Microsoft Shopify connector has a 2.6 star rating. Germany has a legal deadline in Jan 2027. | Medium |
| Is there evidence people search for "done-for-you ERP-to-commerce"? | No usable public keyword data found for the exact terms (Google Trends blocked, no published volumes). This remains a gap (section 1). | None |
| How much B2B trade still goes around web shops? | US: about 19% of manufacturing and wholesale sales go through e-commerce (USD 2.93tn of 15.12tn, 2025). Germany: 9.7% of B2B sales go through shops and marketplaces (IFH, 2023). The rest is EDI plus email, phone and reps, not split out. | Medium |
| Which route has the strongest public signal? | (1) DACH e-invoicing plus ERP integration: a legal deadline and measured readiness gaps. (2) Email/PDF order entry: lots of hiring and vendor-reported pain, but no independent figure for the share of orders arriving by email. (3) Broken connectors: small but pointed evidence (low ratings on first-party connectors). The B2B portal route has plenty of cheap self-serve competition. | Medium |

---

## 1. Search demand and marketplace proxies

### 1a. Keyword volume
**Result: no usable public keyword volumes.**
- Google Trends returned HTTP 429 (rate-limited) when fetched on 23 Sep 2026.
- No article or public Semrush/Ahrefs page giving monthly volumes for any of the target terms turned up: "B2B portal", "order entry automation", "sales order automation", "Business Central Shopify", "NetSuite Shopify integration", "Sage 200 integration", "B2B Shop", "E-Rechnung" and "Auftragserfassung automatisieren".
- Nothing here is estimated. It stays a gap until someone runs Google Keyword Planner or a Semrush/Ahrefs trial for UK, DE and US (about 1 hour).


### 1b. Shopify App Store proxies (fetched 23 Sep 2026)

| App | Developer | Rating | Reviews | Launched | Source |
|---|---|---|---|---|---|
| Dynamics 365 Business Central (official connector) | Microsoft | **2.6 / 5** | 28 | 29 Apr 2022 | https://apps.shopify.com/dynamics-365-business-central |
| BSS B2B Wholesale Pricing | BSS B2B Suite | 4.9 / 5 | 1,177 | 18 Sep 2020 | https://apps.shopify.com/b2b-solution-custom-pricing |
| SparkLayer B2B & Wholesale | SparkLayer (UK) | 4.9 / 5 | 384 | 28 Apr 2021 | https://apps.shopify.com/sparklayer |
| Wholesale Gorilla | Wholesale Gorilla | 4.8 / 5 | 317 | 26 Sep 2018 | https://apps.shopify.com/wholesale-gorilla |

Evidence, from reviews on the Microsoft connector listing: "feels extremely complicated for no reason", "unreliable inventory synchronization", "Trash. Especially reconciliation". One reviewer called it "very stable" for a free add-on.

Inference:
- **Route 3 (fixing connectors):** Microsoft's own free BC-Shopify connector has a 2.6 rating. That is a real but small signal that off-the-shelf ERP connectors disappoint. Only 28 reviews is thin evidence.
- **Route 1 (B2B portal):** Self-serve B2B pricing apps have thousands of reviews and cost USD 29 to 299 a month (SparkLayer pricing: Free, $49, $149, $299). Demand for B2B ordering on Shopify is real. It is also well served at low prices. A done-for-you portal has to win on ERP depth (contract pricing, customer part codes), not on having a portal at all. SparkLayer lists Xero, QuickBooks, Cin7, Katana, Linnworks and Unleashed integrations. It does not list Sage 200, BC or NetSuite, which is where the gap is.
- The Shopify search pages render in JavaScript and would not load, so I could not get total app counts per search term. Gap.

---

## 2. Market size: target firm counts

### 2a. Firms by size band (official statistics)

| Market | Sector | Size band | Firms | Year | Source |
|---|---|---|---|---|---|
| UK | Manufacturing (SIC 10-33) | 10-249 | **25,990** (10-19: 11,380; 20-49: 8,640; 50-99: 3,780; 100-249: 2,190) | IDBR snapshot 14 Mar 2025 | ONS, UK business: activity, size and location 2025, Table 3: https://www.ons.gov.uk/file?uri=/businessindustryandtrade/business/activitysizeandlocation/datasets/ukbusinessactivitysizeandlocation/2025/ukbusinessworkbook2025new.xlsx |
| UK | Wholesale (SIC 46) | 10-249 | **17,235** (9,140 / 5,375 / 1,865 / 855) | Mar 2025 | same |
| Germany | Manufacturing (NACE C) | 10-249 | **61,712** (10-19: 27,038; 20-49: 20,657; 50-249: 14,017) | 2024 | Eurostat sbs_sc_ovw (updated 15 Sep 2026): https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/sbs_sc_ovw?format=JSON&geo=DE&nace_r2=C&indic_sbs=ENT_NR |
| Germany | Wholesale (NACE G46) | 10-249 | **23,982** (10,926 / 8,590 / 4,466) | 2024 | same |
| Austria | Manufacturing | 10-249 | **5,997** | 2024 | same (geo=AT) |
| Austria | Wholesale | 10-249 | **3,393** | 2024 | same |
| Switzerland | Manufacturing | 10-249 | **8,721** | 2024 | same (geo=CH) |
| Switzerland | Wholesale | 10-249 | **3,534** | 2024 | same |
| US | Manufacturing (NAICS 31-33) | 15-199 | **66,207** | 2022 | Census SUSB 2022 (released 10 Apr 2025): https://www2.census.gov/programs-surveys/susb/tables/2022/us_state_naics_detailedsizes_2022.xlsx |
| US | Merchant wholesale (NAICS 42) | 15-199 | **45,919** | 2022 | same |

Cross-check for Germany: the Destatis Unternehmensregister (reporting year 2024, as of 1 Dec 2025) gives 47,713 manufacturers with 10-49 staff and 16,442 with 50-249, which is 64,155 in total. That is close to Eurostat's 61,712. Destatis groups wholesale with retail in section G, so I used Eurostat G46 for wholesale. https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Unternehmen/Unternehmensregister/Tabellen/unternehmen-beschaeftigtengroessenklassen-wz08.html

US note: SUSB bands do not split at 15 and 249 the way the European bands do. I used 15-199. For 10-199 the counts are 88,566 manufacturers and 65,437 wholesalers.

### 2b. Totals (inference, arithmetic)

| Region | Manufacturing | Wholesale | Total |
|---|---|---|---|
| UK (10-249) | 25,990 | 17,235 | **43,225** |
| DACH (10-249) | 76,430 (61,712 + 5,997 + 8,721) | 30,909 (23,982 + 3,393 + 3,534) | **107,339** |
| US (15-199) | 66,207 | 45,919 | **112,126** |
| **All three** | | | **262,690** |

What this does not tell us: how many of these firms take repeat B2B trade orders, run an ERP with an API, and have messy pricing data. No public source measures that. Here is an illustrative funnel, **assumptions only, not evidence**. If 30% take repeat trade orders on an API-capable ERP, and 10% of those are in the market in any given year, then 262,690 x 0.30 x 0.10 = about 7,900 firms in the market each year. Even if those two assumptions are too high by a factor of 5, that still leaves about 1,600. So the size of the market is not what limits B2Bware. Reaching buyers and converting them is.

### 2c. ERP install bases

| ERP | Customers | Date | Source | Note |
|---|---|---|---|---|
| Microsoft Dynamics 365 Business Central (online) | **55,000** | 28 Apr 2026 (Directions NA) | https://yzhums.com/63206/ (compiles Microsoft statements); https://msdynamicsworld.com/story/directions-north-america-2026-d365-business-central-reaches-new-customer-milestone-introduces | Earlier: 30,000 (Nov 2023), 40,000 (Jul 2024), 45,000 (Apr 2025), 50,000 (Nov 2025). About 10,000 new customers a year. No split by region is published. |
| Oracle NetSuite | **43,000+** | Oracle Q3 FY2026 (10 Mar 2026) | https://www.houseblend.io/articles/oracle-q3-fy2026-netsuite-growth-analysis (Houseblend is a NetSuite partner) | NetSuite revenue USD 1.1bn for the quarter, +14% YoY |
| Sage 200 | No official count found | n/a | https://www.appsruntheworld.com/customers-database/products/view/sage-200 (third-party, paywalled) | A reseller claims "tens of thousands" of UK users, typically 20-500 staff. Unverified. |
| Business Central, UK | 1,244 companies detected (technographic sample, **not** a customer count) | undated, fetched 23 Sep 2026 | https://theirstack.com/en/technology/microsoft-dynamics-365-business-central/gb | Only a floor |
| Sage 200 (official) | Not disclosed. The Sage FY24 annual report mentions Sage 200 cloud growth but gives no count. Sage group-wide claims "more than 3 million customers". | FY24 | https://www.sage.com/en-gb/-/media/files/investors/documents/pdf/annual%20report/sage-annual-report-2024.pdf | The "tens of thousands in UK" claim comes from partner TSG: https://www.tsg.com/business-apps/process/sage-200 |
| BC 50k milestone confirmation | 50,000 | 4 Nov 2025 | https://erpsoftwareblog.com/2025/11/business-central-crosses-50000-companies-what-microsofts-directions-emea-2025-announcement-means-for-the-future/ | Partner blog |

Inference: BC grew 83% in 2 years (30,000 in Nov 2023 to 55,000 in Apr 2026), and every one of those customers is a new online migration. Each migration is a moment when integrations get rebuilt, which is the entry point for Route 3. This fits the service. It does not measure demand for it.

### 2d. How B2B orders arrive (email/PDF/phone share)

| Claim | Source | Date | Independent? |
|---|---|---|---|
| Customer service reps spend 20-40% of their time on manual order handling | Conexiom blog https://conexiom.com/blog/the-real-cost-of-manual-order-entry-in-b2b-operations | 3 Jul 2025 | **No**, vendor. No source given for the claim. |
| Manual order entry error rate 1-3% ("APQC benchmarks") | same | 3 Jul 2025 | Vendor citing APQC, no link |
| EUR 25-100 cost per manually processed order; 1-4% error rate; 33% of B2B orders contained errors (Sapio Research B2B Buyer Report 2025) | Hyperfox https://www.hyperfox.com/insights/the-real-cost-of-manual-order-entry | 2025 | Vendor; the Sapio figure comes from a commissioned survey |
| 61% of B2B buyers prefer a rep-free experience (Gartner 2025); 73% willing to place orders over USD 50k through self-service (McKinsey B2B Pulse 2025) | Spree Commerce summary https://spreecommerce.org/why-b2b-buyers-switch-to-self-service-ordering/ | 24 Apr 2026 | Second-hand citations of analysts |
| **70% of all B2B sales orders are still processed manually** | Conexiom https://conexiom.com/blog/the-hidden-bottleneck-costing-b2b-companies-millions-and-how-to-fix-it | 18 Mar 2025 | **No**, vendor. Links only to its own resource page, no sample given. |
| Portals carry 30-45% of order volume, and 55-70% stays in email, phone and unstructured channels. Email is 50-70% of volume in industrial manufacturing and distribution. | Go Autonomous https://goautonomous.io/blogs/b2b-customer-self-service-order-adoption-2026-benchmark/ and https://goautonomous.io/blogs/email-order-processing-automation-how-b2b-manufacturers-handle-the-orders-they-never-talk-about/ | 20 Jul 2026; 21 Apr 2026 | **No**, vendor, no method given |
| 55% of B2B buyers use email as their main way to communicate with sellers; 75% prefer buying online once they have decided | Digital Commerce 360 with Forrester (150 buyers) https://www.digitalcommerce360.com/2023/07/11/online-only-b2b-buyers/ | 11 Jul 2023 | Yes, media and analyst. Small sample. |
| Buyers use in-person, remote and self-serve digital in roughly equal thirds; 10 channels on average; 39% will spend over USD 500k on a single self-service or remote order | McKinsey B2B Pulse 2024 (about 4,000 decision makers) https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/five-fundamental-truths-how-b2b-winners-keep-growing | 12 Sep 2024 | Yes |
| About 35% of distributors with USD 50-100M revenue offer e-commerce, and about half of those above USD 1bn; building materials at 20%. Their definition of e-commerce leaves out EDI, punchout and email/fax. | Distribution Strategy Group, 2024 State of eCommerce in Distribution (about 4,000 distributor websites) https://distributionstrategy.com/wp-content/uploads/2024/11/DSG-Report-2024-State-of-eCommerce-in-Distribution.pdf | Nov 2024 | Consultancy, not a software vendor |
| 73% of buyers prefer buying online; 85% run into barriers from outdated systems or bad data | Sana Commerce B2B Buyer Report 2025 (750 buyers) https://www.sana-commerce.com/news/b2b-buyer-report-2025/ | 2025 | **No**, vendor |
| Germany: EUR 1.3tn of B2B sales go through digital channels including EDI. Only EUR 427bn (9.7% of all B2B sales) goes through online shops and marketplaces. In wholesale, the online share is EUR 255bn, about 15% of wholesale sales. | IFH Koeln B2B-Marktmonitor (with Creditreform and Intershop) https://www.ifhkoeln.de/b2b-marktmonitor/ | 18 Sep 2023 | Research institute, co-sponsored by vendor Intershop |
| US: B2B e-commerce USD 2.93tn in 2025 (+13%). Total US manufacturing plus wholesale sales USD 15.12tn (+0.4%). | Digital Commerce 360 https://www.digitalcommerce360.com/2026/01/26/us-b2b-sales-exceed-15-trillion-2025/ | 26 Jan 2026 | Media research |

Inference from the US row: 2.93 / 15.12 = **about 19%** of US manufacturing and wholesale sales go through e-commerce (a definition that includes portals and marketplaces). That leaves roughly 80% flowing through EDI, reps, phone, email and PDF. EDI is not separated out, so this is an upper bound on the "offline" share, not the share that arrives by email.

Inference from the German row: only about 1 in 10 euros of German B2B sales goes through web shops or marketplaces, and about 15% in wholesale. The large remainder (EDI plus manual channels) is where Routes 1 and 2 operate.


Gap: I found **no independent public statistic** for the share of B2B orders that arrive by email or PDF. The "70% manual" and "50-70% email" figures come from vendors selling order automation (Conexiom, Go Autonomous) and give no method. The independent evidence (Digital Commerce 360, IFH Koeln) only shows that web shops and marketplaces carry a minority of B2B sales: about 19% in the US and about 10% in Germany. The rest is a mix of EDI and manual channels that has not been measured.

---

## 3. Job ad signals (fetched 23 Sep 2026, live counts that change daily)

| Market | Board | Search | Count | URL | Quality |
|---|---|---|---|---|---|
| UK | Reed | Sales Order Processor | **1,064** | https://www.reed.co.uk/jobs/sales-order-processor-jobs | Good, a specific title |
| UK | Reed | Order Processor | **3,303** | https://www.reed.co.uk/jobs/order-processor-jobs | Broad, includes warehouse picking |
| UK | Reed | Sales Administrator | **2,902** | https://www.reed.co.uk/jobs/sales-administrator-jobs | Broad, across all sectors |
| Germany | StepStone | Auftragssachbearbeiter | **2,089** | https://www.stepstone.de/jobs/auftragssachbearbeiter | Good, a specific title |
| Germany | StepStone | Vertriebsinnendienst | **2,111** | https://www.stepstone.de/jobs/vertriebsinnendienst | Specific. Likely an undercount of the role, since many ads use other titles. |
| Germany | StepStone | Sachbearbeiter Auftragsabwicklung | 13,853 | https://www.stepstone.de/jobs/sachbearbeiter-auftragsabwicklung | **Broad match.** 5,224 are in accounting. Only 1,375 are tagged wholesale/retail. |
| US | SimplyHired | order entry clerk | **4,088** | https://www.simplyhired.com/search?q=order+entry+clerk | Medium |
| US | SimplyHired | sales order processor | 1,391 | https://www.simplyhired.com/search?q=sales+order+processor | Medium, mixed with mortgage "processors" |
| US | SimplyHired | customer service order entry | 55,763 | https://www.simplyhired.com/search?q=customer+service+order+entry | **Very broad**, keyword OR-match, do not quote |
| UK/DE/US | Indeed, ZipRecruiter, Totaljobs | all | blocked (403, timeout) | n/a | Gap |

Inference:
- Across the three markets there are thousands of open roles at any one time whose core job is keying customer orders into an ERP. Using the specific titles only: UK about 1,000, Germany about 2,000 to 4,000, US about 4,000 on one mid-size board.
- The implied cost of one hire is well above B2Bware's likely monthly fee. That calculation needs local salary data, which I did not fetch. Gap.
- Job counts show that the manual order-entry work exists. They do not show that anyone is willing to buy a service to replace it.

---

## 4. Market growth reports

| Market | Size | Forecast | CAGR | Publisher, date | Sponsored? | URL |
|---|---|---|---|---|---|---|
| Intelligent document processing (IDP) | USD 3.17bn (2026) | USD 7.18bn (2031) | 17.78%; SMEs 19.35% | Mordor Intelligence, updated 11 Sep 2026 | Syndicated research, not vendor-sponsored. Paid-report teaser numbers. | https://www.mordorintelligence.com/industry-reports/intelligent-document-processing-market |
| IDP segment detail | Large enterprises 64.35% of 2025 revenue; North America 35.55% | | | same | | same |
| Oracle NetSuite revenue (proxy for mid-market cloud ERP) | USD 1.1bn per quarter | | +14% YoY | Oracle Q3 FY2026 via Houseblend, 11 Apr 2026 | Partner blog | https://www.houseblend.io/articles/oracle-q3-fy2026-netsuite-growth-analysis |
| iPaaS | USD 8.5bn (2024) | n/a | +23.4% in 2024 | Gartner, 21 Jul 2025 | No (Gartner). **Conflict:** Informatica, a vendor, quotes Gartner as ">USD 9bn in 2024, >USD 17bn by 2028" (https://www.informatica.com/about-us/news/news-releases/2025/05/20250522-informatica-named-a-leader-in-the-2025-gartner-magic-quadrant-for-ipaas.html, 22 May 2025) | https://www.gartner.com/en/documents/6747734 |
| iPaaS | USD 9.24bn (2026) | USD 20.93bn (2031) | 17.75% | Mordor, 11 Sep 2026 | Syndicated | https://www.mordorintelligence.com/industry-reports/integration-platform-as-a-service-market |
| iPaaS | USD 12.9bn (2025) | USD 55.5bn (2033) | 19.6% | Grand View, undated | Syndicated | https://www.grandviewresearch.com/industry-analysis/integration-platform-as-a-service-ipaas-market |
| B2B e-commerce platform **software** | USD 6.7bn (2024) to USD 14.0bn (2026), depending on source | USD 22.6bn to 40.6bn (2033-35) | 11.6% to 17.6% | Cognitive Market Research (undated); Verified Market Reports (24 May 2026); Global Growth Insights (16 Dec 2025) | Low-tier report publishers, figures conflict | https://www.cognitivemarketresearch.com/b2b-ecommerce-platform-software-market-report ; https://www.verifiedmarketreports.com/product/b2b-ecommerce-platform-software-market/ ; https://www.globalgrowthinsights.com/market-reports/b2b-ecommerce-platform-market-121868 |
| B2B e-commerce GMV, US | USD 2.93tn (2025) | | +13% YoY | Digital Commerce 360, 26 Jan 2026 | Media research | https://www.digitalcommerce360.com/2026/01/26/us-b2b-sales-exceed-15-trillion-2025/ |
| B2B e-commerce site sales, US | USD 2.297tn (2024) | USD 3.027tn (2028) | +10.5% in 2024 | eMarketer, 3 Mar 2025 | Analyst | https://www.emarketer.com/content/b2b-ecommerce-site-sales-will-gain-ground-over-next-four-years |
| B2B e-commerce GMV, global | USD 28.0tn (2026) | USD 105.9tn (2033) | 20.9% | Grand View, undated | Syndicated, very broad definition that includes EDI | https://www.grandviewresearch.com/industry-analysis/business-to-business-b2b-e-commerce-market |
| Order management software | USD 3.4bn (2023) to USD 15.6bn (2023), depending on source; multichannel OMS USD 4.68bn (2026) | USD 7.46bn (2031, Mordor) | 5.8% to 9.8% | SNS Insider (6 Feb 2025); Consainsights (25 Sep 2024); Mordor (11 Sep 2026) | Syndicated, conflicting | https://www.snsinsider.com/reports/order-management-software-market-2405 ; https://www.consainsights.com/reports/order-management-software-market ; https://www.mordorintelligence.com/industry-reports/multichannel-order-management-market |
| Order-to-cash automation | USD 3.2bn (2024) to USD 12.3bn (2025), depending on source | USD 12.8bn to 21.7bn (2034) | 6.2% to 12.8% | Intel Market Research (5 Sep 2026); Marketintelo (11 Jun 2026); Dataintelo (undated) | Low-tier, conflicting | https://www.intelmarketresearch.com/order-to-cash-automation-market-64339 ; https://marketintelo.com/report/order-to-cash-automation-market |

Caveat: syndicated "market size" numbers from Grand View, Mordor, MarketsandMarkets and similar firms use opaque methods and often disagree with each other by 2-3x. Use them only to show direction ("growing double digits"). Do not use them to size B2Bware's revenue. Grand View pages returned 403.

---

## 5. Germany e-invoicing mandate

### 5a. Rules (confirmed)

Source: Bundesfinanzministerium FAQ E-Rechnung, as of 23 Mar 2026. https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html

| Date | Obligation |
|---|---|
| 1 Jan 2025 | Every domestic business must be able to **receive** e-invoices (EN 16931, e.g. XRechnung, ZUGFeRD). A PDF by email does not count as an e-invoice. |
| 1 Jan 2025 to 31 Dec 2026 | All issuers may still send other invoice formats (paper, PDF). |
| 1 Jan 2027 to 31 Dec 2027 | Issuers with **prior-year turnover above EUR 800,000** must **issue** e-invoices for domestic B2B sales. Issuers at or below EUR 800k get one more year. Existing EDI that does not meet the standard may continue to end 2027. |
| 1 Jan 2028 | All domestic B2B issuers must issue e-invoices. |
| Exceptions | Invoices under EUR 250, Kleinunternehmer, invoices to non-businesses, certain tax-exempt supplies. |

Politics: the ZDH (Zentralverband des Deutschen Handwerks) has asked for the 2027 step to be moved to 2028 (boerse-express, 18 Jul 2026, https://www.boerse-express.com/news/articles/e-rechnung-pflicht-ab-januar-2027-fuer-unternehmen-ueber-800000-euro-929362). As of the BMF FAQ dated 23 Mar 2026 the deadline stands. Watch for any change.

### 5b. How many target firms are affected (inference with arithmetic)

The Destatis GENESIS database tables need a login, but the published statistical report below is open. Destatis headline: 3.1 million VAT filers in 2024 (preliminary returns). https://www.destatis.de/DE/Themen/Staat/Steuern/Umsatzsteuer/_inhalt.html
**Official turnover distribution** (Destatis, Statistischer Bericht Umsatzsteuerstatistik (Voranmeldungen) 2024, table 73311-01, published 9 Mar 2026): https://www.destatis.de/DE/Themen/Staat/Steuern/Umsatzsteuer/Publikationen/Downloads-Umsatzsteuern/statistischer-bericht-umsatzsteuer-2140810247005.html

| Item | Count |
|---|---|
| All VAT taxpayers (turnover above EUR 22k) | 3,131,417 |
| Turnover of EUR 1m or more (sum of classes: 205,017 + 150,050 + 58,556 + 38,352 + 14,055 + 7,695 + 5,143 + 1,835 + 942 + 825) | **482,470** |
| Turnover EUR 500k to 1m | 314,872 |
| Wholesale (WZ 46) taxpayers, all sizes | 126,171 |
| Manufacturing taxpayers, all sizes | 197,687 |

Inference: firms above the EUR 800k threshold in 2027 number **between about 482,000 and 797,000** across all sectors. The size classes do not split at 800k, so the range cannot be narrowed. There is no official published estimate.


Proxy using Eurostat 2023 turnover by size class (sbs_sc_ovw, NETTUR_MEUR, Germany):

| Segment (DE, 2023) | Firms | Net turnover (EUR m) | Average turnover per firm |
|---|---|---|---|
| Manufacturing, 10-19 staff | 25,899 | 43,434.66 | EUR 1.68m |
| Wholesale, 10-19 staff | 11,427 | 84,815.72 | EUR 7.42m |
| Wholesale, 0-9 staff | 106,322 | 129,642.60 | EUR 1.22m |
| Manufacturing, 0-9 staff | 129,166 | 46,821.08 | EUR 0.36m |

Source: https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/sbs_sc_ovw?format=JSON&geo=DE&nace_r2=C&nace_r2=G46&indic_sbs=ENT_NR&indic_sbs=NETTUR_MEUR&size_emp=0-9&size_emp=10-19&time=2023

Inference: even the smallest band in our target (10-19 staff) averages well above EUR 800k in both sectors. So **almost all of the roughly 85,700 German manufacturers and wholesalers with 10-249 staff (2024) must issue e-invoices from 1 Jan 2027**. Averages hide the spread, so a minority of small manufacturers may fall below the threshold. Every one of them must be able to receive e-invoices already. Many micro-wholesalers (0-9 staff, average EUR 1.2m) are also caught in 2027.

Why this matters for B2Bware: issuing an e-invoice means generating structured data from the ERP or billing system. That is an ERP data integration problem, so it sits next to the order-to-ERP routes. This is inference. B2Bware would need to decide whether to offer e-invoice output or just ride the attention.

### 5c. Readiness gaps (surveys)

| Finding | Survey | Sample | Fieldwork / published | URL |
|---|---|---|---|---|
| Only 45% of firms could receive e-invoices; 96-99% still receive invoices by email (mostly PDF); 55% send some e-invoices | Bitkom Research | 1,103 firms, 20+ staff | Weeks 16-23 of 2024 / published 3 Dec 2024 | https://www.bitkom.org/Presse/Presseinformation/Weniger-als-die-Haelfte-deutscher-Unternehmen-empfaengt-E-Rechnungen |
| Only 24% have fully converted their systems; 33% have never sent an e-invoice; 26% feel adequately prepared; main blocker is technical implementation (36%) | YouGov for easybill (easybill is an e-invoicing vendor) | 502 firms | published around 3 Jun 2026 | https://www.ad-hoc-news.de/wirtschaft/e-rechnung-nur-jedes-vierte-unternehmen-bereit-fuer-pflicht/69474443 |
| About 90% of firms affected, 70% have not finished the transition | Quadient / OpinionWay (Quadient is a vendor) | not stated | cited 18 Jul 2026 | https://www.boerse-express.com/news/articles/e-rechnung-pflicht-ab-januar-2027-fuer-unternehmen-ueber-800000-euro-929362 |
| 80% have taken steps (mainly receiving); 56% feel well informed; more than half plan to use external service providers | KPMG | not stated on page | undated summary | https://hub.kpmg.de/de/e-rechnung-in-deutschland |
| Structured e-invoice use among digital invoicers: 52% of firms with 20-99 staff vs 96% with 500+ | Bitkom Research | 505 firms, 20+ staff | published 12 Jun 2023 | https://www.bitkom.org/Presse/Presseinformation/E-Rechnungen-auf-Vormarsch |

Inference: three separate sources, two of them vendor-sponsored, all put **full readiness to issue e-invoices at roughly 25-30% as of mid-2026**, with 15 months to go before the 2027 deadline. They also show that smaller firms lag larger ones. KPMG's "more than half plan to use external service providers" is the most directly relevant signal that buyers are willing to pay outside help. It comes without a sample size.

---

## 6. Evidence vs inference summary by route

| Route | Hard evidence | Inference | Signal |
|---|---|---|---|
| 1. B2B portal on ERP | Buyer self-service preference (Gartner/McKinsey, second-hand). Self-serve B2B apps have 300-1,200 reviews each. | Demand exists but cheap tools serve it. The paid wedge is ERP depth (contract pricing, part codes) on Sage 200, BC and NetSuite, which the popular apps do not list. | Medium demand, high competition |
| 2. Email/PDF orders into ERP | Thousands of open order-entry roles (Reed about 1,064, StepStone about 2,089, SimplyHired about 4,088). IDP market growing 18% a year, SMEs 19%. Web shops carry only about 19% (US) and about 10% (DE) of B2B sales. | The pain is real and costs a salary. There is no independent figure for the share of orders arriving by email. | Medium-high demand, weak quantification |
| 3. Fix ERP-to-webshop connectors | BC grew 30k to 55k customers (Nov 2023 to Apr 2026). The official BC-Shopify connector is rated 2.6 stars on 28 reviews. | Migrations create integration work, and first-party connectors leave gaps. | Medium, small sample |
| DACH accelerator | Law: e-invoice issuing for firms above EUR 800k from 1 Jan 2027. About 85,700 DE target firms, nearly all above the threshold. Only 24-30% fully ready. | A time-bound reason for DACH firms to touch ERP integration in the next 15 months. | Strongest dated trigger |

## 7. Data gaps

1. **Keyword volumes:** no public source found for the exact terms (see 1a). To close it: run Google Keyword Planner or a Semrush trial for UK, DE and US. About 1 hour.
2. **Share of orders arriving by email/PDF:** only vendor figures exist. To close it: ask the 4 existing customers and 10 prospects directly, or buy the NAW or MDM distributor survey.
3. **Sage 200 install base:** no official figure. Sage does not publish it.
4. **Business Central customers by region:** not published.
5. **US job boards:** Indeed and ZipRecruiter blocked automated fetching. Indeed UK and DE also blocked.
6. **German firms above EUR 800k:** only a range is available (482k to 797k across all sectors), because the Destatis turnover classes do not split at 800k.
7. **Salary benchmarks** for order-entry staff, needed to compare against the monthly fee. Not fetched.
