# /manufacturers: segment brief

7 Oct 2026. Built on the existing research (demand-voice-of-customer.md = VoC, sdr-call-evidence.md = SDR, trade-portal-brief.md = TP, emailed-orders-brief.md = EO, B2Bware-Growth-Context-Brief.md = Growth) plus new web research. Labels: **vendor-written** = a seller of portals or order software wrote it. **Own case** = b2bware.com case study.

Honest headline: manufacturer-specific buyer voice is thin. Most manufacturer pains are the same as distributors' (retyping, formats, prices, sync). What is specific to manufacturers (dealers, sales agents, spare parts, D2C plus trade, configured products) is mostly vendor-written or from our own cases. Reddit's archive was rate-limited this pass; LinkedIn and UK trade press gave nothing usable beyond vendor case pages.

## 1. Who they are

**Fit:**
- Makes standard, coded products (stocked or made in repeat batches) and sells them on account to trade customers: dealers, retailers, stockists, distributors, installers. Our three customers all fit: Kienesberger (customer-specific prices), Doppler (umbrellas, sales agents order), Harrows Darts (UK, sells D2C on harrowsdarts.com and to trade through a login-only store at trade.harrowsdarts.com).
- Prices differ per dealer, region or account (price lists, discount bands, rebates).
- Dozens of repeat orders a week arriving by email, PDF, spreadsheet, phone or via sales agents (SDR "common pattern").
- SME ERP with an interface: Sage 200/X3, Business Central, NetSuite, SAP B1, and manufacturing ERPs such as Epicor or SYSPRO only once the team confirms a connector.
- Spare parts and consumables sold to dealers or end users (repeat, coded, often high line counts).

**Not a fit (say so on the page):**
- Configured or one-off priced products: glass units with "up to 20,000 combinations", roofing, furniture, hydraulics (SDR). Practitioner: "I see something like Shopify working for products, not for real manufacturing." These need CPQ or quoting, not ordering.
- Contract manufacturers making to customer drawings (jobs, not catalogue items).
- Low volume, high value: "about 30 a year" (SDR).
- Big retail customers already on EDI for most volume (SDR).
- Bespoke or in-house ERP with no interface, or mid ERP migration (Growth, SDR).
- Spot or commodity pricing with no data source (SDR, Aztec Oils).

## 2. Verified pain points

