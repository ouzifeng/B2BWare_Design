# UK WooCommerce Running Costs (Excluding Hosting and Plugins)

Compiled 2026-09-25. Scope: a UK WooCommerce store doing roughly 500 to 10,000 orders a month (approximately £250k to £5m a year in sales). Covers payment processing, shipping/label software, accounting sync, email marketing, review platforms, and developer/maintenance support. Hosting and plugin licence costs are covered in the companion files `woo-hosting-infra-costs.md` and `woo-plugin-prices.md` in this same folder and are deliberately excluded here.

## Method note

Every price below was fetched directly from the vendor's own page (or, where a vendor blocked automated fetching, via a read-only proxy pointed at the same live URL) on 2026-09-25. Web search was used sparingly to locate candidate URLs and was exhausted partway through this research (the session hit its search-call budget), so several gaps below exist because a page could not be found or a JavaScript-only pricing calculator could not be executed. Where a number could not be confirmed, this document says so explicitly rather than estimating or inventing one. Currencies are kept as shown on the vendor's page. Where a total below required converting USD to GBP for comparability, the rate used is **1 USD = 0.755025 GBP**, the xe.com mid-market rate read on 2026-09-25; this is not the rate a card issuer would actually apply and is for rough comparison only.

---

## 1. Payment processing (UK rates)

| Vendor | Plan | Rate | Fixed fee per transaction | Currency | VAT note | URL | Date read |
|---|---|---|---|---|---|---|---|
| WooPayments | Standard, pay-as-you-go | 1.50% (UK domestic card) | £0.25 | GBP | 20% VAT is charged on fees unless the merchant is VAT-registered and supplies a VAT ID, in which case reverse charge applies and no VAT is added | woocommerce.com/document/woocommerce-payments/fees-and-debits/fees/ | 2026-09-25 |
| WooPayments | Standard, non-UK card | Domestic rate +2.00% surcharge (so approx. 3.50%) | £0.25 | GBP | as above | same | 2026-09-25 |
| WooPayments | Currency conversion | +2.00% extra when the customer pays in a currency different to your payout currency | n/a | GBP | as above | same | 2026-09-25 |
| WooPayments | In-person card reader | 1.40% (+2.00% non-UK cards) | £0.20 | GBP | as above | same | 2026-09-25 |
| WooPayments | Card reader hardware | £5.00/month per active reader; £15.00 per dispute/chargeback | n/a | GBP | as above | same | 2026-09-25 |
| Stripe | Standard, UK card | 1.5% | £0.20 | GBP | Price shown excludes VAT; Stripe states no setup, monthly, or hidden fees | stripe.com/gb/pricing | 2026-09-25 |
| Stripe | Standard, UK premium card | 2.8% | £0.20 | GBP | as above | same | 2026-09-25 |
| Stripe | EEA card | 2.5% (+2.00% if currency conversion needed) | £0.20 | GBP | as above | same | 2026-09-25 |
| Stripe | International (non-EEA) card | 3.15% (+2.00% if currency conversion needed) | £0.20 | GBP | as above | same | 2026-09-25 |
| Stripe | Payout | £0.50 per UK payout; international from £0.50 + 0.25% cross-border fee + 0.5% FX fee | n/a | GBP | as above | same | 2026-09-25 |
| PayPal | Standard commercial (online) | 2.9% | £0.30 | GBP | Fees shown exclude VAT | paypal.com/uk/webapps/mpp/merchant-fees | 2026-09-25 |
| PayPal | Card-funded/APM lower rate (non-PayPal-account payer) | 1.2% | £0.30 | GBP | as above | same | 2026-09-25 |
| PayPal | International surcharge | Domestic rate +1.29% (EEA sender) or +1.99% (rest of world) | n/a | GBP | as above | same | 2026-09-25 |
| PayPal | Micropayments (under £5) | 5% domestic / 6% international | micropayment fixed fee (not itemised) | GBP | as above | same | 2026-09-25 |
| PayPal | Currency conversion | 3% above the base exchange rate | n/a | GBP | as above | same | 2026-09-25 |
| PayPal | Charity (pre-approved) | 1.4% | fixed fee (not itemised) | GBP | as above | same | 2026-09-25 |
| Klarna | N/A | **Not published.** Page only offers "Get started" / "Contact us," no percentage or fixed fee shown anywhere | n/a | n/a | n/a | klarna.com/uk/business/ | 2026-09-25 |
| Clearpay | N/A | **Not published.** Two live pages checked (for-retailers, for-retailers/access), neither shows a rate; three other guessed URLs returned HTTP 404 | n/a | n/a | n/a | clearpay.co.uk/en-GB/for-retailers | 2026-09-25 |

**Payment fees as a worked example, £50 average order:**

