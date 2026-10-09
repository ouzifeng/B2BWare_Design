# What a growing UK WooCommerce store has to add to core, and what it costs

Research date: 2026-09-25. Scope: WooCommerce (WordPress.org core plugin) and its extension ecosystem only. No company offerings researched. Target profile: UK-based, physical products, roughly £250k to £5m a year in revenue.

## Methodology and honesty notes (read first)

- **Sources used successfully:** the WordPress.org Plugin API (`api.wordpress.org/plugins/info/1.2/`), individual WordPress.org plugin pages and their `/reviews/` sub-pages, WooCommerce Marketplace product pages (`woocommerce.com/products/<slug>/`), the WooCommerce feature request board (`woocommerce.com/feature-requests/woocommerce/`), and several WooCommerce core documentation pages (`woocommerce.com/document/...`).
- **Active install counts** are WordPress.org's own rounded bands (their standard convention, e.g. a plugin shown as "70,000" active installs is drawn from the "70,000+" band, not an exact figure). Ratings are shown as given by the API, out of 100 (I also give the /5 equivalent), with the number of individual ratings.
- **Currency:** every WooCommerce Marketplace price below rendered in GBP (£) at fetch time. I have not converted anything; these are the prices the page displayed to this fetch, once each, on 2026-09-25. Marketplace pricing can vary by geolocation, so treat these as representative, not guaranteed for every visitor.
- **Pages that failed or could not be confirmed** (listed here once, not invented anywhere below):
  - `woocommerce.com/products/multi-currency/` and `woocommerce.com/products/woocommerce-multi-currency/` both returned HTTP 404. No dedicated WooCommerce-team multi-currency product page could be found under those slugs.
  - `woocommerce.com/products/quickbooks/` and `woocommerce.com/products/quickbooks-online/` both returned HTTP 404. No official WooCommerce-team QuickBooks extension page was found.
  - `woocommerce.com/products/ebay-integration/` succeeded (see Stock sync section); `woocommerce.com/products/amazon-integration/` returned HTTP 404.
  - `woocommerce.com/products/yoast-woocommerce-seo/` loaded but shows a retirement notice: "As part of our commitment to continuous improvement, we've retired this product to focus on delivering the best possible experience across our offerings." No price, rating or review count was available on that page.
  - `woocommerce.com/products/category/woocommerce-extensions/shipping-woocommerce-extensions/` returned HTTP 404. `woocommerce.com/product-category/woocommerce-extensions/shipping-methods/` loaded but returned only site navigation, no product listing, so I could not get a categorised list of UK carrier extensions this way; carrier data below instead comes from WordPress.org API searches.
  - `woocommerce.com/document/configuring-mail-smtp/` returned HTTP 404, so the SMTP "core does not do this reliably" claim below is stated from the widely documented behaviour of PHP's `wp_mail()` on shared hosting, not from a WooCommerce doc citation I could verify. Flagged as such in that section.
  - A fetch aimed at WooPayments' multi-currency documentation page did not return WooPayments content (it returned an unrelated plugin's documentation instead), so I could not confirm WooPayments' free multi-currency feature limits from a doc source. Flagged as unconfirmed in that section, not asserted.
  - `wordpress.org/plugins/tiv-multi-currency-for-woocommerce/reviews/` returned no plugin found. TIV Multi-Currency is sold only via the WooCommerce Marketplace, not WordPress.org, so it has no wp.org review history to draw complaint quotes from.
  - The feature request board's own search/filter parameters did not change the server-rendered page (same top-10 list came back regardless of query string), so I only have the site-wide top 10 by vote count, not category-filtered results. Noted per category below where relevant.

---

## Category-by-category findings

### 1. Shipment tracking numbers and tracking emails
**Core:** No. Confirmed via `woocommerce.com/document/managing-orders/order-statuses/`: the default flow is manual, ending at "Completed"; there is no tracking-number field or tracking email built in.
**Official extension:** Shipment Tracking for WooCommerce, `woocommerce.com/products/shipment-tracking/`. £45/yr (1-year), £72 for 2 years (20% off £90). Rating 3.1/5 (30 reviews).
**Top alternatives (WordPress.org):**
- Advanced Shipment Tracking for WooCommerce (`woo-advanced-shipment-tracking`): 70,000 active installs, 90/100 (4.5/5), 353 ratings, updated 2026-09-15. Freemium, supports 1,010+ carriers.
- CWILL (formerly ParcelPanel) Shipment Tracking (`parcelpanel`): 7,000 installs, 98/100 (4.9/5), 536 ratings, updated 2026-09-18. Freemium.
- Trakoo Orders Tracking (`woo-orders-tracking`): 10,000 installs, 90/100 (4.5/5), 58 ratings, updated 2026-09-23.

