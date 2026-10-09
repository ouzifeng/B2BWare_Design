# WooCommerce Migration Barriers: What Stops Owners From Leaving, What They Fear Losing, What Breaks

Scope: this is research about WooCommerce store owners considering a move to another platform (mainly Shopify, since that is where the highest-volume public discussion lives). It is not research about, or an endorsement of, any specific migration vendor or "we migrate you" offering. Vendor and agency material (Cart2Cart, LitExtension, Matrixify/Ablestar, PageFly, GemPages, etc.) is labeled as such everywhere it appears, because vendors reply heavily in these threads and their claims should be weighted differently from unprompted owner accounts.

No number or quote below was invented. Every quote is attributed to a URL and a date, with usernames stripped per instructions. Where a targeted source failed to load or returned nothing usable, that is stated in the Method notes below rather than papered over.

## Method notes (read before the findings)

- WebSearch (the dedicated search tool) had already exhausted its full session quota (200/200) before this task got to use it, so all WebSearch calls returned zero results for the whole task. Everything below was gathered with direct/guessed URL fetches (WebFetch), exactly as the task brief anticipated ("web search is rate limited... go direct").
- **Shopify Community** (community.shopify.com) worked well: its Discourse `search.json` endpoint returned real topic titles, slugs, and IDs for "woocommerce migration," which let me construct direct thread URLs (`/t/<slug>/<id>`) and pull full threads. This was the single richest source for this task.
- **WordPress.org support forums**: both the `?q=` search endpoint and the `/support/search/<query>/` path loaded, but returned only page chrome (title, "Search" heading) with no renderable results - the search results appear to be injected client-side by JavaScript, which a text fetch cannot see. The `/support/topic-tag/migration/` tag listing also loaded but its visible topics were unrelated (staging/database-update issues, not "leaving WooCommerce"). I could not find a working direct path into WordPress.org's own migration-complaint threads. This source category is thin/failed as a result - noted rather than faked.
- **Shopify App Store review pages**: `apps.shopify.com/matrixify/reviews`, `/litextension/reviews`, `/cart2cart/reviews`, and the bare app pages `/matrixify`, `/litextension-store-migration`, `/cart2cart-store-migration` all returned HTTP 404 (slugs have changed or reviews now live behind a JS-rendered route not reachable by direct fetch). The correct current slug for LitExtension's migration app, `litextension-shopify-migration-app`, did work for its `/reviews` page and returned one usable review.
- **Trustpilot**: `uk.trustpilot.com/review/litextension.com` worked. `uk.trustpilot.com/review/cart2cart.com`, `/review/www.cart2cart.com`, and `/review/matrixify.app` all 404'd (wrong slugs, and I could not find the right ones without a working search).
- **Capterra**: the URL given in the brief pattern guess (`/p/106847/WooCommerce/reviews/`) 404'd. The correct product ID (found via Capterra's own search page) is `225601`; `capterra.com/p/225601/WooCommerce/reviews/` worked.
- **Stripe docs**: my first guessed URL (`docs.stripe.com/get-started/data-migrations/pci`) 404'd. The real hub is `docs.stripe.com/get-started/data-migrations`, which links to `pan-import.md` (importing card data to Stripe) - both loaded fully and are the backbone of the payment-portability findings.
- **WooCommerce.com docs**: the product CSV exporter/importer doc loaded. `woocommerce.com/document/exporting-and-importing-orders/` 404'd (doc has likely moved/been retired under the newer `woocommerce.com/documentation/` structure).
- Sources that form the backbone of this report: community.shopify.com (18 full threads pulled), Shopify's own official migration docs (help.shopify.com), Stripe's official docs (docs.stripe.com), WooCommerce's own docs (woocommerce.com/document), Capterra, and one Trustpilot page.

---

## 1. Ranked barriers and fears

Confidence key (as specified): **High** = 3+ independent sources, **Medium** = 2, **Low** = 1. "Sources" counts distinct pages/threads, not distinct replies within the same thread.

