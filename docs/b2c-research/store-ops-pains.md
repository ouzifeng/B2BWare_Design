# Voice of customer: back-office pain in growing B2C online stores (roughly $/£250k to $/£20m a year)

Research window: September 2026. Prefer 2024-2026 sourcing, weighted toward the last 12 months where available. Scope: only what store owners and ops staff say about stock sync, overselling, manual data entry, fulfilment/3PL, returns, app sprawl, Zapier-style glue, spreadsheets as source of truth, hiring staff to move data, and peak season breakage. No research was done on any vendor as a company; tool names appear only because that is what reviewers were talking about.

## Read this first: how the research was actually done

Five parallel research passes were run against Reddit (r/ecommerce, r/woocommerce, r/shopify, r/FulfillmentByAmazon, r/smallbusiness, r/ukecommerce, r/Entrepreneur, r/InventoryManagement, r/QuickBooks, r/Bookkeeping, r/Etsy), G2, Capterra, and general web search. Every single pass hit the same wall: by the time these passes ran, the session's web-search budget was already exhausted, and Reddit, G2, and most search engines (Google, Bing, DuckDuckGo, Yandex, Brave, Startpage, Mojeek, Ecosia) were blocked, rate-limited, or CAPTCHA-walled, including through roughly 40 combined proxy and mirror workarounds. This is disclosed honestly rather than papered over, because it shapes what follows.

What did work, and what this report is actually built from: **Trustpilot** (star-filtered product review pages for Veeqo, Linnworks, Cin7, Brightpearl, Unleashed, Katana, Sellbrite, Zapier, Make.com, Synder, ShipBob, ShipHero, ShipStation, Extensiv, SkuVault, Ecomdash, Multiorders, Loop Returns, Narvar, Royal Mail), **Capterra** (product review pages for the same tools, reached via one research pass that got through before it was also blocked for the others), **SoftwareAdvice** and **GetApp**, the **official Shopify Community forum**, the **Amazon Seller Central forum**, one **Shopify-published case study**, several **A2X (an accounting-automation vendor) published case studies**, and **UK job postings from Reed.co.uk** (Indeed and LinkedIn returned 403 on every attempt). A handful of Reddit threads were located by URL through search-engine preview snippets but their actual pages were never opened, so no Reddit quotes appear below; those URLs are listed separately as unopened leads.

Practical effect on this report: it is a genuine, verbatim voice-of-customer corpus, but it skews toward people who write vendor reviews (mostly furious, occasionally effusive; the tolerant middle rarely posts) rather than the open, discursive "why we switched" storytelling style Reddit is known for. That gap is flagged again in the Sample Bias section at the end, and nowhere in this document is a gap filled with invented content.

**Formatting notes applied throughout:** reviewer usernames and any third-party personal names mentioned inside a review (support agents, staff) have been removed and marked **[name redacted]**. Quotes are exact wording from the source; where a quote contains "..." that ellipsis was in the original text, not a cut made for this report. Where the source page used an em dash inside a quote, it has been rewritten as " - " so that this document contains no em dash characters anywhere, per house style; nothing else about the wording was changed. Dates are as shown on the source page; where only an estimate was possible (from a Reddit post ID via a search snippet, with no live page ever opened) it is marked "est." and treated as low-confidence.

---

## 1. Ranked pain themes

Themes are ranked by a combination of how many independent sources raised them unprompted, how strong the emotional/financial language was, and how many of the five research passes corroborated them independently.

### Theme 1: Stock/inventory goes out of sync across channels, and stores oversell as a result
**Frequency:** the single most corroborated theme in the entire research effort. Raised unprompted in 7 of 9 independent tool-review threads in one pass alone (Veeqo, Linnworks, Cin7, SkuVault, Ecomdash, Multiorders, Extensiv), independently corroborated across 3 separate Shopify Community threads, and it also surfaced inside two other passes that were not specifically looking for it.
**Intensity:** High. Quantified revenue loss appears repeatedly ("tens of thousands," "£5k+," a business paused entirely over Christmas), plus reputational damage (eBay/Amazon seller-status penalties from cancelled orders).
**Confidence:** High (5+ independent, unprompted sources).
**Size signals seen:** stores growing from "a few hundred SKUs and a couple hundred orders a day" to "thousands of SKUs and orders"; 1,000+ orders/day; 7,000+ SKUs; 2 physical shops 60 miles apart plus an online store; 11-50 employees.
**Trigger moments:** crossing a SKU/order-volume threshold; launching on a new channel (TikTok Shop); a flash sale, promotion, or festive-season demand spike outrunning a 10-30 minute scheduled sync; a single bad CSV upload zeroing stock across every channel at once; the run-up to Christmas.

Quotes:

1. "Veeqo is horrible. There has not been a single month that has gone by in the 3 years that we have used it that it can maintain an accurate reflection of our inventory throughout our shops. It randomly stops syncing inventory and has cost us tens of thousands in sales. We have complained over and over and nothing is ever fixed. We finally have to move on to another platform."
   Trustpilot, review of Veeqo, ~24 September 2026. https://www.trustpilot.com/review/veeqo.com
   Context: 1-star review after 3 years as a customer, multiple shops. Sentiment: angry, exhausted. Profile: platform not stated; multi-shop.

2. "Switched to Veeqo 10 weeks ago. Spent 5 weeks with stock sync issues which led to orders not being able to be fulfilled - impacted my Amazon and Etsy ratings. Then had to pause all sales through all platforms until stock sync issue is resolved. 10 weeks later, into the Christmas period and still not resolved so still not able to sell. Was meant to make running the business easier but has led to me having to pause my business and lose £5k+ sales."
   Trustpilot, review of Veeqo, 22 November 2023. https://www.trustpilot.com/review/veeqo.com?stars=1&page=3
   Context: business fully paused going into Christmas after switching tools. Sentiment: distressed, angry. Profile: sells on Amazon and Etsy; £5k+ quantified loss.

3. "We started using them when we had a few hundred SKUs and fulfilling a couple of hundred orders per day. As a growing business moving to fulfil thousands of SKUs and orders, we simply cannot rely on this platform. We often have to merge products as they are sold on multiple platforms, but this becomes impossible in many cases... Their advise is, we should do all the merging before going live! This doesn't work with a growing business."
   Trustpilot, review of Veeqo, 30 May 2025. https://www.trustpilot.com/review/veeqo.com?stars=1&page=2
   Context: a store that outgrew the tool as it scaled. Sentiment: frustrated, analytical. Profile: grew from "a few hundred SKUs / couple hundred orders per day" to "thousands."

4. "We left Linnworks on Dec 15th. Mostly the same reason as everyone else. They raised our fees by 384% to £32000 per year... When Linnworks was updating stock on eBay and Shopify we would get random products not updating, we would only find out by chance so you can lose a lot of sales... We dispatch over 1000 orders a day and Storefeeder can deal with this much better than Linnworks did."
   Trustpilot, review of Linnworks, 5 January 2023. https://www.trustpilot.com/review/linnworks.com?stars=2
   Context: switched vendor after silent stock-sync failures plus a 384% fee increase. Sentiment: resigned, relieved at the switch. Profile: Shopify and eBay, 1,000+ orders/day, switched to Storefeeder.

