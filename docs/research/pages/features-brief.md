# Features library brief

Pages: /features (overview) and /features/<slug> for 29 slugs. All live slugs kept so old URLs keep working. Data: landing/src/data/features.ts. Template: landing/src/pages/features/[slug].astro. Mocks: landing/src/components/features/Visual.astro (every mock labelled "Illustrative example").

## Rules applied

- Dropped every statistic, percentage, saving, competitor comparison, client logo list, testimonial and quote from the live pages.
- Price only from src/data/b2b.ts: 5,000 pounds to set up, 300 pounds a month. No per-feature prices.
- Never single out an ERP. "Any ERP" throughout. SyncSpider named only as the integration platform behind B2Bware (10 years, 400+ integrations, as in b2b.ts).
- No GDPR, EU hosting, data centre or security-certification claims. No AI hype wording.
- Add-on features follow the add-on list in b2b.ts (sales app for field reps, approval workflows beyond the first review, payment methods, quotes with e-signature). Each says "add-on, a flat monthly fee", no number.
- B2B only. No consumer shop links or wording.
- permission-management and role-based-access-control: live pages overlap, but each is kept as its own page with a different angle (who sees which customers and regions, versus what each role can do). No merge, so no redirect file was needed.
- Grouping: Trade portal (15), Emailed orders (3), ERP integration (5), Field sales (6).

## Per feature

### Self-service portal (/features/self-service-portal)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Customers order for themselves, at any hour, at their own prices."
- Dropped: The "60% cheaper" claim and competitor names, "24/7 without sales rep involvement" wording (kept as "any hour"), native-connector claims. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Each account sees its own range and prices
  - Stock shown live from your ERP
  - Orders land in the ERP as finished sales orders
  - Customer logs in: Their account decides what they see: range, prices, terms.
  - They build the order: A familiar basket, with their own codes and pack sizes.
  - It posts to your ERP: A finished sales order arrives. Nobody retypes it.

### Contract catalogues (/features/contract-based-catalogs)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Each customer sees only the range and prices they have agreed."
- Dropped: Multi-tier, multi-region and "scalable architecture" claims, "automated compliance". Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Range limited to what the account can buy
  - Contract prices applied automatically
  - Kept in step with your ERP
  - We read the contract data: Ranges and agreed prices come from your ERP.
  - The account is matched: Each login is tied to its customer account.
  - They see their own catalogue: Only agreed items, at agreed prices, ready to order.

### Tiered pricing (/features/tiered-pricing)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Quantity breaks and customer prices applied as the basket builds."
- Dropped: Named ERPs (SAP, Oracle, Dynamics), "reduce negotiation time", "boosting loyalty", multi-currency claims. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Quantity breaks shown as the basket grows
  - Prices by customer, group or contract
  - No spreadsheet to keep up to date
  - We read your price rules: Bands, breaks and contract prices stay in your ERP.
  - The portal applies them: The price changes as the quantity changes.
  - The order carries the price: The same figure arrives in the ERP.

### Order history and quick reorder (/features/order-history-quick-reorder)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Last month's order, back in the basket in one click."
- Dropped: Dual customer and agent access, multi-site claims, PIM integration claim. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Past orders listed per account
  - One click to rebuild the basket
  - Price and stock checked again before checkout
  - Open past orders: Every order the account has placed, in one list.
  - Reorder: The lines go back into the basket. Change quantities if needed.
  - Check and send: Current price and stock are shown before the order posts.

### Search and filters (/features/advanced-search-filtering)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Buyers find the right product by code, name or attribute."
- Dropped: The "up to 60% cheaper than enterprise platforms" claim, named competitors, catalogue size range (500 to 5,000,000+ SKUs), multi-currency claim. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Search by code, name or attribute
  - Filters built from your product attributes
  - Results carry the account's own price
  - We load your product data: Codes, names and attributes come from your ERP or PIM.
  - Buyers search and filter: Results narrow as each filter is applied.
  - They add to the basket: The account's price and stock are already on the line.

### Custom workflows and approvals (/features/custom-workflows-approvals)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Orders that need a second pair of eyes go to the right person."
- Dropped: The "up to 60% cost savings" claim and competitor names, "no coding" claim, mobile approver notifications, escalation paths. Plus any client logo list and any "up to 60%" style comparison.
- Pricing note: Approval workflows beyond the first review are an add-on, a flat monthly fee.
- Claims to back up:
  - Approvers set per rule
  - Exceptions flagged before they post
  - Status visible to your team
  - You tell us the rules: Who approves what, and when. We set them up.
  - Orders are checked against them: Matching orders are held and sent to the approver.
  - Approved orders post: Held orders post to the ERP once approved.

