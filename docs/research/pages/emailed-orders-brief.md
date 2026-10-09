# Page brief: /solutions/emailed-orders

Date: 7 Oct 2026. Research only. No website files were edited.
Audience: UK manufacturers, distributors and wholesalers (15 to 200 staff) on Sage 200/50, Business Central, NetSuite, SAP B1 or similar; DACH secondary.
Offer: free consultation. Price: £5,000 set-up, £300/month including 1,000 orders, about 15p an order after.

Labels: **Quote** = exact words from the source. **Paraphrase** = summary of the source. **Inference** = my reasoning, not stated by any source.
Evidence note: web page content was read through WebFetch, which returns a model-made extract. Quotation marks mean the tool returned the text as verbatim. Spot-check any competitor or buyer quote on the live page before it goes into public copy. Microsoft Learn pages were returned as raw text and are exact.

---

## 1. What we already knew (do not redo)

| # | Finding | Source |
|---|---|---|
| K1 | Manual keying of emailed/PDF orders is the most widespread pain of the three routes, but willingness to pay is the weakest. Many accept it, hire admins, or bill the time back. | demand-voice-of-customer.md section 7 (Paraphrase) |
| K2 | Every customer sends a different format: "Everyone uses a different PO format, even down to the file type." | demand-voice-of-customer.md 2A item 1, r/manufacturing 2025-02-07 (Quote) |
| K3 | Accuracy is the killer objection. DE: no tool found that read more than 75% of emailed orders correctly; "3 von 4 Bestellungen ist oft inakzeptabel, da man dadurch trotzdem alles prüfen muss". "wenn nur 10% Fehlerquote sind heisst das, dass trotzdem 100% der Belege nochmal geprüft werden müssen". | demand-voice-of-customer.md 4.2 (Quote) |
| K4 | Customer material codes are the hard part, with zero error tolerance; a German chemical maker's in-house OCR project only handled "die ganz einfachen Standardfälle" after about 2 years. | demand-voice-of-customer.md 2D item 34 (Quote) |
| K5 | "It's not that big an issue, the juice isn't worth the squeeze." "Most shops I know are all manual." | demand-voice-of-customer.md 4.1 (Quote) |
| K6 | BC Sales Order Agent exists, reads email plus PDF/image, matches item references, human review, billed in Copilot Credits (roughly $0.11 to $0.19 an order). Practitioner sentiment mixed. | demand-voice-of-customer.md 4.3; market-claims-check.md Claim 1 (Paraphrase) |
| K7 | EDI covers big accounts; the long tail of small customers stays on email. | demand-voice-of-customer.md 4.4 (Inference, carried over) |
| K8 | SDR pitch on this exact offer: 17 meetings, 0 deals. Reasons, in order: already automated (named tools), EDI/portal carries most orders, low volume, bespoke products, mid-ERP migration, not my remit. | sdr-call-evidence.md (Paraphrase) |
| K9 | Good-fit pattern: standard stocked coded items, known ERP, dozens of orders a week or more, a team keying. Examples: Metpro (PDF into BC, 1,000+ SKUs), Worktop Fabrications (PDF into Sage 200, cross-referencing part codes, prices in Excel), Company of Animals (about 100 orders a week, 4 staff, BC), Clyde Pneumatic (about 300 a month, SAP), Horwood (NetSuite). | sdr-call-evidence.md (Paraphrase) |
| K10 | Buyer worry #1 is the write-back, not the reading: Worktop does not want "a partial solution" that still leaves someone uploading. | sdr-call-evidence.md (Quote/Paraphrase) |
| K11 | Buyers want price early and hate headcount-anchored pricing: "pricing the software just below the cost of the existing team"; "a 10x budget mismatch". | sdr-call-evidence.md (Quote) |
| K12 | Buyers want human oversight first, then a system that learns. Metpro rejected a Toshiba system that had to be taught by hand. | sdr-call-evidence.md (Paraphrase) |
| K13 | Free test on about 100 real orders moved Metpro: 68% clean-line match from day one. | B2Bware-Growth-Context-Brief.md section 4 (Paraphrase) |
| K14 | No competitor names customer part codes, packs or units as a business problem; nobody frames wrong prices as lost margin. | competitor-problem-claims.md section 5 (Paraphrase) |
| K15 | Route E (email order capture) is the most crowded route: 11+ vendors, some with self-serve SMB pricing (StackCube $79 to $479/month, OrderDrafter $399 to $799/month). | gap-check-dach-us-uk.md (Paraphrase) |
| K16 | DACH: 39% of 200 wholesalers/manufacturers name manual order and quote entry as the biggest bottleneck (ECC KÖLN B2BEST, Sep 2026). 91% of German firms prefer German providers (Bitkom 2026). | dach-opportunity.md section 0 (Paraphrase) |
| K17 | A draft for this page already exists in `landing/src/data/solutions.ts` (`'emailed-orders'`). Paid traffic is planned to land here with 60% of budget and Sage 200 / Sage 50 / BC / NetSuite / competitor-alternative keywords. Message match line: "Still keying PDF orders into Sage? Every order in your ERP. Nobody retyping it." | campaigns/google-ads.md section 2; campaign-brief.md (Quote) |