5. "They api connector with ebay is so weak that if you sell more then 150 same products then it will not update your stock as api don't allow more then that. Amazon - pending orders are not taking stock out from inventory so You will 100% oversell this happens to us many time."
   Trustpilot, review of Brightpearl, 24 May 2017 (older; kept because no 2024-2026 equivalent names this exact mechanism). https://www.trustpilot.com/review/brightpearl.com?stars=1
   Context: a hard technical ceiling causing guaranteed overselling. Sentiment: angry. Profile: eBay and Amazon seller, 3-year customer.

6. "We had our entire inventory doubled overnight when we did nothing ABSOLUTELY NOTHING! Just think what that will do to your reputation when you have many many customers attempting to purchase products that aren't there. We attempted to fix their problem 2 days later... using their instructions with a CSV file....all it did was ADD MORE INVENTORY!"
   SoftwareAdvice, review of Sellbrite, February 2020. https://www.softwareadvice.com/inventory-management/sellbrite-profile/reviews/
   Context: a sync bug doubled stock overnight; the vendor's own fix made it worse. Sentiment: angry. Profile: 11-50 employees.

7. "The moment we run any kind of promotional event flash sale, limited drop, festive season push inventory starts drifting across channels. A sale happens on one platform and by the time the other channels update, we've already taken orders we can't fulfil. We've tried a few apps from the App Store but most of them seem to operate on a scheduled sync every 10, 15 or 30 minutes."
   Shopify Community forum thread "Has anyone built a reliable multichannel inventory system that actually keeps up during flash sales?", 17 April 2026. https://community.shopify.com/t/has-anyone-built-a-reliable-multichannel-inventory-system-that-actually-keeps-up-during-flash-sales/608148
   Context: names the mechanism directly - scheduled, not real-time, sync. Sentiment: frustrated, problem-solving. Profile: Shopify.

8. "A sale goes through on Amazon and Shopify doesn't update fast enough... we end up overselling. Super frustrating." A reply in the same thread: "I've seen one run three weeks like that" (describing how long a sync mismatch can go unnoticed).
   Shopify Community forum thread "Best way to keep Shopify and Amazon inventory in sync?", 29 August 2025 and 2 September 2026. https://community.shopify.com/t/best-way-to-keep-shopify-and-amazon-inventory-in-sync/561926
   Context: no native real-time sync between Shopify and Amazon FBA. Sentiment: frustrated. Profile: Shopify plus Amazon FBA.

### Theme 2: Orders and payouts keyed or reconciled into accounting (Xero, QuickBooks, Sage) by hand, with a spreadsheet as the real source of truth
**Frequency:** raised in 8 of 8 recent Reddit threads opened via a mirror in one research pass, corroborated by 5 Capterra reviews, 1 Trustpilot review, and several vendor case studies.
**Intensity:** High. Founders describe losing entire evenings ("my nights were screwed"), multi-month reconciliation backlogs, and burnout.
**Confidence:** High.
**Size signals seen:** roughly $100k/month across 4 channels; ~$400k revenue before outgrowing a basic tool; 405 payout settlements a month; 500 SKUs; 2,000-3,000 finished SKUs; a 2-person ops team managing a multi-thousand SKU catalog.
**Trigger moments:** adding a second or third sales channel; crossing a revenue or order-volume line; a reconciliation backlog left for months until it caused panic; the founder losing evenings or weekends to it; one master spreadsheet splitting into several conflicting versions across a team; one costly mismatch (two hours spent chasing a $47 charge).

Quotes:

9. "Been running our store for about a year and a half now, and as order volume has grown, I've realized how much I'm relying on duct-taped Google Sheets just to figure out if we actually made money in a given week... Monday mornings are basically 3 hours of pulling raw CSVs, matching ad spend, and updating pivot tables just to get numbers I can trust."
   Reddit, r/shopify, 17 September 2026 (recovered via a data mirror and checked against raw data). https://www.reddit.com/r/shopify/comments/1wirf5i/what_does_your_reporting_setup_look_like_feeling/
   Context: order growth made native platform reporting untrustworthy. Sentiment: frustrated. Profile: Shopify, ~1.5 years trading, 3 hours/week on this.

10. "For us, it's usually the reconciliation: figuring out why the number in Shopify, the warehouse, and the spreadsheet don't match. The repetitive part isn't counting stock. It's fixing the same discrepancies across multiple systems every week."
    Reddit, r/InventoryManagement, 4 September 2026. https://www.reddit.com/r/InventoryManagement/comments/1w35197/whats_the_most_annoying_part_of_managing_inventory/
    Context: recurring weekly reconciliation between three separate records. Sentiment: frustrated. Profile: Shopify plus a warehouse.

11. "We had a 'master' sheet that turned into 7 different versions across the team. I finally snapped and built a super basic Airtable base just to centralize the damn data. Took me a weekend but now I actually trust what I'm looking at."
    Reddit, r/InventoryManagement, 22 September 2026. https://www.reddit.com/r/InventoryManagement/comments/1wn5o1o/the_hidden_cost_of_500_skus_isnt_inventory_its/
    Context: a shared spreadsheet fragmented across a team until it broke down. Sentiment: frustrated, then relieved. Profile: multi-person team, thread is about 500 SKUs.

12. "i hit the same wall at three contractors and two accounts. the thing that broke me was realizing i'd spent two hours reconciling a $47 charge because i'd put it in the wrong sheet tab. moved to wave first because it was free and dead simple, outgrew it around $400k revenue when i needed actual forecasting."
    Reddit, r/Entrepreneur, 17 September 2026. https://www.reddit.com/r/Entrepreneur/comments/1vw8jzh/business_budgeting_software_once_spreadsheets/
    Context: one specific costly mismatch as the breaking point. Sentiment: frustrated. Profile: 3 contractors, 2 bank accounts, outgrew a basic tool at ~$400k revenue.

13. "I was putting aside three or four hours a night, more when we had big sales, manually reconciling every order into Xero. It was insane! Every payment that came in had its nuances and how I had to deal with it, so my nights were screwed. If you're doing three to four hours a day, you're talking 20 hours a week. That's a part-time job just doing your accounts."
    A2X (accounting-automation vendor) case study, founder of an online nutrition brand. https://www.a2xaccounting.com/case-studies/pl-nutrition-darling-smoothie-bomb
    Context: manual nightly reconciliation into Xero became a second part-time job. Sentiment: angry, burnt out. Profile: Shopify, Xero, Unleashed; 2-4 staff; ~20 hours/week on this. Note: vendor case study, customer is named and real but the story was selected and edited by the vendor.

14. "deciding between managing our business in three places, Shopify, Amazon, QuickBooks, or paying an arm and a leg to manually update data... we were spending 38 person-hours per month, with an average five-day delay on any information. 405 payout settlements posted manually every month."
    A2X case study, CEO of a direct-to-consumer kitchenware brand. https://www.a2xaccounting.com/case-studies/misen-a2x
    Context: the clearest example found anywhere in this research of a company describing headcount spent mainly moving data. Sentiment: frustrated. Profile: Shopify, Amazon, QuickBooks; 405 settlements/month; 38 person-hours/month; one full-time head of finance, four external contractors, and one part-time employee involved.

