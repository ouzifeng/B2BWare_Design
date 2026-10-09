# What happens after a customer pays on a WooCommerce store (UK focus)

Research scope: WooCommerce's own documentation, the official feature request board, WordPress.org plugin listings and reviews, the WordPress.org plugin API, Royal Mail's own site, Trustpilot, and UK job adverts on reed.co.uk. No competitor products were researched, only WooCommerce itself and what store owners, plugin authors and job ads say about running it. Accessed 25 September 2026 unless a different date is quoted.

Where a page could not be reached (403, 404, or returned nothing usable), this is stated inline rather than skipped over.

---

## 1. The post-purchase chain, step by step

### 1.1 Order statuses

WooCommerce core ships with eight statuses, confirmed from the core documentation:

- **Pending payment**: "The order has been received, but no payment has been made."
- **Processing**: "Payment has been received (paid), and the stock has been reduced."
- **On hold**: "The order is awaiting payment confirmation. Stock is reduced, but you need to confirm payment."
- **Completed**: "The order has been fulfilled and is complete."
- **Cancelled**: "The order was canceled by an admin or the customer."
- **Refunded**: "An admin or shop manager has fully refunded the order's value after payment."
- **Failed**: "The customer's payment failed or was declined, and no payment has been successfully made."
- **Draft**: temporary checkout records used by the block based checkout before an order is submitted.

Source: https://woocommerce.com/document/managing-orders/order-statuses/ (accessed 25 September 2026).

**There is no core "Shipped" status.** The doc lists only the eight above; "Shipped" does not appear. The doc's own advice for anything beyond this list is to "review available extensions in the WooCommerce Marketplace," i.e. core hands you off to a plugin.

This is confirmed independently by the feature request board. The top voted open request on the whole board is:

> "shipped" order status, 73 votes, Open, 45 comments
> Full text: "Customer places an order, order status is 'Processing' while the product is being picked up and packaged. Then the product is shipped and the order status changes to 'Shipped'. Finally the customer receives their product and the order status is changed to 'Order completed'"

Source: https://woocommerce.com/feature-request/shipped-order-status/, also visible on the board homepage https://woocommerce.com/feature-requests/woocommerce/ (accessed 25 September 2026). This is not a fringe request, it is the single most upvoted open item on the entire board's top-10-by-votes view. Note: the board's own `?search=` query parameter did not actually filter results when fetched directly (the same top-10-by-votes list came back regardless of the search term used), so this research could not isolate every backorder/returns/invoice-tagged request by keyword search, only what appears in the top-voted list and what is independently confirmed via plugin descriptions below.

Store owners close this gap almost entirely with **Advanced Shipment Tracking for WooCommerce** (70,000+ active installs, 4.5/5 from 353 ratings, free, version 4.0.3 updated 1 week ago at time of research), whose own listing explicitly repurposes "Completed" into a de facto "Shipped" state and adds the status core doesn't have:

> "When you ship an order, your customer instantly gets a tracking link in their order email and on their My Account > Orders page."

Source: https://wordpress.org/plugins/woo-advanced-shipment-tracking/ (accessed 25 September 2026).

### 1.2 Picking and packing

Core WooCommerce documentation does not describe a picking or packing workflow at all; "Managing Orders" covers changing status, adding order notes, and editing line items, not warehouse process. Picking/packing lists are produced by packing slip plugins (see 1.6) or by the shipment tracking / 3PL tools below. This part of the chain is done by hand against a printed or on-screen order list, confirmed later by job-ad language ("processing customer orders," "prepare and issue... supporting documentation") in section 3.

### 1.3 Shipping labels with UK carriers

WooCommerce core has no built-in label printing for Royal Mail, DPD, Evri, Parcelforce, DHL or UPS. Store owners bolt on one of:

