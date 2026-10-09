# /wholesalers: segment brief

Research date: 7 Oct 2026. Builds on demand-voice-of-customer.md (VoC), sdr-call-evidence.md, trade-portal-brief.md (TP). New sources this pass: IGD UK wholesaling report, kollex DACH survey, Capterra B2B Wave reviews, Sage Community Hub, r/smallbusiness. Reddit archive and reddit.com were mostly unreachable this pass, so first-hand UK wholesaler voice is still thin.

**Wholesaler vs distributor.** The terms are "often used interchangeably" (Indeed UK, https://uk.indeed.com/career-advice/career-development/wholesaler-vs-distributor). Where a line is drawn: wholesalers resell many brands to retailers and caterers; distributors hold contracts with manufacturers. In UK trade press, "wholesale" usually means grocery, foodservice and cash and carry (IGD, Better Wholesaling). Buyers and vendors online say "wholesale distributor" as one phrase. On Shopify, "wholesale" also means a brand selling to stockists, a different buyer. The evidence below rarely separates them, so most pains are shared with distributors.

## 1. Who they are, and who fits

**Fit:** delivered wholesalers, roughly 10 to 249 staff, supplying independent retailers, hospitality or trade from a stocked, coded range, on Sage 50/200, Business Central, NetSuite or similar, with many small repeat orders and per-group or per-customer prices.

**Poor fit:**
- **Cash and carry, in-depot heavy.** IGD: collect is 32% of UK grocery and foodservice wholesale sales, and over 90% for PBUs (small business users). The habit is the depot, not the phone or inbox. Same logic as builders' merchants (TP: 92% over the counter).
- **Large symbol and national wholesalers.** Already online: 55% of wholesale sales to retailers go through online/EDI (IGD); Bestway runs its own app and WhatsApp ordering via b2b.store.
- **Spot or market pricing** (fresh produce priced daily, fuel). Same disqualifier as Aztec Oils in the SDR notes.
- **Very small Excel/QuickBooks wholesalers.** One founder reports a prospect would pay only "$20-30" for a fix (r/smallbusiness, 2025-11-22, second-hand).

**Volume note (inference):** a wholesaler doing 60 orders a day is about 1,300 a month, above the 1,000 included. Pricing pages should show the per-order rate clearly for this segment.

## 2. Verified pain points

| # | Pain | Best evidence (source, quote, URL) | Strength | Specific or shared |
|---|---|---|---|---|
| 1 | Hospitality and foodservice customers still phone or use paper order forms | IGD, UK grocery and foodservice wholesaling 2024: telesales/PLOF is 41% of sales to catering/foodservice (2023), only 10% to retailers. "still represents a notable minority mode of remote ordering". https://northstarbc.co.uk/wp-content/uploads/2025/12/UK-wholesale-forecast-2024-2029.pdf | Strong (industry research, UK) | Specific (foodservice wholesale) |
| 2 | Orders arrive on many channels, at most half digitally | kollex survey, 29 DACH beverage wholesalers: 93% name phone, email and app; "höchstens 50 Prozent der Bestellungen digital" (two-thirds of them). Vendor-run, small sample. https://getraenke-news.de/gfgh-nutzt-weiterhin-mehrere-bestellwege/ | Medium | Specific |
| 3 | Orders keyed by hand into accounts or ERP | B2B Wave review, Distribution Projects Manager, Import/Export, Aug 2024: "manually inputting order data onto QuickBooks invoices". https://www.capterra.com/p/133836/B2B-Wave/reviews/ . Founder interviews (second-hand): food wholesaler, 60 orders a day, 5 minutes each into Excel. https://www.reddit.com/r/smallbusiness/comments/1p3w47w . Plus VoC 12 (Sage 50) | Medium-strong | Shared, sharper at wholesale volumes |
| 4 | Customers will not change how they order | r/smallbusiness reply to that founder: "your assumption of how some smaller restaurants... want to place their orders". https://www.reddit.com/r/smallbusiness/comments/1p3w47w . Vendor-written: "A phone call feels instant." (Wholesale Handler, 2026) https://wholesalehandler.com/articles/get-restaurant-customers-to-order-fresh-produce-online | Medium | Specific (hospitality customers) |
| 5 | Many price lists and per-customer discounts that tools struggle with | B2B Wave review, Wholesale, Jan 2023: "different discount per products and categories and it is hard to input". UK wholesaler: "multiple pricing lists for different customer groups" (VoC 32, adviser post). https://www.reddit.com/r/smallbusinessuk/comments/1py5xxg/ | Medium-strong | Shared, wholesale-typical |
| 6 | Time-limited special prices and recurring orders fall out of step | Sage 50 UK user: special prices for selected customers in set periods, no simple way to switch off (Sage confirms). https://communityhub.sage.com/gb/sage-50-accounts/f/general-discussion-uk/257847/customer-pricelists . Recurring orders do not pick up new prices: "a real pain as the prices change regularly". https://communityhub.sage.com/gb/sage-50-accounts/f/general-discussion-uk/206846/customer-pricelists-and-recurring-orders | Medium-weak (two posts, business type not stated) | Wholesale-typical |
| 7 | Overnight sync breaks trade accounts and credit | UK trade wholesaler, Sage 200 + Magento: "That is not integration in my book." (VoC 16) https://www.reddit.com/r/Sage/comments/1teyjjj/ | Medium (one source, exact ICP) | Shared |
| 8 | Wants the webshop linked to Sage 50 stock | B2B Wave review, Director, Wholesale, Aug 2024: "We needed the product to be integrated with Sage 50". https://www.capterra.com/p/133836/B2B-Wave/reviews/ | Medium-weak | Shared |
| 9 | Phone and voicemail orders misheard, errors found on delivery day; tight next-day cut-offs | Vendor-written only: "'courgettes' sounded like 'aubergines' at 3am" (Wholesale Handler). Cut-off planned back from van departure (Open Pantry). https://www.theopenpantry.com/blog/supplier/order-cutoff-before-delivery-day | Medium-weak (vendor) | Specific |
| 10 | WhatsApp and text ordering from small shops and kitchens | Vendor-written: b2b.store CEO, retailers will "press a button to reorder" in WhatsApp (Better Retailing, Apr 2023). https://www.betterretailing.com/wholesale-whatsapp-orders-b2b-store-bestway-parfetts-filshill/ . Choco, Fresho, ChefsList all sell WhatsApp/voicemail reading | Medium-weak as pain, strong as a channel signal | Specific |
| 11 | Reps write orders that the office rekeys | Vendor-written only (RepSpark). Doppler case is a manufacturer | Medium-weak | Shared |
| 12 | Portal built, then unused | Unnamed wholesaler case, "only 12%" adoption six months in (TP 2.1, commerce-partner.com) | Medium (drivers), low (number). Never publish the number | Shared |
| 13 | Seasonal peaks | No evidence found | Thin | n/a |

## 3. How B2Bware helps, and where we are weak

| Capability | Pains | Wholesaler-specific angle |
|---|---|---|
| AI order intake (email, PDF, spreadsheet) | 2, 3, 4 | Lets customers keep ordering the way they do (pain 4), so the office stops keying instead of trying to change the restaurant or shop. Maps their names and codes, packs and units to yours |
| Ordering portal | 5, 6, 12, 1 | Each customer's price list and favourites, reorder from history; useful for after-hours ordering and for customers who already use apps. Pitch as an option, not a forced move |
| Webshop to ERP link | 7, 8 | Fixes the existing trade shop that does not talk to Sage; trade accounts and prices from the ERP |
| Sales app (add-on) | 11 | Reps order at the customer's price; evidence is weak |

**Weak spots (be honest on the page and in calls):**
- **Phone and voicemail:** we do not read phone orders. Pain 1 (the strongest UK stat) is phone and paper. The portal and AI only help where customers email or can be moved online.
- **WhatsApp and SMS:** not listed in our capabilities. Confirm with the team before naming them.
- **Foodservice is crowded:** Fresho (UK food wholesale, AI order entry from emails, texts, voicemails), Choco (free for restaurants, AI puts orders into the supplier's ERP), kollex and ChefsList (DACH). Go after non-food and mixed wholesalers first.
- **Not confirmed:** delivery-day and cut-off rules, time-limited promotions, standing orders, catch weights, substitutions. Do not claim until confirmed.
- **No wholesaler case:** Kienesberger is our only distributor case (machinery and tools, Austria). Doppler and Harrows are manufacturers.

## 4. Buyer language (evidenced)

- "orders" coming in "via email, phone, or WhatsApp" (r/smallbusiness founder post)
- "telesales", "price list and order forms" (IGD)
- "delivered", "collect", "cash & carry", "depot" (IGD, Better Wholesaling)
- "price lists", "customer pricing", "special prices", "discounts", "customer groups" (Sage Community Hub, B2B Wave reviews, VoC 32)
- "recurring orders" (Sage Community Hub)
- "trade accounts", "credit checks" (VoC 16)
- "manually inputting", "manual & tedious" (B2B Wave reviews)
- "cut-off", "next day" (vendor pages; widely used, not buyer-sourced here)
- German: "Bestellkanäle", "Bestellwege", "Außendienst", "Innendienst", "abtippen" (kollex, DACH vendors)

## 5. Recommended page angle

**Headline direction:** keep your customers ordering the way they like, and get every order into your ERP at their price. For example: "Your customers order by email, phone and app. Your ERP should get all of it, at their price."

**Lead with these four pains:**
1. Orders arrive every way and get keyed by hand (pains 2, 3; IGD for UK context).
2. You cannot make your customers change how they order (pain 4). This is our edge over portal-only vendors: AI intake plus portal.
3. Price lists per customer group and special prices that cheap tools and webshops cannot carry (pains 5, 6).
4. The trade shop or portal is not properly linked to Sage, so stock, accounts and credit drift (pains 7, 8).

**Do NOT lead with:**
- "Your customers want to order online" or switching stats (weak, vendor surveys; TP).
- Phone or voicemail order capture, WhatsApp, cut-offs, promotions or delivery runs until the team confirms we support them.
- Portal adoption numbers (no traceable source).
- Doppler's 70% as wholesaler proof (manufacturer).
- Cash and carry, trade counter or fresh-produce wholesalers as the target.
- Foodservice as the hero audience (crowded; phone-heavy channel we do not capture).

**Gap to close:** a short call round with 3 to 5 UK delivered wholesalers on how their customers order and how many orders a day they key. That would beat more desk research.
