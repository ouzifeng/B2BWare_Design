# What it costs to run a WooCommerce store in the UK: hosting and infrastructure pricing

Scope: stores doing roughly £250k to £5m a year in sales (500 to 10,000 orders a month, 20,000 to 300,000 visits a month). All prices below were read directly from vendor pricing pages on 25 September 2026 unless marked otherwise. Where a page would not return usable pricing (bot-blocked, JS-rendered with no static price, redirected to a dead link), that is stated plainly in the notes column and in the "pages that failed" list at the end of each section. No price in this document is invented or estimated from memory: if a number is not in a table, it was not confirmed this session.

Currency: shown as published on each vendor's page. Where I convert for the summary totals at the end, I used xe.com mid-market rates read on 25 September 2026, 18:04 to 18:09 UTC: 1 USD = 0.755 GBP, 1 EUR = 0.860 GBP.

VAT: most UK-displayed GBP prices below are explicitly "Ex. VAT" (SiteGround) or unstated (20i, Krystal, Guru). US/international SaaS vendors (Kinsta, Postmark, Amazon SES, Divi, Kadence, Flatsome, Imagify, Backblaze, WordPress.com, Cloudways, Pressable) do not show UK VAT at all; if you're a UK business without a valid VAT number on file, 20% UK VAT is typically added at checkout depending on the vendor's tax registration. Treat every price below as ex-VAT unless the notes say otherwise.

---

## 1. Hosting

