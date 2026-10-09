# UK WooCommerce Integrations: Operations, Fulfilment, Payments and Finance

Research slice for the B2C migration platform project. Scope: UK WooCommerce stores, roughly £250k to £5m a year in revenue, selling physical goods. Question: which third-party operations, fulfilment, payments and finance services do these stores actually connect, ranked by real adoption evidence.

Methodology: WordPress.org plugin API queried directly for active-install buckets and ratings, WooCommerce Marketplace listing pages, vendor integration pages, and (for payment-method availability) Stripe's own documentation. Where a source could not be fetched or returned no result, that is stated explicitly rather than estimated. No install or rating figure below was invented; anything marked "not found" or "fetch failed" means exactly that. The em dash character is not used anywhere in this document; hyphens, commas, colons and full stops are used instead.

Each category section ends with a **Deal-breakers** callout: integrations a store would genuinely not migrate without, because orders would stop shipping, books would break, or a staff workflow depends entirely on it, with the reason stated. A ranked tier list (must-have vs common vs niche) follows all category sections.

---

## 1. Payments

| Service | WooCommerce plugin or connector | Active installs | Rating | UK relevance | What data flows and direction | Source URL |
|---|---|---|---|---|---|---|
| Stripe | Stripe for WooCommerce (official) | 700,000+ | 3.1/5 (237 ratings, wp.org); 3.7/5 (53 reviews, marketplace) | High, dominant UK card processor | Orders, payment/capture status, refunds, payouts to bank, customer payment methods, dispute data; bidirectional. Bundles Stripe Radar fraud scoring. | https://wordpress.org/plugins/woocommerce-gateway-stripe/ , https://woocommerce.com/products/stripe/ |
| WooPayments (WooCommerce Payments) | WooPayments (official, Automattic) | 800,000+ | 3.4/5 (173 ratings, wp.org); 4.1/5 (169 reviews, marketplace) | High, natively wired into WooCommerce core order/dispute UI | Orders, deposits/payouts, multi-currency, subscriptions, disputes, all inside WooCommerce admin | https://woocommerce.com/products/woocommerce-payments/ |
| PayPal Payments | WooCommerce PayPal Payments (official) | 800,000+ | 2.9/5 (580 ratings, wp.org); 3.5/5 (338 reviews, marketplace) | High, near-ubiquitous secondary/primary UK checkout option | Orders, capture/settlement, refunds, payouts, dispute status | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=woocommerce-paypal-payments , https://woocommerce.com/products/woocommerce-gateway-paypal-express-checkout/ |
| Klarna | Klarna for WooCommerce (official) | 20,000+ | 2.3/5 (20 ratings, wp.org); 3.1/5 (32 reviews, marketplace) | High, leading UK BNPL brand | Orders, BNPL settlement/order status, merchant paid upfront by Klarna | https://wordpress.org/plugins/klarna-payments-for-woocommerce/ , https://woocommerce.com/products/klarna-payments/ |
| Klarna (legacy) | Kustom Checkout for WooCommerce (formerly Klarna Checkout) | 10,000+ | 3.5/5 (15 ratings) | Klarna's spun-off "Kustom" checkout, not the mainline plugin above | Orders, checkout session data | https://wordpress.org/plugins/klarna-checkout-for-woocommerce/ |
| Clearpay/Afterpay | Clearpay Gateway for WooCommerce (official, UK-branded) | 1,000+ | 4.2/5 (5 ratings) | High where used, small adoption evidence | Orders, BNPL settlement status, payouts | https://wordpress.org/plugins/clearpay-gateway-for-woocommerce/ |
| Clearpay/Afterpay (AU/US/NZ brand) | Afterpay Gateway for WooCommerce (official) | 10,000+ | 3.6/5 (45 ratings) | Lower direct UK relevance (non-UK brand name, same company) | Orders, BNPL settlement status, payouts | https://wordpress.org/plugins/afterpay-gateway-for-woocommerce/ |
| Square | WooCommerce Square (official) | 80,000+ | 2.1/5 (121 ratings, wp.org); 3.4/5 (129 reviews, marketplace); UK listed as supported country | Moderate, growing for hybrid online/in-person UK retailers | Orders, bidirectional inventory sync, payouts, customer data, unified reporting | https://wordpress.org/plugins/woocommerce-square/ , https://woocommerce.com/products/woocommerce-square/ |
| Amazon Pay | Amazon Pay for WooCommerce (official) | 10,000+ | 2.5/5 (27 ratings) | Moderate, available and used in UK | Orders, payouts, shipping/address pulled from customer's Amazon account | https://wordpress.org/plugins/woocommerce-gateway-amazon-payments-advanced/ |
| GoCardless | GoCardless for WooCommerce (official) | 1,000+ (wp.org); marketplace: 1K+, 2.6/5 (11 reviews) | 5/5 (1 rating, wp.org) | High, UK-founded, standard for Direct Debit/subscription billing on physical goods | Orders/invoices, recurring payment mandates, payouts, retry/dunning data | https://wordpress.org/plugins/woocommerce-gateway-gocardless/ , https://woocommerce.com/products/gocardless/ |
| Opayo (formerly Sage Pay) | No official/maintained plugin. Only tiny third-party plugins (PatSaTECH Opayo Direct/Server, SagePay Form Gateway) | 20 to 90 (third-party only) | 0 to low, 1.0 to 2.5/5 | Historically high (Sage Pay was a leading UK gateway pre-2015), current native adoption negligible; Elavon (owner) markets a separate "Elavon Payment Gateway for WooCommerce" as apparent successor | Not found / discontinued path | https://wordpress.org/plugins/sagepay-direct-gateway-for-woocommerce/ , https://woocommerce.com/products/sage-pay/ (redirects to Elavon) |
| Worldpay | No active plugin anywhere. Official WooCommerce.com extension page states: "This product is no longer available on WooCommerce.com." | 0 / not found | not found | Historically high (major UK acquirer), zero current native WooCommerce support evidenced | n/a, discontinued | https://woocommerce.com/products/worldpay/ |
| Viva Wallet | Viva.com Smart Checkout for WooCommerce (official) | 6,000+ | 2.3/5 (7 ratings) | Low-moderate, strongest in Greece/Southern Europe, expanding into UK | Orders, payouts | https://wordpress.org/plugins/viva-com-smart-for-woocommerce/ |
| Viva Wallet (alt.) | Viva Payments (third-party, Papaki/Enartia) | 1,000+ | 4.3/5 (12 ratings) | Same as above, unofficial | Orders, payouts | https://wordpress.org/plugins/woo-payment-gateway-for-vivapayments/ |
| SumUp | SumUp Payment Gateway For WooCommerce (official) | 10,000+ | 2.2/5 (40 ratings) | High for UK micro/small retailers, skews to online checkout, not physical-till sync | Orders, payouts | https://wordpress.org/plugins/sumup-payment-gateway-for-woocommerce/ |
| Revolut | Revolut Gateway for WooCommerce (official) | 7,000+ | 3.2/5 (45 ratings) | High and growing, Revolut Business/Revolut Pay is UK-founded | Orders, payouts | https://wordpress.org/plugins/revolut-gateway-for-woocommerce/ |

