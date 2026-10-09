# WooCommerce: Structured Reviews and Exit Stories (Voice of Customer)

Scope: structured reviews and exit/migration accounts from WooCommerce store owners and the people who build stores for them. This is research about WooCommerce itself, not about any vendor's product. No numbers or quotes below were invented; every figure and quote is attributed to a URL I actually loaded. Where a page would not load, that is stated explicitly rather than guessed at.

## Method and access notes (read this before the findings)

- WebSearch (the dedicated search tool) had already used its full session quota before this task started, so it returned zero results for the whole task.
- General web search as a workaround was heavily blocked: Google redirected to an EU cookie-consent wall and then to a bot-check page with no results; Bing's results page ignored quoted phrases and multi-word queries entirely, returning generic dictionary/unrelated results regardless of query; DuckDuckGo (both `html.duckduckgo.com` and `lite.duckduckgo.com`) returned a CAPTCHA every time; Ecosia, Ask.com and Startpage returned 403/could not be fetched; Qwant is JS-rendered and returned no results in static HTML. Brave Search worked for the first ~10 queries and then returned HTTP 429 (rate limited) for the rest of the session, including from a second, independently-launched agent, confirming it was a shared/session-wide limit, not something that would clear with more waiting inside this task.
- Reddit (`www.reddit.com`, `old.reddit.com`, `np.reddit.com`, `api.reddit.com`) could not be fetched at all in this environment - every attempt returned "Claude Code is unable to fetch from [domain]." This matters because Reddit (r/Wordpress, r/ProWordPress, r/shopify) surfaced some of the most promising exit-story threads in search results (titles/snippets only), but their content could not be verified or quoted. Those threads are listed by URL with a note that the page would not load, not quoted.
- G2 (`g2.com`) and TrustRadius (`trustradius.com`) blocked direct page fetches with HTTP 403 on every attempt (listing pages and individual review permalinks alike). One TrustRadius page (`/products/woocommerce-subscriptions/pricing`) also 403'd. Medium (`medium.com`) also returned 403. Where I have G2/TrustRadius content below, it is because Brave's search-result snippets quoted short fragments of review text before the 429s started - these are marked as snippet-sourced, not full-review-sourced.
- Sources that did load reliably and are the backbone of this report: Capterra (capterra.com/p/225601/WooCommerce/reviews/, multiple pages), Software Advice (softwareadvice.com/ecommerce/woocommerce-profile/reviews/), Trustpilot (uk.trustpilot.com/review/woocommerce.com, multiple pages), WordPress.org plugin review pages and individual review permalinks for WooCommerce core and WooPayments, the WooCommerce.com marketplace pages for Subscriptions/Bookings/Product Add-Ons (which show their own review counts/ratings/sample reviews), a Hacker News Algolia API search, and a handful of individual blog/agency articles.
- Capterra and Software Advice reviews are drawn from the same underlying review database (Gartner Digital Markets / GetApp network), so they are listed separately per the brief but should not be double-counted as fully independent sources when reading the frequency counts below.
- WooCommerce Subscriptions, Bookings, and Product Add-Ons are sold on woocommerce.com, not distributed through the free WordPress.org plugin directory, so there is no WordPress.org review venue for them (confirmed via 404s at `wordpress.org/support/plugin/woocommerce-subscriptions/reviews/` and `.../woocommerce-bookings/reviews/`). Their review data below comes from woocommerce.com's own product pages, which is a vendor-hosted but user-submitted review system.
- Given the above, exit stories (Section 2) are thinner than the 8+ target in raw depth - most of what I could verify are one-line "switched from WooCommerce because X" mentions embedded in reviews of other platforms, not full first-person migration narratives. I list every one I could verify rather than padding them out or inventing detail. Reddit and blocked search engines were where the fuller narratives appeared to live, and I could not get past their blocks.

---

## 1. Ranked pain themes

Confidence key (as specified): **High** = 3+ independent unprompted sources; **Medium** = 2 sources or a single segment; **Low** = single source. "Independent sources" counts distinct venues (G2, Capterra, Software Advice, TrustRadius, Trustpilot, WordPress.org-core, WordPress.org-WooPayments, woocommerce.com marketplace, agency blogs, Hacker News) - see the Capterra/Software Advice note above. Quotes are ordered most-recent-first within each theme where dates are available.

### Theme 1 - Real functionality is paywalled behind extensions; "free" is misleading

**Frequency:** 8 of 10 source venues (G2, Capterra, Software Advice, Trustpilot, WordPress.org core, WordPress.org WooPayments/marketplace pricing, Crazy Egg, LitExtension). **Intensity:** Medium-High. **Confidence:** High.

- Context: WordPress.org review of WooCommerce core, complaining that basic invoicing/tracking/subscriptions require paid add-ons. Sentiment: negative. Theme tag: pain. Profile: unspecified store type, "every shop that sells non-digital products."
  > "You would think that the number 1 solution for ecommerce just works out of the box. But no... EVERY shop that sell non-digital products needs tracking support. Virtually EVERY shop needs some sort of PDF invoice... subscriptions cost 250€/year."
  - https://wordpress.org/support/topic/a-mess-many-bugs-and-many-missing-basics/ (posted ~November 2025)