| Gateway | Rate + fixed fee | Fee on a £50 order | Effective rate |
|---|---|---|---|
| WooPayments (UK domestic card) | 1.5% + £0.25 | £1.00 | 2.00% |
| Stripe (UK standard card) | 1.5% + £0.20 | £0.95 | 1.90% |
| PayPal (standard commercial) | 2.9% + £0.30 | £1.75 | 3.50% |
| PayPal (card-funded/APM lower rate) | 1.2% + £0.30 | £0.90 | 1.80% (only applies to a subset of transaction types, not the norm for a whole store) |

A real store blends gateways (some WooPayments/Stripe, some PayPal, some non-UK cards, occasional FX conversion), so the true blended rate will sit somewhere between roughly 1.9% and 3.5% depending on gateway mix. This report uses WooPayments' domestic rate (2.00% effective at £50 AOV) as the single baseline for the totals in Section 7, since WooPayments is WooCommerce's own default gateway, and flags that this is a simplification.

---

## 2. Shipping/label software (UK)

| Vendor | Plan | Price | Period | Currency | Orders/month included | VAT note | URL | Date read |
|---|---|---|---|---|---|---|---|---|
| Royal Mail | Click & Drop | £0 | n/a | GBP | Not capped; "always free to use, no monthly costs" for businesses sending under 20 parcels/week | Not stated on page | royalmail.com/business/parcel-delivery | 2026-09-25 |
| Royal Mail | Business Account (OBA), 20+ parcels/week | Discounted postage rates, **price not published** | n/a | GBP | Threshold 20+ parcels/week (approx. 87+/month); "spend £5,000+/year" unlocks wider international access | Not stated | royalmail.com/business/shipping/ways-pay/online-business-account | 2026-09-25 |
| ShipStation | Starter | $14.99 base (50 shipments), scaling to $174.99 at 5,000 shipments; no 10,000 tier offered | Monthly | USD (shown even on the /uk/ pricing path) | Tiered: 50/100/500/1,000/2,000/5,000 | Not mentioned | shipstation.com/uk/pricing/ | 2026-09-25 |
| ShipStation | Standard | $29.99 base, $89.99 at 500, $249.99 at 5,000, $449.99 at 10,000 | Monthly | USD | Tiered up to 100,000 | Not mentioned | same | 2026-09-25 |
| ShipStation | Premium | $349.99 base, $449.99 at 500, $799.99 at 5,000, $1,099.99 at 10,000 | Monthly | USD | Tiered up to 100,000 | Not mentioned | same | 2026-09-25 |
| Sendcloud | Free | £0 | Monthly | GBP | Up to 20 parcels/month | Not stated | sendcloud.com/en_uk/pricing/ | 2026-09-25 |
| Sendcloud | Lite | £7/mo + £0.07/label | Monthly (or annual, -20%) | GBP | Up to ~400/month (4,800/year cap) | Not stated | same | 2026-09-25 |
| Sendcloud | Growth | £31/mo + £0.06/label | Monthly (or annual, -20%) | GBP | Up to ~1,000/month (12,000/year cap) | Not stated | same | 2026-09-25 |
| Sendcloud | Premium | £79/mo + £0.05/label | Monthly (or annual, -20%) | GBP | Up to ~10,000/month (120,000/year cap) | Not stated | same | 2026-09-25 |
| Sendcloud | Pro | Price on request + £0.05/label | Monthly (or annual, -20%) | GBP | Up to ~30,000/month (360,000/year cap) | Not stated | same | 2026-09-25 |
| Veeqo | Shipping | £0 | n/a | Not GBP-specific on page | Unlimited, no cap disclosed | Not mentioned | veeqo.com/pricing | 2026-09-25 |
| Veeqo | Inventory | From $19/mo (usage-based) | Monthly | USD | n/a | Not mentioned | same | 2026-09-25 |
| Veeqo | High Volume | From $350/mo (usage-based) | Monthly | USD | n/a | Not mentioned | same | 2026-09-25 |
| Linnworks | All tiers | **Not published, contact sales.** Page confirms pricing is "tiered based on monthly orders" but gives no figures or thresholds | n/a | Not published | Tiered by order volume, thresholds not disclosed | Not published | linnworks.com/pricing/ | 2026-09-25 |
| Despatch Cloud (site now redirects to "Helm WMS," rebrand unconfirmed on-page) | Start Up | £50/mo | Monthly | GBP | Not published | Explicit: "Prices quoted exclude UK VAT and include a 20% discount for annual contracts" | despatchcloud.com/pricing (redirects to helmwms.com/pricing/) | 2026-09-25 |
| same | Business | £245/mo | Monthly | GBP | Not published | Same, exc VAT | same | 2026-09-25 |
| same | Ultimate | £395/mo | Monthly | GBP | Not published | Same, exc VAT | same | 2026-09-25 |
| same | Enterprise | Contact sales | n/a | GBP | Not published | Same, exc VAT | same | 2026-09-25 |
| Parcel2Go | Standard PAYG | From £2.15/parcel | Per shipment, no subscription | GBP | n/a, pay-as-you-go carrier rates | Explicit: "exc VAT" | parcel2go.com/business | 2026-09-25 |
| Parcel2Go | Business Account | Discounted per-parcel rates, up to 42% saving; no subscription fee found | Per shipment | GBP | Threshold 25+ parcels/week (approx. 108+/month) | Inherits "exc VAT" framing | same | 2026-09-25 |
| Parcel2Go | VIP | Discounted rates + account manager; no subscription fee found | Per shipment | GBP | Threshold avg 15 parcels/week (approx. 65/month) | as above | same | 2026-09-25 |