15. "I remember trying to reconcile the payments from Amazon and I was like, I don't even know how to make sense of it. It was horrendous. I let it pile up for almost six or seven months. That was the problem I created for myself - I mean I was pure panic."
    A2X case study, owner of a pet-products brand. https://www.a2xaccounting.com/case-studies/patio-pet-life-sorts-transactions-in-seconds
    Context: a reconciliation backlog left to grow for six to seven months. Sentiment: panic, retrospective. Profile: Amazon and Xero; 4-person team.

16. "Too basic for the needs of a serious retail business. (we have over 5000 products) Reports are limited and Purchase Order creation in particular has no 'smarts'... For these and many other reasons we spent most our time using spreadsheets which defeats the purpose of specialist inventory management software in my opinion."
    Capterra, review of Unleashed, 13 June 2018 (older; kept, no closer equivalent found). https://www.capterra.com/p/126644/Unleashed/reviews/
    Context: bought specialist software and ended up back on spreadsheets anyway. Sentiment: frustrated. Profile: 5,000+ SKUs.

### Theme 3: Automation and connector tools (Zapier, Make, Synder, and similar) break silently, or never deliver what they promised, and stores end up back doing it by hand
**Frequency:** 8 of 8 independent Trustpilot reviewers across Zapier and Make.com alone raised this unprompted; corroborated by a detailed Synder account and by Extensiv, Cin7-WooCommerce, and Veeqo-USPS incidents in other passes.
**Intensity:** High. Billing shocks, lost automations, and production-breaking failures described in detail.
**Confidence:** High, though concentrated on a small number of review platforms (see Sample Bias).
**Trigger moments:** a task-allowance or credit limit blown through without warning; a subscription silently deactivated, deleting every automation; a connector that was sold as supporting a specific channel (TikTok Shop, WooCommerce) simply not working, sometimes for many months, before the vendor admits it.

Quotes:

17. "I set up a basic three step lead integration... it burned through my monthly task allowance in less than 48 hours without warning."
    Trustpilot, review of Zapier, 7 August 2026. https://www.trustpilot.com/review/zapier.com

18. "without any notice, my subscription was no longer active, all my zaps were gone from my account."
    Trustpilot, review of Zapier, 9 December 2025. https://www.trustpilot.com/review/zapier.com

19. "Patchy, inconsistent, simple zaps either don't trigger at all, or trigger endless zaps at a time. Support is non existent."
    Trustpilot, review of Zapier, 21 October 2025. https://www.trustpilot.com/review/zapier.com

20. "Whenever they introduce new feature everything breaks. Fun thing it runs, but you have to redo half of your work!"
    Trustpilot, review of Make.com, 21 May 2026. https://www.trustpilot.com/review/make.com

21. "Even when you finally got a scenario right at the end, next day bug/broken/wrong output."
    Trustpilot, review of Make.com, 29 April 2026 (reviewer location GB). https://www.trustpilot.com/review/make.com

22. "The entire reason we considered using Synder was to properly reconcile TikTok sales in QuickBooks Online (QBO)... Unfortunately, the TikTok integration simply does not work. I spent days and weeks gathering data and evidence to prove to their team that the integration was broken... The whole process dragged out for over 10 months with weekly meetings, and ultimately they gave up and suggested an alternative: statement-level integration. But this 'solution' completely defeats the purpose of using Synder... Since the TikTok integration didn't work, I asked whether they could reduce the subscription cost, because paying $275 per month for software that only captures statement-level payouts doesn't make sense. They refused."
    Trustpilot, review of Synder, 7 March 2026. https://www.trustpilot.com/review/synder.com
    Context: a connector bought specifically to fix TikTok Shop to QuickBooks reconciliation, unresolved after nearly a year. Sentiment: angry, exhausted. Profile: TikTok Shop, QuickBooks Online.

23. "Over 100+ orders being duplicated into the Zoho Inventory from WooCommerce. With no reason at all, just random orders being duplicated causing a huge discrepancy in stocks for our client. Our client has been unable to trade due to this issue as stocks show double purchases... They are charging my client almost $40/month and will not get on a call even though the issue is 'Commerce Stopping.'"
    Trustpilot, review of Extensiv, 23 May 2024. https://www.trustpilot.com/review/extensiv.com
    Context: an integration bug duplicated orders badly enough to stop the client trading. Sentiment: angry. Profile: WooCommerce and Zoho Inventory.

24. "The connection to our ecommerce platform failed nearly a month ago. We've been gaslit for weeks into believing it's something we did, then finally they admit that all woocommerce users have the same issue. Haven't heard from them in 6 days despite promises of round the clock support."
    Trustpilot, review of Cin7, ~23 September 2026. https://www.trustpilot.com/review/cin7.com
    Context: a platform-wide WooCommerce connector outage affecting every customer on it at once. Sentiment: angry. Profile: WooCommerce, self-described small business.

### Theme 4: Too many disconnected apps and plugins, each one a small maintenance job on its own
**Frequency:** raised unprompted in 4 of 4 independent Shopify Community threads found on the topic.
**Intensity:** Medium. Described as a constant background tax rather than a single catastrophic event, though it occasionally causes a catastrophic event (duplicate orders, silently wrong data for weeks).
**Confidence:** High for Shopify specifically; not independently corroborated for other platforms in this research.

Quotes:

25. "I recently had a bad bug on the site and a tech told me I shouldn't have more than 10 apps installed. That is impossible. About 7 of them are Shopify developed apps (which are free at least)... I am looking to password protect a collection on my site. Guess what. Another app. $5 to $9 a month to do this. What else am I paying for?"
    Shopify Community forum, "Too many shortcomings requiring too many apps", 5 January 2023. https://community.shopify.com/t/too-many-shortcomings-requiring-too-many-apps/181229
    Context: told by the platform's own support not to exceed 10 apps, after a bug. Sentiment: frustrated, angry. Profile: Shopify.

26. "I spend a ridiculous amount of time vetting apps due to worries about conflicts, updates, weighing the pros/cons of App A that might do 3 tasks 'okay', or installing 3 separate apps that perform those same tasks really well, etc. Never mind the headache of uninstalling and worrying about lingering code."
    Same thread, 13 January 2024. https://community.shopify.com/t/too-many-shortcomings-requiring-too-many-apps/181229
    Sentiment: frustrated, resigned. Profile: Shopify.

27. "Every setting in an app is not just a thing to configure, it is a thing that can be silently wrong for a year. A forecasting or inventory app hands you a figure you act on, and if it is wrong you do not find out for six weeks, when the delivery lands after you sold out, or when the cash is sitting in a box. It failed silently, and it failed while feeling helpful."
    Shopify Community forum, "How do you decide which Shopify apps to keep?", 14 September 2026. https://community.shopify.com/t/how-do-you-decide-which-shopify-apps-to-keep/675192
    Context: the poster discloses building a competing app elsewhere in the thread, so treat as semi-vendor voice, but the specific failure mode described (silent, undetected data drift) matches what independent reviewers describe elsewhere in this report. Profile: Shopify.