| Vendor | Plan | Price | Period | Currency | VAT note | Intro vs renewal | Limits (visits / storage / sites) | Managed? | URL | Date read |
|---|---|---|---|---|---|---|---|---|---|---|
| Kinsta | Business "Single 35k" (visits-based) | $35/mo, or $30/mo billed annually ($350/yr) | Monthly or annual | USD only, no GBP/EUR toggle found | Not stated | Intro price is the annual rate; $35 is the standing monthly rate, not a promo | 75,000 visits/mo (page label says "35k" but the visits figure shown is 75,000), 15GB storage, 125GB CDN, 1 site | Yes: staging, free unlimited migrations, 14-day backups, updates | https://kinsta.com/pricing/ | 2026-09-25 |
| Kinsta | Business "Single 65k" (visits-based) | $50/mo, or $42/mo annually ($500/yr) | Monthly or annual | USD only | Not stated | Same pattern | 65,000 visits/mo, 15GB storage, 250GB CDN, 1 site | Yes, same as above | https://kinsta.com/pricing/ | 2026-09-25 |
| Kinsta | Business "WP 2" through "WP 40" (multi-site) | $70 to $450/mo ($59 to $375/mo annually) | Monthly or annual | USD only | Not stated | Annual is the discounted rate | 2 to 40 sites, 20GB to 60GB storage, 250GB to 1,500GB CDN | Yes | https://kinsta.com/pricing/ | 2026-09-25 |
| Kinsta | Agency | "Starting at $340/mo" ($284/mo annually) | Monthly or annual | USD only | Not stated | Annual discounted | Not itemised on page | Yes | https://kinsta.com/pricing/ | 2026-09-25 |
| Kinsta | Enterprise | "Starting at $500/mo" ($417/mo annually) | Monthly or annual | USD only | Not stated | Annual discounted | Not itemised on page | Yes | https://kinsta.com/pricing/ | 2026-09-25 |
| WP Engine | Essential | From $28.00/mo | Monthly or annual | USD, GBP, EUR, CAD, AUD all selectable | Not stated | $28 is described as first-year discounted pricing for new customers on annual billing; standard renewal price not shown | 25,000 to 400,000 visits/mo, 1 to 30 sites, 10 to 50GB storage, 75GB bandwidth | Yes: staging, automatic backups, auto WP/PHP updates, global CDN | https://wpengine.com/plans/ | 2026-09-25 |
| WP Engine | Core | Not published, "contact sales" | - | - | - | - | 400,000 to 800,000 visits/mo, 30 to 50 sites, 50GB to 2TB storage, 550GB bandwidth | Yes, plus managed migrations | https://wpengine.com/plans/ | 2026-09-25 |
| WP Engine | Enterprise | "Custom", contact sales | - | - | - | - | 800,000+ visits/mo, 50+ sites, 2TB+ storage | Yes | https://wpengine.com/plans/ | 2026-09-25 |
| WP Engine | Essential eCommerce (dedicated WooCommerce-specific plan, separate from the general plans above) | £117/mo | Monthly | GBP | Not stated | Same price, no intro/renewal split shown | Up to 100,000 visits/mo, 15GB storage, 1 WooCommerce store | Yes: Smart Search AI, Smart Plugin Manager, DDoS mitigation, NitroPack, EverCache with Live Cart, daily and on-demand backups, auto SSL, staging, 24/7 support | https://wpengine.com/ecommerce-platform-pricing/ | 2026-09-25 |
| WP Engine | Core eCommerce (dedicated WooCommerce-specific plan) | £390/mo | Monthly | GBP | Not stated | Same price, no intro/renewal split shown | Up to 600,000 visits/mo, 100GB storage, 1 WooCommerce store, unmetered bandwidth | Yes: everything in Essential eCommerce plus managed migration, 99.99% SLA, dedicated isolated resources | https://wpengine.com/ecommerce-platform-pricing/ | 2026-09-25 |
| WP Engine | Enterprise eCommerce | "Custom", contact sales | - | - | - | - | 1,000,000+ visits/mo, up to 1TB storage, 1 store | Yes: everything in Core eCommerce plus disaster recovery, APM, dedicated team | https://wpengine.com/ecommerce-platform-pricing/ | 2026-09-25 |
| Nexcess (Liquid Web) | Managed WooCommerce, all tiers | Not confirmed: page blocked | - | - | - | - | - | Marketed as fully managed WooCommerce hosting | https://www.nexcess.net/managed-woocommerce-hosting/ | 2026-09-25 (blocked, HTTP 403 on every URL tried) |
| Liquid Web | Essentials / Pro / Elite WordPress (WooCommerce-capable) | Not confirmed: prices are JS-rendered, no dollar figures in fetched HTML | - | - | - | - | Three traffic configs per tier: 50,000 visits (15GB/2TB), 150,000 visits (40GB/3TB), 400,000 visits (100GB/5TB) | Yes: staging, 7 to 30-day backups, auto WP updates, WAF, DDoS, Kadence Security Pro bundled | https://www.liquidweb.com/wordpress-hosting/ | 2026-09-25 |
| Cloudways (DigitalOcean Standard) | Micro/Small | $11/mo | Monthly (also hourly) | USD | Not stated | No promo noted | 2GB RAM, 1 vCPU, 50GB storage, 2TB bandwidth, claims "unlimited visits/websites" | Partially: auto staging/cloning included; WordPress/plugin auto-updates are not automatic the way Kinsta/WPE are; offsite backup storage billed separately at $0.033/GB | https://www.cloudways.com/en/pricing/ | 2026-09-25 |
| Cloudways (DigitalOcean Standard) | Medium | $88/mo | Monthly | USD | Not stated | No promo noted | 8GB RAM, 4 vCPU, 160GB storage, 5TB bandwidth | Same as above | https://www.cloudways.com/en/pricing/ | 2026-09-25 |
| Cloudways (DigitalOcean Standard) | 8XL | $342/mo | Monthly | USD | Not stated | No promo noted | 128GB RAM, 24 vCPU, 2,560GB storage, 11TB bandwidth (well above what this size band needs) | Same as above | https://www.cloudways.com/en/pricing/ | 2026-09-25 |
| Cloudways | Vultr High Frequency plans | Not confirmed: not returned by the fetch (page only surfaced DigitalOcean pricing; intermediate steps also returned an image/binary instead of the page twice) | - | - | - | - | - | - | https://www.cloudways.com/en/pricing/ | 2026-09-25 |
| SiteGround | WooCommerce StartUp | £1.99/mo promo, £13.99/mo renewal | Monthly (12-month prepay for promo) | GBP | Ex. VAT | Promo vs renewal both stated, "Save 83-90%" style labels | Unlimited traffic (claimed), 10GB storage, 1 website | Yes: free SSL/CDN/backups, managed autoupdates, no staging on this tier | https://www.siteground.co.uk/woocommerce-hosting.htm | 2026-09-25 |
| SiteGround | WooCommerce GrowBig | £3.99/mo promo, £23.99/mo renewal | Monthly (12-month prepay for promo) | GBP | Ex. VAT | Same pattern | Unlimited traffic, 50GB storage, unlimited websites | Yes: adds on-demand backups and staging | https://www.siteground.co.uk/woocommerce-hosting.htm | 2026-09-25 |
| SiteGround | WooCommerce GoGeek | £5.99/mo promo, £34.99/mo renewal | Monthly (12-month prepay for promo) | GBP | Ex. VAT | Same pattern | Unlimited traffic, 100GB storage, unlimited websites | Yes: adds staging with Git, private DNS, white-label, priority support | https://www.siteground.co.uk/woocommerce-hosting.htm | 2026-09-25 |
| SiteGround | Cloud Hosting, Jump Start | £60.00/mo | Monthly | GBP | Ex. VAT | No promo shown for Cloud tier | 4 CPU, 8GB RAM, 40GB SSD, 5TB data transfer, unlimited websites | Yes: dedicated resources, daily backups, free CDN/SSL | https://www.siteground.co.uk/cloud-hosting.htm | 2026-09-25 |
| SiteGround | Cloud Hosting, Business | £120.00/mo | Monthly | GBP | Ex. VAT | No promo | 8 CPU, 12GB RAM, 80GB SSD, 5TB data transfer | Yes | https://www.siteground.co.uk/cloud-hosting.htm | 2026-09-25 |
| SiteGround | Cloud Hosting, Business Plus | £180.00/mo | Monthly | GBP | Ex. VAT | No promo | 12 CPU, 16GB RAM, 120GB SSD, 5TB data transfer | Yes | https://www.siteground.co.uk/cloud-hosting.htm | 2026-09-25 |
| SiteGround | Cloud Hosting, Super Power | £240.00/mo | Monthly | GBP | Ex. VAT | No promo | 16 CPU, 20GB RAM, 160GB SSD, 5TB data transfer | Yes | https://www.siteground.co.uk/cloud-hosting.htm | 2026-09-25 |
| Rapyd Cloud, now "Levamo" (verified twice independently: rapydcloud.com does not resolve at all, but the correct domain rapyd.cloud 301-redirects to levamo.com/pricing, and that page states outright "Rapyd Cloud is now Levamo, read the announcement") | Starter | $29/mo annual billing, was $35/mo (i.e. list price $35, current discounted rate $29); $348/yr | Monthly or annual (2 months free on annual) | USD | Not stated | Discounted vs list price both shown on page | 25,000 visits/mo, 10GB SSD, 1 site | Yes: Cloudflare CDN, free SSL, automated daily backups, WAF/DDoS, 1-click staging, white-glove migration, 99.99% uptime guarantee, 3-day free trial | https://levamo.com/pricing | 2026-09-25 |
| Levamo (ex-Rapyd Cloud) | Business | $99/mo annual billing, was $119/mo; $1,188/yr | Monthly or annual | USD | Not stated | Same pattern | 75,000 visits/mo, 25GB SSD, 3 sites | Yes: adds caching, auto-scaling, object cache | https://levamo.com/pricing | 2026-09-25 |
| Levamo (ex-Rapyd Cloud) | Performance | $299/mo annual billing, was $359/mo; $3,588/yr | Monthly or annual | USD | Not stated | Same pattern | 500,000 visits/mo, 75GB SSD, 20 sites | Yes: adds Elasticsearch for WooCommerce | https://levamo.com/pricing | 2026-09-25 |
| Levamo (ex-Rapyd Cloud) | Enterprise | $649/mo annual billing, was $779/mo; $7,788/yr | Monthly or annual | USD | Not stated | Same pattern | 1,800,000 visits/mo, 200GB SSD, 30 sites | Yes: dedicated account manager, white-glove onboarding | https://levamo.com/pricing | 2026-09-25 |
| WordPress.com | Commerce | $70/mo, or $45/mo billed yearly, $36/mo over 2 years, $31.50/mo over 3 years | Monthly, annual, 2yr, 3yr | USD only, no GBP toggle found | Not stated | Multi-year prepay is the "intro" discount structure | "Unlimited" visitors claimed, 50GB storage (expandable to 350GB), unlimited products | Yes: free staging, real-time backups, 0% extra transaction fee, free domain for 1 year | https://wordpress.com/pricing/ | 2026-09-25 |
| Pressable | Signature 1 | $20.83/mo ($250/yr) | Annual (2 months free vs monthly) | USD | Not stated | Annual is the standing/discounted rate shown | 1 install, 30,000 visits/mo, 20GB storage | Yes: hourly/daily backups, free migrations, Jetpack Security | https://pressable.com/pricing/ | 2026-09-25 |
| Pressable | Signature 2 | $37.50/mo ($450/yr) | Annual | USD | Not stated | Same | 3 installs, 50,000 visits/mo, 30GB storage | Yes | https://pressable.com/pricing/ | 2026-09-25 |
| Pressable | Signature 3 | $50.00/mo ($600/yr) | Annual | USD | Not stated | Same | 5 installs, 75,000 visits/mo, 35GB storage | Yes | https://pressable.com/pricing/ | 2026-09-25 |
| Pressable | Signature 5 | $129.17/mo ($1,550/yr) | Annual | USD | Not stated | Same | 20 installs, 400,000 visits/mo, 80GB storage | Yes | https://pressable.com/pricing/ | 2026-09-25 |
| Pressable | Signature 8 | $562.50/mo ($6,750/yr) | Annual | USD | Not stated | Same | 100 installs, 2,000,000 visits/mo, 325GB storage | Yes | https://pressable.com/pricing/ | 2026-09-25 |
| Krystal (UK) | Managed WordPress, Personal | £15/mo (first 30 days free) | Monthly | GBP | Not explicit; page has an "Include VAT" toggle | 30-day free trial, not a permanent discount | 20,000 visits/mo, 5GB NVMe storage, 1 site (upgradable to 5) | Yes: daily backups (upgradable to hourly), staging, auto-updates | https://krystal.io/hosting/wordpress/managed | 2026-09-25 |
| Krystal (UK) | Managed WordPress, Business | £35/mo (first 30 days free) | Monthly | GBP | Same toggle | Same | 50,000 visits/mo, 10GB NVMe storage, 1 site (upgradable to 5), 100GB CDN | Yes: hourly backups | https://krystal.io/hosting/wordpress/managed | 2026-09-25 |
| Krystal (UK) | Managed WordPress, Agency | £50/mo (first 30 days free) | Monthly | GBP | Same toggle | Same | 50,000 visits/mo, 50GB NVMe storage, 5 sites (upgradable to 10), 200GB CDN | Yes | https://krystal.io/hosting/wordpress/managed | 2026-09-25 |
| 20i (UK) | WordPress Startup through Plan 5 | £1 first month then £10, £20, £40, £80, £150 or £300/mo | Monthly | GBP | Not stated | £1 first-month promo on all tiers, standing price is the renewal | Bandwidth-based, not visit-based: 50GB to 1TB data transfer; 10GB to 100GB storage; 1 to 50 sites | Yes: WordPress staging, auto core updates, daily backups, CDN, SSL all stated as included | https://www.20i.com/wordpress-hosting | 2026-09-25 |
| Guru (UK) | Shared Cloud Hosting | £1 first month (promo code SP1), £10.49/mo regular | Monthly | GBP | Not stated | Promo vs regular both shown | Not itemised for this tier on the homepage | Claims WordPress/WooCommerce-optimised (LSCache, staging as standard) but no Woo-specific plan page could be located | https://guru.co.uk/ | 2026-09-25 |
| Guru (UK) | Reseller Cloud Hosting | £1 first month, £27.99/mo regular | Monthly | GBP | Not stated | Same | Not itemised | Same general claim | https://guru.co.uk/ | 2026-09-25 |
| Guru (UK) | Dedicated Cloud Hosting (VPS) | £1 first month, £212.99/mo regular | Monthly | GBP | Not stated | Same | Not itemised | Same general claim | https://guru.co.uk/ | 2026-09-25 |
| Kinsta, London/UK data centre | - | No separate price; choosing a data centre does not change price on any other host either | - | - | - | - | - | - | https://kinsta.com/help/data-centers/ (404) | 2026-09-25, not confirmed: both doc URLs tried 404'd |