- Context: WordPress.org 1-star review of WooCommerce core, general workflow complaint. Sentiment: negative. Theme tag: pain. Profile: unspecified, posted September 2026.
  > "And too much of what seems like basic functionality requires paid third-party plugins. It's always like that, these examples are just from the last two hours of struggle."
  - https://wordpress.org/support/topic/everything-is-hard/ (September 2, 2026)

- Context: G2 "pros and cons" aggregation (Brave snippet only - G2 itself 403'd). Sentiment: negative. Theme tag: pain/language. Profile: CEO, Information Technology, 2+ years.
  > "advanced functions need paid plugins...appears free but really isn't"
  - https://www.g2.com/products/woocommerce/reviews?qs=pros-and-cons (attributed to reviewer "Adam A.")

- Context: Capterra 4-star review, cons field. Sentiment: mixed. Theme tag: pain. Profile: Computer Games, 1001–5000 employees, September 2025.
  > "Some of its extensions are way too expensive, and for more advanced customization you need some coding."
  - https://www.capterra.com/p/225601/WooCommerce/reviews/ (Matthieu N., September 10, 2025)

- Context: Software Advice review, cons field, small consumer-electronics shop. Sentiment: mixed. Theme tag: pain. Profile: Manager, Consumer Electronics, 1–2 years.
  > "The biggest dislike I have is that it runs on WordPress...some of the 3rd party functionalities are very expensive compared to what they offer."
  - https://www.softwareadvice.com/ecommerce/woocommerce-profile/reviews/ (Eero L., May 18, 2022)

- Context: Crazy Egg review article (agency/vendor source), cost figures for common add-ons. Sentiment: neutral/informational. Theme tag: pain (cost). Profile: n/a (editorial).
  > Extensions "up to $279/year"; drip-campaign marketing tools "$79/year"; Etsy/eBay integration "$199/year."
  - https://www.crazyegg.com/blog/woocommerce-review/ (January 6, 2026)

- Context: WooCommerce.com's own marketplace review data for its Subscriptions extension. Sentiment: mixed. Theme tag: pain (cost) / outcome. Profile: US merchant, 4-star reviewer.
  > "Great product" but "pricing has gotten WAY too expensive."
  - https://woocommerce.com/products/woocommerce-subscriptions/ (BioTropicLabs.com, US, August 22, 2026)

### Theme 2 - Updates break the live site; no confidence in upgrading

**Frequency:** 7 of 10 venues (WordPress.org core, Capterra, Software Advice, Trustpilot, TrustRadius snippet, G2 snippet, Hacker News). **Intensity:** High. **Confidence:** High.

- Context: WordPress.org 2-star review of WooCommerce core. Sentiment: strongly negative. Theme tag: pain/trigger. Profile: unspecified, posted 3 weeks before capture (mid-September 2026).
  > "Every release is a new surprise on how it breaks my website. WooCommerce update 11.1.0 – Endless scroll of fixes – because of the endless bugs. They have NO concept of Quality! Woo was once pretty good. Now, it is endless bugs and abysmal quality."
  - https://wordpress.org/support/topic/every-release-is-a-new-surprise-on-how-it-breaks-my-website/ (sybydesign, ~September 14, 2026)

- Context: Capterra 4-star review, cons field. Sentiment: mixed/negative. Theme tag: pain. Profile: Proprietor, Consumer Goods, 6–12 months, July 2026.
  > "It's super easy to break. If you click 'update' on the wrong day, your whole website might just explode into error codes."
  - https://www.capterra.com/p/225601/WooCommerce/reviews/ (Joseph S., July 14, 2026)

- Context: Trustpilot 1-star review. Sentiment: strongly negative. Theme tag: pain. Profile: unspecified, February 2026.
  > "They update their plugins so much that the entire website crashes."
  - https://uk.trustpilot.com/review/woocommerce.com (Saiful Islam, February 12, 2026)

- Context: Trustpilot 1-star review. Sentiment: strongly negative. Theme tag: pain/outcome. Profile: unspecified, December 2025.
  > "Constantly breaking down without any logical reason and the costs are endlessly higher."
  - https://uk.trustpilot.com/review/woocommerce.com (Norahlux, December 22, 2025)

- Context: WordPress.org 1-star review recounting a specific holiday outage. Sentiment: strongly negative. Theme tag: pain/trigger. Profile: unspecified, ~August 2022 (older, retained for detail/specificity).
  > "Tired of plugin conflicts, upgrades that aren't tested... Woo likes to blame themes and other plugins instead of taking responsibility... I wasted 9 hours trying to fix a broken cart" during a busy holiday period.
  - https://wordpress.org/support/topic/woo-sucks-crashed-on-busy-holiday/ (headly, August 2022)

- Context: Software Advice review, cons field. Sentiment: mixed. Theme tag: pain. Profile: Building Materials, 11–50 employees, July 2025.
  > "Frequent plugin compatibility errors occur with no changes, analytic bugs, some methods of creating custom products can be longwinded."
  - https://www.softwareadvice.com/ecommerce/woocommerce-profile/reviews/ (Fergus C., July 2025)

### Theme 3 - Support is slow, AI-only, or actively makes things worse

**Frequency:** 6 of 10 venues (Trustpilot, WordPress.org core, WordPress.org WooPayments, Capterra, TrustRadius snippet [WooCommerce vs. renewal likelihood], G2 pros-cons snippet). **Intensity:** High. **Confidence:** High.

- Context: Trustpilot 1-star review, unresolved payments issue. Sentiment: strongly negative. Theme tag: pain. Profile: unspecified, August 2026.
  > "I've now been dealing with this support thread for two days over a plugin issue that's preventing payments from going through on two of my websites."
  - https://uk.trustpilot.com/review/woocommerce.com (and ro, August 26, 2026)

- Context: Trustpilot 1-star review, new-site launch blocked. Sentiment: strongly negative. Theme tag: pain/trigger. Profile: unspecified, June 2026.
  > "My new website has been on hold for going on 8 days while I wait for someone to respond to my support ticket."
  - https://uk.trustpilot.com/review/woocommerce.com (Tonia Brauer, June 27, 2026)

- Context: WordPress.org 1-star review, describing a 5-week AI-support loop. Sentiment: strongly negative. Theme tag: pain. Profile: unspecified, September 2026.
  > "The worst experience I have ever had with any WordPress related support. 5 weeks of misdirection!" - criticizing reliance on AI support without human oversight or up-to-date version awareness.
  - https://wordpress.org/support/topic/every-release-is-a-new-surprise-on-how-it-breaks-my-website/ (sybydesign, September 2026)

- Context: WordPress.org review, block editor removed a feature. Sentiment: negative. Theme tag: pain/language. Profile: unspecified, October 2025.
  > "With every woo update there's new hassle and annoyance. Support doesn't help but only tries to sell high-priced consultants."
  - https://wordpress.org/support/topic/annoying-without-support-use-something-else/ (jeremywendell, ~October 2025)

- Context: WordPress.org thread, support took an unauthorized destructive action on a linked third-party account. Sentiment: strongly negative. Theme tag: pain (trust/support). Profile: unspecified, ~January 2026.
  > "During a live support chat, an agent took an account-level action on an external service without first confirming intent or consequences" - support later admitted "You explicitly asked for the account not to be deleted, and it was deleted anyway."
  - https://wordpress.org/support/topic/support-deleted-my-google-merchant-center-account-without-consent/ (vkononov, ~January 2026)

- Context: Capterra 1-star review, cons field is a blanket statement. Sentiment: strongly negative. Theme tag: pain. Profile: E-Learning, 2–10 employees, January 2025.
  > "Everything. Literally, everything. The fact that I can't get ANY support is most frustrating."
  - https://www.capterra.com/p/225601/WooCommerce/reviews/ (April C., January 2025)

- Context: WordPress.org 2-star review comparing current support to older live-chat era. Sentiment: negative. Theme tag: pain/outcome. Profile: unspecified, ~November 2022.
  > "I now no longer have access to live chats (which used to fix 100% of the problems quickly)"... "people don't rate a program when things are working well. They rate it when you need help – and you either get it or you don't."
  - https://wordpress.org/support/topic/support-has-really-gone-down-hill/ (jfguerin, ~November 2022)

### Theme 4 - WooPayments: fees, held funds, and account suspensions

**Frequency:** 3 of 10 venues (WordPress.org WooPayments reviews, Trustpilot, WordPress.org core forum re: WooPayments prompts). **Intensity:** High. **Confidence:** High (concentrated but very consistent within the payments-specific venue: WooPayments' own WordPress.org listing shows 61 of 173 reviews - about 35% - are 1-star).

- Context: WordPress.org 1-star WooPayments review, chargeback/insurance complaint. Sentiment: strongly negative. Theme tag: pain. Profile: unspecified, ~May 2025.
  > "Avoid WooPayments like the plague. They offer: ZERO Phone Support... Banks do NOT like WooPayments as a payment processor and will typically reject high-value orders because WooPayments is a high-risk payment processor to begin with... They offer ZERO insurance or preventive maintenance programs to counteract Chargeback Fraud."
  - https://wordpress.org/support/topic/do-not-use-woopayments/ (lbworks, ~May 2025)

- Context: WordPress.org 1-star WooPayments review, international fees. Sentiment: negative. Theme tag: pain (cost). Profile: unspecified, ~March 2024.
  > "Anyone wanting to ship internationally expect to pay over 5% of revenue just for a single transaction. Fee (5.5% + $0.34). The payout takes a week."
  - https://wordpress.org/support/topic/fees-are-extortionate-and-payouts-are-very-slow/ (williamdavies33, ~March 2024)

- Context: Trustpilot 1-star review, matching fee complaint independently. Sentiment: negative. Theme tag: pain (cost). Profile: unspecified, May 2025.
  > "They charge over 5.5% + £0.25 for international payments. Absolutely rip off."
  - https://uk.trustpilot.com/review/woocommerce.com (James, May 20, 2025)

- Context: Trustpilot 1-star review, funds withheld. Sentiment: strongly negative. Theme tag: pain/trigger. Profile: unspecified, December 2024.
  > "We will decide when to release the money. We don't disclose either the process or the reason" - $12,000 withheld indefinitely without explanation.
  - https://uk.trustpilot.com/review/woocommerce.com (Davide C., December 20, 2024)

- Context: Trustpilot 1-star review, payout holds. Sentiment: negative. Theme tag: pain. Profile: unspecified, May 2025.
  > Payments held 7–14 days initially, then "all payments retained pending account history" - deemed unreasonable for ongoing operations.
  - https://uk.trustpilot.com/review/woocommerce.com (Ian Newnham, May 13, 2025)

### Theme 5 - Performance/speed degrades as catalog size and plugin count grow

**Frequency:** 6 of 10 venues (WordPress.org core, Capterra, Software Advice, G2 snippet, agency blog [WP Minute], Crazy Egg). **Intensity:** Medium-High. **Confidence:** High.

- Context: WordPress.org support thread responding to core team, backend performance. Sentiment: negative. Theme tag: pain. Profile: unspecified, ~December 2023.
  > "WooCommerce is very slow and has a negative impact on the performance and speed of the site" compared to Shopify and Magento.
  - https://wordpress.org/support/topic/the-good-the-bad-and-the-ugly-6/ (December 2023)

- Context: Capterra 3-star review, cons field. Sentiment: negative. Theme tag: pain. Profile: CEO, Retail, September 2022 (older, kept for specificity).
  > "Steep learning curve, inventory management is non-existent especially considering options like on Shopify... It's heavy and slow requires a lot of server resources."
  - https://www.capterra.com/p/225601/WooCommerce/reviews/?page=18 (Cynthia C., September 4, 2022)

- Context: Capterra 4-star review, cons field. Sentiment: mixed. Theme tag: pain. Profile: CEO, Internet, June 2023.
  > "It's a Wordpress plugin slowing down the website. If you have more than a few products you need a hosting with good performances and a good cache plugin to avoid poor user experience."
  - https://www.capterra.com/p/225601/WooCommerce/reviews/?page=18 (Valerio G., June 7, 2023)

- Context: Software Advice review, cons field. Sentiment: negative. Theme tag: pain. Profile: CTO, Marketing & Advertising, 2+ years.
  > "site speed issues...Integration with 3rd party shipping platforms can be difficult"
  - https://www.softwareadvice.com/ecommerce/woocommerce-profile/reviews/ (Austin M.)

- Context: Agency blog (developer/agency, own client-loss account, not an owner). Sentiment: negative. Theme tag: pain/language. Profile: agency, n/a. Labeled agency evidence.
  > "WooCommerce it's quite delicate from a coding, compatibility and uptime points of view."
  - https://thewpminute.com/lessons-learned-after-37-drop-in-woocommerce-dev-business/ (April 25, 2024)

### Theme 6 - Not beginner-friendly; effectively requires developer skill

**Frequency:** 5 of 10 venues (Capterra, Software Advice, G2 snippet, TrustRadius snippet, agency blog [LitExtension]). **Intensity:** Medium. **Confidence:** High.

- Context: Capterra 3-star review, cons field. Sentiment: mixed/negative. Theme tag: pain. Profile: Lead Developer, Marketing, 11–50 employees, August 2025.
  > "WooCommerce can get complicated really fast. From variable product types, to subscriptions, every layer of customization beyond the basic shop settings will lead you to having to purchase a WooCommerce add-on."
  - https://www.capterra.com/p/225601/WooCommerce/reviews/ (David V., August 2025)

- Context: Capterra 3-star review, cons field. Sentiment: negative. Theme tag: pain. Profile: Marketing, 2–10 employees, August 2025.
  > "It's not a beginners system. You need to understand how to set it up correctly as there is room to a lot of confusion, specially when it comes to shipping, product variables, payment methods."
  - https://www.capterra.com/p/225601/WooCommerce/reviews/ (Alexandra L., August 2025)

- Context: TrustRadius review snippet (Brave search only). Sentiment: mixed. Theme tag: pain/alternative. Profile: unspecified, ~2022.
  > "While Woo itself is free, it's for coders who really know what they're doing and want complete flexibility" - reviewer recommends Shopify for beginners instead.
  - https://www.trustradius.com/reviews/woocommerce-... (reviewer "Sean," 2-star, ~October 2022; page itself 403'd on direct fetch, content from Brave snippet)

### Theme 7 - Missing features that reviewers expect to be built in

**Frequency:** 4 of 10 venues (WordPress.org core, Capterra, Business Bloomer, Software Advice). **Intensity:** Medium. **Confidence:** Medium-High.

- Context: WordPress.org 2-star review. Sentiment: negative. Theme tag: pain. Profile: unspecified, ~November 2025.
  > Missing "tracking numbers, invoices, VAT, subscriptions, ticket system" out of the box; "Woocommerce + paypal you would think it just work? Oh no it doesn't. It's just such a PITA."
  - https://wordpress.org/support/topic/a-mess-many-bugs-and-many-missing-basics/ (paddletroke, ~November 2025)

- Context: WordPress.org support-forum complaint. Sentiment: negative. Theme tag: pain. Profile: unspecified, February 2026.
  > "Love the flexibility, but man, how come in 2026 we still cant see rudimentary analytics like add to cart, cart abandonment or conversion rate metrics that is available on any other platform without relying on paid third party or setting up complicated GA4 stuff."
  - https://wordpress.org/support/topic/slow-development-dated-features-far-behind-shopify/ (regedy1, February 23, 2026)

- Context: Capterra 5-star review, cons field. Sentiment: mixed. Theme tag: pain. Profile: Computer & Network Security, self-employed, February 2025.
  > "Woocommerce lacks a basic native feature of inventory logging. While there are plugins available but this should be included."
  - https://www.capterra.com/p/225601/WooCommerce/reviews/ (Vikas V., February 2025)

- Context: Agency article (Business Bloomer), aggregating community-reported gaps. Sentiment: negative. Theme tag: pain. Profile: agency/developer commenters. Labeled agency evidence.
  > "order management process...often requiring multiple plugins that have terrible UX on the backend to manage things like invoicing, tracking shipping etc." and "I have backups not fully working, rewards points that hammer the server, a theme that will not write the correct css."
  - https://www.businessbloomer.com/woocommerce-crucial-issues-to-fix/ (June 2022, still circulated 2023–2024)

### Theme 8 - Questionable fit above a certain size ("outgrown" signal)

**Frequency:** 3 of 10 venues (Capterra, WordPress.org, agency commentary). **Intensity:** Medium. **Confidence:** Medium (fewer independent venues, but consistent wording).

- Context: Capterra 5-star review (Woo-favorable overall), cons field flags an enterprise ceiling. Sentiment: mixed. Theme tag: pain. Profile: CEO, Computer Software, 2+ years, July 2019 (older; retained because the specific claim recurs).
  > "Not suitable for mid-market/enterprise due to security and performance concerns"
  - https://www.capterra.com/p/225601/WooCommerce/reviews/?page=30 (Arun G., July 29, 2019)

- Context: Capterra 3-star review, cons field. Sentiment: negative. Theme tag: pain/trigger. Profile: Owner, Retail, July 2020.
  > "Not recommended long-term; headaches with updates, coding; unfit for full e-commerce" at scale.
  - https://www.capterra.com/p/225601/WooCommerce/reviews/?page=30 (Edwin W., July 15, 2020)

- Context: WordPress.org 2-star review title (body not reachable beyond title/metadata). Sentiment: negative. Theme tag: pain/language. Profile: unspecified.
  > Review titled "Good for small shops, a nightmare for real ecommerce"
  - https://wordpress.org/support/plugin/woocommerce/reviews/?filter=2 (reviewer "CBD-Öl," ~2020/2021; full body text not accessible, title only)

### Theme 9 - Paid-extension quality is inconsistent even after paying (Subscriptions, Bookings, Product Add-Ons)

**Frequency:** woocommerce.com's own marketplace data across 3 extensions. **Intensity:** Medium-High for Bookings specifically. **Confidence:** Medium (single venue, but it is the vendor's own review data, working against self-interest).

- WooCommerce Subscriptions: 3.9/5 average across 140 reviews; 14% are 1-star. Context: 3-star review. Sentiment: mixed. Theme tag: pain. Profile: Argentina-based merchant, May 2026.
  > Reported configuration difficulties "not too reliable" in their region.
  - https://woocommerce.com/products/woocommerce-subscriptions/ (danieldotcom68, May 28, 2026)

- WooCommerce Bookings & Reservations: 2.7/5 average across 60 reviews; 1-star reviews alone are 38% (1-star + 2-star = 50%). Context: mixed review. Sentiment: negative. Theme tag: pain/outcome. Profile: property/rental manager.
  > The plugin "only synchronizes with a single calendar," creating double-booking risk for anyone also using something like Booking.com; "many clients eventually shut down their sites because they experience double bookings."
  - https://woocommerce.com/products/woocommerce-bookings/ (undated sample review shown on product page, 2025/2026)

- Product Add-Ons for WooCommerce: 3.4/5 average across 49 reviews; 18% are 1-star. Context: negative review, security concern. Sentiment: negative. Theme tag: pain. Profile: UK-based merchant, November 2025.
  > File-upload fields trigger security warnings and the plugin gives "no option" to "limit the file type / extension" or "limit the file size."
  - https://woocommerce.com/products/product-add-ons/ (UK reviewer, November 2025; an Austrian reviewer separately flagged the identical file-type gap, October 2025)

### Theme 10 - Default settings share data/install extras without clear opt-in

**Frequency:** 1 of 10 venues (WordPress.org). **Intensity:** Medium. **Confidence:** Low (single thread, but detailed and substantive, and involves a named WooCommerce support-team admission).

- Context: WordPress.org thread alleging the setup wizard defaults to data sharing. Sentiment: negative. Theme tag: pain/trigger. Profile: unspecified, ~October 2024.
  > "During the onboarding wizard people often keep the default/recommended settings, but then they automatically 'agree' to tracking and sharing data with third parties"... "users who choose the default options will get tracked and get the plugins installed."
  - https://wordpress.org/support/topic/violates-the-gdpr-and-installs-extra-plugins-without-consent/ (Jos Klever, ~October 2024)

---

## 2. Exit stories

Caveat up front: I could not access Reddit at all (hard block on the domain) and could not get past search-engine blocks/rate-limits for most of the session, which is almost certainly where the richest first-person "why we left" narratives live. What follows is every verifiable exit signal I could find on pages that actually loaded. Most are short, single-line mentions embedded inside a review of a *different* platform (i.e., a WooCommerce-to-X switcher reviewing X), not full narratives - I have not padded them with invented detail. Fields marked "not stated" genuinely were not in the source.

| # | Store type / size signals | Where they went | Stated trigger (verbatim where possible) | What they said they missed afterward | Unmet need ("I wish it could...") | Source URL | Date |
|---|---|---|---|---|---|---|---|
| 1 | Unspecified small business, self-described "CMO" | Shopify | "Shopify is way better in every way" (no specifics given) | Not stated | Not stated | https://www.capterra.com/p/83891/Shopify/reviews/ | Aug 29, 2026 |
| 2 | Food Production company, 1–2 yrs on prior platform | Shopify | "The issue was it was more limited in what we could do compared to Shopify" | "Wordpress was good and user friendly" - this is the one case where a "miss" was stated | Reads as wanting WordPress's ease of use combined with Shopify's functionality ceiling | https://www.capterra.com/p/83891/Shopify/reviews/ | Feb 13, 2026 |
| 3 | Arts & Crafts business, CEO/Founder, 1–2 yrs | Shopify | "Wanted to try something more professional and easy-to-use platform" | Not stated | Not stated | https://www.capterra.com/p/83891/Shopify/reviews/ | Apr 16, 2026 |
| 4 | Wholesale, IT-Admin | Shopware | Considered WooCommerce among alternatives when choosing Shopware; reason given for choosing Shopware was prior familiarity ("wir haben bereits den Vorgänger benutzt") rather than a stated WooCommerce complaint | Not stated | Not stated | https://www.capterra.com/p/145605/Shopware/reviews/ | Jul 4, 2025 |
| 5 | IT Services, CTO - previously ran WooCommerce, PrestaShop, and Smartstore | Shopware | "Shopware was more easy to use for the clients, and was ready for European market" | Not stated | Reads as wanting EU-market readiness (tax/VAT/localization) without extra configuration | https://www.capterra.com/p/145605/Shopware/reviews/ | Nov 13, 2022 |
| 6 | Food & Beverage, "Partner" | Shopify | WordPress "is responsible for a high percentage of hacked websites on the internet. You also need WooCommerce to set up effectively, and all that needs a bit of specialized knowledge." | Not stated | Wanted security to not depend on the merchant's own hardening/specialist knowledge | https://www.capterra.com/p/83891/Shopify/reviews/ | Aug 15, 2025 |
| 7 | Health/Wellness/Fitness, Owner | Shopify | "Designer recommended the switch - glad I did" (no first-hand WooCommerce complaint stated; decision was delegated to their designer) | Not stated | Not stated | https://www.capterra.com/p/83891/Shopify/reviews/ | Jul 20, 2025 |
| 8 | Wholesale, Managing Partner - mid-migration, 3-star review of the *destination* | Shopify (in progress) | Pain was in the migration itself, not a single trigger: "Time consuming product setup process. There was no option to quickly change from a previous sales platform to Shopify." | Not stated | Wanted a direct, low-effort WooCommerce-to-Shopify data path | https://www.capterra.com/p/83891/Shopify/reviews/ | Feb 9, 2026 |
| 9 | Agency's largest client (store type not disclosed by the agency) | Shopware 6 | Reported second-hand by the agency owner, not the merchant: general platform stability/coding/uptime concerns per the agency's framing | Not stated (agency did not report this) | Not stated | https://thewpminute.com/lessons-learned-after-37-drop-in-woocommerce-dev-business/ | Apr 25, 2024 |
| 10 | Unspecified, "longtime developer" - **not a confirmed completed migration**, listed as exit-intent only | Actively evaluating Shopify and MedusaJS at time of posting | Unresolved Australian tax-on-shipping calculation bug; a WooPayments integration failure; long-standing unaddressed GitHub issues; "dealing with the constant struggle to scale and address basic issues has become overwhelmingly stressful" | N/A - migration not confirmed complete | Wanted core tax/payments bugs fixed without needing to escalate publicly | https://wordpress.org/support/topic/longtime-developer-im-out/ | ~Sep 2024 |
| 11 | Unspecified - **not a confirmed completed migration**, a one-line recommendation inside a 1-star review | Recommends SureCart as the alternative | "Outdated, buggy, and bloated... very expensive to add plugins and extensions... Avoid if you can." | N/A | Wanted core checkout functionality without stacking paid plugins | https://wordpress.org/support/topic/just-awful-avoid-if-you-can/ | ~May 2025 |

Threads that were promising by title/snippet but could not be verified because the page would not load (listed per the brief's instruction to say so rather than guess):
- Reddit r/shopify, "Should I migrate from WooCommerce to Shopify or stick with WooCommerce?" - search snippet indicated a ~$25k/month-revenue store weighing the decision, but the thread itself could not be fetched (Reddit domain blocked). https://www.reddit.com/r/shopify/comments/1nbumee/should_i_migrate_from_woocommerce_to_shopify_or/
- Reddit r/Wordpress, "WooCommerce SUCKS...change my mind" - could not be fetched. https://www.reddit.com/r/Wordpress/comments/snuyes/woocommerce_suckschange_my_mind/
- Reddit r/Wordpress, "Should I abandon WooCommerce?" - could not be fetched. https://www.reddit.com/r/Wordpress/comments/15meobt/should_i_abandon_woocommerce/
- Reddit r/Wordpress, "Woocommerce is a waste of time .... i guess?" - could not be fetched. https://www.reddit.com/r/Wordpress/comments/1n55daa/woocommerce_is_a_waste_of_time_i_guess/
- Reddit r/ProWordPress, "I feel WooCommerce is offering underwhelming performance especially for large shops" - could not be fetched. https://www.reddit.com/r/ProWordPress/comments/1i6fdbv/i_feel_woocommerce_is_offering_underwhelming/

---

## 3. Hidden cost stack (only figures people actually quoted, each cited)

**Paid extensions**
- WooCommerce Subscriptions (official): £209 for a 1-year plan; £418 for 2 years (£334.40 with the site's own 20% multi-year discount applied). - https://woocommerce.com/products/woocommerce-subscriptions/ (accessed Sep 2026)
- WooCommerce Bookings & Reservations (official): £186/year; £297.60 for 2 years (20% discount). - https://woocommerce.com/products/woocommerce-bookings/ (accessed Sep 2026)
- Product Add-Ons for WooCommerce (official): £59/year; £118 (£94.40 with discount) for 2 years. - https://woocommerce.com/products/product-add-ons/ (accessed Sep 2026)
- A reviewer separately quoted a subscriptions add-on at "250€/year" in their own regional pricing when complaining that essential features aren't in core. - https://wordpress.org/support/topic/a-mess-many-bugs-and-many-missing-basics/ (~November 2025)
- Crazy Egg (agency/vendor editorial, not a store owner) cites extensions running "up to $279/year," a drip-campaign email tool at "$79/year," and an Etsy/eBay marketplace integration at "$199/year." Labeled agency evidence. - https://www.crazyegg.com/blog/woocommerce-review/ (Jan 6, 2026)

**Payment processing (WooPayments)**
- "Fee (5.5% + $0.34)" on international transactions, with "the payout takes a week." - https://wordpress.org/support/topic/fees-are-extortionate-and-payouts-are-very-slow/ (~March 2024)
- Independently, a Trustpilot reviewer quoted the same fee structure in different currency: "over 5.5% + £0.25 for international payments." - https://uk.trustpilot.com/review/woocommerce.com (James, May 20, 2025)
- A Trustpilot reviewer reported $12,000 held by WooPayments with no disclosed process or reason. - https://uk.trustpilot.com/review/woocommerce.com (Davide C., December 20, 2024)

**Cost of leaving (migration tools/services)** - relevant as a hidden cost people encounter specifically when trying to exit
- Matrixify (third-party Shopify import app commonly used for WooCommerce-to-Shopify moves): "matrixify allow only 10 products for free," implying a paid tier is required beyond that. - https://community.shopify.com/t/want-to-migrate-from-woocommerce-to-shopify/258790 (Oct 12, 2023)
- Bloggle (migration-tool vendor, labeled vendor evidence) quotes its own market's going rate for migration help: CSV/manual "free but time-intensive"; its own Matrixify-based app "$20-$50"; hiring an expert for a managed migration "$300-$1,000." - https://bloggle.app/blog/woocommerce-to-shopify-migration (accessed 2026)

**Hosting and developer retainers**
- No store owner in any source that loaded quoted a specific dollar figure for hosting or a developer retainer tied to WooCommerce. Several reviews *describe* the problem qualitatively (e.g., "tries to sell high-priced consultants," https://wordpress.org/support/topic/annoying-without-support-use-something-else/ ; "you need a hosting with good performances," https://www.capterra.com/p/225601/WooCommerce/reviews/?page=18) but none of these state a number, so none is reported here as a figure. This is a genuine gap in what I could verify, not an indication the cost doesn't exist.

**Security**
- No owner-quoted dollar figure for security costs (e.g., paid firewall/malware-cleanup services) was found on any page that loaded. Reviews mention being hacked (e.g., Capterra: "No matter how high our security is, we have still been hacked twice," https://www.capterra.com/p/225601/WooCommerce/reviews/?page=6, Joanna P., October 7, 2022) but do not quote a cost. Gap noted rather than filled with an estimate.

---

## 4. Evidence strength notes

**From store owners directly (primary, higher weight):**
- Capterra, Software Advice, Trustpilot, WordPress.org core/WooPayments reviews, and the woocommerce.com marketplace reviews for Subscriptions/Bookings/Product Add-Ons are all first-person, self-reported owner/operator accounts (a mix of freelancers, small businesses, and a few larger companies up to 1,001–5,000 employees). This is the majority of the quotes in Section 1 and all of the exit-story rows except #9.
- These sources skew toward people motivated enough to write a review at all, which structurally over-represents strong opinions in both directions (see Sample bias, below).

**From agencies/vendors (secondary, lower weight, explicitly labeled inline above as "agency evidence" or "vendor evidence"):**
- Business Bloomer ("10 Crucial WooCommerce Issues," https://www.businessbloomer.com/woocommerce-crucial-issues-to-fix/) - a WooCommerce specialist agency's own critique of the ecosystem's roadmap, staffing, and documentation. This is inside-industry criticism of WooCommerce's *strategy*, not a customer complaint about running a store, and should be weighted accordingly (it reads as credible about industry direction, weak as evidence of merchant pain).
- The WP Minute ("Lessons Learned After 37% Drop in WooCommerce Dev Business," https://thewpminute.com/lessons-learned-after-37-drop-in-woocommerce-dev-business/) - a WooCommerce development agency explaining its own revenue decline and, in passing, that it lost its biggest client to Shopware 6. This is an agency's account of losing business, not the client's own stated reasoning, and is the weakest-sourced item in the exit-stories table (row #9).
- Crazy Egg and LitExtension content is vendor/affiliate editorial (Crazy Egg sells marketing tools and likely earns affiliate revenue from platforms it reviews; LitExtension sells migration services and has a direct commercial interest in people believing migration is easy and worthwhile). Their cost figures are reported because they are specific and checkable, but their framing (e.g., "the bad" sections) should be read as marketing-adjacent, not neutral research.
- Barn2 (plugin vendor, https://barn2.com/blog/why-woocommerce/) surveyed its own community on why they *chose* WooCommerce - useful as a counterweight (flexibility, data ownership, and low cost are the top reasons cited), but it is vendor-commissioned and contains zero discussion of downsides or outgrowing the platform, which is itself notable as a gap.

**Themes that are owner-sourced only (no agency corroboration found in accessible pages):** WooPayments fees/holds/suspensions (Theme 4), the GDPR/consent thread (Theme 10), and most of the update-fragility complaints (Theme 2).

**Themes with agency corroboration:** performance/scaling at size (Theme 5, 8) and the "missing built-in features" theme (Theme 7) both appear in both owner reviews and Business Bloomer's independent agency critique, which is why those get a Medium-High/High confidence rating despite fewer raw venues than Theme 1–3.

## 5. Sample bias note

- Review-site respondents (G2, Capterra, Software Advice, TrustRadius, Trustpilot, WordPress.org) are self-selected: people write reviews when something went unusually well or unusually badly, not to report an average, uneventful experience. This likely inflates both the 5-star "nothing to dislike" reviews and the 1-star "everything is broken" reviews relative to the true distribution of day-to-day experience.
- WordPress.org's review filter specifically surfaces reviews by star rating, and its default/most-visible reviews (per the plugin's total count, ~957+ reviews per one Software Advice comparison snippet) skew toward people who hit a specific bug or billing dispute worth publicly documenting - i.e., the 1- and 2-star pool is disproportionately incident-driven rather than describing chronic day-to-day dissatisfaction.
- WooPayments' own review base (173 reviews, 61 of them 1-star) is a smaller, self-selected sample specifically of people motivated to comment on a payments product, where financial harm (held funds, suspensions) creates unusually high motivation to leave a review - this likely explains why WooPayments' negative-review share is so much higher than WooCommerce core's.
- Agency/vendor posts (Business Bloomer, Crazy Egg, LitExtension, Bloggle, Barn2) have a direct or indirect commercial interest: Business Bloomer sells WooCommerce consulting and training (so its critique of WooCommerce's strategy is credible as insider concern but is also implicitly a pitch for why merchants still need expert help); Crazy Egg, LitExtension and Bloggle either sell or are affiliated with switching/migration tools, so content strongly emphasizing WooCommerce's downsides or migration ease should be read as partially sales-motivated.
- I was not able to access Reddit, G2, or TrustRadius directly, and general web search was rate-limited/blocked for most of the session. This means the pain themes above are almost certainly missing whatever is distinctive about Reddit-style unfiltered peer conversation (which tends to be more candid and less review-performative than a star-rating site), and the exit-stories table is thinner than it would be with full access to those sources. Treat the absence of a theme here as "not verified," not as "doesn't exist."

---

*Research conducted September 25, 2026. All quotes are verbatim from the cited URL and date shown; all figures are as quoted in the cited source, not independently verified against current WooCommerce.com pricing.*
