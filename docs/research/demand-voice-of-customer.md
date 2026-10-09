# Demand check: voice of the customer

Research date: 23 September 2026
Question from the CEO: "Is there demand for this, or are we guessing there's a gap?"
Track: what buyers say in public, in their own words, about (1) B2B trade portals and webshops connected to the ERP, (2) emailed and PDF orders retyped into the ERP, (3) broken ERP-to-webshop connectors.

---

## 0. Method and limits (read this first)

- **Reddit** was the main source. It was read through the Arctic Shift Reddit archive API (reddit.com blocks direct access from this environment). Subreddits: r/ERP, r/Netsuite, r/Dynamics365, r/Sage, r/manufacturing, r/supplychain, r/smallbusiness, r/smallbusinessuk, r/ecommerce, r/shopify, r/procurement, r/edi, r/de_EDV, r/selbststaendig, r/Unternehmer, r/Odoo. About 60 searches, with full comment threads pulled for 23 threads.
- **Other sources:** Shopify Community forum (Discourse JSON), Shopify App Store review pages for the NetSuite and Business Central connectors, Microsoft Learn (to check native features), Capterra (one listing).
- **Not covered:** The session ran out of web searches (200-call limit shared across the session) early in this track. G2 returned 403. Sage City search returned nothing useful. So Sage City, the Microsoft Dynamics Community forum, the JTL and Shopware forums, Spiceworks and Xing were **not** properly mined. The UK and DACH evidence is thinner than it should be because of this. A follow-up pass on those forums is worth doing.
- **Biases to keep in mind:**
  1. The people posting on Reddit are mostly admins, ops staff, consultants and developers, not the MD or owner who signs the cheque.
  2. Many posts describing the "pain" were written by founders doing market research (AI order-entry startups especially). I have labelled these **[vendor/founder post]**. The replies to those posts count as evidence. The posts themselves count for little. Moderators of r/smallbusiness and r/manufacturing complain openly about this kind of post, which shows how many founders are chasing the same problem.
  3. NetSuite and Shopify threads dominate because those communities are big and active. That makes the US look larger than it may really be.
- **Labels used:** **Quote** means exact text as it appears in the archive. Em dashes in originals are shown as hyphens. **Paraphrase** means a summary. **Inference** means my own interpretation, not what the source says.

---

## 1. Problems buyers actually describe (ranked by how often they come up)

Buyers almost never say "messy data". They describe the business problem it causes. The ranking below comes from roughly 45 relevant threads and reviews.

| Rank | Problem as buyers describe it | How often in sample | Strength | Main routes |
|---|---|---|---|---|
| 1 | Integration breaks or systems drift out of sync (stock, orders, refunds, prices), and nobody knows which system is right | Very frequent (15+ threads/reviews) | Strong, from real operators and admins | 3 (connector repair), 1 |
| 2 | Hours lost retyping emailed/PDF/Excel orders into the ERP | Frequent (10+ threads) | Strong, but inflated by vendor posts | 2 |
| 3 | Customer-specific pricing, catalogues and company/buyer hierarchies do not map from ERP to webshop | Frequent (9 threads) | Strong in NetSuite/Dynamics/Sage 200 circles | 1, 3 |
| 4 | Manual keying causes errors (wrong material, wrong price, typos) | Moderate (6+) | Medium | 2 |
| 5 | Every customer uses a different PO format and different product names or codes | Moderate (5+) | Strong: this is the thing that kills DIY OCR projects | 2 |
| 6 | Big customers impose their own portals, EDI or punchout on the supplier | Moderate (5+) | Strong, but this is the supplier-side mirror of our offer | adjacent to 2 |
| 7 | Can't grow without hiring more admin staff | Moderate (4) | Medium | 2 |
| 8 | Customers want to reorder themselves (after hours, from their own item list) but still email or phone | Low to moderate (4) | Medium to weak | 1 |
| 9 | Connector costs jump or vendors mis-sell (for example a $12k B2B connector, or "not compatible") | Moderate (5) | Strong trigger | 3 |
| 10 | Reps tied up as order-takers instead of selling | Low (1 to 2, vendor-flavoured) | Weak | 2 |
| 11 | Losing customers to competitors who have portals | Very low (1) | Weak | 1 |

### Trigger events that make buyers act (with evidence)

