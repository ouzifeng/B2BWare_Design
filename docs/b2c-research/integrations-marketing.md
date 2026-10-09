# UK WooCommerce B2C Integrations: Marketing, Sales Channels, Customer Experience, Analytics

Research date: 2026-09-25. Slice covers email/SMS marketing, ads and social commerce, analytics and tracking, reviews, loyalty and referrals, customer service and chat, search and merchandising, personalisation and upsell, affiliate, marketplaces and channels, price comparison, and print on demand, for UK WooCommerce stores in the 250k to 5m pound/year physical-goods bracket.

## Method and caveats

- Primary evidence source: the WordPress.org Plugin API (`https://api.wordpress.org/plugins/info/1.2/?action=query_plugins`), queried directly per vendor/search term. This is the only place a genuine adoption number exists for a WordPress plugin.
- Active installs are WordPress.org's own banded figures (10, 50, 100, 500, 1000, 5000, 10000, 20000, 40000, 50000, 70000, 80000, 100000, 200000, ... 1000000, 2000000, 5000000, 7000000, 10000000). A figure of "100000" means the true count is somewhere between 100,000 and 200,000, not an exact number. Nothing below has been invented; every count and rating shown was returned live by the API on the date above.
- Rating is WordPress.org's 0-100 field, which is a 5-star average expressed as a percentage. Divide by 20 to get a star score (e.g. 56 = 2.8 stars). Shown alongside the number of ratings the score is built on, because a 100/100 score on 3 ratings is not meaningful.
- Web search was rate-limited during this research, so vendor-site facts (UK HQ, platform support) were pulled with direct page fetches. Several vendor pages 404'd or blocked the fetch; every failure is stated below rather than papered over with a guess.
- Where a well-known vendor has no WordPress.org plugin at all, that absence is itself evidence: it usually means the integration runs through the WooCommerce REST API, a JS snippet, Google Tag Manager, or a Shopify-first app that never shipped a WooCommerce build. Each case is called out explicitly rather than skipped.
- "What data flows" is drawn from the plugin's own stated function (API descriptions, short descriptions, vendor integration pages), not from installing and inspecting the code.

---

## Part 1: Evidence tables

