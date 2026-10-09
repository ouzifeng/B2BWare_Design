# B2Bware: Google Ads (Search) plan, UK

One goal everywhere: a free order check form submit (`index.html#check`). Runway is 2 to 3 months, so this plan is built to find the winning angle fast, not to run a polished account for a year. UK search volume below is unverified: every keyword must be checked in Keyword Planner before budget is committed, and any ad group that comes back near-zero volume should be flagged in the week 1 review, not launched blind.

---

## 1. Account structure

### Campaigns (one per angle)

| Campaign | Angle | Landing page | Budget share |
|---|---|---|---|
| B2Bware - Emailed Orders - UK | Route 2: PDF/email orders keyed into the ERP | `emailed-orders.html` | 60% |
| B2Bware - Fix The Link - UK | Route 3: broken or abandoned ERP/webshop connector | `fix-your-link.html` | 30% |
| B2Bware - Trade Portal - UK | Route 1: B2B portal linked to the ERP | `trade-portal.html` | 10% |

The split follows the brief's read on evidence strength: emailed orders is the strongest, most common pain in the research; fix-the-link has the clearest trigger and best evidence people pay someone to fix it; trade portal is real but small and crowded, so it gets exact-intent budget only. Each campaign has its own budget (never shared) so one angle cannot starve the others of data before the 2-week read.

No brand campaign yet: B2Bware has no measurable brand search volume. Watch the search-terms report in every campaign for "b2bware" queries; if any appear, break out a small brand campaign in week 2 rather than waiting for the full account rebuild.

### Bidding approach (new account, few or no conversions)

- **Day 1 to first verified conversion:** Maximize Clicks with a manual max CPC cap (roughly the mid-point of the £8 to £30 range typical for UK B2B non-brand search, tightened once Keyword Planner gives real bid estimates). This is only to confirm tracking fires correctly and to see real click volume and cost before trusting Smart Bidding with zero data.
- **Once the free order check conversion is confirmed firing on a real test submission:** switch every campaign to Maximize Conversions, no target CPA. All three campaigns will sit in the 0-15 conversions/month band for most or all of the 2-3 month runway, and that band calls for Maximize Conversions or manual CPC, not a tCPA target.
- **Do not set Target CPA** in this account inside the runway window. Target CPA needs roughly 30 conversions/month, sustained, to bid sensibly. At the budget split above that is realistic only for the Emailed Orders campaign, and only if week 1 to 2 shows a strong conversion rate. Revisit after week 2 with real numbers, not before.
- Move any bid or budget change in small steps and wait several days before judging it; every change restarts learning.

### Location, language, schedule

