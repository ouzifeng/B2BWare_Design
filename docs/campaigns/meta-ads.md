# B2Bware Meta Ads Plan (UK)

One conversion everywhere: request a free order check (send a week of real orders, see how many would land in the ERP automatically, keep the findings either way).

## 1. Role of Meta in this plan

Meta's job here is narrower than Google's. Google Search catches people at the moment they already have the pain and go looking (searching "Sage 200 Shopify integration broken" or "trade portal for Sage 200"). Meta doesn't get that intent signal, so it earns its budget two ways:

1. **Cold prospecting, on the Emailed orders angle only.** This is the pain most UK buyers recognise on sight, whether or not they were actively looking for a fix today ("still keying PDF orders into Sage", "10 to 40 minutes to process one order"). That recognisability is exactly what scroll-stopping creative needs. Fix the link and Trade portal are both moment-of-pain or exact-intent angles ("it broke", "I need a portal that talks to Sage 200") that convert on search, not on an interrupt in a feed. Meta does not run cold prospecting on those two.
2. **Retargeting, on all three angles, for everyone who has visited the site.** Once someone has been to any B2Bware page, price and social proof do more work than a fresh pain hook, because they already know roughly what this is. Retargeting carries the price (from £5,000 to set up, then £300 a month), the Doppler proof point, and the free order check offer. Fix the link and Trade portal only appear here, matched to whoever visited that specific landing page.

**Be honest about the limits.** Meta cannot filter by job title, seniority or company size the way LinkedIn can. "Operations, sales or finance director at a 15 to 200 staff UK manufacturer" is not a targeting filter Meta offers; it's a description of who we hope sees the ad. Two consequences follow, and both shape the plan below:

- **Targeting goes broad, and the creative carries the aim.** Country (UK) and light interest layers are the only hard filters worth setting; the ERP names, the order-volume language and the buyer's own phrases in the ad copy do the actual audience selection, because Andromeda reads creative for persona signal.
- **The bad-fit exclusions in the brief (bespoke or configured products, a handful of orders a week, mid ERP migration, consumer retail, jobseekers, students, free/DIY seekers) are mostly not enforceable as Meta targeting filters.** Meta can exclude Job Seekers and Student/University interest categories at the margin. It cannot tell a 60-order-a-week distributor from a 6-order-a-week one, or a stocked-SKU manufacturer from a bespoke joinery shop. That filtering has to happen in the ad copy (naming stocked, coded products and "dozens of orders a week" so the wrong reader self-selects out) and in a quick manual read of each lead against the ICP list once it lands. Lookalike audiences, built from free order check form completions once there are enough of them, are the sharpest targeting lever available and should take over budget from the broad ad set as soon as they can run.

## 2. Campaign and ad set structure

```
Meta Ads account
├── Campaign: COLD - Emailed Orders (UK)
│   Objective: Leads (website conversions, optimising for free order check form submissions)
│   ├── Ad set: Broad + light interest layer
│   │   10 ad creatives (see section 5)
│   └── Ad set: Lookalike 1-3%, UK, seeded from free order check completions
│       (starts once 100+ form completions exist; until then this budget
│       share runs in the Broad ad set)
│
└── Campaign: RETARGETING - All Site Visitors (UK)
    Objective: Leads (website conversions, optimising for free order check form submissions)
    ├── Ad set: Visited emailed-orders.html, no conversion (30-day window)
    │   Emailed orders angle ads
    ├── Ad set: Visited fix-your-link.html, no conversion (30-day window)
    │   Fix the link angle ads
    ├── Ad set: Visited trade-portal.html, no conversion (30-day window)
    │   Trade portal angle ads
    └── Ad set: All other site visitors, no conversion (30-day window)
        Price, social proof and objection-handling ads (catch-all)
```

Once winners are proven (around week 3, see section 7), split the Broad ad set into the two-campaign Scaling/Testing structure: ~80% of cold budget to graduated ads, ~20% held in a protected testing slot for new concepts, so proven ads never starve new ones. Keep 6-10 active ads per ad set at any time; retire something before adding a new test once that ceiling is hit.