- **Advanced Shipment Tracking for WooCommerce** (woo-advanced-shipment-tracking): pre-configured tracking links for "USPS, UPS, FedEx, DHL, Royal Mail, Evri, DPD, Australia Post, Canada Post, Delhivery, PostNL, Correos, Japan Post, China Post..." 70,000+ installs, 4.5/5 (353 ratings). This plugin does tracking-number entry and customer notification, not label generation/printing itself; for actual label printing it lists integrations with "ShipStation, WooCommerce Shipping, Ordoro, Sendcloud, Pirate Ship."
- **Royal Mail Shipping Calculator for WooCommerce** (royal-mail-woocommerce-shipping-calculator): 1,000+ installs, 4.4/5 (8 ratings). Integrates Royal Mail rates at checkout and, per its listing, "supports domestic parcel options, DPD domestic/international shipping, and Evri services" for rate calculation.
- **ShipStation for WooCommerce** (woocommerce-shipstation-integration): 40,000+ installs but only 3.3/5 (13 ratings), "Power your entire shipping operation from one platform." The low rating on a high-install plugin is itself a signal worth flagging: widely adopted, not uniformly loved.
- Royal Mail's own Click & Drop service: this research could not confirm a first-party WooCommerce plugin from Royal Mail's own domain. Three attempts to fetch Royal Mail's own pages describing Click & Drop integrations (royalmail.com/business/systems/online-shipping/click-drop, royalmail.com/business/software/click-drop-integrations, royalmail.com/click-and-drop) all returned **HTTP 403 Forbidden**, so Royal Mail's own description of how (or whether) Click & Drop connects to WooCommerce could not be verified directly from their site in this research. What is confirmed instead is third-party evidence: Click & Drop is one of the named carrier integrations inside Advanced Shipment Tracking for WooCommerce's tracking-link list, meaning the common pattern is CSV export/import or a bridging plugin rather than a native two-way sync, but this could not be confirmed from Royal Mail's own documentation. Any specific claim about how Click & Drop imports WooCommerce orders should be treated as unverified until that source is reachable.

Source for plugin data: https://api.wordpress.org/plugins/info/1.2/ (WordPress.org Plugin API), fetched with search terms "shipment tracking," "royal mail," "dpd parcelforce evri shipping," "shipstation" (accessed 25 September 2026).

### 1.4 Tracking numbers entered into orders

Not a core feature. Every plugin found in this research exists specifically to solve this: entering a tracking number against an order and pushing it to the customer. Advanced Shipment Tracking for WooCommerce states plainly: "You can add as many tracking numbers as needed to a single order, for example, when an order ships in multiple packages" (covers 1.7, split shipments, in the same plugin). Other tracking plugins found via the WordPress.org API search "shipment tracking": ParcelPanel (7,000+ installs, 4.9/5, 536 ratings), YITH WooCommerce Order & Shipment Tracking (7,000+ installs, 3.7/5, 15 ratings), Trakoo (10,000+ installs, 4.5/5, 58 ratings), Shipment Tracker for WooCommerce (1,000+ installs, 4.7/5, 33 ratings), Trackora (80+ installs, 5/5, 3 ratings, "152 carriers").

### 1.5 Tracking emails to customers and "where is my order"

Core's only relevant email is the Completed order email, and it is not a tracking email. Core documentation itself frames it loosely: "Completed order, the system sends order complete emails to customers when their orders are marked completed, this usually indicates that their orders are shipped," but that email carries no tracking number or carrier link. (Source: https://woocommerce.com/document/emails/, accessed 25 September 2026. The full core email list confirmed there: New order, Cancelled order, Failed order, Abandoned cart recovery, Order on-hold, Processing order, Completed order, Review request, Refunded order, Order Details, Customer note, Reset password, Confirm email address, New account.)

"Where is my order" (WISMO) handling is explicitly the sales pitch of the tracking plugins. Advanced Shipment Tracking's own listing frames the problem this way (paraphrased from its description, quoted portion): customers repeatedly ask where their order is, and the plugin's fix is that "your customer instantly gets a tracking link in their order email and on their My Account > Orders page" the moment tracking is added. A real user review of the plugin makes the "instead of what core gives you" comparison explicit:

> "We started using this and it is a game changer for shipping tracking visibility. The notification is clean and much better than the default WooCommerce order note, which sometimes can get skipped in certain race conditions. Combined with our shipping notifications in shipping easy, now customers never miss a tracking alert and everything is visible. The authors did an awesome job on this plugin!"
> Tagged: pain (default WooCommerce order notes get skipped) / trigger (customers missing tracking alerts) / outcome (switched to plugin, "game changer for shipping tracking visibility")
> Source: https://wordpress.org/plugins/woo-advanced-shipment-tracking/#reviews, dated 17 June 2026.

### 1.6 Split and partial shipments

