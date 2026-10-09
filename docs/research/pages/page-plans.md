# Page plans: trade portal, ERP integration, emailed orders

Date: 7 Oct 2026. For David to approve before anything is built.
Built from: research/pages/trade-portal-brief.md (TP), erp-integration-brief.md (EI), emailed-orders-brief.md (EO). Section numbers like "TP 2.1" point into those briefs.

How to read this:
- Each page lists its sections in order, the draft copy, and the source for each claim.
- **[CONFIRM n]** = needs a yes from the team. Questions are listed at the end. Until confirmed, the page uses the **fallback** wording shown, which makes no claim we can't back.
- Design: same Webflow house style as now. New section types needed are listed per page.
- Proof rules: no adoption or failure statistics from blogs, no "real-time" for Kienesberger, Doppler stats only where they fit, no salary comparisons.

---

## Shared across all three pages

**Price (locked):** £5,000 to set up, £300 a month including 1,000 orders, about 15p an order after. Shown in the hero and in its own section. Source: b2b-pricing-locked; buyers ask for price early (sdr-call-evidence.md); no competitor in the set shows one (EI 5, EO 5).
**Offer:** free consultation, you get a plan and a fixed price.
**"Live":** every "live from your ERP" in the current copy becomes "from your ERP" until [CONFIRM 1] says which data is real-time per ERP. Source: TP 7, EI 7.1.
**Errors fixed today:** "Most order-reading tools stop at reading" replaced (EO 5); Kienesberger "live" replaced with "updated daily in about 15 minutes" (TP 2.5).

---

## Page 1: /solutions/trade-portal