- **Location:** United Kingdom (England, Scotland, Wales, Northern Ireland). Location option set to **Presence**: people physically in the UK, not the "presence or interest" default, which would serve people abroad who are merely interested in the UK.
- **Language:** English (this targets by the user's Google interface language, not the query language, so it is a coarse filter, not a guarantee).
- **Schedule:** run all days, all hours for the first 2 weeks. Owners and directors search for this kind of fix outside 9-to-5, and the account has no data yet to say otherwise. After week 2, pull the Ad Schedule report and apply bid adjustments to the weakest hours if budget is tight; do not exclude hours outright until there is real data behind it.

### Conversion tracking to set up

1. **Primary conversion: "Free order check submitted."** Fire on the confirmation step after the form at `index.html#check` is successfully submitted (thank-you state, not the click that opens the form). Set up as a website conversion action via Google Ads tag or Google Tag Manager, category "Submit lead form," count "One," status **Primary**, included in the "Conversions" column so Maximize Conversions optimises toward it. Test with one real submission before any campaign goes live, per the standard pre-launch checklist.
2. **Secondary micro-conversion: "Free order check CTA clicked."** Fire when a visitor clicks the "Get a free order check" button to open the form, before they submit it. Set this up as a separate conversion action, category "Other engagement" or "Page interaction," status **Secondary**, and exclude it from the main "Conversions" column so it does not dilute the Smart Bidding signal meant for actual submits. Its job is diagnostic: with so few expected primary conversions in the first 2 weeks, the CTA-click rate is the earliest read on whether an ad group's traffic is even reaching the form, and whether the drop-off is in the ad, the landing page, or the form itself.
3. Link GA4 for a secondary read on both events, and enable enhanced conversions if the form captures an email address, to reduce measurement loss from browser privacy changes.
4. Import CRM outcomes (checked order sent through, then any deal progress) back into Google Ads as offline conversions as soon as there is a CRM stage to import from. In-platform submits will over-count "interest" against real pipeline; this is the single highest-leverage fix once there is volume to reconcile against.

---

## 2. Campaign 1: Emailed Orders (60% of budget)

Landing page: `emailed-orders.html`. Message-match line the hero must contain: **"Still keying PDF orders into Sage? Every order in your ERP. Nobody retyping it."**

### Ad groups and keywords

**AG1: Sage 200 - Emailed Orders**
- "sage 200 order entry automation" (Phrase)
- [sage 200 order entry automation] (Exact)
- "email orders into sage 200" (Phrase)
- "pdf orders into sage 200" (Phrase)
- "automate sage 200 sales orders" (Phrase)
- [sage 200 sales order automation] (Exact)
- "sage 200 order processing software" (Phrase)

**AG2: Sage 50 - Emailed Orders**
- "sage 50 order entry automation" (Phrase)
- [sage 50 order entry automation] (Exact)
- "email orders into sage 50" (Phrase)
- "pdf orders into sage 50" (Phrase)
- "automate sage 50 sales orders" (Phrase)
- [sage 50 order automation] (Exact)
- "sage 50 order processing" (Phrase)

**AG3: Business Central & NetSuite - Emailed Orders**
(Combined: UK volume for either ERP alone paired with this exact problem is likely thin; verify in Keyword Planner before splitting into two groups.)
- "business central order automation" (Phrase)
- [business central order automation] (Exact)
- "email orders into business central" (Phrase)
- "netsuite order entry automation" (Phrase)
- [netsuite order automation] (Exact)
- "email orders into netsuite" (Phrase)
- "pdf orders into netsuite" (Phrase)

**AG4: Alternatives - Emailed Orders**
(Keyword only on competitor/alternative names; never in ad copy.)
- "workist alternative" (Phrase)
- "conexiom alternative" (Phrase)
- "turian alternative" (Phrase)
- "ebridge connections alternative" (Phrase)
- "workist pricing" (Phrase)
- "conexiom pricing" (Phrase)

### RSA1 - AG1: Sage 200 - Emailed Orders

Final URL: `https://b2bware.com/emailed-orders.html`
Path1: emailed-orders   Path2: sage-200

Headlines (15, each <=30 chars):
1. Still Keying Sage 200 Orders? (29 chars)
2. Every Order In Your ERP (23 chars)
3. Nobody Retyping It (18 chars)
4. PDF Orders Into Sage 200 (24 chars)
5. Sage 200 Order Automation (25 chars)
6. Stop Retyping PDF Orders (24 chars)
7. Emailed Orders, Automated (25 chars)
8. From £5,000 Set Up (18 chars)
9. Then £300 A Month (17 chars)
10. Free Order Check First (22 chars)
11. See Your Real Order Data (24 chars)
12. One Team, Every Route (21 chars)
13. We Fix It When It Breaks (24 chars)
14. 400+ Systems Connected (22 chars)
15. Get A Free Order Check (22 chars)

Descriptions (4, each <=90 chars):
1. Every order lands in Sage 200. Nobody retyping it. From £5,000, then £300 a month. (82 chars)
2. Free order check: send a week of real orders, see what lands automatically. (75 chars)
3. One team handles every route in and keeps it working when it breaks. (68 chars)
4. 400+ systems connected, including Sage 200, Sage 50 and Business Central. (73 chars)

Pinning: H1 pinned to headline 1 (keeps the Sage 200 match visible for relevance and Quality Score). All other headlines and descriptions unpinned.

### RSA2 - AG2: Sage 50 - Emailed Orders

Final URL: `https://b2bware.com/emailed-orders.html`
Path1: emailed-orders   Path2: sage-50

Headlines (15, each <=30 chars):
1. Still Keying Sage 50 Orders? (28 chars)
2. Every Order In Your ERP (23 chars)
3. Nobody Retyping It (18 chars)
4. PDF Orders Into Sage 50 (23 chars)
5. Sage 50 Order Automation (24 chars)
6. Stop Retyping PDF Orders (24 chars)
7. Emailed Orders, Automated (25 chars)
8. From £5,000 Set Up (18 chars)
9. Then £300 A Month (17 chars)
10. Free Order Check First (22 chars)
11. See Your Real Order Data (24 chars)
12. One Team, Every Route (21 chars)
13. We Fix It When It Breaks (24 chars)
14. 400+ Systems Connected (22 chars)
15. Get A Free Order Check (22 chars)

Descriptions (4, each <=90 chars):
1. Every order lands in Sage 50. Nobody retyping it. From £5,000, then £300 a month. (81 chars)
2. Free order check: send a week of real orders, see what lands automatically. (75 chars)
3. One team handles every route in and keeps it working when it breaks. (68 chars)
4. 400+ systems connected, including Sage 50, Sage 200 and Business Central. (73 chars)

Pinning: H1 pinned to headline 1. All other headlines and descriptions unpinned.

### RSA3 - AG3: Business Central & NetSuite - Emailed Orders

Final URL: `https://b2bware.com/emailed-orders.html`
Path1: emailed-orders   Path2: your-erp

Headlines (15, each <=30 chars):
1. Orders Into Business Central (28 chars)
2. NetSuite Order Automation (25 chars)
3. Every Order In Your ERP (23 chars)
4. Nobody Retyping It (18 chars)
5. PDF Orders, Automated (21 chars)
6. Stop Retyping PDF Orders (24 chars)
7. From £5,000 Set Up (18 chars)
8. Then £300 A Month (17 chars)
9. Free Order Check First (22 chars)
10. See Your Real Order Data (24 chars)
11. One Team, Every Route (21 chars)
12. We Fix It When It Breaks (24 chars)
13. 400+ Systems Connected (22 chars)
14. Get A Free Order Check (22 chars)
15. Emailed Orders, Automated (25 chars)

Descriptions (4, each <=90 chars):
1. Every order lands in your ERP. Nobody retyping it. From £5,000, then £300 a month. (82 chars)
2. Works with Business Central and NetSuite. Free order check on your real orders. (79 chars)
3. One team handles every route in and keeps it working when it breaks. (68 chars)
4. 400+ systems connected, including Business Central, NetSuite and Sage 200. (74 chars)

Pinning: H1 pinned to headline 1. All other headlines and descriptions unpinned.

### RSA4 - AG4: Alternatives - Emailed Orders

Final URL: `https://b2bware.com/pricing.html`
Path1: pricing   Path2: order-check

Headlines (15, each <=30 chars):
1. Already Have A Reading Tool? (28 chars)
2. Beyond Reading The Order (24 chars)
3. More Than Just Reading PDFs (27 chars)
4. One Team, Order To ERP (22 chars)
5. Every Order In Your ERP (23 chars)
6. Nobody Retyping It (18 chars)
7. Stop Retyping PDF Orders (24 chars)
8. From £5,000 Set Up (18 chars)
9. Then £300 A Month (17 chars)
10. Free Order Check First (22 chars)
11. One Team, Every Route (21 chars)
12. We Fix It When It Breaks (24 chars)
13. 400+ Systems Connected (22 chars)
14. Get A Free Order Check (22 chars)
15. See Your Real Order Data (24 chars)

Descriptions (4, each <=90 chars):
1. Not just reading the order. It lands in your ERP too. From £5,000, then £300 a month. (85 chars)
2. Already have a reading tool? We take it from read to posted, and own the link. (78 chars)
3. Free order check: see how your real orders would flow before you switch anything. (81 chars)
4. One team, every route in. 400+ systems connected, including Sage and NetSuite. (78 chars)

Pinning: H1 pinned to headline 1 (this group targets buyers already comparing tools, so the "already have a reading tool" framing needs to lead). All other headlines and descriptions unpinned.

### Negative keywords, campaign-level (Emailed Orders)

- edi
- ocr software
- invoice automation
- accounts payable
- purchasing software
- procurement software
- order entry clerk jobs
- data entry jobs
- power automate
- zapier
- make.com
- n8n

---

## 3. Campaign 2: Fix The Link (30% of budget)

Landing page: `fix-your-link.html`. Message-match line the hero must contain: **"Shop and ERP out of step again? We take over the link someone else built, and keep it working."**

### Ad groups and keywords

**AG1: Sage 200 - Fix The Link**
- "sage 200 shopify integration broken" (Phrase)
- "fix sage 200 integration" (Phrase)
- "sage 200 ecommerce connector not working" (Phrase)
- "sage 200 webshop sync issue" (Phrase)
- [sage 200 integration repair] (Exact)
- "sage 200 connector problem" (Phrase)

**AG2: NetSuite - Fix The Link**
- "netsuite shopify integration broken" (Phrase)
- "fix netsuite connector" (Phrase)
- "netsuite b2b integration problem" (Phrase)
- "netsuite ecommerce sync issue" (Phrase)
- [netsuite integration repair] (Exact)
- "netsuite connector not working" (Phrase)

**AG3: Business Central, SAP Business One & IFS - Fix The Link**
(Combined: each ERP alone is thin evidence for this exact query in the UK; verify individually in Keyword Planner before splitting.)
- "business central shopify integration broken" (Phrase)
- "fix business central connector" (Phrase)
- "sap business one integration problem" (Phrase)
- "sap business one connector fix" (Phrase)
- "ifs erp integration problem" (Phrase)
- "ifs connector not working" (Phrase)

**AG4: Alternatives - Fix The Link**
(Keyword only on competitor/alternative names; never in ad copy.)
- "patchworks alternative" (Phrase)
- "codeless platforms alternative" (Phrase)
- "celigo alternative" (Phrase)
- "celigo pricing" (Phrase)
- "codeless platforms pricing" (Phrase)
- "patchworks pricing" (Phrase)

### RSA1 - AG1: Sage 200 - Fix The Link

Final URL: `https://b2bware.com/fix-your-link.html`
Path1: fix-your-link   Path2: sage-200

Headlines (15, each <=30 chars):
1. Sage 200 Link Broken Again? (27 chars)
2. We Take Over The Link (21 chars)
3. And Keep It Working (19 chars)
4. Fix Your Sage 200 Connector (27 chars)
5. Shop And ERP Out Of Step? (25 chars)
6. From £5,000 To Fix It (21 chars)
7. Then £300 A Month (17 chars)
8. One Team, One Price (19 chars)
9. We Fix What Breaks (18 chars)
10. Free Order Check First (22 chars)
11. 400+ Systems Connected (22 chars)
12. Whoever Built The Other End (27 chars)
13. Nobody Knew What Broke (22 chars)
14. Get A Free Order Check (22 chars)
15. Get The Link Working Again (26 chars)

Descriptions (4, each <=90 chars):
1. We take over the Sage 200 link someone else built, and keep it working. One price. (82 chars)
2. Free order check: see how your orders flow before you commit to anything. (73 chars)
3. From £5,000 to fix and finish the link, then £300 a month, 1,000 orders included. (81 chars)
4. 400+ systems connected. We fix what breaks, whoever built the other end. (72 chars)

Pinning: H1 pinned to headline 1. All other headlines and descriptions unpinned.

### RSA2 - AG2: NetSuite - Fix The Link

Final URL: `https://b2bware.com/fix-your-link.html`
Path1: fix-your-link   Path2: netsuite

Headlines (15, each <=30 chars):
1. NetSuite Link Broken Again? (27 chars)
2. We Take Over The Link (21 chars)
3. And Keep It Working (19 chars)
4. Fix Your NetSuite Connector (27 chars)
5. Shop And ERP Out Of Step? (25 chars)
6. From £5,000 To Fix It (21 chars)
7. Then £300 A Month (17 chars)
8. One Team, One Price (19 chars)
9. We Fix What Breaks (18 chars)
10. Free Order Check First (22 chars)
11. 400+ Systems Connected (22 chars)
12. Whoever Built The Other End (27 chars)
13. Nobody Knew What Broke (22 chars)
14. Get A Free Order Check (22 chars)
15. Get The Link Working Again (26 chars)

Descriptions (4, each <=90 chars):
1. We take over the NetSuite link someone else built, and keep it working. One price. (82 chars)
2. Free order check: see how your orders flow before you commit to anything. (73 chars)
3. From £5,000 to fix and finish the link, then £300 a month, 1,000 orders included. (81 chars)
4. 400+ systems connected. We fix what breaks, whoever built the other end. (72 chars)

Pinning: H1 pinned to headline 1. All other headlines and descriptions unpinned.

### RSA3 - AG3: Business Central, SAP Business One & IFS - Fix The Link

Final URL: `https://b2bware.com/fix-your-link.html`
Path1: fix-your-link   Path2: your-erp

Headlines (15, each <=30 chars):
1. Your ERP Link Broken Again? (27 chars)
2. Business Central, IFS, SAP (26 chars)
3. We Take Over The Link (21 chars)
4. And Keep It Working (19 chars)
5. Shop And ERP Out Of Step? (25 chars)
6. From £5,000 To Fix It (21 chars)
7. Then £300 A Month (17 chars)
8. One Team, One Price (19 chars)
9. We Fix What Breaks (18 chars)
10. Free Order Check First (22 chars)
11. 400+ Systems Connected (22 chars)
12. Whoever Built The Other End (27 chars)
13. Nobody Knew What Broke (22 chars)
14. Get A Free Order Check (22 chars)
15. Get The Link Working Again (26 chars)

Descriptions (4, each <=90 chars):
1. We take over the link someone else built, and keep it working. One team, one price. (83 chars)
2. Works with Business Central, SAP Business One and IFS. Free order check first. (78 chars)
3. From £5,000 to fix and finish the link, then £300 a month, 1,000 orders included. (81 chars)
4. 400+ systems connected. We fix what breaks, whoever built the other end. (72 chars)

Pinning: H1 pinned to headline 1. All other headlines and descriptions unpinned.

### RSA4 - AG4: Alternatives - Fix The Link

Final URL: `https://b2bware.com/pricing.html`
Path1: pricing   Path2: fix-your-link

Headlines (15, each <=30 chars):
1. Tired Of Chasing Support? (25 chars)
2. We Take Over The Link (21 chars)
3. And Keep It Working (19 chars)
4. One Team, One Price (19 chars)
5. Shop And ERP Out Of Step? (25 chars)
6. From £5,000 To Fix It (21 chars)
7. Then £300 A Month (17 chars)
8. We Fix What Breaks (18 chars)
9. Free Order Check First (22 chars)
10. 400+ Systems Connected (22 chars)
11. Whoever Built The Other End (27 chars)
12. Nobody Knew What Broke (22 chars)
13. Get A Free Order Check (22 chars)
14. Get The Link Working Again (26 chars)
15. Price On The Website (20 chars)

Descriptions (4, each <=90 chars):
1. Not software to run yourself. One team takes over the link and keeps it working. (80 chars)
2. Free order check: see how your orders flow before you commit to anything. (73 chars)
3. From £5,000 to fix and finish the link, then £300 a month, 1,000 orders included. (81 chars)
4. 400+ systems connected. We fix what breaks, whoever built the other end. (72 chars)

Pinning: H1 pinned to headline 1 (this group targets buyers frustrated with an existing vendor, so the frustration line needs to lead). All other headlines and descriptions unpinned.

### Negative keywords, campaign-level (Fix The Link)

- api documentation
- developer docs
- integration developer jobs
- how to build an integration
- shopify theme
- shopify support
- wordpress plugin
- woocommerce plugin free
- zapier
- make.com

---

## 4. Campaign 3: Trade Portal (10% of budget)

Landing page: `trade-portal.html`. Message-match line the hero must contain: **"Trade customers see their own prices online, and the order lands in your ERP."**

### Ad groups and keywords

**AG1: Sage 200 - Trade Portal**
- "sage 200 b2b portal" (Phrase)
- "sage 200 trade portal" (Phrase)
- "b2b ecommerce for sage 200" (Phrase)
- [sage 200 b2b portal] (Exact)
- "sage 200 online ordering portal" (Phrase)

**AG2: Business Central & NetSuite - Trade Portal**
- "business central b2b portal" (Phrase)
- "netsuite b2b portal" (Phrase)
- "trade portal for netsuite" (Phrase)
- "b2b ecommerce business central" (Phrase)
- [netsuite b2b portal] (Exact)

**AG3: Alternatives - Trade Portal**
(Keyword only on competitor/alternative names; never in ad copy.)
- "gob2b alternative" (Phrase)
- "sana commerce alternative" (Phrase)
- "sparklayer alternative" (Phrase)
- "orocommerce alternative" (Phrase)
- "b2b wave alternative" (Phrase)
- "k-ecommerce alternative" (Phrase)

### RSA1 - AG1: Sage 200 - Trade Portal

Final URL: `https://b2bware.com/trade-portal.html`
Path1: trade-portal   Path2: sage-200

Headlines (15, each <=30 chars):
1. Sage 200 Trade Portal (21 chars)
2. Customers See Their Prices (26 chars)
3. Orders Land In Sage 200 (23 chars)
4. B2B Ecommerce For Sage 200 (26 chars)
5. From £5,000 Set Up (18 chars)
6. Then £300 A Month (17 chars)
7. Free Order Check First (22 chars)
8. One Team, Every Route (21 chars)
9. We Fix It When It Breaks (24 chars)
10. 400+ Systems Connected (22 chars)
11. Get A Free Order Check (22 chars)
12. Trade Orders, Right Prices (26 chars)
13. Portal Linked To Your ERP (25 chars)
14. Reorder, Search, Branding (25 chars)
15. See A Free Order Check (22 chars)

Descriptions (4, each <=90 chars):
1. Trade customers see their own Sage 200 prices online, and the order lands in Sage. (82 chars)
2. Free order check first. From £5,000 set up, then £300 a month, 1,000 orders included. (85 chars)
3. One team builds the portal and the Sage 200 link, and keeps both working. (73 chars)
4. Proof: Harrows Darts trade customers order through a portal linked to their ERP. (80 chars)

Pinning: H1 pinned to headline 1. All other headlines and descriptions unpinned.

### RSA2 - AG2: Business Central & NetSuite - Trade Portal

Final URL: `https://b2bware.com/trade-portal.html`
Path1: trade-portal   Path2: your-erp

Headlines (15, each <=30 chars):
1. Business Central Trade Portal (29 chars)
2. NetSuite Trade Portal (21 chars)
3. Customers See Their Prices (26 chars)
4. Orders Land In Your ERP (23 chars)
5. From £5,000 Set Up (18 chars)
6. Then £300 A Month (17 chars)
7. Free Order Check First (22 chars)
8. One Team, Every Route (21 chars)
9. We Fix It When It Breaks (24 chars)
10. 400+ Systems Connected (22 chars)
11. Get A Free Order Check (22 chars)
12. Trade Orders, Right Prices (26 chars)
13. Portal Linked To Your ERP (25 chars)
14. Reorder, Search, Branding (25 chars)
15. See A Free Order Check (22 chars)

Descriptions (4, each <=90 chars):
1. Trade customers see their own prices online, and the order lands in your ERP. (77 chars)
2. Free order check first. From £5,000 set up, then £300 a month, 1,000 orders included. (85 chars)
3. Works with Business Central and NetSuite. One team builds the portal and the link. (82 chars)
4. Proof: Harrows Darts trade customers order through a portal linked to their ERP. (80 chars)

Pinning: H1 pinned to headline 1. All other headlines and descriptions unpinned.

### RSA3 - AG3: Alternatives - Trade Portal

Final URL: `https://b2bware.com/pricing.html`
Path1: pricing   Path2: trade-portal

Headlines (15, each <=30 chars):
1. Price On The Website (20 chars)
2. Customers See Their Prices (26 chars)
3. Orders Land In Your ERP (23 chars)
4. Portal And ERP, One Team (24 chars)
5. From £5,000 Set Up (18 chars)
6. Then £300 A Month (17 chars)
7. Free Order Check First (22 chars)
8. One Team, Every Route (21 chars)
9. We Fix It When It Breaks (24 chars)
10. 400+ Systems Connected (22 chars)
11. Get A Free Order Check (22 chars)
12. Trade Orders, Right Prices (26 chars)
13. Portal Linked To Your ERP (25 chars)
14. Reorder, Search, Branding (25 chars)
15. See A Free Order Check (22 chars)

Descriptions (4, each <=90 chars):
1. Trade customers see their own prices online, and the order lands in your ERP. (77 chars)
2. Not just a portal. One team builds it and links it to your ERP, then keeps it working. (86 chars)
3. Free order check first. From £5,000 set up, then £300 a month, 1,000 orders included. (85 chars)
4. Proof: Harrows Darts trade customers order through a portal linked to their ERP. (80 chars)

Pinning: H1 pinned to headline 1 (this group targets buyers comparing portal vendors on price, so price leads). All other headlines and descriptions unpinned.

### Negative keywords, campaign-level (Trade Portal)

- b2c ecommerce
- consumer marketplace
- dropshipping
- print on demand
- website design
- web design agency
- wordpress developer
- shopify developer
- magento developer

---

## 5. Shared negative keyword list (all three campaigns)

Apply at account or shared-list level, then attach to every campaign:

- job, jobs, career, careers, vacancy, vacancies, hiring, recruitment, cv, resume
- salary, apprenticeship, internship, intern
- course, training, tutorial, certification, exam, qualification
- free, free trial, open source, diy, download, template, templates
- login, sign in, password reset, support number, helpdesk, customer support
- sage advice, sage plant, sage smudge, sage green, wise sage, sage recipe, sage the herb
- in-flight service, international fellowship
- sap tree, maple sap, sap syrup
- reddit, wiki, quora, forum
- second hand, refurbished, used
- b2c, consumer, personal use, home use
- student, university, college
- bespoke, made to order, custom manufacturing

The Sage/herb and IFS/SAP collisions matter more than they look: "Sage," "IFS" and "SAP" are all common English words or unrelated acronyms outside the ERP context, and at low budget a handful of irrelevant clicks can burn a meaningful share of a small daily spend.

---

## 6. Sitelinks

Applied account-wide unless noted:

| Sitelink | URL | Description line 1 | Description line 2 |
|---|---|---|---|
| Pricing | pricing.html | From £5,000 set up | £300 a month after |
| How It Works | how-it-works.html | Five steps, one team | See the order's journey |
| Free Order Check | index.html#check | Send a week of orders | See what lands automatically |
| Our Customers | index.html#customers | Doppler, Kienesberger | Harrows Darts and more |
| Emailed Orders | emailed-orders.html | Stop keying PDFs in | See how it works |
| Trade Portal | trade-portal.html | Prices live from your ERP | Reorder, search, branding |

(Emailed Orders and Trade Portal sitelinks are shown only on the campaigns other than their own, so an ad never sitelinks to the page it already leads to.)

## 7. Callouts (>=4, each <=25 chars)

- 400+ systems connected
- One team, every route
- We fix what breaks
- Free order check
- Price on the website
- 1,000 orders included
- Human approval first
- No per-user fees

## 8. Structured snippets

Header: **Services**
Values: Email order automation, Trade portal setup, ERP link repair, Order data checks, Contract price checks, Reporting

---

## 9. Landing pages and message match

| Ad group type | Landing page | Hero must contain |
|---|---|---|
| ERP-specific, Emailed Orders | `emailed-orders.html` | "Still keying PDF orders into Sage? Every order in your ERP. Nobody retyping it." |
| ERP-specific, Fix The Link | `fix-your-link.html` | "Shop and ERP out of step again? We take over the link someone else built, and keep it working." |
| ERP-specific, Trade Portal | `trade-portal.html` | "Trade customers see their own prices online, and the order lands in your ERP." |
| Alternatives (all three campaigns) | `pricing.html` | A line naming the price up front, for example: "See the price before you talk to anyone. From £5,000, then £300 a month." |

Alternatives ad groups route to `pricing.html` rather than the angle page: these searchers are already comparing named tools, and the strongest thing in the research against every AI-order-agent and iPaaS competitor is that none of them publish a price. Leading with the number on click is the message match for that intent, not the angle story.

---

## 10. Two-week launch plan

### What to watch daily (first 5 to 7 days)
- Spend pacing per campaign against the 60/30/10 split, so one angle does not quietly eat the budget of another.
- CTR and average CPC per ad group, as the earliest read on whether the ad copy and keyword are actually matched.
- The free order check CTA click (secondary conversion) as the earliest read on the landing page, since primary submits will be too sparse to read in week 1.
- The search-terms report, checked at least every 2 to 3 days at this spend level, not weekly: waste (spend with zero relevance, negative it), winners (a converting or clicking term that is not yet a keyword, add it), and drift (a phrase match pulling the wrong meaning, tighten or negative it).

### What to watch weekly (from day 7)
- Free order check submits per campaign and per ad group, and cost per submit where there is more than one.
- CTA-click-to-submit ratio, to separate an ad/keyword problem (low CTA clicks) from a landing page or form problem (CTA clicks but no submits).
- Impression share, split into Lost IS (budget) versus Lost IS (rank), so a flat campaign can be diagnosed as under-funded versus under-bid.

### When to cut
- No exact target CPA exists yet, since budget was not set and there is no conversion history. Use these interim rules instead:
  - Pause a keyword or ad group with 15+ clicks and zero CTA clicks (not just zero submits) by day 5 to 7: the ad is getting clicked but the landing page promise is not landing, or the traffic is off-intent. Check the search term first.
  - Pause a keyword with 3+ clicks and a search term report showing it is clearly the wrong audience (job-seeker, student, consumer, wrong ERP) at any point; do not wait for a schedule.
  - Do not pause anything on primary conversions alone before day 10 to 12: at this budget, most ad groups will not reach double-digit submits inside 2 weeks, and killing on 0 versus 1 submit is noise, not signal.
- Reallocate, do not just pause: money freed from a cut ad group moves to the strongest-performing ad group in the same campaign first, then across campaigns only after day 10.

### How to decide the winning angle (around day 14)
Rank the three campaigns on, in this order:
1. **Cost per free order check submit**, where there are enough submits to compare (likely only Emailed Orders will clear this bar in 2 weeks at a 60% share).
2. **CTA-click rate and cost per CTA click**, as the leading proxy for the other two campaigns if submits are too sparse to compare directly.
3. **Search-term relevance and real volume seen in the account**, cross-checked against Keyword Planner: an angle with technically fine CTR but almost no impressions is a volume problem, not a message problem, and should be treated differently (more keywords or a channel switch, not more budget).
4. **Qualitative fit of anyone who did submit**: right ERP, right staff-size range, stocked coded products, not mid-migration. A cheap submit from a bad-fit prospect (see brief's exclusion list) does not count as a win.

Be honest with the business at this checkpoint: 2 weeks at a 10% share on Trade Portal, in particular, is very unlikely to produce a statistically meaningful read. If Trade Portal shows near-zero impressions after Keyword Planner and live delivery confirm it, say so plainly rather than declaring it "lost" on thin data, and consider whether that 10% is better spent extending Emailed Orders or Fix The Link for another week instead.

---

## 11. Assumptions made

- No total budget figure was given, only the 60/30/10 split; all guidance above is expressed as shares of whatever total monthly Google Ads budget is set, and as behaviour rules rather than fixed CPA/CPL numbers, since no historical data or target exists yet.
- The secondary micro-conversion is the "Get a free order check" CTA click (opens the form), not the submit itself. This was chosen because it is the one measurable step between an ad click and the primary goal, and it directly diagnoses landing page friction, which matters most in a 2-week test window with thin submit volume.
- "Alternatives" ad groups in all three campaigns route to `pricing.html` rather than the angle landing page, since the brief lists `pricing.html` as one of four landing pages to build and the strongest evidence-backed differentiator against named competitors is a published price.
- IFS and SAP Business One keywords are placed only in the Fix The Link campaign (combined into one ad group with Business Central), because the research evidence for those two ERPs paired specifically with email-order automation or trade-portal search intent is thin, while the SDR call evidence does show both in a broken/complex-integration context (Clyde Pneumatic on SAP, Coba wanting IFS support). This should be revisited once Keyword Planner shows real volume; if Sage-200-level volume exists for IFS or SAP B1 on other intents, add dedicated ad groups.
- Competitor names used in keywords are drawn only from company names that appear in the research files (competitor-profiles.md and buyer-and-competitor-messaging.md): Workist, Conexiom, Turian, eBridge Connections, Patchworks, Codeless Platforms, Celigo, GOb2b, Sana Commerce, SparkLayer, OroCommerce, B2B Wave, k-eCommerce. None of these names appear anywhere in ad copy, sitelinks, callouts or snippets, only in keyword lists, per the brief's rule.
- All UK search volumes in this plan are unverified estimates of relevance, not of volume. Every keyword list above must be run through Keyword Planner before launch; ad groups with near-zero forecast volume should be flagged back to the team rather than launched as written.