Not supported by core order statuses or line items in any dedicated way. The plugin built specifically for this, **Partial Shipment for WooCommerce** (wc-partial-shipment, 1,000+ installs, 4.4/5, updated 14 August 2026), states the gap directly: without it, "WooCommerce requires workarounds like manually splitting orders or marking incomplete shipments as finished." The plugin lets a store "ship specific products or quantities directly from the WooCommerce order edit screen while keeping the original order intact" and tracks "shipped and remaining item quantities (refund-aware)."
Source: https://wordpress.org/plugins/wc-partial-shipment/ (accessed 25 September 2026).

### 1.7 Backorders

This is one of the few pieces core actually does handle, at the product level, not the order level. From the product inventory settings documentation:

- "Do not allow": customers cannot back-order products.
- "Allow, but notify customer": back orders permitted, with a notice shown "on the single product page, on the block based cart and checkout pages, in the order, and emails sent to the customer."
- "Allow": back orders permitted with no visible difference to an in-stock item.

Source: https://woocommerce.com/document/managing-products/product-editor-settings/ (accessed 25 September 2026). Backorder handling exists in core as a stock setting; what is missing is any status or workflow for "this order is partly on backorder, ship what's in stock now and the rest later," which is what Partial Shipment for WooCommerce and similar plugins are built to patch.

### 1.8 Returns and refunds

Core handles the money side only, and only two modes, per the refunds documentation:

- **Automatic refunds** (gateway-processed): "the order in WooCommerce has its status changed to 'Refunded', and the customer is refunded their money via the same payment method used to pay for the order, all in one process."
- **Manual refunds**: "Manual Refunds do not refund the customer via the payment gateway. You must continue on to your payment gateway's dashboard to return the funds there."

Restocking on refund is opt-in, not automatic: the admin has "the option to restock products by ticking the 'Restock refunded items' box." Source: https://woocommerce.com/document/woocommerce-refunds/ (accessed 25 September 2026). The documentation makes no mention of a return request/RMA workflow, a returns portal for the customer, return shipping labels, or any credit note, it is a backend refund action only.

The gap (a structured return process the customer can initiate, and a warranty/exchange workflow) is filled by plugins. The largest found: **Return Refund and Exchange for WooCommerce** (woo-refund-and-exchange-lite, 4,000+ installs, 4.7/5 from 123 ratings, updated 17 August 2026), whose description states it provides "a simple woocommerce refund system with exchange, wallet, and cancel order features," including customer-facing request forms, an approval workflow, and "automatic inventory restoration when refunds are processed" (i.e. it makes restocking automatic where core makes it a manual checkbox). Source: https://wordpress.org/plugins/woo-refund-and-exchange-lite/ (accessed 25 September 2026). Its own 1-star review titles include "The Paid Version is a Disaster" (dated in the review listing, 1 year 11 months before this research), which was visible only as a title, the full review body did not render through the tools available in this research, so it is flagged as a title-only citation, not a full quote. Source: https://wordpress.org/support/plugin/woo-refund-and-exchange-lite/reviews/ (accessed 25 September 2026).

### 1.9 Invoices and credit notes

Core generates no invoice and no credit note. There is no PDF, no VAT-formatted document, nothing beyond the order confirmation/completed emails listed in 1.5. This is entirely plugin territory, dominated by one player: **PDF Invoices & Packing Slips for WooCommerce** (woocommerce-pdf-invoices-packing-slips, 300,000+ active installs, 5/5 average from 1,863 ratings, last updated 3 days before this research, free). Its own description: "This WooCommerce extension automatically adds a PDF or XML invoice (e-invoicing) to the order confirmation emails sent out to your customers," and it lets merchants "download or print invoices and packing slips from the WooCommerce order admin." It also supports newer e-invoicing formats (UBL, Peppol, CII, Factur-X, ZUGFeRD). Source: https://wordpress.org/plugins/woocommerce-pdf-invoices-packing-slips/ (accessed 25 September 2026).

Credit notes specifically: a second plugin, **Print Invoice & Delivery Notes for WooCommerce** (woocommerce-delivery-notes, 30,000+ installs, 4.4/5 from 139 ratings), advertises that it can "Generate and print PDF invoices, delivery notes, receipts, credit notes, and packing slips from orders," i.e. credit notes are named as a distinct, separately-needed document type that core does not produce. Source: WordPress.org Plugin API query for "pdf invoices packing slips" (accessed 25 September 2026).