| Trigger | Evidence |
|---|---|
| **Launching B2B online, then hitting a connector wall** | "Shopify Plus B2B looks pretty good and I started setting it all up but I have hit a wall with the NetSuite integration... Now NetSuite wants $12,000 for the B2b version of the connector. That seems crazy!" (r/Netsuite, 2025-10-23) https://www.reddit.com/r/Netsuite/comments/1oedj8p/shopify_plus_b2b_and_netsuite_integration/ |
| **Vendor mis-sell or incompatibility** | "We have been sold the Netsuite Ecommerce Premium Plus Connector... NetSuite have come back saying that the connector is not compatible with B2B sites." (r/Netsuite, 2025-08-07) https://www.reddit.com/r/Netsuite/comments/1mjputg/netsuite_connector_not_compatible_with_shopify_b2b/ |
| **ERP update breaks the connector** | UK merchant Simply4Crafts, 1-star review: after the BC version 26.0 update, orders stopped syncing automatically and had to be triggered by hand (paraphrase, 2025-04-29) https://apps.shopify.com/dynamics-365-business-central/reviews |
| **iPaaS price rise** | "as we see more and more people complaining about Celigo's raise in prices this year and looking for other options" (r/Netsuite, 2025-10-27) https://www.reddit.com/r/Netsuite/comments/1ohhbct/using_n8n_to_connect_netsuite_with_shopify/ |
| **ERP migration** | "In 2 Wochen migrieren wir auf ein neues ERP. Dann läuft deutlich mehr mit EDI oder OCR mit AI." (r/de_EDV, 2026-02-14) https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o5b6uz4/ . Counter-case: one firm refused a £2k integration **because** it might change ERP (see 3.4). |
| **Key staff leave or retire** | "I am losing the previous owner in a month to retirement... I think I just need to pay someone to help me get this done." (r/Sage, 2026-05-07) https://www.reddit.com/r/Sage/comments/1t6ch2i/sage_consultingtraining/ ; "the person who was mainly training me quit" (r/ecommerce, 2024-06-07) https://www.reddit.com/r/ecommerce/comments/1d6byzt/_/l7gx17x/ |
| **Leadership mandate** | "Our CFO and Chief Growth Officer are pushing to automate order entry for our customer service team which is something I have to dive into this year" (r/Dynamics365, BC user, 2026-03-01) https://www.reddit.com/r/Dynamics365/comments/1rg0e8w/_/o7zpd76/ |
| **Customer asks why you are behind** | "a client casually asked why we're still sending quotes out of Excel while they're in Dynamics 365 Business Central. That kinda hit a nerve" (r/Dynamics365, 2026-05-01) https://www.reddit.com/r/Dynamics365/comments/1t0qx0r/is_it_worth_hiring_people_to_set_up_business/ |
| **Costly error or overselling** | "We oversold inventory again today. Customer support was pissed. Warehouse blamed shopify. Ops blamed amazon sync... Nobody actually knew what broke." (r/Netsuite, 2026-05-22) https://www.reddit.com/r/Netsuite/comments/1tkp870/best_ecommerce_erp_tools_for_inventory_hell/ |
| **Growth past the spreadsheet** | "as the business grows, we're finding we're outgrowing both" (UK, Sage 50 + Excel, 2026-04-28) https://www.reddit.com/r/smallbusinessuk/comments/1sy2oyr/erp_software_advice_for_a_madetoorder_small/ |
| **Customer mandates (EDI or portals)** | Suppliers are pushed onto EDI by retailers even at one order per month (r/edi, 2026-07-01) https://www.reddit.com/r/edi/comments/1ufubb2/_/ouy0zvt/ |
| **E-invoicing (DACH)** | Several German posts on "E-Rechnung" show digitisation pressure in 2026 (for example r/de_EDV "Wie macht ihr bestehende Systeme oder ERPs fit für E-Rechnungen?", 2026-03-23, https://www.reddit.com/r/de_EDV/ ). **Inference:** this could act as a door-opener in DACH, but no post links it directly to order intake. |

---

## 2. Evidence the pains exist (42 items)

### 2A. Manual entry of emailed/PDF orders (route 2)

1. **Quote:** "The biggest issue for us is that customer purchase orders don't come in the same format. Everyone uses a different PO format, even down to the file type. You could get a PDF, word Doc, Online Release and even an Excel or a phoned in PO all in the same day." Score 29, the top comment. r/manufacturing, 2025-02-07, region unknown. https://www.reddit.com/r/manufacturing/comments/1ijv9gh/_/mbh7j1f/
   - The parent post "Why is sales order processing still so manual in 2025?" (score 42, 31 comments) reads like a vendor post, but the replies are real. https://www.reddit.com/r/manufacturing/comments/1ijv9gh/why_is_sales_order_processing_still_so_manual_in/
2. **Quote:** "There is still no way with our current ERP system to easily load that data without some manual data entry, even though it's the same release every week." r/manufacturing, 2025-02-07. https://www.reddit.com/r/manufacturing/comments/1ijv9gh/_/mbh8iia/
3. **Quote:** "I hate manual entry, all it does is add the chance of human error into the mix... So we expend labor to add chances for errors." r/manufacturing, 2025-02-07. https://www.reddit.com/r/manufacturing/comments/1ijv9gh/_/mbhpawh/
4. **Quote:** "Our issue is with how our pricing rules flow.... Multiple pricings for one item adjusted with pre-programmed rebates... We use Sage... I think there's just too much room for human error any way you slice it." r/manufacturing, 2025-02-07 (Sage user). https://www.reddit.com/r/manufacturing/comments/1ijv9gh/_/mbifjt1/
5. **Quote:** "Contract manufacturer so purely manual... Most shops I know are all manual." Then: "Probably 20-30 a day. Phone, email, PDF. Mostly PDF/email". r/manufacturing, 2026-04-01. https://www.reddit.com/r/manufacturing/comments/1s97ayc/_/odmmoch/
   - The parent post [vendor/founder post] says: "We get about 40+ a day via email -- PDFs, spreadsheets, sometimes just a list in the email body. Someone on the team still has to manually retype every line item into our ERP." https://www.reddit.com/r/manufacturing/comments/1s97ayc/how_is_your_team_handling_manual_po_entry_in_2026/
6. **Quote (DE):** "War in meiner alten Firma bei allem so. Emails wurden ausgedruckt und dann per Hand in's System eingetippt... Ca. 100 Mitarbeiter... knapp über 100Mio Umsatz im Jahr." Score 20. r/de_EDV, 2026-02-13, Germany. https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o5611jp/
7. **Quote (DE):** "Also Bestelldokumente wie du sie beschreibst, werden wohl im Mittelstand überwiegend per hand ins ERP übertragen. Ist auch nicht ganz so trivial das komplett zu automatisieren." Score 11. r/de_EDV, 2026-02-13. https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o562j3x/
8. **Quote (DE):** "Da wo ich arbeite 60 - 70% aller Belege. 6 FTE... HR arbeitet schon daran die Stellen zu streichen. Einfach unfassbar was da an Geld verbrannt wird." r/de_EDV, 2026-02-14. https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o5b6uz4/
9. **Quote (DE), EDI provider (vendor-side estimate):** "Wir sind EDI Dienstleister und was wir da mitbekommen werden ca 70% aller Belege manuell verarbeitet." r/de_EDV, 2026-02-13. https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o57cyle/
10. **Quote (DE), ERP consultant:** "Ja, ist weiterhin normal, auch bei Neueinführungen unserer Lösung... Viele kleine Geschäftskunden? Ähnlich wie im Einkauf." r/de_EDV, 2026-02-13. https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o57abwm/
11. **Quote:** "I started a new job for a small company and the workflow of processing orders is driving me crazy. Everything is done manually, lots of copying & pasting... It can take 10-40 minutes to process just ONE order." r/ecommerce, 2024-06-02, US likely, office assistant. https://www.reddit.com/r/ecommerce/comments/1d6byzt/is_it_normal_for_b2b_to_send_purchase_orders/
12. **Quote:** "I have been trying for years to find an integration for my orders from Shopify to flow into sage 50. It seems ridiculous to get an order and then have to manually key it into sage50." r/Sage, 2024-01-11, US, owner. https://www.reddit.com/r/Sage/comments/194b3f1/sage50_to_shopify_order_integration/
13. **Quote:** "I started a new job doing order entry for a company that uses Sage 300... everything has to be put in manually, multiple times in multiple places... I'm desperate for a *free* sol[ution]". r/Sage, 2025-09-11. https://www.reddit.com/r/Sage/comments/1nemmuy/help_me_sage_300_service_manager/ (Note: this person wants a free fix, so it is not buying demand.)
14. **Quote, supplier side:** "I work with an EDI provider and I was shocked to learn that one of our customers who has 22 EDI suppliers also has 900 (!!!) small and/or unwilling suppliers who still send order responses via email that require manual processing." r/edi, 2025-08-29 [vendor]. https://www.reddit.com/r/edi/comments/1n1pwg1/_/nbenque/

### 2B. ERP-to-webshop/portal sync failures (route 3)

15. **Quote:** "The most painful integration I've seen was a mid-size retailer running Shopify plus a 3PL plus NetSuite... It had been silently double-counting revenue for four months before anyone caught it... the pain isn't in building the initial connection. It's that the edge cases are invisible until they've already done damage." r/Netsuite, 2026-06-03. https://www.reddit.com/r/Netsuite/comments/1tv3j4g/_/ophj2j5/
16. **Quote:** "We switched POS before and the main problem was the sync. It only pushed data back overnight, which caused stock issues, account/credit mismatches, and extra manual cleanup. That is not integration in my book. We need a POS that can handle trade accounts, customer-specific pricing, credit checks..." r/Sage, 2026-05-16, **UK trade wholesaler, Magento + Sage 200**. https://www.reddit.com/r/Sage/comments/1teyjjj/need_pos_recommendations_for_sage_200_and_magento/
17. **Quote:** "Inventory syncing is also inconvenient and extremely unreliable...Some items update correctly while others do not". The native Business Central Shopify connector has a 2.6/5 average from 28 reviews. New York Cosmetics, US, 2026-09-11. https://apps.shopify.com/dynamics-365-business-central/reviews
18. **Paraphrase:** Orders stopped syncing automatically after the BC 26.0 update and had to be triggered by hand. Simply4Crafts, **UK**, 1 star, 2025-04-29. Same page.
19. **Quote:** "Very difficult platform to manage. Need to be very careful on syncs because it causes changes" to store item data; "Very tedious to maintain". Curveez, US, 1 star on Oracle's NetSuite connector, 2025-08-08. https://apps.shopify.com/oracle-netsuite/reviews
20. **Quote:** "Stay the hell away from ebridge/jitterbit... Ebridge took many thousands from me, lied about the scope of the project, requesting more funds, and never produced any orders successfully." r/Sage, 2024-01-17, US, Sage 50. https://www.reddit.com/r/Sage/comments/194b3f1/_/kicxjp0/ (a **failed integration project**)
21. **Paraphrase:** Cartspan got as far as a working test connection, then required all 850 customer IDs to be re-coded, then "ghosted us" from October onward. r/Sage, 2024-01-12, US. https://www.reddit.com/r/Sage/comments/194b3f1/_/khj8atg/ (an **abandoned integration project**)
22. **Quote:** "Starting to feel like our backend is held together with tape... I dont even care about finding the perfect system anymore. I just want inventory numbers that actually match everywhere for once." r/Netsuite, 2026-05-22. https://www.reddit.com/r/Netsuite/comments/1tkp870/best_ecommerce_erp_tools_for_inventory_hell/
23. **Quote:** "inventory sycn delays dublicate data between systems, manual reconciliation... Nothing catastrophic individually but together they create..." (mid-size, B2B + DTC). r/Netsuite, 2026-05-14. https://www.reddit.com/r/Netsuite/comments/1td5nlw/what_was_the_first_sign_your_operational_stack/
24. **Quote (DACH, practitioner):** "I've had to completely rewrite fully functional integrations three times. All because they can't stop breaking and changing their API." (about Xentral). r/selbststaendig, 2026-03-28. https://www.reddit.com/r/selbststaendig/comments/1s41m87/_/od0qgca/
25. **Quote (DE, Sage 50 Germany):** "We tried to contact the Sage Support, but they just told us that they don't support xml / json from thirdparty shops." A German Sage 50 "Auftrag" user cannot import orders from a non-listed shop. r/Sage, 2026-05-06. https://www.reddit.com/r/Sage/comments/1t5b14e/sage_50_orders_from_onlineshop_into_sage_50/

### 2C. Customer-specific pricing in B2B portals (route 1)

26. **Quote:** "B2B Integrations where pricing needs to be accurate were already a bit of a nightmare with the existing setup". NetSuite consultant on a new pricing feature. r/Netsuite, 2026-09-15. https://www.reddit.com/r/Netsuite/comments/1wh91b0/_/pa0lbwb/
27. **Quote:** "NetSuite's native connector works fine for standard Shopify setups, but Shopify B2B introduces things like company profiles, PO terms, and custom pricing. That data doesn't always map cleanly... B2B gets messy fast." r/Netsuite, 2025-08-07. https://www.reddit.com/r/Netsuite/comments/1mjputg/_/n7gqz5n/
28. **Quote:** "In Shopify B2B, we have a company with multiple users placing orders. In NetSuite, the company is created as the parent and the users as sub-customers... we need all transactions to be under the parent company." r/Netsuite, 2026-03-17. https://www.reddit.com/r/Netsuite/comments/1rw624v/shopify_connector_b2b_customers_hierarchy/
29. **Quote:** "This tends to get complex once customer-specific pricing and discounts are involved." r/Dynamics365 (F&O + Magento), 2026-04-10. https://www.reddit.com/r/Dynamics365/comments/1shj8ro/how_are_you_handling_tiered_b2b_pricing_between/
30. **Quote, BC practitioner:** "I had this exact scenario at a customer, we had two price fields one for calculated (BC Pricing) on for imported (integration pricing). Followed by a flag if they didn't match". r/Dynamics365, 2026-09-21. https://www.reddit.com/r/Dynamics365/comments/1wm6vhd/_/pb4k6wu/
31. **Quote:** "Shopify still doesn't have a true 'segment-based automatic discount' that works cleanly for both B2B and B2C... So you're not missing anything - this is a known gap." Shopify Community, 2026-01-13. https://community.shopify.com/t/best-way-to-apply-discounts-for-b2b-and-b2c-on-shopify-erp-integration/392078
32. **Quote:** "a UK wholesaler... their ERP/inventory system honestly feels like it hasn't been touched since the early 2000s. Clunky UI, almost no integrations, lots of manual work... large catalogue (70k+ products), multiple pricing lists for different customer groups". r/smallbusinessuk, 2025-12-28. The poster is an adviser, and a commenter notes they promote a SaaS. https://www.reddit.com/r/smallbusinessuk/comments/1py5xxg/wholesalers_software_erps_which_ones_are_goodbad/
33. **Quote, customer's own item list (portal need):** "Each of our customers has a unique list of around 30-50 items they order routinely. So, it is imperative to me that any solution we use has a way for customers to easily view their unique list, add quantities and submit." US medical supplies distributor on Odoo. r/ecommerce, 2024-12-31. https://www.reddit.com/r/ecommerce/comments/1hqg8dh/_/m4qhlhm/

### 2D. Customer part codes and messy product data (routes 1 and 2)

34. **Quote (DE):** "Das größte Problem sind die Materialbezeichnungen. Die sind leider bei den Kunden und teilweise auch bei uns inkonsistent... Wir haben an dieser Stelle aber leider auch eine 0 Fehlertoleranz". Also: "Wir arbeiten seid ca 2 Jahren daran die OCR Software die PDF Aufträge unserer Kunden lesen zu lassen und bei SAP einzupflegen... Die ganz einfachen Standardfälle funktionierten". r/de_EDV, 2026-02-13/16, German chemical manufacturer. https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o57m66c/ and https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o5nv9m7/ (a **stalled in-house project**)
35. **Quote:** "3M moved to a new system... They decided to change every fucking SKU... they couldn't map the new SKUs to the old SKUs. Sigh. Ordering has grounded to a agonising crawl". r/manufacturing, 2025-02-08, distributor. https://www.reddit.com/r/manufacturing/comments/1ijv9gh/_/mbmeine/

### 2E. "Just do it for us" versus DIY

36. **Quote:** "Seeking a contractor for a Netsuite/Shopify integration... Two websites, 30k+ SKUS, 300k+ annual transactions. We are agnostic to the IPAAS as long as it works well and the contractor has multiple successful integrations under their belt." r/Netsuite, 2026-07-29, US. https://www.reddit.com/r/Netsuite/comments/1va8e4q/netsuiteshopify_integration_seeking_partner/ . About 15 vendors replied within days (see section 4).
37. **Quote:** "We ended up doing it for our largest buyers (we used TradeCentric...they handled all the tech set up and project plans between us and the buyers). We thought about doing it in house via our IT team, but all of the configurations would have been a nightmare." r/procurement, 2026-03-14, supplier side. https://www.reddit.com/r/procurement/comments/1rsngkf/_/oaefjka/
38. **Quote:** "My reticence to go with a collection of apps is that it feels too piecemeal... all the developers point the finger at the other apps... We don't have a regular dev team, so it took forever to get sorted out." r/shopify, 2025-10-16, B2B merchant evaluating Plus. https://www.reddit.com/r/shopify/comments/1o7itmm/_/njrff5y/
39. **Quote:** "I was considering using [Continia] to automate our sales orders too... but it's honestly not that user friendly and I feel our customer service team will struggle to set it up properly which will eat up more of my time." r/Dynamics365, BC user, 2026-03-02. https://www.reddit.com/r/Dynamics365/comments/1rg0e8w/_/o85k2ta/
40. **Quote:** "I think I need to hire a consultant to come in and tell me what we are doing wrong and what is possible... I think I just need to pay someone to help me get this done." r/Sage, 2026-05-07, new owner of a window business on Sage 50. https://www.reddit.com/r/Sage/comments/1t6ch2i/sage_consultingtraining/
41. **Quote (DE):** "Das Problem daran ist, dass Unternehmen nicht das Geld in die Hand nehmen wollen, weil das alte System funktioniert und jeder es kennt... es muss jemanden geben der sich damit auskennt -> meisten ein externer der viel kostet. Und davor haben viele Angst". r/de_EDV, 2026-02-13. https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o567d0v/ . This supports done-for-you because they lack the skills in-house, but also shows fear of paying an expensive outsider.
42. **Quote (DE):** "Das eigentliche Problem ist aber nicht, dass kein Wille oder keine Schnittstellen da wären, sondern dass einfach unsere Entwickler gar nicht hinterher kommen mit der Arbeit." r/de_EDV, 2026-02-13. https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o56k1u9/

---

## 3. Willingness to pay, and in what form

### 3.1 Price points buyers actually mention

| What | Price | Buyer reaction | Source |
|---|---|---|---|
| NetSuite connector (Shopify B2C) | ~$2,500/yr | Accepted | https://www.reddit.com/r/Netsuite/comments/1oedj8p/shopify_plus_b2b_and_netsuite_integration/ |
| NetSuite B2B connector | $12,000/yr | "That seems crazy!" | same |
| MindCloud Shopify B2B connector | from ~$3,500/yr (vendor comment) | n/a | https://www.reddit.com/r/Netsuite/comments/1oedj8p/_/nl4jq6k/ |
| B2B integration alternative for NetSuite | ~$1,000/month (paraphrase of review) | Complaint about cost | https://apps.shopify.com/oracle-netsuite/reviews |
| eBridge (Jitterbit) Sage 50 to Shopify | ~$5,500/yr, 3-year minimum, for 200 to 250 orders/month | "I'd like to find something a bit more economical" | https://www.reddit.com/r/Sage/comments/194b3f1/_/khj9rsi/ |
| Codeless Platforms (Sage 50) | not stated | "was too expensive" | https://www.reddit.com/r/Sage/comments/194b3f1/_/lczkx0m/ |
| Shopify Plus for B2B | quoted as $2,300/month | "not affordable for us" (distributor expecting under $5k/month online) | https://www.reddit.com/r/ecommerce/comments/1hqg8dh/_/m4qdm92/ |
| PDF-to-order SaaS (LevelOps) | CA$149 / 250 / 1,000 per month | no reviews | https://www.capterra.com/p/10014165/Obius/ |
| Clerk versus integration | "paid someone to do it (£50k by the time I left) the Dev time was about £2k" | Management chose the clerk | https://www.reddit.com/r/manufacturing/comments/1nzspb1/_/ni4mkcp/ (UK, from the £) |
| Custom NetSuite/Shopify script | "I've seen clients pay developers between $5,000 to $10,000" | Consultant claim | https://www.reddit.com/r/Netsuite/comments/1uq4avw/netsuiteshopify_batch_deposit_script/ |

**Inference:** Buyers accept a few thousand per year for a connector that works. Resistance starts around $5k to $12k per year when a small firm cannot see the difference. The £50k clerk versus £2k dev story shows the usual pattern: labour already on the payroll is the default "purchase", and integration spend loses out even when the ROI is obvious.

### 3.2 Form of purchase buyers lean towards

- **Done-for-you or managed (supporting evidence):** items 36, 37, 38, 40. The NetSuite buyer asked for a contractor and said they did not care which tool was used. The TradeCentric user chose managed over in-house IT. The Shopify B2B merchant has no dev team and fears finger-pointing between apps. In the r/manufacturing portal thread, a practitioner says: "various providers will outsource this for you, or you can hire for it" https://www.reddit.com/r/manufacturing/comments/1nzspb1/_/ni6yr1f/ . An r/edi vendor comment says "If you don't have in-house EDI or ERP integration experience, managed or semi-managed solutions make way more sense early on" (vendor view) https://www.reddit.com/r/edi/comments/1hljko3/_/nuixsrx/
- **Software/DIY:** n8n, Power Automate and scripts come up often in technical threads (for example "Use N8N." https://www.reddit.com/r/Netsuite/comments/1oedj8p/_/nl1giu1/ ; a UK Sage 50 user built "an automation using power automate for orders, emailed to a specific inbox, to be automatically uploaded to Sage 50 (UK)" https://www.reddit.com/r/Sage/comments/1t5b14e/_/ok9imiv/ ). Pushback: "There's nothing wrong with N8N but that is often seen more as a toy than a production-ready app." https://www.reddit.com/r/Netsuite/comments/1ohhbct/_/nlp8cf2/
- **Hiring staff or outsourcing admin:** "Heyoooo! Common issue, sounds like you need to invest in an Admin. We've got four now who can handle this madness... the Admins spend 2-3 hours PER DAY." https://www.reddit.com/r/manufacturing/comments/1nzspb1/_/ni52uhc/ . German small B2B shop owner: "Einen Mitarbeiter dafür einzustellen lohnt sich leider nicht" and the replies suggest "Bürodienstleister" or call centres https://www.reddit.com/r/selbststaendig/comments/1mi1n3r/b2bshop_alleine_managen_wie_automatisiert_ihr/
- **Supplier pays for the customer's ordering tool (DE):** "Wir haben einigen unserer großen 'kleinen' Kunden ein digitales Bestellsystem inkl. Hardware an die Hand gegeben. Das geht direkt ins ERP... die Kosten liegen bei uns." https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o5d11ka/ . This is direct evidence that a DACH supplier already pays for route 1.

---

## 4. Evidence AGAINST demand (or against us winning it)

### 4.1 "It is not worth it" or "it is the job"

- **Quote:** "Its not that big an issue, the juice isn't worth the squeeze." https://www.reddit.com/r/manufacturing/comments/1ijv9gh/_/mbo4djs/
- **Quote (score 46, top comment):** replying to "I'm a manufacturer, not a data entry clerk": "That's where you're wrong my friend". https://www.reddit.com/r/manufacturing/comments/1nzspb1/_/ni4fr36/ . Many replies say to bill the admin time back to customers or build it into the price instead of automating: "Zero minutes. It's all billed to them at engineering rate." https://www.reddit.com/r/manufacturing/comments/1nzspb1/_/ni4kamz/
- **Quote:** "The only time I hear much of anything about automated entries is by people marketing their software or doing market research. Most shops I know are all manual." https://www.reddit.com/r/manufacturing/comments/1s97ayc/_/odmmoch/ . The pain is real but people accept it.
- **Quote:** "Sage 50 does everything I need and I've been using it for 25 years. I'm not looking to grow." https://www.reddit.com/r/Sage/comments/194b3f1/sage50_to_shopify_order_integration/
- Boss will not spend: "We use Zoho and it's extremely manual, super easy to mess up but my boss doesn't want to spend any more to upgrade." https://www.reddit.com/r/ecommerce/comments/1d6byzt/_/l6zkmf3/
- UK cost sensitivity: "We can't really justify the cost of Sage 200, to be honest with how Sage are inflating their prices each year" https://www.reddit.com/r/smallbusinessuk/comments/1sy2oyr/_/oixl4dk/

### 4.2 Accuracy objection to automated order capture

- **Quote (DE):** "Wir haben keines gefunden, dass mehr als 75% der per Email eintreffenden Bestellungen richtig erkannt hat... 3 von 4 Bestellungen ist oft inakzeptabel, da man dadurch trotzdem alles prüfen muss". https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o56c8ro/
- **Quote (DE):** "wenn nur 10% Fehlerquote sind heisst das, dass trotzdem 100% der Belege nochmal geprüft werden müssen. Damit war die Zeitersparnis quasi wieder futsch". https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o57tpi9/
- **Inference:** This is the key objection for route 2. What sells is a low-effort review step plus mapping of customer part codes, not "AI reads PDFs".

### 4.3 Native tools and platforms closing the gap

- **Business Central Sales Order Agent** reads customer emails including PDF and image attachments. It matches items by item number, vendor item number, GTIN and **Item Reference** (customer part codes), checks stock and creates quotes or orders with human review. It is billed in Copilot Credits. https://learn.microsoft.com/en-us/dynamics365/business-central/sales-order-agent . **Practitioner sentiment is mostly negative so far:** "all the use cases I've tried so far showed that copilot in BC is completely useless" (score 16) https://www.reddit.com/r/Dynamics365/comments/1rg0e8w/_/o7ohguv/ ; but one commenter says "the sales order agent in BC could easily save a company several hours per week" https://www.reddit.com/r/Dynamics365/comments/1rg0e8w/_/o7prikb/
- **BC native Shopify connector** has supported Shopify B2B companies, catalogues and catalogue price sync since April 2024 (GA 2 April 2024). https://learn.microsoft.com/en-us/dynamics365/release-plan/2024wave1/smb/dynamics365-business-central/connect-business-central-shopify-b2b . Offsetting this, its App Store rating is 2.6/5.
- **Shopify B2B on the Basic plan** (2026): "Businesses that only needed simple pricing or customer-specific catalogs might rely on Shopify's native features now." https://community.shopify.com/t/b2b-available-on-the-basic-plan/615519
- Shopify Plus B2B is seen as much improved: "Net terms, customer-specific pricing, purchase orders - all native now." https://www.reddit.com/r/shopify/comments/1o69d4r/_/njf8m1f/ ; and "if a client is looking to take their 20 year old processes and have Shopify adapt to them, it's not the right fit." https://www.reddit.com/r/shopify/comments/1o69d4r/_/njfsuin/
- Standard connectors are "good enough": "if you tell a merchant 'hey, this is how our Netsuite integration works. If you can work within those parameters, it's $'... their 'requirements' have a habit of changing real fast." https://www.reddit.com/r/Netsuite/comments/1tv3j4g/_/opeptcr/

### 4.4 EDI as the answer (mixed)

- "EDI has been around forever and can make it 100% automated" https://www.reddit.com/r/manufacturing/comments/1ijv9gh/_/mbhq1e7/
- Against that: "EDI is a fucking nightmare unless both distributor and vendor are transacting huge volumes... Smaller companies don't have the budget" https://www.reddit.com/r/manufacturing/comments/1ijv9gh/_/mbjyezk/ ; and in German, "EDI? kostet und ist für kleine Buden nicht machbar." https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/o5d11ka/ . **Inference:** EDI covers big accounts. Email/PDF orders from the long tail of small customers stay manual, and that long tail is our space.

### 4.5 Crowded market

- A single US NetSuite request for a contractor drew about 15 vendor replies (MindCloud, Hairball, ipaas.com, Pandium, Indian consultancies, freelancers). https://www.reddit.com/r/Netsuite/comments/1va8e4q/netsuiteshopify_integration_seeking_partner/
- AI order-entry startups are posting all over these forums: AutoSalesOrder, zapord, Conexiom, OrderEase, HelloLeo ("agents that turn incoming customer emails into sales orders", 1,000+ companies claimed https://www.reddit.com/r/Netsuite/comments/1wcqctr/ ), and a German seller (LinkedIn link) in r/de_EDV.
- **Inference:** Demand is real enough that many vendors chase it. For B2Bware this looks like a competitive positioning problem more than a demand problem.

---

## 5. How buyers phrase the problem (for messaging)

### English (exact phrases)
- "manually key it into sage50" / "manually retype every line item into our ERP"
- "copying & pasting, many tabs open"
- "It can take 10-40 minutes to process just ONE order"
- "Everyone uses a different PO format"
- "same release every week" but "still no way... without some manual data entry"
- "held together with tape" / "duct tape in the stack"
- "I just want inventory numbers that actually match everywhere"
- "Nobody actually knew what broke"
- "That is not integration in my book" (overnight batch sync, UK)
- "two systems quietly fighting" (vendor phrasing, but it lands)
- "hit a wall with the NetSuite integration"
- "B2B gets messy fast"
- "a bit of a nightmare" (B2B pricing accuracy)
- "we expend labor to add chances for errors"
- "I'm a manufacturer, not a data entry clerk" (reported as a common owner line)
- "all the developers point the finger at the other apps"
- "I just need to pay someone to help me get this done"
- "trade accounts, customer-specific pricing, credit checks" (UK trade wholesaler's shopping list)
- "Each of our customers has a unique list of around 30-50 items they order routinely"

### German (exact phrases)
- "Wer von euch tippt noch Belege händisch ab?"
- "Bestelldokumente, die als PDF, Excel oder 'Freitext' per Mail kommen und dann händisch im System erfasst werden müssen"
- "Emails wurden ausgedruckt und dann per Hand ins System eingetippt"
- "Daten händisch von A nach B hacken"
- "am Ende muss halt leider alles händisch ins System gehackt werden"
- "werden wohl im Mittelstand überwiegend per Hand ins ERP übertragen"
- "Altes ERP-System bietet kaum offene Schnittstellen"
- "absolute Anarchie... was Formate und Schlüsselangaben betrifft"
- "Materialbezeichnungen... bei den Kunden inkonsistent" (customer part codes)
- "0 Fehlertoleranz"
- "Einfach unfassbar was da an Geld verbrannt wird"
- "ERP behalten und eine intelligente Erfassung davor setzen" (a commenter's framing of the solution: keep the ERP, put smart capture in front) https://www.reddit.com/r/de_EDV/comments/1r3q5ru/_/os63ha4/
- "Fax oft Standard. Per Mail ist Luxus."

**Inference for copy:** In English, buyers name the symptom ("retype", "doesn't match", "nightmare"). In German, they name the manual act ("händisch abtippen", "per Hand erfassen") and add a strong accuracy concern ("Fehlertoleranz", "prüfen"). "Keep your ERP" is a phrase German buyers produced themselves and could be used in copy.

---

## 6. Regional differences

| Region | Volume of evidence | What shows up | Confidence |
|---|---|---|---|
| **US** | Highest (most NetSuite, Shopify, Sage 50 US and manufacturing threads) | Connector cost and fragility (Shopify to NetSuite), B2B connector gaps, crowded vendor market, buyers who ask for contractors | Medium to high that the pain exists; high that competition is dense |
| **UK** | Thin (about 6 items) | Sage 200 + Magento trade wholesaler wanting live customer-specific pricing and credit checks; UK wholesaler on a 2000s ERP with multiple price lists; Sage 50 made-to-order firm; BC connector breaking after an update; £50k clerk versus £2k dev; price sensitivity over Sage costs | Low (sparse, but consistent with the offer) |
| **DACH** | Thin in volume, strong in quality (one 30-comment r/de_EDV thread plus about 5 others) | Mittelstand still keys PDF and email orders by hand; fax still common; failed or stalled OCR projects; accuracy intolerance; customer material codes; ERP API churn (Xentral, JTL); Sage 50 Germany lacks import; lack of internal developers; fear of costly consultants | Medium for route 2; low for routes 1 and 3 (not enough forum coverage) |

**Inference:** Reddit's audience skews towards the US. The UK and DACH findings are under-sampled, not negative. The DACH thread is the strongest single piece of evidence for route 2 in the whole set.

---

## 7. Verdict per route

| Route | Pain exists? | Will they pay for done-for-you? | Main threat |
|---|---|---|---|
| **1. Trade portal / B2B webshop on the ERP** | Yes, moderate. Customer-specific pricing, company hierarchies and per-customer item lists come up repeatedly | Some evidence (buyers pay for B2B connectors; a DE supplier pays for customers' ordering tools) | Shopify B2B now on Basic, the BC native connector, and SuiteCommerce. "Good enough" native options are growing |
| **2. Emailed/PDF orders into the ERP** | Yes, strongest and most widespread, especially Mittelstand and manufacturing | Weaker. Many accept manual work, hire admins or bill customers. Accuracy objections kill DIY projects | BC Sales Order Agent, a flood of AI startups, "juice not worth the squeeze" |
| **3. Fix or replace a broken connector** | Yes, strong and frequent, with a clear trigger (it broke, price jumped, vendor ghosted) | Best evidence of paying for someone else to do it (contractor requests, $2.5k to $12k/yr connectors, managed iPaaS) | Very crowded in NetSuite/Shopify US (Celigo partners, MindCloud and others) |

Overall confidence: **medium**. The pains are real and described in buyers' own words. What is weakly evidenced is that 15 to 200 staff firms will pay a fixed build fee plus a monthly fee to an outside vendor rather than hire a clerk, buy a SaaS tool or live with it. Posts from owners with signing authority are rare in the sample.