---

## 2. New evidence (this pass)

### 2.1 Business Central Sales Order Agent: hard limits (Microsoft's own words)
Source: Microsoft Learn FAQ, ms.date 2026-10-02. https://learn.microsoft.com/en-us/dynamics365/business-central/faqs-sales-order-taker-agent
- **Quote:** "At this stage, the agent supports the creation of up to 15 item lines per sales document. Increasing the number of lines might result in lower-quality output."
- **Quote:** "The agent processes the email body and any PDF or image files attached to emails". (Inference: Excel and CSV attachments are not listed, so spreadsheet orders are outside scope.)
- **Quote:** "When adding items to a sales document, the use of the item's Variant Code isn't currently supported. It leaves the Variant Code field empty."
- **Quote:** "The agent doesn't post documents." and "The agent doesn't create new items, contacts, or customers."
- **Quote:** "The agent reads inbound emails via a shared inbox on Microsoft Exchange... Other ways to receive email aren't supported."
- **Quote:** "Requests for changing discounts and pricing aren't accepted by the agent."
- **Quote:** "How you name your products can affect agent output. For example, using cryptic abbreviations versus friendly names can reduce output quality."
- **Quote:** "Currently, partners can't extend this capability."
- **Quote:** "The agent always creates a sales quote as the first step, even when the customer asks for an order." (overview page, ms.date 2026-10-02) https://learn.microsoft.com/en-us/dynamics365/business-central/sales-order-agent
- Practitioner test: could not handle "one bag and five units" of the same item, "resulting in significant overcharging before requesting human assistance" (Paraphrase with quoted fragment). Jason Chance, 2 Feb 2026. https://lidd.com/microsoft-dynamics-insights-sales-order-agent/
- Available in the UK at launch (Quote: "available in the United States and United Kingdom"). OmniVue, ERP Software Blog, updated 1 Oct 2026. https://erpsoftwareblog.com/2026/06/business-central-sales-order-agent/
- **Inference:** BC's agent is good enough for short, simple, PDF/email orders from known customers with clean item names. It leaves: long orders, spreadsheets, variants, split units and packs, customers who email from addresses not on the contact card, and every non-BC ERP. That is a precise, sourced answer to "BC already does this".

