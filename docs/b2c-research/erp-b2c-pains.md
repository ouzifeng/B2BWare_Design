# ERP + consumer web shop: what goes wrong, in the buyer's own words

Research date: 8 October 2026. Scope: businesses that run an ERP and also sell to consumers through a web shop, and what breaks between the two.

## How to read this

- Every quote is verbatim, with source URL and date. Quotes dated before 1 January 2023 are marked **[pre-2023]**.
- Tags: **ERP / shop platform** where the source names them. "n/s" means not stated.
- Reddit text was pulled from the Arctic Shift Reddit archive (reddit.com itself blocks our fetcher), so Reddit quotes are exact character copies. Reddit links use the standard thread URL; comments are credited by username.
- Review-site and forum quotes (Shopify App Store, WooCommerce.com, Trustpilot, Dynamics Community, Acumatica Community, Shopify Community) were captured through a fetch tool that summarises pages. I asked for verbatim text and kept only text that came back in quotation marks, but **spot-check these against the live page before putting any of them on a slide.**
- Caution on 2026 Reddit: many threads are full of vendor plugs and comments that read as AI-written. I have preferred original posters and clearly first-person operators, and flagged vendor voices as **(vendor)**.
- Bias note: Business Central has the most quotes because Microsoft's free connector has a public Shopify review page. Per the brief I have spread evidence across NetSuite, Odoo, SAP Business One, Sage 50, Acumatica, Epicor, Exact Online, Shopware and others.

---

## 1. Orders that never arrive, arrive broken, or get retyped by hand

> "Honestly our warehouse usually tells us when a customer calls asking why their stuff hasn't shipped yet."
u/Different_Pain5781, r/Netsuite, 2026-10-07. **NetSuite / Shopify.** https://www.reddit.com/r/Netsuite/comments/1wzv6a3/

> "Then when you get your Shopify Payout, you should be reconciling these - if the SO doesn't exist, that's a big red flag. So, three checks, but if you need that last one, your customer is already pretty peeved"
u/gforce360 (implementer), same thread, 2026-10-07. **NetSuite / Shopify.**

> "We run a daily saved search in Shopify for orders created yesterday then cross check against NetSuite with a simple script, not elegant but catches most drops"
u/thetaboocivility, same thread, 2026-10-07. **NetSuite / Shopify.**

> "Product sync from NetSuite → WooCommerce works. WooCommerce orders appear in FarApp. However, orders are not getting created in NetSuite. No obvious errors are shown in FarApp."
u/Used-Selection-1183, r/woocommerce, 2026-06-14. **NetSuite / WooCommerce (FarApp connector).** https://www.reddit.com/r/woocommerce/comments/1u5hjp3/

> "havent touched farapp but ive been burned enough by connectors silently dropping orders to know the shape of this."
u/JFerzt, same thread, 2026-06-15.

> "after the recent product synchronization, Business Central is no longer mapping the products correctly. We are still receiving orders; however, they come through without SKUs, only product titles. As a result, sales orders are not being created automatically. What's more, the system is not showing any errors in the log entries ... we've reached a dead end and had to manually map all 600 SKUs, which is extremely time-consuming and frustrating."
Lipnus (Lithuania), 1 star, Shopify App Store review of the Dynamics 365 Business Central connector, 2026-03-30. **Business Central / Shopify.** https://apps.shopify.com/dynamics-365-business-central/reviews
(One em dash in the original review has been replaced with a comma, per house style.)

> "When the Sync Shipment to Shopify report runs, there is no error handling"
Ginger Frog, Dynamics Community thread "Business Central -> Shopify fulfillment integration" (date not shown on fetched page). **Business Central / Shopify.** https://community.dynamics.com/forums/thread/details/?threadid=3bda3691-f705-4fa9-9477-0d7ded2bd63d

> "We have an outgoing issue within our Shopify connector, where the customer is not synchronized when the sales order is being created, causing the sales order to fail ... this happens randomly to some orders, not all of them."
RubenM, Acumatica Community, 2024-08-13. **Acumatica / Shopify.** https://community.acumatica.com/retail-113/customer-from-shopify-not-synchronized-causes-sales-order-to-fail-25707