**Plan fit by store size (based only on published order caps):**

| Store size | Royal Mail | Sendcloud | ShipStation (USD) | Veeqo |
|---|---|---|---|---|
| ~500/month | Click & Drop free | Growth, £31 + £0.06/label = £61/mo | Starter 500-tier, $39.99/mo | Free |
| ~3,000/month | Click & Drop free, likely qualifies for undisclosed Business Account discount | Premium, £79 + £0.05/label = £229/mo | Standard 5,000-tier (next tier up), $249.99/mo | Free |
| ~10,000/month | Click & Drop free, qualifies for undisclosed Business Account discount | Premium, at its ~10,000 cap, £79 + £0.05/label = £579/mo (Sendcloud recommends Pro above this, price on request) | Standard 10,000-tier, $449.99/mo | Free |

Note: "free" for Click & Drop and Veeqo means no software/subscription fee. Both still monetise indirectly, Click & Drop through standard/undiscounted Royal Mail postage rates unless you qualify for a Business Account, and Veeqo through a small commission (up to 5% back in "Veeqo Credits" per its own page) baked into the carrier rates you book through it. Neither charges a separate visible software fee at any volume tested. Linnworks and Despatch Cloud publish no order-volume-to-price mapping, so no size-based recommendation is given for them; they are contact-sales only.

---

## 3. Accounting sync (Xero, QuickBooks, Sage)

| Vendor | Plan | Price | Period | Currency | Volume | VAT note | URL | Date read |
|---|---|---|---|---|---|---|---|---|
| MyWorks Sync | Free | £0 | n/a | USD | Up to 20 orders/month | Not stated | myworks.software/woocommerce-xero-integration/ | 2026-09-25 |
| MyWorks Sync | Paid (Xero or QuickBooks) | "Starting at $19/month, billed annually" | Monthly (annual billing) | USD | Not published beyond this floor price; exact price at higher order volumes is generated by a JavaScript/AJAX calculator on the live pricing page that resisted direct and API-level fetch (blocked by Cloudflare) | Not stated | myworks.software/pricing/ (calculator); static figure found on myworks.software/woocommerce-xero-integration/ | 2026-09-25 |
| A2X | N/A | **Does not support WooCommerce.** Confirmed zero mentions of "WooCommerce" across its pricing, homepage, and integrations pages; it connects Amazon, Shopify, Etsy, Walmart, eBay, and PayPal only | n/a | USD | n/a | n/a | a2xaccounting.com/pricing, a2xaccounting.com/integrations | 2026-09-25 |
| Link My Books | Pro / Premium | **Calculator-only, no static number retrievable.** Confirmed via raw HTML inspection that no plan price is embedded in the page; it is generated after entering orders/month (calculator spans roughly 200 to 250,000+ orders/month) and number of sales channels (Pro up to 5, Premium up to 10) | Monthly | User-selectable: GBP, USD, or AUD | Priced per orders/month | **Explicit on page: "All prices per month and exclude any applicable VAT"** | linkmybooks.com/pricing | 2026-09-25 |
| Zapier | Free | $0 | Monthly | USD (GBP/AUD toggle available) | 100 tasks/month | Not mentioned | zapier.com/pricing | 2026-09-25 |
| Zapier | Professional | From $19.99/mo (billed annually, "save 33%" vs monthly) | Monthly | USD | From 750 tasks/month, scaling to 2,000,000/month | Not mentioned | same | 2026-09-25 |
| Zapier | Team | From $69/mo (billed annually) | Monthly | USD | From approx. 2,000 tasks/month; up to 25 users | Not mentioned | same | 2026-09-25 |
| Zapier | Enterprise | Contact sales | n/a | USD | Custom | Not mentioned | same | 2026-09-25 |
| Sage: native integration | N/A | **Could not verify.** Sage's own integrations page returned HTTP 403 on every fetch attempt; unable to confirm whether Sage itself publishes a WooCommerce connector | n/a | n/a | n/a | sage.com/en-gb/sage-business-cloud/accounting/integrations/ | 2026-09-25 |
| eBridge Connections (now trading under Jitterbit) | All tiers | **Not published, contact sales.** eBridge's own pricing URL redirects to Jitterbit's, which lists Standard/Professional/Enterprise tiers with no dollar figures, "custom pricing based on your requirements" | n/a | n/a | n/a | jitterbit.com/pricing/ (redirected from ebridgeconnections.com/pricing/) | 2026-09-25 |
| SyncSpider | All tiers | **Not published, contact sales.** "Flexible Pricing Plan that suits Your Business Needs," no numeric tiers shown | n/a | n/a | n/a | syncspider.com/pricing/ | 2026-09-25 |
| Zapier + Sage Accounting | via Zapier plans above | Confirmed: Zapier has pre-built WooCommerce-to-Sage-Accounting templates (e.g. create Sage invoices from new Woo orders). No separate charge beyond Zapier's standard task-based plans above | Monthly | USD | Per Zapier plan | Not mentioned | zapier.com/apps/sage-accounting/integrations/woocommerce | 2026-09-25 |