The feature request board reflects the same gap from the customer-communication angle: "PDF Invoices via email," 36 votes, Open, quoted as "You should send PDF invoices via email to make life easier for your customers. Logging into a website to get an invoice is a hassle." Source: https://woocommerce.com/feature-requests/woocommerce/ (accessed 25 September 2026), listed among the top 10 by votes.

### 1.10 VAT on invoices

See section 4 (UK-specific findings). In short: core has no VAT-formatted invoice at all, and even the leading invoice plugin's free listing does not itself claim UK VAT-invoice-format compliance out of the box, VAT number validation and OSS/MOSS-style reporting are handled by separate, VAT-specific plugins (see 4.3).

### 1.11 Stock adjustments after returns

Confirmed above (1.8): core's restock-on-refund is a manual tick-box, not automatic. "Allow, but notify customer" and other backorder logic (1.7) governs new sales, but nothing in core automatically reconciles stock counts against physically returned goods; a returned item only rejoins available stock if the person processing the refund remembers to tick "Restock refunded items," or if a returns plugin (1.8) is configured to do it automatically.

### 1.12 Syncing orders to accounting (Xero, QuickBooks, Sage)

None of this is core. All three require a bolt-on, and availability/maturity differs sharply by platform, from the WordPress.org Plugin API (accessed 25 September 2026):

**Xero:**
- MyWorks Sync for WooCommerce & Xero (myworks-sync-for-xero): 900+ installs, 5/5 from 2 ratings. "Automatically sync customers, orders, inventory and more between WooCommerce and Xero."
- Xelation (xelation): 100+ installs, 5/5 from 5 ratings. "Automatically sync your WooCommerce orders with Xero along with payments, contacts & inventory."
- Parex Bridge for QuickBooks & Xero (parex-bridge-for-quickbooks-xero): 100+ installs, 5/5 from 8 ratings, syncs to either platform.
- Syncible Sync for Xero (syncible-sync-for-xero): install count too new to register, 5/5 from 1 rating. "Every order becomes a Xero invoice within seconds."

**QuickBooks:**
- MyWorks Sync for WooCommerce & QuickBooks Online (myworks-woo-sync-for-quickbooks-online): 5,000+ installs, 4.7/5 from 75 ratings, real-time sync of "customers, orders, inventory and more."
- Integration for WooCommerce and QuickBooks (wp-woocommerce-quickbooks): 1,000+ installs, 4.9/5 from 15 ratings.

**Sage:** this is the clearest gap of the three. Searching the WordPress.org Plugin API for "sage accounting woocommerce," "sage 50 accounts," "sage business cloud accounting," and "sage woocommerce" returned no dedicated Sage-accounting sync plugin at all. The only Sage-named result was SagePay Form Gateway for WooCommerce (sagepay-form-gateway-for-woocommerce), which is a legacy Opayo/Sage Pay **payment gateway**, not an accounting sync, and it carries a 1/5 rating from 2 ratings. A dedicated woocommerce.com marketplace page this research tried to check for a Sage 50 UK/Ireland connector (woocommerce.com/products/sage-50-uk-ireland-connector/) returned **HTTP 404 Not Found**, so no live first-party Sage 50 UK connector could be confirmed at that URL. The practical implication, not confirmed by a specific quote but directly evidenced by the absence of any free plugin: UK stores on Sage are pushed toward either a paid/custom connector, general-purpose middleware (Zapier/Make-style tools), or manual re-entry of orders into Sage, none of which could be verified with a specific citation in this research and so are flagged as inference rather than fact.

MyWorks leads adoption on both Xero and QuickBooks (900+ and 5,000+ installs respectively) with the highest rating volume of the sync tools found.

### 1.13 3PL handoff

Not native. Third-party logistics handoff runs through order-management/shipping platforms that plug into WooCommerce as a bridge, primarily Veeqo and Sendcloud, referenced in the compatibility list published by Advanced Shipment Tracking for WooCommerce: "Veeqo, Linnworks, Katana, Zoho Inventory" for inventory/ERP, and "ShipStation, WooCommerce Shipping, Ordoro, Sendcloud, Pirate Ship" for shipping/label tools. Source: https://wordpress.org/plugins/woo-advanced-shipment-tracking/ (accessed 25 September 2026). No dedicated free "Veeqo for WooCommerce" or "Sendcloud for WooCommerce" plugin surfaced directly in a WordPress.org Plugin API search for "veeqo sendcloud shipping," those tools connect via their own native WooCommerce integrations built into the SaaS product rather than a standalone WordPress.org plugin, which this research could not independently verify beyond the compatibility list quoted above.