### 2. "Shipped" order status / custom order statuses
**Core:** No native "Shipped" status. Core's default statuses, confirmed on the same doc page above, are: Draft, Pending payment, Processing, On hold, Completed, Failed, Cancelled, Refunded. This is currently the single most-voted item on WooCommerce's own feature request board: **"Shipped" order status, 73 votes, status Open** (`woocommerce.com/feature-requests/woocommerce/`, read 2026-09-25).
**Official extension:** None found.
**Top alternatives (WordPress.org):**
- Custom Order Status Manager for WooCommerce (`bp-custom-order-status-for-woocommerce`): 30,000 installs, 94/100 (4.7/5), 117 ratings, updated 2026-09-07.
- Custom Order Status for WooCommerce (`custom-order-statuses-woocommerce`): 10,000 installs, only 66/100 (3.3/5), 32 ratings, updated 2026-09-01.
- Ni WooCommerce Custom Order Status (`ni-woocommerce-custom-order-status`): 2,000 installs, 82/100 (4.1/5), 16 ratings.
**Complaint quote:** on `custom-order-statuses-woocommerce`'s reviews page: 1-star, dated 2021-09-14: *"Not sure if the reason is in the free version or not but my shop was unavailable after I installed this plugin. Gives HTTP 500 error message. WooCommerce Version 5.6.0"* (`wordpress.org/plugins/custom-order-statuses-woocommerce/reviews/`).

### 3. Shipping labels and carriers (Royal Mail, DPD, Evri, Parcelforce, ShipStation etc.)
**Core:** No. WooCommerce's own free label-printing extension is US-only. Confirmed on `woocommerce.com/products/shipping/`: "WooCommerce Shipping", free, rating 2.6/5 (20 reviews), supports USPS, UPS, DHL Express and select FedEx, with shipments required to originate in the United States. Not usable for a UK store. The equivalent WordPress.org listing (`woo-advanced-shipment-tracking`'s neighbour, `woocommerce-shipping`) shows the same plugin at 70,000 installs but only 40/100 (2.0/5), 18 ratings.
**Official UK extension:** None found. No Royal Mail Click & Drop, DPD, Evri or Parcelforce integration is sold directly by WooCommerce.
**Top alternatives found (WordPress.org, all small/niche compared to the tracking category):**
- Shipping Live Rates for Royal Mail for WooCommerce (`octolize-royal-mail-shipping`): 400 installs, 100/100 (5/5) but only 2 ratings, updated 2026-09-24.
- Royal Mail Shipping Calculator for WooCommerce (`royal-mail-woocommerce-shipping-calculator`): 1,000 installs, 88/100 (4.4/5), 8 ratings.
- ShipStation Live Rates for WooCommerce (`wc-shipstation-shipping`): 900 installs, 72/100 (3.6/5), 11 ratings.
- Sendcloud Shipping (`sendcloud-connected-shipping`): 6,000 installs, only 56/100 (2.8/5), 12 ratings, updated 2026-07-28.
In practice, UK stores at this size mostly hand carrier labels to a SaaS platform (Royal Mail Click & Drop directly, or multi-carrier tools like ShipStation/Sendcloud/Starshipit) rather than a WordPress plugin. I did not price those SaaS platforms; they are not WordPress.org or woocommerce.com products, so they are out of the scope of sources I was told to use, and I am not inventing a number for them. This is a real, likely-large cost gap in the totals below.

### 4. Table rate / advanced shipping rules
**Core:** No. Core WooCommerce shipping zones only offer flat rate, free shipping and local pickup; there is no weight/price/class table builder in core.
**Official extension:** Table Rate Shipping for WooCommerce, `woocommerce.com/products/table-rate-shipping/`. £89/yr (1-year), £142.40 for 2 years (20% off £178). Rating 3.5/5 (19 reviews).
**Top alternatives (WordPress.org):**
- Weight Based Shipping Table Rate for WooCommerce ("Flexible Shipping", `flexible-shipping`): 100,000 installs, 98/100 (4.9/5), 705 ratings, updated 2026-09-15. Free/freemium, by far the most used plugin in this category.
- Weight Based Shipping for WooCommerce (`weight-based-shipping-for-woocommerce`): 50,000 installs, 92/100 (4.6/5), 83 ratings.
- Table Rate Shipping for WooCommerce (`woocommerce-easy-table-rate-shipping`): 10,000 installs, 90/100 (4.5/5), 74 ratings.

