# SDR cold-call evidence (UK, Jun to Sep 2026)

Source: Joe's session notes and meeting write-ups in Slack, pasted by David on 2026-09-24. UK only. The pitch was email order automation ("SyncSpider"), so this tests route 2 (emailed orders), not portals or connection repair. Contact details are left out on purpose.

## Headline numbers
- 17 meetings in about 2.5 months of calling. 12 in the first 30-day block, 5 in the last 30 days (3 calling weeks). Joe's explanation is a list worked 3 to 4 times.
- Deals: Metpro waiting on a final decision (and it came from an exhibition, not a call). Fini is moving slowly after a POC. ACS is checking whether it can do the work cheaper in-house. Nothing else is progressing. None signed.

## Why prospects said no (in rough order of how often it came up)
1. **Already automated.** Named tools or setups: FreshAir AI order module ("99% of orders"), Open Info, Orderline, Flowlens, New Order, Saipon, the Business Central AI email module through Columbus, an OCR bot, PDF-to-CSV tools, a Sage bolt-on, an MIS vendor adding AI, a FileMaker build, offshore or in-house dev teams, Salesforce. Joe: "we're just late to the party."
2. **EDI or portal already carries most orders.** This is usually a firm whose big retail customers bring most of the revenue.
3. **Low volume, high value.** A handful of orders a week, or about 30 a year. Manual entry isn't a pain for them.
4. **Bespoke or configured products.** Glass units with up to 20,000 combinations, roofing, furniture, hydraulics. Every order needs back-and-forth.
5. **Mid ERP migration.** Business Central, IFS Cloud, SAP replacement, Merlin, Dynamics. "Call back in 2027."
6. **Not my remit.** Order entry sits in Ops, Customer Service, Sales or IT depending on the firm. Joe calls the ICP "fractured".

## What good-fit prospects look like
- Metpro: PDF orders by email, keyed into Business Central by hand, 1,000+ stocked SKUs. The CEO said "looks too good to be true".
- Worktop Fabrications: PDF orders into Sage 200. Staff cross-reference the customer's part codes, check prices in Excel, check minimum order quantities and lead times.
- Company of Animals: 4 staff handle about 100 orders a week on Business Central. Big accounts are already on EDI; the smaller accounts are the pain.
- Clyde Pneumatic: about 300 orders a month into SAP.
- Horwood: NetSuite. Two staff spend half their time processing orders.
- Common pattern: standard stocked items with codes, a known ERP, dozens of orders a week or more, and a team doing the keying.

## What buyers worry about
- **Getting the order into the ERP, not reading it.** Worktop Fabrications' biggest concern was whether the finished order could go into Sage 200 automatically. He doesn't want "a partial solution" that still leaves someone uploading. Clyde worries about SAP-side costs: consultants at £750 or more a day, plus extra modules and licences. Coba wants it to work with IFS, not just inside the inbox.
- **Price and pricing model**:
  - Worktop Fabrications: past suppliers were "too expensive relative to the task", "pricing the software just below the cost of the existing team".
  - Company of Animals: wants commercials early after bad experiences with "a 10x budget mismatch".
  - Colyer: worried about a recurring monthly cost, warmer on usage-based pricing.
  - ACS: needs to know whether pricing is by volume, per transaction or a retainer. Price sensitive.
  - Northern Express Glass: wants a cost indication in the follow-up email.
- **Accuracy and learning.** They want human oversight at first, then a system that learns. Metpro rejected a Toshiba system that had to be taught by hand.
- **Spot pricing** can't be automated without a data source (Aztec Oils).

## Missed opportunity signal
Aztec Oils had its web agency build a B2B portal with no link to Sage. David: "we could have built that B2B portal and we could have integrated it into Sage." This is the connection-repair route: the fix comes later, once sync problems appear.

## What it means for the deck
- It confirms demand for emailed-order automation from known-ERP firms with stocked SKUs. It also shows the UK category is filling fast with AI order tools. That lowers the "can we win" score for stand-alone AI ordering.
- Buyers want someone who puts the order into the ERP and owns that link. This supports the "one accountable team" position and the connection-repair lead.
- Buyers ask for prices early and dislike opaque or headcount-anchored pricing. This supports published pricing, with volume-based monthly fees as the model.
- It sharpens the qualification rules: standard coded products, a known ERP, enough volume, no spot pricing, and not mid-migration.