> "Intermittently skipped orders, duplicate orders, orders stuck in logs" (summary line returned by fetch tool, not a confirmed quote) ... "TRASH TRASH TRASH. I cannot say enough bad things about my experience the last 6 weeks. Bug after bug found."
Pro Cabinet Supply (US), 1 star, Shopify App Store review of Robust NetSuite Integrator, 2025-05-09. **NetSuite / Shopify.** https://apps.shopify.com/netsuite-integrator/reviews

> "I have been trying for years to find an integration for my orders from Shopify to flow into sage 50. It seems ridiculous to get an order and then have to manually key it into sage50. I would also want inventory to mesh."
u/aces5five, r/sage50, 2024-01-10. **Sage 50 / Shopify.** https://www.reddit.com/r/sage50/comments/192zp68/

> "I was often the one keying in Shopify order data into our Sage 50, as our business grew I was spending more and more time copy pasting information"
Jonathan ezApps, Sage Community Hub, "over 1 year ago" (exact date not shown). **(vendor: later built a connector, describing his own shop's prior pain.)** **Sage 50 / Shopify.** https://communityhub.sage.com/ca/sage_50/f/general-discussion/248451/shopify-x-sage-50-integration

> "It just does not work well for Odoo Online. The orders do not pull through correctly."
Fenton Birch (UK), 1 star, WooCommerce.com review of Odoo Integration for WooCommerce, 2024-05-07. **Odoo / WooCommerce.** https://woocommerce.com/products/odoo-for-woocommerce/

> "Veel ondernemers willen de operationele tools van Odoo gebruiken zonder hun boekhouding in Exact op te geven, maar die twee overbruggen betekende tot nu toe veel manueel overtikken of een dure connector tussen beide systemen."
(Translation: "Many business owners want Odoo's operational tools without giving up their books in Exact, but bridging the two has until now meant a lot of manual retyping or an expensive connector.")
r/ExactOnline, 2026-08-31. **(vendor: connector builder.)** **Exact Online + Odoo, webshop/POS.** https://www.reddit.com/r/ExactOnline/comments/1w3qcv9/

> "Our hands are tied with Eagle because there is no API we can tie into."
u/dancingcheesepuff, r/Epicor, 2026-09-30. **Epicor Eagle / Shopify (planned).** https://www.reddit.com/r/Epicor/comments/1wu8lvw/

## 2. Stock wrong, oversold, or not trusted

> "On some products with zero (0) in stock, nothing inbound, it displays 55 in Shopify on one item, and 22 on another."
DRutstrom, Shopify Community, 2024-03-15. **Business Central / Shopify.** https://community.shopify.com/t/business-central-shopify-connector-inventory-issues/305747

> "Inventory syncing is also inconvenient and extremely unreliable. I set up a Job Queue Entry to automatically sync inventory, and it simply does not work consistently. Some items update correctly while others do not, which makes the entire system difficult to trust."
New York Cosmetics (US), 1 star, Shopify App Store, 2026-09-11. **Business Central / Shopify.** https://apps.shopify.com/dynamics-365-business-central/reviews

> "The issue happens when sales are flooding into Shopify, but orders are not getting into Acumatica fast enough...Acumatica 'thinks' that it has 97 items available, so it pushes 97 to Shopify, overriding the correct '90.'"
Yuri Karpenko (community MVP, answering), Acumatica Community, 2025-09-17. Original poster: "We are running Acumatica 2025 and Shopify Advanced with the standard Acumatica<>Shopify connector and are experiencing a lot of issues." **Acumatica / Shopify.** https://community.acumatica.com/retail-113/acumatica-and-shopify-integration-issues-32415

> "Customer ordered a bundle / Shopify said in stock / Warehouse said missing 2 units / Amazon inventory was somehow different too / Then support had to email the customer because the order got stuck for 3 days."
u/(OP), r/ecommerce, "ERP for Shopify. Are we overthinking this or actually too late?", 2026-05-24. **ERP under evaluation (NetSuite, Fulfil, Brightpearl) / Shopify + Amazon.** https://www.reddit.com/r/ecommerce/comments/1tmj2qw/

> "For us the B2C on Magento and B2B on the ERP model worked, but the first thing that broke was inventory sync"
u/AppropriateReach7854, r/ERP, 2025-11-16. **ERP n/s (thread is SAP Business One) / Magento.** https://www.reddit.com/r/ERP/comments/1oo2xau/

> "We have a python script that that reads our SAP Inventory from SQL (OITW table) ... The CSV is then uploaded to our e-commerce platform via an automation (Shopify) We do this 3 x daily, we have 20,000 SKUs"
u/XSnetAUS, r/SAPBusinessOne, 2026-04-16. **SAP Business One / Shopify.** https://www.reddit.com/r/SAPBusinessOne/comments/1smkpmt/

> "In WooCommerce, there seems to be only one number, which is reduced immediately when the order is confirmed. My colleague who manages the inventory is not happy with this"
u/(OP), r/woocommerce, 2026-10-06, after moving from Shopware 5 with its ERP plugin. **Shopware ERP plugin, then WooCommerce + Germanized.** https://www.reddit.com/r/woocommerce/comments/1wyy759/

> "The app doesn't import stocks from Shopify to Odoo so it's useless for us."
WeCo Store (Belgium), 1 star, Shopify App Store review of Webkul Odoo Connector, 2020-12-17 **[pre-2023]**. **Odoo / Shopify.** https://apps.shopify.com/reviews/674190

## 3. Prices, tax, discounts and promotions not matching

> "It's impossible for us to run the business if the price list for the variants don't show correctly on the ecommerce so I'm looking for an alternative ERP."
u/Eikido, r/ERP, 2023-12-02. **Odoo / Odoo eCommerce (was weighing WooCommerce).** https://www.reddit.com/r/ERP/comments/188nuok/

> "I am absolutely stunned at this."
u/Eikido, r/Odoo, 2023-11-30, on the shop grid showing template prices instead of price-list prices in multi-currency. **Odoo / Odoo eCommerce.** https://www.reddit.com/r/Odoo/comments/187gq5y/

> "I just find it dumb if this is how it behaves since for the most part, all of the new visitors are "guests" and I don't want to show them a price that's wrong."
u/Loose-Donkey3265, r/Odoo, 2026-10-04 (guest visitors saw prices without tax). **Odoo Online / Odoo eCommerce.** https://www.reddit.com/r/Odoo/comments/1wx36yg/

> "Prices are including vat, but creating the BC sales order vat is calculated and also with the wrong Country-VAT, that is set in the template."
Mein Shop (Germany), 1 star, Shopify App Store, 2024-08-23. **Business Central / Shopify.** https://apps.shopify.com/dynamics-365-business-central/reviews?page=2

> "Trash. Especially reconciliation, and even more so when dealing with orders(sales orders) where there are multiples of the same item and discount is present on one of them"
Fruits-Passion (Canada), 1 star, Shopify App Store, 2026-05-22. **Business Central / Shopify.** https://apps.shopify.com/dynamics-365-business-central/reviews

> "we collect taxes (price excluding VAT) and duties at the checkout, but they are not syncing to sales orders in the Business Central"
Pacsafe APAC Store (Hong Kong), 1 star, Shopify App Store, 2024-06-03. **Business Central (refers to NAV) / Shopify.**

> "All orders are imported in the Store base currency, which doesn't work out when we sell globally"
DRutstrom, Shopify Community, 2024-09-07; still unresolved for another user on 2025-01-28: "We are currently struggling with the currency issue as well." **Business Central / Shopify.** https://community.shopify.com/t/business-central-shopify-connector-inventory-issues/305747

> "When the order in shopify store has discount it sync successfully but after a minute or two it will add additional discount line that causes this error. We dont have any custom mapping we just using the native connector."
FrankieDC, Acumatica Community, 2025-10-27. **Acumatica 2024 R1 / Shopify.** https://community.acumatica.com/retail-113/line-discount-error-shopify-and-acumatica-sync-32977

> "This is not a real Shopify–Odoo integration. It does not synchronize pricing properly, does not respect Odoo's core structures"
Kieran Sant (Malta), 1 star, Trustpilot review of Emipro, 2026-01-09. **Odoo / Shopify.** https://www.trustpilot.com/review/emiprotechnologies.com

> "The first thing that breaks? Shared customers, shared SKUs, and shared promotions. If you're using the same product catalog across B2B and B2C, you'll end up chasing sync bugs and pricing mismatches unless you define exactly which system owns what"
u/Ok_Orange_7439, r/ERP, 2025-11-12. **SAP Business One (B2B) / Magento (B2C).** https://www.reddit.com/r/ERP/comments/1oo2xau/

## 4. Product data, variants, kits and mapping

> "Synch of products that have two sets of variants (color and size, for example) require inverting temporarily the synch from Shopify to BC to get the nested values in and then manually mapping the product variants"
Blue Ice (France), 5 stars, Shopify App Store, 2024-10-02. **Business Central / Shopify.**

> "Hopeless ... I cannot even get it to import the item list properly. I had expected a lot more from this integration, I cannot even simply delete a load of items its imported, no vendor names etc etc."
Rococo Jewellery (UK), 1 star, Shopify App Store, 2023-08-30. **Business Central (moving from Xero) / Shopify.**

> "I'm trying to click on sync prices and sync inventory from business central but its not updating inventory and prices in shopify."
DynamicsBC, Dynamics Community (date not shown). Answer given: items first created in Shopify make Shopify the master, so BC will not push back. **Business Central / Shopify.** https://community.dynamics.com/forums/thread/details/?threadid=dde32481-9adc-f011-8544-000d3a110039

> "Will this work even though the skus have different numbers? For instance we have an inventory item for one pair of gloves and then a kit for the box of 10. Will inventory change according to each sku?"
u/ISOcarpetcleaner, r/Netsuite, 2026-09-24. **NetSuite / Shopify.** https://www.reddit.com/r/Netsuite/comments/1wborgd/

> "there are some downsides, like BOM handling and syncing lead times (for out of stock items) doesn't work out-of-the-box."
Workdeco (Sweden), 5 stars, Shopify App Store, 2026-05-11. **Business Central / Shopify.**

> "Muffin A, single. Muffin A, 4-pack. Muffin A, 6-pack. Muffin B, single. Muffin B, 4-pack, Muffin C, 6-pack. Rinse and repeat for all 20 menu items."
u/Human_Net893, r/Odoo, 2026-08-10. **Odoo Online / Odoo eCommerce.** https://www.reddit.com/r/Odoo/comments/1vk72rn/

> "Also most e-commerce solutions are not built for ERP imports ... So a lot of people say screw this and either let the e-commerce software write into their ERP or I have seen some who even manage both systems separately, manually. That one was the worst and they had data inconsistencies all the time."
u/Puggymon, r/ERP, 2023-09-25. **n/s.** https://www.reddit.com/r/ERP/comments/16rln55/

## 5. Sync breaks after an update, a plan change or a migration

> "Segunda vez que en Business Central me indica que el concetro debe ser actualizado en Shopify y no existe ninguna opcion para actualizar. Cada vez que se actualice debere desinstalar la aplicacion y volver a instalarla?"
(Translation: "Second time Business Central tells me the connector must be updated in Shopify and there is no option to update. Every time it updates, will I have to uninstall and reinstall the app?")
El Cafetero (Chile), 1 star, Shopify App Store, 2025-01-08. **Business Central / Shopify.**

> "Hasta ahora no habíamos tenido problemas con la APP, pero tras realizar un downgrade de licencia en Shopify, la APP ha dejado de funcionar correctamente"
(Translation: "Until now we had no problems, but after downgrading our Shopify plan the app stopped working properly.")
Netun Solutions (Spain), 1 star, Shopify App Store, 2026-05-12. **Business Central / Shopify.**

> "The second you need a small tweak or a module breaks after an update, you're either stuck debugging python logs at 2 AM or paying an odoo partner 150 EUR/hour to fix it."
u/Square-Nebula-7530, r/ecommerce, 2026-08-10. **Odoo / Shopify (thread context).** https://www.reddit.com/r/ecommerce/comments/1u7fg5q/

> "Editing qweb directly is not the right method either because the next automated update would just wipe out your changes and you are back to square one."
u/codeagency (Odoo partner), r/Odoo, 2026-08-10. **Odoo / Odoo eCommerce.** https://www.reddit.com/r/Odoo/comments/1vk72rn/

> "Those commits outside of the ORM had one of our clients end up with 100's of stock pickings without sale order records some time ago."
u/jampola, r/Odoo, 2026-07-28, about a third-party connector. **Odoo / Shopify.** https://www.reddit.com/r/Odoo/comments/1v8tj44/

> "We are running Business Central v20 On-Premises and need to integrate it with Shopify. I know Microsoft's native Shopify Connector is only available for BC SaaS, so we can't use it directly."
u/(OP), r/Dynamics365, 2025-09-11. **Business Central on-prem / Shopify.** https://www.reddit.com/r/Dynamics365/comments/1ne1gtv/

> "Took me one month to write SQL queries to export data in a format that could be imported in Odoo on d-day."
u/Ezhaeu, r/Odoo, 2026-09-17, on migrating from Magento to Odoo. **Odoo / Magento.** https://www.reddit.com/r/Odoo/comments/1wg2mng/

> "For like 10k upgrade costs"
u/dancingcheesepuff, r/Epicor, 2026-10-01, on being pushed from Epicor Eagle to Propello. **Epicor.** https://www.reddit.com/r/Epicor/comments/1wu8lvw/

## 6. Payments, refunds and month-end reconciliation by hand

> "Celigo shows an error for any orders that failed to import. Our deposits won't match if missing an order."
u/Kastnerd, r/Netsuite, 2026-10-07. **NetSuite / Shopify (Celigo).** https://www.reddit.com/r/Netsuite/comments/1wzv6a3/

> "If Xero is hooked to Magento and SAP handles wholesale invoicing, you'll need some kind of reconciliation layer to tie cash and AR together - or else someone's month-end is going to be hell."
u/Ok_Orange_7439, r/ERP, 2025-11-12. **SAP Business One + Xero / Magento.** https://www.reddit.com/r/ERP/comments/1oo2xau/

> "And then at quarter and year-end, the finance and accounting teams spend a month on reconciliation, fixing data, etc. AR/AP is way behind. Quote to cash is a mess. Inventory and financials never match so someone manually overrides."
u/leaf16_ah, r/ERP, 2026-03-24. **n/s.** https://www.reddit.com/r/ERP/comments/1s1ee6r/

> "Currently I use Shopify and Amazon with multiple third-party tools and services to manage everything. This causes a lot of manual work to import/export everything, reconcile books and inventory and to manage inventory levels and POs."
u/summer_glau08, r/ecommerce, 2026-06-16. **No ERP yet (weighing Odoo) / Shopify.** https://www.reddit.com/r/ecommerce/comments/1u7fg5q/

> "We had an extremely disappointing experience with Robust NetSuite Integrator."
Fushi Wellbeing (UK), 1 star, Shopify App Store, 2025-02-17. The fetch tool summarised the rest as system failures that "caused an HMRC audit due to incorrect data". That part is a summary, not a confirmed quote: check the live review before using it. **NetSuite / Shopify.** https://apps.shopify.com/netsuite-integrator/reviews

## 7. Support gaps, over-selling by vendors, and blame

> "Garbage company, there are constantly bugs and breaks in their software. Not little stuff either, sometimes the basic syncing functionality just stops working for a day or more."
Green Building Supply (US), 1 star, Shopify App Store, 2026-06-15. **NetSuite / Shopify.** https://apps.shopify.com/netsuite-integrator/reviews

> "I shelled out the money for Odoo BECAUSE she sold me on the website and ecommerce integration, confirming multiple, multiple, MULTIPLE times throughout the (recorded!) video demo that it would absolutely, 100% work for what I needed."
u/Human_Net893, r/Odoo, 2026-08-10. **Odoo Online / Odoo eCommerce.** https://www.reddit.com/r/Odoo/comments/1vk72rn/

> "Epicor is being VERY shady and not responding to our emails and dodging questions."
u/dancingcheesepuff, r/Epicor, 2026-09-30. **Epicor Eagle.**

> "had a bad experience with an e-commerce competitor that said they knew SAP and never went live."
u/Comprehensive-Bass56, r/SAPBusinessOne, 2026-04-09. **SAP Business One.** https://www.reddit.com/r/SAPBusinessOne/comments/1sg3cdb/

> "I would definitely not recommend to use this platform to integrate Shopify order in ODOO."
Dan Witting (Switzerland), 1 star, Trustpilot (Emipro), 2022-09-29 **[pre-2023]**. **Odoo / Shopify.**

> "We bought the ksolve shopify connector under the impression it supported draft orders. It sucks. Badly. We spent ages modifying it to be usable."
u/Morgjames, r/Odoo, 2026-07-29. **Odoo / Shopify.** https://www.reddit.com/r/Odoo/comments/1v8tj44/

Blame between connector vendor and shop vendor: I found no first-hand buyer quote that describes the two vendors blaming each other. The nearest evidence is the BC answer above ("Shopify is treated as the master") and the FarApp thread where no party's log shows an error. The finger-pointing line that appears in search results comes from an agency article, not a buyer. Treat this theme as unproven.

## 8. Cost and effort

> "Is there a cheap or free plugin that improves on this? We are small and business is not going well right now, so a full ERP solution that costs hundreds of Euros a month is not an option for us right now."
u/(OP), r/woocommerce, 2026-10-06. **Shopware ERP plugin, now WooCommerce.** https://www.reddit.com/r/woocommerce/comments/1wyy759/

> "4000 usd / month / user for Dynamics 365 Ecommerce is quiet steep"
u/Eikido, r/Dynamics365, 2024-11-15 (figure as stated by the commenter, not verified). **Dynamics 365 Commerce.** https://www.reddit.com/r/Dynamics365/comments/1gs07ql/

> "Honestly ask AI to make a connector for you. I would not buy. Not even remotely worth 500 the connector."
u/Mr-Flow-, r/Odoo, 2026-07-29. **Odoo / Shopify.**

> "I'm using odoo and the integration is very time consuming."
u/Prudent_Elderberry88, r/ERP, 2023-12-02. **Odoo / WooCommerce.**

> "Every order placed online had to be manually re-entered into our ERP. Sounds manageable until you are doing 200+ orders a day. One persons entire job was copy pasting data between two systems"
r/ecommerce, 2026-05-22. **(vendor-style post that ends by naming i95Dev; treat as promotional.)** https://www.reddit.com/r/ecommerce/comments/1tkfpr6/

## 9. Why they chose or switched

> "The main advantage is not doing more integrations."
u/seyerkram, r/Netsuite, 2026-08-04, on choosing SuiteCommerce. **NetSuite / SuiteCommerce.** https://www.reddit.com/r/Netsuite/comments/1vfhp2m/

> "However, you are looking at one more integration to maintain as long as you have the website. And I know, in theory it should stay functional, but reality says otherwise for most cases."
u/Reasonable_Fuel_6786 (SuiteCommerce developer), same thread, 2026-08-05.

> "Having a complete integration, including webstore is fantastic. I am not dealing with API's and convincing apps to play nice together."
u/(OP, 20+ years on Sage 100, led an Acumatica rollout), r/Odoo, 2026-08-19. **Odoo (from Zoho) / Odoo webstore.** https://www.reddit.com/r/Odoo/comments/1vsykul/

> "We love it but also have a B2C Shopify. We would like to move it to FocusPoint ... It would be so much easier for us."
u/(OP), r/SAPBusinessOne, 2026-06-04. **SAP Business One / Shopify to ERP-native shop.** https://www.reddit.com/r/SAPBusinessOne/comments/1twn7w9/

> "My clients who run SAP B1, use one ecommerce system for their B2C channel and another separate system for their B2B channel and both systems speak directly to SAP B1. It's rare to find a single system that does both B2C and B2B and does them well."
u/Buddy_Useful, r/ERP, 2025-11-04. **SAP Business One.** https://www.reddit.com/r/ERP/comments/1oo2xau/

> "The big win with Shopify is the cart conversion...it's good and people use it so much, it's familiar."
u/vwtom, r/ERP, 2025-11-04, on two firms that moved to Shopify from NetSuite ecommerce and Magento. **NetSuite / Magento to Shopify.**

> "IMO: No. I regret using Odoo. ... And worst of all: It is virtually impossible to migrate away."
u/barebaric, r/ecommerce, 2026-06-16. **Odoo / Odoo eCommerce.** https://www.reddit.com/r/ecommerce/comments/1u7fg5q/

> "We need to support the new generation of people buying from us."
u/dancingcheesepuff, r/Epicor, 2026-09-30, explaining why the shop matters. **Epicor Eagle / Shopify.**

The "web shop as stepchild" theme: no buyer quote found. Only vendor and agency blogs use that framing. Unproven.

---

## Sources I could not reach

- reddit.com and old.reddit.com: blocked (403). Worked round via the Arctic Shift archive; full-text search there timed out, so I crawled recent posts per subreddit and filtered. Coverage: r/Netsuite and r/Odoo from about Aug 2025, r/ecommerce from May 2026, r/woocommerce from Feb 2026, r/ERP from Jun 2023, r/Dynamics365 from May 2024, small subs fully. Older r/shopify and r/ecommerce threads were not searched. r/businesscentral returned only 2022 to 2024 posts with nothing relevant. Pullpush was rate limited.
- Capterra, Software Advice, TrustRadius (Sana, Celigo): 403. G2 not fetched directly; only search snippets, which I have not quoted.
- Sage Community Hub: only one Sage 50 thread fetched; no Sage 200 forum threads surfaced. Sage UK voice is thin.
- BigCommerce community (Sage 200 thread): page did not render.
- NetSuite Professionals archive: 429.
- No k-eCommerce, Sana or Exact Online buyer reviews retrieved. No NAV to Business Central buyer story about a shop rebuild found, only partner marketing.

---

## Ranked themes

Independent sources = distinct people or businesses (not comments from one person counted twice). Intensity = how angry or costly the language is.

| Rank | Theme | Independent sources | ERPs seen | Confidence | Intensity |
|---|---|---|---|---|---|
| 1 | Orders not reaching the ERP, failing silently or retyped by hand | 13 | NetSuite, Business Central, Acumatica, Sage 50, Odoo, Exact Online, Epicor | High | High ("customer calls asking why", "dead end", "years") |
| 2 | Prices, VAT, currency and discounts wrong between shop and ERP | 10 | Odoo, Business Central, Acumatica, SAP Business One | High | High ("impossible to run the business") |
| 3 | Stock wrong, oversold or not trusted | 8 | Business Central, Acumatica, SAP Business One, Odoo, Shopware ERP, NetSuite (evaluating) | High | Medium to High |
| 4 | Product, variant, kit and mapping problems | 7 | Business Central, NetSuite, Odoo | Medium to High | Medium |
| 5 | Sync breaks after updates, plan changes or ERP moves | 8 | Business Central (SaaS and on-prem), Odoo, Epicor | Medium | Medium to High |
| 6 | Vendor over-selling and weak support | 6 | NetSuite connectors, Odoo, Epicor, SAP Business One | Medium | High |
| 7 | Payments, deposits and month-end reconciliation by hand | 5 | NetSuite, SAP Business One + Xero, n/s | Medium | Medium to High ("month-end is going to be hell") |
| 8 | Cost of ERP, connector or partner time | 5 | Odoo, Dynamics 365 Commerce, Shopware ERP | Medium | Medium |
| 9 | Choosing an ERP-native shop to avoid another integration | 4 | NetSuite, Odoo, SAP Business One | Medium | Low (positive framing) |
| 10 | Connector vendor and shop vendor blaming each other | 0 first-hand | none | Low | n/a |
| 11 | Web shop neglected as a "stepchild" | 0 first-hand | none | Low | n/a |
| 12 | NAV to Business Central forcing a shop rebuild | 0 first-hand (BC on-prem lacks native connector: 1) | Business Central | Low | n/a |

## The five strongest quotes

1. "Honestly our warehouse usually tells us when a customer calls asking why their stuff hasn't shipped yet." (u/Different_Pain5781, r/Netsuite, 2026-10-07, NetSuite / Shopify) https://www.reddit.com/r/Netsuite/comments/1wzv6a3/
2. "It's impossible for us to run the business if the price list for the variants don't show correctly on the ecommerce so I'm looking for an alternative ERP." (u/Eikido, r/ERP, 2023-12-02, Odoo) https://www.reddit.com/r/ERP/comments/188nuok/
3. "I have been trying for years to find an integration for my orders from Shopify to flow into sage 50. It seems ridiculous to get an order and then have to manually key it into sage50." (u/aces5five, r/sage50, 2024-01-10, Sage 50 / Shopify) https://www.reddit.com/r/sage50/comments/192zp68/
4. "Inventory syncing is also inconvenient and extremely unreliable ... Some items update correctly while others do not, which makes the entire system difficult to trust." (New York Cosmetics, Shopify App Store, 2026-09-11, Business Central / Shopify) https://apps.shopify.com/dynamics-365-business-central/reviews
5. "If Xero is hooked to Magento and SAP handles wholesale invoicing, you'll need some kind of reconciliation layer to tie cash and AR together - or else someone's month-end is going to be hell." (u/Ok_Orange_7439, r/ERP, 2025-11-12, SAP Business One / Magento) https://www.reddit.com/r/ERP/comments/1oo2xau/
