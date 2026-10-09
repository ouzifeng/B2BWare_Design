# ERP-run business adding a consumer (B2C) shop: options, costs, what breaks

Research date: 8 October 2026. All URLs accessed 8 October 2026 unless stated.
Scope: a wholesaler, manufacturer or merchant already running on an ERP (Business Central/NAV, Sage, NetSuite, SAP Business One, Odoo, Exact, Acumatica, Epicor) that wants to sell to consumers online.

Source labels:
- **[Primary]** vendor documentation or official price page.
- **[Vendor marketing]** a vendor or partner selling the thing it describes.
- **[Third-party estimate]** review sites, agency blogs, price-guide sites. Treat figures as indicative only.

Prices are shown in the currency the source uses. US dollar figures are not UK prices.

---

## Summary table

| Option | Typical cost (source) | Who maintains the ERP link | Lock-in |
|---|---|---|---|
| 1. ERP vendor's own shop | Odoo: included in £18 to £32/user/month plan; NetSuite SuiteCommerce: est. $2,500 to $5,000+/month | ERP vendor | Highest: shop and ERP are one product |
| 2. WooCommerce + connector | Plugin from $60 to $250/month (BC example) plus hosting and dev | Plugin author, often a small firm | Low on platform, high on the plugin |
| 3. Shopify + connector/iPaaS | Shopify £19 to £259/month, Plus from £1,800/month; BC connector free; others €130/month and up | Microsoft (BC native) or connector vendor | Medium: hosted platform, payments fees |
| 4. Shopware / Adobe Commerce / BigCommerce + agency integration | Shopware from €600/month; BigCommerce from $29/month; Adobe est. $22k to $190k+/year; ERP integration est. £15k to £50k+ | The agency | High on the agency's custom code |
| 5. ERP-integrated commerce vendor (Sana, k-eCommerce, Dynamicweb, Epicor Commerce Connect) | k-eCommerce from $1,265/month; Sana quote only | Commerce vendor | High: built for one ERP family, mostly B2B-first |
| 6. Agency custom build | est. £50k to £200k+ for ERP-integrated builds | The agency or in-house dev | Highest on people |

---

## 1. ERP vendor's own web shop module

**Odoo eCommerce.** Website and eCommerce are included in the Standard and Custom plans ("all apps"). UK prices: Standard £18/user/month (discounted from £23 for 12 months), Custom £32/user/month (from £41). Website visitors placing eCommerce orders are "free users" and not charged. [Primary] https://www.odoo.com/pricing
- What breaks: no sync layer to break, as shop and ERP share one database. The risk moves to upgrades. Odoo supports only the last 3 major versions. [Primary] https://www.odoo.com/documentation/16.0/administration/supported_versions.html. A third-party summary reports a 25% subscription surcharge from April 2026 for versions older than three major releases. [Third-party estimate, unverified on Odoo's own page] https://www.techvaria.com/odoo-version-support-eol-timeline.html
- Lock-in: total. The shop cannot be kept if the ERP is replaced.

**NetSuite SuiteCommerce.** NetSuite does not publish prices (official product page returned 403 on fetch). Partner estimates: SuiteCommerce Standard about $2,500/month, Advanced about $5,000/month; implementation from $15,000 (Standard) and $15,000 to $65,000 (Advanced). [Third-party estimate, NetSuite partner] https://netsuite.folio3.com/blog/netsuite-suitecommerce-pricing/
- Lock-in: total, same as Odoo.

**SAP Business One.** SAP's Integration Hub supports webshop integration for Magento and Shopify. [Third-party, SAP partner blog] https://sap-b1-blog.com/en/webshop-integration-with-sap-business-one-integration-hub/. In practice B1 sites usually go through a partner add-on (see option 3).

**Acumatica Commerce Edition.** Shopify and BigCommerce connectors are built into Commerce Edition and maintained by Acumatica, "no additional software to purchase". [Vendor marketing, Acumatica partner] https://www.swktech.com/erp-resources/acumatica/ecommerce-connectors-with-bigcommerce-and-shopify/

**Epicor Commerce Connect (ECC).** Epicor's own commerce product, built on Adobe Magento, supports B2B and B2C including guest checkout. [Vendor marketing] https://www.epicor.com/en-uk/products/digital-commerce/commerce-connect/ and [Third-party] https://www.dckap.com/blog/epicor-commerce-connect/. No public price found.