**Is PayPal, Klarna, and Clearpay available through Stripe for UK businesses?** Yes, confirmed on Stripe's own documentation, all three:
- **PayPal**: GB is listed in the "Business locations" table of countries whose Stripe accounts can accept PayPal. https://docs.stripe.com/payments/paypal
- **Klarna**: GB is listed under both Business locations and Customer locations, with a full UK payment-options table (Pay in full, Pay later, Pay in 3 or 4, Financing, GBP limits stated). https://docs.stripe.com/payments/klarna
- **Clearpay/Afterpay**: the page explicitly states the product is "also known as Clearpay in the UK," GB is listed under Business location eligibility (AU, CA, GB, NZ, US) with a GBP "Pay in 4" limit table. https://docs.stripe.com/payments/afterpay-clearpay
- The general overview table at https://docs.stripe.com/payments/payment-methods/overview marks both Klarna and Afterpay/Clearpay "Supported" under Europe in the Buy Now, Pay Later section.
No UK-specific blocking caveats were found for any of the three.

**Deal-breakers**
- **Stripe (700,000+ installs)**: if the new platform can't process existing Stripe payouts and subscriptions on day one, checkout stops entirely for a large share of the target store population.
- **WooPayments (800,000+ installs)**: deeply wired into WooCommerce's native order/dispute/deposit UI; a store built on it loses payouts and order-status sync immediately if unsupported.
- **PayPal Payments (800,000+ installs)**: frequently the sole or primary checkout button for UK stores; losing it removes a major conversion path and, where it's the only gateway, stops checkout outright.
- **GoCardless**: for any store running recurring/subscription physical-goods billing via Direct Debit mandates, GoCardless is the sole rail; if existing mandates can't be honoured, recurring billing stops entirely for those customers.

**No WooCommerce connector at all**: Worldpay (extension discontinued by WooCommerce.com itself, no WordPress.org plugin found under any tested slug). Opayo/Sage Pay has no actively-maintained plugin, only three unofficial plugins each under 100 installs, effectively the same as no connector for planning purposes.

---

## 2. Shipping and labels