### 1. Losing SEO rankings / URL structure changing (Frequency: 5 sources - High confidence)

This is the single most repeated anxiety in the data, usually the *first* thing an owner lists before asking anything else.

> "Our main priorities are: Preserving SEO rankings, Migrating products, customers, and order history"
> - https://community.shopify.com/t/migrating-from-woocommerce-to-shopify-looking-for-advice/653418 (July 21, 2026)

> "how to migrate their vape products website from WooCommerce to Shopify while maintaining Google rankings and organic traffic"
> - https://community.shopify.com/t/migrating-from-woocommerce-to-shopify-without-losing-ranking (original post, October 18, 2020; a near-identical follow-up question was posted to the same thread February 10, 2026, six years later, showing the fear is persistent, not a one-off)

> "don't forget to set redirects for all important/high authority back links"
> - https://community.shopify.com/t/anyone-here-migrate-from-woocomerce-what-would-you-do-if-you-had-to-do-it-again (November 10, 2023)

Corroborated by Shopify's own migration docs (see Section 3) and by a live thread asking how to monitor new 404s after a Cart2Cart migration (below).

### 2. Broken links / 404s after go-live (Frequency: 4 sources - High confidence)

> "We are in the process of migrating our website from woocommerce to Shopify with the Cart2cart app... Is there a way i can identify/view any new 404 pages so i can redirect these after the full migration?"
> - https://community.shopify.com/t/advice-on-404s-after-store-migration (November 27, 2025)

Replies in that thread recommended Google Search Console's "Not found (404)" report, Google Analytics/Matomo 404-page event tracking, and (in the most recent reply) using the Wayback Machine to recover the old URL list and bulk-checking HTTP status pre-launch:

> "Google Analytics or Matomo your 404 page can be tracked as an event"
> - https://community.shopify.com/t/advice-on-404s-after-store-migration (November 30, 2025)

A second, unrelated thread shows the same worry applied to offline marketing collateral (business cards with QR codes pointing at old WooCommerce URLs):

> "Most QR code generators offer both, the static ones usually for free...and you can't edit them. With dynamic QR codes, however, you have the option to edit the destination"
> - https://community.shopify.com/t/migrating-from-woocommerce-to-shopify-physical-qr-codes (June 17, 2025)

### 3. Customer accounts and passwords don't come with you (Frequency: 3 sources - High confidence)

> "Old customers are not able to login to new website with old credentials"
> - https://community.shopify.com/t/customers-accounts-details-login-through-old-id-pass-after-migrating-from-woocommerce-to-shopify (August 19, 2022)

This is not a misunderstanding, it's confirmed by Shopify's own documentation (see Section 3 for the exact quote and mechanism). Nobody in the thread that raised it ever got an on-thread answer, which is itself a data point: the community's default response to "can passwords move" is silence, not reassurance.

### 4. Custom fields, product options, and metadata don't map cleanly (Frequency: 3 sources - High confidence)

> "Some data won't transfer over exactly" - custom WooCommerce fields may lack Shopify equivalents. "Be careful when importing orders" - third-party integrations can trigger unintended actions on migrated data.
> - https://community.shopify.com/t/anyone-here-migrate-from-woocomerce-what-would-you-do-if-you-had-to-do-it-again (November 8, 2023)

Backed by Shopify's own migration doc: "Shopify only allows for 3 product options. Products with greater than 3 options won't have their options imported" (help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce), and by WooCommerce's own export doc, which requires the merchant to actively opt in to bringing metadata at all ("Select **Yes, export all custom meta** if you need product metadata from WooCommerce or other plugins," woocommerce.com/document/product-csv-importer-exporter/) and warns that variation names "may exclude attribute values" on export when a product has 3+ attributes.

### 5. Plugin/app dependency and update fatigue - the push factor, and the fear it just follows you (Frequency: 4 sources - High confidence)

This is less a migration-mechanics fear and more the *reason people start looking* - but it recurs as a fear about the destination too ("will I just trade WooCommerce plugin hell for Shopify app hell").

