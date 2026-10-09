# B2Bware / SyncSpider , Growth Context Brief

Prepared for use in a Claude Code project alongside the marketing skills library.
Everything here comes from live HubSpot, Gmail, calendar data and call transcripts, Aug 2025 to Sep 2026.
Owner: David Oak, Head of Growth.

---

## 1. The company and the products

**SyncSpider** is an Austrian integration platform (iPaaS) with 400+ connectors and a REST API. It is the underlying technology.

**B2Bware** is the commerce layer built on it. Four things are sold, usually together:

| Product | What it does | Who buys it |
|---|---|---|
| **Middleware / data layer** | Syncs products, customers, prices, stock and orders out of the ERP into a clean layer | Required for everything else |
| **AI Order Hub** | Reads incoming orders (email, PDF, Excel, XML, EDI, photo of a handwritten form), matches SKUs, validates price and quantity, posts into the ERP with a human approving exceptions | Manufacturers and distributors drowning in manual order entry |
| **B2B Portal** | Self-service ordering portal: per-customer catalogue, contract pricing, stock, repeat orders, approval workflows | Businesses replacing a legacy portal or adding a digital channel |
| **Splash** | AI desktop assistant over the middleware. Ask questions in plain English, build reports, act on data | Bonus, not a reason to buy. Falls flat where the customer already has BI |

Key architectural truths, stated consistently in every technical call:
- The ERP stays the system of record. B2Bware sits on top, never replaces it.
- Nothing posts to the ERP without a human pressing send, especially early on.
- Splash cannot run standalone. It needs the middleware connected to source systems or it has nothing to query.
- Pricing data comes from the ERP either as a scheduled export or a live API call per order.

Reference customers: Doppler (70% faster processing, 90% fewer errors), Kienesberger (live per-customer ERP pricing), Harrows Darts (portal, closed won 2026).

---

## 2. Ideal customer profile

**Strong fit**
- Manufacturer, distributor or wholesaler
- 15 to 200 staff, roughly £3m to £60m revenue
- Mid-market ERP with an API: Business Central, Sage 200, NetSuite, IFS
- High volume of repeat B2B orders arriving by email or PDF
- Standard, coded products
- Trade customers who order using their own part codes (our self-learning SKU mapping is the differentiator)
- UK and Ireland primary, DACH secondary

**Strong-fit sectors** (SIC-filtered list exists): fabricated metal (25xx), construction materials (23xx), wood and building products (16xx), electrical and cabling (27xx), machinery and components (28xx), plastics (22xx), paper and packaging (17xx), coatings (20301), furniture (31xx).

**Disqualify early.** These patterns have killed deal after deal:

| Disqualifier | Example |
|---|---|
| Bespoke or in-house ERP with no confirmed interface | Northern Express Glass ("Glass Office"), a roofing manufacturer, Wrightbus |
| Highly configurable or composite products | NEG: a double-glazed unit built from dozens of components, ~20,000 combinations |
| Spot pricing set per order with no data to validate against | Aztec Oils: finance director quotes each order |
| Already automated, EDI-native, or portal-migrated | Large food and drink suppliers to supermarkets |
| Low volume, high value orders | No time-saving case |
| In-house IT team already building it | Horwood, Wrightbus, Aztec (web agency) |
| Mid-ERP migration | COBA (IFS 9 to Cloud), many cold calls |

Buying roles, in order of usefulness: Operations Director or Manager, Sales Director, owner or MD in smaller firms. Customer Service Managers make strong champions even when they don't sign. Avoid opening with IT (they gatekeep) and Commercial Managers (tested, unproductive).

---

## 3. What actually converts

The single most important finding of the review.

