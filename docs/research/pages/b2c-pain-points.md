# B2C (/solutions/b2c): you run an ERP and want to sell to consumers

Sources: b2c/research/erp-b2c-pains.md (about 60 buyer quotes, 9 ERPs), b2c/research/erp-b2c-options.md (options, costs), b2c/research/collateral-filter.md, Haus der Guten Weine proposal (1 Oct 2026). 8 Oct 2026. For presenting to the CEO.

Audience: a business that runs on its ERP (wholesaler, manufacturer, merchant) and sells, or wants to sell, to consumers online. Often also sells to trade. Not small shop owners: our price rules them out.

Rule: no single ERP named in copy. Each pain was seen across several ERPs (column below). Copy states the pattern.

## Their options today, and what each breaks

| Option | What goes wrong | Evidence |
|---|---|---|
| The ERP's own shop module | Limited shop; dies when the ERP changes | Options file, lock-in section |
| WooCommerce + ERP plugin | Small plugin vendors; updates break the link | Options file; Woo order-storage change broke plugins |
| Shopify + connector | Scheduled stock sync, one price only, variants don't map, VAT recalculated on import | Vendor's own connector docs |
| Shopware / Magento + agency | Custom link tied to the agency; costly to change | UK agency estimates GBP 15k to 50k+ for ERP integration |
| ERP-tied commerce vendors | Quote-only pricing; tied to one ERP | Options file |
| Custom build | GBP 50k to 200k+ (agency estimates) | Options file |

## Verified pains, ranked

| # | Pain | Sources | ERPs seen | Strength |
|---|---|---|---|---|
| 1 | Web orders don't reach the ERP, fail silently, or get retyped ("our warehouse usually tells us when a customer calls asking why their stuff hasn't shipped yet") | 13 | 7 | Strong |
| 2 | Prices, VAT, currency and promotions differ between shop and ERP ("impossible for us to run the business") | 10 | 4 | Strong |
| 3 | Stock wrong or oversold; the shop can't be trusted ("difficult to trust") | 8 | 6 | Strong |
| 4 | Product data and variants don't flow from the ERP to the shop (also HdGW: mandatory details on variants) | 7 + HdGW | 3 | Medium-strong |
| 5 | The link breaks after an update, plan change or ERP move | 8 | 3 | Medium |
| 6 | Vendors oversell, support is weak | 6 | 4 | Medium |
| 7 | Payments and refunds reconciled by hand at month end ("month-end is going to be hell") | 5 | 2+ | Medium |
| 8 | Cost of connector, partner time, rework | 5 | 3 | Medium |
| 9 | They pick the ERP's own shop to avoid "one more integration to maintain", then regret the lock-in | 4 | 3 | Medium |

Not proven, do not lead with: vendors blaming each other, the shop as a neglected "stepchild" (one buyer, HdGW, said it to us), an ERP move forcing a shop rebuild (mechanism documented, frequency unknown).

## How we answer each

| # | Answer |
|---|---|
| 1 | Every web order lands in the ERP as a finished sales order. We watch every order; a failed one is fixed before the customer calls. |
| 2 | Consumer prices, VAT and promotions come from the ERP. One set of prices, no copying across. |
| 3 | Stock from the ERP, live. No 30-minute-old figure on the shop. |
| 4 | The shop is built on your item master. Every variant is its own product with its own details. Change it in the ERP, the shop follows. |
| 5 | We run the link. Fixing it after updates is in the monthly fee. Change ERP and we reconnect it; the shop stays. |
| 6 | One team builds and runs shop and link (SyncSpider, 10 years, 400+ integrations). |
| 7 | Payments, fees and refunds matched to ERP orders, including prepayment and cash on delivery. |
| 8 | Set-up price agreed before we start; plugins, hosting and updates included. |
| 9 | Not tied to your ERP: the shop survives an ERP change. Trade customers on the same system if you sell to both. |

Dropped from collateral (no buyer pain): GDPR, 100% EU, German data centre, AI hosting, accessibility score, social and ads hub, loyalty, app, POS, MCP.

## Open decision (for David)
- Public B2C price. HdGW was about EUR 22k set-up and EUR 548 a month. B2B is GBP 5,000 plus GBP 300. Publish a "from" price or leave it to the consultation?

## Claims to back up
- "A failed order is fixed before the customer calls" (we monitor every web order)
- Consumer prices, VAT and promotions served from the ERP
- Live stock from the ERP on the consumer shop
- Every variant its own product, details from the item master
- "Change ERP and we reconnect it; the shop stays"
- Payment, fee and refund matching to ERP orders, incl. prepayment and COD
- "Live in about two months" (HdGW roadmap: 8 weeks)
- Reviews, customers and order history moved; every old URL redirected
- "Not happy before go-live? Stop and pay only for the hours worked" (HdGW guarantee, now stated as standard)
- "Consumers and trade customers can order from the same system, each with their own prices"

Page built 8 Oct 2026: /solutions/b2c (entry `b2c` in landing/src/data/solutions.ts).

## Story agreed with David (8 Oct 2026)
"Stop using your current consumer shop and switch to us, because:"
1. Every order reaches your ERP (pain 1)
2. The price at checkout is the price in your ERP, VAT and promotions included (pain 2)
3. You stop selling what you don't have: live stock (pain 3)
4. New products reach the shop without retyping: built on your item master (pain 4)
5. Updates stop breaking it: we run it, fixes in the fee (pain 5 + shop-owner research)
6. Month end stops being manual: payments and refunds matched to ERP orders (pain 7)
Why switch, not patch: a copy drifts; a shop built on the ERP has nothing to drift.
Switching is safe: products, customers, orders, reviews moved; every URL redirected; approve before go-live; stop before go-live and pay only hours worked.
Not B2B: anonymous consumers, guest checkout, VAT-inclusive public prices, promotions, card payments and refunds. B2B pages are trade accounts, contract prices, part codes, emailed and phone orders.
Homepage Consumers view = short version; /solutions/b2c = full page, own layout (not the problem-page template).

**Feature sections (8 Oct 2026)**
- Payments named: cards, Apple Pay, Google Pay, PayPal, Klarna, prepayment, cash on delivery. Confirm each is live in the shop.
- Shipping named: DHL, DPD, UPS, Royal Mail, with tracking emails. Confirm each carrier and the tracking emails.
- Accounting named: Xero, QuickBooks.
- Marketing named: Google Shopping, Meta catalogue, GA4, Klaviyo, Mailchimp.
- Reviews named: Trustpilot, Reviews.io.
- Marketplaces named: Amazon, eBay "and more", through SyncSpider, with the same stock and orders as the shop.
- "400+ integrations through SyncSpider. If yours isn't listed, we connect it." (400+ is the standing SyncSpider figure.)
- Built in: typo-tolerant search; promotions and vouchers; variants (sizes, colours) as one product; several shops from one catalogue and one stock level; trade customers on the same system with their own prices.
- Speed: "98 / 100 Google PageSpeed", labelled "Measured on a B2Bware customer shop. Scores vary by shop." Needs the source shop and a dated test run on file. It is an example, never a promise.
