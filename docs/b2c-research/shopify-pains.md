# Shopify Merchant Pain Points: Voice-of-Customer Research

Scope: small and mid-size Shopify merchants (not enterprise/flagship brands). Question asked: where are Shopify merchants unhappy, costly, or limited. This document reports only what merchants and evaluators actually said, with source, URL, and date for every quote. No invented numbers, no invented quotes, no usernames. Research window: 2024 to 2026, weighted toward the last 12 months (September 2025 to September 2026), with older material kept only where it is the clearest available evidence and flagged as older.

Research date: September 25, 2026.

---

## Methodology and sample bias (read this first)

**Reddit (r/shopify, r/ecommerce, r/smallbusiness, r/ukecommerce) was completely inaccessible for this research pass.** Every fetch attempt against reddit.com and its subdomains (www, old, np, amp, api, gateway) returned a hard tool-level block, not a rate limit or a captcha that could be routed around. Thirteen-plus Reddit mirror and proxy services were tried and were dead, rate-limited, or behind anti-bot walls. web.archive.org was also blocked. The session's search budget was exhausted before most of the searches needed for this brief could run, and no connected browser was available as a workaround. This is a real gap: Reddit was the source most likely to carry candid, non-commercial small-merchant venting, and its absence is the single biggest limitation of this research. It is flagged here rather than papered over.

**Sources that did work**, reached directly by URL rather than search: Shopify's own Community forum at community.shopify.com (which runs on Discourse and exposes a public JSON API, giving reliable verbatim, dated post text), Trustpilot's Shopify review page, one working Capterra Shopify review page, Hacker News (via search and direct item pages), and customer case studies published by WooCommerce.com and BigCommerce.com plus a migration vendor (LitExtension).