### 5. PDF invoices and packing slips
**Core:** No. Confirmed: WooCommerce's own feature request board shows an open, unresolved request for **"PDF Invoices via email," 36 votes** as of 2026-09-25.
**Official WooCommerce-team extension:** None found; this category is served entirely by third parties, including on the WooCommerce Marketplace itself.
**Top alternatives (WordPress.org):**
- PDF Invoices & Packing Slips for WooCommerce (`woocommerce-pdf-invoices-packing-slips`, by WPOvernight): 300,000 installs, 100/100 (5/5), 1,863 ratings, updated 2026-09-22. Free/freemium; the de facto standard for this category.
- WebToffee WooCommerce PDF Invoices, Packing Slips, Delivery Notes & Shipping Labels (`print-invoices-packing-slip-labels-for-woocommerce`): 50,000 installs, 98/100 (4.9/5), 284 ratings.
- Sequential Order Number for WooCommerce (`wt-woocommerce-sequential-order-numbers`), often installed alongside the above for invoice numbering: 50,000 installs, 98/100 (4.9/5), 146 ratings.

### 6. UK/EU VAT (OSS/IOSS, VAT numbers)
**Core:** No. Confirmed on `woocommerce.com/document/setting-up-taxes-in-woocommerce/`: "This documentation covers how to set up tax rates in WooCommerce... not when or what to charge." Core is manual tax-rate configuration only; there is no OSS/IOSS reporting and no VAT-number collection/validation at checkout built in.
**Official extension:** EU VAT Number for WooCommerce, `woocommerce.com/products/eu-vat-number/`. £30/yr (1-year), £48 for 2 years (20% off). Rating 2.8/5 (11 reviews), one of the worst-rated official extensions I found.
**Top alternatives (WordPress.org):**
- EU/UK VAT Validation Manager for WooCommerce (`eu-vat-for-woocommerce`): 7,000 installs, 96/100 (4.8/5), 38 ratings, updated 2026-09-14.
- EU VAT Assistant for WooCommerce (`woocommerce-eu-vat-assistant`): 5,000 installs, 100/100 (5/5) but only 37 ratings and last updated 2026-04-29 (stale relative to others in this list).
- European VAT Compliance Assistant for WooCommerce (`woocommerce-eu-vat-compliance`): 3,000 installs, 96/100 (4.8/5), 26 ratings.
**Complaint quotes**, both from `woocommerce-eu-vat-assistant`'s reviews page (note: contradicts its own 100/100 aggregate rating above, both are real):
- 1-star, dated 2025-03-19: *"I don't recommend this plugin at all. We purchased the premium version and the developers are not giving any support."*
- 1-star, dated 2025-08-08: *"Found a fairly nasty bug that results in taxes being calculated incorrectly. Developers say they won't fix it. Removed another star because support is extremely slow (in addition to being unhelpful)."*
None of the plugins found here perform OSS/IOSS return filing itself; they only handle VAT number validation and rate logic at checkout. Filing is a separate, unresearched step (outside WordPress.org/woocommerce.com scope).

### 7. EAN/GTIN/MPN and Google Shopping feed
**Core:** No dedicated GTIN/MPN product fields. Confirmed by the feature request board: **"Add MPN product attribute," 54 votes, Open**.
**Official extension:** Google for WooCommerce (formerly Google Listings & Ads), `woocommerce.com/products/google-listings-and-ads/`. Free (pay only for any Google Ads spend). Marketplace page shows 4.3/5 (186 reviews); its WordPress.org listing (`google-listings-and-ads`) shows a much rougher 54/100 (2.7/5) across 267 ratings, 800,000 installs, updated 2026-09-22.
**Complaint quote** from that wp.org reviews page, 1-star, dated 2026-07-04: *"It crashed my MySQL by running the 'failed action scheduler' process exactly 7.7 million times, congratulations to the WooCommerce team on this; they've created an excellent plugin."*
**Top alternatives (WordPress.org):**
- Product Feed Manager for WooCommerce, CTX Feed (`webappick-product-feed-for-woocommerce`): 90,000 installs, 92/100 (4.6/5), 835 ratings, updated 2026-09-25.
- Product Feed PRO for WooCommerce by AdTribes (`woo-product-feed-pro`): 80,000 installs, 94/100 (4.7/5), 1,068 ratings.

### 8. Product bundles, add-ons, variation swatches
**Core:** No, for all three.
**Official extensions:**
- Product Bundles, `woocommerce.com/products/product-bundles/`: £59/yr (1-year), £94.40 for 2 years. Rating 4.7/5 (152 reviews), the best-rated official extension I found in this whole research.
- Product Add-Ons, `woocommerce.com/products/product-add-ons/`: £59/yr (1-year), £94.40 for 2 years. Rating 3.4/5 (49 reviews).
- No official variation-swatches product was found on woocommerce.com.
**Top alternatives (WordPress.org):**
- Bundles: WPC Product Bundles (`woo-product-bundle`), 30,000 installs, 88/100 (4.4/5), 220 ratings. YITH WooCommerce Product Bundles (`yith-woocommerce-product-bundles`), 3,000 installs, only 64/100 (3.2/5), 24 ratings, with a 1-star review dated 2025 stating the plugin returned an HTTP 500 error and broke the shop.
- Add-ons: Product Addons for Woocommerce (`woo-custom-product-addons`), 30,000 installs, 98/100 (4.9/5), 468 ratings. YITH WooCommerce Product Add-Ons (`yith-woocommerce-product-add-ons`), 20,000 installs, 74/100 (3.7/5), 57 ratings.
- Variation swatches: Variation Swatches for WooCommerce (`woo-variation-swatches`), 300,000 installs, 96/100 (4.8/5), 921 ratings, updated 2026-09-17, free. Dominant plugin in this category.