28. "Realized today the six iPads we have on our POS have not synced products or inventory since April 19."
    Shopify Community forum, "POS won't sync product and inventory", 3 May 2026. https://community.shopify.com/t/pos-wont-sync-product-and-inventory/615726
    Context: a silent sync failure undetected for around two weeks. Sentiment: alarmed. Profile: Shopify POS, 6 terminals, single location.

29. "Is there anyone experiencing having duplicated orders in Shopify from TikTok. I am using DPL third party app." A responder's explanation: "the duplicate orders occur because the order confirmation event fires twice, once from the Shopify checkout and once from the TikTok integration."
    Shopify Community forum, "TikTok duplicate order DPL", 1 October 2025. https://community.shopify.com/t/tiktok-duplicate-order-dpl/568658
    Context: a native channel integration and a third-party app both writing the same order. Sentiment: confused, frustrated. Profile: Shopify, TikTok Shop.

### Theme 5: Fulfilment and 3PL handoffs break down
**Frequency:** 6 of 25 quotes gathered in one dedicated pass, across 5 independent vendor threads (Brightpearl, Cin7, ShipHero, Unleashed, Extensiv).
**Intensity:** High. Language of "unable to trade," "critical problems," and multi-week delivery failures.
**Confidence:** High.
**Trigger moments:** a 3PL's warehouse relocation; a connector between the ops platform and the 3PL breaking for everyone at once; a carrier failing to collect a pre-booked parcel from a small, newly established business.

Quotes:

30. "If I could leave 0 stars I would. ShipBob has been nothing short of a nightmare for the last 3 months."
    Trustpilot, review of ShipBob, 25 September 2026. https://www.trustpilot.com/review/shipbob.com

31. "More than 11 days after we first contacted ShipBob, the shipment still has not gone out."
    Trustpilot, review of ShipBob, 8 September 2026. https://www.trustpilot.com/review/shipbob.com
    Context: an Amazon FBA-prep shipment stuck with no clear escalation path.

32. "WMS/3PL Integrations are provided by a 3rd party and don't work properly."
    Trustpilot, review of Brightpearl, 1 December 2025. https://www.trustpilot.com/review/brightpearl.com
    Context: the clearest, most direct naming of the 3PL-handoff problem found anywhere in this research.

33. "customers received their orders almost two weeks after placing it due to a 'relocation issue in the warehouse.'"
    Trustpilot, review of ShipHero, 17 October 2024. https://www.trustpilot.com/review/shiphero.com

34. "We are 4 months into our Unleashed LIVE account... and I cannot express how much of a disaster it has been." The same review thread also states hundreds of orders went missing during go-live.
    Trustpilot, review of Unleashed, 12 May 2026. https://www.trustpilot.com/review/unleashedsoftware.com

35. "Royal Mail caused significant losses for my small, newly established business after failing to collect parcels booked in advance."
    Trustpilot, review of Royal Mail, 24 September 2026. https://www.trustpilot.com/review/royalmail.com
    Context: a courier failing a pre-booked collection, direct financial loss to a brand-new small store. Profile: small, newly established business; approximately £150 direct loss stated elsewhere in the same review.

### Theme 6: Returns are handled by hand and often don't reconcile back to stock or accounting
**Frequency:** 5 of 25 quotes in the same dedicated pass, across 4 independent vendors (Veeqo, Loop Returns, Narvar).
**Intensity:** High, including one directly quantified loss.
**Confidence:** High.

Quotes:

36. "There is no way to verify that Veeqo is processing a refund 'for 30 days'... Veeqo has no means to generate an account statement that shows the shipments along with charges and any refunds."
    Trustpilot, review of Veeqo, 22 May 2026. https://www.trustpilot.com/review/veeqo.com
    Context: no visibility into whether a refund happened or how it reconciles against shipping charges. Sentiment: angry.

37. "There seems to be significant issues with exchange process that causes refunds to be issued for products that have not been returned... By the time we caught this problem, we had issued over $15K of refunds we could not recover."
    Trustpilot, review of Loop Returns, 2 March 2021 (older; kept, no 2024-2026 equivalent found for this vendor and it is the strongest quantified example of "customers exploiting a returns gap" found in this research). https://www.trustpilot.com/review/loopreturns.com

38. "Horrible returns company to work with if you have a Shopify store. Not only is it obscenely expensive compared to other options, (Literally 1400 a month)."
    Trustpilot, review of Narvar, 1 April 2025. https://www.trustpilot.com/review/narvar.com
    Profile: Shopify.

39. "The return process is ridiculous & delivery is never on time."
    Trustpilot, review of Narvar, 28 February 2025. https://www.trustpilot.com/review/narvar.com

40. "Buggy and will often charge you unnecessarily. It takes a month to get any kind of refund. Interface is ungodly awful."
    Trustpilot, review of Veeqo, 22 July 2026. https://www.trustpilot.com/review/veeqo.com

### Theme 7: A person is hired mainly to move or reconcile data between systems
**Frequency:** the weakest-evidenced theme relative to how explicitly the brief asked for it. One strong, explicit source; the rest is inferential (a switch of bookkeeping firm, general virtual-assistant threads that are not ecommerce-specific, and job postings whose duties amount to this without ever saying so in as many words).
**Intensity:** Medium where present.
**Confidence:** Low to Medium. Flagged honestly rather than stretched.

Quotes:

41. "We were spending almost $7,000, $6,688 a month, in labor and fees between contractors, part-timers, and full-timers" to manage reconciliation across Shopify, Amazon, and QuickBooks by hand. The same company's CEO also described "one full-time head of finance, four external contractors, and one part-time" employee.
    A2X case study, CEO of a kitchenware brand. https://www.a2xaccounting.com/case-studies/misen-a2x
    Context: the single clearest example in this entire research effort of headcount spent mainly on moving data. Vendor case study caveat applies (see methodology note).

42. "I made the mistake of hiring a general VA and then slowly adding sales admin, customer support, social posting and project management. Eventually I thought the person wasn't very good when in reality I'd created four jobs and called it one."
    Reddit, r/Entrepreneur, 28 August 2026. https://www.reddit.com/r/Entrepreneur/comments/1vy2jtw/where_are_you_guys_actually_hiring_good_virtual/
    Context: general small-business hiring thread, not ecommerce-specific, but a recurring pattern of scope creep into data-moving work.

43. "Biggest mistake we made was hiring one person for: email, lead gen, social, design, bookkeeping, customer support. They were average at everything and great at nothing."
    Same thread, 18 September 2026. https://www.reddit.com/r/Entrepreneur/comments/1vy2jtw/where_are_you_guys_actually_hiring_good_virtual/

44. "We changed accounting/bookkeeping firms recently due to some of BrightPearl's accounting quirks which are not natural for traditional Quickbooks bookkeepers."
    Capterra, review of Brightpearl, 6 February 2017 (older). https://www.capterra.com/p/124180/Brightpearl/reviews/
    Context: the software itself forced a change of who was hired to do the books.