### 2.2 UK competitors now selling this as a service (new, important)
- **Zestcode (Northamptonshire, web/dev agency).** Page "Sales Orders Into Sage 200, Done Properly". **Quotes:** "Each line is matched to the right Sage 200 stock item using a mapping we build with you, with unmatched lines flagged rather than guessed"; "We apply the price band, customer price or discount held against the account and validate every line before the order posts"; "An order that would take an account over its credit limit can be held for review rather than posted blindly"; "Every order is reviewed by a person first, so nothing posts to Sage 200 unchecked". Formats: PDF, CSV, Excel, Word, email body. No price. Testimonials on the page are about web design, not order automation. https://zestcode.co.uk/services/sage-200-order-automation/
- **Trisec (Rugby, web/dev studio).** Article positioning custom builds against the BC agent: worthwhile when "orders are long, when a few large customers send most of the volume in consistent formats, when you need orders created directly rather than via quotes, or when your ERP isn't Business Central" (Quote). No price, no metrics. https://trisec.io/automate-emailed-purchase-orders-erp/
- **Inference:** Our draft page's core claims (human review, price band check, credit hold, mapping built with you, finished SOP order) are now word for word what a UK agency says on a page that ranks for "Sage 200 sales order automation". The managed, review-first, finished-order position is **not** unclaimed in UK search. What Zestcode does not show: a published price, any ERP beyond Sage 200, ongoing running of the service, or proof on order automation.

### 2.3 Other vendor pages (structure, claims, gaps)
See section 5 for the table. New points not in competitor-problem-claims.md:
- **Workist** FAQ states 60 to 90% fully automatic processing; implementation about 1 week for NetSuite/BC, about 6 weeks for SAP; monthly SaaS; "50 orders/day typically ROI in 3-6 months" (Paraphrase); and an explicit "not suited for" line (pure logistics/transport orders). https://workist.com/en
- **Lleverage** is the closest to a managed model: "Our engineers set it up with you", forward-deployed engineers "not a licence and a manual" (Quote); configurable confidence thresholds; 97.8% touchless rate on a dashboard mock; pricing "We price it after we have seen it" (Quote), per agent, not published. https://www.lleverage.ai/use-cases/order-intake , https://www.lleverage.ai/pricing
- **Turian**: "no training data requirement: turian's LLM-based matching works from day one" (Quote); 4 to 6 weeks to live; no price. https://www.turian.ai/
- **OrderEase** email page: "90%+ reduction in manual email order entry", "75–85% less PDF purchase order errors" (Quote); does not address customer part numbers, units or approval on that page. https://www.orderease.com/email-order-entry-automation
- **Conexiom**: "Normalize units of measure, currency, part numbers and more" (Quote); "30-day average" implementation; "Zero ERP changes required"; no price. https://conexiom.com/ , https://conexiom.com/solutions
- **Esker** FAQ answers "Does it replace my ERP system?" with "No" (Paraphrase). https://www.esker.com/business-process-solutions/order-to-cash/customer-service-automation/order-management-automation-system/
- **SparkLayer** (UK) now converts "spreadsheets, PDFs and forwarded order emails into ready-to-review baskets, matched against your products and ordering rules" (Quote), inside a Shopify-type portal. https://www.sparklayer.io/
- **Fresho OrderPilot** (UK food wholesale): converts emails, texts, voicemails and PDFs into sales orders (Paraphrase of search snippet; page returned 403). **Inference:** the SDR note "FreshAir AI order module (99% of orders)" is probably Fresho. Not verified. https://www.fresho.com/gb/supplier/ai-order-entry
- **HelloLeo** is an AI app builder on top of ERPs (NetSuite, Odoo, SAP, Sage, Dynamics), "1,000+ teams" (Quote), not an order-entry product as such. https://helloleo.dev/
- **Continia Document Capture** lists sales orders among document types but is built around purchase invoices (Paraphrase). https://www.continia.com/solutions/document-capture/
- **Flowlens** is a Belfast cloud MRP/CRM from £45/user/month, not an email order reader (Paraphrase). **Orderline, Open Info, New Order, Saipon** (named in SDR notes) were not found in this pass. Flag: unverified.