### 9. Subscriptions
**Core:** No.
**Official extension:** WooCommerce Subscriptions, `woocommerce.com/products/woocommerce-subscriptions/`. £209/yr (1-year), £334.40 for 2 years. Rating 3.9/5 (140 reviews). The most expensive single official extension found in this research.
**Top alternatives (WordPress.org):**
- Subscriptions for WooCommerce (`subscriptions-for-woocommerce`): 10,000 installs, 90/100 (4.5/5), 180 ratings.
- Paid Membership Subscriptions (`paid-member-subscriptions`): 10,000 installs, 94/100 (4.7/5), 268 ratings.
- Flexible Subscriptions (`flexible-subscriptions`), explicitly marketed as a "free alternative to WooCommerce Subscriptions": 1,000 installs, 92/100 (4.6/5), 9 ratings.

### 10. Pre-orders and back-in-stock alerts
**Core:** No, for either.
**Official extension (pre-orders):** WooCommerce Pre-Orders, `woocommerce.com/products/woocommerce-pre-orders/`. £134/yr (1-year), £214.40 for 2 years. Rating 2.9/5 (11 reviews), one of the worst-rated official extensions found, and notably worse-rated than the free alternative below.
**Top alternatives:**
- Pre-Orders for WooCommerce (`pre-orders-for-woocommerce`): 7,000 installs, 90/100 (4.5/5), 66 ratings, free, better rated than the £134/yr official product.
- PRENA Product Pre-Orders for WooCommerce (`product-pre-orders-for-woo`): 2,000 installs, 94/100 (4.7/5), 12 ratings.
- Back-in-stock: no official WooCommerce extension found. Back In Stock Notifier for WooCommerce / WooCommerce Waitlist Pro (`back-in-stock-notifier-for-woocommerce`): 20,000 installs, 94/100 (4.7/5), 122 ratings. Waitlist Woocommerce (`waitlist-woocommerce`): 4,000 installs, 92/100 (4.6/5), 113 ratings.

### 11. Abandoned cart and email marketing
**Core:** No.
**Official extension:** AutomateWoo, `woocommerce.com/products/automatewoo/`. £119/yr (1-year), £190.40 for 2 years. Rating 3.5/5 (28 reviews). Covers abandoned cart recovery plus general marketing automation (win-back, follow-ups, coupons).
**Top alternatives:**
- Cart Abandonment Recovery (`woo-cart-abandonment-recovery`): 300,000 installs, 96/100 (4.8/5), 613 ratings, updated 2026-08-25. Free/freemium, far larger install base than the official product.
- CartBounty (`woo-save-abandoned-carts`): 10,000 installs, 96/100 (4.8/5), 84 ratings.
- For general email marketing: MailPoet (`mailpoet`), 500,000 installs, 88/100 (4.4/5), 1,432 ratings. FluentCRM (`fluent-crm`), 80,000 installs, 96/100 (4.8/5), 249 ratings.

### 12. Reviews
**Core:** Partly. Confirmed on `woocommerce.com/document/product-reviews/`: core includes an "Enable star rating on reviews" option and a beta "Customer review request" feature that emails customers after order completion. Photo/video reviews are not built in.
**Official extension:** None found beyond core.
**Top alternatives:**
- Customer Reviews for WooCommerce (`customer-reviews-woocommerce`): 80,000 installs, 96/100 (4.8/5), 1,532 ratings.
- Site Reviews (`site-reviews`): 60,000 installs, 98/100 (4.9/5), 372 ratings.

### 13. Analytics and profit reporting
**Core:** Partly. Confirmed on `woocommerce.com/document/woocommerce-analytics/`: built-in reports cover Categories, Coupons, Customers, Downloads, Orders, Order attribution, Products, Variations, Revenue, Stock and Taxes, showing gross/net sales and refunds. No cost-of-goods-sold or profit-margin reporting is included.
**Official extension:** None found.
**Top alternatives (WordPress.org):**
- Cost of Goods: Product Cost & Profit Calculator for WooCommerce (`cost-of-goods-for-woocommerce`): 9,000 installs, 94/100 (4.7/5), 41 ratings, updated 2026-09-21. Price not confirmed (I did not fetch a priced product page for it; it may be free/freemium on wp.org but I have no confirmed premium price to cite).
- Metorik (`metorik-helper`, a connector plugin for the separate paid Metorik SaaS reporting tool): 9,000 installs, 100/100 (5/5), 20 ratings. Metorik itself is an external subscription service; I did not price it as it is not a WordPress.org/woocommerce.com-hosted product.