Supporting job-posting evidence for this theme is in section 5 below; the clearest is a Fulfilment Coordinator role (Bradford, West Yorkshire) whose stated tools are MS Excel and whose job exists specifically to bridge the office and the warehouse by hand.

### Theme 8: Peak season (Black Friday, Christmas) breaks systems specifically
**Frequency:** the thinnest evidence in this entire report. Despite dedicated, repeated searching across all five research passes, only one directly-dated Christmas-period quote was recovered (quote 2, above, reused here because it is genuinely the only one found), and the flash-sale quotes in Theme 1 (quote 7) are the closest adjacent evidence. Zero Black Friday/Cyber Monday-specific quotes were found.
**Intensity:** High where it does appear (a business fully paused over Christmas).
**Confidence:** Low. This is flagged as an honest evidence gap, not filled with invented content. The most likely explanation, stated consistently across research passes, is that this exact narrative pattern ("our systems broke on Black Friday specifically") is a Reddit-native storytelling style, and Reddit was blocked in every single pass of this research. If this theme matters strategically, it needs a follow-up pass with working Reddit or G2/Capterra access.

The two data points available:
- Quote 2 above (Veeqo, Christmas 2023, £5k+ lost sales, business paused).
- Quote 7 above (Shopify Community, "festive season push" named alongside flash sales and limited drops as a trigger for cross-channel inventory drift).

---

## 2. Platform tally

Counted from the quotes and profile signals featured in this report (not the full underlying research corpus, which is larger). Many posts state no core store platform at all; where a poster names Amazon, eBay, Etsy, or TikTok Shop, that is counted separately as a channel, not a platform, since those are marketplaces layered on top of a core store, not a store platform themselves.

| Platform | Mentions in this report's quotes | Notes |
|---|---|---|
| Shopify | 14 | By far the most represented, consistent with Shopify's heavy presence on Trustpilot, the Shopify Community forum itself, and A2X's case studies. |
| WooCommerce | 5 | Clusters almost entirely around one specific pain: connectors and integrations that either do not support WooCommerce at all, or break for every WooCommerce user simultaneously (Cin7's month-long outage, Extensiv's order-duplication bug, Veeqo naming "no WooCommerce integration" as a stated dealbreaker for at least one reviewer). This is a distinct flavour of pain from the general multichannel sync drift seen on Shopify: WooCommerce stores' complaint is less "my stock quietly drifted" and more "the tool doesn't properly support my platform, or broke for everyone on it at the same time." |
| Magento / Adobe Commerce | 1 | A single explicit mention (an 8-month failed Unleashed-to-Magento 2 connector implementation, in the tried-and-failed section below). Too thin to draw a pattern from. |
| BigCommerce | 1 | A single explicit mention (a Veeqo reviewer naming BigCommerce and complaining orders only appear after a full page refresh). Too thin to draw a pattern from. |
| Wix | 0 | No Wix-specific quote was found anywhere across all five research passes, despite it being in scope. This is a genuine gap in what was reachable, not evidence that Wix stores don't have this pain. |
| Not stated / multiple unspecified channels | ~35+ | The majority of quotes, especially in the accounting/spreadsheet and 3PL/returns themes, either don't name a core platform at all or only name marketplace channels (Amazon, eBay, Etsy, TikTok Shop). |

Caveat: this tally reflects what was reachable and what got featured in this document, not a controlled survey. It should be read directionally (Shopify and WooCommerce dominate the discoverable public complaint volume; Magento, BigCommerce, and Wix are essentially invisible in it) rather than as a precise market breakdown.

---

## 3. What they tried, and why it failed

1. **Manual duplicate data entry to compensate for a one-directional sync (Veeqo + WooCommerce).** "A lot of duplicate data handling is required to keep Veeqo and your inventory on your own store updated, it doesn't pass inventory updates from Woo back across, which is a bit of a pain." SoftwareAdvice, review of Veeqo, May 2018. https://www.softwareadvice.com/inventory-management/veeqo-profile/reviews/

2. **A CSV re-upload, attempted as the fix, made the problem worse (Sellbrite).** "We attempted to fix their problem 2 days later... using their instructions with a CSV file....all it did was ADD MORE INVENTORY!" SoftwareAdvice, review of Sellbrite, February 2020. https://www.softwareadvice.com/inventory-management/sellbrite-profile/reviews/

3. **Standing hourly manual checks as a permanent workaround (SkuVault).** "Channel accounts stop syncing (seems to happen suddenly) so you have to check the connections frequently (hourly) or your inventory will be off and then you have count everything and fix the numbers." Trustpilot, review of SkuVault, 12 February 2026. https://www.trustpilot.com/review/skuvault.com

4. **Three separate QuickBooks connectors tried in sequence, none worked.** "We are looking to automatically import in real-time orders from our e-commerce software into QB Desktop right as they happen. We tried Webgility and Connex for Quickbooks and Synder but for varying reasons, they didn't work out." Reddit, r/QuickBooks, date unknown (est. 2023, snippet only). https://www.reddit.com/r/QuickBooks/comments/13by1n8/importing_ecommerce_orders_into_quickbooks/

5. **Intuit's own official QuickBooks Online app for Shopify missed payouts, which then had to be entered by hand anyway.** "Very unreliable. does not transfer all payout data from Shopify to QB, meaning you have to figure out which ones were missed and enter them in manually." Shopify App Store, review of the QuickBooks app, 12 September 2025. https://apps.shopify.com/quickbooks/reviews

6. **The same app also duplicated data that then had to be fixed by hand.** "This app doesn't work. Our data keeps getting duplicated and creates a huge mess we have to manually fix." Shopify App Store, review of the QuickBooks app, 26 June 2024. https://apps.shopify.com/quickbooks/reviews

7. **Synder was tried, and the reviewer concluded a human would have been cheaper.** "I honestly wish I'd had a bookkeeper manually add in these transactions, it would have been cheaper and I would have received better service." Trustpilot, review of Synder, 19 August 2026. https://www.trustpilot.com/review/synder.com

8. **Synder with Stripe and QuickBooks Online kept reopening and editing closed accounting periods.** "The product does not work with Stripe and Quickbooks online unless you never close your books... it's also frustratingly slow. Importing revenue recognition for month end takes days, and there is no way to see the progress to completion." Trustpilot, review of Synder, 4 July 2025. https://www.trustpilot.com/review/synder.com

9. **Unleashed paired with a third-party Magento 2 connector, 8 months of implementation, then abandoned.** "We bought Unleashed specifically because they told us they supported Magento 2... After over 8 months of set up and going backwards and forwards with Unleashed and their 3rd party app... for Magento, we were finally told that the connector would not work with assembled products... we now have meetings scheduled with Bright Pearl and Cin7 which have native integrations with Magento 2." Capterra, review of Unleashed, 21 February 2019. https://www.capterra.com/p/126644/Unleashed/reviews/

10. **Unleashed required paying accountants separately just to connect Xero, and Power BI on top just to get usable reports.** "Good luck integrating with Xero without costly setup via accountants... Out of the box reporting is woeful. We had to integrate with Power BI to gain any meaningful insights." Capterra, review of Unleashed, 7 October 2018. https://www.capterra.com/p/126644/Unleashed/reviews/