### 2.4 What users of these tools complain about (review evidence)
- Conexiom, Capterra: "It takes time to process mapping requests, because it has to be done manually" (Quote, search snippet); "mapping with older orders and sometimes I needed more mapping of a PO, and it was timely" (Customer Service Rep, Plastics, 11 Oct 2023, Quote); "it doesn't adapt to different style of documents" (Customer Service Coordinator, Automotive, 17 Apr 2023, Quote); "system struggles if the customer changes their behavior" (Global Sales Ops Director, Wholesale, 17 Feb 2022, Quote); "Integration was slow due to misunderstanding upfront" (Customer Service Manager, 11 Apr 2023, Quote). https://www.capterra.com/p/205134/Conexiom/reviews/
- Workist, OMR Reviews (DE): "Datenpunkte wie Adressen oder Kundenspezifische Besonderheiten werden manchmal auch nach mehrmaligem assistieren nicht erkannt" (Group Manager Internal Sales, building materials, 501 to 1,000 staff, Quote); "Es ist teilweise schwer nachzuvollziehen, wo ein Fehler aufgetreten ist" (Quote); a number with a space ("1 000") is misread (Paraphrase); onboarding "problemlos innerhalb von 4-6 Wochen" (Quote). Dates not shown in the extract. https://omr.com/en/reviews/product/workist
- **Inference:** The recurring complaint is not "it can't read". It is (a) customer-specific details and codes that stay wrong, (b) mapping changes that wait on the vendor, (c) errors that are hard to trace, (d) breaks when a customer changes format. A managed service that owns mapping and format changes answers exactly these. This is the strongest evidence-based angle found.

### 2.5 Buyer behaviour before a call
- 67% of B2B buyers prefer a rep-free experience (Gartner, 646 buyers, Aug to Sep 2025) but buyers "prefer to seek seller input" for whether a product fits their company (Paraphrase). https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-sales-survey-finds-61-percent-of-b2b-buyers-prefer-a-rep-free-buying-experience ; https://www.digitalcommerce360.com/2026/03/17/gartner-b2b-buyers-rep-free-purchasing-ai-reshapes-sales/
- Transparent pricing has been buyers' top request of vendors every year since TrustRadius began asking in 2023 (Paraphrase of coverage of the 2026 report). https://finance.yahoo.com/technology/ai/articles/trustradius-2026-b2b-buying-disconnect-130000506.html
- 40 to 60% of qualified deals are lost to "no decision", often from fear of making the wrong choice, not lack of need (Paraphrase of Dixon and McKenna, The JOLT Effect, 2022, via secondary summaries). https://sellingsherpa.com/index.php/2022/09/29/the-jolt-effect-book-summary/
- **Inference:** The 17-meetings-0-deals pattern fits two things at once: poor qualification (many meetings should never have happened, per K8) and no-decision risk in the ones that fit (Metpro, Fini, ACS are all stalled, not lost). A page can only fix the first directly, and can reduce the second by taking risk off the table (fixed price, test on their orders first, we run it).

### 2.6 Sage 50
- Sales order processing exists only in Sage 50 Accounts Professional; integration is via the desktop SDO (Paraphrase). https://communityhub.sage.com/gb/sage-50-accounts/f/general-discussion-uk/243362/sales-order-processing
- **Inference:** Ads targeting "Sage 50 order automation" will bring firms on editions with no sales order module. Needs a technical yes/no from the team before Sage 50 is named on the page.

### 2.7 Reddit (new pass, low yield)
The Reddit archive API rate-limited most queries. Only one new relevant item: a NetSuite user testing document capture says "extraction and vendor/item matching are still unreliable" (r/Netsuite, 2026-10-01, purchasing side, not sales orders, Quote). https://www.reddit.com/r/Netsuite/comments/1wv2zqt/best_ocr_options_for_purchase_order_entry_in/ . Sage City UK and the Dynamics Community forum remain unmined. LinkedIn was not reachable.

---

## 3. Who lands on this page and what triggered them