| Channel | Volume, 13 months | Positive replies | Meetings | Deals |
|---|---|---|---|---|
| Cold email (WinDifferent ~100k est., StackOptimise ~6k, Upwork 2,589) | ~108,600 | 8 | 1 | 0 |
| LinkedIn (Send Pilot) | 9,588 requests, 4,733 messages | 2 | 2 | 2 |
| Cold calling (Joe Gandy) | 6,995 dials, 743 connects | 33 warm | 18 | 13 |
| Cold calling (Nordic Sales Force) | 829 calls | not recorded | 2 | 0 |
| Internal (Marko) | 396 calls, 2,284 emails | 5 | 0 | 0 |

Phone books a meeting roughly every 390 dials. Email booked one in ~108,600 sends.

**Why written outreach failed, evidenced from the replies:**
1. The offer and the follow-up didn't match. Emails promised a free prototype; positive replies got a price, qualifying questions or a calendar link.
2. Speed. Replies waited up to a week. One prospect proposed a specific date and was sent a booking link instead.
3. Trust broke at the handover. Fake personas ("Marko Todorovic, B2B Ware Inc.", "Michael Plöchl", "Leah Spencer") on throwaway domains, then a reply from a different person at an Austrian company. One prospect asked "you're reaching out from Austria?".
4. Price landed before value. A €500/month figure in a first reply killed a warm thread.
5. English-only sending into DACH.

**Once qualified, the picture reverses.** Seven deals reached Discovery or beyond; none has been lost. Of 46 real losses, exactly one was price (A-Champs, out of budget). Losses are about fit, timing and in-house builds.

---

## 4. The sales motion that works

Built from the calls that progressed (Metpro, ACS, Fini, Worktop, Caterbox, Sokee).

1. **Lead with the problem, not the product.** "A chunk of your orders come in by email and someone retypes them" outperforms any feature list.
2. **Uncover the cost of today before quoting.** How many people, how many hours, what does it cost, what breaks when it goes wrong. Quoting before this is what stalled the glass deal.
3. **Prove it on their data.** The strongest asset is a free assessment: they send ~100 real orders, we run them and report the match rate. Metpro's 68% clean-line match from day one is what moved that deal.
4. **Frame as redeploying people, not cutting headcount.** Paul at Metpro corrected us on this himself; staff fear is a live objection everywhere.
5. **Never anchor price to salary cost.** Chris at Worktop had been burned by vendors pricing "just below the cost of the existing team".
6. **Position as proven, never bespoke.** Same buyer: previous suppliers tried to "reverse-engineer a solution".
7. **The write-back is the crux.** Every technical buyer asks whether the finished order lands in the ERP without re-keying. Sage 200 has an official REST API with a Sales Order endpoint and does not require Developer Programme membership; Business Central is straightforward. Confirm the specific instance before promising.
8. **Human in the loop sells.** Flagging low-confidence orders for review reassures rather than weakens.

**Commercial models in use**

| Deal | Model |
|---|---|
| Metpro | £2,000/mo up to 3,000 orders, £2,500 to 4,000, £3,000 to 5,000. No implementation fee; licence starts at 50% during a build capped at two months, overrun free. 2-year standard, 3-year takes 10% off for life. Box-quantity checking £2,500 one-off; sales-quote matching deferred, from £2,500 |
| ACS Clothing | % of GMV, no capex. Retail phase indicated at £500-600/mo after sizing to ~5,000 orders a year |
| Rehobot | ~£300/mo |
| Sokee | Shopify build £1,500 one-off + £100/mo management; their own Shopify ~£25/mo, POS Lite free, POS Pro £69/mo per location |
| General | % of GMV or per-order; implementation usually free unless the integration is complex; customer commits to a term |

---

## 5. Objections and how they land

| Objection | What works |
|---|---|
| "Can it write back into our ERP?" | Yes for documented APIs. Confirm the customer's instance; never promise a mechanism unverified |
| "Our products are too complex" | Often genuine. Qualify out rather than fight |
| "We've been burned before" | Proven product, live customers, no bespoke framing |
| "Staff will think it replaces them" | Removing admin, redeploying people |
| "Is the pricing arbitrary? Will it jump?" | Transparent bands, headroom before any step, price held when volume grew (Metpro) |
| "No capex this year" | Usage-based, no implementation fee, scales with the channel |
| "We're mid-ERP migration" | Park it with a dated follow-up. It is the most common timing blocker |