| # | Pain | Best evidence (source, quote, URL) | Strength | Manufacturer-specific? |
|---|---|---|---|---|
| 1 | Orders arrive in every format and are retyped into the ERP | r/manufacturing top comment: "Everyone uses a different PO format, even down to the file type." https://www.reddit.com/r/manufacturing/comments/1ijv9gh/_/mbh7j1f/ ; manufacturer: "Phone, email, PDF. Mostly PDF/email" https://www.reddit.com/r/manufacturing/comments/1s97ayc/_/odmmoch/ ; SDR: Metpro, Worktop Fabrications (UK manufacturers keying PDFs into BC and Sage 200) | Strong | Shared, but the best voices are manufacturers |
| 2 | Pricing per dealer, region or account, with rebates, is error-prone and breaks off-the-shelf shops | r/manufacturing, Sage user: "Multiple pricings for one item adjusted with pre-programmed rebates" https://www.reddit.com/r/manufacturing/comments/1ijv9gh/_/mbifjt1/ ; Own case, Kienesberger: a Shopware store would have needed "over 20 million entries" | Medium-strong | Shared; dealer and territory tiers lean manufacturer |
| 3 | Inside sales buried in admin and manual order entry (DACH) | ECC KÖLN B2BEST Barometer, 200 wholesalers and manufacturers, Sep 2026: 39% name manual order and quote entry the biggest bottleneck (co-run with Intershop, a vendor) https://www.etailment.de/magazin/2026-09-22-b2b-vertrieb-kunden-draengeln-formulare-bremsen | Medium-strong | Shared |
| 4 | Portal or shop not in sync with the ERP: stale stock, wrong prices | r/manufacturing portal thread: "Customers see stale stock, wrong pricing" (vendor-flavoured) https://www.reddit.com/r/manufacturing/comments/1oc88wa/_/ok8prtg/ ; developer: "integrating into whatever database/ERP is where the work is at" https://www.reddit.com/r/manufacturing/comments/1oc88wa/_/nklahki/ | Medium-strong | Shared |
| 5 | Messy product data: inconsistent SKUs, price tiers, variants | Agency on r/manufacturing: "manufacturers tend to have messy product databases with inconsistent SKUs" (vendor-written) https://www.reddit.com/r/manufacturing/comments/1oc88wa/_/nkyi23r/ | Medium | Leans manufacturer |
| 6 | New ERP means the old portal must be rebuilt | Own case, Doppler: keeping the portal on the new ERP needed "a complex, costly overhaul" https://b2bware.com/case-study-doppler/ ; SDR: several prospects mid-migration | Medium | Shared, seen in our manufacturer case |
| 7 | Sales agents and reps order on old tools without live prices | Own case, Doppler: agents ordered "via a basic CSV integration" without real-time pricing. DE agency: "Außendienst, CRM, ERP und Bestellprozess laufen nebeneinander" (vendor-written) https://e-companion.de/b2b-haendlerportal-hersteller-preislisten-sortimente-nachbestellung/ | Medium-weak | Manufacturer-specific (agents, Handelsvertreter) |
| 8 | Dealers phone or email for stock, lead times and order status | Aleran: "If users still need to email customer service for updates, the portal is failing." (vendor-written) https://www.aleran.com/build-customer-portal-infor-syteline-dealers/ ; e-companion: "Preislisten per Mail, Rückfragen zu Verfügbarkeit" (vendor-written) | Medium-weak | Leans manufacturer (made-to-order lead times, dealer networks) |
| 9 | Dealers see a price that does not match what the rep said, stop trusting the portal | Above The Fray: portals fail on "incorrect or incomplete information" incl. pricing (vendor-written) https://abovethefray.io/threads/dealer-portals-are-failing/ ; TP: Sana-commissioned survey, inaccurate pricing holds buyers back | Medium-weak | Shared |
| 10 | Selling D2C and to trade from one ERP: two price sets, one stock pool | Harrows Darts runs both (observed, no quote). Shopify forum: retailers asking how to show trade prices to logged-in trade customers https://community.shopify.com/t/how-do-i-create-a-customer-account-login-for-my-trade-customers/182301 | thin | Manufacturer-specific |
| 11 | Spare parts: wrong part numbers, slow quotes by phone | Welding World: "81%" of OEMs struggle with ordering errors, but no source given; Fomaco case: dealers ordered parts "by email or phone" (vendor-written) https://truvio.com/case-studies/fomaco-transforms-spare-parts-ordering-with-self-service-portal | thin | Manufacturer-specific. Do not use the 81% |
| 12 | Dealer-only vs direct is a live strategy question | r/manufacturing, metal building maker weighing "dealer-only versus continuing to sell direct" https://www.reddit.com/r/manufacturing/comments/1r1kpaz/ | thin (as a software pain) | Manufacturer-specific |

**Counter-evidence (important):** many manufacturers accept manual entry or bill it back. "the juice isn't worth the squeeze" https://www.reddit.com/r/manufacturing/comments/1ijv9gh/_/mbo4djs/ ; "Most shops I know are all manual." https://www.reddit.com/r/manufacturing/comments/1s97ayc/_/odmmoch/

**Do not misuse:** the famous "I'm a manufacturer, not a data entry clerk" thread (r/manufacturing 1nzspb1) is about typing into *customers'* supplier portals. B2Bware does not fix that. Do not quote it on this page.

## 3. How each capability helps, and where we are weak