### Process automation (/features/intelligent-process-automation)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Routine steps run on their own, set up around your rules."
- Dropped: Visual workflow builder claim, self-service updates without developers, dynamic discounts, 20+ client logos. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Rules set up for your business
  - Steps run in the background
  - Your team handles only the exceptions
  - Describe the process: Tell us how an order should move today.
  - We set up the rules: Routing, holds and notices, built to match.
  - It runs by itself: Each order follows the rules. Exceptions come to your team.

### Roles and access (/features/role-based-access-control)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Each user sees and does only what their role allows."
- Dropped: Multiple roles per user, logos and testimonial images, "total control". Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Roles for buyers, reps and admins
  - Set per person or per group
  - Changed from the admin screen
  - Pick the roles: Start from the usual ones: buyer, rep, admin.
  - Set what each can do: View, edit, approve, order for others.
  - Change them any time: Update access from the admin screen as people move.

### Permission management (/features/permission-management)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Limit who sees which customers, regions and catalogues."
- Dropped: Distributor sub-account management, "growth-ready", logos and comparison claims, REST API mention. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Access by region, group or account
  - Reps can order on behalf of their customers
  - Checked before an order posts to the ERP
  - Map your structure: Regions, groups and who looks after whom.
  - Assign access: Each user gets the customers and catalogues they need.
  - Actions are checked: An order from outside someone's access does not go through.

### User sign-in (/features/secure-user-authentication)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Only the right people get in, tied to the right account."
- Dropped: Two-factor options, "ensures compliance", "protects critical data" security claims, the closing quote. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Own login for every user
  - Login tied to a customer account
  - Sessions end when left unattended
  - You invite the user: We set up accounts with you and send the invites.
  - They sign in: Their login opens only their own account.
  - Access ends cleanly: Remove a user and their access stops.

### Payment methods (/features/multiple-payment-methods)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Pay on account, by card or by bank transfer, by customer."
- Dropped: PayPal, gateway names, multi-currency international claims, "reduces cart abandonment", 22+ logos, competitor pricing comparison. Plus any client logo list and any "up to 60%" style comparison.
- Pricing note: Payment methods are an add-on, a flat monthly fee.
- Claims to back up:
  - Account terms, purchase orders and card options
  - Set per customer or region
  - Passed to your ERP, not rekeyed
  - Choose the methods: Which options each customer type may use.
  - Customer picks at checkout: Account customers see terms; others see card or transfer.
  - The ERP gets the result: The payment detail travels with the order.

### White label (/features/white-label)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "The portal looks like yours, on your own domain."
- Dropped: CI-compliant wording, "professional support included", 20+ client logos, multi-region claims. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Your brand across the portal
  - Your own web address
  - Branded login page and notices
  - Send us your brand: Logo, colours and fonts.
  - We apply it everywhere: Portal, login page and emails to customers.
  - It goes live as yours: On your own domain.

### Multiple languages (/features/multilingual-capability)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Customers order in their own language, from one portal."
- Dropped: "Unlimited language configurations", tax settings, "fully managed implementation" wording. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Interface in each customer's language
  - Currency and units per account
  - One product catalogue behind them
  - Pick the languages: We set up the ones your customers need.
  - Customers choose at login: Navigation, messages and basket follow.
  - Orders reach the ERP as normal: Same codes, whatever the language on screen.

### Several brands or companies (/features/multi-client-support)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Run several brands or companies from one setup, kept apart."
- Dropped: "Secure data architecture at architectural level", separate ERPs claim, scalability claims. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Own catalogue and prices for each
  - Own branding and language for each
  - Users see only their own
  - Define each brand or company: Catalogue, price lists, look and language.
  - Keep them apart: Users and orders stay within their own.
  - Manage them together: One team looks after all of them.

### Built around how you sell (/features/customizable-design)

- Group: Trade portal. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Extra fields, layouts and rules to fit your process."
- Dropped: Dashboard-in-home-screen and cross-module claims, "code-free" wording. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Extra fields for your product data
  - Layout and menus to suit your users
  - Done for you, no coding on your side
  - Map how you sell: Workflows, fields and the tools you use.
  - We build it in: Layout, data flows and connections to match.
  - Test and go live: Tested on your own orders first.

### Reading emailed orders (/features/ai-document-recognition)