| Visitor | How they arrive | Trigger | Evidence |
|---|---|---|---|
| Ops / customer service manager at a Sage 200 or BC distributor | Google search ("pdf orders into sage 200", "business central order automation") | Leadership mandate to automate order entry; a backlog; key staff leaving; growth without hiring | K17; "Our CFO and Chief Growth Officer are pushing to automate order entry" (r/Dynamics365, 2026-03-01, Quote, demand-voice-of-customer.md trigger table) |
| Someone comparing vendors | "workist alternative", "conexiom pricing" | Got a quote with no price shown, or a tool that disappointed | K17 (AG4); Inference |
| BC customer who has tried or read about the Sales Order Agent | Search or partner mention | The agent fell short (long orders, spreadsheets, variants) | 2.1 (Inference that this is a trigger; no buyer quote found) |
| Prospect from SDR, LinkedIn or a partner | Link in an email | Wants to check us before or after a call | Growth brief section 3 (phone is the channel that books) |
| /solutions/b2b visitor | Card click | Browsing problems | K17 |

Not the visitor: the MD who signs (posts from signers are rare, demand-voice-of-customer.md section 7). **Inference:** the page must give the ops-level reader something forwardable upward: price, scope, risk removed.

---

## 4. Their exact words (for copy)

English, buyer side (all from earlier files unless marked new):
- "Everyone uses a different PO format, even down to the file type." (K2)
- "manually retype every line item into our ERP" (vendor post wording, demand-voice-of-customer.md 2A item 5; use with care)
- "It can take 10-40 minutes to process just ONE order." (2A item 11)
- "we expend labor to add chances for errors" (2A item 3)
- "There is still no way with our current ERP system to easily load that data without some manual data entry, even though it's the same release every week." (2A item 2)
- "a partial solution" (Worktop, sdr-call-evidence.md; paraphrased context, the phrase itself is reported)
- "pricing the software just below the cost of the existing team" (Worktop, sdr-call-evidence.md)
- "looks too good to be true" (Metpro CEO, sdr-call-evidence.md; do not use the name)
- "it doesn't adapt to different style of documents" (new, Conexiom user, 2.4)
- "system struggles if the customer changes their behavior" (new, Conexiom user, 2.4)

German (DACH variant):
- "Bestelldokumente, die als PDF, Excel oder 'Freitext' per Mail kommen und dann händisch im System erfasst werden müssen"
- "Materialbezeichnungen... bei den Kunden inkonsistent" / "0 Fehlertoleranz"
- "trotzdem alles prüfen" (the accuracy fear)
- "Kundenspezifische Besonderheiten werden manchmal auch nach mehrmaligem assistieren nicht erkannt" (new, Workist user)
- "ERP behalten und eine intelligente Erfassung davor setzen"

Words buyers use for the thing: "order entry", "keying", "retype", "PO", "sales order", "their part numbers/codes". They do not say "AI order capture" or "touchless". (Inference from the language bank in demand-voice-of-customer.md section 5.)

---

## 5. What competitors claim, how their pages are built, and the gap

| Vendor | Headline (Quote) | "AI" up top? | Accuracy / automation claim | Price shown | Proof | Notable objection handled |
|---|---|---|---|---|---|---|
| Workist | "Automate order entry - from inbox to ERP within seconds" | Second fold: "Meet the AI Agent that runs your sales admin" | 60 to 90% fully automatic; "90% less errors"; "10x faster" | No (monthly SaaS) | 200+ customers, 14 logos, 10 case metrics | Not suited for logistics; OCR/RPA/EDI comparison; SOC 2; implementation time per ERP |
| Conexiom | "Turn Transactions Into Trust" | No (body yes) | "1.5B+ line items a year" | No | Enterprise logos, G2 4.6 | Zero ERP changes; 30-day implementation |
| Turian | "Automate Sales Order Entry" | Body: "AI Agents" | "Remove 80% of your team's admin work" | No | Logos only | Works from day one, no training data; GDPR; not trained on your data |
| Lleverage | "Quotes out, orders in, confirmations back" | Yes, throughout | 97% (Topa), "4 FTE saved" | No, "We price it after we have seen it" | 5 named NL cases | Engineers set it up; confidence thresholds |
| OrderEase | "Purchase Order Management Software for Email Orders" | No | "90%+ reduction", "75–85% less PDF purchase order errors" | Elsewhere (from $17/day) | Anonymous role testimonials | PDFs, file types, ERP fit, exceptions flagged |
| Esker | "Process orders faster. Serve customers better." | No | Qualitative | No | One named testimonial | Does not replace your ERP |
| Zestcode (UK) | "Sales Orders Into Sage 200, Done Properly" | No | None | No | Web-design testimonials only | Pricing per account, credit holds, review first, formats |
| BC Sales Order Agent | Docs, not marketing | n/a | Test suite, no rate published | Copilot Credits | n/a | Human review of every outgoing email |