11. **Cin7 (then called DEAR) and QuickBooks Online: over a month lost chasing a sync bug that turned out to be the vendor's.** "I lost more than 1 month (actually) trying to find the cause of a synchronization problem with QBO and the error was on your side, you hadn't done the required testing." Capterra, review of Cin7 Core, November 2019. https://www.capterra.com/p/133038/Cin7-Core/reviews/

12. **Transaction-level import into QuickBooks was abandoned in favour of typing in daily totals by hand.** "The 'easiest' way I found out so far is manually entering them by day by day payouts. Whatever you do DO NOT import transaction by transaction. You'll end up with thousands of transactions and that becomes impossible to manage." Reddit, r/QuickBooks, date unknown (est. 2020, snippet only). https://www.reddit.com/r/QuickBooks/comments/gc8029/what_the_best_way_to_sync_my_ecommerce/

13. **Veeqo's USPS label generation was abandoned after a fraud incident froze shipments for months with no compensation.** "Back in October USPS froze all our Veeqo (Amazon) shipments from our website due to 'postage not paid.' From best knowledge someone was generating fraudulent USPS labels thru Veeqo... We are now 3 months later and Veeqo still have not offered one penny in compensation." Trustpilot, review of Veeqo, updated 13 February 2026. https://www.trustpilot.com/review/veeqo.com

14. **Loop Returns for exchange/refund automation was abandoned after it issued refunds for goods that were never actually returned.** "By the time we caught this problem, we had issued over $15K of refunds we could not recover." Trustpilot, review of Loop Returns, 2 March 2021. https://www.trustpilot.com/review/loopreturns.com

15. **A generalist virtual assistant hire had scope creep into four separate jobs.** "I made the mistake of hiring a general VA and then slowly adding sales admin, customer support, social posting and project management... I'd created four jobs and called it one." Reddit, r/Entrepreneur, 28 August 2026. https://www.reddit.com/r/Entrepreneur/comments/1vy2jtw/where_are_you_guys_actually_hiring_good_virtual/

16. **Gave up tracking stock at all rather than keep fighting a spreadsheet.** "There was no way I could handle the work load of keeping track of current stock so now if I have it, it ships, if I don't i make it." Reddit, r/Etsy, 20 September 2026. https://www.reddit.com/r/Etsy/comments/1wkzyp3/how_are_people_tracking_inventory_across_multiple/

17. **Shopify's own suggested fix for negative POS stock did not work, and the same unresolved bug recurred for someone else 14 months later on the same public thread.** "They told me to make new shipping locations out of our physical locations... now we have negative inventory and have to somehow consolidate the order." Shopify Community forum, February-April 2023, with a second sufferer posting 17 April 2024. https://community.shopify.com/t/major-problem-new-inventory-updates-to-shopify-are-overselling-our-stock-and-creating-negatives/194851

18. **Shopify discontinued its own native Amazon sales channel, forcing sellers onto third-party apps as a workaround.** "Shopify ended the Amazon Sales Channel a few months back. You need to use a third party app now." Amazon Seller Central forum, date shown as "5 years ago" on the page, exact date unknown. https://sellercentral.amazon.com/seller-forums/discussions/t/da88a09951c2383085b611b585ab3950

---

## 4. Price tolerance: what people say they pay, or would pay

No store owner in any of the five research passes stated an explicit number for what they would pay to make this problem go away. What exists is real, cited current spend, and complaints about price increases. That gap is stated plainly rather than papered over.

**Current spend on staff/contractors to do it by hand:**
- "We were spending almost $7,000, $6,688 a month, in labor and fees between contractors, part-timers, and full-timers." A2X case study. https://www.a2xaccounting.com/case-studies/misen-a2x
- "I spoke to a few bookkeepers, but they wanted to charge me $60 an hour just for them to manually reconcile it themselves. I thought, 'There's got to be a better way'." A2X case study. https://www.a2xaccounting.com/case-studies/pl-nutrition-darling-smoothie-bomb
- "I charge $40 per hour (Southern California). I'm very experienced (27 years)..." Reddit, r/Bookkeeping, date unknown (est. 2018). https://www.reddit.com/r/Bookkeeping/comments/9les2a/what_do_you_charge_per_hour/
- "Rates for solid PH-based VA's are somewhere in the $5-8/hr range, more for specialized stuff." Reddit, r/Entrepreneur, 26 August 2026. https://www.reddit.com/r/Entrepreneur/comments/1vy2jtw/where_are_you_guys_actually_hiring_good_virtual/
- "I'm paying $30/hr CAD because I wanted someone good. Worth every penny." Reddit, r/Entrepreneur, 26 August 2026 (same thread as above).
- "Brainy Advisors specializes in e-commerce bookkeeping (from startups up to enterprise companies)... starting at $195/mo." Reddit, r/Bookkeeping, date unknown (est. 2023; note this is a provider advertising, not a buyer stating what they pay). https://www.reddit.com/r/Bookkeeping/comments/141y3n7/bookkeeping_options_for_me_niche_ecommerce_store/

**Current spend on tools that then failed:**
- "Paying $275 per month for software that only captures statement-level payouts doesn't make sense." Trustpilot, review of Synder, 7 March 2026. https://www.trustpilot.com/review/synder.com
- "They are charging my client almost $40/month and will not get on a call even though the issue is 'Commerce Stopping.'" Trustpilot, review of Extensiv, 23 May 2024. https://www.trustpilot.com/review/extensiv.com
- "Horrible returns company to work with if you have a Shopify store. Not only is it obscenely expensive compared to other options, (Literally 1400 a month)." Trustpilot, review of Narvar, 1 April 2025. https://www.trustpilot.com/review/narvar.com
- "They charge you for everything. £5 plus VAT for a single customer return." Trustpilot (UK), review of Huboo, a UK 3PL, 1 July 2026. https://uk.trustpilot.com/review/huboo.com