## 3. Objective: Leads via website form (recommended), not Instant Form

**Recommendation: Website conversions, optimising for the free order check form submission on b2bware's own landing pages.** Instant Form (native lead ads) is not the launch choice here, for three reasons:

1. **The offer needs qualifying detail an in-app form handles badly.** A free order check isn't a name-and-email download; it needs company, ERP in use, and roughly how many trade orders a week, to tell a good fit (dozens of orders a week, known ERP) from a bad one (a handful a week, mid-migration, bespoke products). A landing page form carries those fields naturally, alongside the price and the Doppler proof that pre-qualify the click before they even start typing. Instant Form's whole design is to strip friction, which strips exactly the fields that matter here.
2. **Runway is 2-3 months and the job is finding a winning angle fast.** That means judging landing-page and creative performance together is more useful than judging creative alone. Website conversions keep the headline-mirror discipline intact (the winning ad headline should read the same as the landing page it sends people to); an in-app form disconnects the click from the page and the proof entirely.
3. **Intentional friction is a quality filter, not just a drop-off risk.** Leaving the app, reading a published price, and submitting on B2Bware's own site is the "conscious act" this account needs from a lead, per the account's own decision system: low-intent scrollers self-select out before they ever reach the sales team.

**Fallback, watched not assumed:** if landing-page conversion rate comes in under roughly 2% after the first one to two weeks of real traffic (rather than the roughly 5%+ that would keep the landing page as the clear right call), test Instant Form as a second lane in week 3, using the Higher Intent form type, a required work email field (it can't auto-fill from a personal Facebook profile, which is the single biggest quality lever available in-form), and one or two qualifying multiple-choice questions (weekly order volume, ERP in use). Don't default to Instant Form on day one; earn the switch with data.

## 4. Budget split

No total budget figure was given, so everything below is a percentage of whatever the Meta budget is. It nests inside the wider plan's 60% Emailed orders / 30% Fix the link / 10% Trade portal split as follows: Meta's cold spend counts entirely toward the Emailed orders 60%, alongside Google's Emailed-orders spend; Meta's Fix the link and Trade portal spend is retargeting-only and sits inside the 30% and 10% buckets alongside Google, which will carry the larger share of those two angles since they're search-triggered.

**Within the Meta budget (100%):**

| Campaign | Ad set | Share of Meta budget |
|---|---|---|
| Cold - Emailed orders | Broad + light interest | 45% |
| Cold - Emailed orders | Lookalike (once live) | 20% |
| **Cold total** | | **65%** |
| Retargeting | Emailed orders (matched + catch-all default) | 15% |
| Retargeting | Fix the link (matched) | 12% |
| Retargeting | Trade portal (matched) | 8% |
| **Retargeting total** | | **35%** |

Reasoning: cold prospecting needs the bulk of spend because it's reaching a large, unqualified UK audience and needs enough volume across 10 creative to get a fast read; retargeting audiences are small by definition (site visitors on a niche B2B offer), so 35% is enough to keep frequency in a healthy band without over-spending against a shallow pool. Once the Lookalike ad set is live and outperforming Broad, shift further budget its way at the standard +20% every 5 days pace, never more than +30% in one move.

## 5. Placements

Start on **Advantage+ (automatic) placements** for both campaigns. Andromeda finds efficient inventory on its own, and statics deliver cheaply across placements, which matters more than manual placement picking at this budget size. Build every static at 1:1 and 4:5 at minimum so Feed and mobile Feed are both covered properly, and produce the one video concept (ad C8) natively in 9:16 with a safe-zone-respecting caption so it isn't excluded from Stories and Reels.

Review the placement breakdown at day 14. Audience Network is the most common leak for a B2B offer like this (low-relevance app and game inventory); if it's burning spend with zero qualified leads, exclude it manually rather than turning off Advantage+ placements entirely.

## 6. Frequency caps

- **Cold campaign:** no manual cap at launch. A broad UK working-age audience is large enough that frequency should sit in the safe band (1.0-2.5) without intervention. Check weekly; if an ad's frequency drifts into 2.5-4.0, that ad is due a fresh execution of the same angle, not a targeting change.
- **Retargeting campaign:** site-visitor pools on a niche UK B2B offer are small, so frequency climbs fast. Set an explicit **frequency cap of 4 impressions per person per rolling 7 days** at ad set level, the top of the safe band before the 4.0-6.0 warning zone. Refresh retargeting creative every 14 days rather than waiting the full 21-28 days statics can otherwise run, since a small pool fatigues faster than the general guidance assumes.

## 7. Testing plan: first 2-3 weeks

No CPA or budget target was given, so the plan below uses relative rules (multiples of spend, and lead quality against the brief's own ICP list) rather than invented pound figures. Once two to three weeks of real data exist, set a proper target cost per qualified lead from deal math (using the published £5,000 set-up / £300-a-month figures and the observed close rate) and switch to that.

**Week 1 (days 1-7): launch and delivery check.**
- Confirm the free order check form fires as a tracked conversion event before spending a pound.
- Launch all 10 cold ads in the Broad + light interest ad set, UK only, Advantage+ placements.
- Launch the retargeting campaign's four ad sets as soon as there is any site traffic to retarget (organic, Google, or early Meta cold clicks); it will start thin and build.
- At day 7, run the fair-share delivery check on every ad: an ad that's spent close to zero, or that Meta has visibly deprioritised, gets killed and replaced with a fresh hook or visual, not more patience. Don't judge quality yet; there isn't enough spend for that.

**Week 2 (days 8-14): first quality read.**
- Start reading every lead against the brief's ICP list by hand (UK manufacturer, distributor or wholesaler, 15-200 staff, stocked coded products, known ERP, dozens of orders a week or more) and flag bad fits (bespoke products, a handful of orders a week, mid-migration, consumer retail, jobseekers, students, free/DIY seekers).
- Any ad with meaningful spend and zero leads at this point is a non-performer: pause and swap the concept, don't iterate the same angle.
- Ads producing leads but a high bad-fit rate need the ad copy tightened toward more specific, self-qualifying language (name the ERP, name "dozens of orders a week") before more budget goes near them.

**Week 3 (days 15-21): graduate, swap or kill.**
- Score each ad's qualified rate (fits ÷ total leads). Ads at 60%+ qualified and running 14+ days with at least a handful of qualified leads graduate into the Scaling share of budget (see section 2). Ads at 40-60% get one more week to prove themselves. Ads under 40% qualified get swapped: keep the format, change the angle and the pre-qualifying language.
- In retargeting, check frequency against the 4/7-day cap and CTR trend; refresh anything approaching the cap or showing a CTR drop of 20%+ from its first week.
- By the end of week 3, aim to have at least two or three cold angles clearly ahead of the rest by qualified rate, and to have started the 80/20 Scaling/Testing split described in section 2.

**Kill / scale rules, stated once for reuse:**
- **Delivery kill:** near-zero spend by day 7 relative to its fair share of the ad set's budget → kill, replace hook or visual.
- **Non-performer kill:** meaningful spend, zero leads → kill, replace the concept (not just the copy).
- **Quality kill:** 5+ leads, qualified rate under 40% → kill the angle, keep the format, change the pre-qualifying language.
- **Scale:** qualified rate 60%+, running 14+ days, cost per qualified lead among the best in the batch → graduate to Scaling share; raise its budget +20% every 5 days, never more than +30% at once.
- **Retargeting fatigue:** frequency over 4/7 days, or CTR down 20%+ from its own first week → refresh creative within 7 days; never pause a retargeting ad set without a replacement staged.

## 8. Cold ads: Emailed orders angle (10)

All ten point to `emailed-orders.html`. Format is mostly static because Meta's 2026 delivery favours statics for cost and volume, with one short-video concept for the "retyping scene" the brief asks for. Creative briefs describe stylised, representative mockups of an ERP order screen, not an actual Sage screenshot.

---

### C1. Pain recognition (core positioning)
- **Primary text (short):** Still keying PDF orders into Sage by hand? Every order lands in your ERP. Nobody retyping it.
- **Primary text (long):** Every order that comes in by email or PDF still has to be read, checked and typed into Sage, line by line. Every route into your ERP, one team, run for you: emailed orders, your trade portal, or the link someone else built and left broken. Send us a week of your real orders and we will show you how many would land in your ERP automatically. You keep the findings either way. Get a free order check.
- **Headline:** Still Keying Orders Into Sage?
- **Description:** Free order check. See what lands automatically.
- **CTA button:** Learn More
- **Landing page:** emailed-orders.html
- **Creative brief:** Static, 1:1. On-image text: "Still keying PDF orders into Sage?" Shown: a split image. Left half, a desk with a printed PDF order, a highlighter and sticky notes, an open email inbox visible. Right half, a plain stylised ERP order screen (representative mockup, not an actual Sage screenshot) showing an order number, customer name and a status marked "Complete" in green. Thin vertical divider between the two halves.

### C2. Time cost (buyer's own words)
- **Primary text (short):** "It can take 10 to 40 minutes to process just one order." Sound familiar? Every order in your ERP, nobody retyping it.
- **Primary text (long):** Buyers keying in emailed orders tell us the same thing: one order, ten to forty minutes, line by line, before it's even in the ERP. Multiply that by every order your team processes this week. We take email, PDF and Excel orders and get the finished sales order into Sage, Business Central, NetSuite or your ERP, with your team approving before anything posts. Send a week of real orders for a free check and see how many would go through automatically.
- **Headline:** 10 to 40 Minutes. One Order.
- **Description:** Free order check on your real orders.
- **CTA button:** Learn More
- **Landing page:** emailed-orders.html
- **Creative brief:** Static, 4:5. On-image text: "10 to 40 minutes. One order." Shown: a stopwatch or clock graphic overlaying a stack of printed PDF orders and an open spreadsheet, muted colour palette, minimal design, no stock photo faces.

### C3. Clerk cost vs fixed fee
- **Primary text (short):** Hiring another admin to key in orders costs a lot more than £300 a month. Every order in your ERP, nobody retyping it.
- **Primary text (long):** Someone on your team is retyping line items that already exist in an email or a PDF. The usual fix is another pair of hands. The other option: every order lands in your ERP automatically, checked and approved by your team first, from £5,000 to set up and £300 a month with 1,000 orders included. Get a free order check and see how many of your real orders would go through without anyone retyping them.
- **Headline:** A Clerk's Wage, Or £300 A Month
- **Description:** From £5,000 to set up, £300 a month.
- **CTA button:** Learn More
- **Landing page:** emailed-orders.html
- **Creative brief:** Static, 1:1. On-image text: "A clerk's wage. Or £300 a month." Shown: two plain stacked bar shapes side by side, left labelled "another admin hire" (no number on this side, purely comparative), right labelled "£300/month" (the only figure shown, matching the published price). Flat colour blocks, no currency-symbol icons or invented figures.

### C4. Accuracy and approval reassurance
- **Primary text (short):** Worried it will get an order wrong? Your team checks and approves before anything posts. Every order in your ERP, nobody retyping it.
- **Primary text (long):** The question we hear most isn't whether this can read an order. It's whether it will actually go into your ERP, and whether your team gets to check it first. It does, and they do. Contract prices, pack sizes, credit holds and stock are checked, and your team approves before anything posts. Then it lands as a finished sales order in Sage, Business Central, NetSuite or your ERP. Send a week of real orders for a free check, no cost, no commitment.
- **Headline:** You Approve Every Order First
- **Description:** Checked and approved before it posts.
- **CTA button:** Learn More
- **Landing page:** emailed-orders.html
- **Creative brief:** Static, 4:5. On-image text: "You approve every order first." Shown: a simple three-step horizontal strip: an email/PDF icon, an arrow to a checkmark icon next to a small human silhouette (the approval step), an arrow to a plain ERP order screen mockup marked "Complete".

### C5. Every customer, a different format
- **Primary text (short):** PDF, Excel, a scanned form, an email with no attachment at all. Every order still lands in your ERP, nobody retyping it.
- **Primary text (long):** Every customer sends orders their own way: a PDF, an Excel sheet, a scanned form, sometimes just a list typed into the body of an email. Someone on your team still has to turn all of it into a sales order in Sage, Business Central or NetSuite. We take every route in and get the finished order into your ERP, with your team approving first. Send a week of your real orders for a free check and see how many would go through automatically.
- **Headline:** A Different Format, Every Order
- **Description:** Every format, one team, one ERP order.
- **CTA button:** Learn More
- **Landing page:** emailed-orders.html
- **Creative brief:** Static, 1:1. On-image text: "Every customer. A different format." Shown: a fan of small document icons (PDF, spreadsheet, scanned page, plain email) converging with arrows into one plain ERP order screen mockup.

### C6. Growth without more admin headcount
- **Primary text (short):** More trade orders shouldn't mean hiring more people to key them in. Every order in your ERP, nobody retyping it.
- **Primary text (long):** More orders usually means more admin hours, unless the order goes straight into your ERP once your team has approved it. Emailed orders, your trade portal, or the ERP link someone else built and left broken: every route, one team, run for you, from £5,000 to set up and £300 a month with 1,000 orders included. Get a free order check on a week of your real orders and see what would land automatically.
- **Headline:** Grow Orders. Not Your Admin Team.
- **Description:** One team, every route, £300 a month.
- **CTA button:** Learn More
- **Landing page:** emailed-orders.html
- **Creative brief:** Static, 4:5. On-image text: "Grow orders. Not your admin team." Shown: a simple two-line chart, an upward line for "orders" next to a flat line for "admin hours", plain two-colour chart style, no photography.

### C7. "Held together with tape" (buyer's own metaphor)
- **Primary text (short):** "Held together with tape." That's how buyers describe it. Every order in your ERP, nobody retyping it.
- **Primary text (long):** Spreadsheets, printed emails, a workaround someone built a few years ago that nobody wants to touch. It works, until it doesn't. We get every trade order into your ERP, by whatever route fits, and we run it and fix it when it breaks. Free order check: send a week of your real orders and see how many would land automatically. You keep the findings either way.
- **Headline:** Held Together With Tape?
- **Description:** We run it, and fix it when it breaks.
- **CTA button:** Learn More
- **Landing page:** emailed-orders.html
- **Creative brief:** Static, 1:1. On-image text: "Held together with tape?" Shown: a literal strip of gaffer tape crossing a stylised diagram of three boxes labelled "Orders", "Sage" and "Warehouse" connected by dotted lines, a slightly worn, hand-made visual texture rather than a glossy render.

### C8. The retyping scene (short video)
- **Primary text (short):** Watch an emailed order become a finished Sage sales order, with nobody retyping it.
- **Primary text (long):** This is what happens to a trade order once you stop keying it in by hand: an emailed PDF order arrives, gets matched to your part codes and prices, your team approves it, and it lands as a finished sales order in Sage, Business Central or NetSuite. No more retyping line items. Get a free order check: send us a week of your real orders and see how many would go through automatically.
- **Headline:** PDF Order To Finished Sage Order
- **Description:** See the order move from inbox to ERP.
- **CTA button:** Learn More
- **Landing page:** emailed-orders.html
- **Creative brief:** Short video, 9:16, 15-20 seconds, captions burned in (assume sound off). 0-3s: hook shot of a hand about to start retyping a printed PDF order into a spreadsheet, caption "Still typing this in by hand?" 3-10s: screen-recording style transition, the PDF order dissolves into a plain ERP order screen mockup (Sage-style list view, representative only, not an actual screenshot), line items filling in one by one, caption "Every order lands in your ERP." 10-15s: a checkmark/approval tick appears next to the order, caption "Your team approves it first." 15-20s: end card, "Every order in your ERP. Nobody retyping it." with "Get a free order check" and the B2Bware name.

### C9. Owner identity (buyer's own line)
- **Primary text (short):** "I'm a manufacturer, not a data entry clerk." Every order in your ERP, nobody retyping it.
- **Primary text (long):** You run a manufacturing, distribution or wholesale business, not a typing pool. Somewhere along the way, keying in emailed orders became someone's whole job. We get every trade order into your ERP, checked and approved by your team first, and we keep it running. Free order check: send a week of your real orders and see how many would land automatically.
- **Headline:** You're A Manufacturer, Not A Clerk
- **Description:** Free order check on your real orders.
- **CTA button:** Learn More
- **Landing page:** emailed-orders.html
- **Creative brief:** Static, 4:5. On-image text: "You're a manufacturer. Not a data entry clerk." Shown: a plain warehouse shelf/stock silhouette icon on one side and a crossed-out keyboard icon on the other, simple two-tone illustration, no stock photography of people.

### C10. One team owns every route (differentiation)
- **Primary text (short):** Order-reading tools stop at the inbox. Portal apps stop at the portal. We get the order into your ERP and keep it working.
- **Primary text (long):** Most tools read the order or run the portal, then leave the ERP end to you. We do the whole route: email, PDF and Excel orders, your trade portal, or the link someone else built and left broken, and get a finished sales order into Sage, Business Central, NetSuite or your ERP. One team, every route, and we fix it when it breaks. Get a free order check and see how many of your real orders would land automatically.
- **Headline:** One Team Owns Every Order Route
- **Description:** Every route, one team, one ERP order.
- **CTA button:** Learn More
- **Landing page:** emailed-orders.html
- **Creative brief:** Static, 1:1. On-image text: "One team. Every order route." Shown: three small icons (an envelope for emailed orders, a browser window for the trade portal, a broken-then-joined chain link for a fixed connection), each with an arrow pointing into one plain ERP order screen mockup.

## 9. Retargeting ads (6)

Matched to whoever visited that angle's landing page where noted; the two catch-all ads run against everyone else who visited the site without converting.

---

### R1. Emailed orders retargeting: price transparency
- **Primary text (short):** The price is on the website. From £5,000 to set up, then £300 a month with 1,000 orders included. Free order check first.
- **Primary text (long):** No quote process, no waiting for a number. From £5,000 to set up, then £300 a month with 1,000 orders included, extra orders at about 15p each. That covers your ERP link, order reading, reporting and support, and we fix it when it breaks. Before you commit to anything, send us a week of your real orders. Free order check, you keep the findings either way.
- **Headline:** From £5,000. £300 A Month After
- **Description:** Price is on the website. No quote process.
- **CTA button:** Sign Up
- **Landing page:** emailed-orders.html
- **Creative brief:** Static, 1:1. On-image text: "From £5,000. Then £300 a month." Shown: a simple two-line price card graphic (set-up figure, then monthly figure), plain typography, brand colours only, no competitor comparison.
- **Retargets:** visitors to emailed-orders.html, no conversion.

### R2. Fix the link retargeting
- **Primary text (short):** Shop and ERP out of step again? We take over the link someone else built, and keep it working.
- **Primary text (long):** An integration someone built a while ago starts drifting: stock is wrong, prices don't match, orders land twice or not at all, and nobody's quite sure who's meant to fix it. We take over the link between your shop and your ERP, whoever built it, and we keep it working. One team, one number to call when something breaks. Free order check: send a week of your real orders and see how many would land correctly.
- **Headline:** Your Shop And ERP, Back In Step
- **Description:** We take over the link and keep it working.
- **CTA button:** Sign Up
- **Landing page:** fix-your-link.html
- **Creative brief:** Static, 4:5. On-image text: "Shop and ERP, out of step again?" Shown: two plain boxes labelled "Shop" and "ERP" connected by a frayed, broken dotted line with a small warning triangle, beside a second version of the same two boxes connected by a solid line. No invented shop-platform branding.
- **Retargets:** visitors to fix-your-link.html, no conversion.

### R3. Trade portal retargeting
- **Primary text (short):** Trade customers see their own prices online, and the order lands straight in your ERP.
- **Primary text (long):** Your trade customers want to see their own prices and reorder online, not phone or email it in. We build, or fix, a trade portal with each customer's own catalogue and prices pulled from your ERP, and every order they place lands as a finished sales order, checked against contract prices and stock first. Free order check: send us a week of your real orders and see how many would go through automatically.
- **Headline:** Trade Prices Online. In Your ERP.
- **Description:** Their prices, your ERP, one finished order.
- **CTA button:** Sign Up
- **Landing page:** trade-portal.html
- **Creative brief:** Static, 1:1. On-image text: "Trade prices online. Straight into your ERP." Shown: a plain browser-window mockup with a simple product list and "your price" labels, arrow into a plain ERP order screen mockup, both generic and unbranded.
- **Retargets:** visitors to trade-portal.html, no conversion.

### R4. Social proof: Doppler
- **Primary text (short):** Doppler, umbrella and parasol manufacturer, cut order entry time by 70% once orders landed straight in their ERP.
- **Primary text (long):** Doppler's sales agents now order with live ERP pricing and customer-specific discounts, and order entry runs 70% faster than before. Kienesberger and Harrows Darts run the same way: trade orders landing straight in the ERP, checked and approved, nobody retyping them. We connect to 400+ systems including Sage 200, Business Central and NetSuite. Free order check: send a week of your real orders and see how many would land automatically.
- **Headline:** 70% Faster Order Entry: Doppler
- **Description:** 70% faster order entry for Doppler.
- **CTA button:** Learn More
- **Landing page:** index.html#check
- **Creative brief:** Static, 4:5. On-image text: "Doppler: 70% faster order entry." Shown: a single large "70%" as the dominant visual element, "Doppler, umbrella and parasol manufacturer" in smaller type beneath, plain brand-colour background, company name in text only (no logo).
- **Retargets:** all site visitors, no conversion (catch-all).

### R5. Accuracy and approval: objection-handling
- **Primary text (short):** Worried an automated order could go in wrong? Nothing posts to your ERP until your team has checked it.
- **Primary text (long):** The most common question we get is whether this actually goes into the ERP, or just reads the order and stops. It goes in, as a finished sales order, and not before your team has checked contract prices, pack sizes, credit holds and stock. You approve it first. It runs on its own once you're comfortable. Free order check: send a week of your real orders and see how many would land automatically, with nothing posted without your say so.
- **Headline:** Nothing Posts Until You Approve
- **Description:** Checked, approved, then it lands in the ERP.
- **CTA button:** Learn More
- **Landing page:** index.html#check
- **Creative brief:** Static, 1:1. On-image text: "Nothing posts until you approve it." Shown: a plain order screen mockup with a visible "Awaiting approval" tag next to a checkbox and a checkmark icon, calm colour palette, no urgency red tones.
- **Retargets:** all site visitors, no conversion (catch-all).

### R6. Value-first: the free order check itself
- **Primary text (short):** Send a week of your real orders. We show you how many would land in your ERP automatically. You keep the findings either way.
- **Primary text (long):** No cost, no commitment. Send us a week of your real trade orders and we'll show you exactly how many would land in your ERP automatically, and where the gaps are. You keep the findings whether you go any further with us or not. It's the fastest way to see what this would actually do for your team, on your own orders, not a demo.
- **Headline:** Free Order Check. Keep The Findings.
- **Description:** No cost. You keep the findings either way.
- **CTA button:** Sign Up
- **Landing page:** index.html#check
- **Creative brief:** Static, 4:5. On-image text: "Free order check. Keep the findings either way." Shown: a simple document/report icon with a magnifying glass over a stack of order icons, plain two-colour illustration, clean uncluttered layout, no badges or starbursts.
- **Retargets:** all site visitors, no conversion (catch-all).

## 10. LinkedIn note (not built out here)

LinkedIn is the better channel for job-title precision: it can filter directly on "Operations Director", "Sales Director", "Finance Director" and company size, which Meta cannot. Given the ICP here is title-specific and the audience is small (UK manufacturers, distributors and wholesalers, 15-200 staff), a modest LinkedIn test aimed at those titles would likely produce a higher-fit lead pool per pound spent than Meta's broad targeting ever will, at a higher CPC. Worth a small test once the winning angle from Meta and Google is known, so the creative doesn't have to be built twice from scratch. Out of scope to build out in this plan.