Common page pattern (Inference from the table): hero with speed/automation promise, logo wall, big percentage metrics, pain list, feature grid, ERP logos, case metrics, security, FAQ, demo CTA. Every one ends in "Book a demo/meeting". Only Workist says who it is not for. Nobody except OrderEase (elsewhere) shows a price.

**What none of them say (the gap), with evidence strength:**
1. **A price on the page.** None of the eight. Strong (table above; gap-check-dach-us-uk.md).
2. **"We own the mapping and the format changes, for as long as you use it."** Reviews show these are the pain points (2.4); Lleverage comes closest with engineers but frames it as setup. Medium.
3. **Customer codes, packs and units named as the problem.** Only Conexiom mentions part numbers, as a feature line. Strong (K14 plus this pass).
4. **Who it is not for, in plain words**, beyond Workist's one line. Strong.
5. **An honest comparison with the BC agent and with the tool they already have.** Nobody does it. Strong (2.1).
6. **Any ERP, one team that also runs the portal and the ERP link.** Zestcode is Sage 200 only; tools are software. Medium: DCKAP and P&M cover several routes (gap-check-dach-us-uk.md).

**What is no longer a gap (correct the draft):**
- "Most order-reading tools stop at reading. We finish the job" (current draft callout and FAQ). **False as worded.** Workist covers "entire path from inbox to booked record", Lleverage orders "land in Business Central with zero manual entry", Zestcode creates SOP orders, OrderEase pushes into the ERP. Some older OCR/PDF-to-CSV tools do stop at a file (SDR notes, PDF2Sage, PostTrans), so a narrower claim is defensible: "If your current tool gives you a file someone still uploads, we finish the job."
- Human approval before posting, price and credit checks: claimed by Zestcode, Lleverage, Workist, BC agent. Table stakes, not a differentiator.

---

## 6. Objections and evidence-based answers

| Objection | Evidence it is real | Answer the page can give | Status |
|---|---|---|---|
| "We already have a tool / we're covered." | Top SDR reason (K8) | "If it works, keep it. We are for orders it leaves behind: spreadsheets, long orders, odd codes, packs, or a file someone still uploads." | Honest; needs confirmation we can run alongside an existing tool |
| "Business Central does this now." | K6, 2.1 | List Microsoft's own limits (15 lines, PDF/image only, no variant code, quote first, does not post, BC only). "For short PDF orders from known customers, try it first." | Strong, sourced |
| "Is it accurate? Will my team still check everything?" | K3, K12, 2.4 | Explain the review screen: clean lines pre-approved, problem lines flagged with the reason. Offer to run their own sample orders and show the match rate before they pay. Never quote a rate we can't show. | Needs a team-confirmed figure (section 7) |
| "Our customers' codes are a mess." | K4, K9 Worktop | We build and keep the code map; each correction is kept for next time. | "Kept for next time" needs confirming |
| "What does it cost? Will it jump?" | K11, 2.5 | £5,000 set-up, £300 a month incl. 1,000 orders, about 15p after. Never compare to a salary. | Locked (memory: b2b-pricing-locked) |
| "Will it post into OUR Sage / BC / NetSuite?" | K10, growth brief section 4.7 | Name ERPs only where write-back is live; "we check your version in the consultation". | Needs per-ERP confirmation |
| "We're changing ERP." | K8 | Unknown. Either "we build against the new ERP" or "call us after go-live". | Needs team decision |
| "Low volume." | K8, K5 | Say it: "A handful of orders a week? You probably don't need us." (already in draft) | Keep |
| "Our big customers are on EDI." | K7 | Keep EDI; we take the email tail. (already in draft) | Keep; EDI link claim needs confirming |
| "Not my remit." | K8 | A short "send this to your ops/IT lead" summary block. | Inference, untested |
| "Will it replace my staff?" | Growth brief section 4.4 | Redeploy, not replace. (already in draft) | Keep |
| "Who are you? Done it for someone like me?" | buyer-and-competitor-messaging.md | No emailed-orders customer to name. Offer the test on their own orders as the proof. | Gap |