- Group: Emailed orders. Problem page: /solutions/emailed-orders.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "PDF, spreadsheet and email orders read for you."
- Dropped: AI, OCR and NLP wording, "thousands of SKUs" volume claim, "Manual order entry is over" headline, Order Hub product name. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - PDF, Excel and email orders
  - Codes, quantities and account read out
  - Checked against your ERP before posting
  - The order arrives: Forwarded to your order inbox, in whatever format the customer uses.
  - We read the lines: Codes, quantities, prices and the customer account.
  - Your team approves: Then it posts to your ERP as a sales order.

### Matching customer part codes (/features/self-learning-order-matching)

- Group: Emailed orders. Problem page: /solutions/emailed-orders.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Their codes matched to yours, and it remembers the corrections."
- Dropped: The whole live page is a product recommendation engine (smart cart pre-fill, segment suggestions, seasonality). Not taken: we do not claim recommendations. Page rewritten around matching customer part codes, which is what b2b.ts and the emailed-orders page claim. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Customer codes matched to your codes
  - Packs and units converted
  - Every correction kept for next time
  - We match what we can: Their code is compared to your product data.
  - Your team fixes the rest: A correction once is enough.
  - It remembers: The same code is matched automatically next time.

### Order checks before posting (/features/automated-order-validation)

- Group: Emailed orders. Problem page: /solutions/emailed-orders.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Every order checked against your ERP before it posts."
- Dropped: "Perfectly formatted every time" headline, cloud and on-premise wording (we say any ERP), AI-powered wording. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Codes, quantities and prices checked
  - Stock and account status checked
  - Problems flagged, not posted
  - Check against the ERP: Codes, prices, stock and credit.
  - Flag what fails: Anything off is held and shown to your team.
  - Post what passes: Clean orders go in as finished sales orders.

### ERP and PIM link (/features/erp-pim-integration)

- Group: ERP integration. Problem page: /solutions/erp-integration.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Prices, stock and orders move between your systems on their own."
- Dropped: Named ERPs (SAP, Oracle, Microsoft Dynamics, Odoo): we say any ERP. Multi-site claims, "no internal development" claim. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Prices, stock and products from the ERP
  - Orders back into the ERP
  - Built new, or taken over and fixed
  - We connect your ERP: Built on SyncSpider, our integration platform with 400+ integrations.
  - Data flows both ways: Product, price and stock out. Orders in.
  - We run it: We fix the link after ERP or shop updates, in the monthly fee.

### One source of truth (/features/single-source-of-truth)

- Group: ERP integration. Problem page: /solutions/erp-integration.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "One set of prices, products and stock, everywhere customers order."
- Dropped: Enterprise hierarchy management, multi-channel claims, "weeks without in-house development". Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Your ERP stays the master
  - Every channel reads the same data
  - Changes show everywhere
  - Change it once: Update the price or product in your ERP or PIM.
  - It syncs out: Portal, shop and sales app pick up the change.
  - Everyone sees the same: Customers, reps and your team look at one number.

### Product data in one place (/features/unified-product-data-management)

- Group: ERP integration. Problem page: /solutions/erp-integration.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Update a product once and it is right everywhere."
- Dropped: "End product data chaos forever", marketplaces sync, "massive catalogues" performance claim, 25+ client logos. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Variants, bundles and kits
  - Shared with every connected channel
  - Handles large catalogues
  - Edit at the source: In your ERP or PIM, as you do now.
  - It syncs on: To the portal and other sales channels.
  - Customers order the right thing: Right codes, right variants, right packs.

### REST API (/features/rest-api)

- Group: ERP integration. Problem page: /solutions/erp-integration.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Connect your own tools without waiting on a rebuild."
- Dropped: "60% cost savings", "implementation within weeks", competitor names, "unclear API documentation" sales line, in-house dev team claim. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - REST API for products, prices and orders
  - Extra fields for your own data
  - Works with the systems you already have
  - Tell us what to connect: A CRM, a stock tool, a reporting sheet.
  - We build the link: Using the API, with custom endpoints where needed.
  - We keep it working: It sits inside the managed service.

### Audit trail and reporting (/features/audit-trail-order-reporting)

- Group: ERP integration. Problem page: /solutions/erp-integration.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Every change to every order, with who and when."
- Dropped: "Unalterable" storage, "compliance-ready" and compliance cost claims. Plus any client logo list and any "up to 60%" style comparison.
- Claims to back up:
  - Edits, approvals and status changes logged
  - Reports by customer, product or date
  - Export to CSV, PDF or Excel
  - Every action is logged: With the user and the time.
  - Search the record: By order, customer or date.
  - Export it: For a dispute, a review or a report.

### Order entry on site (/features/onsite-order-entry)