---

## 6. Pipeline state, Sep 2026

14 open deals in the B2B Portal pipeline. Joe's calling produced 6, inbound 6, LinkedIn 1, internal 1.

| Stage | Deals |
|---|---|
| Proposing | Metpro (pricing with the board), Amtraco (quiet since May), CCS McLays £100k (nudged, opened twice) |
| Discovery | Fini (waiting on ~100 orders), Rehobot (final nudge sent), eant.club and Zambezi (cold since Feb) |
| Qualification | ACS Clothing, Worktop, Clyde PC, COBA (Jan follow-up), Caterbox, Sokee, Kern & Sohn |

Closed lost 2026: 123. Of those, 77 junk from Meta ads and the booking link, 35 not a good fit, 6 went cold, 3 no-shows, 1 budget, 1 in-house.

A 106-contact retargeting list exists, including 60 real businesses that booked a call through the links between December and June with no outcome recorded anywhere.

---

## 7. Website: b2bware.com

Issues found on the homepage, worst first:
1. The results counters render as "0 % Reduce Errors / 0 % Faster Order / 0 % Automation", and the captions underneath are mismatched.
2. "Sprykler" (Spryker) misspelled in the competitor table; "Build for B2B" should be "Built".
3. Brand confusion: page title says SyncSpider, logo says B2Bware, body mixes "SyncSpider's B2B Portal" and "B2B Portal by SyncSpider".
4. "Native Integration, Not Another Middleware" and "zero middleware" contradict how the architecture is actually sold.
5. "Trusted by" logo wall mixes customers with integration partners (Freshworks, ChannelEngine, ITscope, Khaos Control).
6. Unsourced statistics: $3.7 trillion, 15+ hours weekly, 40%, 23%, $175K.
7. Thin proof for the ICP: two case studies, one partner testimonial, one Capterra quote.
8. AI email order automation is buried three levels deep despite being the pitch that books meetings.

---

## 8. Other workstreams

**Partnerships** (Lucas Nuber, out of scope for the outbound review): ~80 partner targets, mostly ERP implementers. Measured on customers delivered, currently zero. The partner agreement being stuck with lawyers blocked the two closest partners for months. A Swedish partner works across Sage X3, Jeeves, HansaWorld and Visma.net; only X3 has a connector today, the rest are buildable. Partners think like ERP integrators and probe the ERP connection; the real risk is always the commerce layer (product codes, configurability, per-customer pricing).

**Hiring**: a Senior AE spec and screening questions exist. One candidate reached round 2. The evaluation weighted discovery depth, communication precision and whether short recent tenures were externally caused.

**Reporting gaps to fix**: agencies never reported reply counts; NSF logged 195 of 197 calls with no outcome; Marko's positive replies and meetings were not logged; channel is not recorded on deals, so attribution has to be reconstructed by hand.

---

## 9. Voice and formatting rules

- Plain, direct language. Short sentences. No em dashes.
- No AI-sounding connectives, no hype words.
- Emails: warm, never pushy. Two labelled tone variants when drafting.
- Avoid "happy to jump on a call".
- Slack: short and punchy.
- Flag legal or strategic risks as advisory notes outside the main draft.

---

## 10. What to build next

1. Rewrite the outbound message and sequence, sent from a real person on the real domain, with the free order-assessment as the offer.
2. Fix the homepage: counters, brand naming, middleware contradiction, sourced stats, AI order automation promoted.
3. Build the qualification script around the disqualifiers in section 2.
4. Re-engagement campaign against the 106-contact retargeting list, tiered by why they went cold.
5. Set the reporting standard: every channel reports sends, replies, positive replies, meetings; every deal tagged with its channel.