---

## 7. What we can honestly claim vs what needs confirming

**Can claim now (sourced):**
- Reads email body, PDF and Excel orders; maps customer codes, packs and units; checks price, stock and credit against the ERP; human approves; posts a sales order. (PRODUCT.md, growth brief section 1, b2b.ts pricing list. Internal claims, not externally proven.)
- Fixed price: £5,000 set-up, £300/month incl. 1,000 orders, about 15p after.
- We run it after go-live (managed service), ERP stays the system of record.
- Disqualifiers (spot pricing, configured products, low volume).
- Facts about the BC agent's limits (Microsoft Learn, section 2.1).

**Must confirm with the team before publishing:**
1. **Accuracy.** Only figure on hand: Metpro, 68% clean-line match from day one on about 100 orders (POC, growth brief). Cannot name Metpro without permission. Ask: what match rate after 4 to 8 weeks on a live customer? Is there one at all?
2. **Learning codes over time.** Growth brief calls it "self-learning SKU mapping". Ask: does an approved correction automatically update the map, or does someone on our side edit it? How fast?
3. **Formats in production.** Growth brief lists email, PDF, Excel, XML, EDI, photo of handwritten form. Ask which are live for a paying customer vs demo. Scanned PDFs? Multi-page? Orders over 15 to 50 lines?
4. **Write-back per ERP.** Sage 200 (official REST API, growth brief), BC (straightforward). Confirm Sage 50 (Professional only, SDO desktop), NetSuite, SAP B1, IFS. Name only confirmed ERPs.
5. **Nameable customer for emailed orders.** None. Doppler's 70%/90% is sales-agent ordering, not email capture; do not use it on this page (b2b.ts shows it as "Sales agents order with live ERP pricing"). Ask whether any AI Order Hub customer (growth brief: "1 AI ordering sold") can be named or quoted.
6. **Go-live time.** Not stated anywhere. Competitors say 1 week to 6 weeks. Do not state one until confirmed.
7. **Running alongside an existing tool or EDI.** Confirm before saying "keep it".
8. **The free test on their orders.** Is the consultation allowed to include running a sample of their orders? The evidence (Metpro) says it is the thing that moves deals; the current offer is a consultation only, and campaign-brief.md still says "free order check". Resolve the conflict.
9. **Hosting and data.** b2b.ts says "hosted in the EU". Confirm before using in DACH copy.

---

## 8. Recommended page sections, in order