**Who lands here:** sales or ops director, or owner, at a supplier whose trade customers ring and email repeat orders from a known range (TP 3). Not trade-counter merchants (92% of builders' merchant trade sales are over the counter, TP 2.2).
**The angle:** portals often get built and go unused (12% adoption six months in, in one wholesaler case, TP 2.1). Every source gives the same four causes. No vendor page takes responsibility for them (TP 5.2). We do.

### 1. Hero
- H1: **Trade customers ordering online, at their own prices**
- Highlight: **and every order lands in your ERP**
- Ticks:
  - Each account sees the prices your ERP gives it
  - Reorder from their order history in a few clicks
  - Your reps can order for them in the same portal
  - Orders go into your ERP, nobody retypes them
- Lead: "We build your trade portal, link it to Sage, Business Central, NetSuite or whichever ERP you run, and keep it running."
- Price line: "£5,000 to set up. £300 a month."
- CTAs: Book a free consultation / See how it works
- Sources: TP 4 (buyer words "their own prices", "lands in"), TP 2.5 (Doppler rep ordering), TP 2.1 (reorder speed drives use), pricing.

### 2. Sound familiar?
Short lines, no cards:
- The same customers ring in the same orders every week.
- Someone checks their price list before every order.
- Then types it into your ERP.
- A customer asks: "Can I just order online?"
- Or you have a webshop, and it shows them the wrong price.
- Sources: VoC items 2, 16, 33; sdr-call-evidence.md (Company of Animals, Aztec Oils); TP 3 triggers.

### 3. Why trade portals go quiet, and how we build ours
Four rows, problem on the left, our answer on the right:
| Why customers ignore a portal | What we do |
|---|---|
| They see a price that isn't theirs, so they ring to check | Every account sees the prices your ERP gives it: contract prices, quantity breaks, terms |
| Ordering online is slower than phoning | Their order history and one-click reorder, search by product code |
| Reps keep taking orders the old way | Reps order for customers in the same portal, at the customer's price |
| Nobody shows customers how to use it | Every account is set up and tested before anyone is invited. [CONFIRM 2] if we also help roll it out (invites, a check at 30 days) |
- No statistics on the page (TP 2.1 says none are traceable). Sources: TP 2.1 (commerce-partner, Kibo, B2B Ecommerce Agency), Doppler case.

### 4. What your customers see
Feature tiles, only confirmed items:
- Their own prices and quantity breaks
- Their range, in packs, boxes and units as you sell them
- Stock from your ERP [CONFIRM 1 for "live"]
- Order history and one-click reorder
- Credit limits and accounts on stop checked at checkout
- Roles and permissions per user
- [CONFIRM 3] invoices and statements; search by their own part codes
- Sources: b2b.ts included list; PRODUCT.md; TP 2.2 (55% want agreed prices, 37% want history and invoices).

### 5. The ERP link is the job, and we own it
- "A portal is only as good as its link to your ERP. Prices come from your ERP. Orders go back into it as sales orders. When your ERP or Shopify updates, someone has to keep the link working. That's us, for as long as you use it."
- Fallback until [CONFIRM 4]: drop "When your ERP or Shopify updates" and keep "We watch every order and fix what breaks."
- Sources: TP 2.1 (r/manufacturing: "That sync layer is where most of these fall apart"); EI 2.1; VoC item 38 (finger-pointing).

### 6. Shopify B2B or your own portal?
Honest chooser, two columns:
- **Shopify B2B can be enough** if you already sell on Shopify and have a few price lists. Shopify allows up to 3 catalogues without Plus.
- **You need more** when each customer has its own prices: that needs Shopify Plus or your own portal. Microsoft's free Business Central connector struggles with contract pricing.
- "We build either, and own the link to your ERP. We'll tell you which fits in the consultation." [CONFIRM 5] the team's rule of thumb.
- Sources: market-claims-check.md claims 2 and 3; TP 2.3; Plus price "$2,300/month" (VoC 3.1). Nobody else is honest about this (TP 5.2 point 5).

### 7. Customers who still email
- "Some customers will always email. Their orders can go into your ERP too, without retyping." Link to /solutions/emailed-orders.
- Source: TP 5.2 point 3 (nobody joins portal and email into one route).

### 8. Already running (proof)
- **Kienesberger**, manufacturer, Austria: "Their old webshop couldn't carry customer-specific pricing: it would have needed over 20 million price entries. Now 70,000 entries from the ERP, updated daily in about 15 minutes."
- **Doppler**, umbrella and parasol manufacturer, Austria: "Sales agents order through a portal linked to the ERP. 70% faster order entry."
- **Harrows Darts**, manufacturer, UK: "Trade store for their retail customers, connected to the ERP." [CONFIRM 6] ERP, Shopify or own portal, any number or quote.
- Intro: "Ask us to put you in touch." [CONFIRM 7] that customers agreed to this.
- Sources: b2bware.com case studies (TP 2.5); PRODUCT.md.

### 9. Price
Existing pricing section, plus "about 15p an order after 1,000".

### 10. How it works
1. Tell us how customers order today (free)
2. Get a plan and a fixed price (free): own portal or Shopify B2B, what we connect, what it costs
3. We build, connect and test on your real accounts and prices
4. Launch: [CONFIRM 2] "we help you invite customers" / fallback "you invite customers when you're happy"
5. We run it: hosting, updates and fixes, one contact who knows your setup

### 11. Is this right for you?
- **Good fit:** customers reorder from a known range by phone or email; your ERP is Sage, Business Central, NetSuite or another with a way in; you sell on account.
- **Not a fit:** most sales are over a trade counter; products are configured or priced one by one; you're part-way through changing ERP.
- Sources: TP 3, TP 2.2, growth brief s2.

### 12. FAQ
1. Will it work with our ERP? (version-specific, confirmed in consultation)
2. Will customers see their exact prices?
3. What if our customers don't use it? (the four reasons and what we do)
4. Do our reps lose out? (they order in it too)
5. Shopify B2B or our own portal?
6. What does it cost all in, and above 1,000 orders?
7. What happens when our ERP updates? [CONFIRM 4]
8. We already have a webshop. Do we start again?
9. How long until it's live? [CONFIRM 8], leave out until confirmed
10. Can we leave, and who owns the data? [CONFIRM 9]
- Sources: TP 6, competitor FAQs (TP 5.1).

### 13. Consultation form (existing)

**New section types needed:** symptom list (2), problem/answer rows (3), two-column chooser (6, 11).

---

## Page 2: /solutions/erp-integration

**Who lands here:** ops or sales director at a supplier whose webshop and ERP disagree: an agency-built shop with no link or an overnight batch, a Business Central firm on the free connector, or a firm whose connector vendor went quiet (EI 3).
**The angle:** links decay because Business Central and Shopify force changes several times a year, and nobody owns the link. No competitor uses that as the reason to buy a managed service (EI 2.1, 5). In the UK, nobody publishes a set-up price plus a monthly fee that includes watching the link (EI 2.3, 5).

### 1. Hero
- H1: **Webshop and ERP out of step?**
- Highlight: **We take over the link and keep it in step**
- Ticks:
  - Your ERP stays the master
  - Customer prices, stock, orders and accounts kept in step
  - Taken over or rebuilt, at a fixed price
  - Watched and fixed after go-live, for a monthly fee
- Lead: "Prices that don't match, stock that's wrong, orders that stopped syncing after an update. We take over or rebuild the link between your webshop and your ERP, then run it."
- Price line: "£5,000 to set up. £300 a month."
- Sources: EI 4, EI 8 row 1, VoC s1 rank 1.

### 2. Sound familiar?
- It only syncs overnight, so stock and credit are wrong by morning.
- The sync says "successful". Nothing changed.
- Contract prices never reach the shop.
- It broke after the last update, and orders are back to being typed in.
- The agency built the shop. Nobody built the link.
- The developer who set it up has gone quiet.
- Sources: VoC item 16 (UK, Sage 200 + Magento); EI 2.2 (Dynamics Community, Sage City "webbies"); VoC items 18, 20, 21; Aztec Oils.

### 3. Why it keeps breaking
- "Business Central gets two major updates a year. Shopify changes its API every quarter. In 2025 Microsoft told merchants to upgrade before 1 July or their Shopify link would stop working. Standard connectors carry a product, a price and a stock number, not your trade data. And once it's live, nobody owns it."
- "So a link nobody looks after slowly falls apart. Ours is looked after for as long as you use it." [CONFIRM 4] / fallback "We watch every order and fix what breaks."
- Sources: EI 2.1 (Microsoft Learn, Shopify dev docs), PRODUCT.md (what standard connectors leave).

### 4. What we take over
Feature tiles, ERP as master:
- Customer and contract prices
- Stock [CONFIRM 1 per ERP on timing]
- Web orders into your ERP as sales orders
- Customer accounts and terms
- Credit limits and accounts on stop
- [CONFIRM 3] invoices and dispatch updates back to the shop
- Callout: "Your ERP stays the master. Nothing else keeps a second copy of the truth."
- Sources: PRODUCT.md, EI 7.

### 5. Your options, honestly
Four columns or rows:
| Option | Fits when | Watch out for |
|---|---|---|
| The free connector | A standard shop with one price group | Rated 2.6/5. One price group to a standard store. Microsoft sends hard cases to partners |
| DIY tools (Power Automate, n8n) | You have someone to build and watch it | When that person leaves, so does the know-how |
| An agency project | You want a one-off build | UK agencies publish builds from £8,000, with monitoring billed separately |
| Us | You want it fixed and looked after | £5,000 to set up, £300 a month, watching it included [CONFIRM 4] |
- Sources: market-claims-check.md claim 3; Shopify App Store reviews (EI 2.2); VoC 3.2 (n8n, Power Automate); trisec.io (EI 2.3). Pattern used by Trisec and nobody else (EI 8 row 9).
- Decision for David: name Trisec, or say "UK agencies"? Plan uses "UK agencies".

### 6. How it works
1. Tell us what's out of step (free)
2. Get a plan and a fixed price (free): take over or rebuild, and the cost
3. We fix and test on your real prices, stock and orders before we switch over
4. We run it: watched, fixed, one contact

### 7. Price (existing section)

### 8. Already running (proof)
Harrows Darts first (UK), then Kienesberger, then Doppler, each with one specific fact (as page 1).

### 9. Systems we connect
- ERPs and webshops actually live today [CONFIRM 10], plus "400+ connectors underneath, so if yours isn't on the list, we build the link as part of set-up."
- Fallback until confirmed: "Sage, Business Central, NetSuite and others. 400+ connectors underneath. We confirm yours in the consultation."

### 10. FAQ
1. Is it real-time or batch? [CONFIRM 1]
2. Which system is the master?
3. What happens when Business Central, Sage or Shopify updates? [CONFIRM 4]
4. Can you take over our current connector? [CONFIRM 11]
5. We're about to change ERP. [CONFIRM 12]
6. Is on-premise OK? (b2b.ts says cloud or on-premise)
7. What if we leave? [CONFIRM 9]
8. Where's the team? (UK contact, engineers in Austria) [CONFIRM 13] UK contact name

### 11. Consultation form
- Intro adds what to bring: "your ERP and version, your webshop, and a few examples of what's gone wrong."

**New section types needed:** symptom list (2), text block (3), options table (5), systems list (9).

---

## Page 3: /solutions/emailed-orders

**Who lands here:** ops or customer service manager at a Sage 200 or Business Central distributor, often from search, often with a tool already or reading about the Business Central agent (EO 3).
**The angle:** reading orders is now table stakes. Buyers' real complaints about the tools are that mapping changes wait on the vendor, customer details stay wrong, and it breaks when a customer changes format (EO 2.4). We keep the mapping working, show a price, and are honest about who it's not for and what Business Central's agent already does (EO 5).
**Role:** a problem page, not the main paid page (EO 9). Any paid test needs a stop rule agreed in advance.

### 1. Hero
- H1: **Still retyping emailed orders?**
- Highlight: **We post them to your ERP as finished sales orders**
- Ticks:
  - PDF, Excel or the email itself, as customers send it
  - Their part codes, packs and units matched to yours
  - Prices, stock and credit checked against your ERP
  - Your team approves before anything posts
- Lead: "Customers keep ordering the way they do now. We read the order, check it and post it, then keep it working as customers change their formats."
- Price line: "£5,000 to set up. £300 a month."
- No "AI" anywhere above the fold. Sources: EO 4, EO 8 row 1, buyer-and-competitor-messaging.md rule 5.

### 2. Right for you / not for you
- **Right for you:** standard products with codes; dozens of emailed orders a week or more; Sage, Business Central, NetSuite or another ERP with a way in; a team doing the keying.
- **Not for you:** a handful of orders a week; products configured or priced one by one; spot prices with no data behind them; all your orders already arrive by EDI; you're part-way through changing ERP [CONFIRM 12].
- Sources: sdr-call-evidence.md (why the 17 meetings didn't convert), EO 8 row 2, Workist's "not suited for" line.

### 3. The mess, named
- Every customer sends a different format.
- Their part codes aren't your part codes.
- They order in boxes. You stock in units.
- Their price is a contract price, not your list price.
- And some of them are on stop.
- Sources: VoC K2, K4; sdr-call-evidence.md (Worktop); EO 5 gap 3 (nobody names this).

### 4. One order, start to finish
Step strip beside the existing mock:
1. PDF arrives from the customer
2. Their codes matched to yours, boxes converted to units
3. Price, stock and credit checked against your ERP
4. One line held, with the reason
5. Your team approves
6. Sales order number in your ERP
- Source: EO 8 row 4 (the write-back worry), Lleverage pattern.

### 5. Already have a tool? Or Business Central's agent?
- "If it works, keep it. We're for the orders it leaves behind." [CONFIRM 14] we run alongside an existing tool.
- **Business Central's Sales Order Agent**, in Microsoft's own documentation: up to 15 lines per order; reads the email, PDFs and images, not spreadsheets; leaves variant codes empty; always creates a quote first; doesn't post; Business Central only. "For short PDF orders from known customers, try it first."
- **Order-reading tools:** "If yours gives you a file someone still uploads, or mapping changes wait on the vendor, we finish the job and keep the mapping up to date."
- Sources: EO 2.1 (Microsoft Learn, 2 Oct 2026), EO 2.4 (Capterra, OMR reviews).

### 6. What we run for you after go-live
- New customer formats added
- Their codes kept mapped [CONFIRM 15] whether corrections are kept automatically
- Failed orders watched and fixed
- One contact who knows your setup
- Source: EO 2.4 (the real complaints), EO 5 gap 2.

### 7. How much checking your team still does
- "Clean lines arrive ready to approve. Problem lines are held, with the reason. Nothing posts until your team approves it."
- [CONFIRM 16] free sample test: "Send us a sample of real orders and we'll show you how many came through clean before you pay anything."
- No accuracy figure until [CONFIRM 17].
- Sources: VoC 4.2 (accuracy is the objection), growth brief (Metpro test moved the deal).

### 8. Price (existing section)

### 9. How it works
1. Tell us how orders arrive (free), bring a few real examples
2. Get a plan and a fixed price (free) [+ sample test if CONFIRM 16]
3. We build, connect and test on your real orders, codes and prices
4. We run it

### 10. FAQ
1. How accurate is it? (approval, test on their orders; no figure)
2. What if a customer changes their format?
3. Our customers' codes are a mess.
4. Which formats? [CONFIRM 18] which are live for paying customers
5. Which ERPs? [CONFIRM 10] including whether Sage 50 is supported (sales orders exist in Professional only, EO 2.6)
6. Our big customers use EDI.
7. Will it replace our staff?
8. We're changing ERP. [CONFIRM 12]
9. Where is our data held? [CONFIRM 19]

### 11. Closing CTA
"Bring the orders you retype today." (kept)

**No proof section** until there's a customer we can name for emailed orders [CONFIRM 20]. Doppler's figures are not used here.
**New section types needed:** fit/not-fit columns (2), statement list (3), step strip (4), comparison block (5).

---

## Questions for the team (all three pages)

| # | Question | Pages | Fallback until answered |
|---|---|---|---|
| 1 | Which data is real-time and which is scheduled, for each ERP (prices, stock, orders, credit)? | All | "from your ERP", never "live" or "real-time" |
| 2 | Do we help roll the portal out to customers (invites, rep briefing, a check at 30 days)? | TP | "Every account set up and tested before anyone is invited" |
| 3 | Invoices and statements in the portal? Search by the customer's own part codes? Invoices and dispatch back to the shop? | TP, EI | Left off |
| 4 | Does £300 a month cover fixes after ERP, Sage or Shopify updates? | All | "We watch every order and fix what breaks" |
| 5 | When does the team recommend Shopify B2B vs our own portal? | TP | "We'll tell you which fits in the consultation" |
| 6 | Harrows Darts: which ERP, Shopify or own portal, go-live date, any number or quote? | TP, EI | "Trade store connected to the ERP" |
| 7 | Have Kienesberger, Doppler and Harrows agreed to take calls ("Ask us to put you in touch")? | TP, EI | Remove the line |
| 8 | Typical time to go live? | TP, EI | Left off |
| 9 | Exit terms: notice, documentation, access to mappings, data ownership? | TP, EI | Left off |
| 10 | Which ERPs and webshops are live with a paying customer today? Sage 50 yes or no? | All | "Sage, Business Central, NetSuite and others. We confirm yours in the consultation." |
| 11 | Do we take over an existing connector, or always rebuild? | EI | "Take over or rebuild, whichever is right, at a fixed price" |
| 12 | Mid-ERP-migration buyers: build for the new ERP, or come back after go-live? | All | "Tell us in the consultation" |
| 13 | Named UK contact for the pages? | All | Left off |
| 14 | Can we run alongside an existing order-reading tool or EDI? | EO | Left off |
| 15 | Is an approved code correction kept automatically, or does our team update the map? | EO | "Their codes kept mapped" |
| 16 | Can the free consultation include running a sample of their orders? (Campaign brief still says "free order check") | EO, all | Consultation only |
| 17 | Any accuracy figure we can publish? | EO | No figure |
| 18 | Which formats are live for paying customers (scanned PDFs, Excel, email text, long orders)? | EO | "PDF, Excel or the email itself" (already in pricing list) |
| 19 | Where is data hosted? ("Hosted in the EU" is on the B2B page) | EO | Keep current line |
| 20 | Is there an emailed-orders customer we can name? | EO | No proof section |
| 21 | Doppler: "90% fewer errors" or "zero back office errors"? | B2B page | Use only "70% faster order entry" |

## Decisions for David

1. Approve, change or reject each page plan.
2. Name competitors on the page (Trisec, Business Central's agent) or keep it generic? Plan names Microsoft's agent (it's their own documentation) but not Trisec.
3. Send the questions above to the team now? The pages can go up with the fallbacks and improve as answers come in.
4. Paid traffic: keep the 60% emailed-orders split, or test it with a stop rule (EO 9)?