**Bottom line on Sage:** no dedicated third-party connector was found that publishes an explicit price specifically for a WooCommerce-to-Sage connection. The only fully priced, verifiable route is generic automation via Zapier (which does officially support Sage Accounting plus WooCommerce templates), priced at Zapier's standard plans above. eBridge/Jitterbit and SyncSpider are real candidates but both are contact-sales-only.

**Bottom line on MyWorks and Link My Books:** both gate real prices behind interactive JavaScript calculators that resisted static fetching and direct API calls; only MyWorks' floor entry price ($19/month) was recoverable from static text elsewhere on its own site. Treat both as needing a manual check on the live calculator for an exact quote at a given order volume.

---

## 4. Email marketing (priced at 5,000 and 25,000 contacts where possible)

All four vendors below price using an interactive slider/calculator that computes the number after JavaScript runs; a plain page fetch does not execute this, so the exact price at 5,000 or 25,000 contacts could not be retrieved for any of them, confirmed after repeated attempts including UK-locale URLs and query-string attempts. Web search, the designated fallback, was exhausted session-wide before this could be tried as a backup. What follows is what is genuinely visible in the static page, clearly marked as a floor/reference price, not the 5,000 or 25,000-contact price.

| Vendor | Free tier | Lowest confirmed paid tier | 5,000 contacts | 25,000 contacts | Currency | VAT note | URL | Date read |
|---|---|---|---|---|---|---|---|---|
| Klaviyo | Up to 250 profiles, 500 emails/month, $0 | **Not retrievable** (calculator-only) | Not retrievable | Not retrievable | USD (shown even on the UK-locale page) | Not visible in static content | klaviyo.com/pricing, klaviyo.com/uk/pricing | 2026-09-25 |
| Mailchimp | Up to 500 contacts, limited features | Essentials £9.88/mo, Standard £15.20/mo, Premium £266.08/mo, all at the default 0-500 contact bucket, 12-month intro rate | Not retrievable (falls in the "2,501-5,000" bucket per the page's own tier boundaries, but no price rendered) | Not retrievable (falls in the "20,001-25,000" bucket per the page's own tier boundaries, but no price rendered) | GBP (confirmed on the en-gb pricing page) | Not visible in static content | mailchimp.com/en-gb/pricing/marketing/ | 2026-09-25 |
| Omnisend | $0 | Standard $11.20/mo, Pro $41.30/mo, both at the lowest "0-500" contact bucket, promotional rate | Not retrievable | Not retrievable | USD is the billing currency; GBP/CAD/AUD/EUR shown only as "estimates" | Not visible in static content | omnisend.com/pricing/ | 2026-09-25 |
| MailPoet | Sources disagree: mailpoet.com/pricing (as static-fetched) states "up to 500 subscribers"; wordpress.org's own MailPoet plugin listing states "up to 1,000 subscribers." Both free, $0 | Paid tiers (Business, Agency, Creator) show as literal unrendered "€ €" placeholders, currency appears to be EUR by symbol but unconfirmed | Not retrievable | Not retrievable | Unconfirmed (placeholder symbol only) | Not visible in static content | mailpoet.com/pricing/ (redirects to account.mailpoet.com/); wordpress.org/plugins/mailpoet/ | 2026-09-25 |

**Honesty flag:** none of the 5,000 or 25,000-contact figures requested could be confirmed for any vendor through automated fetching. If exact figures are needed for the final report, someone will need to manually step through each vendor's live slider (Klaviyo, Mailchimp, Omnisend) or checkout flow (MailPoet).

---

## 5. Review platforms