> "constant plugin (app) updates and occasional bugs that break parts of my site"
> - https://community.shopify.com/t/considering-a-switch-from-woocommerce-to-shopify-what-should-i-know (March 21, 2023, original post)

> "WooCommerce keeps getting slow for me, and the constant plugin updates are becoming a real headache, especially since I'm not very technical"
> - https://community.shopify.com/t/can-i-easily-move-my-woocommerce-store-to-shopify-as-a-non-techy-user (November 29, 2025)

> "It seemed like woocommerce was dependent on too many plugins"
> - https://www.capterra.com/p/225601/WooCommerce/reviews/ (review dated June 9, 2025)

> "For more advanced functions you need a lot of paid plugins"
> - https://www.capterra.com/p/225601/WooCommerce/reviews/ (review dated October 15, 2024)

A reply in the "considering a switch" thread acknowledges the fear transfers: Shopify apps "may still experience updates causing issues," advising the merchant to "choose apps with several users" and minimize app count (reply dated March 21, 2023).

### 6. Cost and time of migration are genuinely unclear going in (Frequency: 3 sources - High confidence)

Multiple owners ask for a time/cost estimate and get no real answer, or get "it depends, hire someone."

> Four direct questions asked and never substantively answered: "Approximately how long would a migration take? Approximately how much would it cost? Will email marketing/customer details transfer over? Is an SSL included?"
> - https://community.shopify.com/t/migration-from-woocommerce-to-shopify-estimate-of-time-and-a-price (October 17, 2023; thread closed October 19, 2023 with no pricing/timeline reply on record)

> A store owner with "more than 1600 pages" asking for pricing got no concrete figure in-thread; the direct advice given was "basic migration is beginner-friendly but... hire developers for SEO preservation, URL redirects, custom fields, and design matching."
> - https://community.shopify.com/t/can-i-easily-move-my-woocommerce-store-to-shopify-as-a-non-techy-user (December 1 and December 24, 2025)

> "a long and tiring process" (DIY), recommending migration experts as the alternative
> - https://community.shopify.com/t/considering-a-switch-from-woocommerce-to-shopify-what-should-i-know (April 7, 2023)

### 7. Migration apps technically fail or can't fetch data cleanly (Frequency: 4 sources - High confidence)

> "I've tried multiple apps, but none of them seem to be working. They all say, 'we cannot fetch your products'"
> - https://community.shopify.com/t/want-to-migrate-from-woocommerce-to-shopify (October 12, 2023)

> Images "does not import" via CSV; URL-mapping workaround failed too ("the product with woocommerce URL was skipped"); bulk manual upload was "impractical for almost 3000 plus products."
> - https://community.shopify.com/t/woocommerce-products-to-shopify-migration (May 22-23, 2023)

> A WordPress installation using the Bedrock folder structure was reported as incompatible with standard migration tools.
> - https://community.shopify.com/t/woocommerce-bedrock-to-shopify-migration (per Shopify Community search index, March 19, 2024)

> CSV column-format incompatibility between the two platforms blocked a straightforward import.
> - https://community.shopify.com/t/import-products-from-woocommerce (per Shopify Community search index, June 3, 2026)

### 8. Sunk cost in the current build/developer, and DIY difficulty for non-technical owners (Frequency: 3 sources - High confidence)

> A developer with 15 years of Shopify experience, replying to a non-technical WooCommerce owner: migration "is something that undoubtedly requires technical knowledge in the vast majority of cases."
> - https://community.shopify.com/t/can-i-easily-move-my-woocommerce-store-to-shopify-as-a-non-techy-user (November 30, 2025)

> Original poster asking whether they "should hire an expert to transfer their design" rather than attempt it themselves.
> - https://community.shopify.com/t/considering-a-switch-from-woocommerce-to-shopify-what-should-i-know (March 21, 2023)

> A separate thread exists solely to ask the community for a "Shopify partner for professional migration services."
> - https://community.shopify.com/t/migration-from-woo-commerce-to-shopify (per Shopify Community search index, May 11, 2024)