**Sage and Exact.** No first-party Sage B2C storefront found for Sage 200 or X3. Exact Online points users to third-party webshop links (Shopify, WooCommerce, Magento, Shopware). [Primary] https://www.exact.com/nl/branche/handel/webwinkel-software

---

## 2. WooCommerce + ERP connector or plugin

**Cost.** WooCommerce core is free; the cost sits in hosting, theme, dev and the connector.
- Synfynal (BC to WooCommerce, on Microsoft AppSource): $60/month (0 to 50 orders and refunds), $125 (50 to 200), $175 (200 to 500), $250 (500+). Add-ons extra: customer-specific pricing $20/month, images $15/month, variations as items $20/month. Sync runs through "scheduled Business Central Job Queue Entries", not real time. [Primary, vendor price page] https://www.synfynal.com/
- New Wiz Tech BC connector: 2026 promotional rate $1,449.99 including setup and one year of sync. [Vendor marketing] https://newiztech.com/business-central-woocommerce-connector-pricing-the-ultimate-guide-to-our-2026-promotion/
- Exact: integrators sell WooCommerce to Exact Online and Exact Globe links. [Vendor marketing] https://xcore.nl/woocommerce-exact-globe-koppeling/

**Who maintains the link.** The plugin author. Often a small company, so the business depends on two separate update cycles (WordPress/WooCommerce and the ERP).

**What breaks.**
- WooCommerce platform changes break plugins. High-Performance Order Storage (HPOS) became the default for new stores from WooCommerce 8.2; plugins that read order data straight from WordPress post tables are incompatible. [Primary] https://woocommerce.com/posts/platform-update-high-performance-order-storage-for-woocommerce/. Users report integration plugins blocking HPOS. [User forum] https://woocommerce.com/feature-request/high-performance-order-storage-hpos-incompatible/
- Duplicate products: an Odoo to WooCommerce plugin changelog fixed "products created during order import not recording their Odoo product link", which left them liable to be duplicated. [Primary, plugin page] https://wordpress.org/plugins/erp7-solutions-sync-for-odoo-and-woocommerce/
- Customer pricing and variations are paid extras on at least one connector (Synfynal above).

**Lock-in.** Low on the platform (open source), high on whichever connector is chosen.

---

## 3. Shopify (and Plus) + connector or iPaaS

**Shopify cost (UK, GBP).** Basic £25/month (£19 annual), Grow £65 (£49), Advanced £344 (£259), Plus from £1,800/month. Online card rates 2% + 25p (Basic) down to 1.3% + 25p (Plus). Using a third-party payment provider adds 2% (Basic), 1%, 0.6%, 0.2% (Plus). [Primary] https://www.shopify.com/uk/pricing

**Connector cost.**
- Business Central: Microsoft's Shopify Connector is preinstalled for new sign-ups; no separate licence. [Primary] https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/get-started
- SAP Business One: Ingold Solutions €130/month (one database, one store) plus €750 installation, or €3,200 purchase plus 20% annual maintenance. Priced for B2C/D2C; "B2B functionality is not included". [Primary, vendor price page] https://ingoldsolutions.com/en/sap-business-one-shopify-integration
- Sage 200: several UK connectors and iPaaS firms (Codeless Platforms, Patchworks, Besyncly). No public prices captured. [Vendor marketing] https://www.codelessplatforms.com/solutions/shopify-sage-200-integration/ , https://www.wearepatchworks.com/products/sage-200-shopify-integration
- Acumatica: built into Commerce Edition (option 1).

**Who maintains the link.** For BC, Microsoft. For others, the connector vendor or iPaaS.