- Group: Field sales. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Reps take orders at the customer, at the customer's price."
- Dropped: "Shorter time-to-cash" and speed claims, role-based security, complex-order claims. Plus any client logo list and any "up to 60%" style comparison.
- Pricing note: The sales app for field reps is an add-on, a flat monthly fee, not priced per rep.
- Claims to back up:
  - Phone, tablet or laptop
  - Live price and stock
  - Straight to the ERP
  - Pick the customer: Their prices and range load.
  - Build the order: Live stock and permitted discounts shown.
  - Confirm: It posts to the ERP and the customer sees it confirmed.

### Offline catalogue (/features/offline-product-catalog-access)

- Group: Field sales. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "No signal, no problem. The catalogue is on the device."
- Dropped: Variant-level and images-offline claims, large-catalogue performance claim, client names. Plus any client logo list and any "up to 60%" style comparison.
- Pricing note: The sales app for field reps is an add-on, a flat monthly fee, not priced per rep.
- Claims to back up:
  - Catalogue stored on the device
  - Orders queue while offline
  - Sent to the ERP on reconnection
  - Catalogue downloads: Products, prices and images, kept on the device.
  - Work without signal: Search, show and take the order.
  - Syncs when back online: Queued orders send to the ERP, none doubled.

### Customer file with live data (/features/digital-customer-file-live-data)

- Group: Field sales. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Everything about the account, live from your ERP."
- Dropped: "Unlimited scalability across thousands of customers", "most setups within weeks", CRM and PIM sync claims. Plus any client logo list and any "up to 60%" style comparison.
- Pricing note: The sales app for field reps is an add-on, a flat monthly fee, not priced per rep.
- Claims to back up:
  - Contacts, addresses and terms
  - Order history and prices
  - Account status and credit from the ERP
  - Open the account: One page per customer.
  - See live ERP data: Not an import from last week.
  - Act on it: Quote, order or call with the facts in front of you.

### Visit planning and reports (/features/visit-planning-reporting)

- Group: Field sales. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Plan the day's visits and log them as you go."
- Dropped: Customisable report templates by industry, goal-tracking claims, 25 client logos. Plus any client logo list and any "up to 60%" style comparison.
- Pricing note: The sales app for field reps is an add-on, a flat monthly fee, not priced per rep.
- Claims to back up:
  - Planned visits with account history
  - Orders and notes logged on the visit
  - Reports for managers
  - Plan the visits: Customers, dates and what is open.
  - Prepare and visit: History and open quotes on hand. Take orders there.
  - Report: The visit report builds from what was logged.

### Quotes (/features/cpq-configure-price-quote)

- Group: Field sales. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Quote at the customer's price, then turn it into an order."
- Dropped: Embedded payment processing, multilingual multi-currency quotes, "no external tools" claim, configurator claim narrowed to quotes from ERP prices. Plus any client logo list and any "up to 60%" style comparison.
- Pricing note: Quotes with e-signature are an add-on, a flat monthly fee.
- Claims to back up:
  - Prices from your ERP
  - Quote sent from the portal
  - Accepted quote becomes the order
  - Build the quote: Pick the items. The customer's price applies.
  - Send it: The customer reviews it online.
  - Accept and order: The accepted quote becomes the order in your ERP.

### E-signature on quotes (/features/digital-signature-quote-dispatch)

- Group: Field sales. Problem page: /solutions/trade-portal.
- Taken: what it is, the problem and how it works, restated shorter in buyer words: "Customers sign on any device. No printing, no scanning."
- Dropped: "Legally binding" claim, offline functionality, "without third-party tools". Plus any client logo list and any "up to 60%" style comparison.
- Pricing note: Quotes with e-signature are an add-on, a flat monthly fee.
- Claims to back up:
  - Signed on phone, tablet or computer
  - Signed copy stored with the order
  - Passed to your ERP
  - Send the quote: The customer gets a secure link.
  - They sign: On any device. Time-stamped.
  - It files itself: The signed copy is stored and synced to the ERP.

## Claims needing a product check before launch

- Sign-in: sessions end when left unattended; removing a user stops access.
- Audit trail: export to CSV, PDF or Excel; edits, approvals and status changes logged.
- Offline catalogue: queued orders send once, none doubled.
- Quotes: accepted quote becomes the order in the ERP; signature stored with the order.
- Visit planning and customer file: confirm these ship inside the sales app add-on.
- Several languages: currency and units per account.
- Matching: corrections are kept and reused (also claimed in b2b.ts).
- Payment options per customer or region, result passed to the ERP.
- The mock data (accounts, prices, order numbers) is invented and labelled illustrative.