### 9. Subscriptions and recurring billing may not move at all (Frequency: 1 thread, corroborated by 2 independent posters - Low/Medium confidence)

A merchant running a subscription magazine business tested Matrixify directly and reported it "doesn't handle subscriptions." A second, independent poster in the same thread confirmed the gap from the outside:

> "There aren't many apps that allow you to migrate subscriptions - at least none that I know."
> - https://community.shopify.com/t/migration-strategy-for-subscription-store (May 10, 2025)

This is a single thread (so Low by the strict source-count rule), but two independent participants reached the same conclusion unprompted, which is stronger than a typical one-off complaint. See Section 2 for how this connects to card-token portability.

### 10. Product reviews and blog comments do not migrate natively (Frequency: 2 sources - Medium confidence)

Confirmed directly by Shopify's own documentation (verbatim quote in Section 3). On the community side:

> "If you want to migrate Blogs Review from WooCommerce to Shopify manually, it is quite difficult. You should use a 3rd party migration like us, we will migrate your blog reviews from WooCommerce to Shopify in just simple steps." [vendor reply - LitExtension]
> - https://community.shopify.com/t/is-there-a-way-to-import-blog-comments-into-shopify (February 7, 2025)

> "Shopify doesn't natively support comments on blog posts"
> - https://community.shopify.com/t/is-there-a-way-to-import-blog-comments-into-shopify (March 13, 2025)

### 11. Sales tax rate complexity (Frequency: 1 source - Low confidence, but a striking figure)

> "On the WooCommerce we just used csv file to charge sales taxes for customers in USA. So there are 41014 tax rates uploaded through csv tax rate file."
> - https://community.shopify.com/t/woocommerce-to-shopify-how-to-set-sales-tax (December 21, 2023)

The reply (over two months later, on February 28, 2024) confirmed Shopify's native "basic tax engine" lacked bulk-upload capability and recommended a third-party tax service (TaxJar or Avalara) instead of fighting the platform's native tool.

### 12. B2B-specific functionality gaps (Frequency: 1 source - Low confidence)

> A WooCommerce store doing "70% B2B" business manually asked whether Shopify has "a solid B2B plugin" equivalent to what they've stitched together in WooCommerce (manual quotes, customer-level SKU pricing, dropship PO automation, backorders) - described as needing "an extremely light ERP, without the Accounting package."
> - https://community.shopify.com/t/might-migrate-to-shopify-but-we-need-a-well-priced-b2b-plugin (July 18, 2023)

The reply confirmed native gaps: "some limitations in this area and in some instances you may need to explore integrations outside of Shopify" (July 19, 2023).

### 13. Order numbering discontinuity (Frequency: 1 source - Low confidence)

> After a customer/order migration app transfer, new Shopify order numbers restarted from an earlier number than the last WooCommerce order, creating duplicate-looking order numbers; a reply clarified prefixes/suffixes "is not sufficient to adjust the numbering sequentially. Order numbers themselves continue to be generated in the standard sequence."
> - https://community.shopify.com/t/doppelte-bestellnummern-nach-migaration-von-woocommerce (July 16, 2024)

### Barriers named in the brief with little or no direct evidence found

To be transparent rather than fill gaps with invented material: **staff retraining**, **coupon/gift-card portability**, **lock-in fear on the destination platform**, and **downtime during the actual cutover** were all named in the brief's topic list, but none turned up substantive unprompted owner discussion in the sources I could reach (WordPress.org, the best venue for staff/operational complaints, would not render search results - see Method notes). Where official docs speak to these (coupons/gift cards, cutover order-of-operations) that is captured factually in Section 3 rather than as a "fear," since no owner quote was found expressing fear about them specifically.

---

## 2. What actually goes wrong in migrations