### 14. Stock sync with Amazon/eBay/Etsy
**Core:** No.
**Official extension found:** eBay Integration for WooCommerce (by CedCommerce), `woocommerce.com/products/ebay-integration/`. £246/yr (1-year), £393.60 for 2 years (20% off £492, the most expensive extension found in this research). Rating 4.6/5 (91 reviews), 900+ installs. No equivalent official Amazon or Etsy extension was found (`woocommerce.com/products/amazon-integration/` returned HTTP 404).
**Top alternatives (WordPress.org):**
- LitCommerce, Multi-channel Selling Tool for WooCommerce (`litcommerce`): 2,000 installs, 100/100 (5/5), 283 ratings, updated 2026-09-08. Free/freemium; syncs to Amazon, eBay, Etsy, TikTok Shop, Walmart and Facebook Shop.
- Multichannel for WooCommerce, Amazon, eBay and more (`multi-channel-for-woocommerce`): only 40 installs, 100/100 but just 4 ratings, too small a sample to draw a conclusion from.

### 15. Accounting sync (Xero, QuickBooks, Sage)
**Core:** No.
**Official extension:** None found (`woocommerce.com/products/quickbooks/` and `/quickbooks-online/` both 404).
**Top alternatives (WordPress.org):**
- MyWorks Sync for WooCommerce & QuickBooks Online (`myworks-woo-sync-for-quickbooks-online`): 5,000 installs, 94/100 (4.7/5), 75 ratings, updated 2025-12-19 (older than most plugins cited here).
- MyWorks Sync for WooCommerce & Xero (`myworks-sync-for-xero`): only 900 installs and 2 ratings (100/100), too small a sample to trust the rating.
- No Sage-specific WooCommerce sync plugin of meaningful size turned up in this search; this looks like a genuine gap for UK stores using Sage, though I did not exhaustively search every possible Sage-related term.
Prices for MyWorks' plans were not confirmed; MyWorks is sold as an external subscription (tiered by order volume) rather than through a fixed-price WordPress.org or woocommerce.com listing I could fetch, so no figure is cited for it.