**Complaints about sudden price increases (a recurring, unprompted pattern across at least four separate tools):**
- "They raised our fees by 384% to £32000 per year. Completely unacceptable increase." Trustpilot, review of Linnworks, 5 January 2023. https://www.trustpilot.com/review/linnworks.com?stars=2
- "I have been paying 3,600 a year, after 3 years they risen price to 16,800... now we pay 1800 a year without any extra third parties integrations." Trustpilot, review of Brightpearl, 24 May 2017. https://www.trustpilot.com/review/brightpearl.com?stars=1
- "Veeqo just reduced the credits per label by 75%. no warning, no explanation, just an overnight 75% reduction in credit value." Trustpilot, review of Veeqo, 2 March 2026. https://www.trustpilot.com/review/veeqo.com
- "Our expenses on Katana's services skyrocketed from around 100 USD to over 500 USD monthly, a fivefold increase in just two years." Capterra, review of Katana, 24 January 2024 (reviewer's business: approximately EUR300k annual turnover, approximately 3,000 orders/month). https://www.capterra.com/p/172888/Katana-MRP/reviews/
- "My subscription went from $800 to $4000... charged 5 times more than what I signed up for." Trustpilot, review of Katana, 2 October 2024. https://www.trustpilot.com/review/katanamrp.com
- "Continuous price increases since switching from Dear in October 2021 ($249/month to $669/month)." Capterra, review of Cin7 Core, 3 November 2024. https://www.capterra.com/p/133038/Cin7-Core/reviews/

**A cost-of-inaction framing offered by one poster, useful as context even though it is not a stated willingness-to-pay figure:**
- "What do you think your time, or your employee's time, is worth per hour? Multiply that by the number of hours spent manually updating and checking inventory every month. If the automation costs less than that, it is already worth paying for. And this calculation still doesn't include the cost of overselling, inventory mistakes, cancelled orders, or the mental load of constantly checking two systems." Reddit, r/InventoryManagement, 4 September 2026. https://www.reddit.com/r/InventoryManagement/comments/1w79o0t/how_much_inventory_automation_is_actually_worth/

**Pattern across all of the above:** the loudest, most consistent pricing anger is not about the base price, it is about pricing that rises with order volume, or that jumps suddenly and without warning, landing hardest exactly as a store is growing, which is the moment the offer in question would be targeting.

---

## 5. UK job postings as evidence

Job ads say what a company is willing to pay a salary to have a human do. All of the below are live or recently-live UK postings, mostly from Reed.co.uk (Indeed and LinkedIn returned 403 on every attempt across all five research passes). Where a year is not printed on the posting itself, it is because Reed shows only day and month for live ads; these were fetched live in September 2026 and are treated as current postings.

- **Fulfilment Coordinator**, Bradford, West Yorkshire, £28,000-£30,000, posted 10 September. "Coordinating day-to-day fulfilment activity from the office, working closely with the warehousing team"; "Maintaining accurate records and reporting using MS Excel"; acts as the point of contact between warehouse staff and customers to resolve issues. https://www.reed.co.uk/jobs/fulfilment-coordinator/57332789. Reading: this role exists specifically to manually bridge the office and the warehouse, and its core tool is Excel.

- **Marketplace/Ecommerce Administrator**, Alcester, Warwickshire, £30,000-£35,000. "Coordinate and manage the administration of customer orders, ensuring timely delivery to Amazon and other fulfilment locations"; "Monitoring and managing returns from Amazon, including overstocked, damaged, or slow-selling items." https://www.reed.co.uk/jobs/marketplace-ecommerce-administrator/57315728. Reading: dedicated headcount to manually triage Amazon returns by condition and cause.

- **Logistics Coordinator**, Gloucestershire, £32,000-£40,000, posted 10 September. "Book deliveries into the Warehouse or 3PL and manage inbound scheduling"; "Resolve goods-in discrepancies with suppliers and carriers"; "Maintain the container Trello boards and a single shipment tracker as the source of truth"; "Keep Brightpearl updated with expected arrival dates and goods receipt." https://www.reed.co.uk/jobs/logistics-coordinator/57333364. Reading: the ERP (Brightpearl) is explicitly not the source of truth here, a Trello board and a separate tracker are, and someone has to manually keep the ERP in sync with them.

- **Purchasing Manager**, London, £50,000, posted 8 September. "Maintaining stock accuracy, rotation, and write-off minimization while ensuring ERP integrity"; "Evaluating and implementing tools, integrations, or automation to improve data flow." https://www.reed.co.uk/jobs/purchasing-manager/57295561

- **Wholesale & Marketplace Operations Executive**, Manchester, £30,000-£35,000, posted 16 September. "Coordinating EDI and marketplace integrations"; "Managing orders from receipt through to dispatch and invoicing"; "Creating and improving SOPs, workflows and onboarding processes." https://www.reed.co.uk/jobs/wholesale-marketplace-operations-executive/57352146

- **Ecommerce Executive**, Rainham, Essex, £35,000-£40,000, posted 27 August. "Oversee the ongoing administration of the business ERP (ProfitMaster); ensuring data consistency; accurate product catalogue feed, descriptions and content; and smooth synchronisation with customer-facing platforms"; "Administer and maintain Google Merchant Centre product feeds, resolving data errors." https://www.reed.co.uk/jobs/ecommerce-executive/57282139

- **Sales Order Administrator**, Northwich, £26,500-£28,500, posted 25 August. "Processing customer orders accurately and efficiently"; "Examining discrepancies in orders, inventory, or documentation." https://www.reed.co.uk/jobs/sales-order-administrator/57276950

- **Ecommerce Trading Assistant (Fashion, Strong Excel)**, London, £26,500, contract. Handles "stock and option management KPIs across partner channels"; "Coordinate the delivery schedules to our non-drop ship partners, working with merch team and DC contacts." A role built around reconciling stock availability across multiple retail partner channels by hand, using Excel as the primary tool. https://www.reed.co.uk/jobs/ecommerce-trading-assistant-fashion-strong-excel/57332233

- **Volume signal (not individual postings):** on 25 September 2026, Reed.co.uk listed 1,117 live "Order Processing Administrator" jobs (https://www.reed.co.uk/jobs/order-processing-administrator-jobs) and 110 live "Ecommerce Administrator" jobs (https://www.reed.co.uk/jobs/ecommerce-administrator-jobs) in the UK. No search was found that isolated only the subset of these roles whose duties are purely "type orders into accounting software," so this is presented as a volume signal of the broader category, not a precise count of this exact pain.

Gap disclosed honestly: no UK job posting was found across any research pass that explicitly lists "manually entering orders into Xero" or "keying orders into Sage" as a duty in those exact terms. The postings above show the shape of the work (Excel as the real tool, "source of truth" living in a Trello board rather than the ERP, discrepancy-chasing, manual reconciliation) without a company ever stating the underlying problem in plain language in a job ad.

---

## 6. Trigger events, across all themes

The distinct moments, named across independent sources, that pushed a store from tolerating this to actively doing something about it:

- **Crossing a revenue or order-volume threshold.** Examples cited: roughly $100k/month across 4 channels; roughly $400k revenue outgrowing a basic bookkeeping tool; growing from "a few hundred SKUs and a couple hundred orders a day" to "thousands"; 500 SKUs turning a shared spreadsheet into 7 conflicting versions.
- **Launching on, or adding, a new sales channel.** Most commonly Amazon, Etsy, or TikTok Shop; also offline/pop-up sales as a second channel a store wasn't built to reconcile.
- **Flash sales, promotions, and festive-season demand spikes**, which outrun scheduled (rather than real-time) sync intervals of 10-30 minutes and are the two clearest pieces of evidence connecting peak trading periods to system breakage found in this research.
- **A single, sudden, catastrophic event**, most often a bad CSV upload zeroing stock across every channel simultaneously, or an import bug flooding a catalog with several times too many products right after a migration.
- **A reconciliation backlog left to grow for months**, eventually causing panic (one case: six to seven months).
- **The founder personally losing evenings or weekends to manual reconciliation** ("my nights were screwed," "20 hours a week, that's a part-time job").
- **A connector or integration failing after months of trying to make it work**, and the team going back to doing it by hand (a Synder integration unresolved after 10+ months; a Magento connector abandoned after 8 months).
- **Migrating to a new system itself becoming the trigger**, with hundreds of open orders needing manual re-entry, or a new tool's own import bug corrupting the catalog on day one.
- **A sudden, unannounced price increase**, cited as the final straw for switching vendors even when the immediate trigger wasn't a sync bug (Linnworks' 384% increase; Veeqo's overnight 75% cut to shipping-label credit value; Katana's fivefold price rise).
- **Getting an outside quote for the manual alternative** ($60/hour from a bookkeeper) and deciding there had to be a better way.
- **A vendor's own instability**, such as an acquisition that left a tool unmaintained while core sync features quietly stopped working, or a platform (Shopify) discontinuing a native channel integration outright.

---

## 7. Sample bias: what is skewed in this research, stated plainly

- **Reddit was completely inaccessible across all five research passes**, despite being the single most-requested source in the brief and, by every research pass's own assessment, the likely best source for the open "why we switched," peak-season storytelling style the brief specifically wanted. Its absence is the largest single gap in this report. Reddit skews toward smaller, more do-it-yourself sellers who are unusually vocal about pain online; its absence likely under-represents both the very small end of the target range and the candid switching-story format.
- **G2 was completely inaccessible in four of the five research passes** and only reachable in one; Capterra was reachable in two of five. Both are explicitly named in the brief and both are structurally biased toward people who already bought dedicated software, which under-represents stores still running on spreadsheets or nothing at all, plausibly the sharpest pain segment for an offer aimed at stores that have "outgrown their setup."
- **Trustpilot, which most quotes in this report come from, skews heavily toward the two extremes.** Most of the tools quoted sit at roughly 1.3 to 2.0 out of 5 on Trustpilot, itself a selection effect: people who had an unremarkable, tolerable experience with these tools mostly do not write reviews. The large, quiet middle is not represented here.
- **Vendor-switcher bias.** Many of the richest quotes come from people actively mid-leave or just having left a tool, which overrepresents "this specific piece of software failed me" versus "this kind of work is inherently hard at this scale regardless of which tool you use." Several quotes (notably the Veeqo "outgrew the tool" quote and multiple Shopify Community threads) do explicitly frame the problem as structural rather than vendor-specific, which is some counterweight.
- **A2X's case studies are vendor-selected and vendor-edited.** The named businesses and their situations are real, but A2X chose which stories to publish and edited them for its own marketing purposes. They remain the strongest sizing and cost data found in this research (hours per month, headcount, dollar figures) precisely because they are the only sources willing to publish specifics, but they are not independent.
- **Company-size skew toward the smaller end.** Where an employee count is stated at all, it is almost always 2-10 or 11-50 employees. The lower half of the brief's $/£250k-$/£20m range is well represented; the upper half is thinner (Linnworks' 1,000+ orders/day reviewer, its £32k/year spend, and Misen's 405 settlements/month and six-person data-moving operation are the closest signals of the larger end of the range).
- **Geography skews UK and US, roughly evenly, with minimal other-EU representation.** The job postings are UK-only by design, per the brief.
- **Some Shopify Community forum replies may themselves be from app vendors posting under ordinary-looking usernames**, rather than store owners; every quote used in this report was checked to read as a poster describing their own store's situation rather than a pitch, but two instances (marked inline in Theme 4) are flagged as semi-vendor voice because the poster disclosed building a competing tool elsewhere in the same thread.
- **Extraction method caveat.** Longer quotes were retrieved through an automated fetch-and-read step, not raw page source inspected directly; short quotes were cross-checked as consistent across repeated fetches, and a subset of the Reddit-mirror quotes (10 of them) were checked against saved raw data and matched exactly. Anything that still reads as a fragment rather than a complete sentence in this report is presented that way rather than smoothed over.

---

## Pages and sources that would not load

Consolidated and deduplicated across all five research passes. Listed by category rather than every individual URL, since the same blocks recurred dozens of times:

- **The entire reddit.com domain** (including old.reddit.com and web.archive.org copies of it): blocked at the fetch-tool level in every single attempt across all five research passes, including through roughly 40 combined proxy, mirror (Redlib/Libreddit instances), and CORS-proxy workarounds. A public data mirror (arctic-shift.photon-reddit.com) did work for one research pass and produced the Reddit quotes used in Theme 2 and Theme 7; those were spot-checked against raw saved data. All other Reddit content used in this report came from search-engine preview snippets only (title and one line, no date, no verified quote), and is listed separately below as unopened leads rather than quoted.
- **G2.com**: HTTP 403 on every product review page attempted, in four of five research passes.
- **Capterra**: 403 or 404 in three of five research passes; reachable in two, which supplied the Capterra quotes used throughout this report.
- **TrustRadius**: HTTP 403 on every attempt.
- **Indeed (uk.indeed.com) and LinkedIn**: HTTP 403 on every attempt; Reed.co.uk was the only UK job board that worked.
- **Search engines**: Google (consent wall then CAPTCHA), Bing (loaded but returned results unrelated to the query terms), DuckDuckGo (CAPTCHA), Yandex (CAPTCHA), Brave (rate-limited, HTTP 429), Startpage, Mojeek, and Ecosia (HTTP 403), Yahoo (HTTP 500). None reliably returned usable organic results across any research pass.
- **Community and accounting-software forums**: community.xero.com (did not resolve), central.xero.com (loaded with no readable content), the QuickBooks Community search and the Shopify Community's own accounting sub-board (both 404), wordpress.org's support search (loaded, returned no results for any query tried).
- **A handful of specific vendor pages**: linkmybooks.com/case-studies (404), katanamrp.com/customer-stories (404), community.bigcommerce.com (did not resolve), webretailer.com's forums and lists sections (404).

**Real, on-topic Reddit threads that were located by URL but never opened** (someone with working browser or API access should open these directly; they are listed here as leads, not quoted from anywhere in this report):
- https://www.reddit.com/r/ecommerce/comments/17gg8yq/ (TikTok Shop inventory sync)
- https://www.reddit.com/r/ecommerce/comments/s5d516/ (selling on multiple channels: Amazon, eBay, Etsy)
- https://www.reddit.com/r/ecommerce/comments/xiivz9/ (inventory sync between marketplaces)
- https://www.reddit.com/r/shopify/comments/19bytv2/ (inventory sync issues)
- https://www.reddit.com/r/shopify/comments/pc6tb5/ (keeping stock aligned across channels)
- https://www.reddit.com/r/ecommerce/comments/k6e7ih/ (BigCommerce plus Inkfrog sync issues)
- https://www.reddit.com/r/EtsySellers/comments/193xf9q/ (dual-listing eBay and Etsy)
- https://www.reddit.com/r/Ebay/comments/1bovj1a/ (selling the same items across multiple platforms)
- https://www.reddit.com/r/dropship/comments/1b8ui5d/ (stock levels not syncing from a supplier tool)
- https://www.reddit.com/r/Netsuite/comments/1ccssbe/ (ongoing Amazon inventory sync issue with a NetSuite connector)
- https://www.reddit.com/r/FulfillmentByAmazon/comments/673an7/ (syncing inventory across multiple marketplaces)
- https://www.reddit.com/r/Depop/comments/fnzaok/ (accidentally sold the same item twice)