| Capability | Manufacturer use | Pains | Proof |
|---|---|---|---|
| Ordering portal | Dealers, stockists and retailers reorder at their own price list or discount band, see stock, repeat last order; reps and sales agents order for them in the same portal | 2, 4, 7, 8, 9, 10 | Kienesberger, Doppler, Harrows (own cases) |
| AI order reading | Dealer and distributor POs by email, PDF, spreadsheet: their part codes and packs mapped to yours, checked, posted to the ERP | 1, 3, 5 | No named emailed-orders customer (EO). Do not borrow Doppler numbers |
| Webshop to ERP link | D2C shop and trade store on one ERP, one stock pool, separate prices; repair after ERP change | 4, 6, 10 | Harrows (D2C plus trade, details unconfirmed) |
| Sales app (add-on) | Field reps and agents order at trade shows and visits with live prices | 7 | Doppler (portal, not the app) |
| EDI (add-on) | Big retail or distributor accounts | Fit edge | None |

**Where we are weak:**
- Configured products: no configurator or CPQ. Qualify out.
- Manufacturing ERPs: Epicor, SYSPRO, Infor, IFS, Sage X3 variants. Growth brief: of one partner's four ERPs only X3 had a connector. "Any ERP" must be checked per ERP before we claim it here.
- Status and lead times from production (pain 8): not confirmed that the portal shows order status, backorders or promised dates. Team question.
- Spare parts: no exploded diagrams, serial-number lookup or supersession. Do not promise a parts catalogue.
- Proof: no quote or number from Harrows; Doppler errors figure inconsistent ("zero" vs "90% fewer"); no emailed-orders customer.
- UK competition for Sage 200 portals is dense (Red Technology tradeit, Modulus365, Portal People, Intellisell, Codeless). Sana leads on "manufacturing buyers" (vendor).

## 4. Buyer language

Use: dealers, stockists, trade customers, retailers, distributors, "trade store", "trade prices", price list, discount band, rebates, "their part codes", POs, "PDF/email", order entry, "on account", lead times, "where's my order", sales agents, reps, spare parts, repeat orders, "Sage", "Business Central".
DACH: Händler, Handelsvertreter, Außendienst, Innendienst, Preislisten, Nachbestellung, Händlerportal, Auftragserfassung.
Avoid in headlines: "B2B commerce", "digital transformation", "omnichannel", "AI agent", "self-service" (vendor words).

## 5. Recommended page angle

**Headline direction:** "Your dealers order at their own prices. Straight into your ERP." Sub: whether they order in a trade portal, by email or through your reps, nobody retypes it, and you keep your ERP. Name the fit up front: "for manufacturers selling standard products to dealers, stockists and trade customers".

**Lead with (top 4):**
1. Orders in every format, retyped into the ERP (pain 1, Strong).
2. Every dealer has a different price, and shops cannot carry it (pain 2, Medium-strong; Kienesberger).
3. Portal or shop out of sync with the ERP, and a new ERP means rebuilding it (pains 4 and 6; Doppler).
4. Reps and sales agents ordering for dealers without live prices (pain 7; Doppler, our strongest manufacturer proof even though outside evidence is weak).

Then: D2C plus trade from one ERP (Harrows, once confirmed), and an honest "not for configured products" block.

**Do not lead with:**
- Spare parts statistics or any "81%" style number (unsourced).
- Channel conflict or "go D2C" advice: a strategy debate, not our fix.
- "Dealers will switch suppliers" or adoption stats (vendor surveys, stated intent).
- The "not a data entry clerk" quote (wrong direction).
- Order status and lead-time visibility, until the team confirms we show it.
- Configurators, CPQ, or "any ERP" for manufacturing ERPs not yet connected.

**Team questions:** (1) Which manufacturing ERPs have working connectors (Epicor, SYSPRO, Sage X3, IFS)? (2) Can the portal show order status, backorders and delivery dates from the ERP? (3) Harrows: ERP, one ERP for D2C and trade, any quote? (4) Doppler errors figure. (5) Do sales agents get commission tracking or territory views?