| Vendor | Plan | Price | Period | Currency | VAT note | URL | Date read |
|---|---|---|---|---|---|---|---|
| Trustpilot Business | Free | $0 | n/a | USD | Not mentioned | business.trustpilot.com/plans | 2026-09-25 |
| Trustpilot Business | Starter | "From $99/month, per domain" | Monthly, 12-month contract; restricted to new small business customers under $5M revenue | USD (no GBP found on default page, `?region=gb`, `?locale=en-gb`, or a dedicated uk.trustpilot.com/business/pricing URL, which 404'd) | Not mentioned | business.trustpilot.com/plans | 2026-09-25 |
| Trustpilot Business | Plus | "From $319/month, per domain" | Monthly, 12-month contract | USD | Not mentioned | same | 2026-09-25 |
| Trustpilot Business | Premium | "From $799/month, per domain" | Monthly, 12-month contract | USD | Not mentioned | same | 2026-09-25 |
| Trustpilot Business | Enterprise | Contact sales | n/a | n/a | Not mentioned | same | 2026-09-25 |
| Reviews.io | Free | Free | n/a | n/a | Not mentioned | reviews.io/front/pricingplans | 2026-09-25 |
| Reviews.io | Essentials | $29/month | Monthly, billed annually | **Ambiguous on page**: AUD labels appear next to the prices, while separate page text says "prices are displayed in USD," and no GBP option was found. Treat currency as unconfirmed | Not mentioned | same | 2026-09-25 |
| Reviews.io | Start-Up | $99/month | Monthly, billed annually | Same currency ambiguity as Essentials | Not mentioned | same | 2026-09-25 |
| Reviews.io | Grow | $299/month | Monthly, billed annually | Same currency ambiguity | Not mentioned | same | 2026-09-25 |
| Reviews.io | Plus | $499/month | Monthly, billed annually | Same currency ambiguity | Not mentioned | same | 2026-09-25 |
| Reviews.io | Enterprise | Contact required | n/a | n/a | Not mentioned | same | 2026-09-25 |
| Judge.me | Free / Awesome | **Not applicable to WooCommerce.** Judge.me is built and marketed exclusively for Shopify; there is no WooCommerce plugin or plan. (For reference only, not usable here: Free $0/mo, Awesome $15/mo, currency symbol unconfirmed) | Monthly | Unconfirmed | Not mentioned | judge.me/pricing | 2026-09-25 |
| **WooCommerce native (free option)** | Core product reviews | **£0.** Confirmed: WooCommerce core ships with built-in product review functionality at no extra cost; no paid extension is required for basic star ratings and written reviews. "WooCommerce Product Reviews Pro" is an optional paid extension that adds photo/video reviews, Q&A, and moderation tooling, its price was not pulled here as it falls under the plugin-pricing scope covered in the companion `woo-plugin-prices.md` file | n/a | GBP | n/a | woocommerce.com/document/woocommerce-product-reviews/ | 2026-09-25 |

---

## 6. Developer and maintenance

### Part A: UK WooCommerce/WordPress agency care plans (5+ agencies that publish an actual price)

| Agency | Plan | Price | Period | Currency | What's included | VAT note | URL | Date read |
|---|---|---|---|---|---|---|---|---|
| WP Guardian (The Unloved Limited) | Plan 1 | £1,440/year (approx. £120/mo equivalent) | Annual | GBP | UK cloud hosting, 24/7 uptime monitoring, daily backups, disaster recovery, monthly security updates, malware scans, free SSL | Explicit "+VAT" | wpguardian.co.uk | 2026-09-25 |
| WP Guardian | Plan 2 | £3,360/year | Annual | GBP | More storage, priority 3-day support | Explicit "+VAT" | same | 2026-09-25 |
| WP Care Plans | Starter | £49/mo | Monthly | GBP | Core/plugin/theme updates, daily backups, uptime monitoring, basic security, monthly report | Not stated on page | wpcareplans.co.uk | 2026-09-25 |
| WP Care Plans | Business | £79/mo | Monthly | GBP | Mid-tier, not itemised in detail | Not stated | same | 2026-09-25 |
| WP Care Plans | WooCommerce | £129/mo | Monthly | GBP | Adds WooCommerce-specific monitoring, hourly peak-time backups, payment gateway/checkout testing, stock/order checks, 2 dev hours/month, dedicated account manager | Not stated | same | 2026-09-25 |
| WordPress Support UK | Support for Existing Website | £20-25/mo | Monthly | GBP | Ongoing maintenance/support, unlimited updates, small fixes in 10-15 min | Explicit footnote: "*all pricing + VAT" | wp-support.co.uk | 2026-09-25 |
| WPMaintain | Charity | £49/mo | Monthly | GBP | Restricted to simple, non-ecommerce charity sites | Explicit: "Excluded" VAT | wpmaintain.co.uk/pricing/ | 2026-09-25 |
| WPMaintain | Brochure/Basic | £79/mo | Monthly | GBP | Core/plugin/theme updates, daily backups, UK hosting, 24/7 security, staging, free SSL, 1 dev hour/month | Explicit: "Excluded" VAT | same | 2026-09-25 |
| WPMaintain | WooCommerce & Membership Websites | £99/mo | Monthly | GBP | Adds caching, conversion support, tracking pixel setup, WooCommerce advice | Explicit: "Excluded" VAT | same | 2026-09-25 |
| Red Design (Website Care Packages) | Host Busters | £29/mo | Monthly, billed annually | GBP | Dedicated WordPress hosting, domain renewal, SSL, antivirus scanning, daily backups, free migration, UK phone support | Not stated | websitecarepackages.co.uk | 2026-09-25 |
| Red Design | Clicks & Mortar | £59/mo | Monthly, billed annually | GBP | Adds 2nd domain + monthly plugin updates | Not stated | same | 2026-09-25 |
| Red Design | Control Alt. Elite | From £99/mo | Monthly, billed annually | GBP | Adds monthly content updates | Not stated | same | 2026-09-25 |

Agencies checked but excluded for not publishing a real price, or not being UK-based: Bronco (UK, VAT-registered, but "contact us" only), Website Doctors (UK, no pricing shown), Cariad Marketing (UK, no pricing shown), WPmedic (now a social-media management business), YourWebsiteCare.com (Estonia-based despite a UK contact number), Tug (site unreachable), WP Fix It (site blocked automated access).

### Part B: UK freelance WordPress/WooCommerce developer rates (published sources)

| Source | Figure | Type | URL | Date read |
|---|---|---|---|---|
| PeoplePerHour (live freelancer listings) | £10-£40/hr range; most UK-tagged freelancers cluster at £15-£30/hr | Genuine freelance hourly rate, self-set by individual profiles | peopleperhour.com/hire-freelancers/programming-and-technology/wordpress-developer | 2026-09-25 |
| Payscale UK | £31,065/year average, range £22,000-£49,000 | **Employed salary**, not a freelance rate (dedicated freelance/hourly pages 404'd) | payscale.com/research/UK/Job=Web_Developer/Hourly_Rate | 2026-09-25 |
| Indeed UK | £32,859/year average, range £25,420-£51,752, based on 241 reported salaries (Indeed states "last updated 2026-09-16") | **Employed salary**, not a freelance rate | uk.indeed.com/career/wordpress-developer/salaries | 2026-09-25 |
| ITJobsWatch | "WordPress" permanent median £37,500/yr (10th-90th percentile £28,250-£59,500); "WooCommerce" permanent median £35,000/yr (10th-90th percentile £26,250-£45,000) | **Employed salary**; no contract/day-rate table available for either keyword (too few contract ads) | itjobswatch.co.uk/jobs/uk/wordpress.do, itjobswatch.co.uk/jobs/uk/woocommerce.do | 2026-09-25 |
| reed.co.uk (incidental finding) | One live Bristol contract listing: "Front End Developer, Outside IR35," £700-£750/day | Genuine UK day rate, but for a general front-end contractor role, not WordPress/WooCommerce-specific; rough market context only | reed.co.uk/jobs/wordpress-developer-jobs | 2026-09-25 |

Could not retrieve: IPSE's own day-rate survey/guide page (no rate content found), Upwork's UK cost-guide pages (HTTP 403), Codeable's rate pages (404), Glassdoor UK (HTTP 403), Totaljobs salary checker (timed out repeatedly). No numbers were substituted for these.

**Rough synthesis:** a UK WordPress/WooCommerce freelancer's published, live hourly rate runs approximately £15-£40/hour (PeoplePerHour), while an employed WordPress/WooCommerce developer's UK salary averages approximately £31,000-£38,000/year across three job-board/data sources (Payscale, Indeed, ITJobsWatch). A day rate for a more general contract front-end developer was seen at £700-£750/day on reed.co.uk, well above the PeoplePerHour hourly figures, suggesting a wide spread between marketplace freelancers and formally contracted developers.

### Part C: UK salary for an ecommerce/order administrator (reed.co.uk), as the cost of doing order admin by hand

| Search | What reed.co.uk shows | Currency/period | URL | Date read |
|---|---|---|---|---|
| "ecommerce administrator" | No stated average-salary banner; 109 live listings, individual salaries roughly £25,500-£45,000/year | GBP/year (a few hourly, e.g. £12.71/hr) | reed.co.uk/jobs/ecommerce-administrator-jobs | 2026-09-25 |
| "order administrator" | No stated average-salary banner; 1,569 live listings, individual salaries roughly £24,000-£30,000/year, or £13.18-£14.68/hr for hourly-paid roles | GBP/year (several hourly) | reed.co.uk/jobs/order-administrator-jobs | 2026-09-25 |
| reed's own salary-checker tool, "Order Administrator" | **No data.** Page explicitly states: "Sorry, we currently don't have salary information for Order Administrator" | n/a | reed.co.uk/average-salary/average-order-administrator-salary | 2026-09-25 |
| reed's own salary-checker tool, "Ecommerce Administrator" | **No data.** Same explicit message | n/a | reed.co.uk/average-salary/average-ecommerce-administrator-salary | 2026-09-25 |
| reed's own salary-checker tool, "Ecommerce Executive" (closest title with data) | Average £34,629/year, stated range £34,474-£34,784/year | GBP/year | reed.co.uk/average-salary/average-ecommerce-executive-salary | 2026-09-25 |

**Bottom line:** reed.co.uk does not publish a stated average salary for the exact titles "ecommerce administrator" or "order administrator," its own salary tool has no data for either. The honest range, taken from live individual listings across both searches, is approximately **£24,000 to £36,000 a year** for an ecommerce/order administrator role in the UK, with a small number of more senior/merchandiser-adjacent listings reaching £45,000. The closest title reed's own tool does report a figure for, "Ecommerce Executive," averages £34,629/year, sitting within that range.

---

## 7. Typical monthly running cost, excluding hosting and plugins

### Assumptions (stated explicitly)

1. **Average order value (AOV) of £50** is used for the payment-fee worked example and for all totals below, per the brief. At £50 AOV, 500 to 10,000 orders/month implies roughly £300k to £6m a year in sales, close to the stated £250k-£5m range; this is a simplifying assumption, not a measured figure.
2. **Payment processing** uses WooPayments' UK domestic rate (1.5% + £0.25, 2.00% effective at £50 AOV) as the single baseline for every order, since WooPayments is WooCommerce's own default gateway. A real store's blended rate will vary (roughly 1.9%-3.5% effective, see Section 1) depending on gateway mix, international card share, and BNPL usage; this baseline is a floor, not a ceiling.
3. **"Lean" total** picks the cheapest or free verified option in each category, wherever a genuinely free option exists at that volume. **"Typical" total** picks a commonly-used, mid-market paid option, using only confirmed published prices, with any modelling assumption (e.g. extra freelance hours) clearly labelled as an estimate rather than a vendor quote.
4. **Shipping software figures are the platform/label fee only**, not the underlying carrier postage itself, consistent with the brief's framing of "shipping software... for labels."
5. Where a vendor's exact price at a given volume was not retrievable (MyWorks beyond its $19/month floor, Link My Books, Mailchimp/Klaviyo/Omnisend beyond their lowest tier), the **floor price is used and flagged**; real cost at scale is very likely higher and is not captured accurately below.
6. **USD figures are converted to GBP at 1 USD = 0.755025 GBP** (xe.com mid-market rate, read 2026-09-25) for comparability only; actual billing will be in USD, subject to card FX fees not modelled here.
7. **VAT**: figures marked "exc VAT" by the vendor are shown as such below, so this is a like-for-like pre-VAT comparison across the board. A UK VAT-registered store can normally reclaim input VAT; a non-VAT-registered store should add 20% to any UK-vendor line marked exc VAT.
8. Reviews.io and shipping-tier choices for the medium/large store sizes below required a judgement call where the vendor does not publish a volume-to-tier mapping; these are marked "estimated tier."

### Small store, approx. 500 orders/month

| Line | Lean (free wherever reasonable) | Typical |
|---|---|---|
| Payment processing (500 x £1.00) | £500.00 | £500.00 |
| Shipping software | £0.00 (Veeqo or Click & Drop) | £61.00 (Sendcloud Growth, £31 + 500x£0.06) |
| Accounting sync | £0.00 (manual export/bookkeeper) | £14.35 (MyWorks floor price, $19/mo; real price at this volume not published) |
| Email marketing | £0.00 (Mailchimp/MailPoet free tier, only viable while list stays under 500-1,000 contacts) | £9.88 (Mailchimp Essentials floor tier; real price rises with list size, not retrievable) |
| Reviews | £0.00 (WooCommerce native reviews) | £21.90 (Reviews.io Essentials, $29/mo, currency shown ambiguously on vendor page) |
| Developer/maintenance | £0.00 (DIY) | £99.00 +VAT (WPMaintain WooCommerce & Membership plan) |
| **Total/month** | **£500.00** | **£706.13 (+VAT on the maintenance line)** |

### Medium store, approx. 3,000 orders/month

| Line | Lean | Typical |
|---|---|---|
| Payment processing (3,000 x £1.00) | £3,000.00 | £3,000.00 |
| Shipping software | £0.00 (Veeqo) | £229.00 (Sendcloud Premium, £79 + 3,000x£0.05) |
| Accounting sync | £0.00 (manual, though increasingly impractical at this volume) | £14.35 (MyWorks floor price, real price at this volume not published) |
| Email marketing | £9.88 (free tier not realistic at this list size; floor paid tier used instead) | £9.88 (Mailchimp Essentials floor tier; real price at a multi-thousand-contact list is not retrievable and will be materially higher) |
| Reviews | £0.00 (WooCommerce native) | £74.75 (Reviews.io Start-Up, $99/mo; estimated tier, Reviews.io does not publish a volume-to-tier mapping) |
| Developer/maintenance | £0.00 (DIY, increasingly risky at this scale) | £129.00 (WP Care Plans WooCommerce plan, includes 2 dev hours/month) |
| **Total/month** | **£3,009.88** | **£3,456.98** |

### Large store, approx. 10,000 orders/month

| Line | Lean | Typical |
|---|---|---|
| Payment processing (10,000 x £1.00) | £10,000.00 | £10,000.00 |
| Shipping software | £0.00 (Veeqo; still no published cap, though at this scale Veeqo's economics work via label commission rather than a visible fee) | £579.00 (Sendcloud Premium, at its ~10,000/mo cap, £79 + 10,000x£0.05; Sendcloud itself recommends the Pro tier above this cap, price on request) |
| Accounting sync | £0.00 (manual, unrealistic at this scale but shown as the £0 floor) | £14.35 (MyWorks floor price; almost certainly higher at 10,000 orders/month, not published) |
| Email marketing | £9.88 (floor tier, unrealistic at this list size) | £9.88 (Mailchimp Essentials floor tier; real cost at a large list is not retrievable and will be materially higher) |
| Reviews | £0.00 (WooCommerce native) | £225.75 (Reviews.io Grow, $299/mo; estimated tier) |
| Developer/maintenance | £0.00 (DIY, high risk at this scale) | £279.00 (WP Care Plans WooCommerce plan £129/mo + an estimated 5 hours/month of ad hoc freelance dev time at £30/hr, using the PeoplePerHour rate range; the £150 hours figure is this report's estimate, not a vendor quote) |
| **Total/month** | **£10,009.88** | **£11,107.98** |

### What the lean option gives up

- **Shipping**: no rate-shopping across carriers, no branded tracking/returns portal, no batch automation beyond basic label printing; Click & Drop ties you largely to Royal Mail, Veeqo ties you to its own carrier network and commission model.
- **Accounting**: manual CSV export and hand reconciliation, more staff time, higher risk of mismatched fees/refunds/taxes in the books, slower month-end close.
- **Email marketing**: not really free beyond a very small list; the free tier caps out at 500-1,000 contacts and cannot be relied on as a store grows, so this is really "cheapest paid tier" rather than genuinely free once a store is doing 500+ orders/month.
- **Reviews**: no third-party trust badge/star rating in Google search results, no automated review-request flows, no syndication to Google Shopping/ads, manual moderation only via WooCommerce's basic native reviews.
- **Maintenance**: no guaranteed response time, no proactive security monitoring or malware scanning beyond what the host provides, relies entirely on the owner's own time and WordPress knowledge, and unpredictable cost the moment something does break (ad hoc freelance hours at roughly £15-£40+/hour, with no guaranteed availability, per Section 6 Part B).

### For context: the cost of doing order admin by hand

An in-house UK ecommerce/order administrator costs roughly **£24,000-£36,000 a year (about £2,000-£3,000 a month before employer National Insurance and pension contributions)**, based on live reed.co.uk listings (Section 6, Part C). This is a headcount cost, not a software running cost, so it is not included in the totals above, but it is the comparison point for what the tooling in Sections 2-6 is generally bought to avoid doing entirely by hand.

---

## Summary of what could not be confirmed

- Klarna and Clearpay merchant fees: not published anywhere on their live UK business pages, both are sign-up/contact-sales only.
- Royal Mail Business Account discount rates: threshold and £5,000/year international perk are published, the actual discounted rates are not.
- Linnworks: entirely contact-sales, no figures at all.
- Despatch Cloud/Helm WMS: three flat tiers are published, but no order-volume cap is stated for any of them, so they cannot be confidently mapped to the 500/3,000/10,000-order brackets.
- MyWorks Sync and Link My Books: both gate real prices behind JavaScript calculators; only MyWorks' $19/month floor price was recoverable.
- A2X: confirmed to not support WooCommerce at all, despite being commonly cited as a WooCommerce accounting tool.
- No named third-party connector publishes an explicit price for WooCommerce-to-Sage specifically; the only priced route found is generic Zapier automation.
- Klaviyo, Mailchimp, Omnisend, and MailPoet: none of their exact prices at 5,000 or 25,000 contacts could be retrieved; all use JavaScript-only pricing calculators.
- Judge.me: does not support WooCommerce at all (Shopify-only), despite being named in the original brief as a WooCommerce reviews option.
- IPSE's day-rate guide, Upwork's UK cost guide, Codeable's rate pages, and Glassdoor UK: none could be reached (blocked or not found).
- reed.co.uk has no salary data for the exact titles "order administrator" or "ecommerce administrator"; the figures used are derived from live individual job listings instead.