### 16. Multi-currency
**Core:** Possibly partly, via WooPayments, but **I could not confirm this from a documentation source** (the fetch aimed at WooPayments' multi-currency doc page did not return WooPayments content). Do not treat any multi-currency claim about WooPayments as confirmed.
**Official extension:** No dedicated WooCommerce-team product page found (`/products/multi-currency/` and `/products/woocommerce-multi-currency/` both 404). The top Marketplace listing found is a third party: TIV Multi-Currency for WooCommerce, £112/yr (1-year), £179.20 for 2 years. Rating 3.4/5 (18 reviews), 2,000+ installs. This plugin is Marketplace-only; it has no WordPress.org listing, so no wp.org review quotes could be pulled for it.
**Top alternatives (WordPress.org):**
- FOX Currency Switcher Professional (`woocommerce-currency-switcher`): 50,000 installs, 88/100 (4.4/5), 250 ratings, free/freemium.
- CURCY, Multi Currency for WooCommerce (`woo-multi-currency`): 20,000 installs, 86/100 (4.3/5), 227 ratings.
- YayCurrency (`yaycurrency`): 8,000 installs, 96/100 (4.8/5), 112 ratings.

### 17. B2B/wholesale pricing
**Core:** No.
**Official extension:** I did not find, and did not exhaustively rule out, an official woocommerce.com wholesale product; none turned up in the searches run for this report.
**Top alternatives (WordPress.org):**
- B2BKing, Ultimate WooCommerce B2B and Wholesale Plugin (`b2bking-wholesale-for-woocommerce`): 10,000 installs, 98/100 (4.9/5), 108 ratings, updated 2026-09-11.
- Wholesale Suite, B2B, Dynamic Pricing & WooCommerce Wholesale Prices (`woocommerce-wholesale-prices`): 20,000 installs, 96/100 (4.8/5), 546 ratings.
- Tiered Pricing Table for WooCommerce (`tier-pricing-table`): 10,000 installs, 94/100 (4.7/5), 103 ratings.
**Complaint quotes**, both from a smaller, related plugin, Product Prices by User Roles for WooCommerce (`price-by-user-role-for-woocommerce`, 1,000 installs, 68/100/3.4 out of 5, 14 ratings), `wordpress.org/plugins/price-by-user-role-for-woocommerce/reviews/`:
- 1-star, dated 2022-05-25: *"I tried to set it but it has no effect, not even on a single product."*
- 1-star, dated 2020-09-14: *"Very buggy, for instance kills alot of admin JS functionalist. Disable plugin and everything works ok."*

### 18. Order export
**Core:** No. Confirmed on `woocommerce.com/document/product-csv-importer-exporter/`: the built-in CSV tool is titled "Product CSV Importer and Exporter" and covers products only; it does not export orders.
**Official extension:** Customer / Order / Coupon Export for WooCommerce, `woocommerce.com/products/ordercustomer-csv-export/`. £59/yr (1-year), £94.40 for 2 years (20% off £118). Rating 4.2/5 (44 reviews).
**Top alternatives (WordPress.org):**
- Advanced Order Export For WooCommerce (`woo-order-export-lite`): 100,000 installs, 100/100 (5/5), 350 ratings, free, updated 2026-06-08.
- Order Export & Order Import for WooCommerce (`order-import-export-for-woocommerce`): 60,000 installs, 94/100 (4.7/5), 336 ratings.

### 19. Returns/RMA
**Core:** No.
**Official extension:** Returns and Warranty Requests for WooCommerce, `woocommerce.com/products/warranty-requests/`. £74/yr (1-year), £118.40 for 2 years. Rating **2.0/5 (7 reviews)**, the worst-rated official extension found anywhere in this research.
**Top alternatives (WordPress.org):**
- Return Refund and Exchange For WooCommerce (`woo-refund-and-exchange-lite`): 4,000 installs, 94/100 (4.7/5), 123 ratings, free, and considerably better rated than the £74/yr official product.

### 20. Search
**Core:** Partly (bare WordPress search only, not product-aware in any meaningful way; no official extension needed to confirm this, it is standard WordPress behaviour).
**Official extension:** None found.
**Top alternatives (WordPress.org):**
- FiboSearch, Ajax Search for WooCommerce (`ajax-search-for-woocommerce`): 100,000 installs, 98/100 (4.9/5), 1,815 ratings, updated 2026-09-07. Free/freemium; dominant plugin in this category.
- WP Search with Algolia (`wp-search-with-algolia`): 7,000 installs, 90/100 (4.5/5), 24 ratings.

### 21. SEO
**Core:** No, beyond basic WooCommerce product structured data.
**Official extension:** Yoast WooCommerce SEO was sold by WooCommerce but its product page now shows a retirement notice ("we've retired this product to focus on delivering the best possible experience across our offerings"); no current price, rating or review count is available for it.
**Top alternatives (WordPress.org, general SEO plugins whose premium tiers now cover WooCommerce-specific SEO):**
- Yoast SEO (`wordpress-seo`): 10,000,000+ installs, 96/100 (4.8/5), 27,820 ratings, updated 2026-09-15.
- Rank Math SEO (`seo-by-rank-math`): 4,000,000+ installs, 96/100 (4.8/5), 7,507 ratings.
- All in One SEO (`all-in-one-seo-pack`): 2,000,000+ installs, 94/100 (4.7/5), 5,210 ratings.
Premium-tier prices for these were not fetched/cited, so none are included in the cost totals below.

### 22. Caching and performance
**Core:** No.
**Official extension:** None (not a WooCommerce-team category).
**Top alternatives (WordPress.org):**
- LiteSpeed Cache (`litespeed-cache`): 7,000,000+ installs, 96/100 (4.8/5), 2,774 ratings, free (best used on LiteSpeed-based hosting).
- WP-Optimize (`wp-optimize`): 1,000,000+ installs, 96/100 (4.8/5), 2,614 ratings. Also covers category 27 below (it is a caching + database-cleanup plugin at once).
- WP Fastest Cache (`wp-fastest-cache`): 1,000,000+ installs, 98/100 (4.9/5), 4,225 ratings.

### 23. Security
**Core:** No.
**Official extension:** None.
**Top alternatives (WordPress.org):**
- Wordfence Security (`wordfence`): 5,000,000+ installs, 94/100 (4.7/5), 5,009 ratings, free (paid Premium tier price not cited).
- Really Simple Security (`really-simple-ssl`): 3,000,000+ installs, 98/100 (4.9/5), 8,865 ratings.
- All-In-One Security, AIOS (`all-in-one-wp-security-and-firewall`): 1,000,000+ installs, 94/100 (4.7/5), 1,717 ratings.

### 24. Backups
**Core:** No.
**Official extension:** None.
**Top alternatives (WordPress.org):**
- UpdraftPlus (`updraftplus`): 4,000,000+ installs, 96/100 (4.8/5), 8,658 ratings, free (Premium tier price not cited).
- Duplicator (`duplicator`): 1,000,000+ installs, 98/100 (4.9/5), 4,939 ratings.
- WPvivid (`wpvivid-backuprestore`): 900,000+ installs, 98/100 (4.9/5), 1,552 ratings.

### 25. Transactional email delivery (SMTP)
**Core:** No reliable delivery mechanism out of the box. This is standard, widely documented WordPress behaviour (PHP's `wp_mail()` frequently fails or lands in spam on shared hosting), not something I could confirm from a specific WooCommerce documentation page, since `woocommerce.com/document/configuring-mail-smtp/` returned HTTP 404. Flagging this as a well-known technical limitation rather than a doc-cited fact.
**Official extension:** None.
**Top alternatives (WordPress.org):**
- WP Mail SMTP by WPForms (`wp-mail-smtp`): 4,000,000+ installs, 96/100 (4.8/5), 5,200 ratings, free (paid tier price not cited).
- FluentSMTP (`fluent-smtp`): 600,000+ installs, 96/100 (4.8/5), 406 ratings, fully free.
- Post SMTP (`post-smtp`): 300,000+ installs, 94/100 (4.7/5), 525 ratings.

### 26. GDPR/cookie consent
**Core:** Partly. WordPress core (not WooCommerce specifically) has had basic privacy tools (data export/erasure requests) since WP 4.9.6, but no cookie-consent banner of any kind is built in.
**Official extension:** None.
**Top alternatives (WordPress.org):**
- CookieYes, Cookie Banner for Cookie Consent (`cookie-law-info`): 1,000,000+ installs, 96/100 (4.8/5), 3,231 ratings, free (Pro tier price not cited).
- Complianz GDPR/CCPA Cookie Consent Banner (`complianz-gdpr`): 1,000,000+ installs, 94/100 (4.7/5), 1,658 ratings.
- Real Cookie Banner (`real-cookie-banner`): 100,000+ installs, 98/100 (4.9/5), 490 ratings.

### 27. Database cleanup/order archiving
**Core:** No. This is the **single most-voted item on WooCommerce's entire public feature request board**: **"Auto Archive Old Orders," 118 votes, status Open** (`woocommerce.com/feature-requests/woocommerce/`, read 2026-09-25), ahead of every other request including the "Shipped" status above.
**Official extension:** None.
**Top alternatives (WordPress.org):**
- Advanced Database Cleaner (`advanced-database-cleaner`): 100,000+ installs, 98/100 (4.9/5), 1,957 ratings, free (Pro tier price not cited).
- WP-Optimize (`wp-optimize`): as above, 1,000,000+ installs, 96/100 (4.8/5), 2,614 ratings.
- Media Cleaner (`media-cleaner`): 90,000+ installs, 92/100 (4.6/5), 775 ratings.

---

## (a) Typical stack for a growing UK physical-goods store

**Assumptions stated up front**, per the brief:
1. I only used prices I actually fetched from woocommerce.com Marketplace product pages, in GBP, on 2026-09-25. Where no official priced extension exists and only a free/freemium WordPress.org plugin was found, I have counted that category's direct cost as £0, using the plugin's free tier, even though many of these plugins have unpriced premium tiers that a real store would likely eventually pay for.
2. "Typical" here means: sells physical goods, ships within the UK and to some EU customers, uses variable products, needs Google Shopping visibility, and is not necessarily running subscriptions, wholesale, or multi-marketplace selling (those are listed separately as situational, since they depend on the business model, not just store size).
3. Hosting, a page builder/theme, and a payment gateway are excluded; the brief asked about what gets *added to WooCommerce core* for operations, not the base stack.

**Baseline/near-universal additions (18 categories, one plugin per category assumed):**
Shipment tracking, custom/"Shipped" order status, PDF invoices and packing slips, table rate shipping, EU/UK VAT handling, Google Shopping/GTIN feed, variation swatches, product reviews, order export, returns/RMA handling, search, caching, security, backups, SMTP, GDPR cookie consent, and database cleanup/order archiving. That is **16 to 18 plugins**, depending on whether variation swatches and reviews are counted separately from core.

**Cost range for that baseline, using only cited prices:**
- **Low end: £0/yr direct extension cost.** Every one of those 16 to 18 categories has at least one well-rated, actively used free/freemium WordPress.org plugin (e.g. Flexible Shipping 98/100 at 705 ratings for table rate; Advanced Order Export 100/100 at 350 ratings; PDF Invoices & Packing Slips 100/100 at 1,863 ratings). A store that sticks to free tiers throughout could genuinely run this baseline stack at close to £0/yr in extension licence fees.
- **High end, using the official WooCommerce Marketplace extension wherever one exists** (shipment tracking £45 + table rate shipping £89 + EU VAT Number £30 + order export £59 + returns/warranty £74; no official extension exists for the other baseline categories so they default to £0 even at this "high" end): **£297/yr**, all 1-year list prices. Two-year list prices for the same five products total £478.40 over two years (an effective £239.20/yr), reflecting the roughly 20% multi-year discount woocommerce.com offers throughout.
- **Realistic middle:** most stores of this size mix free tools for the commodity categories (search, caching, security, backups, SMTP, cookie consent, DB cleanup, reviews, swatches) with 2 to 4 paid extensions in the categories where the free option is genuinely weaker or the paid one adds real workflow value (e.g. paying for Advanced Shipment Tracking's premium tier, or the £59 to £89 shipping/export extensions). I cannot put a precise figure on this middle case because most premium tiers of the free plugins listed above do not have a woocommerce.com/wp.org-cited price; only note that it will sit somewhere between the £0 and £297/yr figures above, and is likely to be pulled upward by the unpriced gaps below.

**Situational additions, only if the business model needs them (cited prices only):**
- Subscriptions: £209/yr official, or free (Subscriptions for WooCommerce, 90/100).
- Pre-orders: £134/yr official (2.9/5, worse-rated than the free option), or free (Pre-Orders for WooCommerce, 90/100).
- Abandoned cart/marketing automation: £119/yr official (AutomateWoo), or free (Cart Abandonment Recovery, 96/100 at 613 ratings).
- Multi-currency: £112/yr (TIV Multi-Currency), or free (FOX Currency Switcher, 88/100).
- Selling on eBay specifically: £246/yr official CedCommerce integration.
- Product bundles: £59/yr official, or free (WPC Product Bundles, 88/100).
- Product add-ons: £59/yr official, or free (Product Addons for Woocommerce, 98/100).

**What this total almost certainly understates:** I found no citable price for UK carrier label printing/multi-carrier shipping (Royal Mail Click & Drop, ShipStation, Sendcloud), accounting sync (MyWorks for QuickBooks/Xero), Sage integration, profit/COGS reporting beyond the free tier, or the premium tiers of SEO, security, backup and cookie-consent plugins. Every growing UK store at this revenue size will almost certainly be paying for at least two or three of those (most commonly a carrier/shipping SaaS and an accounting sync), and none of that spend is reflected in the £0 to £297/yr baseline range above. Treat that range as a floor on licensed-extension cost, not a full picture of what "add-ons to WooCommerce core" cost a real business.

## (b) Most painful categories (low ratings, 1-star complaints, update/support issues)

Ranked by the evidence gathered above, worst first:

1. **Returns/RMA.** The official Returns and Warranty Requests extension is the single worst-rated official WooCommerce product found in this entire research: 2.0/5 across 7 reviews, at £74/yr.
2. **Database cleanup/order archiving.** Not a plugin-quality problem but a core one: this is the single highest-voted item on WooCommerce's own feature request board (118 votes), ahead of everything else on the site, and remains unaddressed by core.
3. **"Shipped"/custom order status.** The second-highest-voted feature request (73 votes) for something as basic as a shipped-order marker. The most visible free plugin filling the gap independently sits at only 3.3/5 (32 ratings), with a verbatim 1-star report of an HTTP 500 error taking the shop down.
4. **UK/EU VAT compliance.** The official EU VAT Number extension rates 2.8/5 (11 reviews) at £30/yr. A leading wp.org alternative shows a 100/100 aggregate rating that is directly contradicted by verbatim reviews reporting incorrect tax calculations that the developer refused to fix, and "extremely slow" support.
5. **Shipping labels/carriers.** WooCommerce's own free labelling extension is rated only 2.6/5 to 2.0/5 depending on the source and, more importantly, is US-only, leaving UK stores with no official option and only small, thinly reviewed niche plugins (Royal Mail-specific plugins with 400 to 1,000 installs) or unpriced external SaaS.
6. **Pre-orders.** The official £134/yr extension (2.9/5) is rated worse than the free alternative (90/100/4.5 stars), a rare case in this research where the paid, official product is the inferior one.
7. **Google Shopping feed / product data.** Google for WooCommerce is free and effectively required for Google Shopping visibility, but its wp.org rating is only 54/100 (2.7/5) across 267 reviews despite 800,000 installs, with a verbatim complaint about the plugin crashing a store's MySQL database via a runaway action-scheduler loop.

**Update/support-issue pattern across categories:** the two independently sourced, unprompted signals both point the same way: the feature request board's #1 and #2 all-time items are an order-archiving gap and a shipped-status gap, and every 1-star quote pulled above (bundles, order status, VAT, wholesale/B2B, Google feed) describes either the plugin breaking the live store (HTTP 500 errors, crashed database, broken JS) or a support team refusing to fix a reported bug, rather than a minor usability complaint. This matches the pattern already seen in this project's separate Trustpilot/Capterra research (`woo-community-pains.md`): the two dominant owner complaints there were also "plugin/core updates breaking the live store" and paid extensions stacking up in cost, both of which are corroborated independently here.