**What breaks (BC connector, from Microsoft's own docs).** These are the best-evidenced pains in this file because the ERP vendor documents them.
- Sync timing. Orders can import on notification (Auto Sync Orders via the job queue), but stock is a scheduled push; Microsoft suggests "every 15-30 minutes". [Primary] https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/synchronize-inventory and https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/synchronize-orders
- Stock accuracy when units of measure are sold as variants: "the available quantity in Shopify isn't accurate", worked example of a box selling out only on the next sync. [Primary] https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/synchronize-items
- Variants. BC has no option matrix, so where a Shopify product combines two or more options "the Shopify Connector can't create a variant for that product". [Primary] same page.
- Pricing. The connector exports one price, calculated at quantity 1: "You can't export different prices or discounts based on quantity." International: "the Shopify connector only lets you export one price". B2B catalog pricing needs Shopify Plus. [Primary] https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/synchronize-prices
- VAT. UK and EU shops show VAT-inclusive prices; BC must be set to "Prices including VAT" with the domestic VAT posting group. On import, "the tax amounts recalculate when you create the sales document", so BC VAT setup must be right. [Primary] synchronize-prices and synchronize-orders pages above.
- Consumer customers. Guest orders can be booked to a "Default Customer No." per shop or per country. [Primary] synchronize-orders page.
- Order write-back gaps. Archived Shopify orders cannot be imported; edited or cancelled orders create zero-amount refunds "that can't be converted to a credit memo". [Primary] synchronize-orders page.
- Payments. Gift cards import as payment transactions and must be reconciled via a separate transactions and payouts process. [Primary] synchronize-orders page.
- Currency. A user thread (March 2024 to January 2025) reported "all orders are imported in the Store base currency"; still unresolved for one user in January 2025. [User forum] https://community.shopify.com/t/business-central-shopify-connector-inventory-issues/305747. Microsoft's docs now describe a Presentment Currency option, so this may be fixed in current releases. [Primary] synchronize-orders page.
- Scope. One Shopify store per BC company, no on-premises BC. [Third-party, partner blog] https://erpsoftwareblog.com/2026/05/business-central-shopify-integration-limitations-has-your-business-outgrown-the-native-connector/. Note the BC docs say "Repeat steps 2-6 for all online shops", so check the one-store claim before using it.

**Lock-in.** Medium. Hosted platform, and payment provider fees push towards Shopify Payments.

---

## 4. Shopware / Adobe Commerce / BigCommerce + agency-built integration

**Platform cost.**
- Shopware: Community Edition free; Rise from €600/month; Evolve from €2,400/month; Beyond on request. Priced on GMV. [Primary] https://www.shopware.com/en/pricing/
- BigCommerce (US page, USD): Core $29/month annual, Growth $79, Scale $299, with auto-upgrade on trailing 12-month GMV. [Primary] https://www.bigcommerce.com/essentials/pricing/
- Adobe Commerce: Adobe does not publish prices. Estimates: on-premises about $22,000/year under $1M GMV up to $125,000+; cloud about $40,000 to $190,000+/year. [Third-party estimate] https://costbench.com/software/enterprise-ecommerce/adobe-commerce/

**Integration cost (UK).** ERP integrations (SAP, MS Dynamics, Sage 200) "typically cost £15,000 to £50,000+". [Third-party estimate, UK agency] https://www.visionsharp.co.uk/about-us/news/how-much-does-ecommerce-development-cost-uk/ (figure surfaced via search summary; check on page before quoting externally).

**Who maintains the link.** The agency that wrote it. Each platform or ERP upgrade becomes a paid change.

**What breaks.** Same categories as option 3, but fixed by the agency on its own timeline. A secondary source attributes to Forrester that "55% of B2B ecommerce projects cite ERP integration as the #1 cause of go-live delays". [Third-party, original Forrester report not seen] https://humcommerce.com/knowledge-center/avoid-erp-integration-failures-b2b-ecommerce/

**Lock-in.** Platform: low (Shopware, Magento Open Source) to medium. Integration: high, it lives in the agency's code.

---

## 5. ERP-integrated commerce vendors

**k-eCommerce.** Essentials $1,265/month (Business Central, NAV, GP, SAP Business One); Growth $2,080 (adds Acumatica, D365 F&O, AX); Advanced $2,475; Professional custom. Setup fee not included. Add-ons e.g. Promotions $585 one-off + $150/month. B2C supported across tiers. [Primary, vendor price page, USD] https://k-ecommerce.com/solutions/k-ecom/pricing

**Sana Commerce.** Quote only; plans named Essential, Pro, Advanced. Essential includes "open web store & guest checkout". Native to SAP and Microsoft Dynamics (BC, NAV, AX, F&SCM). [Third-party summary of Sana pages] https://www.selecthub.com/p/ecommerce-platforms/sana-commerce/ . Sana's own pricing page would not load (header error). Review sites say from about $10,000/year; treat as unverified. [Third-party estimate] https://www.capterra.com/p/139645/Sana-Commerce/

**Dynamicweb and BC-specific webshops.** Dynamicweb: B2B and B2C, PIM included, integration add-in on Microsoft Marketplace; a review site lists "$1,500 per user, per month". [Third-party estimate] https://www.capterra.com/p/132066/Dynamicweb/ . Curabis "Webshop for Business Central": headless layer managed from inside BC. [Vendor marketing] https://curabis.dk/en/apps-for-business-central/business-central-webshop/

**Who maintains the link.** The commerce vendor; this is their main selling point.

**What breaks.** Less sync drift (they read ERP data directly), but these products lead with B2B. Consumer features (promotions, email campaigns) are often paid add-ons (k-eCommerce list above).

**Lock-in.** High: tied to one ERP family. Changing ERP usually means changing shop.

---

## 6. Agency custom build

UK guides put "large/complex stores with custom platforms, ERP/CRM integrations" at £50,000 to £200,000+, and enterprise Magento at £60,000 to £250,000+. [Third-party estimate, UK agencies] https://www.visionsharp.co.uk/about-us/news/how-much-does-ecommerce-development-cost-uk/ , https://nettrackers.co.uk/blog/magento-development-cost-uk
An agency index puts mid-market replatforming at $150,000 to $300,000 all-in over 5 to 10 months, and says the licence is "only 20 to 40% of total replatforming cost", with implementation, ERP and data migration the rest. [Third-party estimate, agency] https://elogic.co/blog/replatforming-cost-index/ and https://www.williamscommerce.com/insights-ecommerce-replatforming-guide-mid-market-2026/

Who maintains the link: whoever wrote it. Lock-in: on people, not product.

---

## Decision process: who decides, and what triggers it

**Evidence gap.** No survey found that splits the decision between owner, IT, finance and operations for ERP-run SMEs adding B2C. Agency content says evaluation teams include "CTOs, VP Digital, ecommerce directors, IT managers" (enterprise framing). [Third-party, agency] https://elogic.co/blog/best-ecommerce-platform-selection-tco-consultants/ . Treat "who decides" as a question for interviews.

**Triggers with evidence:**
1. **ERP migration, especially NAV to Business Central.** NAV 2018 extended support ends January 2028; NAV 2017 January 2027. [Third-party, citing Microsoft lifecycle] https://libertygrove.com/dynamics-nav-end-of-support/ , https://www.bc4.com/blog/when-does-support-for-microsoft-dynamics-nav-end
2. **Integrations break on the move to BC online.** Web service access keys (Basic auth) are not supported in BC online; OAuth is required. [Primary] https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/webservices/web-services-authentication . A partner notes this hits "EDI, POS, eCommerce" links. [Vendor marketing, partner] https://www.encorebusiness.com/blog/how-to-enable-oauth-for-dynamics-365-business-central/ . So a NAV shop link is usually rebuilt, not carried over, which reopens the platform choice.
3. **ERP vendor bundling.** BC now ships a free Shopify connector preinstalled (above), and Acumatica bundles Shopify and BigCommerce. This steers the choice towards Shopify before any agency is involved.
4. **Platform forced changes.** WooCommerce HPOS (above) forces plugin rewrites on the shop side.

---

## What this means

The five most important pains for an ERP-run business adding a consumer shop, ranked by strength of evidence:

1. **VAT-inclusive consumer prices versus net trade prices in the ERP.** Strongest evidence: Microsoft documents the setup and that tax is recalculated in BC on import, so wrong VAT setup means wrong postings (synchronize-prices, synchronize-orders pages). Hurts most: **option 3 (Shopify + connector)**, and any option 2 or 4 build that copies prices across.
2. **Stock and sync timing.** Microsoft recommends a 15 to 30 minute stock sync and documents a case where Shopify shows stock that does not exist; a user forum thread shows wrong stock levels (55 shown, 0 held) until locations were reconfigured. Hurts most: **options 2 and 3** (scheduled connectors). Options 1 and 5 suffer least.
3. **Item master and variants do not map.** BC has no option matrix, so multi-option Shopify variants fail; units of measure have to be faked as variants; a Woo/Odoo plugin had a duplicate-product bug. Hurts most: **option 3**, then **option 2**.
4. **Order write-back and consumer customer records.** Guest orders go to a default customer, archived orders do not import, edited orders create refunds that cannot become credit memos. Hurts most: **option 3**; in **option 4/6** the same gaps exist but cost agency time to close.
5. **Integration ownership and lock-in at ERP migration.** NAV to BC breaks old web-service links, and ERP-tied shops (Odoo, NetSuite, Sana, k-eCommerce) cannot survive an ERP change. Evidence is solid on the mechanism, weak on how often it happens. Hurts most: **options 1 and 5** (shop dies with the ERP) and **options 4 and 6** (custom link must be rebuilt).

Weaker but worth testing in interviews: payment and payout reconciliation (documented as a separate process in BC, no frequency data), and multi-currency (user reports, possibly now fixed).