**SEO / rankings:** No source in this dataset reported a *measured* ranking or traffic drop with a before/after figure - the fear is heavily discussed, but nobody posted "we lost X% of traffic." What is documented is the mechanism that causes drops if unmanaged: Shopify's official migration guide states plainly that "old links to specific pages likely won't load for customers" because "Shopify's link structure for individual pages is likely different from your previous service" (help.shopify.com/en/manual/migrating-to-shopify, and the WooCommerce-specific page: help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce). The community-side evidence is entirely about owners scrambling to find and redirect broken URLs after the fact (Section 1, barrier 2), not about resolved outcomes.

**Broken redirects specifically:** the /advice-on-404s-after-store-migration thread (community.shopify.com, Nov 27-30 2025 and a July 2, 2026 follow-up) is the clearest documented case of this happening in real time during a Cart2Cart-assisted migration, with the owner asking mid-migration how to find new 404s before they cost traffic.

**Lost reviews:** Shopify's own documentation states outright, "You can't export or migrate reviews from WooCommerce to Shopify" (help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce), and recommends starting over with a review app (Judge.me, Loox, or Yotpo were named) rather than porting existing review history. Blog comments have the same native gap per the community thread cited in Section 1, barrier 10.

**Subscriptions that could not move:** documented first-hand in the /migration-strategy-for-subscription-store thread - the merchant tested Matrixify against a real subscription business (quarterly magazine, bundled physical products, Stripe as the existing processor) and found it "doesn't handle subscriptions," with a second community member independently confirming there aren't reliable apps for this (community.shopify.com/t/migration-strategy-for-subscription-store, May 6-10, 2025).

**Images silently dropped:** in the /woocommerce-products-to-shopify-migration thread, a straightforward CSV product export/import did not carry images at all; the owner's workaround (remapping the CSV's image-source column to the old WooCommerce image URLs) also failed ("the product with woocommerce URL was skipped"), and manual re-upload was ruled out as impractical at roughly 3,000 products (community.shopify.com/t/woocommerce-products-to-shopify-migration, May 22-23, 2023). A later reply in the same thread (May 12, 2026) attributes recurring image-import failures to HTTP-vs-HTTPS mismatches, redirects, hotlink protection, and non-direct file links - i.e., this is a known, recurring class of failure, not a one-off.