**Sources that failed or were blocked**, noted so gaps are visible rather than silent: G2.com (403 Forbidden on every attempt), DuckDuckGo, Google, Bing (site: queries returned generic Shopify-brand results regardless of query, not real results), Yandex, Startpage, Mojeek, Ecosia, Qwant, Yahoo, Brave (rate-limited after one call), Marginalia (doesn't meaningfully index Reddit), several guessed BigCommerce/WooCommerce/Wix case-study URLs (404), and one Medium "Why I Left Shopify" article found via Hacker News but blocked by a bot-verification wall on every attempt.

**What this means for confidence:** several themes below are corroborated only on Shopify's own Community forum, which is a real but skewed venue: posters are mostly still-paying merchants actively trying to solve a problem or get staff attention, not people who already left. That structurally under-represents calm retrospectives and people who churned outright, and over-represents acute, unresolved, in-progress complaints. Trustpilot's Shopify review page is dominated by end-customers of Shopify-powered stores complaining about scams and deliveries; genuine merchant reviews are a small minority (roughly 1 in 15 to 20) and had to be filtered out by hand. Capterra, as a B2B software-review site, skews toward more balanced, named-role reviewers (a CMO, a Sales Director, a Founder) and was the best source for level-headed 3 and 4-star "cons" answers. Company case studies on WooCommerce.com and BigCommerce.com are vendor marketing and have a direct commercial incentive to make Shopify look bad and their own platform look good; they are labeled as such throughout and treated as lower-trust than forum or review-site material. Hacker News skews toward technically sophisticated founders and developers, not the median small merchant.

Where a quote's exact wording could not be independently re-verified on a second fetch, that is noted next to the quote. Where WebFetch's summarizing pass (rather than raw HTML) was the only way to reach a page, that is also noted. One quote that could not be reproduced identically on a second fetch was dropped entirely rather than guessed at.

---

## Part 1: Ranked pain themes

Themes are ranked by the combination of how often they surfaced, how strongly worded the complaints were, and how many independent source types corroborated them. Frequency and intensity are qualitative reads from what was actually found, not statistics, since no systematic count of "all Shopify merchants" is possible from this research.

### 1. Transaction fees and Shopify Payments holds or reserves

Frequency: high. A single search of Shopify's own Community forum for "payout frozen" returned 48 distinct matching thread titles; 12 of 12 threads opened on this topic confirmed the complaint. Corroborated independently on Capterra.
Intensity: high. This is the most business-critical, cash-flow-threatening theme in the entire research pass: legal threats, Better Business Bureau complaints, and sums from the low thousands to $500,000 described as frozen.
Confidence: high for the existence and frequency of the pattern (corroborated across two independent research passes and one independent review site); capped at medium-high because most individual hold stories come from a single platform, Shopify's own forum.
Store size signals: spans brand-new single-owner stores (first sale, a $1 subscription charge triggering a freeze) through established multi-year apparel and DTC brands (2,500+ orders) up to a $500,000 hold that implies a larger-volume store, flagged below as possibly above small/mid.

Quotes:

> "We just got hit with a $500k hold from Shopify and appeal got denied. If anyone can help us we are willing to pay a 10-20% of the released funds."
Source: Shopify Community forum. URL: https://community.shopify.com/t/500-000-on-hold/684368. Date: September 20, 2026.
Context: merchant's Shopify Payments reserve hit $500k and their appeal was denied; they publicly offered a cut of the funds to anyone who could help. Sentiment: desperate. Theme tag: trigger. Profile: no size signal beyond the dollar figure, which implies a higher-volume store than most others in this set.

> "a hold that size comes from Shopify Payments' own risk/underwriting team, so it's not something anyone here (or any outside 'fixer') can actually release" / "percentage-fee offers like that are a common scam pattern."
Source: Shopify Community forum, replies in the same thread as above. URL: https://community.shopify.com/t/500-000-on-hold/684368. Date: September 21, 2026.
Context: other merchants warning the poster above that offering a cut of frozen funds is a known scam vector, a secondary harm caused by fund holds. Sentiment: cautionary. Theme tag: outcome.

> "I am writing to formally log an urgent complaint regarding the unlawful withholding of $4,350" / "All customer orders associated with these held funds have been fully processed, fulfilled, and delivered" with no pending disputes or chargebacks.
Source: Shopify Community forum. URL: https://community.shopify.com/t/shopify-is-holding-4-350-of-my-funds-while-support-refuses-to-escalate-what-are-my-options/680523. Date: September 11, 2026, 1:50pm.
Context: store closed and $4,350 in sales proceeds held over a $325 outstanding subscription balance. A near-identical post from the same incident, six minutes earlier, appears at a second thread URL below, most likely the same merchant cross-posting to two boards. Sentiment: angry, formal-complaint tone. Theme tag: trigger.

> "I am posting here to bring immediate community and executive visibility to a critical deadlock created by Shopify's support policy that is actively harming my business."
Source: Shopify Community forum (verified by direct fetch). URL: https://community.shopify.com/t/unlawful-hold-on-4-350-merchant-funds-while-account-locked-over-325-subscription-fee/680521. Date: September 11, 2026, 1:44pm.
Context: same $4,350-held/$325-owed incident as above, posted six minutes earlier under a different title. Sentiment: angry. Theme tag: trigger.

> "Shopify Payments was disabled on my store. Approximately $55,000 USD of my pending payouts is frozen until September 2026... My bank account is at zero. My suppliers are unpaid. My delivery companies are unpaid. My team is unpaid. My rent is unpaid. I cannot buy food for my family this week."
Source: Shopify Community forum. URL: https://community.shopify.com/t/shopify-froze-55-000-of-my-money-i-am-writing-this-from-zero-please-someone-at-shopify-read-this/622710. Date: May 15, 2026.
Context: self-described small brand, solo hands-on founder manufacturing their own product; posted from Israel. Sentiment: desperate, the highest-intensity quote found in the whole research pass. Theme tag: outcome.

> "We've had 2,500+ orders... Only 10 chargebacks total, about a 0.4% chargeback rate (well under the 1% threshold I always hear referenced)... Shopify Payments was disabled on our store due to 'elevated risk of customer disputes,' and Shopify is holding our payouts for 120 days."
Source: Shopify Community forum. URL: https://community.shopify.com/t/shopify-payments-disabled-120-day-payout-hold-only-10-chargebacks-on-2-500-orders-0-4/583187. Date: January 12, 2026.
Context: mid-size store (2,500+ orders to date) feels a risk flag is disproportionate to its actual dispute rate. Sentiment: frustrated. Theme tag: trigger.

> "It genuinely feels like unless you're on their $14,000/month enterprise plan, they just don't care."
Source: Shopify Community forum. URL: https://community.shopify.com/t/payouts-frozen-for-weeks-shopify-support-feels-useless-unless-you-re-paying-14k-mo/571118. Date: October 18, 2025.
Context: growing business whose payouts froze over identity verification for one owner. Sentiment: angry, sarcastic. Theme tag: language, a clear statement of resentment toward the gap between standard and enterprise-tier treatment.

> "Shopify takes transaction fees on every sale unless you use their proprietary payment gateway"
Source: Capterra review, 5 stars overall, cons section. URL: https://www.capterra.com/p/83891/Shopify/reviews/. Date: 2026 (exact day not captured). Reviewer industry: Media Production, tenure 2+ years.
Context: cons-section answer on an otherwise positive review. Sentiment: matter-of-fact. Theme tag: language, states the fee-lock-in mechanic plainly.

---

### 2. Account suspensions and sudden terminations

Frequency: 5 of 5 threads opened on this topic confirmed the complaint; overlaps heavily with theme 1 (a billing dispute or risk flag often cascades into both a suspension and a fund hold at once).
Intensity: high, with holiday-season timing complaints and legal or Better Business Bureau threats.
Confidence: medium (concentrated on Shopify's own Community forum).
Store size signals: from brand-new or trial stores (triggered by a $1 subscription charge) to established sellers who describe themselves as financially vulnerable.

Quotes:

> "my store was suddenly suspended right after I attempted to pay the $1 subscription fee via PayPal" / "no prior notice or explanation" / "over 48 hours later, I still haven't received any follow-up or clarification."
Source: Shopify Community forum. URL: https://community.shopify.com/t/urgent-account-suspended-without-notice-no-response-from-shopify-support-after-48-hours/392572. Date: February 6, 2025 (older than 12 months).
Context: poster also stated intent to file a Better Business Bureau complaint and pursue legal action. Sentiment: alarmed. Theme tag: trigger.

> "I love Shopify it has made my business experience really amazing evrything about it is really appreciated by me the way they handle payments the themes and all customizations included in the platform but only thing I'm unhappy about it it's been 5 days since my account was terminated with[out] notice"
Source: Shopify Community forum. URL: https://community.shopify.com/t/account-suspended-for-5-days-without-an-update/381389. Date: December 17, 2024 (older).
Context: unusually conflicted tone (positive about the platform overall, angry about the suspension specifically). A reply in the same thread on December 21, 2024 suggested the merchant "just make use of different details entirely," i.e. start a new store under a different identity, a workaround merchants apparently resort to. Sentiment: polite but conflicted. Theme tag: language.

> "i spoke to someone from shopify help centre a couple of weeks ago since i never received my payouts and my account was gonna be suspended... I'm not rich like you guys for me every amount of money means a lot."
Source: Shopify Community forum. URL: https://community.shopify.com/t/how-can-i-resolve-my-suspended-account-and-unpaid-payouts-issue/290741. Date: January 30, 2024 (older).
Context: small or individual operator explicitly framing the financial stakes. Sentiment: hurt, financially vulnerable. Theme tag: language.

> "Some of my products got suspended, and I sent it extensive documentation to resolve it. Obviously, no response yet, and no clarity if there will be any. They really want to destroy my business right before holiday season. My payout are frozen, and they also limited payment methods on my store. Just horrible. They also wiped off my store from Shop app."
Source: Shopify Community forum. URL: https://community.shopify.com/t/has-anyone-had-their-products-restored-after-suspension/570072. Date: October 10, 2025 (within last 12 months).
Context: compound case, product suspension cascading into a payout freeze, payment-method limits, and delisting from the Shop app, all at once, timed right before the holiday season. Sentiment: angry, feels targeted. Theme tag: outcome.

> "My Shopify Payments account has been suspended, and we've been trying to resolve the verification issue for several months."
Source: Shopify Community forum. URL: https://community.shopify.com/t/shopify-payments-account-suspended/399250. Date: March 8, 2025 (older).
Context: a stalled identity-verification issue as the trigger. Sentiment: frustrated. Theme tag: trigger.

---

### 3. App subscription stacking and rising app costs

Frequency: 6 of 6 threads opened on Shopify's Community forum confirmed the complaint; independently corroborated on Capterra.
Intensity: medium, with one high-intensity spike (a reported 300% app price increase).
Confidence: medium-high, corroborated across two independent source types (Community forum and Capterra).

Quotes:

> "Execcive App Price Increases of over 300%. I have a store on Shopify... limit App subscrtiption price increases to no more than 10% year over year."
Source: Shopify Community forum (typos preserved as written). URL: https://community.shopify.com/t/protection-against-excessive-app-subscription-price-increases/608189. Date: April 17, 2026.
Context: merchant proposing Shopify cap app price increases after being hit with a large hike. A reply from a Shopify Partner (app developer) in the same thread called the increase "crazy," corroborating the figure from the vendor side. Sentiment: angry. Theme tag: trigger.

> "I've been auditing my app stack and realised I'm paying for a few apps where I genuinely only use one feature. Everything else in them I've never touched." / "Feels like a lot of us are paying suite prices for single features."
Source: Shopify Community forum. URL: https://community.shopify.com/t/which-shopify-app-do-you-pay-for-but-only-use-one-feature-of/659021. Date: July 30, 2026.
Context: merchant auditing recurring app costs. Sentiment: resigned, frustrated. Theme tag: language.

> "Triple Whale is the classic example - most stores use maybe 20% of what it does...and pay $150-400+ a month for the rest."
Source: Shopify Community forum, same thread. Date: July 31, 2026.
Context: names a specific expensive app category (analytics) as an example of the pattern. Theme tag: pain.

> "The entry price is not the cost. A large share of this category bills usage on top: per order, per impression, or a share of the revenue the app claims to have generated." / "Two apps at the same price do not get the same number of chances to run."
Source: Shopify Community forum. URL: https://community.shopify.com/t/half-the-top-shopify-aov-apps-cost-10-a-month-or-less/675179. Date: September 2, 2026.
Context: a data-driven forum post analyzing 166 upsell/bundle/cart apps in the Shopify App Store, finding the median entry price is $9.99 but usage-based billing on top is the real cost driver. Sentiment: matter-of-fact. Theme tag: language, names the hidden-cost mechanism precisely.

> "Some apps get expensive fast, and a few features that should be basic are locked behind paid apps. Customizing themes beyond the simple stuff can get tricky unless you know Liquid or CSS."
Source: Capterra review, 4 stars, cons section. URL: https://www.capterra.com/p/83891/Shopify/reviews/. Date: April 15, 2026. Reviewer: IT Services, 2+ years tenure.
Theme tag: pain.

> "The subscription fees and commission rates are somewhat high, which significantly increases the cost of goods"
Source: Capterra review, 4 stars. URL: https://www.capterra.com/p/83891/Shopify/reviews/. Date: 2026 (exact day not captured). Reviewer: Warehousing industry, tenure 6-12 months.
Theme tag: pain.

---

### 4. B2B and wholesale limitations on non-Plus plans

Frequency: corroborated across Community forum (multiple threads), Capterra (multiple reviews), and independently in two brand evaluation or exit case studies. One of the most cross-validated themes in this research.
Intensity: medium, described as specific feature gaps rather than platform-ending failures.
Confidence: high.

Quotes:

> "I am currently setting up B2B Markets and need the ability to support our three-tier wholesale pricing program... The challenge I am encountering is that the current setup appears to restrict a product to only one market. This does not work for our wholesale program because the same products need to be available across all three markets, with only the pricing/discount changing based on the customer's assigned tier."
Source: Shopify Community forum. URL: https://community.shopify.com/t/b2b-mods-needed/667542. Date: August 17, 2026.
Context: merchant with an already-established multi-tier dealer program hitting the "one market per product" architecture limit. Theme tag: pain.

> "Since Shopify rolled out native B2B to all paid plans back in April, I've been digging into what it's actually like to run wholesale on a non-Plus store... everything after the order (invoicing with due dates, chasing net-30/60 payments, tracking who's overdue) is still totally manual for most people."
Source: Shopify Community forum. URL: https://community.shopify.com/t/anyone-else-stuck-doing-wholesale-net-terms-invoicing-manually-since-b2b-opened-up-to-non-plus-plans/687136. Date: September 24, 2026.
Theme tag: pain.

> "Most non-Plus stores I know export unpaid orders weekly into a sheet and email manually."
Source: Shopify Community forum, same thread. Date: September 25, 2026.
Theme tag: outcome, the manual workaround merchants describe using.

> "Back then their B2B offering didn't even have payment terms.. (pay on 30 days)" and, in the same review, "not being able to have a different billing address and shipping address for wholesale orders"
Source: Capterra review, 1 star (an outlier low score, kept because it is a specific, checkable feature-gap claim rather than a vague rant). URL: https://www.capterra.com/p/83891/Shopify/reviews/. Date: July 29, 2025. Reviewer: Founder, Food and Beverages.
Context: reviewer notes this describes an earlier period of Shopify's B2B feature set, which may have since partly changed. Theme tag: language.

> "The discount code system is pretty basic - we can't do the tiered pricing structures our bulk buyers expect"
Source: Capterra review, 5 stars, cons section. URL: https://www.capterra.com/p/83891/Shopify/reviews/. Date: August 3, 2026. Reviewer: Sales Director, Sporting Goods.
Theme tag: pain.

> "Limitations on B2B, wholesale, and businesses that rely on 'dealer' networks."
Source: Capterra review, 5 stars, cons section. URL: https://www.capterra.com/p/83891/Shopify/reviews/. Date: August 29, 2026. Reviewer: CMO, Automotive.
Theme tag: pain.

> "Where BigCommerce shines is B2B, and because of the direction of the business, BigCommerce was the better long-term option."
Source: company case study (evaluated Shopify, chose BigCommerce; vendor-published, treat as lower-trust marketing material). URL: https://www.bigcommerce.com/case-study/regal-fish/. Date: June 2026.
Context: 37-year-old UK seafood brand with a dedicated ecommerce manager role, evaluated Shopify, BigCommerce and WooCommerce; B2B and wholesale functionality was the deciding factor against Shopify. Theme tag: alternative.

---

### 5. Multi-location inventory and multi-currency or VAT handling

Frequency: roughly 7 to 8 independent finds across Community (about 5) and Trustpilot (2 to 3), spanning 2022 to 2026.
Intensity: medium-high, described in "huge pain," "absurd," and "workaround machine" terms, repeated across years.
Confidence: high. The same structural gap recurs independently across a four-year span: a Shopify "location" is a separate stock pool with no native shared or virtual inventory across locations, and native multi-currency and VAT handling pushes merchants toward paid apps or developers.

Quotes:

> "It is a HUGE pain to have to transfer inventory back and forth each week. I know shopify is known for inefficiencies in all aspects, but there has got to be a way to have each popup location pull from the same inventory. PLEASE HELP! It is absurd that this isn't just a simple option."
Source: Shopify Community forum. URL: https://community.shopify.com/t/one-inventory-multiple-locations/143154. Date: August 14, 2022 (older, kept because the exact same gap recurs in the 2023-2026 quotes below).
Context: single storefront plus recurring pop-up events, wants one shared inventory pool. Theme tag: pain.

> "if i allow the products in the shop to be available for online purchase i get a double shipping rate for my customers... this seems a bit of a hole in the logic... Considering how much i pay shopify a month in subs/ fees i dont really want another bolt on app.."
Source: Shopify Community forum. URL: https://community.shopify.com/t/multiple-location-inventory-tracking-amp-shipping-one-fee/221580. Date: June 3, 2023 (older).
Context: warehouse plus physical shop trying to unify online and in-store stock without a double-shipping charge. Theme tag: pain.

> "I recently started selling internationally, but my current multi-currency app doesn't always display accurate exchange rates or handle local payment options. Customers have reported issues where prices are rounded inconsistently or don't match the checkout total. This has caused some abandoned carts and confusion among international buyers."
Source: Shopify Community forum. URL: https://community.shopify.com/t/small-favor-how-do-i-choose-the-right-shopify-app-for-multi-currency-support/393552. Date: February 11, 2025.
Theme tag: trigger and outcome.

> "EU VAT handling is a mess without a paid app, multi-currency display is basic, and every time we need something slightly custom we either pay for an app or call a developer... Not a bad platform if you stay simple, but for us it's becoming more of a workaround machine than an actual solution."
Source: Trustpilot review, 3 stars, a mixed rather than a rage review. URL: https://www.trustpilot.com/review/www.shopify.com. Date: March 11, 2026.
Context: one-year Shopify merchant shipping to Italy, France and Germany. Theme tag: language, "workaround machine" is a strong quotable phrase.

> "They just changed how to update inventory inside of the product from 1 step to 5 steps. 50% of the time it now does not update."
Source: Trustpilot review, 1 star, US. URL: https://www.trustpilot.com/review/www.shopify.com. Date: May 2026 (day shown inconsistently as May 8 or May 9 across two fetches of the same review; content of the quote was identical both times).
Theme tag: trigger, a platform UI change is what set this off.

> "The issue that when I add any product from non-Swiss market using ajax / fetch, the response has CHF as currency (even if I pass locale aware URL)."
Source: Shopify Community forum. URL: https://community.shopify.com/t/how-to-resolve-multi-currency-issue-in-ajax-cart/292904. Date: February 5, 2024.
Context: multi-market Swiss, German and Austrian store on Shopify Markets. Theme tag: pain.

Trigger events for this theme: the complaint consistently surfaces right when a merchant adds a second physical footprint (a pop-up, a second shop, a warehouse plus shop) or starts shipping cross-border for the first time. It is a scaling-moment complaint, not a day-one complaint.

---

### 6. Reporting and analytics limitations

Frequency: Community forum, 3 threads; Capterra, 2 reviews.
Intensity: medium ("okay but not great," "still limited," not rage).
Confidence: high for the specific claim that native reporting and custom reports are basic and gated to higher plans, corroborated independently by the Community forum and Capterra.

Quotes:

> "Am I the only one who has trouble generating reports for unfulfilled items?... When filtering reports by fulfillment status, the filter operates at the order level, not the line item level. This means orders with a status of 'Partially Fulfilled' are excluded from 'Unfulfilled' reports, even if they contain items that have never been shipped... This is a fundamental inventory and operations reporting need for any merchant managing large or complex orders. I can not even find how to submit merchant feedback for this."
Source: Shopify Community forum. URL: https://community.shopify.com/t/shopify-reports-for-unfulfilled-items-do-not-include-partially-fulfilled-orders/661950. Date: August 7, 2026.
Theme tag: pain and trigger.

> "Is there any way to export your Shopify Purchase Orders or have access to API to run reports... We are a mid-size business and only have 47 purchase orders but that is tracking over 115,000 products. There should be a way to have API access or be able to export all PO's into a CSV file so reports can be ran and filter by incoming."
Source: Shopify Community forum. URL: https://community.shopify.com/t/no-reporting-or-api-access-to-shopify-purchase-orders/614928. Date: April 27, 2026.
Context: one of the most explicit self-identified size signals found in this research: "mid-size business," 47 purchase orders covering 115,000 products. Theme tag: pain.

> "The reporting is okay but not great unless you pay for higher plans."
Source: Capterra review, 4 stars, cons section. URL: https://www.capterra.com/p/83891/Shopify/reviews/. Date: April 15, 2026.
Theme tag: pain.

> "I am a US shop user. When I calculate costs, I go to Finance-Payout to see all the fees of card rates, and I go to Setting-Billing to see fees for subscription, domain renew, app fees, transaction fees, etc... Why are those financial pages located in the totally different section??"
Source: Shopify Community forum. URL: https://community.shopify.com/t/is-there-a-way-to-see-all-the-fees-shopify-payment-transaction-subscription-on-shopify/396405. Date: February 22, 2025.
Theme tag: pain, a visibility problem: merchants cannot see their total app-plus-fee burden in one place.

Trigger events for this theme: reporting complaints cluster around month-end financial reconciliation and around purchase-order or incoming-inventory tracking at moderate scale, surfacing once bookkeeping or supply-chain complexity outgrows a spreadsheet-replacement dashboard.

---

### 7. Customisation limits: checkout, variant caps, product images

Frequency: 6 of 8 relevant Community threads opened showed a real customisation-limit complaint. URL and permalink structure specifically: zero complaints found anywhere, across every source and agent that looked.
Intensity: medium, mostly constructive or workaround-seeking rather than angry, but the underlying limits are specific and real.
Confidence: medium, multiple independent posters, but concentrated on one non-Reddit source (Shopify's own Community forum).

Quotes:

> "Our store needs one discount coupon to apply to up to 2,000 selected product variants. Shopify currently shows an error when more than 100 variants are selected."
Source: Shopify Community forum. URL: https://community.shopify.com/t/request-to-increase-discount-variant-selection-limit/683801. Date: September 18, 2026.
Context: B2B or franchise model selling customized kits at scale. Theme tag: pain.

> "native Shopify only allows one single image per variant option" / "Color variants with dedicated image galleries are an essential requirement for any clothing store, not an enterprise-only luxury."
Source: Shopify Community forum. URL: https://community.shopify.com/t/native-multiple-images-per-color-variant-without-plus-or-paid-apps/679332. Date: September 9, 2026.
Context: self-described small apparel or DTC merchant, addressed formally to "Shopify Community and Product Team." Theme tag: pain and language.

> "Yeah, that Scripts sunset is forcing a lot of Plus merchants to rethink their checkout stack right now."
Source: Shopify Community forum. URL: https://community.shopify.com/t/shopify-scripts-are-ending--what-is-everyone-using-now/632089. Date: June 11, 2026.
Context: Shopify Scripts, custom checkout logic, was deprecated June 30, 2026, forcing Plus merchants to migrate to Shopify Functions on a deadline. Theme tag: trigger.

> "almost everything requires an 'App', which gives questionable third parties access to all my customer data"
Source: Hacker News, Ask HN post. URL: https://news.ycombinator.com/item?id=27612248. Date: not confirmed on the page, item ID places it circa 2021, flagged as older and unconfirmed rather than guessed at.
Context: solo founder of a 3D-printed jewelry business, comparing Shopify to a custom-built storefront that converted roughly 20x worse; acknowledged Shopify let them get "a passable storefront up and running in a week" despite the limits. Theme tag: pain, touches both customisation and data-ownership.

> "Point the discount at a collection instead. A collection holds thousands of products, and the discount counts it as one item."
Source: Shopify Community forum, reply in the same thread as the variant-cap quote above. URL: https://community.shopify.com/t/request-to-increase-discount-variant-selection-limit/683801. Date: September 2026.
Theme tag: alternative, the community workaround offered for the 100-variant cap.

---

### 8. Support quality

Frequency: 5 of roughly 10 merchant-identifiable Trustpilot reviews showed a support-quality complaint (after filtering out end-customer noise); corroborated on Capterra and inside Community suspension and hold threads.
Intensity: high, the angriest language found anywhere in this research: "non-existent," "no idea what they are talking about," "ghosting."
Confidence: medium, concentrated on Trustpilot with corroborating fragments elsewhere.

Quotes:

> "Absolutely horrendous customer support in terms of getting our Shopify App through their app review." / "There is no way to communicate with the review team and the customer support has no idea what they are talking about."
Source: Trustpilot review, Denmark. URL: https://www.trustpilot.com/review/www.shopify.com. Date: September 18, 2026.
Context: reviewer describes speaking with six support agents, four of whom gave no help and two of whom gave incorrect advice (per the fetched review body). Theme tag: pain and language.

> "Shopify breaks critical functionality, and customer service is non-existent even for Shopify plus members"
Source: Trustpilot review, US, self-identified Shopify Plus member. URL: https://www.trustpilot.com/review/www.shopify.com. Date: May 19, 2026.
Context: a platform change removed email and password login, forcing a proprietary off-site login flow; reps reportedly claimed no authority to fix it. Theme tag: pain.

> "unable to reach Shopify Support through either chat or phone"
Source: Trustpilot review, US, self-identified Shopify Plus merchant. URL: https://www.trustpilot.com/review/www.shopify.com. Date: June 8, 2026.
Context: roughly 45-minute platform outage during which no support channel was reachable. Theme tag: trigger.

> "Impossible to cancel - Success Manager is ghosting us"
Source: Trustpilot review, Hong Kong, Shopify Plus tier. URL: https://www.trustpilot.com/review/www.shopify.com. Date: January 22, 2026.
Context: reviewer describes trying to cancel their Shopify Plus plan and getting no response from their assigned Success Manager after multiple emails. Theme tag: pain, functions as a de facto lock-in complaint as well.

> "Support services provided can vary greatly from time to time. Was waiting on hold for much longer than necessary"
Source: Capterra review, 4 stars. URL: https://www.capterra.com/p/83891/Shopify/reviews/. Date: 2026. Reviewer: Hospital and Health Care, 2+ years tenure.
Theme tag: pain.

> "I wish shopify still had a phone number to resolve issues but now its all through these chat agents with no results! Getting ready to cancel and maybe lose my money waiting to be paid out!!"
Source: Shopify Community forum. URL: https://community.shopify.com/t/shopify-payments-hold/391503. Date: February 1, 2025 (older).
Context: sole proprietor, US, whose support fatigue is compounding an active payments hold. Theme tag: pain and language.

---

### 9. Shopify Plus price jump

Frequency: thin, 2 direct hits out of roughly 15 non-Reddit sources opened for this theme specifically; corroborated by one detailed cost-evaluation case study from a brand that considered Plus and chose to stay on WooCommerce instead.
Intensity: high where present, among the angriest and most specific material found.
Confidence: low to medium. Few independent sources, and the venue most likely to carry this complaint, Reddit, was inaccessible this session.

Quotes:

> "Was a loyal customer since 2017. Shopify today is unrecognizable."
Source: Trustpilot review, US, long-tenured Shopify Plus merchant. URL: https://www.trustpilot.com/review/www.shopify.com. Date: April 14, 2026.
Context: per the review body, renewed a Shopify Plus contract in 2024 at a reported $2,000-plus per month, then hit a revenue decline, was denied a downgrade path, and describes being passed between eight support specialists over 14-plus months with no assigned Customer Success Manager. The dollar figure is sourced from a summarizing fetch rather than confirmed character-for-character, so treat it with slightly more caution than the title line. Theme tag: outcome.

> "Shopify Plus is far out of budget for small-scale merchants, and stacking up monthly fees for third-party variant image apps adds up quickly when margins are already tight."
Source: Shopify Community forum. URL: https://community.shopify.com/t/native-multiple-images-per-color-variant-without-plus-or-paid-apps/679332. Date: September 9, 2026.
Theme tag: pain.

> "When you're doing 1 million pounds or 10 million pounds through subscriptions, that soon adds up. You're instantly shelling out 100,000 pounds a year."
Source: company case study (grüum, a UK subscription skincare brand that evaluated Shopify Plus and Magento and chose to stay on WooCommerce; vendor-published, treat as lower-trust marketing material). URL: https://woocommerce.com/posts/why-gruum-chose-woocommerce/. Date: July 13, 2026.
Context: roughly 80,000 orders a month, one full-time developer, around 300 SKUs. Theme tag: trigger, a cost projection rather than a lived experience, but specific and quantified.

> "It genuinely feels like unless you're on their $14,000/month enterprise plan, they just don't care."
Source: Shopify Community forum. URL: https://community.shopify.com/t/payouts-frozen-for-weeks-shopify-support-feels-useless-unless-you-re-paying-14k-mo/571118. Date: October 18, 2025.
Context: non-Plus merchant's resentment of the price and treatment gap between tiers. Theme tag: language.

---

### 10. Lock-in and not owning your data

Frequency: the weakest theme found, a single direct hit on the Community forum and Trustpilot; corroborated only conceptually by exit-story language about "control" and by one Hacker News comment about third-party app data access.
Intensity: high where present, but very thin.
Confidence: low. The natural venue for this complaint, Reddit, was inaccessible this session, and an official help forum structurally selects against people angry enough to have already left.

Quotes:

> "Impossible to cancel - Success Manager is ghosting us"
Source: Trustpilot review, Hong Kong, Shopify Plus tier. URL: https://www.trustpilot.com/review/www.shopify.com. Date: January 22, 2026.
(Also listed under support quality; it functions as a lock-in complaint, being unable to get out even while actively trying.)

> "almost everything requires an 'App', which gives questionable third parties access to all my customer data"
Source: Hacker News. URL: https://news.ycombinator.com/item?id=27612248. Date: not confirmed, circa 2021, flagged as older.

> "With WooCommerce, we can make WooCommerce fit around our business and make it work for us. We don't have to change our principles... The data is ours, which is quite different from other subscription platforms. It gives us control over our customers rather than giving them to a third party."
Source: company case study (grüum; vendor-published, lower-trust marketing material). URL: https://woocommerce.com/posts/why-gruum-chose-woocommerce/. Date: July 13, 2026.

> "Shopify was taking us to the cleaners with cross-border fees. The flexibility to run our business our way wasn't there."
Source: company case study (Landyachtz, a confirmed exit to WooCommerce; vendor-published, lower-trust marketing material, and this exact phrase was reused verbatim in a second WooCommerce.com article, so treat it as one recurring marketing line rather than two independent data points). URL: https://woocommerce.com/posts/landyachtz-woocommerce-success-story/. Date: December 17, 2025.

---

## Trigger events (cross-theme)

Specific events that repeatedly appear as the moment a complaint turns acute, across all four themes researched:

1. Identity or KYC verification (ID documents, EIN, business documents) failing or being escalated to manual review, the single most common trigger for both payment holds and Shopify Payments account suspensions.
2. A chargeback or dispute spike, even at a low absolute rate (one merchant reported 0.4%, "well under the 1% threshold"), being flagged as "elevated risk," especially around the Christmas shipping-delay period.
3. An unpaid subscription or app invoice, sometimes as small as $1 or $325, triggering a full account lock that cascades into a much larger fund hold. This exact "small bill, big consequence" pattern appeared twice independently in the research.
4. A first-ever sale on a brand-new store triggering mandatory identity verification before any payout can be released.
5. App vendors imposing large (100 to 300 percent) price increases without warning or grandfathering existing customers.
6. Usage-based or consumption billing layered on top of a low advertised subscription price.
7. A hard platform deprecation deadline (the Shopify Scripts sunset, effective June 30, 2026) forcing merchants to rebuild checkout logic on short notice.
8. Hitting a hard technical ceiling mid-task, such as the 100-variant selection cap, while building a large catalog or discount.
9. A Shopify Plus contract renewal or downgrade request being refused, triggering an extended support fight.
10. A platform outage or account freeze exposing that premium-tier support access does not mean fast access.
11. Doing the annual-fee math at scale: two exit-adjacent case studies (Landyachtz, grüum) describe the trigger not as "fees exist" but as the specific moment of adding up the true yearly cost.
12. Shopify discontinuing a first-party tool merchants depended on (the Stocky inventory app's planned discontinuation drew a 151-reply Community thread), forcing a scramble to find new apps even where merchants stayed on the platform.

---

## Part 2: Exit stories

An honesty note before the list: only one item below (Landyachtz) is a confirmed, completed migration away from Shopify with a first-person stated reason. Several others are brands that evaluated Shopify and chose not to adopt it (never actually used it), one is an open deliberation with no confirmed departure, and two are migration-vendor case studies where the stated reason is the vendor's narrative summary, not the merchant's own words. Each is labeled accordingly. All are vendor-published or forum material; none are neutral, and that is flagged throughout.

**Landyachtz (skateboard brand), Shopify to WooCommerce, confirmed exit.**
Quotes: "Shopify was taking us to the cleaners with cross-border fees. The flexibility to run our business our way wasn't there." "We needed a platform that gave us full control." "I can't think of a single performance metric that hasn't improved since the switch."
Source: company case study, WooCommerce.com. URL: https://woocommerce.com/posts/landyachtz-woocommerce-success-story/. Date: December 17, 2025.
Store size: founded 1997, approximately 1,500 SKUs, direct-to-consumer is 20 percent of total sales (also runs wholesale and manufacturing), average order value $175, Canada and US. Annual platform fees reportedly dropped from about $45,000 to under $10,000 after switching, a claimed 75 percent cut.
Reason: cross-border transaction fees and inflexibility, becoming a cost and control problem as direct-to-consumer sales scaled after an 8x pandemic surge.

**grüum (UK subscription skincare brand), evaluated Shopify Plus and Magento, stayed on WooCommerce, not an exit.**
Quotes: "We were going to have to change our business to fit into that business." "When you're doing 1 million pounds or 10 million pounds through subscriptions, that soon adds up. You're instantly shelling out 100,000 pounds a year." "The data is ours, which is quite different from other subscription platforms."
Source: company case study, WooCommerce.com. URL: https://woocommerce.com/posts/why-gruum-chose-woocommerce/. Date: July 13, 2026.
Store size: roughly 80,000 orders a month, one full-time developer, around 300 SKUs, UK.
Reason: rejected Shopify Plus over subscription-billing cost and loss of business-model control.

**No Pong (deodorant brand), evaluated Shopify and BigCommerce, stayed on WooCommerce, not an exit.**
Quote: "We found the other platforms highly restrictive and expensive, with cart and checkout experiences that we didn't feel were best-in-class."
Source: company case study, WooCommerce.com. URL: https://woocommerce.com/posts/no-pong-woocommerce-success-story/. Date: February 20, 2026.
Store size: 20 employees, 200-plus SKUs, sells in Australia, Canada and the US.
Reason: two-year platform evaluation as they scaled from startup to multinational; cost and restriction were the stated concerns.

**Regal Fish (UK seafood brand), evaluated Shopify, chose BigCommerce, not an exit (never used Shopify).**
Quote: "Where BigCommerce shines is B2B, and because of the direction of the business, BigCommerce was the better long-term option."
Source: company case study, BigCommerce.com. URL: https://www.bigcommerce.com/case-study/regal-fish/. Date: June 2026.
Store size: 37-year-old brand, recently acquired by a larger seafood manufacturer, dedicated ecommerce manager role.
Reason: B2B and wholesale functionality was the deciding factor against Shopify.

**AS Colour (apparel brand), migrated from Magento 1, considered and rejected Shopify Plus, chose BigCommerce.**
Quotes: "Our main need was a platform that was super stable, one that would allow our sites to stay up." "It was those two things, features and functionality, that really set BigCommerce apart from the pack."
Source: company case study, BigCommerce.com. URL: https://www.bigcommerce.com/case-study/as-colour/. Date: July 2026.
Store size: founded 2005, five warehouses across four countries, larger end of mid-market, borders on enterprise.
Reason: combined direct-to-consumer and B2B wholesale operation, chose BigCommerce over Shopify Plus and Magento 2 on stability and feature grounds.

**Dan-O's Seasoning, WooCommerce, weak or ambiguous signal.**
Quote: "WooCommerce allowed us to go from something as simple as we needed in the beginning to a full-size, customizable site. It gave us the flexibility that we wouldn't get with Shopify or another platform."
Source: company blog, WooCommerce.com. URL: https://woocommerce.com/posts/woocommerce-vs-shopify/. Date: August 26, 2026.
Reason: unclear whether this was a documented migration away from Shopify or an initial platform choice that never involved Shopify. Reads as a general preference statement.

**Unnamed uniform retailer, Shopify to Magento, weak, vendor-narrated reason.**
Quote (about migration service quality, not the reason for leaving): "The migration went well and our products look correct in Magento. All of the custom fields and variants were moved the way we needed, and the team kept us updated throughout the process."
Reason given (not a direct merchant quote, the migration vendor's own narrative summary): needed stronger B2B selling tools, unlimited product variants, and more flexible product management than Shopify supported at their scale.
Source: case study published by LitExtension, a paid ecommerce-migration service with a commercial incentive to present migrations favorably. URL: https://litextension.com/case-study/shopify-to-magento-migration-1.html. Date: not shown on page.
Store size: 20-plus products, 22,000-plus customers, 2,000-plus orders.

**Unnamed multi-location retail brand, Shopify POS to Square, weak, vendor-narrated reason.**
Quote (about migration service quality, not the reason for leaving): "LitExtension made our POS migration from Shopify to Square incredibly smooth. They handled all the details, kept us informed, and ensured our data was transferred safely."
Reason given (vendor's narrative, not a direct merchant quote): "Shopify POS could no longer meet their needs, especially with multi-location inventory and event-based sales."
Source: case study published by LitExtension. URL: https://litextension.com/case-study/shopify-to-square-migration-1.html. Date: not shown on page.

**Ask HN: "When is it time to switch from Shopify to a proprietary solution?", deliberation, not a confirmed exit.**
Quotes: "The site in question grew to approximately 5 million in annual revenue within a few years. The founder now has the feeling it might be time to migrate from Shopify to something proprietary, to build something own." Comment reply: "You're trading Shopify fees you don't like today for Stripe fees you won't like tomorrow. Leave the site making $5m/yr alone." Comment reply: "Switching providers during $5M annual revenue will cost a fortune and doesn't guarantee benefits."
Source: Hacker News. URL: https://news.ycombinator.com/item?id=20801610. Date: August 26, 2019 (older; no evidence the switch was ever made).
Store size: roughly $5 million annual revenue, solid mid-size store, single founder.

**Ask HN: "Does anyone here use Shopify?", complaint, not a confirmed exit.**
Quote: "almost everything requires an 'App', which gives questionable third parties access to all my customer data."
Source: Hacker News. URL: https://news.ycombinator.com/item?id=27612248. Date: not confirmed, item ID places it circa 2021.
Store size: solo founder, 3D-printed jewelry, small business. Also runs a parallel custom-built site that converts roughly 20x worse than their Etsy store, and acknowledges Shopify let them launch "a passable storefront" in a week despite the limits.

---

## Part 3: Shared with WooCommerce (platform-independent operational pains)

These complaints read as being about running an ecommerce business generally, not about Shopify's specific platform design. They matter most for a company positioning against both platforms, since fixing them would not require beating Shopify on Shopify's own terms. All are sourced from Shopify's Community forum, meaning every poster here is a current Shopify merchant, but the underlying pain (inventory accuracy, fulfillment complexity, accounting reconciliation, tool dependency, apps not talking to each other) is one any ecommerce operator on any platform would recognize.

> "Each order in Shopify is automatically created a Sales Receipt in QBO via integration with SOS. The current process of reconciling the Shopify and TikTok payouts to the sales receipts in QBO is by matching them to each sales receipt. However, a surge in Retail orders has made the reconciliation very difficult since you have to identify many sales receipts included in one payout." Reply: "Do not try to match a payout to individual sales receipts. One payout is dozens of orders, minus fees, minus refunds that belong to earlier orders, minus anything held back." Reply: "Reconcile at the payout level first, not the individual order level."
Source: Shopify Community forum. URL: https://community.shopify.com/t/best-way-to-match-the-shopify-payouts-with-the-sales-receipts-of-each-order-in-qbo/340881. Date: original post July 19, 2024; replies August 5, 2026.
Sub-theme: accounting and bookkeeping reconciliation, a problem that exists on any platform once order volume and multiple sales channels are involved.

> "I'm curious how others with their own warehouse handle picking as volume grows." / "How do you pick today? One order at a time, batches, zones, something else?" / "What's your biggest bottleneck right now?"
Source: Shopify Community forum. URL: https://community.shopify.com/t/how-do-you-organize-picking-at-100-orders-a-day/687133. Date: September 24, 2026.
Store size signal: 100-plus orders a day, own warehouse, multiple pickers.
Sub-theme: fulfillment and order-picking complexity at volume.

> "everything after the order (invoicing with due dates, chasing net-30/60 payments, tracking who's overdue) is still totally manual" [for non-Plus stores using native B2B]. Reply: "Most non-Plus stores I know export unpaid orders weekly into a sheet and email manually."
Source: Shopify Community forum. URL: https://community.shopify.com/t/anyone-else-stuck-doing-wholesale-net-terms-invoicing-manually-since-b2b-opened-up-to-non-plus-plans/687136. Date: September 24 to 25, 2026.
Sub-theme: order management and invoicing complexity, applicable to any platform's B2B tooling.

> "Creating a separate transfer means going back to inventory, finding the received stock, and entering the transfer details again."
Source: Shopify Community forum. URL: https://community.shopify.com/t/does-your-team-have-to-create-a-separate-stock-transfer-every-time-a-po-arrives-partially/687688. Date: September 25, 2026.
Sub-theme: inventory receiving workflow.

> "When a PO is only partially received, printing labels can get annoying. You have to figure out which items came in with that batch instead of going through the whole PO again." Reply: "The frustrating part is when the system doesn't preserve that distinction, you end up manually comparing received vs. outstanding items every time."
Source: Shopify Community forum. URL: https://community.shopify.com/t/how-do-you-print-labels-when-a-po-arrives-in-separate-batches/687126. Date: September 24, 2026.
Sub-theme: inventory and receiving management.

> "For us, the most expensive inventory issue wasn't overstocking or supplier delays, it was inaccurate inventory across multiple sales channels" ... the problem stayed hidden until "customers started ordering items that were technically already sold elsewhere." Another reply: "It's rarely demand moving. It's lead time variance, and the on-hand number being wrong before the math ever runs." Also: "Returns put back on the shelf without an adjustment. Damaged stock nobody writes off." Another reply: "Supplier cost changes, but Shopify still has the old Cost per item... A wrong product cost can sit there for weeks before somebody notices." Another reply: "An inventory number that is wrong for an hour costs you one oversell. The same number wrong for three weeks quietly reprices your reorders."
Source: Shopify Community forum, a rich multi-voice thread. URL: https://community.shopify.com/t/what-inventory-mistake-costs-shopify-merchants-the-most-money/664818. Date: thread spans August 11 to September 5, 2026.
Sub-theme: inventory accuracy and omnichannel stock sync, "phantom stock," this was the single richest, most platform-independent thread found in the entire research pass.

> "I am concerned about hearing that the Stocky App is going away this year. What are any of you doing to manage your inventory?" Needed it to "create and receive purchase orders," "adjust our costs when receiving to utilize average costs," "print price labels directly from the PO," and for "completing our whole store inventory via barcode scanning." Reply, a self-described 20-year brick-and-mortar retailer who moved to Shopify the prior year: criticized the lack of "basic order forcasting [sic] reports" and a "robust PO system," saying third-party apps seem "more geared towards web shops."
Source: Shopify Community forum, one of the most active threads found (151 replies, 7,027 views). URL: https://community.shopify.com/t/stocky-app-going-away-after-august-31-2026/587292. Date: February 4 to 17, 2026.
Sub-theme: inventory and purchase-order software dependency; apps merchants build workflows around, disappearing.

> "Have you ever fulfilled or shipped an order, then later found out the payment was still authorized but not captured?"
Source: Shopify Community forum. URL: https://community.shopify.com/t/fulfilled-but-not-captured/686979. Date: September 24, 2026.
Sub-theme: a universal risk wherever payment authorization and fulfillment are decoupled, not specific to Shopify.

> "Worst change i've ever seen shopify do!" (describing a platform update that hid useful fraud-risk detail on "low risk" orders, followed by a fraudulent order flagged as low risk). Reply: "low risk definitely doesn't mean an order is guaranteed to be legitimate."
Source: Shopify Community forum. URL: https://community.shopify.com/t/new-order-risk-analysis-horrible-update/687168. Date: September 24 to 25, 2026.
Sub-theme: fraud and order-risk visibility. The complaint is about a Shopify UI change specifically, but the underlying problem, distinguishing legitimate from fraudulent orders, is universal to ecommerce.

> "Shopify doesn't decrement inventory until payment is confirmed" (cited as a root cause of overselling).
Source: Hacker News comment. URL: https://news.ycombinator.com/item?id=49230871. Date: August 9, 2026.
Sub-theme: inventory and overselling, a technical root-cause framing, but the business symptom is universal.

> "reports Shopify's native reporting is weirdly fragmented and were never really designed to give you a full picture of costs in one place."
Source: Shopify Community forum, reply. URL: https://community.shopify.com/t/is-there-a-way-to-see-all-the-fees-shopify-payment-transaction-subscription-on-shopify/396405. Date: June 9, 2026.
Sub-theme: apps and financial data not talking to each other, a fragmentation problem that recurs on any stack with multiple billing surfaces.

> "Support: 152. Billing: 84. Broke after a theme or platform update: 72. Missing feature: 12." A breakdown of complaint categories from a forum poster's own analysis of "483 one or two-star reviews across 126 apps."
Source: Shopify Community forum. URL: https://community.shopify.com/t/would-a-modular-shopify-app-that-replaces-multiple-small-apps-be-useful/674690. Date: August 31, 2026.
Sub-theme: app reliability and integration breakage after platform or theme updates, the second-most-cited reason (after support) merchants leave one or two-star app reviews, a pattern that would recur on any app-marketplace-dependent platform.

Theme rollup for this section: inventory accuracy and omnichannel stock sync is the best-supported platform-independent sub-theme (four items, one containing five independent voices), described by merchants as their single costliest recurring operational mistake. Fulfillment and picking complexity at volume, and accounting or bookkeeping reconciliation between payouts and a ledger, are next best supported. Tool or app dependency risk (losing a relied-upon app) drew the single most active thread in the whole research pass (151 replies) even though it is only one data point. Dollar-figure specificity was consistently higher in the fee and cost complaints (Part 1) than in these operational complaints, which were almost entirely qualitative ("very difficult," "totally manual," "annoying"): merchants seem to quantify fees far more readily than they quantify operational time lost.

---

## What was not found

Two things worth naming because the brief asked to measure, not assume: no complaints about URL or permalink structure were found anywhere, in any source, despite this being one of the seven themes to test. No dedicated migration or "why we left Shopify over losing our data" venting was found on Shopify's own Community forum, which is expected since it structurally selects for people who are staying and trying to fix things, not people who already left; this gap is most likely filled on Reddit, which could not be reached this session.