### 1. Email and SMS marketing

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| Klaviyo | `klaviyo` (Klaviyo) | 100,000+ | 56/100, 2.8 stars (24 ratings) | US company (Boston); no UK HQ, but the dominant email/SMS platform among UK D2C brands in this revenue band | Customers, orders, products, browse/cart/checkout events, pushed continuously for flow triggers and segmentation | https://wordpress.org/plugins/klaviyo/ |
| Mailchimp | `mailchimp-for-woocommerce` (Mailchimp for WooCommerce, official) | 200,000+ | 80/100, 4.0 stars (725 ratings) | US company; huge generic small-business install base including UK | Customers, orders (incl. line items), products, abandoned carts, one-way sync to Mailchimp audiences | https://wordpress.org/plugins/mailchimp-for-woocommerce/ |
| Mailchimp (alt.) | `mailchimp-for-wp` (MC4WP: Mailchimp for WordPress) | 1,000,000+ | 96/100, 4.8 stars (1,497 ratings) | Same as above | Form-submission-level contact capture only; not order/product sync, so stores often run both plugins together | https://wordpress.org/plugins/mailchimp-for-wp/ |
| Omnisend | `omnisend-connect` (Email Marketing for WooCommerce by Omnisend) | 40,000+ | 98/100, 4.9 stars (168 ratings) | Lithuania/US company; no UK HQ | Customers, orders, products, cart/browse events, SMS opt-in status | https://wordpress.org/plugins/omnisend-connect/ |
| Omnisend (broader) | `omnisend` (Newsletters, Email Marketing, SMS and Popups by Omnisend) | 100,000+ | 96/100, 4.8 stars (16 ratings) | Same as above | Broader WordPress-wide popup/newsletter plugin, not WooCommerce-order-specific | https://wordpress.org/plugins/omnisend/ |
| MailPoet | `mailpoet` (MailPoet: Newsletters, Email Marketing, and Automation) | 500,000+ | 88/100, 4.4 stars (1,432 ratings) | Now developed by Automattic (WooCommerce's own parent company); sends from the WordPress install itself | Subscribers, WooCommerce order and customer data, native WooCommerce automation triggers (built in, no external SaaS hop) | https://wordpress.org/plugins/mailpoet/ |
| Brevo (was Sendinblue) | `woocommerce-sendinblue-newsletter-subscription` (Brevo for WooCommerce) | 30,000+ | 68/100, 3.4 stars (54 ratings) | France company; growing UK SMB usage as a budget Klaviyo alternative | Customers, orders, newsletter subscription status | https://wordpress.org/plugins/woocommerce-sendinblue-newsletter-subscription/ |
| Brevo (alt.) | `mailin` (Brevo: Email, SMS, Web Push, Chat, and more) | 100,000+ | 82/100, 4.1 stars (284 ratings) | Same as above | Broader WP contact-form/opt-in plugin, not WooCommerce order sync specific | https://wordpress.org/plugins/mailin/ |
| Dotdigital | `dotdigital-for-woocommerce` (Dotdigital for WooCommerce) | Under 100 | No ratings yet | UK company, registered office London (confirmed via dotdigital.com/about-us); LSE AIM-listed; historically strong in UK mid-market/enterprise retail | Orders, customers, products, per vendor description; near-zero WP.org install base suggests most Dotdigital-WooCommerce pairings are set up by an agency via API, not the self-serve plugin | https://wordpress.org/plugins/dotdigital-for-woocommerce/ |
| Dotdigital (legacy) | `dotmailer-sign-up-widget` (Dotdigital for WordPress) | 400 | 74/100, 3.7 stars (3 ratings) | Same as above | Sign-up widget only | https://wordpress.org/plugins/dotmailer-sign-up-widget/ |
| Drip | `drip` (Drip: Marketing Automation for WooCommerce) | 1,000 | 100/100, 5.0 stars (4 ratings) | US company; niche on WooCommerce | Customers, orders, events for automation | https://wordpress.org/plugins/drip/ |
| ActiveCampaign | `activecampaign-for-woocommerce` (ActiveCampaign for WooCommerce, official) | 5,000 | 80/100, 4.0 stars (48 ratings) | US company; used by some UK SMBs, but niche on WooCommerce specifically | Contacts, orders, abandoned carts, automation triggers | https://wordpress.org/plugins/activecampaign-for-woocommerce/ |
| Attentive | No WordPress.org plugin found | n/a | n/a | US company, Shopify-first SMS platform | No native WooCommerce data flow; where used, it is via a custom JS snippet and manual API/webhook wiring, not a plugin | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=attentive%20sms |
| Postscript | No real WooCommerce plugin found (only an unrelated 2018 plugin sharing the name) | n/a | n/a | US company, Shopify-only SMS platform | Not built for WooCommerce; no meaningful data flow to note | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=postscript |

### 2. Ads and social commerce

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| Google Merchant Center / Ads | `google-listings-and-ads` (Google for WooCommerce, official) | 800,000+ | 54/100, 2.7 stars (267 ratings) | Global; the standard route to UK free listings and Google Shopping | Full product catalogue (price, stock, images, GTIN), order conversion events, to Merchant Center and Google Ads | https://wordpress.org/plugins/google-listings-and-ads/ |
| Meta (Facebook/Instagram) | `facebook-for-woocommerce` (Meta for WooCommerce, official) | 400,000+ | 42/100, 2.1 stars (479 ratings) | Global; near-universal for UK social-first D2C brands | Product catalogue, Meta Pixel browser events, and (built into the same plugin) server-side Conversions API events, plus order data | https://wordpress.org/plugins/facebook-for-woocommerce/ |
| Meta Pixel (standalone) | `official-facebook-pixel` (Meta pixel for WordPress) | 400,000+ | 54/100, 2.7 stars (164 ratings) | Global | Pixel events only, no catalogue sync | https://wordpress.org/plugins/official-facebook-pixel/ |
| TikTok for Business | `tiktok-for-business` (TikTok) | 200,000+ | 36/100, 1.8 stars (39 ratings) | Global; fast-growing among UK stores under 35 audience skew | Product catalogue, pixel/events API, shop tab feed | https://wordpress.org/plugins/tiktok-for-business/ |
| Pinterest for WooCommerce | `pinterest-for-woocommerce` (official) | 200,000+ | 46/100, 2.3 stars (68 ratings) | Global; strong for UK home/fashion/gift categories | Product catalogue, conversion tag events | https://wordpress.org/plugins/pinterest-for-woocommerce/ |
| Snapchat | `snapchat-for-woocommerce` (official) | 80,000+ | No ratings recorded despite install count | Global | Product catalogue and pixel events, per plugin listing | https://wordpress.org/plugins/snapchat-for-woocommerce/ |
| Snapchat (community) | `snap-pixel` (Pixel Integration for Snapchat) | 300 | 78/100, 3.9 stars (9 ratings) | Global | Pixel events only | https://wordpress.org/plugins/snap-pixel/ |
| Microsoft Ads | No dedicated single plugin; reached via multi-channel feed and pixel-manager plugins | n/a | n/a | Global | UET conversion tag plus product feed, delivered as one of many channels inside tools like "Product Feed for Google Shopping, Microsoft Advertising and 40+ Channels" (`shopping-feed-for-google`, 2,000 installs, 96/100, 87 ratings) and "Pixel Manager for WooCommerce" | https://wordpress.org/plugins/shopping-feed-for-google/ |

### 3. Analytics and tracking

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| GA4 (via Site Kit) | `google-site-kit` (Site Kit by Google, official) | 5,000,000+ | 84/100, 4.2 stars (1,009 ratings) | Global; the modern default since Universal Analytics sunset | GA4 property connection, plus Search Console, AdSense; page and (with WooCommerce integration enabled) ecommerce events | https://wordpress.org/plugins/google-site-kit/ |
| MonsterInsights | `google-analytics-for-wordpress` (MonsterInsights) | 2,000,000+ | 90/100, 4.5 stars (3,151 ratings) | Global; long-standing leader for non-technical GA setup, with a paid WooCommerce ecommerce-tracking add-on | Page views, and on the paid tier, WooCommerce enhanced-ecommerce events (product views, add-to-cart, purchases) | https://wordpress.org/plugins/google-analytics-for-wordpress/ |
| GTM4WP | `duracelltomi-google-tag-manager` (GTM4WP: A Google Tag Manager plugin for WordPress) | 700,000+ | 90/100, 4.5 stars (155 ratings) | Global; the long-standing community standard for pushing a WooCommerce dataLayer into GTM | Pushes WooCommerce dataLayer events (product view, add-to-cart, checkout steps, purchase) into GTM for onward tagging | https://wordpress.org/plugins/duracelltomi-google-tag-manager/ |
| Meta Conversions API | Delivered inside `facebook-for-woocommerce` itself; also managed by `pixelyoursite` (PixelYourSite) | 400,000+ (Meta for WooCommerce) / 400,000+ (PixelYourSite) | 42/100 (Meta for WooCommerce) / 86/100, 4.3 stars, 277 ratings (PixelYourSite) | Global | Server-side purchase/lead events matched to Meta ad accounts, reducing reliance on browser pixel firing | https://wordpress.org/plugins/pixelyoursite/ |
| Microsoft Clarity | `microsoft-clarity` (official) | 200,000+ | 90/100, 4.5 stars (14 ratings) | Global; free, popular with budget-conscious UK SMBs as a Hotjar alternative | Session recordings and heatmaps only; behavioural, not ecommerce/order data unless custom events are added | https://wordpress.org/plugins/microsoft-clarity/ |
| Hotjar | No WordPress.org plugin found | n/a | n/a | Global | Installed via a GTM custom HTML tag or a generic header/footer-code plugin, never as a dedicated WooCommerce plugin; session recordings/heatmaps/surveys, no native order data | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=hotjar |
| Triple Whale | No WordPress.org plugin found; vendor integrations page returned HTTP 403 on fetch | n/a | n/a | Not verified | Not verified; Triple Whale is built primarily for Shopify, and this research found no evidence of a native WooCommerce data connector | Fetch attempted: https://www.triplewhale.com/integrations (403 Forbidden) |

### 4. Reviews

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| Trustpilot | `trustpilot-reviews` (Trustpilot Reviews, third-party built) | 30,000+ | 36/100, 1.8 stars (73 ratings) | Founded Denmark; very large UK retail customer base and cultural default for UK trust badges | Widget only: displays existing Trustpilot score/reviews on-site. Trustpilot's real order-to-review-invite data flow for most stores runs through their own Business App/API/webhook, not this WP.org plugin, which likely explains the modest count relative to Trustpilot's actual UK retail footprint | https://wordpress.org/plugins/trustpilot-reviews/ |
| Reviews.io | `reviewscouk-for-woocommerce` (REVIEWS.io for WooCommerce, official) | 1,000 | 46/100, 2.3 stars (3 ratings) | UK company (LinkedIn/footer signals point to UK operations; company site did not load a dedicated about page to confirm HQ address) | Orders and customer emails for review-invite automation, review display widgets | https://wordpress.org/plugins/reviewscouk-for-woocommerce/ |
| Judge.me | No dedicated WooCommerce plugin found in top results | n/a | n/a | Not verified | Judge.me is overwhelmingly a Shopify-app-store product; no evidence of meaningful WooCommerce presence found | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=judge.me |
| Yotpo | `yotpo-social-reviews-for-woocommerce` (Yotpo: Product & Photo Reviews for WooCommerce) | 2,000 | 90/100, 4.5 stars (192 ratings) | Israel company; Shopify-first, WooCommerce a secondary platform | Order/customer data for review requests, review display and UGC photo collection; plugin last updated Dec 2024, i.e. stale for around 9 months as of this research | https://wordpress.org/plugins/yotpo-social-reviews-for-woocommerce/ |
| Feefo | `feefo-ratings-reviews-for-woocommerce` (official) | 200 | 46/100, 2.3 stars (4 ratings) | UK company, offices in Petersfield and London (confirmed via business.feefo.com) | Orders/customers for review-invite emails, review display; very small WP.org footprint despite Feefo's broad UK retail brand recognition, suggesting most Feefo-WooCommerce pairings are agency-built via API rather than this plugin | https://wordpress.org/plugins/feefo-ratings-reviews-for-woocommerce/ |
| Google Customer Reviews | No standalone high-adoption plugin confirmed | n/a | n/a | Global | The closest match, `customer-reviews-woocommerce` (CusRev, "Customer Reviews for WooCommerce," 80,000+ installs, 96/100, 4.8 stars, 1,532 ratings), is a generic review-collection plugin that can export a Google Shopping review feed; it is not literally the Google Customer Reviews seller-rating badge program | https://wordpress.org/plugins/customer-reviews-woocommerce/ |

### 5. Loyalty and referrals

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| Smile.io | No WordPress.org plugin found; smile.io/platforms fetch returned 404 | n/a | n/a | Canada company | Smile.io is Shopify/BigCommerce-first; no evidence of a native WooCommerce integration | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=smile.io |
| YITH WooCommerce Points and Rewards | Not on WordPress.org (sold only as a premium extension direct from yithemes.com) | n/a, no public install data | n/a | Italy company (YITH), large generic WooCommerce-extension catalogue | Points balances, order-to-points conversion, redemption at checkout, per vendor description; no independent adoption evidence available since it is never listed on WP.org | Not published on WordPress.org; vendor: https://yithemes.com/themes/plugins/yith-woocommerce-points-and-rewards/ |
| LoyaltyLion | No WordPress.org plugin found | n/a | n/a | Not confirmed by this research (homepage fetch did not state HQ) | LoyaltyLion's own homepage is built entirely around "Made for Shopify" positioning with no WooCommerce mention found, consistent with no WooCommerce plugin existing | https://loyaltylion.com/ (fetched, no HQ or WooCommerce statement found) |
| (Context) Native WooCommerce points plugins | `simple-points-and-rewards`, `xt-woo-points-rewards` | 300 / 70 | 100/100 (6 ratings) / 90/100 (13 ratings) | Global | Basic points-for-purchase loyalty, run entirely inside WooCommerce with no external SaaS | https://wordpress.org/plugins/simple-points-and-rewards/ |

### 6. Customer service and chat

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| Gorgias | No WordPress.org plugin; vendor's own integrations page confirms a native WooCommerce app | n/a on WP.org | n/a on WP.org | France/US company | Per Gorgias's own site: customer profiles and orders surfaced next to support tickets, one-click order edits; delivered via an API-key connection from the Gorgias dashboard, never distributed as a WordPress.org plugin, so real usage is invisible to this evidence source | https://www.gorgias.com/integrations (fetched) |
| Zendesk | No significant dedicated WooCommerce plugin (only sub-100-install contact-form connectors) | n/a | n/a | Global | Zendesk-WooCommerce pairing appears to run mostly through Zapier or paid third-party connectors, not a native plugin | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=zendesk |
| Tidio | `tidio-live-chat` (Tidio: Live Chat & AI Chatbots, official) | 70,000+ | 94/100, 4.7 stars (396 ratings) | Poland company; popular budget choice for UK SMBs | Chat widget, can read cart/order context for the bot, captures leads | https://wordpress.org/plugins/tidio-live-chat/ |
| Intercom | `intercom` (official) | 6,000 | 68/100, 3.4 stars (11 ratings) | US company | Chat widget/help centre; plugin last meaningfully updated April 2025 (stale over a year); Intercom skews toward SaaS products rather than physical-goods ecommerce | https://wordpress.org/plugins/intercom/ |
| LiveChat | `wp-live-chat-software-for-wordpress` (LiveChat, official) | 10,000 | 92/100, 4.6 stars (98 ratings) | Poland company | Chat widget across the whole site | https://wordpress.org/plugins/wp-live-chat-software-for-wordpress/ |
| LiveChat (WooCommerce add-on) | `livechat-woocommerce` (Live Chat Plugin for WooCommerce, official) | 1,000 | 90/100, 4.5 stars (22 ratings) | Same as above | Adds order/cart visibility to LiveChat agents specifically on WooCommerce | https://wordpress.org/plugins/livechat-woocommerce/ |
| Freshdesk | No notable dedicated WooCommerce sync plugin found | n/a | n/a | Global (Freshworks, India/US) | Freshdesk-WooCommerce pairing appears to run mostly through Zapier/API, not a native plugin | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=freshdesk |
| Re:amaze | `reamaze` (Re:amaze Helpdesk & Live Chat, official) | 400 | 100/100, 5.0 stars (3 ratings) | US company | Small niche footprint | https://wordpress.org/plugins/reamaze/ |

### 7. Search and merchandising

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| Algolia | `wp-search-with-algolia` (WP Search with Algolia, official) | 7,000 | 90/100, 4.5 stars (24 ratings) | France/US company | Indexes site content for fast search; needs extra configuration/InstantSearch work to cover WooCommerce product search specifically, which likely explains the modest install count for such a well-known vendor | https://wordpress.org/plugins/wp-search-with-algolia/ |
| Doofinder | `doofinder-for-woocommerce` (DOOFINDER Search and Discovery for WP & WooCommerce, official) | 2,000 | 98/100, 4.9 stars (127 ratings) | Spain company; established presence across UK/EU ecommerce | Full product catalogue indexed for on-site search and merchandising, plus search-behaviour analytics | https://wordpress.org/plugins/doofinder-for-woocommerce/ |
| Klevu | No WordPress.org plugin; confirmed absent from vendor's current platform list | n/a | n/a | Finland-founded, now rebranded/consolidated under Athos Commerce | Vendor's own integrations page (redirected to athoscommerce.com) lists BigCommerce, Miva, Salesforce, Shopify, Adobe Commerce, Shopware, and NetSuite as supported platforms; WooCommerce is absent | https://athoscommerce.com/ecommerce-platforms/ (fetched, WooCommerce not listed) |

### 8. Personalisation and upsell

No named vendor list was given for this category, and the research found none of the well-known standalone SaaS personalisation platforms (Nosto, LimeSpot) have any WordPress.org presence at all (zero search results for either). This category is served on WooCommerce almost entirely by lightweight native/WordPress-ecosystem plugins rather than a dominant third-party SaaS platform:

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| Nosto | No WordPress.org plugin found | n/a | n/a | Not evidenced | No WooCommerce presence found | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=nosto |
| LimeSpot | No WordPress.org plugin found | n/a | n/a | Not evidenced | No WooCommerce presence found | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=limespot |
| UpsellWP | `checkout-upsell-and-order-bumps` | 5,000 | 96/100, 4.8 stars (144 ratings) | Global | Post-purchase/checkout upsell offers, order bumps | https://wordpress.org/plugins/checkout-upsell-and-order-bumps/ |
| WPC Frequently Bought Together | `woo-bought-together` | 10,000 | 90/100, 4.5 stars (84 ratings) | Global | Product-pairing recommendations on product pages | https://wordpress.org/plugins/woo-bought-together/ |
| YITH Frequently Bought Together | `yith-woocommerce-frequently-bought-together` | 8,000 | 62/100, 3.1 stars (12 ratings) | Italy (YITH) | Product-pairing recommendations | https://wordpress.org/plugins/yith-woocommerce-frequently-bought-together/ |

### 9. Affiliate

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| Awin | `awin-advertiser-tracking` (Awin: Advertiser Tracking for WooCommerce, official) | 1,000 | 60/100, 3.0 stars (3 ratings) | Founded in the UK (as Affiliate Window, Liverpool/London, 2000), now part of Germany's Axel Springer group; vendor's own UK page (awin.com/gb/about-us) cites Marks & Spencer, AO.com, Sky and boohoo as case studies, confirming a genuinely deep UK retail base despite the small plugin install count | Order value, order ID, commissionable items, fired as an advertiser conversion pixel/tag back to Awin for publisher commission attribution | https://wordpress.org/plugins/awin-advertiser-tracking/ |
| Refersion | `refersion-for-woocommerce` (official) | 300 | 74/100, 3.7 stars (3 ratings) | US company; Shopify-first, WooCommerce secondary | Orders, affiliate/referral attribution, commission calculation | https://wordpress.org/plugins/refersion-for-woocommerce/ |
| (Context) AffiliateWP | Not in the requested vendor list, but the most-used in-house affiliate solution on WooCommerce | Appeared incidentally in searches; not independently queried | n/a | Global, WooCommerce ecosystem native | Self-hosted affiliate program run entirely inside WordPress, no external network; worth noting because for many stores under 5m pounds/year, an in-house AffiliateWP-style program is more common than a network like Awin or Refersion | Not separately verified; flagged for awareness only |

### 10. Marketplaces and channels

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| Amazon | No single dominant plugin found; searches were dominated by unrelated Amazon SES/payment plugins | n/a | n/a | Global | Real-world Amazon sync for WooCommerce stores is generally handled by the multi-channel tools below, not a single-purpose Amazon plugin | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=amazon%20for%20woocommerce |
| eBay | `wp-lister-for-ebay` (WP-Lister Lite for eBay) | 2,000 | 86/100, 4.3 stars (74 ratings) | Global | Free tier lists products to eBay; two-way stock/order sync is a paid Pro upgrade | https://wordpress.org/plugins/wp-lister-for-ebay/ |
| Etsy | `exportfeed-for-woocommerce-product-to-etsy` (Etsy Integration For WooCommerce) | 900 | 80/100, 4.0 stars (42 ratings) | Global | One-way product export to Etsy; niche install base | https://wordpress.org/plugins/exportfeed-for-woocommerce-product-to-etsy/ |
| TikTok Shop | No standalone high-adoption plugin found | n/a | n/a | Global | Reached either through the general TikTok for Business catalogue/pixel plugin or as one channel inside multi-channel feed tools; CedCommerce sells a dedicated TikTok Shop connector but it shows only 400 installs, suggesting still-early adoption | https://wordpress.org/plugins/cedcommerce-connector-for-tiktok-shop/ |
| OnBuy | `cedcommerce-onbuy-integration` (OnBuy Integration for WooCommerce) | 10 | 20/100, 1.0 stars (1 rating) | UK marketplace | Essentially abandoned: last updated July 2022, negligible installs | https://wordpress.org/plugins/cedcommerce-onbuy-integration/ |
| ManoMano (via LitCommerce) | `litcommerce` (LitCommerce: Multi-channel Selling Tool For WooCommerce) | 2,000 | 100/100, 5.0 stars (283 ratings) | France-founded marketplace (ManoMano), LitCommerce itself is Ukraine/US-built | LitCommerce is a genuine, well-rated multi-channel connector spanning eBay, Amazon, Etsy, OnBuy, ManoMano and more from one plugin; ManoMano has no dedicated single-purpose plugin of its own | https://wordpress.org/plugins/litcommerce/ |
| CedCommerce (connectors) | `cedcommerce-connector-for-tiktok-shop`, `cedcommerce-connector-for-miravia`, `marketplace-integration-for-shopee-and-lazada`, `cedcommerce-integration-for-aliexpress`, `product-lister-ebay` | 400 / 10 / 70 / under 100 / 60 | Mostly under 10 ratings each | India company, sells single-channel connectors | Product listing and, on paid tiers, order/stock sync per marketplace; individually all niche/low-adoption on WP.org | https://wordpress.org/plugins/cedcommerce-connector-for-tiktok-shop/ |
| Linnworks | No WordPress.org plugin found | n/a | n/a | UK company (order/inventory management) | Confirmed no WP.org listing; Linnworks connects to WooCommerce via the native WooCommerce REST API directly rather than an installed WordPress plugin, which is the standard pattern for order-management/OMS platforms | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=linnworks |
| ChannelAdvisor | No WordPress.org plugin found (zero search results) | n/a | n/a | US/global enterprise multi-channel platform | Same REST-API-based pattern as Linnworks: connects at the WooCommerce API level, not via a marketplace plugin | Search: https://api.wordpress.org/plugins/info/1.2/?action=query_plugins&request[search]=channeladvisor |

### 11. Price comparison

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| Google Shopping | Reached via `google-listings-and-ads` (see Ads and social commerce, above) | 800,000+ | 54/100, 2.7 stars (267 ratings) | Global | Full product feed, price/stock/GTIN | https://wordpress.org/plugins/google-listings-and-ads/ |
| Idealo | No dedicated plugin; reached via generic multi-channel feed managers | n/a as standalone | n/a | Germany marketplace, present in UK price-comparison shopping | Product feed exported as one of many destinations inside tools like CTX Feed (`webappick-product-feed-for-woocommerce`, 90,000+ installs, 92/100, 4.6 stars, 835 ratings), RexFeed (`best-woocommerce-feed`, 10,000+, 96/100, 254 ratings) and WebToffee (`webtoffee-product-feed`, 2,000+, 96/100, 27 ratings), all of which explicitly list Idealo as a supported channel | https://wordpress.org/plugins/webappick-product-feed-for-woocommerce/ |

### 12. Print on demand

| Service | WooCommerce plugin (slug) | Active installs | Rating | UK relevance | What data flows | Source URL |
|---|---|---|---|---|---|---|
| Printful | `printful-shipping-for-woocommerce` (Printful Integration for WooCommerce, official) | 50,000+ | 50/100, 2.5 stars (97 ratings) | Latvia/US company; ships to and has fulfilment relevance for the UK | Orders pushed to Printful for fulfilment, product sync back to store, shipment tracking; large install base but poor rating, a recurring "high adoption, sync/fulfilment complaints" pattern seen across several official plugins in this research | https://wordpress.org/plugins/printful-shipping-for-woocommerce/ |
| Printify | `printify-for-woocommerce` (official) | 10,000+ | 56/100, 2.8 stars (37 ratings) | Latvia/US company | Same pattern as Printful, smaller install base, same low-rating pattern | https://wordpress.org/plugins/printify-for-woocommerce/ |

---

## Part 2: Ranked must-have list, by section, with deal-breakers flagged

Tiers: **Tier 1** = nearly every store in this bracket needs it (or the category, even if the specific vendor varies). **Tier 2** = common, a meaningful minority run it. **Tier 3** = niche, small share of stores, or evidence is too thin/absent to call it common.

A service is flagged **DEAL-BREAKER** only where, for a store that already has it live, a migration that cannot carry it across cleanly would cause real damage on at least one of: revenue depends on it, history/data would be lost, or customers see the loss directly. Deal-breaker status is about what happens if the migration gets it wrong, not raw adoption share, so a few Tier 2/3 items are flagged here even though they are not universal.

### Advertising (ads and social commerce)

- **Tier 1: Google Merchant Center / Google for WooCommerce.** 800,000+ active installs is the largest single number found across this entire slice. **DEAL-BREAKER.** Revenue depends on it: free Google Shopping listings and Shopping ads are a primary UK acquisition channel for physical-goods stores; if the product feed sync breaks mid-migration, the store drops out of Shopping results within days. History would be lost: Merchant Center account standing, product review counts and performance history reset if disconnected and reconnected incorrectly.
- **Tier 1: Meta for WooCommerce (catalogue, Pixel, Conversions API).** 400,000+ installs. **DEAL-BREAKER.** Revenue depends on it: retargeting and prospecting on Meta is typically the second-largest paid channel after Google for this store size, and both depend on an unbroken catalogue feed and pixel history. History would be lost: ad accounts lose optimisation signal and lookalike-audience quality if the pixel/CAPI event stream is interrupted, which is expensive to rebuild.
- **Tier 2: TikTok for Business, Pinterest for WooCommerce.** 200,000+ installs each, but noticeably lower ratings (36/100 and 46/100), suggesting real but frustrating adoption. Not a deal-breaker for most stores in this size bracket yet, but is one for any store where TikTok/Pinterest is already a primary channel, since the same catalogue-feed and event continuity logic applies.
- **Tier 3: Snapchat, Microsoft Ads.** Real but small footprint; Microsoft Ads in particular has no dedicated plugin and rides on generic multi-channel feed tools.

### Email and SMS marketing

- **Tier 1 where present, not universal: Klaviyo.** Only 100,000+ WP.org installs, well behind Google/Meta, but where a store has built its retention revenue on Klaviyo flows, it is an unambiguous **DEAL-BREAKER.** Revenue depends on it: abandoned-cart, post-purchase and win-back flows in this revenue bracket commonly drive a meaningful share of total revenue; if flows stop firing during migration, that revenue drops immediately. History would be lost: years of customer profile, purchase and engagement history live inside Klaviyo's own database and must be preserved and re-synced, not just the WooCommerce side.
- **Tier 1 (platform-native): MailPoet.** 500,000+ installs, and it is built by Automattic (WooCommerce's own parent), so it ships as close to "default" as this category gets. Not a deal-breaker on its own (data lives in WordPress, so migration risk is lower), but worth treating as the assumed baseline.
- **Tier 2: Mailchimp for WooCommerce, Omnisend, Brevo, ActiveCampaign.** Each has a real, official plugin and a meaningful (if smaller than Klaviyo's) install base. Flag as a store-specific deal-breaker under the same logic as Klaviyo wherever revenue automation is actually running on one of them.
- **Tier 3: Dotdigital, Drip.** Near-zero WP.org installs. Where a Dotdigital deployment exists it is very likely agency-built via API, so the risk is real but invisible to plugin-based evidence; treat any live Dotdigital account as a case-by-case deal-breaker check, not a default one.
- **Not a WooCommerce category: Attentive, Postscript.** No native plugin exists; if a store somehow runs one via a custom script, migration risk is about the custom code, not a plugin.

### Analytics and tracking

- **Tier 1: GA4 (via Site Kit or MonsterInsights).** 5,000,000+ and 2,000,000+ installs respectively, the two single biggest numbers in this whole research slice next to WooCommerce itself. **DEAL-BREAKER.** History would be lost: GA4 property history and, on MonsterInsights, the paid WooCommerce ecommerce-tracking data, are the baseline every store uses for its own performance judgement and for justifying ad spend; losing continuity here breaks reporting trust with the store owner immediately, on day one of the new platform.
- **Tier 1 (infrastructure): GTM4WP or an equivalent GTM setup.** 700,000+ installs. Not itself customer-facing, but it is the plumbing that Meta CAPI, Google Ads conversion tracking and most other tags depend on; treat as a deal-breaker wherever a store has a mature tagging setup, because everything downstream breaks quietly if the dataLayer stops firing.
- **Tier 2: Meta Conversions API, Microsoft Clarity.** Real adoption, not universal.
- **Tier 3 / not evidenced as a WooCommerce plugin: Hotjar, Triple Whale.** No native plugin found for either; where used, both ride on GTM or a snippet, so they are lower migration risk (nothing WooCommerce-specific to carry over) but also not something to build native support around.

### Reviews

- **Tier 1 where present: Trustpilot (or the store's equivalent: Feefo, Reviews.io).** Install counts on WP.org are modest (30,000, 200, 1,000 respectively) but this understates real adoption, since Trustpilot in particular is largely run via API/webhook rather than this plugin. Wherever a review platform is live, it is a **DEAL-BREAKER.** Customers see it directly: the star rating and review count are a visible trust signal on the product page, in Google search snippets, and often at checkout; a broken or reset review badge is the single most visible thing a returning customer will notice after migration. History would be lost: years of accumulated review volume and score are not something a store can quickly rebuild if the connection is severed rather than migrated.
- **Tier 2: Yotpo, Google Customer Reviews (via Merchant Center feed export).**
- **Tier 3: Judge.me.** No meaningful WooCommerce evidence found; effectively a Shopify-only product for this purpose.

### Loyalty and referrals

- **Tier 3 across the board, but a per-store deal-breaker where live.** This is the weakest-evidenced category in the whole slice: Smile.io and LoyaltyLion have no WooCommerce plugin at all, and YITH's points plugin is not even distributed on WordPress.org. Loyalty is not a "nearly every store needs it" category for WooCommerce the way it is for Shopify. However, where a store does run a points/loyalty programme (even a small native one like `simple-points-and-rewards`), it is a **DEAL-BREAKER for that store specifically.** Customers see it directly: a points balance is effectively store credit the customer believes they own; losing or resetting it on migration is a trust breach, not just an inconvenience. Do not treat loyalty as a platform-wide must-have, but do treat "does this store have a live points balance" as a mandatory migration checklist item.

### Customer service and chat

- **Tier 2: Tidio, LiveChat.** The only two with meaningful WP.org install numbers and live ratings (70,000+/94 and 10,000+/92).
- **Tier 2, deal-breaker where live: Gorgias.** No WP.org plugin exists (it connects via API key, not a public plugin), so adoption is invisible to this evidence source, but Gorgias is a well-known ecommerce-focused helpdesk. Where it is running, flag it a **DEAL-BREAKER:** history would be lost (ticket history, macros and customer order context built up over time) and, if support literally routes through it, this is operationally revenue-adjacent (unresolved tickets during a broken migration window directly cost customer trust and repeat purchases).
- **Tier 3: Zendesk, Freshdesk, Intercom, Re:amaze.** Each has only small, generic connector plugins or none at all; real usage, where it exists, is likely Zapier/API-based and should be checked case by case rather than assumed.

### Search and merchandising

- **Tier 2: Doofinder.** The only vendor in this trio with both a dedicated, well-rated WooCommerce-specific plugin (98/100, 127 ratings) and confirmed European/UK relevance.
- **Tier 3: Algolia.** Well-known brand, but only 7,000 installs and generic (not WooCommerce-product-specific out of the box); likely used mostly by larger sites via custom implementation rather than the WP.org plugin.
- **Not relevant to WooCommerce: Klevu.** Confirmed via the vendor's own current platform list that WooCommerce is not supported at all. Do not build native support for this one; it does not apply to the migration target.
- Not a deal-breaker category generally: WooCommerce ships with usable default search, so losing a third-party search layer during migration is an inconvenience and a conversion-rate risk, not a data-loss or customer-visible-history risk.

### Personalisation and upsell

- **Tier 3, fragmented, no dominant vendor.** Nosto and LimeSpot, the two most likely "SaaS personalisation platform" names, have zero WooCommerce presence. What actually exists is a set of small, WordPress-native cross-sell/upsell/bundle plugins with installs in the 5,000-10,000 range and no single winner. Recommendation: do not prioritise a specific third-party personalisation integration for the migration platform; native WooCommerce cross-sell/upsell functionality plus good product-recommendation UX covers what the market is actually using.

### Affiliate

- **Tier 2, but a genuine deal-breaker wherever live: Awin.** Only 1,000 WP.org installs, but Awin has deep, confirmed UK retail roots (founded in the UK, and its own UK page names Marks & Spencer, AO.com, Sky and boohoo as customers). **DEAL-BREAKER.** Revenue depends on it: affiliate-driven sales are a direct, attributable revenue line, and Awin's publisher network operates under contractual terms with the store; if conversion tracking breaks during migration, commission disputes with publishers follow immediately, and some publishers may pause promotion of the store. This is a smaller-adoption item than Google/Meta/GA4 but is flagged deliberately because the operational and contractual stakes are disproportionate to the plugin's install count.
- **Tier 3: Refersion.** Small footprint, Shopify-first vendor.
- **Context, not requested but relevant:** AffiliateWP-style in-house programmes are likely more common than either named network for stores at the smaller end of this revenue bracket; worth a native-support conversation even though it was outside the named vendor list.

### Marketplaces and channels

- **Tier 1 functionally, Tier 3 by plugin-adoption evidence: multi-channel/OMS sync (Linnworks, ChannelAdvisor, or a listing tool like LitCommerce/CedCommerce) for any store also selling on Amazon, eBay or Etsy.** Linnworks and ChannelAdvisor have zero WordPress.org plugins between them, because both connect at the WooCommerce REST API level rather than as an installed plugin, so plugin-count evidence understates how load-bearing this category is. **DEAL-BREAKER wherever a store sells on a marketplace in parallel with WooCommerce.** Revenue and account standing depend on it directly: if stock sync breaks during migration, the store can oversell on Amazon or eBay, which risks order cancellations, negative seller metrics, and on Amazon specifically, account suspension for repeated non-fulfilment. This is arguably the highest-consequence integration category in this entire research slice, even though it produces the thinnest plugin-based evidence, precisely because the real integration point is the REST API, not a WordPress.org plugin.
- **Tier 2: eBay (WP-Lister), LitCommerce (covers Etsy, OnBuy, ManoMano, TikTok Shop and more from one plugin).**
- **Tier 3: Etsy standalone, TikTok Shop standalone, CedCommerce single-channel connectors, OnBuy.** All small, and OnBuy's dedicated plugin is effectively abandoned (last updated 2022).

### Price comparison

- **Tier 2: Google Shopping.** Covered by the same Google for WooCommerce plugin already flagged as a Tier 1 deal-breaker under Advertising; not counted twice here.
- **Tier 3: Idealo.** No dedicated plugin; reached as one of many channels inside generic feed-manager plugins. Not a deal-breaker; a missed Idealo listing is a minor traffic loss, not a customer-visible or history-loss event.

### Print on demand

- **Tier 2, deal-breaker where live: Printful, Printify.** 50,000+ and 10,000+ installs respectively. Where a store's product range is print-on-demand, this is a **DEAL-BREAKER** by definition: revenue depends on it completely, because the product literally cannot be fulfilled without the connection working (there is no warehouse fallback). Not a platform-wide must-have across the whole migration cohort, since most stores in this bracket are not POD-based, but where it applies, it is absolute rather than a nice-to-have.

---

## Fetches that failed or returned no usable data

Listed here in full rather than silently omitted, per the brief:

- `https://smile.io/platforms` - HTTP 404
- `https://www.feefo.com/en-gb/about` and `https://www.feefo.com/en-GB/` - HTTP 404 (recovered via `https://business.feefo.com/`, used above)
- `https://www.reviews.io/about-us` - HTTP 404 (recovered partial info via `https://www.reviews.io/`, used above)
- `https://www.awin.com/gb/about-us` - loaded, but did not state an explicit HQ address (used for UK-relevance evidence only, not HQ confirmation)
- `https://loyaltylion.com/` - loaded, but did not state an HQ location
- `https://www.triplewhale.com/integrations` - HTTP 403 Forbidden, no data recovered
- WordPress.org searches returning zero relevant results (treated as evidence of no meaningful WooCommerce presence, not a failed fetch): Postscript (real plugin), Attentive, Smile.io, LoyaltyLion, Nosto, LimeSpot, Klevu, Judge.me (WooCommerce-specific), Linnworks, ChannelAdvisor, standalone Amazon connector, standalone Google Customer Reviews / seller-ratings plugin
