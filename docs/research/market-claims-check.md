# Market claims fact-check (executive slide)

Checked: 23 Sep 2026. Official sources first, then reputable coverage.

---

## Claim 1: Microsoft Sales Order Agent (Business Central) reads emailed orders and costs about $0.13 per order

**Verdict: Partly true.** The capability is real and live. "$0.13" is a defensible figure only under specific assumptions (prepaid credit packs, Microsoft's own blended example). There is no fixed per-order price: billing is per event in Copilot Credits.

### What it does (Microsoft Learn)
- Monitors a designated shared mailbox, analyses email body and PDF/image attachments, matches the customer by sender email, finds items, checks availability (optionally capable-to-promise), creates a sales quote, then converts to a sales order (can be configured to go straight to order without sending the quote).
- Always creates a quote first. A Business Central user must review and approve all outgoing emails (human in the loop).

### Pricing mechanism (Microsoft Learn, consumption billing page, updated Jul 2026)
Billed in Copilot Credits via Copilot Studio "Generative answer" and "Agent action" events:

| Step | Event | Credits |
|---|---|---|
| Analyze incoming email | Generative answer | 2 |
| Attachment, no sales data (per attachment) | Generative answer | 2 |
| Attachment, sales data detected (per attachment) | Agent action | 5 |
| Check item availability | Agent action | 5 |
| Create or update sales quote | Agent action | 5 |
| Create or update sales order | Agent action | 5 |
| Generate response email | Generative answer | 2 |

Microsoft's "typical flow": 2 + 5 + 5 + 2 = 14 credits. Microsoft's worked example assumes 50% of emails carry a PDF PO: (2+5+5+2+5x0.5) x 100 = 1,650 credits per 100 requests, i.e. 16.5 credits per request.

Credit price: prepaid Copilot Credit pack is $200/month for 25,000 credits ($0.008/credit, microsoft.com pricing page). Pay-as-you-go is widely reported at $0.01/credit (Azure PAYG page renders price dynamically; figure confirmed by multiple partner sources). Break-even: packs cheaper above 20,000 credits/month.

### Per-order arithmetic
| Scenario | Credits | PAYG ($0.01) | Pack ($0.008) |
|---|---|---|---|
| Plain email, one pass | 14 | $0.14 | $0.112 |
| Microsoft blended example (50% with PDF) | 16.5 | $0.165 | $0.132 |
| Email with PDF PO | 19 | $0.19 | $0.152 |
| Quote, then customer confirms by email, then order (estimate: second pass = analyze 2 + create order 5 + reply 2 = 9) | 23 to 28 | $0.23 to $0.28 | $0.18 to $0.22 |

Plus: needs Business Central online licences, and a pack commitment ($200/month) or PAYG Azure setup via a partner. Clarification loops add further credits.

### Slide wording
"Microsoft's Sales Order Agent in Business Central turns emailed orders (including PDF POs) into BC quotes and orders, billed on usage: roughly $0.11 to $0.19 per order in Copilot Credits (about $0.13 on Microsoft's own example at prepaid rates)."

### Sources
- https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/administration/tenant-admin-center-manage-consumption-billing
- https://learn.microsoft.com/en-us/dynamics365/business-central/sales-order-agent
- https://www.microsoft.com/en-us/microsoft-365-copilot/pricing/copilot-studio
- https://azure.microsoft.com/en-us/pricing/details/copilot-studio/
- https://erpsoftwareblog.com/2026/09/what-does-it-cost-to-run-ai-agents-in-business-central/
- https://msdynamicsworld.com/blog-post/business-centrals-ai-agents-run-consumption-billing-heres-what-means-your-2027-budget

---

## Claim 2: Shopify B2B available on all plans from April 2026

**Verdict: True (with limits).** Shopify Changelog, 2 April 2026: "Key B2B features now available on non-Plus plans", at no additional cost.

### Features by plan (Shopify Help Center "B2B features by plan")
| Feature | Basic / Grow / Advanced | Plus |
|---|---|---|
| Companies, company locations, location permissions | Yes | Yes |
| B2B catalogs (price lists) | Up to 3, assigned via Markets | Unlimited |
| Direct catalog assignment to companies/locations (customer-specific pricing) | No | Yes |
| Quantity rules, volume price breaks | Yes | Yes |
| Net payment terms, payment reminders, vaulted cards, ACH (US) | Yes | Yes |
| Deposits, partial payments, payment requests per fulfilment | No | Yes |
| Contextual checkout via Markets | Advanced only | Yes |
| Draft orders, reorder, PO numbers, quick order list, Trade theme, Flow with B2B objects | Yes | Yes |

### Slide wording
"Since April 2026 Shopify includes native B2B (company profiles, net payment terms, volume pricing, up to 3 B2B catalogs) on every plan at no extra cost; unlimited, customer-specific catalogs and deposits remain Plus-only."

### Sources
- https://changelog.shopify.com/posts/key-b2b-features-now-available-on-non-plus-plans
- https://help.shopify.com/en/manual/b2b/getting-started/plan-features
- https://www.pymnts.com/news/b2b-payments/2026/shopify-expands-availability-of-b2b-tools-to-all-merchants/

---

## Claim 3: Microsoft's Shopify connector for Business Central is free

**Verdict: True (in effect).** Microsoft Learn does not print the word "free", but states the connector is preinstalled in new BC online environments (Marketplace install for existing ones), requires only a Business Central licence and a Shopify licence, and is open source in Microsoft's BCApps repo. Partner coverage consistently states no additional fee. Online only, not on-premises.

### What it covers (Microsoft Learn overview)
- Multiple shops; bidirectional item/product sync (variants, images, barcodes, metafields, translations).
- Prices from customer price groups and discounts; "Define prices and discounts for product catalogs linked to B2B companies and markets."
- Inventory sync across locations.
- Bidirectional sync of customers and B2B companies (smart-map by tax/registration number; sell-to/bill-to per company location).
- Order import including B2B orders, payment terms, PO numbers; payouts; fulfilment/tracking; export of posted sales invoices.
- Scope caveat: it syncs to what Shopify supports, so non-Plus shops are capped at 3 catalogs and cannot assign catalogs directly to companies.

### Slide wording
"Microsoft's own Shopify Connector ships with Business Central online at no extra licence cost and syncs products, prices, stock, customers, B2B companies, B2B catalog pricing and orders."

### Sources
- https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/shopify-connector-overview
- https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/shopify-faq
- https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/synchronize-prices
- https://learn.microsoft.com/en-us/dynamics365/release-plan/2024wave1/smb/dynamics365-business-central/connect-business-central-shopify-b2b
- https://topdynamicspartners.com/learn/business-central/shopify-integration

---

## Claim 4: Germany e-invoicing timeline

**Verdict: True, with wording precision needed.** Per BMF FAQ (Wachstumschancengesetz, section 14 UStG):
- 1 Jan 2025: all domestic businesses must be able to receive e-invoices (no transition). An email inbox suffices.
- 2025 and 2026: paper or non-EN 16931 formats (e.g. plain PDF) still allowed, with recipient consent.
- 2027: businesses with prior-year (2026) total turnover of EUR 800,000 or less may continue using other formats until end 2027. So issuing is mandatory in 2027 for those above EUR 800,000. Also, existing EDI formats that do not meet EN 16931 remain allowed until end 2027 for everyone.
- 1 Jan 2028: structured e-invoices (EN 16931, e.g. XRechnung, ZUGFeRD) mandatory for all domestic B2B invoices.
- Scope: domestic B2B only. Exempt: small invoices up to EUR 250 gross, travel tickets, B2C.

### Slide wording
"Germany: all businesses must accept e-invoices since 1 Jan 2025; issuing structured e-invoices (XRechnung/ZUGFeRD) for domestic B2B becomes mandatory from 1 Jan 2027 for firms with prior-year turnover above EUR 800,000 and for all firms from 1 Jan 2028."

### Sources
- https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html
- https://www.bakertilly.de/beitrag/e-rechnung-zweites-bmf-schreiben-sorgt-fuer-mehr-klarheit
- https://sovos.com/vat/tax-rules/e-invoicing-germany/
- https://edicomgroup.com/blog/germany-b2b-electronic-invoice

---

## Other commoditising tools (as of Sep 2026)

### (a) Email order capture into ERPs
| Vendor | Native? | Notes |
|---|---|---|
| Microsoft Business Central | Yes, native (Sales Order Agent) | Usage-billed, see Claim 1. Also Payables Agent (50 credits/invoice + 5/line). |
| SAP (S/4HANA, cloud) | Yes, via Joule / SAP Business AI | Unstructured email/PDF to sales order in S/4HANA Cloud. SAP Business One has no embedded AI assistant; AI arrives via Business AI Platform/Joule agents over time. |
| NetSuite | Partial | Native AI is strong on AP (Bill Capture); email PO to sales order is mostly via SuiteApps/partners (e.g. Anchor Group, SuiteWorks). Could not verify a native NetSuite sales-order email agent. |
| Sage (X3, 200, Intacct) | No native equivalent found | Sage Copilot exists but no verified native email-to-sales-order agent; third-party tools fill the gap. |
| Third-party (cross-ERP) | Yes | Many AI order-entry vendors (e.g. b2sell, Conexiom-style tools) targeting P21, SAP B1, NetSuite, Sage. Category is crowded. |

### (b) B2B portals
| Vendor | Price signal | Notes |
|---|---|---|
| Shopify | Included on all plans since Apr 2026 | Limits below Plus (3 catalogs, no direct company catalogs). |
| BigCommerce | B2B Edition only on top tier (Enterprise, renamed "Performance" Jun 2026), custom pricing | Not commoditised; add-on reported from about $6,000/yr on top of Enterprise. |
| NetSuite SuiteCommerce | About $2,499/mo (Standard), $4,999/mo (Advanced), partner-reported | Expensive; not commoditised. |
| Sage | No native B2B portal found | Relies on third parties (commercebuild, Modulus 365, Codeless Platforms). |

Takeaway: the commoditisation pressure is concentrated in the Microsoft BC plus Shopify stack (native agent, free connector, B2B on every Shopify plan). NetSuite, Sage and BigCommerce still leave paid gaps.

### Sources
- https://news.sap.com/2026/04/sap-business-ai-release-highlights-q1-2026/
- https://tekroi.com/guides/ai-in-sap-business-one/
- https://www.anchorgroup.tech/products/netsuite-sales-order-automation-app
- https://www.brokenrubik.com/blog/netsuite-b2b-portal-options-guide
- https://netsuite.folio3.com/blog/netsuite-suitecommerce-pricing/
- https://www.bigcommerce.com/apps/b2b-edition/
- https://elogic.co/blog/bigcommerce-pricing/
- https://commercebuild.com/solutions/b2b-customer-portal/
- https://www.modulus365.com/b2b-ordering-portal-for-wholesalers-distributors-using-sage-200/

## Caveats
- Copilot Credit PAYG rate ($0.01) is from partner/press sources; the Azure page renders the price dynamically. Pack price ($200 / 25,000) is on microsoft.com.
- Quote-to-order second-pass cost is my estimate from Microsoft's per-event table, not a Microsoft figure.
- NetSuite, Sage and BigCommerce figures are partner-reported, not official list prices.