**Order numbering breaking:** see barrier 13 above - a real, reported case of duplicate/non-sequential order numbers post-migration with no simple fix (prefixes/suffixes don't renumber the underlying sequence).

**Migration apps failing outright:** "we cannot fetch your products" was reported verbatim by an owner who had already configured the WooCommerce REST API for the migration app (community.shopify.com/t/want-to-migrate-from-woocommerce-to-shopify, October 12, 2023) - i.e., this wasn't a credentials mistake, the connection was set up correctly and the tool still failed to pull data.

**Figures actually stated by owners (not estimated by me):**
- 41,014 US tax rates uploaded via CSV in the old WooCommerce store, with no bulk-upload path found in Shopify's native tax tool (community.shopify.com/t/woocommerce-to-shopify-how-to-set-sales-tax, December 21, 2023).
- Roughly 3,000 products where image migration failed and manual re-upload was ruled impractical (community.shopify.com/t/woocommerce-products-to-shopify-migration, May 23, 2023).
- More than 1,600 pages on a single store awaiting migration/pricing, with no cost figure ever given in-thread (community.shopify.com/t/can-i-easily-move-my-woocommerce-store-to-shopify-as-a-non-techy-user, December 24, 2025).
- A free migration-app tier capped at 10 products before requiring payment (Matrixify, per community.shopify.com/t/migrating-products-from-woocommerce-to-shopify, October 12, 2023).

---

## 3. What is technically portable vs. not, per official documentation

| Data / asset | Portable? | Mechanism / caveat | Official source |
|---|---|---|---|
| Customer passwords | **Not portable.** | "Because passwords are encrypted outside of Shopify, you can't migrate customer passwords from another online store using a CSV." Imported customers must be invited to set a new password before they can log in. | help.shopify.com/en/manual/customers/import-export-customers |
| Product reviews | **Not portable.** | "You can't export or migrate reviews from WooCommerce to Shopify." Owners are pointed to third-party review apps to start fresh. | help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce |
| Order history | **Portable, but not via basic CSV.** | Shopify's guide routes historical orders through migration apps, the Order API, or the Transaction API, not a plain CSV import; import order matters (products, then customers, then orders) so orders can be linked correctly. | help.shopify.com/en/manual/migrating-to-shopify |
| URLs / link structure | **Not preserved automatically.** | Shopify's link structure differs by design (example given: `/policies/shipping-policy` becomes `/pages/shipping-policy`); owners must manually set up URL redirects themselves. | help.shopify.com/en/manual/migrating-to-shopify |
| Product images | **Technically portable, but not automatic.** | CSV import can reference image URLs, but WooCommerce's own docs note "the core CSV importer cannot add, edit, or update alt text for product images," and community evidence (Section 2) shows the image-URL-reference approach frequently fails on HTTP/HTTPS mismatches, redirects, or hotlink protection. | woocommerce.com/document/product-csv-importer-exporter/ (WooCommerce side); community.shopify.com/t/woocommerce-products-to-shopify-migration (failure mode) |
| Product options / custom fields | **Partially portable, with a hard limit.** | WooCommerce can export "all custom meta" only if the merchant explicitly selects that option on export. On the Shopify side: "Shopify only allows for 3 product options. Products with greater than 3 options won't have their options imported." | woocommerce.com/document/product-csv-importer-exporter/; help.shopify.com/en/manual/migrating-to-shopify/migrating-from-woocommerce |
| Gift cards / store credit | **Portable per the doc, via app or API** (no community evidence found either confirming or contradicting this in practice). | Migration apps or Shopify's GiftCard API are the stated paths. | help.shopify.com/en/manual/migrating-to-shopify |
| Blog posts / pages | **Portable via app or API**; blog **comments** are not. | Blog and Article APIs exist for post content; Shopify "doesn't natively support comments on blog posts," per a community reply. | help.shopify.com/en/manual/migrating-to-shopify (Blog/Article API links); community.shopify.com/t/is-there-a-way-to-import-blog-comments-into-shopify |
| Saved card tokens / payment methods | **Portable, but only through a formal, assisted, PCI-compliant process - not a self-serve export.** | Stripe's own migration docs describe requesting a "Data migration request," requiring cooperation from the *current* processor ("Many processors require the account owner to request a data transfer"), transferring PAN data via an encrypted (PGP) channel, and a processing time Stripe states as "typically... within 10 business days of receiving the correct data," with the overall handoff from the old processor taking "a few days to several weeks." Stripe explicitly warns: "Never send sensitive credit card details or customer information directly to Stripe" outside this process, underscoring that raw card data cannot simply be exported/imported like a CSV. | docs.stripe.com/get-started/data-migrations; docs.stripe.com/get-started/data-migrations/pan-import |
| Subscriptions (recurring billing) | **Not reliably portable via off-the-shelf apps**, per direct owner testing; Stripe does offer a Subscriptions Migration/Import toolkit and API for merchants building a custom integration, but this is a developer-level build, not a plug-and-play migration. | See barrier 9 (Section 1) and the "what actually goes wrong" note above for the direct owner account (Matrixify "doesn't handle subscriptions"). | community.shopify.com/t/migration-strategy-for-subscription-store; docs.stripe.com/get-started/data-migrations (links to billing/subscriptions/migrate-subscriptions and billing/subscriptions/import-subscriptions-toolkit for the build-it-yourself path) |

---

## 4. What owners said made the move worth it, or what they regretted

Direct "we did it and here's the verdict" narratives were the hardest thing to find in this dataset - most threads are pre-migration planning questions, not post-migration retrospectives (this matches the general shape of these forums: people ask before they commit, and rarely circle back afterward). The most substantive retrospective thread found is community.shopify.com/t/anyone-here-migrate-from-woocomerce-what-would-you-do-if-you-had-to-do-it-again (opened November 7, 2023), which drew direct advice from people who had already been through it:

> "take this as an opportunity to dot your i's and cross your t's because when it's migrated it's done"
> - (November 8, 2023)

> "You'll probably need to move your data over more than once" ... "Some data won't transfer over exactly" ... "Be careful when importing orders" [because third-party integrations can trigger unintended actions on migrated data]
> - (November 8, 2023) - also recommended keeping WooCommerce access available post-launch specifically for data retrieval, implying the first cutover is rarely clean enough to be final

> "don't forget to set redirects for all important/high authority back links"
> - (November 10, 2023)

An unresolved regret in the same thread: updating internal links inside product descriptions that pointed to the old WooCommerce URL structure turned out to be a manual, unsolved problem with no automated fix offered by anyone in the thread (November 21, 2023).

On the "was it worth the tradeoff" question specifically, the clearest unprompted framing came from the /considering-a-switch thread:

> Shopify offers "simplicity and reliability" but at higher monthly cost; WooCommerce "provides flexibility but requires technical expertise"
> - https://community.shopify.com/t/considering-a-switch-from-woocommerce-to-shopify-what-should-i-know (May 21, 2025)

That same thread's original poster never posted a follow-up verdict, so there is no confirmed "and here's what happened" for that specific case - flagged here rather than assumed.

On the vendor side (labeled as such - these are not independent owner accounts), LitExtension's own Trustpilot page shows one migration-specific review describing a smooth outcome after an owner-caused error (accidental image overwrite) was fixed at no extra charge:

> "Even though it was caused on my side, he still stepped in and fixed it with a custom image re import, making sure none of my product content was affected." [Trustpilot review, LitExtension]
> - https://uk.trustpilot.com/review/litextension.com (April 30, 2026)

> "I recently used LitExtension to migrate thousands of products from WooCommerce to Shopify, and the entire process was seamless." [Trustpilot review, LitExtension]
> - https://uk.trustpilot.com/review/litextension.com (September 21, 2026)

No negative post-migration Trustpilot or Shopify App Store reviews specifically about a WooCommerce-to-Shopify move were found in the pages that loaded; this is a gap in coverage (most review-platform URLs for the major migration apps 404'd, per Method notes), not a finding that negative experiences don't exist.

---

## Sources used (successfully loaded)

- community.shopify.com - 18 full threads pulled via direct `/t/<slug>/<id>` and `/t/<slug>` URLs, sourced from a `search.json?q=woocommerce%20migration` query
- help.shopify.com/en/manual/migrating-to-shopify (and its WooCommerce-specific sub-page, plus customers/import-export-customers)
- woocommerce.com/document/product-csv-importer-exporter/
- woocommerce.com/documentation/ (category listing only)
- woocommerce.com/document/woocommerce-subscriptions/
- docs.stripe.com/security, docs.stripe.com/get-started/data-migrations, docs.stripe.com/get-started/data-migrations/pan-import
- apps.shopify.com/litextension-shopify-migration-app/reviews
- uk.trustpilot.com/review/litextension.com
- capterra.com/p/225601/WooCommerce/reviews/

## Sources that failed or returned nothing usable

- wordpress.org support search (`/search/results/?q=...` and `/support/search/<query>/`) - loads but results are JS-rendered, not fetchable as text
- wordpress.org/support/topic-tag/migration/ - loaded, no relevant topics in the visible listing
- apps.shopify.com/matrixify, /matrixify/reviews, /litextension/reviews, /cart2cart/reviews, /litextension-store-migration, /cart2cart-store-migration - all HTTP 404
- uk.trustpilot.com/review/cart2cart.com, /review/www.cart2cart.com, /review/matrixify.app - all HTTP 404
- woocommerce.com/document/exporting-and-importing-orders/ - HTTP 404
- www.capterra.com/p/106847/WooCommerce/ and /reviews/ - HTTP 404 (wrong product ID guess; correct ID 225601 found separately and used above)