1. **Hero.** Purpose: message match for paid search and name the act in buyer words. Headline on the act (keying/retyping) and the outcome (a finished sales order in your ERP). Sub: "checked against your prices, stock and credit, approved by your team". Price line under the CTA ("£5,000 to set up, £300 a month"). No "AI". Source: K17, K10, K11, 2.5, buyer-and-competitor-messaging.md rule 5.
2. **Right for you / not for you.** Purpose: qualify before the call, fix the SDR failure. Right: coded stocked products, dozens of emailed orders a week, a known ERP, a team keying. Not: configured products, spot prices, a handful of orders, mid-migration (pending team decision), all orders already on EDI. Source: K8, K9, growth brief section 2, Workist's "not suited for" line (2.3).
3. **The mess, named.** Purpose: show we understand. Different formats, their part codes, boxes vs units, contract prices, accounts on stop. Source: K2, K4, K14, Worktop (K9).
4. **One order, start to finish.** Purpose: answer the write-back worry visually. A sample PDF → codes mapped → price/stock/credit checked → one line held with the reason → approved → sales order number in the ERP. Source: K10, Lleverage "One order, start to finish" pattern (2.3).
5. **"We already have something" / "BC has an agent."** Purpose: handle the top objection honestly. Short comparison: what the BC agent and reading tools do well; what they leave (Microsoft's limits, mapping waiting on the vendor, a file still uploaded). Source: 2.1, 2.4, K8.
6. **What we run for you after go-live.** Purpose: the actual differentiator. New customer formats added, code map kept, failures watched, one team. Source: 2.4 (reviews), gap 2 in section 5.
7. **How much checking your team still does.** Purpose: answer accuracy without invented numbers. Describe the review screen and offer to show the match rate on their own orders. Add a figure only once section 7 item 1 is confirmed. Source: K3, K12, K13.
8. **Price.** Purpose: buyers' top request; no competitor shows it. £5,000 / £300 / 15p, what's included, no salary comparison. Source: K11, 2.5, section 5 table.
9. **How it works (4 steps).** Keep the existing draft steps; add "bring 20 to 100 real orders" if item 8 in section 7 is approved. Source: K13.
10. **FAQ.** Accuracy, part codes, formats, which ERPs, EDI, staff, migration, data hosting, "what if a customer changes their format". Source: section 6.
11. **Closing CTA.** "Bring the orders you retype today." Keep.

Proof section: leave out until a nameable emailed-orders customer exists. Do not borrow Doppler's stats here.

DACH variant (later): lead on "Kundenspezifische Artikelnummern" and "0 Fehlertoleranz", German-speaking team, EU hosting (if confirmed). Workist and Turian are strong there, so the price and the "we run it" angle carry more weight than the reading itself. Source: K3, K4, K16, 2.4.

---

## 9. Gaps and confidence

**Gaps:**
- No UK buyer quote yet on the BC Sales Order Agent in production; Sage City and Dynamics Community forums not mined; LinkedIn unreachable; Reddit archive mostly rate-limited this pass.
- "FreshAir", "Orderline", "Open Info", "New Order", "Saipon" from SDR notes not identified (Fresho is a likely match for "FreshAir").
- No evidence on actual search volume for the ad keywords (google-ads.md flags this too).
- All accuracy and learning claims for B2Bware rest on one POC figure.
- No nameable customer for this use case.

**Confidence:**
- High: BC agent limits (Microsoft's own docs); no competitor shows a price; part codes/packs are unclaimed language; accuracy and mapping upkeep are the real objections.
- Medium: a managed "we keep the mapping and formats working" angle is wanted (inferred from reviews and SDR, not asked of buyers directly).
- Low: that a page can turn this offer into closed deals, given K1, K5, K8 and new UK service competitors (2.2).

**Should this page exist as a lead page? Honest view (Inference):**
- Keep it as a **problem page** under /solutions/b2b. People do search for this, and the gap analysis gives it a defensible, honest angle: priced, managed, any ERP, and clear about where BC's agent and existing tools stop.
- Do **not** make it the main paid-spend page on current evidence. 17 meetings and 0 deals on this exact pitch, two UK agencies now publishing near-identical claims for Sage 200, a native BC agent at roughly 9 to 15p an order (vs our 30p at 1,000 orders plus £5,000 up front), and no proof customer all point the same way. The 60% budget split in campaign-brief.md came from pain frequency, not from conversion evidence.
- If it runs as a paid landing page, treat it as a test with a stop rule agreed in advance (for example, booked consultations from qualified firms per £ spent after two weeks), and make the qualifier block (section 8 item 2) and the price impossible to miss, so unqualified clicks leave rather than book.
- The strongest move for this page is not copy but proof: one named customer, or permission to publish an anonymised before/after match rate. Without that, the page can qualify buyers but will struggle to convince them.