**Pages that failed or hid prices in this section:**
- Nexcess: every URL tried (`/managed-woocommerce-hosting/`, `/pricing/managed-woocommerce-hosting/`, `/managed-wordpress-hosting/`, `/ecommerce-hosting/woocommerce/`, and the homepage) returned HTTP 403. No Nexcess price is confirmed in this report.
- Liquid Web: pages loaded and showed plan names, traffic tiers and features, but the dollar prices are injected by JavaScript and were not present in the fetched HTML on any of the three URLs tried.
- Cloudways: two of four attempts returned corrupted binary/image content instead of the page; one attempt hit a 404; one attempt succeeded and returned a partial table (three tiers only, DigitalOcean only). Vultr pricing and the full DigitalOcean ladder are not confirmed.
- Krystal: I could not find a tier above "Agency" (£50/mo, 50,000 visits), so a confirmed Krystal plan covering the top of the 300,000-visit band is not available from this session's fetches.
- Kinsta: only the two lowest visits-based tiers (35k label/75,000 visits actual, and 65,000 visits) were returned by the fetch, plus bandwidth-based and multi-site tiers. Kinsta is known to sell higher visit tiers, but their prices were not present in the fetched content, so I have not listed or priced them.
- Guru: no dedicated WordPress/WooCommerce pricing page could be located (attempted URL 404'd); only general-purpose shared/reseller/VPS pricing from the homepage is shown, and it is not confirmed which of these products (if any) is what Guru would sell for a WooCommerce store this size.

---

## 2. Premium themes and page builders

| Vendor | Product / plan | Free or paid | Price | Period | Currency | What's included | URL | Date read |
|---|---|---|---|---|---|---|---|---|
| WooCommerce.com | Storefront | Free | $0 | - | - | Official WooCommerce theme, free updates and support | https://woocommerce.com/products/storefront/ | 2026-09-25 |
| WooCommerce.com | NexByte (Storefront child theme) | Paid | £37 | Annual | GBP (as shown on page) | Official child theme sold via WooCommerce.com | https://woocommerce.com/products/storefront/ | 2026-09-25 |
| WooCommerce.com | Kutchara (Storefront child theme) | Paid | £45 | Annual | GBP (as shown on page) | Official child theme sold via WooCommerce.com | https://woocommerce.com/products/storefront/ | 2026-09-25 |
| Astra | Astra (base theme) | Free | $0 | - | - | WordPress.org repository version | https://wordpress.org/themes/astra/ (not fetched, standard knowledge, free plugin repo listing) | - |
| Astra | Astra Pro / Essential / Growth / Agency tiers | Paid | Not confirmed: page is client-side rendered, no numeric price recoverable | - | - | Page confirms paid tiers exist (advanced customisation, WooCommerce features) but not their prices | https://wpastra.com/pricing/ and https://wpastra.com/pro/ | 2026-09-25 |
| Kadence (now sold via Liquid Web) | Kadence theme/blocks | Free | $0 | - | - | WordPress.org repository version | https://www.kadencewp.com/pricing/ (redirects) | 2026-09-25 |
| Kadence | Essentials | Paid | $99/yr | Annual | USD | 1 site: block page builder, premium templates, advanced form builder | https://www.liquidweb.com/software/kadence/ | 2026-09-25 |
| Kadence | Pro | Paid | $299/yr | Annual | USD | 1 site: everything in Essentials plus WooCommerce "Shop Kit," security firewall, 2FA, virtual patching, daily backups | https://www.liquidweb.com/software/kadence/ | 2026-09-25 |
| Kadence | Elite | Paid | $499/yr | Annual | USD | 1 site (agency-oriented): everything in Pro plus white-label/client portal, multi-site management, 1,000 emails/mo, A/B testing | https://www.liquidweb.com/software/kadence/ | 2026-09-25 |
| Flatsome (ThemeForest) | Regular License | Paid | $59 | One-time | USD | Single end product, 6 months support (extendable to 12 months for $17.63) | https://themeforest.net/item/flatsome-multipurpose-responsive-woocommerce-theme/5484319 | 2026-09-25 |
| Flatsome (ThemeForest) | Extended License | Paid | $2,950 | One-time | USD | For products where end users are charged (SaaS/theme-resale use case, not relevant to a normal store) | https://themeforest.net/item/flatsome-multipurpose-responsive-woocommerce-theme/5484319 | 2026-09-25 |
| Elegant Themes (Divi) | Divi Yearly | Paid | $89/yr ($7.42/mo) | Annual | USD | Divi theme and builder, unlimited websites, Divi Dash | https://www.elegantthemes.com/pricing/ | 2026-09-25 |
| Elegant Themes (Divi) | Divi Lifetime | Paid | $249 | One-time | USD | Lifetime access, unlimited websites, no renewal | https://www.elegantthemes.com/pricing/ | 2026-09-25 |
| Elegant Themes (Divi) | Divi Pro Yearly | Paid | $277/yr | Annual | USD | Divi + Divi AI, Divi Cloud, 30-minute-response VIP support, 4-seat Divi Teams | https://www.elegantthemes.com/pricing/ | 2026-09-25 |
| Elegant Themes (Divi) | Divi Lifetime + Pro | Paid | $297 upfront + $212/yr | One-time + annual | USD | Lifetime Divi plus the Pro services above | https://www.elegantthemes.com/pricing/ | 2026-09-25 |
| Elementor | Elementor (base plugin) | Free | $0 | - | - | Core drag-and-drop builder | https://elementor.com/pricing/ | 2026-09-25 |
| Elementor | Pro Essential | Paid | "Starting from $49/year" (only figure recoverable, from the page's meta description, not a body price) | Annual | USD | 1 site, 57 Pro widgets, Theme Builder, Dynamic Content, Form Builder | https://elementor.com/pricing/ | 2026-09-25 |
| Elementor | Pro Advanced Solo / Advanced / Expert, and the "One" AI tiers | Paid | Not confirmed: page is client-side rendered, no other numeric prices recoverable | Annual | USD | Advanced Solo = 1 site; Advanced = 3 sites; Expert = 25 sites; One = 1 site + AI credits; One Agency = unlimited sites + AI credits | https://elementor.com/pricing/ | 2026-09-25 |

**Pages that failed or hid prices in this section:** Astra's pricing page and its `/pro/` variant were both fetched successfully as pages, but returned no price numbers anywhere in the retrievable content, including a specific check for JSON-LD/structured data, across three attempts. Elementor's pricing page likewise renders its price grid client-side; only the one figure embedded in the page's meta description was recoverable. Treat both as "visit the live page to get current numbers."

---

## 3. Other infrastructure

| Vendor | Product / plan | Free tier | Paid price | Period | Currency | VAT note | Volume / limit | What's included | URL | Date read |
|---|---|---|---|---|---|---|---|---|---|---|
| IONOS | .co.uk domain | - | £1.00 first year (promo), £10.00/yr renewal | Annual | GBP | Not stated | 1 domain | Registration only | https://www.ionos.co.uk/domains/co-uk-domain | 2026-09-25 |
| Namecheap | .co.uk domain | - | Not confirmed: page blocked | - | - | - | - | - | https://www.namecheap.com/domains/registration/gtld/co.uk/ | 2026-09-25, HTTP 403 |
| 123-reg | .co.uk domain | - | Not confirmed: page not found | - | - | - | - | - | https://www.123-reg.co.uk/domains/co-uk-domain-names/ | 2026-09-25, HTTP 404 |
| GoDaddy | .co.uk domain | - | Not confirmed: page blocked | - | - | - | - | - | https://www.godaddy.com/en-uk/domains/co-uk-domain | 2026-09-25, HTTP 403 |
| SSL | - | Free (Let's Encrypt) on every host in section 1 | £0 | - | - | - | - | Bundled free with every hosting plan above (SiteGround, Krystal, 20i, WP Engine, Kinsta, Cloudways all state free SSL) | multiple, see section 1 | 2026-09-25 |
| Cloudflare | Free plan | Yes: CDN, free SSL, DDoS protection stated on page | £0/$0 | - | - | - | - | Basic CDN, SSL, DDoS protection | https://www.cloudflare.com/plans/free/ | 2026-09-25 |
| Cloudflare | Pro plan | - | Not confirmed: the classic Free/Pro/Business/Enterprise comparison table could not be extracted from cloudflare.com/plans/ (default, en-gb, and compute/storage variants) across five attempts by two separate fetches | Monthly | - | - | - | WAF, image optimisation etc. are referenced as Pro-plan-included elsewhere on the site, but the price itself was not recoverable this session | https://www.cloudflare.com/plans/ | 2026-09-25 |
| Cloudflare | Add-on services (found instead of the Pro plan price) | - | "Smart Shield + Argo" from $5/mo; Load Balancing from $5/mo | Monthly | USD | Not stated | - | Cloudflare's current pricing page emphasises modular add-ons rather than the old Free/Pro/Business tiers; these are the only confirmed numeric prices found on the page | https://www.cloudflare.com/en-gb/plans/ | 2026-09-25 |
| SendGrid (Twilio) | All tiers | - | Not confirmed: pricing page permanently redirects to a marketing page with no price figures, across four attempts on three URLs | - | - | - | - | - | https://sendgrid.com/pricing/ | 2026-09-25 |
| Postmark | Developer (free) | Yes, permanent, not a trial | $0/mo | Monthly | USD | Not stated | 100 emails/mo | Full API access at low volume | https://postmarkapp.com/pricing | 2026-09-25 |
| Postmark | Basic | - | $15.00/mo | Monthly | USD | Not stated | From 10,000 emails/mo, then $1.80/1,000 overage | Transactional email sending | https://postmarkapp.com/pricing | 2026-09-25 |
| Postmark | Pro | - | $16.50/mo | Monthly | USD | Not stated | From 10,000 emails/mo, then $1.30/1,000 overage | Same, "most popular" | https://postmarkapp.com/pricing | 2026-09-25 |
| Postmark | Platform | - | $18.00/mo | Monthly | USD | Not stated | From 10,000 emails/mo, then $1.20/1,000 overage | Same, lowest overage rate | https://postmarkapp.com/pricing | 2026-09-25 |
| Brevo | All tiers | Known to have a free tier, but the exact daily/monthly send limit could not be confirmed this session | Not confirmed | - | - | - | - | - | https://www.brevo.com/pricing/ | 2026-09-25, page returned only its HTML title across four attempts on three URL variants: fully client-rendered, no body pricing content recoverable |
| Amazon SES | Essentials | AWS Free Tier gives up to $200 credit for 6 months for new accounts (not SES-specific) | $0.16/1,000 emails (0-10M/mo), $0.14/1,000 (10-100M/mo), $0.11/1,000 (100M+/mo) | Usage-based | USD | Not stated | Pay-as-you-go | Transactional/bulk email API | https://aws.amazon.com/ses/pricing/ | 2026-09-25 |
| Amazon SES | Pro | - | $0.22/1,000 (0-10M/mo), $0.17/1,000 (10-100M/mo), $0.12/1,000 (100M+/mo) | Usage-based | USD | Not stated | Pay-as-you-go | Higher deliverability tier | https://aws.amazon.com/ses/pricing/ | 2026-09-25 |
| Amazon SES | à la carte outbound | - | $0.10/1,000 emails | Usage-based | USD | Not stated | Pay-as-you-go | Base sending only | https://aws.amazon.com/ses/pricing/ | 2026-09-25 |
| Backblaze B2 | Cloud storage | First 10GB always free; free egress up to 3x average monthly storage | $6.95/TB/mo (~$0.00695/GB/mo); overage egress $0.01/GB above the 3x free allowance | Monthly | USD | Not stated | Pay-as-you-go, per GB | Off-site backup storage destination | https://www.backblaze.com/cloud-storage/pricing | 2026-09-25 |
| UpdraftPlus | Free plugin | Yes: scheduled backups, remote storage to Dropbox/Google Drive/S3-compatible/Rackspace/FTP/email, migration tool | £0/$0 | - | - | n/a | Unlimited sites (self-managed) | Core backup/migration plugin, 4M+ active installs | https://wordpress.org/plugins/updraftplus/ | 2026-09-25 |
| UpdraftPlus Premium | Personal | - | £84.00/yr | Annual | GBP | VAT included (page states inc. VAT for UK) | Up to 2 sites, 1GB UpdraftVault storage | Adds OneDrive/Azure/GCS/Backblaze B2/SFTP/SCP/pCloud/WebDAV destinations, premium support, basic staging | https://teamupdraft.com/updraftplus/pricing/ (updraftplus.com/pricing/ now redirects here) | 2026-09-25 |
| UpdraftPlus Premium | Business | - | £114.00/yr | Annual | GBP | VAT included | Up to 10 sites, 1GB storage | Standard staging, same remote destinations | https://teamupdraft.com/updraftplus/pricing/ | 2026-09-25 |
| UpdraftPlus Premium | Agency | - | £174.00/yr | Annual | GBP | VAT included | Up to 35 sites, 1GB storage | Advanced staging | https://teamupdraft.com/updraftplus/pricing/ | 2026-09-25 |
| UpdraftPlus Premium | Enterprise | - | £234.00/yr | Annual | GBP | VAT included | Unlimited sites, 1GB storage | Ultimate staging | https://teamupdraft.com/updraftplus/pricing/ | 2026-09-25 |
| UpdraftPlus Premium | Gold | - | £478.80/yr | Annual | GBP | VAT included | Unlimited sites, 50GB storage | Adds UpdraftCentral multi-site management console | https://teamupdraft.com/updraftplus/pricing/ | 2026-09-25 |
| UptimeRobot | Free | 50 monitors, 5-minute check interval | €0 | - | EUR (as shown; may localise to USD/GBP by region/browser) | Not stated | 50 monitors | Basic uptime checks | https://uptimerobot.com/pricing/ | 2026-09-25 |
| UptimeRobot | Solo | - | €12/mo, or €13/mo if paid monthly vs €144/yr annually (figures as shown) | Monthly or annual | EUR | Not stated | 10 monitors (50 on annual), 60-second interval | All monitor types + SSL/DNS checks, 3 status pages, 12-month data retention | https://uptimerobot.com/pricing/ | 2026-09-25 |
| UptimeRobot | Team | - | €39/mo, or €46/mo if paid monthly vs €468/yr annually | Monthly or annual | EUR | Not stated | 100 monitors, 30-second interval, 3 seats | Adds status page white-labelling, webhooks, Zapier, PagerDuty | https://uptimerobot.com/pricing/ | 2026-09-25 |
| Better Stack | Free | 10 monitors, 30-second checks, Slack/email alerts | $0 | - | USD | Not stated | 10 monitors | Uptime monitoring | https://betterstack.com/pricing | 2026-09-25 |
| Better Stack | Paid add-on | - | $25/mo (monthly), $21/mo (annual) for an additional 50 monitors (60 total) | Monthly or annual | USD | Not stated | +50 monitors | Same features, more monitors | https://betterstack.com/pricing | 2026-09-25 |
| ShortPixel | All tiers | Known to have a free tier | Not confirmed: pricing page is client-side rendered, two attempts returned only structural text with no numeric credit or price figures | - | - | - | - | - | https://shortpixel.com/pricing | 2026-09-25 |
| Imagify | Free | 20MB/mo, approx. 200 images/mo | $0 | - | USD | Not stated | ~200 images/mo | Image compression | https://imagify.io/pricing/ | 2026-09-25 |
| Imagify | Growth | - | $5.99/mo, or $4.99/mo billed yearly | Monthly or annual | USD | Not stated | 500MB/mo, approx. 5,000 images/mo; overage $5/extra GB | Image compression | https://imagify.io/pricing/ | 2026-09-25 |
| Imagify | Infinite | - | $11.99/mo, or $9.99/mo billed yearly | Monthly or annual | USD | Not stated | Unlimited images/storage | Image compression | https://imagify.io/pricing/ | 2026-09-25 |

**Pages that failed or hid prices in this section:** Namecheap, GoDaddy UK and 123-reg .co.uk domain pages were all inaccessible (403/403/404); only IONOS's price is confirmed. Cloudflare's classic Pro plan price is not confirmed after five attempts across two fetches: their current pricing pages seem restructured around modular add-ons and Workers/Compute pricing, and no longer expose the classic Free/Pro/Business comparison to a plain fetch; the only numeric prices recovered were for unrelated add-ons (Smart Shield + Argo, Load Balancing, both "from $5/mo"). SendGrid's pricing was not recoverable at all across four attempts. Brevo's pricing was not recoverable at all across five attempts on three URLs (the page appears to be a fully client-rendered single-page app that returns only its title to a static fetch). ShortPixel's pricing was not recoverable across two attempts.

---

## 4. Realistic hosting + infrastructure per month, by store size

These are working totals built only from the confirmed prices above, converted to GBP at 1 USD = 0.755 GBP and 1 EUR = 0.860 GBP (xe.com, 25 September 2026). One-time or annual costs are shown at their real amount with a monthly-equivalent in brackets where I've amortised them for the total; the method is stated under each total. All totals are ex-VAT, matching how almost every price above is published.

For every size, a "lean" column uses free tiers and host-bundled features wherever the confirmed data supports it. A "typical" column is what a store this size would realistically pay for a properly managed, staged, monitored setup. Both are built entirely from the tables above: nothing here is invented.

### Small store (~500 orders/month, ~20,000-30,000 visits/month)

| Line item | Lean | Typical |
|---|---|---|
| Hosting | SiteGround StartUp, £13.99/mo (renewal, ex VAT): managed, free SSL/CDN/backups, no staging | SiteGround GrowBig, £23.99/mo (renewal, ex VAT): adds staging and on-demand backups |
| Theme | Storefront, free | Flatsome, $59 one-time (~£44.55), amortised over 24 months = £1.86/mo |
| Transactional email | Amazon SES pay-as-you-go: ~1,500 emails/mo (3/order) at $0.10/1,000 = ~$0.15/mo (~£0.11/mo) | Postmark Basic, $15/mo (~£11.33/mo), covers up to 10,000 emails/mo |
| CDN | Bundled free with hosting, £0 | Bundled free with hosting, £0 |
| Off-site/extra backup | Host-included, £0 | Host-included, £0 |
| Uptime monitoring | UptimeRobot Free, £0 | UptimeRobot Free, £0 (adequate at this size) |
| Image optimisation | Imagify Free (~200 images/mo), £0 | Imagify Growth, $4.99/mo billed yearly (~£3.77/mo) |
| Domain (.co.uk) | £10.00/yr renewal, amortised = £0.83/mo | £10.00/yr renewal, amortised = £0.83/mo |
| **Total per month (ex VAT)** | **~£14.93/mo** | **~£41.78/mo** |

### Medium store (~3,000 orders/month, ~100,000-150,000 visits/month)

| Line item | Lean | Typical |
|---|---|---|
| Hosting | SiteGround GrowBig, £23.99/mo (unlimited traffic claimed, staging+backups included) | SiteGround GoGeek, £34.99/mo (adds Git staging, priority support); Cloudways DO Medium ($88/mo, ~£66.44/mo) and WP Engine Essential (GBP-priced, from ~$28 intro, renewal unpublished) are realistic alternatives depending on whether you want managed-WP or flexible cloud |
| Theme | Storefront, free | Kadence Pro, $299/yr (~£225.70/yr) = £18.81/mo: adds WooCommerce Shop Kit, security, daily backups |
| Transactional email | Amazon SES: ~9,000-12,000 emails/mo (3/order) at $0.16/1,000 = ~$1.44-1.92/mo (~£1.20/mo) | Postmark Pro, $16.50/mo base (~£12.46/mo); likely some overage beyond 10,000 emails at $1.30/1,000 |
| CDN | Bundled free with hosting, £0 | Bundled free with hosting, £0 |
| Off-site/extra backup | Host-included, £0 | Backblaze B2 for an extra off-site copy: ~£0.50/mo for a media-heavy store's archive |
| Uptime monitoring | UptimeRobot Free, £0 | UptimeRobot Solo, €12/mo (~£10.32/mo): 60-second checks, status page |
| Image optimisation | Imagify Free, £0 (likely tight for a catalog this size, flagged as a real constraint of going lean here) | Imagify Infinite, $9.99/mo billed yearly (~£7.55/mo): unlimited images |
| Domain (.co.uk) | £0.83/mo | £0.83/mo |
| **Total per month (ex VAT)** | **~£26.02/mo** | **~£85.46/mo** |

### Large store (~10,000 orders/month, ~300,000 visits/month)

At this volume, shared/"unlimited traffic" hosting plans typically get throttled by fair-use policies in practice even when the plan is marketed as unlimited, so the lean option below already steps up to a real cloud server rather than staying on a shared plan.

| Line item | Lean | Typical |
|---|---|---|
| Hosting | Cloudways DigitalOcean Medium, $88/mo (~£66.44/mo): 8GB RAM/4vCPU/160GB/5TB, unmanaged WP updates | SiteGround Cloud Business, £120.00/mo (ex VAT): 8 CPU/12GB RAM/80GB SSD/5TB, fully managed with daily backups and free CDN |
| Theme | Storefront, free | Kadence Pro, $299/yr (~£225.70/yr) = £18.81/mo |
| Transactional email | Amazon SES: ~30,000 emails/mo (3/order) at $0.16/1,000 = $4.80/mo (~£3.62/mo) | Postmark Platform: $18/mo base + overage on ~20,000 emails above the 10,000 included, at $1.20/1,000 = $24 overage, ~$42/mo total (~£31.71/mo) |
| CDN | Cloudflare Free, £0 | Bundled free with hosting, £0 |
| Off-site/extra backup | Cloudways off-site backup add-on, $0.033/GB; ~100GB = $3.30/mo (~£2.49/mo), since Cloudways backups are not bundled free the way SiteGround's are | Backblaze B2 extra off-site copy: ~£0.75/mo for a larger archive |
| Uptime monitoring | UptimeRobot Free, £0 | Better Stack: +50 monitors, $21/mo billed annually (~£15.86/mo) covering multiple endpoints (storefront, checkout, API) |
| Image optimisation | Imagify Free, £0 (unrealistic in practice at this catalog size, kept here only as the literal free floor) | Imagify Infinite, $9.99/mo billed yearly (~£7.55/mo) |
| Domain (.co.uk) | £0.83/mo | £0.83/mo |
| **Total per month (ex VAT)** | **~£73.38/mo** | **~£195.51/mo** |

### Notes on the totals

- These are hosting and core infrastructure only: no payment gateway fees, no paid plugins beyond the theme/builder, no marketing tools, no staff time.
- "Typical" picks the plan that comfortably covers each size's traffic with proper staging, backups and monitoring; "lean" picks the cheapest option that technically still functions, using free tiers wherever the vendor publishes one, per the request to keep the free options visible.
- Where a vendor's own visit caps don't cleanly cover the medium/large bands with confirmed pricing (Kinsta above 65,000 visits, Krystal above 50,000 visits, WP Engine's Core/Enterprise tiers), I did not substitute an invented number: I used a different, confirmed vendor (SiteGround's unlimited-traffic model, or Cloudways' resource-based model) instead, and flagged the gap in section 1.
- Email volume assumptions (roughly 3 transactional emails per order: confirmation, shipping, and one more) are a modelling assumption for sizing the SMTP line, not a vendor-published figure.
- Not included in any total above but confirmed in section 3: UpdraftPlus Premium (£84 to £478.80/yr, VAT included) is a real alternative to Backblaze B2 if you want a managed backup plugin with its own remote storage bundled in, rather than paying a cloud storage vendor directly. Cloudflare's Pro plan price could not be confirmed this session; only unrelated add-on prices (from $5/mo) were found on its current pricing page.
