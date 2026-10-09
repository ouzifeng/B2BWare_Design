# Real vendor prices for the WooCommerce plugin stack (UK store)

Research date: 2026-09-25. This file follows on from `woo-plugin-stack.md` in this folder. That file listed, per category, the free WordPress.org plugin a typical UK physical-goods store adds plus alternatives. This file prices the PAID/PRO upgrade of each of those free plugins, fetched directly from each vendor's own site (not from WordPress.org, not from search snippets, not invented), on 2026-09-25.

## Methodology and honesty notes (read first)

- Every plugin below was researched by first opening its WordPress.org page (`wordpress.org/plugins/<slug>/`) to find the vendor's own website, then fetching that vendor's own pricing page directly. Where a vendor's page blocked automated fetching outright (returned HTTP 403 or empty content on every attempt), that is stated plainly and no price is invented.
- Currency is kept exactly as the vendor's page showed it (USD, GBP or EUR). Nothing has been converted or combined across currencies.
- "VAT included" is stated only where the vendor's own page said so one way or the other. Most US-based vendors show a bare USD figure with no tax note; several explicitly say tax/VAT is calculated separately at checkout. This is noted per plugin.
- Every plugin gets a plain label: **Free** (no paid tier exists or found), **Freemium** (a genuinely usable free tier exists on WordPress.org, with a separate paid upgrade), or **Paid-only** (no permanent free tier, only a trial).
- The "is free enough" verdict is based on the vendor's *own* words about what the free tier lacks, quoted directly where such text could be found. Where no such text could be found, that is stated rather than invented or paraphrased as if it were a quote.
- Two pricing pages could not be resolved despite repeated attempts: **Wordfence Premium** (wordfence.com blocked every WebFetch attempt, and this session's WebSearch quota was exhausted before a workaround could be tried) and, to a lesser extent, some site-count ambiguity on a couple of others, flagged inline.
- Three of the source file's 27 categories were not named in the task's plugin list and were not independently re-researched today: **shipping labels/carriers** (category 3, the source file itself found no dominant paid product), **subscriptions** (category 9) and **pre-orders** (part of category 10, separate from Back In Stock Notifier which is covered). Where I reference a price for those, it is carried over from `woo-plugin-stack.md`'s own citation (which was itself fetched from woocommerce.com, the vendor, on 2026-09-25), not re-verified by me today. This is flagged at each mention.

---

## Detailed findings, by category

### 1. Shipment tracking - Advanced Shipment Tracking (AST) for WooCommerce
- WordPress.org slug: `woo-advanced-shipment-tracking`. Vendor: Zorem.
- **Label: Freemium.** The free plugin "handles basic tracking and customer emails."
- Paid tier (AST PRO), 1 site: **$129/year** (USD), 1-year or 2-year terms (2-year saves 20%). Renewal quote from the vendor's own FAQ: "Your licence renews at the same price you paid, we never raise it at renewal. The 1 year plan is $129 and renews at $129 a year." VAT/tax not stated on the page.
- What free lacks (Pro-only features, from the vendor's comparison table): fulfillment dashboard, PayPal tracking sync, item-level tracking, custom order statuses, FTP/SFTP import, bulk CSV import, bulk paste raw, branded email templates, auto-detect carrier, partial fulfillment, priority support.
- Verdict: free covers the core job (tracking numbers plus emails) for most stores; paid is for high order volume and automation, not a hard requirement.
- Source: https://www.zorem.com/product/woocommerce-advanced-shipment-tracking/, fetched 2026-09-25.

### 2. Custom/"Shipped" order status - Custom Order Status Manager for WooCommerce
- WordPress.org slug: `bp-custom-order-status-for-woocommerce`. Vendor: BrightPlugins.
- **Label: Freemium.**
- Paid tier (Starter), 1 site: **$39.00/year** (USD), **VAT included** (the page's own structured pricing data explicitly flags `valueAddedTaxIncluded: true`). Other tiers on the same page: 5-site "Business" $79.00/year, "Agency" tier $189.00/year (site count for Agency inferred from adjacent page text, not an explicit labeled row). Renewal price not separately stated.
- Vendor's own quote on what free lacks: "Compare the core manual workflow features available in the Free version with the time-based automation, stock control, and reporting capabilities included in Pro." Premium adds: status colors/icons, email notifications per status, time-based automation, stock control tied to status, advanced pipeline/reporting options, priority support.
- Verdict: free already delivers the actual job (a custom "Shipped" status), so it is enough for most stores. Paid is for automation, stock control and reporting on top.
- Source: the vendor's live page (`brightplugins.com/product/custom-order-status-manager-for-woocommerce/`) returned HTTP 403 to every direct fetch attempt (bot-blocked); pricing was confirmed via an archived snapshot dated 2026-06-08 (`web.archive.org/web/20260608020946/https://brightplugins.com/product/custom-order-status-manager-for-woocommerce/`), so this is roughly 3.5 months old relative to this report's research date and should be spot-checked before final use, fetched 2026-09-25.

### 3. Shipping labels/carriers (Royal Mail, DPD, Evri, Parcelforce)
- Not independently priced today. `woo-plugin-stack.md` itself found no dominant paid product in this category (only small, thinly reviewed niche plugins, 400 to 1,000 installs) and priced nothing. No new figure to add.

### 4. Table rate shipping - Flexible Shipping (Weight Based Shipping Table Rate for WooCommerce)
- WordPress.org slug: `flexible-shipping`. Vendor: Octolize.
- **Label: Freemium** (this is already the dominant free plugin in its category per the source file: 100,000 installs, 98/100).
- Paid tier (Flexible Shipping PRO), 1 site: **£75.00/year** (GBP, confirmed directly in the page's own add-to-cart pricing selector: "1 site, £75.00"). Multi-site volume pricing on the same selector: 2 sites £120.00 (save 20%), 3 sites £168.75 (save 25%), 5 sites £243.75 (save 35%), 10 sites £300.00 (save 60%). Renewal quote from the vendor: "when you choose to renew after 12 months, it's always at the same price you originally paid," so renewal is also £75.00/year. VAT/tax not explicitly stated. **Caveat:** the page's own schema.org structured data separately lists a USD list price of $99.00 with a `priceValidUntil` date of 2026-10-25, suggesting the GBP £75 figure (and/or the $99 figure) may be a time-limited offer rather than a fixed standing price; the displayed currency may also depend on visitor geolocation.
- What free lacks: the page does not give a direct comparison sentence for its own free tier; it instead contrasts PRO with WooCommerce's *built-in* shipping (flat rate, free shipping, local pickup only). PRO adds "19 cost calculation conditions," AI assistance, premium support and a debug mode, on top of the already-substantial free table-rate feature set.
- Verdict: free is genuinely enough for most stores in this category, which is exactly why it has 705 five-star-weighted ratings as a free plugin.
- Source: https://octolize.com/product/flexible-shipping-pro-woocommerce/, fetched 2026-09-25.

### 5. PDF invoices and packing slips - PDF Invoices & Packing Slips for WooCommerce (WP Overnight)
- WordPress.org slug: `woocommerce-pdf-invoices-packing-slips`. Vendor: WP Overnight.
- **Label: Freemium.**
- Paid tier (Professional), 1 site: **EUR 69.00/year**, billed yearly, cancel anytime. The page states "local taxes may apply," so VAT is not included in the quoted price.
- Vendor's own quote on what free lacks: "This extension supercharges our free WooCommerce PDF Invoices & Packing Slips plugin with the following features:" - credit notes, proforma invoices/receipts, custom document numbering and filenames, bulk export with cloud storage, and multilingual (WPML/Polylang) support.
- Verdict: free handles basic invoices and packing slips, enough for most stores; paid becomes worth it mainly for credit notes/proforma invoices (VAT-relevant for refunds) or multi-language stores.
- Source: https://wpovernight.com/downloads/woocommerce-pdf-invoices-packing-slips-professional/, fetched 2026-09-25.

### 6. UK/EU VAT - EU/UK VAT Validation Manager for WooCommerce
- WordPress.org slug: `eu-vat-for-woocommerce`. Vendor: WP Factory.
- **Label: Freemium.**
- Paid tier, 1 site: **$59.99/year** (USD, annual plan). A $199 one-time lifetime plan also exists and explicitly states "Unlimited sites," implying the annual $59.99 plan is narrower, though the exact site count for the annual tier was not clearly stated on the page. VAT/tax not mentioned on the page.
- What free lacks: no verbatim quote could be confirmed on a stricter re-check of the page; earlier text summarising OSS reporting and UK post-Brexit handling could not be reproduced verbatim, so it is not reported as a quote.
- Verdict: no confirmed vendor evidence of a hard gap in free, so treated as free-reasonable by default for a single-market UK store, absent stronger evidence.
- Source: https://wpfactory.com/item/eu-vat-for-woocommerce/, fetched 2026-09-25.

### 7. EAN/GTIN/MPN and Google Shopping feed - CTX Feed Pro and Product Feed PRO
**CTX Feed (Product Feed Manager for WooCommerce)**
- WordPress.org slug: `webappick-product-feed-for-woocommerce`. Vendor: WebAppick.
- **Label: Freemium.**
- Paid tier, 1 site: **$119/year** ("Single Site" annual license, page text: "$119 /Year"). VAT/tax not mentioned. A lifetime single-site option around $599 (discounted from $749) was also seen but not independently re-confirmed, so treat as lower confidence.
- What free lacks: no explicit comparison sentence found on the pricing page.
- Source: https://webappick.com/plugin/woocommerce-product-feed-pro/, fetched 2026-09-25.

**Product Feed PRO for WooCommerce (AdTribes)**
- WordPress.org slug: `woo-product-feed-pro`. Vendor: AdTribes (paid upgrade is branded "Elite," not literally "Pro," though it's the upgrade path the free plugin links to).
- **Label: Freemium.**
- Paid tier, 1 site: **$99.50/year** ("Growth" plan, stated as an introductory 50%-off price; normal price shown as $199/year, not confirmed whether that is the actual renewal rate or just a marketing reference figure). VAT/tax not mentioned.
- What free lacks (paraphrased, since the vendor's own sentence contained a dash character this report avoids): the Feed Validator Tool, Feed Translation Addon and Multi-Currency Addon are gated out of the entry Growth plan and only come bundled with the higher Plus ($179.50/yr, 3 sites) and Business ($249.50/yr, unlimited sites) tiers.
- Verdict for both: free covers core feed generation (the actual Google Shopping visibility job); paid is for validators, translation, and multi-currency output, situational rather than universal.
- Source: https://adtribes.io/pricing/, fetched 2026-09-25.

### 8. Bundles, add-ons, variation swatches
**WPC Product Bundles for WooCommerce**
- WordPress.org slug: `woo-product-bundle`. Vendor: WPClever.
- **Label: Freemium.** Free already bundles unlimited simple and subscription products.
- Paid tier, 1 site: **$29.00 one-time** (Single Site license, lifetime updates, 1 year of premium support, 7-day money-back guarantee). Up to 5 Sites $59.00; Unlimited Sites $99.00. VAT/tax not stated.
- What free lacks: no clean verbatim quote found; the vendor's page marks "Add a variable product or a specific variation to a bundle" as Premium-only (paraphrased from the page layout, not a captured sentence).
- Source: https://wpclever.net/downloads/product-bundles/, fetched 2026-09-25.

**Product Addons for WooCommerce (Acowebs)**
- WordPress.org slug: `woo-custom-product-addons`. Vendor: Acowebs.
- **Label: Freemium.**
- Paid tier, 1 site: **$49.00/year** (Single Site, 1 Year Updates). Single Site Lifetime $119.00; 5-site tiers also exist. VAT/tax not stated.
- What free lacks: no single clean verbatim sentence; Pro-only field types named individually on the page: file upload, multi-select, custom price formulas, tooltips, Google Map picker, time picker, conditional logic by variation, CSV import/export.
- Source: https://acowebs.com/woo-custom-product-addons/, fetched 2026-09-25.

**Variation Swatches for WooCommerce**
- WordPress.org slug: `woo-variation-swatches`. Vendor: GetWooPlugins.
- **Label: Freemium** (dominant free plugin in category, 300,000 installs, 96/100 per the source file).
- Paid tier, 1 site: **$49.00/year** (Starter, Single Domain/Site). Business $149/year (5 domains); Developer $299/year (unlimited). VAT/tax not stated.
- What free lacks: no explicit vendor comparison sentence found. Premium adds auto-converting dropdowns into image swatches, radio-button swatches, swatches on archive/category pages, and unlimited out-of-stock handling.
- Verdict for all three: free is enough for most stores (bundles of simple products, basic add-on fields, basic swatches); paid is situational depending on catalogue complexity.
- Source: https://getwooplugins.com/plugins/woocommerce-variation-swatches/, fetched 2026-09-25.

### 9. Subscriptions
- Not independently re-researched today. Carried over from `woo-plugin-stack.md`'s own (vendor-fetched) figures: official WooCommerce Subscriptions £209/yr (£334.40 for 2 years), or the free "Subscriptions for WooCommerce" (90/100 rating), marketed by a third party as a free alternative. No fresh price confirmed by me today.

### 10. Back In Stock alerts (and pre-orders, situational)
**Back In Stock Notifier for WooCommerce**
- WordPress.org slug: `back-in-stock-notifier-for-woocommerce`. Vendor: ProPluginsLab (confirmed from the wp.org author field, not Tyche Softwares as first guessed).
- **Label: Freemium.** The core back-in-stock email notification works standalone in the free version.
- Paid tier: sold as individual add-ons at **$19.00 one-time each**, or a bundle of all 26 add-ons **"From $49.00" one-time** (the "From" wording suggests the bundle may itself be tiered by site count, not fully confirmed). VAT/tax not mentioned.
- Vendor's own quote: "All 26 Back In Stock Notifier add-ons in one plugin, switched on and off individually, for one price and one licence key."
- What the add-ons cover: integrations (Mailchimp, Klaviyo, ActiveCampaign, Brevo), SMS via Twilio, analytics, CSV import/export, double opt-in - none of which are needed for the core job (notify customers a product is back).
- Source: https://propluginslab.io/product-category/back-in-stock-notifier/, fetched 2026-09-25.

**Pre-orders**: not independently re-researched today. Carried over from `woo-plugin-stack.md`: official WooCommerce Pre-Orders £134/yr (rated worse, 2.9/5, than the free alternative), or free "Pre-Orders for WooCommerce" (90/100).

### 11. Abandoned cart / email marketing - Cart Abandonment Recovery
- WordPress.org slug: `woo-cart-abandonment-recovery`. Vendor: Brainstorm Force, sold under the CartFlows brand (**correction to the task brief's assumption of Tyche Softwares**, which sells a different, separately-named plugin, see below).
- **Label: Freemium.** Free provides unlimited follow-up recovery emails, the core function of this category.
- Paid tier, 1 site (covers up to 10 sites on this tier, no single-site-only tier found): **$99/year** (list price $129/year, shown discounted). Lifetime option $299 one-time (list $399, 30 sites). VAT/tax not stated.
- What free lacks: a "Free vs Pro" comparison page exists on the vendor's site but its content did not render cleanly enough to quote reliably; not reported as a quote. Pro is understood to add SMS/WhatsApp follow-ups, a smart rule engine, advanced coupon settings and premium support.
- Note: a similarly-purposed but separately-named plugin, "Abandoned Cart Pro for WooCommerce" by Tyche Softwares (a different WordPress.org listing, not the one in the source file), prices its single-store Starter tier at $119.00/yr (discounted to $95.20 first year, renews $119/yr). If that plugin, rather than CartFlows' Cart Abandonment Recovery, is the one meant, use these figures instead. Source: https://www.tychesoftwares.com/products/woocommerce-abandoned-cart-pro-plugin/, fetched 2026-09-25.
- Verdict: free already delivers the core recovery mechanism (email); paid is for SMS/WhatsApp and advanced targeting, situational.
- Source: https://cartflows.com/cart-abandonment/, fetched 2026-09-25.

### 12. Reviews - Customer Reviews for WooCommerce (CusRev)
- WordPress.org slug: `customer-reviews-woocommerce`. Vendor: CusRev.
- **Label: Freemium.**
- Paid tier (Professional), 1 site (license "valid for one domain only"): **$59.99/year**, or $7.99/month. Tax/VAT is added separately at checkout; the vendor's page notes EU/UK businesses can enter a VAT number for exemption, implying VAT is otherwise charged on top.
- Vendor's own quote: "Remove our branding and get more customization features with the Pro version," listing custom "From" address, custom logo, custom email footer, ad removal, advanced email templates and advanced review forms. The page's own side-by-side comparison table, by contrast, shows nearly identical checkmarks for both tiers, so the upgrade is mostly cosmetic/branding rather than a functional gap.
- Verdict: free is enough for the actual job (collecting and displaying reviews); paid is de-branding and polish.
- Source: https://www.cusrev.com/business/pricing.html, fetched 2026-09-25.

### 13. Analytics and profit reporting - Cost of Goods and Metorik
**Cost of Goods: Product Cost & Profit Calculator for WooCommerce**
- WordPress.org slug: `cost-of-goods-for-woocommerce`. Vendor: WP Factory.
- **Label: Freemium.**
- Paid tier, 1 site: **$59.99/year** (auto-renewing subscription, cancel anytime), or $199 one-time lifetime (unlimited sites). VAT/tax not stated.
- Vendor's own quote: "The free version is on WordPress.org and covers basic per-product costs. The Pro version adds variations, archives, multi-currency, refund handling, shipping costs, and CSV import."
- Verdict: **this is a genuine gap for a growing UK store.** The source file's own target profile explicitly assumes a store that "uses variable products." A store that uses variable products cannot get accurate per-variation cost of goods sold, and therefore accurate profit reporting, on the free tier, per the vendor's own words.
- Source: https://wpfactory.com/item/cost-of-goods-for-woocommerce/, fetched 2026-09-25.

**Metorik** (external SaaS, not a WordPress.org plugin)
- **Label: Paid-only** (subscription SaaS with a 30-day free trial; no permanent free tier).
- Vendor's own quote: "You can fully test out Metorik and all the features on our 30-day free trial without adding a credit card or paying a thing."
- Cheapest suitable plan: **Starter, $25 USD/month**, for stores averaging 0-100 orders/month; price scales up with order volume beyond that (next tier around $75/mo, up to $2,950/mo for very high-volume stores). One fetch showed "(inc. GST)" near the price, GST being Australian tax terminology (Metorik is Australia-based); how, or whether, UK VAT applies to a UK customer is unconfirmed.
- Verdict: optional upgrade on top of WooCommerce's own built-in Analytics (which already covers most reporting per the source file); not counted as a baseline necessity, since it duplicates rather than fills a hard gap, aside from the COGS/profit point above which the standalone Cost of Goods plugin already addresses more cheaply.
- Source: https://metorik.com/pricing/, fetched 2026-09-25.

### 14. Stock sync with Amazon/eBay/Etsy - LitCommerce
- WordPress.org slug: `litcommerce`. Vendor: LitCommerce.
- **Label: Paid-only** for the multichannel listing/selling function itself (only a 7-day free trial, no permanent free plan for that function).
- Vendor's own quote: "We offer a 7-day free trial with no upfront charges. You can cancel anytime during the trial, and you won't be billed." And: "Once you cancel, your subscription stops immediately, and you won't be able to access premium features."
- Cheapest plan: **Pay As You Go, from $29/month**, covering up to 1,000 listings and unlimited orders across a minimum of 3 channels. VAT/tax not stated.
- Note: LitCommerce also sells a separate "Product Feed Management Tool" product that does have a genuine free plan, but that is a different tool from the multichannel selling product this category is about.
- Verdict: situational, only relevant to stores selling on Amazon/eBay/Etsy/similar; not part of the free-reasonable baseline since no free tier exists for the core function.
- Source: https://litcommerce.com/pricing/, fetched 2026-09-25.

### 15. Accounting sync (Xero, QuickBooks) - MyWorks Sync
- WordPress.org slugs: `myworks-woo-sync-for-quickbooks-online` and `myworks-sync-for-xero`. Vendor: MyWorks.
- **Label: Freemium.**
- Vendor's own quote (from the plugin's own WordPress.org listing; the vendor's dedicated pricing page at myworks.software/pricing/ renders its table via JavaScript and could not be read directly through WebFetch, so this is a slightly lower-confidence source than a directly-rendered pricing page): "Even better! We have a completely free Launch plan you can use to get up and syncing right away. As your order volume / functionality needs grow, you can change to our paid plans at any time."
- Cheapest paid tier, 1 store: **QuickBooks Online: "Rise," $19/month billed annually (effectively $228/year).** Higher tiers: Grow $45/mo, Scale $79/mo, Soar $99/mo. **Xero: "Rise," also $19/month billed annually.** Grow $39/mo, Scale $69/mo (no Soar tier found for Xero). VAT/tax not stated.
- Verdict: **counted as genuinely needed.** The vendor's own words frame the free plan as a starting point, not a scaling solution, and accounting sync is close to a practical necessity for UK bookkeeping/VAT once a store has real order volume, a point the source file itself flagged as a likely real-world cost gap.
- Source: https://wordpress.org/plugins/myworks-woo-sync-for-quickbooks-online/ and https://wordpress.org/plugins/myworks-sync-for-xero/, fetched 2026-09-25.

### 16. Multi-currency - FOX Currency Switcher Professional
- WordPress.org slug: `woocommerce-currency-switcher`. Vendor: RealMag777 (pluginus.net), site currency-switcher.com.
- **Label: Freemium.**
- Paid tier, 1 site: **Professional 1, $49/year.** A one-time Lifetime option also exists at $99 (1 site, includes 1 year of support). Professional 10 (10 sites) $149/year; Professional 1000 $349/year. VAT/tax not stated.
- Vendor's own quote on what free lacks: "Unlimited count of currencies (in the free version 2 currencies available)."
- Verdict: a UK store just needing GBP plus one other currency (e.g. EUR) may fit inside the free 2-currency cap; anything beyond that needs paid. Multi-currency itself remains situational (the source file treats it as such), not a baseline need for a UK-focused store.
- Source: https://currency-switcher.com/downloads, fetched 2026-09-25.

### 17. B2B/wholesale pricing - B2BKing and Wholesale Suite
**B2BKing**
- WordPress.org slug: `b2bking-wholesale-for-woocommerce`. Vendor confirmed as WebWizards, sold via kingsplugins.com / b2bkingplugin.com (**correction to the task brief's assumption of WPFactory**, which appears unrelated to this plugin).
- **Label: Freemium.**
- Paid tier, 1 site: **Startup plan, $199/year**, explicitly flagged on the vendor's page as a limited-time 30% promotional discount; the regular/renewal price was stated inconsistently across the vendor's own pages, as either $299/year or $299.50/year, so treat the renewal figure as unconfirmed.
- What free lacks: no explicit comparative sentence found; the vendor's page simply lists "Free Plugin: Key Features" and "B2BKing Premium Features" as two separate blocks.
- Source: https://kingsplugins.com/woocommerce-wholesale/b2bking/pricing/, fetched 2026-09-25.

**Wholesale Suite (WooCommerce Wholesale Prices)**
- WordPress.org slug: `woocommerce-wholesale-prices`. Vendor: Wholesale Suite.
- **Label: Freemium.**
- Paid tier, 1 site: **the vendor's own two pages disagree and this could not be reconciled.** The dedicated pricing page's structured data states $49.50/year; the plugin's own marketing page states "$99/year, marked down from $198." Both are reported as-is rather than picking one arbitrarily; a manual check at checkout is needed before using either figure. A bundle of all 5 Wholesale Suite plugins is separately priced at $299/year (down from $598).
- Vendor's own quote on what free lacks: "Premium add-on for this wholesale plugin with advanced product visibility, category & global % based pricing, quantity based pricing, tax controls, shipping & payment gateway restrictions for wholesale, minimum order amounts, multiple wholesale user role tiers, and loads more."
- Verdict for both: situational, only relevant if the store actually runs a wholesale/B2B channel, consistent with the source file's own framing.
- Source: https://wholesalesuiteplugin.com/pricing/ and https://wholesalesuiteplugin.com/woocommerce-wholesale-prices/, fetched 2026-09-25.

### 18. Order export - Advanced Order Export For WooCommerce
- WordPress.org slug: `woo-order-export-lite`. Vendor: AlgolPlus.
- **Label: Freemium** (dominant free plugin in category per the source file: 100,000 installs, 100/100).
- Paid tier (Pro), 1 site: **$30.00/year** (1 website, 1 year of updates, confirmed verbatim on page: "buy for $30.00 a Year"). VAT/tax not stated; renewal appears to be the same annual rate.
- What free lacks: no side-by-side comparison table was found, but the vendor's own page meta description states: "Advanced Order Export for WooCommerce Pro is the ultimate solution for WooCommerce orders export... on status change, and send reports via email, FTP, SFTP, or Zapier," implying scheduled/automated exports, status-change triggers and FTP/API/Zapier delivery are Pro-only, with the free (Lite) version handling manual Excel/CSV/XML/JSON/PDF/HTML export only.
- Verdict: free is already the top-rated plugin in this category; enough for most stores.
- Source: https://algolplus.com/plugins/downloads/advanced-order-export-for-woocommerce-pro/, fetched 2026-09-25.

### 19. Returns/RMA - Return Refund and Exchange For WooCommerce
- WordPress.org slug: `woo-refund-and-exchange-lite`. Vendor: WP Swings.
- **Label: Freemium.**
- Paid tier (RMA Return, Refund & Exchange For WooCommerce Pro), 1 site: **$79/year**, or $139 for 2 years (discounted from $158). 5-site $149/year; 10-site $289/year. A storewide 20% promo code (PREFEST) was showing at fetch time, so the $79 figure may itself be a promotional price rather than a standing list price. VAT/tax not stated.
- Vendor's own quote on what free already has: "Dedicated refund system," "Efficient tax handling," "Set predefined refund reason" (i.e. the core RMA workflow is in the free version). Pro adds WhatsApp/SMS notifications, partial refund/exchange/cancel, and admin-initiated requests from the backend.
- Verdict: free covers the core RMA job, which matches the source file's own finding that this free plugin (94/100, 123 ratings) is considerably better rated than the official £74/yr WooCommerce extension (2.0/5). Enough for most stores.
- Source: https://wpswings.com/product/rma-return-refund-exchange-for-woocommerce-pro/, fetched 2026-09-25 (retrieved via a text-extraction proxy after the vendor's page repeatedly returned truncated content to direct fetches).

### 20. Search - FiboSearch
- WordPress.org slug: `ajax-search-for-woocommerce`. Vendor: FiboSearch.
- **Label: Freemium.**
- Paid tier (Pro), 1 site (up to 10,000 products): **$59 first year, renews at $50.15/year** (15% renewal discount). VAT/tax not stated.
- Vendor's own quote on what free lacks (Pro adds): "Search by custom fields and attributes," "Fuzzy search," "Synonyms," "Search by brands," "Pages in autocomplete," "Posts in autocomplete," "Search by product categories" and "tags," custom CSS styling, priority email support.
- Verdict: **counted as genuinely needed.** These are not cosmetic differences; fuzzy search, attribute/brand search and category filtering materially affect whether customers actually find products in a catalogue of any real size, which is close to the definition of "growing store."
- Source: https://fibosearch.com/pricing/, fetched 2026-09-25.

### 21. SEO - Yoast SEO Premium, Yoast WooCommerce SEO, Rank Math Pro
**Yoast SEO**
- WordPress.org slug: `wordpress-seo`. Vendor: Yoast.
- **Label: Freemium.**
- Paid tier (Premium), 1 site: **£118.80/year**, explicitly stated on the page as **"ex VAT"** (VAT is NOT included). No separate renewal price shown (renews at the same rate).
- What free lacks: no single quoted comparison sentence, but the page frames Premium as automating: redirect management, multiple focus keyphrases (up to 5 per page), bulk AI metadata generation, a Content Planner, orphaned-content detection, 24/7 expert support, and bundled Local/Video/News SEO plugins.
- Verdict: **counted as genuinely needed.** Automated redirect management is the standout item: a physical-goods catalogue with normal product turnover (discontinued lines, renamed products) generates dead URLs on the free tier, which free Yoast does not manage automatically.
- Source: https://yoast.com/wordpress/plugins/seo-premium/, fetched 2026-09-25.

**Yoast WooCommerce SEO**
- `woocommerce.com/products/yoast-woocommerce-seo/` now returns a flat **HTTP 404**, not merely a retirement notice as an earlier check found. This confirms the product is discontinued and unavailable; no price exists to cite. Fetched 2026-09-25.

**Rank Math SEO**
- WordPress.org slug: `seo-by-rank-math`. Vendor: Rank Math.
- **Label: Freemium** (free tier is unusually capable per the source file's own note).
- Paid tier (PRO), 1 site: **EUR 6.99/month, billed annually** (so roughly €83.88/year if that rate holds at renewal), shown as discounted 22% from €8.99/month. It is unclear from the page whether €6.99/month is a standing price or a first-period promo, since no separate renewal figure was shown. Stated as **"ex VAT."** Currency shown was EUR, possibly geo-detected, and could differ for a UK visitor.
- What free lacks: could not be confirmed in clean, reliably verbatim form; the page's feature table rendered ambiguously (mixed old/new numbers in one string), so no quote is included rather than risk misquoting.
- Verdict: free is capable (on-page analysis, schema, sitemaps, Search Console); paid mainly adds keyword rank tracking and AI tools, not core on-page SEO. Free-reasonable baseline.
- Source: https://rankmath.com/pricing/, fetched 2026-09-25.

### 22. Caching and performance - LiteSpeed Cache / WP Rocket
**LiteSpeed Cache**
- WordPress.org slug: `litespeed-cache`.
- **Label: Free.** There is no paid tier of the plugin itself. The plugin's own FAQ states: "Yes, LSCWP will always be free and open source." Any cost in this category comes from optional paid LiteSpeed server hosting or QUIC.cloud CDN/image/Critical CSS usage beyond its free tier, both infrastructure/service costs, not a plugin license.
- Source: https://wordpress.org/plugins/litespeed-cache/, fetched 2026-09-25.

**WP Rocket** (not on WordPress.org; separate paid-only alternative)
- **Label: Paid-only.**
- Price, 1 site: **EUR 49.95/year** ("Single" plan, covers product updates and support for 1 website plus performance monitoring). Billed annually, auto-renews. The page states "Taxes may apply depending on your country of residence," so VAT/tax is not included.
- Verdict: not needed if the host runs LiteSpeed Server (free covers it); an alternative for stores on other hosting.
- Source: https://wp-rocket.me/pricing/, fetched 2026-09-25.

### 23. Security - Wordfence Premium
- WordPress.org slug: `wordfence`. Vendor: Wordfence (Defiant Inc).
- **Label: Freemium**, but **price could not be confirmed.** Every attempt to fetch wordfence.com's pricing pages (`/products/pricing/`, `/products/wordfence-premium/`, `/products/wordfence-premium-signup/`, `/get-wordfence/`, and the homepage) returned either HTTP 403 or empty content, on repeated tries across two separate research passes (the delegated subagent and a direct follow-up attempt). This session's WebSearch quota was also exhausted, so no cross-check via search was possible either. Per the brief's instruction, no price is invented.
- What free lacks (this quote is from the free plugin's own WordPress.org page, not the blocked vendor pricing page, but is still the vendor's own text): Premium provides "real-time updates to the Threat Defense Feed which includes a real-time IP blocklist, firewall rules, and malware signatures," implying the free tier runs on a delayed feed.
- Verdict: this looks like a real, not cosmetic, security gap for a live store taking payments (delayed vs real-time threat data), so it would normally count toward "paid needed," but with no confirmed price it cannot be included in the cost total below. Flagged as a known likely cost that is currently unpriced.

### 24. Backups - UpdraftPlus Premium
- WordPress.org slug: `updraftplus`. Vendor: UpdraftPlus (the commercial site has moved from updraftplus.com to teamupdraft.com via a 301 redirect; same developer, so treated as the official upstream).
- **Label: Freemium.**
- Paid tier: **no true single-site plan exists.** The entry-level "Personal" plan is **$84.00/year and covers up to 2 sites** (the smallest tier on offer). The price displayed included VAT for a UK-detected location.
- Vendor's own feature bullets on what free lacks: "Automatic backup before updates," "One-click site migration," "Incremental backups - keep backups small and fast," "Restore individual parts of your site," "Backups stored in multiple locations."
- Verdict: **counted as genuinely needed.** The source file's own pain-point research elsewhere in this project found "plugin/core updates breaking the live store" to be a dominant, recurring owner complaint; automatic pre-update backups and incremental backups directly address that specific, well-evidenced risk.
- Source: https://teamupdraft.com/updraftplus/pricing/, fetched 2026-09-25.

### 25. Transactional email (SMTP) - WP Mail SMTP Pro
- WordPress.org slug: `wp-mail-smtp`. Vendor: WPForms (WP Mail SMTP).
- **Label: Freemium.**
- Paid tier, 1 site: **$49.00/year**, stated as an introductory price reduced from $99.00/year. The page states "the prices listed on this page don't include VAT or other applicable taxes. These will be calculated and shown during checkout," so VAT is not included. The page also states "Special introductory pricing, all renewals are at full price," which implies the renewal price is **$99.00/year**, though this is inferred from that wording plus the stated original price rather than a separately labeled renewal line.
- What free lacks: no clean verbatim comparison-table quote was found on the pricing page.
- Verdict: without a confirmed vendor quote of a functional gap, this is not asserted as a hard requirement here, though email logging and delivery reporting are commonly understood industry features reserved for paid SMTP plugins.
- Source: https://wpmailsmtp.com/pricing/, fetched 2026-09-25.

### 26. GDPR/cookie consent - CookieYes and Complianz
**CookieYes**
- WordPress.org slug: `cookie-law-info`. Vendor: CookieYes.
- **Label: Freemium.**
- Paid tier (Basic, per domain): **£8/month or £80/year (GBP)**; also shown as $10/month or $100/year (USD) and €9/month or €90/year (EUR) depending on region. Annual billing gives "2 months free" versus paying monthly. "Local taxes (VAT, GST, etc.)" are explicitly charged **in addition** to the listed price. 14-day free trial on paid plans.
- Vendor's own hard limit on the free tier: **capped at 5,000 pageviews/month and 100 pages per scan.** The comparison table also shows custom colours, multilingual banner, auto-translated banner, custom CSS, chat support and multi-user access as "No" on Free, "Yes" on Basic.
- Verdict: **counted as genuinely needed.** 5,000 pageviews/month is a low bar (under 200/day); a real UK store in the source file's target revenue range (£250k to £5m/yr) will routinely exceed it, which forces the paid tier just to keep the consent banner compliant at real traffic levels, not for extra features.
- Source: https://cookieyes.com/pricing/, fetched 2026-09-25.

**Complianz GDPR/CCPA Cookie Consent Banner**
- WordPress.org slug: `complianz-gdpr`. Vendor: Complianz.
- **Label: Freemium.**
- Paid tier (Personal), 1 website: **$59/year** (USD). The page also displayed alternate-currency figures of €35 and £35 for the same tier that did not reconcile cleanly against $59 across two fetch attempts (the GBP symbol was ambiguous in the extracted text); treat the $59 figure as reliable and the €/£35 figures as unconfirmed, worth a manual re-check. VAT not explicitly mentioned. Renews at the same price, 30-day money-back guarantee.
- What free lacks: no verbatim comparison-table sentence was found; the page only notes a free plugin exists and that users can "switch from Free to Premium." Premium is understood to add Google Consent Mode v2, multi-region compliance, and IAB TCF support, but this is not a quoted claim.
- Verdict: without a clear quoted functional gap, treated as free-reasonable by default, though Google Consent Mode v2 support is an increasingly real practical need for stores running Google Ads/Analytics.
- Source: https://complianz.io/pricing, fetched 2026-09-25.

### 27. Database cleanup/order archiving - Advanced Database Cleaner Pro
- WordPress.org slug: `advanced-database-cleaner`. Vendor: Sigma Plugin.
- **Label: Freemium.**
- Paid tier (Starter): **$39/year**, or **$78 one-time (lifetime, no renewal)**. Includes 10 daily remote scan credits on the Starter tier. VAT/tax not mentioned.
- What free lacks: no single verbatim comparison sentence; the plugin's wp.org readme references the Premium version giving "more advanced features, such as detecting and cleaning orphaned options, orphaned tables," plus scheduled/automated cleanup.
- Verdict: free already handles basic transient/orphaned-data cleanup for most stores; Premium is more useful for larger or older catalogues wanting automated scheduling and deeper orphan detection. Free-reasonable baseline for most.
- Source: https://sigmaplugin.com/downloads/wordpress-advanced-database-cleaner/, fetched 2026-09-25.

---

## Summary table

| Job | Plugin | Free enough? | Paid price per year (1 site) | Source |
|---|---|---|---|---|
| 1. Shipment tracking | Advanced Shipment Tracking (Zorem) | Mostly (paid = bulk/automation) | $129/yr USD | zorem.com, 2026-09-25 |
| 2. Custom/"Shipped" status | Custom Order Status Manager (BrightPlugins) | Yes | $39/yr USD, VAT incl. | brightplugins.com (archived snapshot), 2026-09-25 |
| 3. Shipping labels/carriers | (none dominant) | N/A, not priced | N/A | not independently researched |
| 4. Table rate shipping | Flexible Shipping PRO (Octolize) | Yes | £75/yr GBP (may be promo, see notes) | octolize.com, 2026-09-25 |
| 5. PDF invoices | PDF Invoices & Packing Slips Pro (WP Overnight) | Mostly | EUR 69/yr | wpovernight.com, 2026-09-25 |
| 6. UK/EU VAT | EU/UK VAT Validation Manager (WP Factory) | Yes | $59.99/yr USD | wpfactory.com, 2026-09-25 |
| 7. GTIN/Google feed | CTX Feed Pro (WebAppick) | Yes | $119/yr USD | webappick.com, 2026-09-25 |
| 7. GTIN/Google feed | Product Feed PRO/Elite (AdTribes) | Mostly | $99.50/yr USD (intro; list $199) | adtribes.io, 2026-09-25 |
| 8. Bundles | WPC Product Bundles Premium (WPClever) | Yes | $29 one-time USD | wpclever.net, 2026-09-25 |
| 8. Add-ons | Product Addons Pro (Acowebs) | Situational | $49/yr USD | acowebs.com, 2026-09-25 |
| 8. Variation swatches | Variation Swatches Premium (GetWooPlugins) | Yes | $49/yr USD | getwooplugins.com, 2026-09-25 |
| 9. Subscriptions | (not re-researched) | N/A | £209/yr GBP (official, carried over) | woo-plugin-stack.md citation |
| 10. Back in stock | Back In Stock Notifier add-ons (ProPluginsLab) | Yes | $19 one-time/add-on, bundle from $49 | propluginslab.io, 2026-09-25 |
| 10. Pre-orders | (not re-researched) | N/A | £134/yr GBP (official, carried over) | woo-plugin-stack.md citation |
| 11. Abandoned cart | Cart Abandonment Recovery (CartFlows) | Yes | $99/yr USD (10 sites, no 1-site tier) | cartflows.com, 2026-09-25 |
| 12. Reviews | Customer Reviews Pro (CusRev) | Yes | $59.99/yr USD | cusrev.com, 2026-09-25 |
| 13. Profit/COGS | Cost of Goods Pro (WP Factory) | **No** (variable products) | $59.99/yr USD | wpfactory.com, 2026-09-25 |
| 13. Analytics | Metorik | No free tier (situational) | $25/mo USD (0-100 orders/mo) | metorik.com, 2026-09-25 |
| 14. Stock sync (Amazon/eBay/Etsy) | LitCommerce | No free tier (situational) | $29/mo USD | litcommerce.com, 2026-09-25 |
| 15. Accounting sync | MyWorks Sync (QBO or Xero) | **No** (own words: for growing volume) | $228/yr USD ($19/mo billed annually) | wordpress.org listing, 2026-09-25 |
| 16. Multi-currency | FOX Currency Switcher Pro | Mostly (2-currency free cap) | $49/yr USD | currency-switcher.com, 2026-09-25 |
| 17. B2B/wholesale | B2BKing | Situational | $199/yr USD (promo; renews ~$299) | kingsplugins.com, 2026-09-25 |
| 17. B2B/wholesale | Wholesale Suite | Situational | $49.50 or $99/yr USD (vendor pages disagree) | wholesalesuiteplugin.com, 2026-09-25 |
| 18. Order export | Advanced Order Export Pro (AlgolPlus) | Yes | $30/yr USD | algolplus.com, 2026-09-25 |
| 19. Returns/RMA | Return Refund and Exchange Pro (WP Swings) | Yes | $79/yr USD | wpswings.com, 2026-09-25 |
| 20. Search | FiboSearch Pro | **No** (vendor: fuzzy/attribute/brand search missing) | $59 first yr, $50.15/yr renewal, USD | fibosearch.com, 2026-09-25 |
| 21. SEO | Yoast SEO Premium | **No** (vendor: no auto redirects on free) | £118.80/yr GBP, ex VAT | yoast.com, 2026-09-25 |
| 21. SEO | Yoast WooCommerce SEO | N/A, discontinued (404) | N/A | woocommerce.com, 2026-09-25 |
| 21. SEO | Rank Math Pro | Yes | approx EUR 83.88/yr (€6.99/mo, ex VAT) | rankmath.com, 2026-09-25 |
| 22. Caching | LiteSpeed Cache | Yes (fully free) | $0 | wordpress.org, 2026-09-25 |
| 22. Caching | WP Rocket (alternative) | No free tier (optional alt) | EUR 49.95/yr | wp-rocket.me, 2026-09-25 |
| 23. Security | Wordfence Premium | Mostly, likely needed | **Unconfirmed, pricing pages blocked** | wordfence.com, attempted 2026-09-25, failed |
| 24. Backups | UpdraftPlus Premium | **No** (vendor: no pre-update/incremental backups on free) | $84/yr USD (2-site min, no 1-site tier) | teamupdraft.com, 2026-09-25 |
| 25. SMTP | WP Mail SMTP Pro | Mostly, uncertain | $49/yr USD intro, $99/yr renewal | wpmailsmtp.com, 2026-09-25 |
| 26. Cookie consent | CookieYes Basic | **No** (vendor: 5,000 pageviews/mo cap) | £80/yr GBP (or $100 / EUR90) | cookieyes.com, 2026-09-25 |
| 26. Cookie consent | Complianz Premium | Yes | $59/yr USD | complianz.io, 2026-09-25 |
| 27. DB cleanup | Advanced Database Cleaner Pro (Sigma) | Yes | $39/yr USD | sigmaplugin.com, 2026-09-25 |

---

## Two totals

### (a) Free wherever reasonable, the honest baseline

Every category above except LitCommerce and Metorik (both situational, paid-only add-ons for stock-sync/advanced-analytics use cases most stores do not need) has a genuinely usable free or freemium tier, confirmed either by install numbers/ratings already gathered in `woo-plugin-stack.md` or by the vendor's own description of what the free tier covers. Running the stack on free tiers throughout is a real, working option for most of these 27 categories, not a hypothetical floor: **£0 / $0 direct extension cost**, same conclusion the source file reached for its baseline categories, now extended across the situational ones too.

This is the honest default for a store that is watching cost, given that most stores genuinely do run on these free versions: Flexible Shipping, PDF Invoices & Packing Slips, EU/UK VAT Validation Manager, CTX Feed, Variation Swatches, WPC Product Bundles, Back In Stock Notifier, Cart Abandonment Recovery, Customer Reviews, Advanced Order Export, Return Refund and Exchange, Rank Math, LiteSpeed Cache, Complianz, and Advanced Database Cleaner all have free tiers that cover the actual job, per either the vendor's own words or their strong install/rating numbers already gathered.

### (b) Paid tier where a growing store typically needs it

Only plugins with a **vendor-quoted or well-evidenced hard gap** are counted here, not every plugin with a "nicer" paid tier:

1. **FiboSearch Pro**, $59 first yr / $50.15/yr renewal (USD). The vendor's own comparison shows free lacks fuzzy search, attribute/brand search, and category/tag filtering, features that materially affect whether customers find products in any catalogue of real size.
2. **Cost of Goods Pro**, $59.99/yr (USD). The vendor's own words: free "covers basic per-product costs," Pro adds "variations." The source file's own target profile explicitly assumes a store using variable products, so accurate profit reporting genuinely needs this.
3. **MyWorks Sync (Rise)**, $228/yr (USD, $19/mo billed annually). The vendor's own words position the free Launch plan as a starting point ("as your order volume / functionality needs grow, you can change to our paid plans"), and accounting sync is close to mandatory for real UK bookkeeping/VAT once order volume is real.
4. **CookieYes Basic**, £80/yr (GBP). The vendor's own hard cap: free stops at 5,000 pageviews/month, a bar any real store in this revenue range will clear in normal traffic, forcing the paid tier just to remain compliant at scale.
5. **Yoast SEO Premium**, £118.80/yr (GBP, ex VAT). Automated redirect management is the standout gap: a physical-goods catalogue with normal product turnover generates dead URLs that free Yoast does not manage automatically.
6. **UpdraftPlus Premium**, $84/yr (USD, cheapest tier, covers 2 sites, no true 1-site plan exists). The vendor's own feature list shows free lacks automatic pre-update and incremental backups, directly addressing "an update broke my live store," a dominant, independently-evidenced complaint pattern.
7. **Wordfence Premium**, price unknown. The free plugin's own page implies a real security gap (delayed vs real-time threat feed) for a live store taking payments, but the vendor's pricing pages could not be fetched (blocked on every attempt) and WebSearch quota ran out, so no figure could be confirmed. Flagged as a likely real cost that is currently unpriced, not included in the sum below.

**Sum, currencies not converted or combined:**
- USD: $59.00 + $59.99 + $228.00 + $84.00 = **$430.99/year** (first-year list prices; note some of these are introductory/promotional prices that may renew higher, flagged individually above)
- GBP: £80.00 + £118.80 = **£198.80/year**
- Plus Wordfence Premium: unpriced, add manually after checking wordfence.com/products/pricing/ directly in a browser (it blocked automated fetching on every attempt made for this report).

This is a deliberately short list. Most of the 32 plugins researched have free tiers that do the actual job; the seven above are the ones where the vendor's own words, or well-evidenced findings elsewhere in this project, show a genuine functional or capacity gap that a growing UK store would hit in practice.