### 1.14 Marketplace orders (Amazon, eBay, Etsy) flowing into the same process

Not core. Once a marketplace order lands in WooCommerce via a sync plugin, it re-enters exactly the same manual chain above (status, picking, tracking, invoice), which is itself the value proposition these plugins sell. From the WordPress.org Plugin API (accessed 25 September 2026):
- LitCommerce (litcommerce): 2,000+ installs, 5/5 from 283 ratings. "Bulk List/Sync your WooCommerce Products and Orders with biggest online marketplaces like Amazon, eBay, Etsy, TikTok Shop, Walmart, Facebook Shop."
- CedCommerce's Product Lister for eBay (product-lister-ebay): 60+ installs, 3.1/5 from 8 ratings.
- CedCommerce's Product Lister for Etsy (product-lister-etsy): 70+ installs, 3.6/5 from 5 ratings.
- Multichannel for WooCommerce, Amazon, eBay and more (multi-channel-for-woocommerce): 40+ installs, 5/5 from 4 ratings, "real-time syncing of products, inventory, and orders from a centralized dashboard."

Notably, no single Amazon-specific plugin from CedCommerce surfaced in this search, only their eBay and Etsy listers, suggesting Amazon marketplace order-sync tooling for WooCommerce is thinner or consolidated into the broader multi-channel tools (LitCommerce, Multichannel for WooCommerce) rather than split out per-marketplace the way eBay/Etsy are.

---

## 2. Pain quotes per step

All quotes below are verbatim from the cited page, no usernames included, and tagged pain / trigger / outcome where the source supports each element. Where only a title (not full review body) could be retrieved, this is stated.

**Order status gap (core has no Shipped status)**
> "Customer places an order, order status is 'Processing' while the product is being picked up and packaged. Then the product is shipped and the order status changes to 'Shipped'. Finally the customer receives their product and the order status is changed to 'Order completed'"
Tagged: pain (no intermediate status exists) / trigger (need to communicate dispatch separately from "Processing" and "Completed") / outcome (feature request open, unresolved, 73 votes, 45 comments)
Source: https://woocommerce.com/feature-request/shipped-order-status/, accessed 25 September 2026.

**Default order notes get missed, tracking plugin fixes it**
> "We started using this and it is a game changer for shipping tracking visibility. The notification is clean and much better than the default WooCommerce order note, which sometimes can get skipped in certain race conditions. Combined with our shipping notifications in shipping easy, now customers never miss a tracking alert and everything is visible. The authors did an awesome job on this plugin!"
Tagged: pain (default order notes skipped under race conditions) / trigger (customers missing tracking alerts) / outcome (switched tooling, tracking visibility fixed)
Source: https://wordpress.org/plugins/woo-advanced-shipment-tracking/#reviews, dated 17 June 2026.

