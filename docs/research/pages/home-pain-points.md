# Homepage (/), B2B view: verified pain points vs page copy

Same 11 pains as b2b-landing-pain-points.md. Copy: landing/src/components/home/*.astro, as seen with the "Businesses" toggle (?for=b2b). 7 Oct 2026.

B2B view shows: Hero (B2B), Industries, Logo bar, Where off-the-shelf tools stop, Everything B2B in one platform, See it with your data, Why we built, Performance, Rooted, Book a demo, Trusted, In action, Contact.
Hidden from B2B: Order channels (the three routes and the one-team line), How it works, FAQ.

| # | Pain point | Strength | Score | Where / issue |
|---|---|---|---|---|
| 1 | Orders retyped into the ERP | Strong | 3 | "Off-the-shelf tools stop" names it. Hero says "AI order intake" |
| 2 | Same reorders by phone and email | Strong | 1 | Only "Reorder from history" as a feature |
| 3 | Customer prices break the webshop | Med-strong | 5 | Hero, mock, contract prices card |
| 4 | Shop and ERP out of sync | Med-strong | 4 | Hero, stock card |
| 5 | Formats and their own codes | Strong | 4 | Part codes, packs and units cards |
| 6 | Still checking every line | Strong | 2 | "Checks it against your master data" only |
| 7 | ERP updates break the link | Medium | 2 | Generic "we run, update and secure it" |
| 8 | Big IT project, unclear price | Medium | 1 | No price, no timing, demo plus free trial |
| 9 | Suppliers blaming each other | Medium | 2 | One-team line is in the hidden section |
| 10 | Portal built, then unused | Medium | 0 | Missing |
| 11 | Tool leaves someone uploading a file | Medium | 3 | Pain named, fix not tied to it |

Weighted score: 51/100.

Other issues:
- Default view is "Both", which leads with POS, fiscalization and plugins. A trade buyer only gets the B2B view if they click the toggle or arrive on ?for=b2b.
- Hero is a feature list ("customer portal, 24/7 self-service, sales app, AI order intake, European platform"), not a pain.
- CTAs are demo and free trial; the B2B pages sell a free consultation.
- No customer proof in the B2B view. Testimonials are SyncSpider customers.
- "Book a demo" shows "Scheduler embed coming soon".

## Claims to back up
- "£5,000 to set up. £300 a month." and "You see the plan and the fixed price before you pay anything" (B2B hero note)
- "We build it, connect it to your ERP and keep it running" (B2B hero)

## Changes made 7 Oct 2026 (B2B view only; B2C and Both untouched, default stays Both)
- Hero lead: pains in plain words instead of a feature list. CTAs: Book a free consultation, See what we fix. Note: price and plan line. Headline kept, softer than /solutions/b2b.
- "One result, whichever way orders arrive" (three routes, one-team line) now shown for B2B, linking to the three problem pages. "in step" changed to "in sync".
- Customer proof (Kienesberger, Harrows, Doppler) added for B2B, same data as /solutions/b2b.
- Hidden from B2B: Performance, SyncSpider testimonials, Book a demo (scheduler placeholder), See it with your data (demo flow).
- New score: about 78/100. Pains 6, 7 and 10 are left to the problem pages on purpose, so the homepage does not repeat /solutions/b2b.

## Claims to back up (objection block and proof strip, 9 Oct 2026; also covers /pricing)
- Pricing page and segment pages: "The monthly fee covers us watching every order and fixing the link when an ERP or shop update breaks it, with no day rates for fixes" (reuses the existing pricing FAQ).
- Proof strip (home B2B hero, /pricing): Doppler "sales agents order with live ERP prices, 70% faster order entry"; Kienesberger "each customer's own prices from the ERP across about 70,000 price entries"; Harrows Darts "UK trade portal connected to the ERP" (no case study page). Confirm Harrows wording with the team.
- "Manual is fine": we tell a handful-of-orders-a-week prospect to stay manual (from sdr-call-evidence.md). Quote used, attributed generically: a manufacturer on a public forum says admins spend 2 to 3 hours a day on it (r/manufacturing comment, demand-voice-of-customer.md; single comment, not a stat).
- "We already use an AI order tool" and "Our big accounts use EDI": reused from /solutions/b2b wording (finish the job; EDI link available as an add-on).