| Service | WooCommerce plugin or connector | Active installs | Rating | UK relevance | What data flows and direction | Source URL |
|---|---|---|---|---|---|---|
| Royal Mail Click & Drop | No dedicated Click & Drop plugin. "Royal Mail Shipping Calculator for WooCommerce" is checkout-only (rates, no labels/tracking). Actual label/tracking flow runs through aggregators below or manual CSV export into the Click & Drop web app. | 1,000 (rate calculator only) | 4.4/5 (8 ratings) | UK's single largest carrier by volume | Rate calculator only quotes cost/delivery at checkout; no native label or tracking flow found | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=royal-mail-woocommerce-shipping-calculator |
| ShipStation | ShipStation for WooCommerce (official, WooCommerce-marketplace verified) | 40,000+ | 66% (13 ratings, wp.org); 3.8/5 (21 reviews, marketplace) | Explicitly supports UK as a market | Orders sync out to ShipStation; labels generated across many carriers; tracking numbers pushed back into orders; batch label printing; cross-channel returns | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=woocommerce-shipstation-integration , https://woocommerce.com/products/shipstation-integration/ |
| Sendcloud | Sendcloud Shipping (official) | 6,000 | 2.8/5, 56% (12 ratings; reviews cite outdated API/support delays) | Only plugin found giving one WooCommerce install label access to Royal Mail, DPD, Evri, Parcelforce, DHL and UPS together (160+ carriers claimed) | Order data syncs one-way to Sendcloud on order creation; labels generated across listed carriers | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=sendcloud-connected-shipping |
| Parcel2Go | Parcel2Go Shipping (official) | 100 | 2.5/5, 50% (12 ratings) | Multi-courier UK broker, common for smaller UK stores seeking discounted rates | Quotes, books services, downloads labels, bulk processing from WooCommerce admin | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=parcel2go-shipping |
| DPD (UK) | No dedicated UK plugin. Only unrelated regional variants (Baltic, Slovakia). Reached via MultiParcels Shipping (4,000 installs, 4.6/5) or Advanced Shipment Tracking (below). | 0 (UK-specific) | n/a | One of the UK's "big 4" carriers | No native UK flow; via MultiParcels: labels and pickup-point selection; via Advanced Shipment Tracking: tracking numbers pushed into orders | https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=dpd+local (0 UK results) |
| Evri (formerly Hermes) | No dedicated plugin under "evri," "hermes parcel," or "hermes uk." Reached via MultiParcels Shipping, Sendcloud (still listed as "Hermes"), and Advanced Shipment Tracking (lists "Evri (formerly Hermes)" by name). | 0 (dedicated); 70,000 (Advanced Shipment Tracking, host plugin) | n/a (dedicated); 4.5/5 (353 ratings, host plugin) | Major UK domestic parcel carrier | No dedicated native flow; tracking numbers synced via aggregator plugins | https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=hermes+uk (0 relevant results) |
| Parcelforce | No dedicated plugin ("parcelforce" search: zero relevant results). Reached via Advanced Shipment Tracking (lists Parcelforce by name) and the Pro tier of the Royal Mail Shipping Calculator. | 0 (dedicated); 70,000 (Advanced Shipment Tracking, host plugin) | n/a | UK carrier, Royal Mail Group's express/heavier-parcel arm | Tracking numbers pushed into orders via Advanced Shipment Tracking; no native label-creation plugin found | https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=parcelforce (0 relevant results) |
| DHL | "DHL Shipping Germany for WooCommerce" (official, but Germany/Europe scoped, not UK Express). Third-party DHL Express plugins also exist (a2z-dhl-express-shipping, elex-woo-dhl-express-shipping). | 4,000 (official, Germany-scoped); 100 to 200 (third-party UK-relevant options) | 4.0/5, 80% (47 ratings, official); 4.5 to 4.7/5 (third-party) | International carrier UK stores use for exports, not UK domestic default | Creates DHL Paket/Deutsche Post labels; third-party plugins add live rates, label printing, tracking emails, return labels | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=dhl-for-woocommerce |
| UPS | eCommerce Shipping Dashboard by UPS for WooCommerce (official). Third-party alternative: Shipping Live Rates and Access Points for UPS (Octolize). | 1,000 (official); 7,000 (third-party) | 3.5/5, 70% (6 ratings, official); 4.7/5 (77 ratings, third-party) | International carrier for EU/US exports, not UK domestic default | Official: order/shipment/label management, bulk label printing; third-party: live rates and access-point display only, no labels | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=ecommerce-shipping-dashboard-by-ups-for-woocommerce |
| Despatch Cloud (now Helm WMS) | No WordPress.org plugin. Company rebranded to Helm WMS (despatchcloud.com redirects there). WooCommerce is a listed native integration on helmwms.com. | not found (no WordPress.org listing) | not found | UK-founded WMS popular with UK multi-channel sellers | Confirmed bidirectional: orders sync in; stock/inventory syncs to prevent overselling; labels generated and tracking pushed back to WooCommerce | https://helmwms.com/integrations/woocommerce-integration |
| ShipTheory | No WordPress.org plugin. Homepage shows a WooCommerce logo among integrations but no dedicated WooCommerce landing page found (two attempted URLs 404'd). | not found | not found | UK-based multi-carrier shipping automation | Not independently verified beyond a logo mention | https://shiptheory.com/ |
| Starshipit | No WordPress.org plugin. Homepage lists WooCommerce among "100+ platforms and couriers" but no dedicated WooCommerce URL located. | not found | not found | Shipping automation used by some UK/ANZ multi-channel sellers | Not independently verified beyond a homepage mention | https://www.starshipit.com/ |

Context: WooCommerce's own native "WooCommerce Shipping" extension (70,000 installs, but only 2/5, 40%, 18 ratings) explicitly states it is "for US merchants," confirming Woo's own first-party label tool does not serve the UK, which is why UK sellers depend so heavily on the third parties above.

**Deal-breakers**
- **Royal Mail (Click & Drop or equivalent)**: if a store ships primarily via Royal Mail and the new platform can't bulk-print Royal Mail labels or sync tracking back into orders, fulfilment physically stops on day one. Royal Mail is the default/largest UK carrier with no lightweight workaround beyond manual CSV upload.
- **Tracking-sync capability (evidenced by Advanced Shipment Tracking's 70,000 installs, the single most-adopted shipping-related plugin found across this entire research)**: if the new platform can't get carrier tracking numbers into orders and out to customers by email/account page, a large share of migrating stores lose their entire post-purchase communication workflow immediately.
- **ShipStation (40,000+ installs, explicit UK market support)**: stores running their whole warehouse pick-pack-label process through ShipStation's dashboard cannot fulfil orders without an equivalent, since orders, labels and tracking all flow through it as the operational hub.
- **Sendcloud (6,000 installs)**: the only plugin found giving one install label access to Royal Mail, DPD, Evri, Parcelforce, DHL and UPS simultaneously; a store built around its multi-carrier label screen loses that single point of control without a replacement.
- **Despatch Cloud / Helm WMS**: for stores that have built warehouse-staff physical workflow (pick, pack, label print, dispatch) entirely inside this WMS with bidirectional sync, this is a deal-breaker at the operations level, not just the shipping-plugin level; replacing it means replacing the warehouse floor process itself.

**No WooCommerce connector at all**: Evri, Parcelforce, and DPD (UK-specific) have no dedicated plugin under any search term tried; direct site fetches for Royal Mail and Parcelforce also failed (403). ShipTheory and Starshipit have no WordPress.org plugin, only a logo mention on their homepages with no working dedicated integration page found.

---

## 3. 3PL and warehouse

| Service | WooCommerce plugin or connector | Active installs | Rating | UK relevance | What data flows and direction | Source URL |
|---|---|---|---|---|---|---|
| Mintsoft | No WordPress.org plugin. Hosted API connector, credentials entered inside Mintsoft's own dashboard. | not applicable, no WP.org listing | not applicable | UK-founded, UK-focused 3PL/WMS | Orders auto-pulled in; optional product catalogue import; live stock levels pushed back as despatched/received; dispatch confirmation and tracking synced back | https://www.mintsoft.com/integrations/shopping-carts/woocommerce/ |
| Huboo | No WordPress.org plugin. Hosted connector configured from Huboo's side. | not applicable, no WP.org listing | not applicable | UK-founded (Bristol), UK-focused 3PL. Note: 2024 administration/rescue-deal and a reported stock-loss dispute surfaced in research, worth flagging as vendor-risk context, not a connector issue. | Orders auto-pass in for pick/pack; product listings sync in; live inventory updates back out; dispatch status and tracking import back | https://huboo.com/fulfilment/integrations/woocommerce-fulfilment/ |
| ShipBob | No connector found anywhere: not on WordPress.org (only an unrelated "ShipBob Express Rates" plugin, 60 installs), not among ShipBob's 28 official partner integrations, not on ShipBob's own integrations page. | not found | not found | US-founded, has UK fulfilment centres, but no native WooCommerce integration found | No native connector found | https://partners.shipbob.com/ |
| Peoplevox | No WordPress.org plugin. WooCommerce appears only as a logo in a general "25+ Integrations" grid; no dedicated WooCommerce page exists (unlike Shopify, Magento, BigCommerce, NetSuite, Brightpearl, which all have dedicated pages). | not applicable | not applicable | UK-founded (London), now owned by Descartes Systems | Not documented; absence of a dedicated page suggests lighter-touch or custom/managed integration rather than self-serve | https://www.peoplevox.com/integrations/ |
| Unleashed | No WordPress.org plugin. Hosted connector via Unleashed's own App Marketplace. | not applicable | not applicable | NZ-founded (owned by Xero), widely used by UK stock-holding sellers | Real-time bidirectional: stock pushed out to WooCommerce; orders pulled in. Pricing tiered by monthly order volume (free 0-500 orders, up to £90/month for 5,001+). | https://www.unleashedsoftware.com/app-marketplace/woocommerce-inventory/ |
| StoreFeeder | No WordPress.org plugin. Hosted connector, "link your account with just a few clicks." | not applicable | not applicable | UK-founded (Wakefield), UK multichannel listing/fulfilment platform | Sales orders and shipping details sync in; inventory/stock and courier tracking sync out; accounting data exported to Xero/QuickBooks | https://storefeeder.com/ecommerce-platforms/woocommerce |
| Helm (WMS/3PL) | No WordPress.org plugin. WooCommerce listed as one of "650+ integrations" on Helm's own page, no technical detail given. | not applicable | not applicable | UK-based WMS/OMS (UK-specific references confirmed on site, e.g. Evri courier integration) | Not detailed by vendor beyond the listing; presumed hosted API connector following the same order-in/stock-and-tracking-out pattern as the others above, inference not confirmed | https://www.helmwms.com/integrations |

Note: Linnworks, Veeqo, Brightpearl and Cin7 also function as warehouse/3PL-adjacent tools; they are covered in full under section 4 (Inventory and order management), since that is their primary category.

**Deal-breakers**
- **Mintsoft**: if a store outsources all picking/packing to a 3PL running Mintsoft, orders stop reaching the warehouse the moment the connector breaks, so fulfilment halts immediately.
- **Huboo**: same mechanism, orders and stock only flow through the Huboo hosted connector; a broken migration cutover means the outsourced warehouse stops receiving orders and stock updates stop reflecting online, on top of the vendor-risk noted above.
- **Peoplevox**: stores running an in-house warehouse on Peoplevox WMS depend on the order feed for pick/pack instructions; if that feed breaks during migration, staff have no orders to work from. The thin/custom nature of its integration (versus a polished self-serve connector) arguably makes it more fragile to migrate, not less.
- **StoreFeeder**: usually the single despatch hub across every sales channel for a UK multichannel seller, not just WooCommerce; if the WooCommerce leg breaks, staff lose visibility of web orders inside the one tool they use to print labels and despatch, stalling web fulfilment specifically.
- **Helm**: if a store's whole fulfilment operation is centralised in Helm, losing the WooCommerce feed removes the store's only route for online orders to reach the warehouse queue.
- **ShipBob**: no native connector exists at all, meaning any UK store fulfilling through ShipBob is already relying on custom middleware or EDI; migration requires rebuilding that bespoke link, and losing it halts fulfilment exactly like Mintsoft/Huboo, with more migration risk since there's no standard connector to replicate.

**No WooCommerce connector at all**: ShipBob, confirmed across WordPress.org, ShipBob's own partner directory, and its integrations page.

---

## 4. Inventory and order management (including ERP)

| Service | WooCommerce plugin or connector | Active installs | Rating | UK relevance | What data flows and direction | Source URL |
|---|---|---|---|---|---|---|
| Linnworks | Linnworks Advanced (official, WooCommerce Marketplace). No WordPress.org plugin exists. | not shown (marketplace doesn't publish counts) | not shown | UK-founded (London); widely regarded as the dominant central stock hub for UK Amazon/eBay/Woo multichannel sellers | Orders auto-downloaded in; stock levels and prices pushed out; orders marked shipped with tracking/carrier pushed out. Bidirectional. | https://woocommerce.com/products/linnworks/ |
| Veeqo | Veeqo for WooCommerce (official, WordPress.org) | 800+ | 4.9/5, 98% (9 ratings) | UK-founded (Swansea); acquired by Amazon 2021, free tier tied to Amazon Buy Shipping makes it common among UK Amazon-plus-Woo sellers | Orders synced in; stock synced bidirectionally; shipping labels/tracking pushed out | https://wordpress.org/plugins/veeqo-for-woocommerce/ |
| Brightpearl | None found | n/a | n/a | UK-founded (Bristol), now part of Sage Group. Despite UK pedigree, WooCommerce is not a supported storefront. | No connector exists | Checked and confirmed absent: https://www.brightpearl.com/app-store , https://woocommerce.com/?s=brightpearl&post_type=product (no results) |
| Cin7 (Core/Omni) | Native Cin7-built connector, via Cin7's own partner page, not on WordPress.org or WooCommerce Marketplace | not found (not distributed through either marketplace) | not found | International (NZ-founded), no UK-specific adoption evidence found | Orders/customers imported in; stock synced bidirectionally across warehouses/3PLs; tax/payment terms mapped to accounting | https://cin7.partnerpage.io/integrations/woocommerce |
| Katana | Native Katana-built connector, via katanamrp.com, not on WordPress.org or WooCommerce Marketplace | not found | not found | International (Estonia-founded), manufacturing/MRP focus, no UK-specific evidence found | Orders imported in; stock synced bidirectionally to prevent overselling | https://katanamrp.com/integrations/woocommerce/ |
| Zoho Inventory | "Integration for WooCommerce and Zoho CRM, Books, Invoice, Inventory, Bigin" (CRM Perks, third-party) | 2,000+ | 5/5, 100% (83 ratings) | International (India-founded), budget-ERP positioning, some UK SME uptake but no UK-specific figures found | Orders pushed to Zoho Inventory; stock synced back; invoices generated in Zoho Books/Invoice | https://wordpress.org/plugins/woo-zoho/ |
| NetSuite | No WordPress.org plugin. Two paid third-party WooCommerce Marketplace connectors: NetSuite Integration (SoftXone, £261/yr) and NetSuite Integration for WooCommerce (TechMarbles, £298/yr) | not shown (marketplace doesn't publish counts) | TechMarbles 4.7/5 (50 reviews); SoftXone not shown | International (Oracle-owned), relevant at the top of the £250k-5m range for stores outgrowing Xero/QuickBooks | Automatic order, inventory and price sync, described as bidirectional and "OneWorld-ready" | https://woocommerce.com/products/netsuite-integration-for-woocommerce/ |
| Sage 200 | None found | n/a | n/a | Sage is a UK company (Newcastle); Sage 200 specifically targets UK/Ireland mid-market, a real gap for UK stores already on it. Only reachable via generic iPaaS middleware not Sage 200-certified. | No connector exists | Checked and confirmed absent: WordPress.org search for "sage 200" and WooCommerce Marketplace search, both no relevant match; sage.com fetch failed (403) |
| Business Central | None found | n/a | n/a | International (Microsoft), used by some larger UK SMEs, no dedicated WooCommerce path found | No connector exists | Checked and confirmed absent: WordPress.org and WooCommerce Marketplace searches, no relevant match; Microsoft AppSource fetch failed (403) |
| Odoo | Odoo Integration (OPMC, paid, WooCommerce Marketplace) and Odoo Integration for WooCommerce (erp7-solutions, WordPress.org, free) | not shown (marketplace); 30+ (WordPress.org) | 1.6/5 (15 reviews, marketplace, poor); 5/5, 100% (5 ratings, WordPress.org, tiny sample) | International (Belgium-founded), some cost-conscious UK SME uptake, but the low marketplace rating signals real integration pain | Connects orders/inventory, bidirectional per description | https://woocommerce.com/products/odoo-for-woocommerce/ |

**Deal-breakers**
- **Linnworks**: if a store sells on Amazon/eBay/Woo simultaneously through Linnworks as the central stock hub, losing that sync causes overselling and stockouts across every channel within hours. Migration cannot proceed without either a native connector or a replacement multichannel hub.
- **Veeqo**: for UK sellers on Veeqo's free Amazon Buy Shipping tier alongside Woo, losing the integration breaks both stock sync and discounted shipping label generation simultaneously, an immediate operational and cost change, not just a software swap.
- **NetSuite** (top of the revenue range, likely £2-5m stores): if NetSuite is system-of-record for finance and multi-channel inventory, losing sync breaks accounting reconciliation and stock accuracy enterprise-wide, not just on the storefront.
- **Sage 200**: for a UK store already running Sage 200 for accounts, the fact no working WooCommerce connector was found today means these stores are likely already relying on custom-built or manual bridges; migration has to preserve or rebuild that bridge or the store loses financial reconciliation entirely.

**No WooCommerce connector at all**: Brightpearl (confirmed absent from its own integrations page, its app store, and the WooCommerce Marketplace; built for Shopify, Magento, BigCommerce, Amazon, eBay and Walmart instead, despite being UK-founded). Sage 200 (confirmed absent everywhere checked). Business Central (confirmed absent everywhere checked, Microsoft AppSource blocked from direct verification).

---

## 5. Accounting

| Service | WooCommerce plugin or connector | Active installs | Rating | UK relevance | What data flows and direction | Source URL |
|---|---|---|---|---|---|---|
| Xero | Xero for WooCommerce (official, "Woo") | 10,000+ | 2.5/5 (17 reviews) | Very high, one of the two dominant UK small-business accounting platforms | Orders push to Xero on purchase (products, shipping, discounts, tax); payments sync to mark invoices paid. One-way store-to-Xero. | https://woocommerce.com/products/xero/ |
| Xero (alt.) | MyWorks Sync for WooCommerce and Xero | 900 | 100/100 (2 ratings) | Same as above | Orders, inventory, customers, payments; two-way product/inventory sync | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=myworks-sync-for-xero |
| QuickBooks Online | QuickBooks Sync by MyWorks | 10,000+ (marketplace); 5,000+ (WordPress.org variant) | 4.5/5 (15 reviews, marketplace); 94/100, 75 ratings (WordPress.org) | Moderate-high in UK, well behind Xero/FreeAgent | Orders as invoices/sales receipts/orders/estimates; payments and refunds; two-way customer sync; bidirectional stock; custom fields (tracking numbers, delivery dates) | https://woocommerce.com/products/quickbooks-sync-for-woocommerce/ |
| Sage Accounting (Business Cloud) | Not found. Only Sage-named marketplace hit is "Paya (formerly Sage Payments USA)," a payment gateway, not accounting sync. | not found | not found | Strong UK brand presence as a company, does not translate into plugin adoption | No connector exists | Searched: WordPress.org "sage business cloud" and "sage cloud accounting" (explicit 0 results), woocommerce.com search |
| Sage 50 (desktop) | Not found, confirmed no connector | not found | not found | N/A, no route into it exists | No data flow exists | Searched: WordPress.org "sage 50 accounts," "sage instant," woocommerce.com search |
| FreeAgent | FreeAgent Sync for WooCommerce | 100+ | 3/5 (5 reviews) | Very high relevance (NatWest-owned, given free to NatWest UK business banking customers, dominant among UK micro-businesses), but thin plugin adoption evidence | Creates FreeAgent invoices automatically from orders (one-way). Does not sync payments/subscriptions. Reviewer-flagged tax-rounding reconciliation bugs. | https://woocommerce.com/products/freeagent-for-woocommerce/ |
| A2X | No WooCommerce connector exists | not found (N/A) | N/A | N/A | A2X connects Amazon, Shopify, eBay, Etsy, Walmart, PayPal, to Xero/QuickBooks/Sage/NetSuite; WooCommerce absent everywhere on A2X's site | https://www.a2xaccounting.com/integrations |
| Link My Books | SaaS connector (no wp-admin plugin, API-based) | not applicable, no wp.org-style count | Platform-wide: 510+ Xero App Store reviews (5/5), 120+ QuickBooks reviews (5/5), 100+ Capterra reviews (4.9/5) | High, WooCommerce explicitly listed as one of 9 supported sales channels, syncs to Xero or QuickBooks only (not Sage) | Syncs WooCommerce payouts as summarised deposits into Xero/QuickBooks, with sales/refunds/fees/tax breakdown. One-way, store to ledger. | https://www.linkmybooks.com/ |
| MyWorks Sync | Multi-platform connector, separate WordPress.org plugins per target (see Xero, QuickBooks rows above) | Company-wide: 1,000,000 orders synced/month, 15,000+ users in 100+ countries | 5-star rated across Intuit App Store, Shopify, WordPress.org, G2, Capterra (vendor claim) | High for QuickBooks/Xero-connected UK stores | Orders, inventory, customers, payments, two-way | https://www.myworks.software/ (Sage not listed as a supported target) |

**Deal-breakers**
- **Xero**: if daily orders and payouts stop reconciling, the store's books break and VAT return prep becomes manual within one accounting period. Given Xero's UK small-business dominance, this is the single most likely genuine deal-breaker in this whole category.
- **FreeAgent**: UK micro-businesses, especially NatWest business banking customers who get it free, run their entire bookkeeping and VAT/Self Assessment prep through FreeAgent. Losing order-to-invoice sync forces manual invoice entry per order, workable at low volume but breaks down at higher order counts. Note the plugin's own adoption evidence is thin (100+ installs, 3/5), suggesting many FreeAgent-using stores already reconcile manually or via bank feed, which somewhat tempers the severity.
- **QuickBooks Online**: same reconciliation-breaks-books logic as Xero, lower severity given QuickBooks Online's smaller UK footprint relative to Xero and FreeAgent.

**No WooCommerce connector at all**: A2X (confirmed no WooCommerce support anywhere in its product; supports Amazon, Shopify, eBay, Etsy, Walmart and PayPal instead). Sage 50 (desktop, confirmed absent). Sage Accounting/Business Cloud (confirmed absent; the only Sage-named marketplace product is an unrelated payment gateway).

---

## 6. Tax

| Service | WooCommerce plugin or connector | Active installs | Rating | UK relevance | What data flows and direction | Source URL |
|---|---|---|---|---|---|---|
| Avalara (AvaTax) | Avalara for WooCommerce (official, WooCommerce Marketplace; not found on WordPress.org itself) | 60,000+ (marketplace listing) | 2.4/5 (63 reviews) | Low-moderate; marketing and reviews are heavily US sales-tax focused, VAT/GST claimed but with minimal dedicated UK/EU emphasis | Real-time tax calc at checkout, VAT/GST/duty computation, return prep and filing, exemption certificate management | https://woocommerce.com/products/woocommerce-avatax/ |
| TaxJar | TaxJar Sales Tax Automation for WooCommerce | 5,000+ | 52/100, 28 ratings (WordPress.org); 1.8/5, 4 reviews (marketplace) | Low; built around US/Canada sales tax (nexus tracking, state filing), not a UK VAT tool | Sales tax calculation, reporting, automated filing | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=taxjar-simplified-taxes-for-woocommerce |
| WooCommerce Tax (bundled baseline) | WooCommerce Tax, formerly WooCommerce Shipping & Tax | 500,000+ | 40% (105 ratings), poor | Moderate; default/bundled tax-rate calculator many stores start with, not VAT/OSS-specific | Calculates tax by location at checkout, no filing | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=woocommerce-services |
| EU/UK VAT Validation Manager for WooCommerce | Dedicated VAT-number validation plugin | 7,000+ | 96/100 (38 ratings) | High, explicitly named for EU/UK, uses VIES validation for B2B VAT exemption | Validates EU/UK VAT numbers via VIES at checkout, recalculates VAT, exempts qualifying B2B buyers | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=eu-vat-for-woocommerce |
| EU VAT Assistant for WooCommerce (Aelia) | VAT calculation, validation, reporting | 5,000+ | 100% (37 ratings) | High historically, but reached end-of-life 30 June 2022, no longer actively maintained (still functional for existing users) | Calculates VAT by customer location, validates via VIES, generates VAT reports | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=woocommerce-eu-vat-assistant |
| European VAT Compliance Assistant (SimbaHosting, UK vendor) | VAT/OSS compliance dashboard | 3,000+ | 96/100 (26 ratings) | High, UK-based vendor, explicitly covers EU, UK, Norway, Switzerland VAT | Identifies customer location, records audit evidence, displays correct VAT rate, currency conversion, generates VAT reports | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=woocommerce-eu-vat-compliance |
| One Stop Shop for WooCommerce | Dedicated EU OSS scheme compliance plugin | 10,000+ | 100/100 (5 ratings) | High for any UK store distance-selling B2C into the EU above the 10,000 euro threshold | Monitors EU distance-selling threshold, generates CSV OSS tax reports, auto-refreshes EU tax rates | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=one-stop-shop-woocommerce |
| Germanized for WooCommerce | Broader EU legal/VAT/OSS compliance suite, not UK-branded but widely used by EU-facing stores including UK ones | 70,000+, the highest-adoption VAT-adjacent plugin found | 96/100 (495 ratings) | High for UK stores selling B2C into the EU; less relevant for UK-domestic-only stores | VAT display rules, legal compliance texts, OSS-related tax handling | https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=eu%20vat |

**Deal-breakers**
- **One Stop Shop for WooCommerce / Germanized / EU VAT compliance plugins**: any UK store selling B2C into the EU above the OSS distance-selling threshold depends on these for quarterly OSS VAT return prep. Losing this breaks EU VAT filing, a regulatory filing dependency, not just an accounting nicety.
- **Not genuine deal-breakers**: TaxJar and Avalara are US sales-tax-focused with minimal evidence of dedicated UK VAT reliance; a UK-only store is unlikely to have its entire tax-filing workflow anchored to either.

**No WooCommerce connector at all**: none confirmed absent in this category; all listed tax tools have at least one working plugin or marketplace listing, though several (TaxJar, Avalara) are poorly rated and US-tax-oriented rather than UK-VAT-oriented.

---

## 7. Returns

| Service | WooCommerce plugin or connector | Active installs | Rating | UK relevance | What data flows and direction | Source URL |
|---|---|---|---|---|---|---|
| ReturnGO | No WordPress.org listing (native web-app model). Vendor's own integrations page confirms WooCommerce as a supported platform, described as native/direct. | not found (not on WordPress.org) | not found | Usable by UK stores; ReturnGO's carrier partner list includes Royal Mail, DHL Express, InPost UK and ZigZag for return labels | Order/return data flows between WooCommerce and ReturnGO for return-request management, exchanges, refunds; return labels via its carrier partners | https://returngo.ai/integrations/ |
| Loop Returns | No WordPress.org listing, no confirmed native WooCommerce support. Vendor: "Originally built for Shopify. Now available on all platforms," but WooCommerce not specifically named; other platforms need a "custom implementation, with slightly longer timelines." | not found | not found | Effectively unavailable off-the-shelf for WooCommerce, would require a bespoke build | No standard data flow exists today | https://www.loopreturns.com/ |
| ZigZag Global | No WordPress.org listing. Vendor homepage explicitly states WooCommerce is not supported: "Retailers connect directly via API or use our ready-made Shopify, BigCommerce and Magento cartridges." | not found | not found | No native WooCommerce route; relevant only indirectly, as a carrier/logistics partner inside ReturnGO's list for WooCommerce stores using ReturnGO | No native data flow into/out of WooCommerce | https://www.zigzag.global/ |
| Return Refund and Exchange For WooCommerce (WP Swings) | Generic RMA/returns plugin, the largest genuine match found | 4,000 | 4.7/5, 94% (123 ratings) | Largest generic RMA/returns plugin found for WooCommerce | Customers request refunds/exchanges/cancellations from My Account; admin manages workflow; no external carrier/label integration confirmed | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=woo-refund-and-exchange-lite |
| Shiptastic for WooCommerce | All-in-one shipping and fulfilment suite bundling returns handling with shipping/labels | 10,000 | 5.0/5 (4 ratings) | Has a companion "Shiptastic Integration for DHL" add-on (10,000 installs) for DHL return labels specifically | Shipments, tracking and returns managed together | https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=sendcloud |
| Flexible Refund for WooCommerce (EU One Click Return) | EU/UK consumer-rights-style cooling-off return requests | 2,000 | 3.5/5, 74% (3 ratings) | EU/UK statutory cooling-off period relevance | Customers request refund/return directly from My Account page | https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=returns+warranty+requests |

**Deal-breakers**: none of the returns tools evidenced here rise to a hard "orders stop shipping" or "books break" deal-breaker; the largest generic plugin (4,000 installs) shows returns handling is common but not a single-vendor-dependent workflow for most stores at this revenue band, unlike accounting or fulfilment. A store built specifically around ReturnGO for a branded returns portal would lose that customer-facing workflow on migration, which is a real but softer risk (reputational/CX, not operational halt).

**No WooCommerce connector at all**: Loop Returns (confirmed no native support, Shopify-first with only a bespoke custom-implementation path). ZigZag Global (explicitly confirmed no WooCommerce support by the vendor itself).

---

## 8. Fraud

| Service | WooCommerce plugin or connector | Active installs | Rating | UK relevance | What data flows and direction | Source URL |
|---|---|---|---|---|---|---|
| Stripe Radar | Not a standalone plugin; bundled inside the official "Stripe for WooCommerce" gateway | 700,000+ (host plugin's installs) | 3.1/5 (237 ratings, host plugin) | High wherever the Stripe gateway is used | Order/transaction data flows to Stripe for real-time risk scoring; risk score and block/allow decision flows back into the payment result on the order | https://woocommerce.com/products/stripe/ |
| Signifyd | No WooCommerce connector found. Signifyd's own platform-partners page lists Shopify Plus, BigCommerce, Adobe Commerce, Salesforce Commerce Cloud, NetSuite, Miva, VTEX, commercetools, Magazord and Lazer Technologies; WooCommerce absent. Only an unrelated, unofficial third-party plugin exists with 0 active installs. | 0 | not found | not found | No data flow, no connector | https://www.signifyd.com/partners/?_partner_type=platform-partner |
| NoFraud | No WooCommerce connector found. NoFraud has rebranded (nofraud.com 301-redirects to wyllo.ai). Wyllo's site lists Shopify, BigCommerce and Salesforce Commerce Cloud; WooCommerce not mentioned. WordPress.org search returns zero results. | 0 | not found | not found | No data flow, no connector | https://wyllo.ai/ |

**Deal-breakers**: none. Stripe Radar rides along automatically wherever the Stripe gateway itself is used, it is not an independent integration to migrate. Signifyd and NoFraud show zero WooCommerce adoption evidence, so there is no installed base at risk from either being unsupported.

**No WooCommerce connector at all**: Signifyd (confirmed absent from its own partner list). NoFraud/Wyllo (confirmed absent, rebranded company's integrations list omits WooCommerce entirely).

---

## 9. Automation

| Service | WooCommerce plugin or connector | Active installs | Rating | UK relevance | What data flows and direction | Source URL |
|---|---|---|---|---|---|---|
| Zapier | "Zapier for WordPress" (official) automates WordPress content only (posts, comments, users), not WooCommerce. Actual WooCommerce automation runs through Zapier's own hosted "WooCommerce" app via REST API keys, no plugin install required. | 50,000+ (WordPress-content plugin, not a WooCommerce-specific figure) | 2.2/5, 44% (72 ratings) | No UK-specific data; used broadly by UK SMEs as glue between Woo and everything else | Via Zapier's hosted WooCommerce app: triggers on new order/new customer, actions to create/update orders, update stock | https://wordpress.org/plugins/zapier/ |
| Make (formerly Integromat) | "Make Connector" (official) covers WordPress content only, same caveat as Zapier. Real WooCommerce automation runs through Make's own hosted WooCommerce module via REST API. | 70,000+ (WordPress-content plugin, not WooCommerce-specific) | 2.7/5, 54% (25 ratings) | No UK-specific data found | Via Make's hosted WooCommerce module: order/customer/stock triggers and actions | https://wordpress.org/plugins/integromat-connector/ |
| Uncanny Automator | Official, WordPress.org, runs inside WordPress itself with a native WooCommerce integration | 40,000+ | 4.9/5, 98% (157 ratings) | No UK-specific data, but genuinely WooCommerce-native (unlike Zapier/Make's WordPress plugins) | Triggers: purchases, cart adds, order status changes, refunds, stock/restock events, reviews. Actions: order notes, create orders/products, coupons, change prices, set order status. | https://wordpress.org/plugins/uncanny-automator/ |
| AutomatorWP | Official, WordPress.org, with a dedicated WooCommerce add-on, also native/in-WordPress | 7,000+ | 4.8/5, 96% (201 ratings) | No UK-specific data found | Triggers: purchases, purchase-total conditions, order status, reviews, cart ops, subscription events. Actions: coupon/membership management, order status/notes, price adjustments. | https://automatorwp.com/add-ons/woocommerce/ |

Interpretation note: for Zapier and Make, the WordPress.org install/rating figures are not a real signal of WooCommerce automation adoption, since the WordPress plugin and the WooCommerce integration are two separate things. A new platform needs to worry about whether Zapier/Make publish an app for it at all (an off-platform, vendor-side listing), not about matching a WordPress plugin equivalent.

**Deal-breakers**
- **Zapier/Make (automation-glue generally)**: because these run as external, invisible-to-the-storefront workflows built up piecemeal by whoever configured them, they are the hardest deal-breaker category to audit before migration. A store may not have a full list of what automations exist until they silently stop firing (low-stock Slack alerts, accounting sync, CRM updates), so the real risk is undiscovered breakage rather than an obvious one. If a store has automated order-to-fulfilment or order-to-accounting steps entirely through one of these, losing API access on migration silently breaks that workflow with no visible error until stock or books drift.

**No WooCommerce connector at all**: none, but flag that Zapier and Make's WordPress.org plugins are misleading proxies, the real dependency is their hosted app/API access, which is a platform-level requirement (REST API compatibility), not a plugin to replicate.

---

## 10. POS (physical shop)

| Service | WooCommerce plugin or connector | Active installs | Rating | UK relevance | What data flows and direction | Source URL |
|---|---|---|---|---|---|---|
| Square POS | WooCommerce Square (official, Square/Block) | 80,000+ | 2.1/5 raw (42/100: 82 one-star, 3 two-star, 6 three-star, 4 four-star, 26 five-star of 121 ratings) | US-founded, but heavily used by UK independent shops and market traders | Bidirectional: merchant designates system of record; product names, stock, pricing, categories, images sync both ways; stock updates after sales on either side; order fulfilment status syncs Square to WooCommerce (opt-in, added v5.0) | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=woocommerce-square |
| Lightspeed (Retail/X-Series, formerly Vend) | "Integrate WooCommerce with Lightspeed (Vend)" (third-party, not published by Lightspeed) | 40+ | 5.0/5 (5 ratings) | Lightspeed Retail widely used by UK independent retailers (fashion, garden centres, homeware) | Two-way inventory sync; product updates flow to WooCommerce; real-time order/customer data flows to Lightspeed. Free tier is manual/basic; paid tier adds automatic sync, variable products, register selection, loyalty points. | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=integrate-woocommerce-with-vend |
| SumUp | Only "SumUp Payment Gateway For WooCommerce" exists, an online payment gateway, not a POS/inventory sync tool. No dedicated SumUp-POS-to-WooCommerce stock-sync connector found (SumUp's own integration pages 404'd). | 10,000+ (payment-gateway plugin, not a POS sync figure) | 2.2/5 raw (44/100, 40 ratings); reviews cite connection failures and unresponsive support | SumUp is UK/London-headquartered and extremely popular with small UK shops and market stallholders, but the connector found only handles online card payments | Online payment processing only, no physical POS stock/inventory sync confirmed anywhere | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=sumup-payment-gateway-for-woocommerce |
| Epos Now | "Integration for Epos Now and WooCommerce" (Slynk, third-party, requires paid monthly Slynk subscription on top of both platforms) | 300 | no ratings yet | Epos Now is UK-founded (Norwich), widely used by UK independent retail and hospitality | Bidirectional, configurable master platform: product info, stock, customer details and orders/refunds sync both ways; till and kitchen-display notifications; multiple Epos Now locations can feed one WooCommerce site | https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=woo-epos-now-integration |
| Hike | No WordPress.org plugin. Native hosted connector inside Hike ("link your online store with Hike, customise your settings, that's it"). | not applicable, no WP.org listing | not applicable | NZ/Australian-founded cloud POS with smaller UK footprint than Square, SumUp or Epos Now, but used by some UK independent shops | Bidirectional inventory sync (full range or per-outlet); customer profiles sync both ways; WooCommerce orders sync immediately into Hike; unified in-store/online reporting. Free for active Hike subscribers. | https://www.hikeup.com/woocommerce-pos/ |

**Deal-breakers**
- **Epos Now / Square / Lightspeed / Hike (in-store POS, where the till is the master stock record)**: a broken sync means online and in-store stock counts silently diverge, causing overselling online or phantom stock in-store. This is a serious operational and reputational risk, but staff can usually still ring up in-store sales manually, so it is a softer blocker than a pure-3PL dependency, not an outright halt, but real financial/reputational damage accrues fast.

**No WooCommerce connector at all**: SumUp POS-to-stock sync (no dedicated connector exists to sync a physical SumUp till's stock with WooCommerce today; only the unrelated online payment-gateway plugin exists).

---

## 11. B2B and wholesale

| Service | WooCommerce plugin or connector | Active installs | Rating | UK relevance | What data flows and direction | Source URL |
|---|---|---|---|---|---|---|
| Wholesale Suite (WooCommerce Wholesale Prices) | Official, WordPress.org, requires WooCommerce | 20,000+ | 4.8/5, 96% (546 ratings) | Highest-installed, highest-review-count dedicated B2B/wholesale plugin found; closest match to "WooCommerce Wholesale Pro" named in the brief | Wholesale user role and role-based pricing stored in WooCommerce; premium add-ons add a dedicated wholesale order form and lead-capture registration. No external sync, all data lives inside WooCommerce. | https://wordpress.org/plugins/woocommerce-wholesale-prices/ |
| B2BKing | Official, WordPress.org | 10,000+ | 4.9/5, 98% (108 ratings) | Second-largest dedicated B2B/wholesale plugin found | Role/group/tag-based wholesale pricing, minimum order quantity/value rules, VAT exemption for B2B, private/hidden catalog, custom B2B registration with approval workflow, quote requests, net payment terms. All inside WooCommerce. | https://wordpress.org/plugins/b2bking-wholesale-for-woocommerce/ |
| Whols | Wholesale Prices and B2B Store Solution | 3,000+ | 5/5, 100% (14 ratings) | Smaller but well-rated alternative | Wholesale pricing and B2B store/registration inside WooCommerce | https://wordpress.org/plugins/whols/ |
| Tiered Pricing Table for WooCommerce | Quantity-based tiered/bulk pricing display, common companion to full B2B suites | 10,000+ | 4.7/5, 94% (103 ratings) | Widely used for quantity-break pricing, a core B2B mechanic | Quantity-tier discount rules and display table, stored inside WooCommerce product meta | https://wordpress.org/plugins/tier-pricing-table/ |

Note: "WooCommerce Wholesale Pro" as a distinct named product was not found under that exact name on WordPress.org or the WooCommerce Marketplace; Wholesale Suite is the plugin that best matches that description and is the dominant player by both installs and review count.

**Deal-breakers**
- **B2BKing / Wholesale Suite (and equivalents)**: wholesale customers' negotiated tiered pricing, minimum order quantities, VAT exemption status, and approval-gated registration are all stored as WooCommerce data. If the new platform can't reproduce this model exactly, every B2B account's pricing and ordering breaks on day one of migration, a silent but severe risk for a nominally B2C platform that still serves B2B side-channels.

**No WooCommerce connector at all**: none in this category, all major B2B/wholesale plugins surveyed have live, well-rated WordPress.org listings.

---

## Ranked "must-have" list

### Tier 1: nearly every UK store in this band needs it

- **A card/wallet payment gateway, specifically Stripe and/or WooPayments and/or PayPal Payments.** Evidence: 700,000+, 800,000+, and 800,000+ active installs respectively, the three highest install counts found in this entire research project. At least one is present on essentially every UK WooCommerce store; without gateway continuity, checkout stops on day one.
- **Carrier tracking sync into orders (the functional role played by "Advanced Shipment Tracking for WooCommerce," 70,000 installs).** Evidence: highest-adoption shipping-related plugin found; every physical-goods store needs tracking numbers to reach customers regardless of which UK carrier they use.
- **Xero (or equivalent order-to-ledger accounting sync).** Evidence: thinner direct install count (10,000+) than payments/shipping, but UK small-business accounting is dominated by Xero and FreeAgent; a store cannot operate without books reconciling, so this is must-have even where plugin adoption looks modest, likely because many stores reconcile via bank feed rather than a dedicated plugin today, which the new platform should account for rather than dismiss.
- **REST API access sufficient for Zapier/Make hosted apps.** Evidence: not a plugin-install number but a structural requirement; both tools connect via API, not a WordPress plugin, so "native support" here means API compatibility, not building a Zapier clone. Given how many undocumented store workflows likely run through these, losing API access risks silent operational breakage across every other category.

### Tier 2: common, especially as a store scales through this revenue band

- **Klarna and/or Clearpay (BNPL)**: 20,000+ and low-thousands installs respectively, but high impact on conversion for higher-AOV physical goods; also confirmed available UK-side through Stripe directly, so may not need a standalone connector if Stripe is supported.
- **ShipStation (40,000+) or Sendcloud (6,000+)**: for stores that have outgrown carrier-direct portals and centralised multi-carrier label printing.
- **Linnworks or Veeqo**: for any multichannel seller (Amazon/eBay plus Woo), a central stock hub becomes necessary well before £250k-5m in revenue; UK-founded, dominant in this segment.
- **GoCardless**: wherever a store runs Direct Debit subscriptions on physical goods (subscription boxes etc), this is the sole rail.
- **A 3PL connector (Mintsoft, Huboo, StoreFeeder, or Helm)**: common once a store outsources fulfilment, which many stores in the upper half of this revenue band do.
- **Square or SumUp**: for the meaningful share of these stores that also run a physical shop or market stall alongside online.
- **B2BKing or Wholesale Suite**: for stores with any wholesale/trade side-channel, common but not universal at this size.
- **EU VAT/OSS compliance plugin (One Stop Shop, Germanized, or SimbaHosting's tool)**: for any store distance-selling into the EU above the OSS threshold, a regulatory requirement, not optional, but only applies to stores selling cross-border.
- **QuickBooks Online**: real UK presence but clearly secondary to Xero/FreeAgent by adoption signal.

### Tier 3: niche, relevant to a specific subset only

- **Amazon Pay, Revolut, Viva Wallet**: real but modest install counts (7,000 to 10,000), relevant to specific merchant profiles rather than the median store.
- **NetSuite, Cin7, Katana, Zoho Inventory, Odoo**: enterprise/mid-market ERP options relevant mainly at the very top of the £2m-5m range or for manufacturing-adjacent sellers; none show strong UK-specific adoption evidence.
- **A2X, Link My Books**: relevant specifically to multichannel sellers reconciling Amazon-plus-Woo payouts together; niche but valuable where present. Note A2X itself has no WooCommerce connector at all.
- **Signifyd, NoFraud**: zero WooCommerce adoption evidence found; effectively irrelevant to this platform's roadmap today. Stripe Radar covers most of this need for stores already on Stripe.
- **ShipTheory, Starshipit, Parcel2Go**: small confirmed footprints (100 installs or no WordPress.org presence at all).
- **Opayo/Sage Pay, Worldpay**: legacy UK gateways with negligible-to-zero current native WooCommerce adoption; not meaningful day-one blockers for the platform roadmap, though any store still on them is effectively already forced to re-platform its payment gateway regardless of destination.
- **Lightspeed, Hike (POS)**: small confirmed install/usage footprints relative to Square, SumUp and Epos Now.
- **ReturnGO and dedicated returns portals**: valuable for CX but not evidenced as a majority behaviour; most stores appear to handle returns via a generic in-WooCommerce RMA plugin (4,000 installs) rather than a dedicated returns platform.

## Flagged: confirmed no WooCommerce connector at all

- **Sage 50** (desktop accounting)
- **Sage Accounting / Sage Business Cloud**
- **Sage 200** (mid-market ERP)
- **Microsoft Dynamics 365 Business Central**
- **Brightpearl** (despite being UK-founded and now Sage-owned, it does not support WooCommerce as a sales channel)
- **A2X**
- **Worldpay** (WooCommerce.com extension explicitly discontinued)
- **Opayo / Sage Pay** (only unofficial plugins under 100 installs each, effectively no supported connector)
- **Signifyd**
- **NoFraud** (rebranded Wyllo)
- **ShipBob**
- **Loop Returns**
- **ZigZag Global**
- **Evri, Parcelforce, DPD (UK)**: no dedicated plugin found under any tested name; reachable only through aggregator/tracking plugins, not a direct native connector
- **ShipTheory, Starshipit**: no WordPress.org plugin and no confirmed dedicated WooCommerce integration page
- **SumUp**: no POS-to-stock sync connector exists (only an unrelated online payment gateway plugin)

## Sources not fetched successfully

A small number of vendor pages could not be verified directly and are flagged in the relevant table rows above rather than silently omitted: royalmail.com and parcelforce.com (403 Forbidden), sage.com/en-gb/sage-200 (403 Forbidden), Microsoft AppSource (403 Forbidden), evri.com (content inaccessible via fetch). Where this happened, adoption was instead inferred from third-party plugins that name the carrier/vendor as a supported option, and this is noted in each case.