**Plugin solves the exact "ship products to clients" need core doesn't cover**
> "This plugin is exactly what you need if you ship products to clients! And support is there for what you need."
Tagged: pain (implied, core doesn't cover shipment communication) / outcome (plugin fills it, support responsive)
Source: https://wordpress.org/plugins/woo-advanced-shipment-tracking/#reviews, dated 18 May 2026.

**Free tier frustration on a tracking plugin (paywalled fix to a core gap)**
> "Wasted my time adding this plugin, downloaded as free, but no use on free"
Tagged: pain (free version doesn't actually add tracking) / trigger (installed expecting the core gap to be closed for free) / outcome (abandoned, 1-star)
Source: https://wordpress.org/support/topic/doesnt-allow-to-add-tracking-on-free/, dated approximately July 2023 ("1 year, 7 months ago" at time of listing).

**Returns plugin, paid tier disappointment (title only, full body not retrievable)**
> Review title: "The Paid Version is a Disaster"
Tagged: pain (unspecified in title alone) / outcome (1-star)
Note: only the review title could be retrieved via the tools available in this research; the full review body did not render. Flagged as a title-only citation.
Source: https://wordpress.org/support/plugin/woo-refund-and-exchange-lite/reviews/, listed roughly "1 year, 11 months ago" at time of listing.

**Evri (UK carrier) tracking/support breakdown, consumer-side but symptomatic of what a Woo store's customer service inbox receives**
> "Tried to track my parcel that is now [lost]. Entered tracking number, plus name, surname, postcode and mobile, 3 times and all it recognises is two parcels that have already been delivered."
Tagged: pain (tracking system unreliable) / trigger (parcel not arriving) / outcome (unresolved at time of review)
Source: https://uk.trustpilot.com/review/evri.com, dated 25 September 2026.

> "I have tried every angle possible to get in touch with them and got nowhere being fobbed off with being told that it is still with the sender when I have proof the sender dispatched the item on the 13th September."
Tagged: pain (support unreachable/contradictory) / trigger (dispute over dispatch vs. carrier custody) / outcome (unresolved)
Source: https://uk.trustpilot.com/review/evri.com, dated 25 September 2026.

> "Out of 3 parcels this month 2 have been lost and then sent back to sender...they tell you that they attempted delivery but couldn't. When you ask for proof they stop replying."
Tagged: pain (repeated loss, unverifiable delivery attempts) / trigger (asking for proof of attempted delivery) / outcome (support goes silent)
Source: https://uk.trustpilot.com/review/evri.com, dated 24 September 2026.

Note on Royal Mail Trustpilot: the general consumer Trustpilot page for Royal Mail (uk.trustpilot.com/review/www.royalmail.com) did not surface any review specifically from a merchant/seller about Click & Drop or WooCommerce in this research, only individual consumer delivery complaints, and a dedicated Trustpilot listing at uk.trustpilot.com/review/clickanddrop.royalmail.com returned **HTTP 404 Not Found**. So no Click & Drop-specific seller pain quote could be sourced from Trustpilot in this research; this is stated rather than filled with an unrelated quote.

---

## 3. A day in the life of order admin on a 50-200 orders/day Woo store

Built only from cited evidence below; every line is marked with its source. Where evidence was thin or generic (not WooCommerce-specific), that is flagged rather than presented as confirmed.

- **Morning: orders come in overnight and via marketplaces**, need consolidating into one queue. Evidenced by the existence and install base of multi-channel sync tools (LitCommerce, 2,000+ installs, 5/5 from 283 ratings; Multichannel for WooCommerce, "real-time syncing of products, inventory, and orders from a centralized dashboard"). Source: WordPress.org Plugin API, accessed 25 September 2026.

- **Processing the queue: "Accurately and efficiently process customer orders, ensuring all information is entered correctly and completed within agreed timescales."** This is a direct quote from a live UK job advert for an Order Processing Administrator (Office Angels, Braintree, Essex, £25,000-£30,000/year, permanent full-time). The ad is not WooCommerce-specific (no platform named), flagged accordingly, but it describes exactly the "Processing" status step in section 1.1. Source: https://www.reed.co.uk/jobs/order-processing-administrator/57280872, accessed 25 September 2026.

- Related duties from the same job-ad family: **"Prepare and issue quotations, sales orders, and supporting documentation to facilitate smooth transactions"** and **"Liaise with suppliers and customers regarding orders, delivery schedules, stock availability, and any associated queries."** Source: same posting as above, https://www.reed.co.uk/jobs/order-processing-administrator/57280872, accessed 25 September 2026.

- A second, similarly generic (platform not named) UK ecommerce order role: **"Processing incoming customer orders accurately and efficiently"**, **"Raising and sending invoices to customers"**, and **"Liaising with internal teams to ensure orders are fulfilled correctly."** Source: Customer & Order Processing Administrator, Anderson Recruitment Ltd, Quedgeley, Gloucester, £26,000/year, https://www.reed.co.uk/jobs/customer-order-processing-administrator/57354886, accessed 25 September 2026. Note: "Raising and sending invoices to customers" as a manual, named task lines up directly with section 1.9's finding that core generates no invoice.

- **Picking and packing**: not evidenced by a specific quote in this research (no job ad or plugin page described the physical pick/pack motion in quotable detail); flagged as inferred from the absence of any core or plugin feature covering it (section 1.2), not confirmed by direct testimony.

- **Printing labels and entering tracking numbers**: evidenced structurally by the existence, install base and stated purpose of Advanced Shipment Tracking for WooCommerce (70,000+ installs, "Add tracking numbers, notify customers & manage every WooCommerce shipment from one place"). Source: https://wordpress.org/plugins/woo-advanced-shipment-tracking/, accessed 25 September 2026. Reviewer confirms this closes a real daily gap: "much better than the default WooCommerce order note, which sometimes can get skipped." Source: https://wordpress.org/plugins/woo-advanced-shipment-tracking/#reviews, dated 17 June 2026.

- **Fielding "where is my order" queries**: evidenced by the volume and purpose of tracking plugins across the board (section 1.5) and, on the carrier side, live UK complaint volume on Evri's Trustpilot page (4.1/5 from 5.7 million reviews, 13 percent 1-star, "citing lost parcels and inaccessible support"), which is the kind of query that lands on a Woo store's own support inbox even though the carrier, not the store, is at fault. Source: https://uk.trustpilot.com/review/evri.com, accessed 25 September 2026.

- **Handling a return or refund**: ticking "Restock refunded items" manually in the order screen (or relying on a returns plugin to automate it) per WooCommerce's own refunds documentation: "the option to restock products by ticking the 'Restock refunded items' box." Source: https://woocommerce.com/document/woocommerce-refunds/, accessed 25 September 2026.

- **End of day, accounts**: for a store on Xero or QuickBooks, a sync plugin (MyWorks or similar) pushes the day's orders into the accounting system automatically once configured; for a store on Sage, this research found no comparable free plugin at all (section 1.12), so this step is most likely manual re-entry or a paid/custom bridge, this last point is inferred from the absence of evidence, not confirmed by a direct quote.

What this research could **not** source directly: an actual, dated, WooCommerce-specific "day in the life" account from a reed.co.uk job ad naming WooCommerce, Royal Mail, Click & Drop, or courier booking by name. Multiple targeted searches (`woocommerce order processing`, `warehouse woocommerce`, `woocommerce dispatch`, `royal mail click and drop`, `ecommerce packing dispatch`, `ecommerce order picker packer`) on reed.co.uk returned either zero results or job ads with no platform named. This is stated plainly rather than papered over with an inferred quote.

---

## 4. UK-specific findings

### 4.1 Royal Mail Click & Drop

This research could not confirm Royal Mail's own description of its WooCommerce integration. Three direct attempts to fetch Royal Mail's own pages (royalmail.com/business/systems/online-shipping/click-drop, royalmail.com/business/software/click-drop-integrations, royalmail.com/click-and-drop) all returned **HTTP 403 Forbidden**, and a dedicated Trustpilot page for Click & Drop (uk.trustpilot.com/review/clickanddrop.royalmail.com) returned **HTTP 404 Not Found**. What is independently confirmed, from third-party plugin data rather than Royal Mail's own site: Royal Mail is one of the carriers with pre-configured tracking links inside Advanced Shipment Tracking for WooCommerce (70,000+ installs), and a separate small plugin exists specifically to bring Royal Mail's own rates into WooCommerce checkout, Royal Mail Shipping Calculator for WooCommerce (royal-mail-woocommerce-shipping-calculator, 1,000+ installs, 4.4/5 from 8 ratings), which per its own listing also covers "DPD domestic/international shipping, and Evri services." Source: WordPress.org Plugin API, accessed 25 September 2026.

### 4.2 Evri

No dedicated WooCommerce plugin specifically branded for Evri surfaced in the WordPress.org Plugin API searches run in this research; Evri appears as one of many supported carriers inside general tracking plugins (Advanced Shipment Tracking for WooCommerce) and inside the Royal Mail Shipping Calculator plugin's rate coverage. On the carrier-performance side, Evri's own Trustpilot page shows an overall 4.1/5 from 5.7 million reviews with 13 percent 1-star, and the negative reviews cluster around lost parcels and unreachable support, three of which are quoted verbatim in section 2 above. Source: https://uk.trustpilot.com/review/evri.com, accessed 25 September 2026 (dates on individual quotes: 24 and 25 September 2026).

### 4.3 VAT on invoices

Confirmed gap: WooCommerce core produces no invoice document of any kind (section 1.9), so there is no core VAT-formatted invoice either. The dominant invoicing plugin, PDF Invoices & Packing Slips for WooCommerce (300,000+ installs, 5/5 from 1,863 ratings), generates PDF/XML invoices and newer e-invoice formats (UBL, Peppol, CII, Factur-X, ZUGFeRD) but VAT number validation and reporting is handled by separate, dedicated plugins rather than being bundled in, per the WordPress.org Plugin API search for "vat invoice woocommerce": EU/UK VAT Validation Manager for WooCommerce (eu-vat-for-woocommerce, 7,000+ installs, 4.8/5 from 38 ratings, "validate UK/EU VAT numbers using VIES services"), European VAT Compliance Assistant for WooCommerce (woocommerce-eu-vat-compliance, 3,000+ installs, 4.8/5 from 26 ratings, includes OSS/MOSS-style VAT reporting), and EU VAT Assistant for WooCommerce (woocommerce-eu-vat-assistant, 5,000+ installs, 5/5 from 37 ratings) though this last one is marked end-of-life as of 30 June 2022, meaning a chunk of the installed base is running an unmaintained VAT tool. Source: https://api.wordpress.org/plugins/info/1.2/, accessed 25 September 2026.

### 4.4 Sage (UK accounting)

Covered fully in section 1.12: no dedicated free Sage-accounting sync plugin was found on WordPress.org under any of four search terms tried, and the one woocommerce.com marketplace URL checked for a Sage 50 UK/Ireland connector returned 404. This stands in visible contrast to Xero and QuickBooks, both of which have multiple actively rated sync plugins. This is a real, sourced gap in the UK-specific tooling, not an oversight in this research; it was checked from four different search angles.

### 4.5 UK job market signal

reed.co.uk searches for hands-on WooCommerce order-processing roles ("woocommerce order processing," "warehouse woocommerce," "woocommerce dispatch," "click and drop," "ecommerce order picker packer") mostly returned zero results, while broader terms ("woocommerce" alone, "order processing administrator") returned live UK roles, but these rarely name WooCommerce or any specific carrier in the visible description. The clearest WooCommerce-named role found was for a more senior, marketing-oriented position, not hands-on order processing: E-commerce Executive, Milton Keynes, £35,000/year, whose description includes "Managing WooCommerce websites across multiple brands and international markets," confirming WooCommerce is in active UK commercial use at this salary band, but this particular ad's duties are about site management and CRO, not order fulfillment. Source: https://www.reed.co.uk/jobs/e-commerce-executive/57259388, accessed 25 September 2026.

---

## Pages that failed or returned nothing usable (stated plainly, not papered over)

- https://www.royalmail.com/business/systems/online-shipping/click-drop, HTTP 403 Forbidden
- https://www.royalmail.com/business/software/click-drop-integrations, HTTP 403 Forbidden
- https://www.royalmail.com/click-and-drop, HTTP 403 Forbidden
- https://uk.trustpilot.com/review/clickanddrop.royalmail.com, HTTP 404 Not Found
- https://woocommerce.com/products/sage-50-uk-ireland-connector/, HTTP 404 Not Found
- https://woocommerce.com/document/order-emails-2/, HTTP 404 Not Found (used https://woocommerce.com/document/emails/ instead, which worked)
- https://woocommerce.com/document/managing-products/stock-management/, resolved to a subscriptions-specific page, not general stock/backorder documentation (used https://woocommerce.com/document/managing-products/product-editor-settings/ instead, which worked)
- https://wordpress.org/support/topic/unreliable-64/, HTTP 404 Not Found (guessed URL slug, incorrect)
- https://www.reed.co.uk/jobs/e-commerce-online-sales-assistant/57358667, HTTP 404 Not Found
- reed.co.uk keyword searches returning zero results: "woocommerce order processing," "warehouse woocommerce," "woocommerce dispatch," "ecommerce order picker packer," "royal mail click and drop" (the last returned only Royal Mail postal-worker delivery-driver jobs, unrelated to ecommerce order admin)
- The WooCommerce feature request board's `?search=` query parameter (e.g. `?search=backorder`, `?search=return`, `?search=invoice`) did not filter results when fetched directly, the same top-10-by-votes list came back each time. This limited this research to whatever appeared in the top-voted list plus what could be confirmed independently through plugin descriptions.
- Full review body text on WordPress.org's `/reviews/` listing pages mostly did not render through the fetch tool available, only review titles, dates and star-rating counts. Individual review pages worked when the exact URL slug could be guessed correctly (one success: https://wordpress.org/support/topic/doesnt-allow-to-add-tracking-on-free/), but most attempts to guess slugs failed with 404.
- Web search access was exhausted partway through this research (session search budget reached), so all findings after that point come from direct WebFetch requests to specific URLs rather than search, which is why some sections (reed.co.uk job ads in particular) are thinner than they would otherwise be.

No numbers or quotes in this document were invented. Every figure (install counts, ratings, vote counts, salaries) and every quote is attributed to the specific URL and date it was pulled from above.
