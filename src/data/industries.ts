// Industry landing pages. Copy is positioned on the verified trade pains
// (orders retyped, same reorders by phone, customer-specific prices,
// shop and ERP out of sync, emailed orders). No statistics, quotes or logos.

export type Tone = 'ok' | 'low';
export interface Row { a: string; sub?: string; b: string; c: string; tone?: Tone }
export interface Card {
  kind: 'table' | 'chips' | 'steps';
  label: string;
  title: string;
  meta: string;
  chips?: string[];
  steps?: string[];
  cols: [string, string, string];
  rows: Row[];
  sent: string;
}
export interface ProofItem { name: string; meta: string; text: string; href: string }
export interface Industry {
  slug: string;
  name: string;
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  hero: { headline: string; highlight: string; checks: string[]; lead: string };
  card: Card;
  scenariosTitle: string;
  scenarios: { who: string; title: string; text: string }[];
  painsTitle: string;
  pains: { problem: string; fix: string; link: { text: string; href: string } }[];
  handlesTitle: string;
  handles: { title: string; text: string }[];
  fit: { yes: string[]; no: string[] };
  proof?: ProofItem[];
  faqTitle: string;
  faq: { q: string; a: string }[];
}

const P = '/solutions/trade-portal';
const E = '/solutions/erp-integration';
const M = '/solutions/emailed-orders';

const erpAnswer = {
  q: 'Will it work with our ERP?',
  a: 'Yes. We connect to any ERP. B2Bware is made by SyncSpider, the integration platform we have run for 10 years, with 400+ integrations. We confirm your setup in the free consultation.',
};
const bigJob = {
  q: 'Is this going to be a big IT project?',
  a: 'No. We do the set-up for a fixed price agreed before we start, then run it for you. Your team checks orders, not a project plan.',
};

export const industries: Industry[] = [
  {
    slug: 'logistics-fulfillment',
    name: 'Logistics and fulfilment',
    blurb: '3PLs, freight forwarders and fulfilment companies whose clients order by email and spreadsheet.',
    metaTitle: '3PL and fulfilment ordering, linked to your ERP | B2Bware',
    metaDescription: 'For 3PLs and fulfilment companies: client orders land in your ERP without retyping, and each client sees their own rates and stock.',
    hero: {
      headline: 'Your fulfilment clients’ orders go straight into your system.',
      highlight: 'Not into someone’s keyboard.',
      checks: ['Clients place and repeat orders in their own portal', 'Emailed and spreadsheet orders are read for you', 'Each client sees their own rates and stock'],
      lead: 'You keep your ERP. Orders arrive finished, whatever format the client sends.',
    },
    card: {
      kind: 'table',
      label: 'Client portal · Synced with your ERP',
      title: 'Northfield Homeware',
      meta: 'Client acct FC-0412 · Pick and pack rates',
      cols: ['Item', 'Client stock', 'Your rate'],
      rows: [
        { a: 'Ceramic mug set', sub: 'MUG-6-WHT · 12 cartons', b: 'In stock', c: '£0.82', tone: 'ok' },
        { a: 'Linen cushion cover', sub: 'CSH-45-NAT · 40 units', b: 'Low stock', c: '£0.82', tone: 'low' },
        { a: 'Gift box, large', sub: 'GBX-L · 150 units', b: 'In stock', c: '£0.64', tone: 'ok' },
      ],
      sent: 'Outbound order sent to your ERP as OB-20418',
    },
    scenariosTitle: 'Three kinds of logistics business we see',
    scenarios: [
      { who: 'Fulfilment partner', title: 'Brands send orders every way but one', text: 'One emails a spreadsheet, one a PDF, one rings the desk. The orders are read, checked against that client’s stock and rates, and posted as finished orders.' },
      { who: 'Freight forwarder', title: 'Every client has their own terms', text: 'Each client sees their own rates, services and addresses. Repeat bookings are one click, not another email chain.' },
      { who: 'Warehouse network', title: 'Many sites, one set of clients', text: 'Clients check stock and place orders against the right site. Your ERP stays the one source of truth.' },
    ],
    painsTitle: 'What logistics teams tell us',
    pains: [
      { problem: 'Client orders arrive as emails, sheets and PDFs, and someone retypes them', fix: 'Each order is read, matched to that client’s item codes, checked against your ERP and posted as a finished order. Your team approves before anything posts.', link: { text: 'How emailed orders work', href: M } },
      { problem: 'Clients ring to ask for stock or repeat the same order', fix: 'Clients log in, see their own stock and rates, and reorder in one click. Every order lands in your ERP.', link: { text: 'How the client portal works', href: P } },
      { problem: 'Your ERP, your warehouse system and your client view disagree', fix: 'Stock, rates and orders sync live with your ERP. When something updates and the link breaks, we fix it. That is in the monthly fee.', link: { text: 'How the ERP link works', href: E } },
    ],
    handlesTitle: 'What B2Bware handles for logistics',
    handles: [
      { title: 'Client-specific rates and catalogues', text: 'Each client sees only their own items, services and prices.' },
      { title: 'Orders in any format', text: 'Email, PDF and Excel orders read and checked before they post.' },
      { title: 'Stock by client and site', text: 'Clients check stock themselves instead of ringing your desk.' },
      { title: 'One-click repeat orders', text: 'The weekly order is a saved order, not a new email.' },
      { title: 'Many clients, separate views', text: 'One setup, with each client seeing only their own account.' },
      { title: 'Order history and a record of changes', text: 'Who ordered what, and what changed, kept for every order.' },
    ],
    fit: {
      yes: ['Clients send you orders by email, spreadsheet, phone or a portal, and someone retypes them', 'Clients have their own rates, items and terms', 'You run an ERP, whichever one it is'],
      no: ['You need a transport management or route planning tool', 'Every job is quoted one by one with no set rates'],
    },
    faqTitle: 'What logistics companies ask first',
    faq: [
      erpAnswer,
      { q: 'Does it connect to our warehouse system?', a: 'Orders go into your ERP as finished orders. If your warehouse system takes its orders from the ERP, they flow through. We confirm any other link in the consultation.' },
      { q: 'Can each client see only their own stock and rates?', a: 'Yes. Each account sees its own items, stock and rates, live from your ERP.' },
      { q: 'Can we run several clients from one setup?', a: 'Yes. Each client has its own account and view, and you run them all from one setup.' },
      bigJob,
    ],
  },
  {
    slug: 'construction',
    name: 'Construction supplies',
    blurb: 'Builders’ merchants and suppliers selling to contractors on job accounts and site call-offs.',
    metaTitle: 'Construction supplier ordering, linked to your ERP | B2Bware',
    metaDescription: 'Contractors call off materials at their own prices, and site orders land in your ERP without retyping. £5,000 to set up, £300 a month.',
    hero: {
      headline: 'Building contractors order materials at their own prices.',
      highlight: 'Site call-offs straight into your ERP.',
      checks: ['Site teams order from a phone, any time of day', 'Project and job-account prices applied for you', 'Emailed and phoned orders are captured too'],
      lead: 'Your counter and your phones stop being the ordering system.',
    },
    card: {
      kind: 'steps',
      label: 'Site call-off · Synced with your ERP',
      title: 'Ashby Road flats',
      meta: 'Job account J-2291 · Deliver to site, Thursday',
      steps: ['Site manager orders', 'Buyer approves', 'Sent to your ERP'],
      cols: ['Item', 'Stock', 'Job price'],
      rows: [
        { a: 'Anchor resin 380ml', sub: 'CA-380-PE · 24 tubes', b: 'In stock', c: '£6.90', tone: 'ok' },
        { a: 'Hex bolt M10 × 60', sub: 'HB-M10-60 · 8 boxes of 100', b: 'In stock', c: '£18.40', tone: 'ok' },
        { a: 'Rebar spacer 40mm', sub: 'RS-40 · 20 bags', b: 'Low stock', c: '£9.15', tone: 'low' },
      ],
      sent: 'Call-off sent to your ERP as sales order SO-30871',
    },
    scenariosTitle: 'How contractors buy from you',
    scenarios: [
      { who: 'Several sites', title: 'One account, many delivery addresses', text: 'A contractor with five live sites picks the site, orders the materials and sets the day. The job price comes from your ERP.' },
      { who: 'Site and office', title: 'The foreman orders, the buyer approves', text: 'Orders over a limit wait for approval. Your team sees them already priced, not as a phone message.' },
      { who: 'Repeat materials', title: 'The same fixings, every week', text: 'Last week’s order is one click away. No ringing the counter to repeat it.' },
    ],
    painsTitle: 'What construction suppliers tell us',
    pains: [
      { problem: 'The same contractors ring in the same orders every week', fix: 'They reorder in a portal, at their own job prices. Every order lands in your ERP.', link: { text: 'How the trade portal works', href: P } },
      { problem: 'Orders come as emails, photos of lists and PDFs', fix: 'Emailed and PDF orders are read, their codes matched to yours, and posted as finished sales orders after your team approves.', link: { text: 'How emailed orders work', href: M } },
      { problem: 'Project and contract prices live in the ERP but not on the shop', fix: 'Each account sees its own prices, range and terms, live from your ERP. A standard shop cannot carry that.', link: { text: 'How the ERP link works', href: E } },
      { problem: 'Accounts on stop still get orders through', fix: 'Credit limits and stop flags are checked against your ERP before an order posts.', link: { text: 'How the ERP link works', href: E } },
    ],
    handlesTitle: 'What B2Bware handles for construction suppliers',
    handles: [
      { title: 'Job and contract pricing', text: 'Prices per customer, project or band, taken from your ERP.' },
      { title: 'Several delivery sites per account', text: 'Pick the site when you order. Deliveries go where they should.' },
      { title: 'Roles and approvals', text: 'Site staff order, a buyer approves, with limits you set.' },
      { title: 'Bulk and repeat orders', text: 'Boxes, bags, pallets and last week’s order in one click.' },
      { title: 'Live stock', text: 'Contractors see what is in stock before they order.' },
      { title: 'Order history and a record of changes', text: 'Who ordered, who approved, and what changed.' },
    ],
    fit: {
      yes: ['You sell standard coded products on account to contractors and trades', 'Customers have their own prices, bands or job rates', 'Orders arrive by phone, email or at the counter, and someone retypes them', 'You run an ERP, whichever one it is'],
      no: ['Every job is quoted from a bill of quantities, one by one', 'You need project management or tendering software'],
    },
    faqTitle: 'What construction suppliers ask first',
    faq: [
      erpAnswer,
      { q: 'Can a contractor order for different sites?', a: 'Yes. One account can hold several delivery addresses, and the person ordering picks the site.' },
      { q: 'Can we set approval limits?', a: 'Yes. Orders above a limit you set wait for a buyer to approve before they go to your ERP.' },
      { q: 'Will our sales team still take phone orders?', a: 'Yes. Phone orders carry on, and many of the repeat ones move to the portal. The ones that still come in by email are read for you.' },
      bigJob,
    ],
  },
  {
    slug: 'electronic-components',
    name: 'Electronic components',
    blurb: 'Distributors and suppliers of components with large catalogues, price breaks and customer part codes.',
    metaTitle: 'Electronic component ordering, linked to your ERP | B2Bware',
    metaDescription: 'Buyers find parts, see their own price breaks and reorder without ringing you. For electronic component distributors. £5,000 to set up, £300 a month.',
    hero: {
      headline: 'Electronic component buyers find the part and see their price.',
      highlight: 'Orders reach your ERP with the right code.',
      checks: ['Search by part number, spec or their own code', 'Price breaks and contract prices per customer', 'Emailed and spreadsheet orders are read for you'],
      lead: 'Your sales desk stops answering stock and price questions by email.',
    },
    card: {
      kind: 'chips',
      label: 'Parts search · Synced with your ERP',
      title: 'Chip resistor, 10k, 1%',
      meta: 'Account 10442 · Their code: RES-10K-0603',
      chips: ['0603', '1%', '0.1 W', 'RoHS'],
      cols: ['Price break', 'Stock', 'Their price'],
      rows: [
        { a: '1 to 99', sub: 'Reel of 5,000', b: 'In stock', c: '£0.021', tone: 'ok' },
        { a: '100 to 999', sub: 'Cut tape', b: 'In stock', c: '£0.017', tone: 'ok' },
        { a: '1,000 and over', sub: 'Full reel', b: 'Low stock', c: '£0.012', tone: 'low' },
      ],
      sent: 'Order sent to your ERP as sales order SO-41207',
    },
    scenariosTitle: 'Who buys from component suppliers',
    scenarios: [
      { who: 'OEM supplier', title: 'Scheduled orders for a production line', text: 'Buyers reorder the same parts on their own contract prices, using their own part codes. Your ERP gets finished orders.' },
      { who: 'High-mix, low-volume', title: 'Thousands of lines, few per order', text: 'Search by spec, check stock, see the break that applies to them. Fewer “do you have…?” emails.' },
      { who: 'Resellers and repair', title: 'Quick small orders, often', text: 'Repeat the last order, change two lines, send. Spreadsheet orders are read, not retyped.' },
    ],
    painsTitle: 'What component suppliers tell us',
    pains: [
      { problem: 'Buyers send RFQs and orders as spreadsheets with their own part codes', fix: 'Their codes are matched to yours, in the right pack and unit, checked against your ERP and posted as finished orders. Every correction is kept.', link: { text: 'How emailed orders work', href: M } },
      { problem: 'Every customer has different price breaks and contract prices', fix: 'Each account sees its own prices and breaks, live from your ERP. A standard shop cannot carry that.', link: { text: 'How the trade portal works', href: P } },
      { problem: 'Your catalogue is huge and the shop stock never matches the ERP', fix: 'Prices and stock sync live with your ERP. If the link breaks after an update, we fix it. That is in the monthly fee.', link: { text: 'How the ERP link works', href: E } },
    ],
    handlesTitle: 'What B2Bware handles for component suppliers',
    handles: [
      { title: 'Large catalogues', text: 'Search and filter by part number, spec or the customer’s own code.' },
      { title: 'Price breaks and contract prices', text: 'Tiered and per-customer prices, taken from your ERP.' },
      { title: 'Their codes, your codes', text: 'Customer part codes matched to yours, in reels, tapes and packs.' },
      { title: 'Live stock', text: 'Buyers see availability without emailing the sales desk.' },
      { title: 'Datasheets and documents on the part', text: 'Technical documents sit with the item buyers are looking at.' },
      { title: 'Order history and reorder', text: 'Repeat a past order and change only what moved.' },
    ],
    fit: {
      yes: ['You sell coded components on account, with price breaks or contract prices', 'Customers use their own part codes and send orders as sheets or emails', 'Your catalogue is large and stock changes daily', 'You run an ERP, whichever one it is'],
      no: ['You sell on open spot prices with no data behind them', 'You need a sourcing or broker-quoting tool'],
    },
    proof: [
      {
        name: 'Kienesberger',
        meta: 'Machinery manufacturer and wholesaler, Austria',
        text: 'Their portal holds 20 million price entries from the ERP, against 70,000 in a standard shop.',
        href: '/case-studies/kienesberger',
      },
    ],
    faqTitle: 'What component suppliers ask first',
    faq: [
      erpAnswer,
      { q: 'Can it carry a large catalogue with different prices per customer?', a: 'Yes. Each account sees its own prices, range and terms, live from your ERP. Kienesberger runs 20 million price entries this way.' },
      { q: 'Can buyers order with their own part codes?', a: 'Yes. Their codes are matched to yours once, and every correction is kept for next time.' },
      { q: 'Can we attach datasheets and certificates?', a: 'Yes, documents can sit alongside the item. We confirm what you hold and how it is linked in the consultation.' },
      bigJob,
    ],
  },
  {
    slug: 'auto-parts',
    name: 'Auto parts',
    blurb: 'Parts distributors serving workshops, fleets and resellers with account-based prices.',
    metaTitle: 'Auto parts ordering, linked to your ERP | B2Bware',
    metaDescription: 'Workshops and resellers order auto parts at their own trade prices, and orders land in your ERP without retyping. £5,000 to set up, £300 a month.',
    hero: {
      headline: 'Workshops order auto parts at their own trade price.',
      highlight: 'Without ringing your counter.',
      checks: ['Each account sees its own price band and stock', 'Parts found by vehicle or by part number', 'Emailed and phoned orders are captured too'],
      lead: 'Your ERP stays in charge. The portal just shows what the workshop should see.',
    },
    card: {
      kind: 'chips',
      label: 'Workshop portal · Synced with your ERP',
      title: 'Brake pads, front axle',
      meta: 'Fits: Transit 2.0 diesel · Account band: Workshop B',
      chips: ['Find by vehicle', 'Find by part number', 'Reorder'],
      cols: ['Part', 'Stock', 'Your price'],
      rows: [
        { a: 'Pad set, premium', sub: 'BP-2210-P', b: 'Leeds depot', c: '£38.20', tone: 'ok' },
        { a: 'Pad set, standard', sub: 'BP-2210-S', b: 'Leeds depot', c: '£29.50', tone: 'ok' },
        { a: 'Wear sensor', sub: 'WS-2210', b: 'Low stock', c: '£7.80', tone: 'low' },
      ],
      sent: 'Order sent to your ERP as sales order SO-52318',
    },
    scenariosTitle: 'Who buys from you',
    scenarios: [
      { who: 'Local workshops', title: 'A quick order before the van leaves', text: 'The workshop orders from a phone, sees its own price and today’s stock, and gets the right part.' },
      { who: 'Fleets and resellers', title: 'Contract prices and account terms', text: 'Different bands for different buyers, all held in your ERP and shown correctly.' },
      { who: 'Several brands or depots', title: 'One catalogue, several stockrooms', text: 'Stock by depot, so a workshop knows what is nearby before it orders.' },
    ],
    painsTitle: 'What parts distributors tell us',
    pains: [
      { problem: 'Workshops ring or email the same orders every day', fix: 'They reorder in a portal at their own band price. Every order lands in your ERP.', link: { text: 'How the trade portal works', href: P } },
      { problem: 'The wrong price or stock shows, and nobody knows which system is right', fix: 'Prices and stock sync live with your ERP, so the portal shows what the ERP says. If the link breaks, we fix it.', link: { text: 'How the ERP link works', href: E } },
      { problem: 'Orders arrive by email and counter notes and get retyped', fix: 'Emailed and PDF orders are read, matched to your part numbers, and posted as finished orders after your team approves.', link: { text: 'How emailed orders work', href: M } },
    ],
    handlesTitle: 'What B2Bware handles for parts distributors',
    handles: [
      { title: 'Prices by buyer type', text: 'Workshop, fleet and reseller bands, taken from your ERP.' },
      { title: 'Fitment-led catalogues', text: 'Buyers search by vehicle or part number. The fitment data is yours; we show it.' },
      { title: 'Stock by depot', text: 'Show what is nearby, so a workshop knows when it will arrive.' },
      { title: 'Bulk and repeat orders', text: 'Filters, oil, pads: the usual order in one click.' },
      { title: 'Several accounts per customer', text: 'A garage group can order for each branch under one login.' },
      { title: 'Order status', text: 'Buyers see where an order is, so they stop ringing to ask.' },
    ],
    fit: {
      yes: ['You sell coded parts on account to workshops, fleets or resellers', 'Buyers have their own price bands', 'Orders reach you by phone, email or counter and someone retypes them', 'You run an ERP, whichever one it is'],
      no: ['You only sell to consumers', 'You need a vehicle data subscription we do not supply'],
    },
    faqTitle: 'What parts distributors ask first',
    faq: [
      erpAnswer,
      { q: 'Where does the fitment data come from?', a: 'From your own product data or ERP. We show it and keep it in step with your ERP. We do not sell a fitment database.' },
      { q: 'Can different buyers see different prices?', a: 'Yes. Each account sees its own prices, range and terms, live from your ERP.' },
      { q: 'We also sell to consumers. Does that work?', a: 'Trade ordering is what we build here. If you also run a consumer shop, tell us in the consultation.' },
      bigJob,
    ],
  },
  {
    slug: 'industrial-machinery',
    name: 'Industrial machinery',
    blurb: 'Machinery makers and dealers selling spare parts and standard products through dealers and agents.',
    metaTitle: 'Machinery spare parts ordering, linked to your ERP | B2Bware',
    metaDescription: 'Dealers and customers order spare parts at their own prices, and agents order with live ERP pricing. For machinery sellers. £5,000 to set up, £300 a month.',
    hero: {
      headline: 'Dealers order machine spare parts at their own prices.',
      highlight: 'Straight into your ERP.',
      checks: ['Dealers and customers reorder parts by machine', 'Agents order on the visit with live prices', 'Emailed and phoned orders are captured too'],
      lead: 'The phone stops being your spare parts desk.',
    },
    card: {
      kind: 'table',
      label: 'Dealer portal · Synced with your ERP',
      title: 'Series 40 press, serial 40-1182',
      meta: 'Dealer acct D-0087 · Spare parts list',
      cols: ['Part', 'Stock', 'Dealer price'],
      rows: [
        { a: 'Seal kit', sub: 'SK-40-02', b: 'In stock', c: '£112.00', tone: 'ok' },
        { a: 'Drive belt, 8 mm', sub: 'DB-40-08', b: 'In stock', c: '£64.50', tone: 'ok' },
        { a: 'Pressure valve', sub: 'PV-40-11', b: 'Low stock', c: '£238.00', tone: 'low' },
      ],
      sent: 'Order sent to your ERP as sales order SO-60442',
    },
    scenariosTitle: 'How machinery is sold and serviced',
    scenarios: [
      { who: 'Dealer network', title: 'Each dealer, their own price', text: 'Dealers see their own prices, range and terms. They order parts without ringing the factory.' },
      { who: 'Direct customers', title: 'Parts for the machine on the floor', text: 'Customers find parts by machine, check stock and reorder. Your service team stops answering the same questions.' },
      { who: 'Sales agents', title: 'Ordering on the visit', text: 'Agents order for dealers with live ERP prices, in the same portal.' },
    ],
    painsTitle: 'What machinery sellers tell us',
    pains: [
      { problem: 'Spare parts orders arrive by phone and email and are retyped', fix: 'Dealers and customers order in a portal. Emailed and PDF orders are read, matched to your part numbers, and posted after your team approves.', link: { text: 'Spare parts ordering, step by step', href: '/equipment-spare-parts-ordering-construction' } },
      { problem: 'Every dealer has a different price and nothing shows it', fix: 'Each dealer sees their own prices, range and terms, live from your ERP.', link: { text: 'How the ERP link works', href: E } },
      { problem: 'Agents quote from memory because they cannot see live prices', fix: 'Agents order for dealers with live ERP prices. A sales app for field agents is available as an add-on, for a flat monthly fee, not priced per agent.', link: { text: 'How the trade portal works', href: P } },
    ],
    handlesTitle: 'What B2Bware handles for machinery sellers',
    handles: [
      { title: 'Dealer and customer accounts', text: 'Separate views, prices and terms for each.' },
      { title: 'Spare parts by machine', text: 'Parts lists linked to the machine, from your own data.' },
      { title: 'Live stock and prices', text: 'Taken from your ERP, so they match what you will invoice.' },
      { title: 'Orders from several channels', text: 'Portal, email, PDF, spreadsheet and phone, all ending in the ERP.' },
      { title: 'Documents with the order', text: 'Order confirmations and records kept against the order.' },
      { title: 'Several brands or sites', text: 'One setup for more than one brand or location.' },
    ],
    fit: {
      yes: ['You sell standard parts and products through dealers, agents or direct on account', 'Dealers have their own prices or bands', 'Orders reach you by phone or email and someone retypes them', 'You run an ERP, whichever one it is'],
      no: ['Your machines are configured to order and priced one by one', 'You need a quoting or configuring tool rather than ordering'],
    },
    proof: [
      {
        name: 'Kienesberger',
        meta: 'Machinery manufacturer and wholesaler, Austria',
        text: 'Their portal shows each customer their own prices from the ERP: 20 million price entries, against 70,000 in a standard shop.',
        href: '/case-studies/kienesberger',
      },
      {
        name: 'Doppler',
        meta: 'Umbrella and parasol manufacturer, Austria',
        text: 'Sales agents order with live ERP pricing.',
        href: '/case-studies/doppler',
      },
    ],
    faqTitle: 'What machinery sellers ask first',
    faq: [
      erpAnswer,
      { q: 'What about machines that are configured to order?', a: 'This is not for them. It suits standard coded products and spare parts with set prices per account, not orders that are configured or priced one by one.' },
      { q: 'Can each dealer see their own prices?', a: 'Yes. Each account sees its own prices, range and terms, live from your ERP.' },
      { q: 'Can our sales agents use it?', a: 'Yes. Agents order for dealers with live ERP prices. The sales app for field agents is an add-on for a flat monthly fee.' },
      bigJob,
    ],
  },
  {
    slug: 'food-packaging',
    name: 'Food packaging',
    blurb: 'Packaging suppliers whose customers reorder the same lines on a rhythm, by pallet and by case.',
    metaTitle: 'Food packaging ordering, linked to your ERP | B2Bware',
    metaDescription: 'Customers reorder trays, tubs and film in their own packs and prices, and orders land in your ERP without retyping. £5,000 to set up, £300 a month.',
    hero: {
      headline: 'Food packaging reorders arrive in the right pack, at the right price.',
      highlight: 'Without the weekly phone call.',
      checks: ['Customers repeat their usual order in one click', 'Cases, pallets and prices per account', 'Emailed and phoned orders are captured too'],
      lead: 'Your team stops retyping the same orders, week after week.',
    },
    card: {
      kind: 'chips',
      label: 'Customer portal · Synced with your ERP',
      title: 'Greenfield Foods, weekly order',
      meta: 'Acct 20318 · Next delivery Tuesday',
      chips: ['Repeat last order', 'Edit quantities', 'Add item'],
      cols: ['Item', 'Pack', 'Their price'],
      rows: [
        { a: 'Tray 500ml, kraft', sub: 'TR-500-K', b: 'Pallet of 1,200', c: '£0.092', tone: 'ok' },
        { a: 'Lid for 500ml tray', sub: 'LD-500', b: 'Case of 600', c: '£0.031', tone: 'ok' },
        { a: 'Film roll, 450mm', sub: 'FR-450', b: 'Box of 4', c: '£42.00', tone: 'low' },
      ],
      sent: 'Order sent to your ERP as sales order SO-71106',
    },
    scenariosTitle: 'How packaging is bought',
    scenarios: [
      { who: 'Food producers', title: 'The same lines, on a rhythm', text: 'Producers reorder the same trays and lids each week. The usual order is saved, so repeating it takes a minute.' },
      { who: 'Distributor network', title: 'Each distributor, their own price', text: 'Distributors see their own price list, pack sizes and terms, not a public one.' },
      { who: 'Retail customers', title: 'Orders by sheet or email', text: 'Their lists arrive as spreadsheets or PDFs. They are read, matched to your codes and posted as finished orders.' },
    ],
    painsTitle: 'What packaging suppliers tell us',
    pains: [
      { problem: 'The same customers phone in the same reorders every week', fix: 'They reorder in a portal at their own prices and packs. Every order lands in your ERP.', link: { text: 'How the trade portal works', href: P } },
      { problem: 'Orders in cases, pallets and units get mixed up when retyped', fix: 'Packs and units are held against each item, so a pallet is a pallet. Customer codes are matched to yours.', link: { text: 'How emailed orders work', href: M } },
      { problem: 'Prices and stock on the shop are not what the ERP says', fix: 'Each account sees its own prices and stock, synced live with your ERP. If the link breaks, we fix it.', link: { text: 'How the ERP link works', href: E } },
    ],
    handlesTitle: 'What B2Bware handles for packaging suppliers',
    handles: [
      { title: 'Repeat and standing orders', text: 'The usual order saved, ready to send in a click.' },
      { title: 'Packs, cases and pallets', text: 'Quantities in the unit the customer buys.' },
      { title: 'Prices per account', text: 'Price lists and quantity breaks taken from your ERP.' },
      { title: 'Customer segments', text: 'Different ranges for producers, distributors and retailers.' },
      { title: 'Several buyers per customer', text: 'Roles and permissions, so the right people order.' },
      { title: 'Order history and records', text: 'Every order kept, with a record of changes.' },
    ],
    fit: {
      yes: ['You sell standard packaging lines on account', 'Customers reorder the same items and have their own prices', 'Orders arrive by phone or email and someone retypes them', 'You run an ERP, whichever one it is'],
      no: ['Your work is custom printed runs priced and approved one by one', 'You need artwork proofing or a design tool'],
    },
    faqTitle: 'What packaging suppliers ask first',
    faq: [
      erpAnswer,
      { q: 'Can customers order in cases and pallets?', a: 'Yes. Packs and units are held against each item, and customers order in the unit they buy.' },
      { q: 'Can a customer save a standing order?', a: 'Yes. They can repeat the usual order in one click and change only what is different.' },
      { q: 'What about custom packaging?', a: 'This suits your standard catalogue. Custom runs that are quoted and approved one by one stay outside it.' },
      bigJob,
    ],
  },
  {
    slug: 'beauty',
    name: 'Beauty and cosmetics',
    blurb: 'Brands and distributors selling shades, sizes and sets to salons, retailers and resellers.',
    metaTitle: 'Beauty and cosmetics ordering, linked to your ERP | B2Bware',
    metaDescription: 'Salons and retailers reorder shades, sizes and sets at their own prices, and orders land in your ERP without retyping. £5,000 to set up, £300 a month.',
    hero: {
      headline: 'Salons and retailers reorder beauty stock in minutes.',
      highlight: 'Shades, sizes and sets, at their own price.',
      checks: ['Variants, bundles and case sizes handled', 'Salon, retailer and reseller price lists', 'Emailed and spreadsheet orders are read for you'],
      lead: 'Your account managers stop retyping spreadsheets.',
    },
    card: {
      kind: 'table',
      label: 'Trade portal · Synced with your ERP',
      title: 'Repair serum 30ml',
      meta: 'Salon price list · Case of 12',
      cols: ['Shade or size', 'Stock', 'Salon price'],
      rows: [
        { a: 'Unscented', sub: 'RS-30-U · 2 cases', b: 'In stock', c: '£9.40', tone: 'ok' },
        { a: 'Rose', sub: 'RS-30-R · 1 case', b: 'In stock', c: '£9.40', tone: 'ok' },
        { a: 'Gift set, trio', sub: 'RS-GS3 · 6 sets', b: 'Low stock', c: '£26.80', tone: 'low' },
      ],
      sent: 'Order sent to your ERP as sales order SO-83019',
    },
    scenariosTitle: 'Who orders from beauty brands',
    scenarios: [
      { who: 'Brand moving into wholesale', title: 'Wholesale orders outgrow the inbox', text: 'Trade buyers log in, see wholesale prices and order by case. Your small team is not retyping each one.' },
      { who: 'Distributor', title: 'A huge range, many price lists', text: 'Hundreds of lines, in shades and sizes, with prices per buyer group. Each buyer sees their own range.' },
      { who: 'Direct brand adding trade', title: 'Salons and resellers next to consumers', text: 'Trade buyers get their own portal and prices, kept apart from your consumer shop.' },
    ],
    painsTitle: 'What beauty brands tell us',
    pains: [
      { problem: 'Trade orders come in as spreadsheets and emails and are retyped', fix: 'Emailed, PDF and Excel orders are read, matched to your codes and shades, checked against your ERP and posted after your team approves.', link: { text: 'How emailed orders work', href: M } },
      { problem: 'Salons and retailers ring to repeat the same order', fix: 'They reorder in a portal, at their own price, by case or by unit. Every order lands in your ERP.', link: { text: 'How the trade portal works', href: P } },
      { problem: 'Your consumer shop and your ERP disagree on trade prices and stock', fix: 'Trade buyers get a portal with prices and stock synced live from your ERP, so trade and shop do not fight.', link: { text: 'How the ERP link works', href: E } },
    ],
    handlesTitle: 'What B2Bware handles for beauty brands',
    handles: [
      { title: 'Shades, sizes and variants', text: 'Each variant ordered cleanly, with its own stock.' },
      { title: 'Sets and bundles', text: 'Gift sets and kits ordered as one line.' },
      { title: 'Price lists per buyer group', text: 'Salon, retailer and reseller prices from your ERP.' },
      { title: 'Case sizes and minimums', text: 'Buyers order in the packs you sell.' },
      { title: 'Buyer-group catalogues', text: 'Each group sees the range meant for them.' },
      { title: 'Reorder from history', text: 'Last quarter’s order, edited and sent in a minute.' },
    ],
    fit: {
      yes: ['You sell cosmetics or beauty products to salons, retailers or resellers on account', 'Products have shades, sizes or sets, and buyers have their own price lists', 'Orders reach you by sheet or email and someone retypes them', 'You run an ERP, whichever one it is'],
      no: ['You only sell to consumers', 'You need a product information or label compliance tool'],
    },
    faqTitle: 'What beauty brands ask first',
    faq: [
      erpAnswer,
      { q: 'Does it handle shades, bundles and pack sizes?', a: 'Yes. Variants, sets and case sizes are held against each item, and buyers order in the unit they buy.' },
      { q: 'Can salons and retailers see different prices and ranges?', a: 'Yes. Each account sees its own prices and range, live from your ERP.' },
      { q: 'Some customers still send Excel files. Is that covered?', a: 'Yes. Spreadsheet and emailed orders are read, matched to your codes and posted as finished orders after your team approves.' },
      bigJob,
    ],
  },
  {
    slug: 'medical-technology',
    name: 'Medical technology',
    blurb: 'Equipment and consumables suppliers selling to clinics, hospitals and distributors.',
    metaTitle: 'Medical equipment ordering, linked to your ERP | B2Bware',
    metaDescription: 'Clinics and distributors order at their own prices, with approvals and a record of every order, straight into your ERP. £5,000 to set up, £300 a month.',
    hero: {
      headline: 'Clinics and distributors order medical supplies at their own prices.',
      highlight: 'With the approvals you need.',
      checks: ['Orders approved before they reach your ERP', 'Contract prices per hospital, clinic or distributor', 'Emailed and PDF orders are read for you'],
      lead: 'Every order arrives correct and with a record of who approved it.',
    },
    card: {
      kind: 'steps',
      label: 'Buyer portal · Synced with your ERP',
      title: 'Riverside Clinic',
      meta: 'Contract acct M-3305 · Ward consumables',
      steps: ['Ward manager orders', 'Procurement approves', 'Sent to your ERP'],
      cols: ['Item', 'Stock', 'Contract price'],
      rows: [
        { a: 'Syringe set, sterile', sub: 'SY-20-ST · 10 boxes', b: 'In stock', c: '£18.60', tone: 'ok' },
        { a: 'Monitor lead, adult', sub: 'ML-AD-3 · 4 units', b: 'In stock', c: '£42.00', tone: 'ok' },
        { a: 'Pulse oximeter', sub: 'PO-200 · 2 units', b: 'Low stock', c: '£265.00', tone: 'low' },
      ],
      sent: 'Approved order sent to your ERP as SO-94012',
    },
    scenariosTitle: 'Who orders from you',
    scenarios: [
      { who: 'Hospitals and clinics', title: 'Ward orders need a second signature', text: 'Staff order, a budget holder approves. Your ERP only gets orders that have cleared the approval.' },
      { who: 'Distributor partners', title: 'Their range, their price', text: 'Partners see their own catalogue and contract prices, not the whole range at list.' },
      { who: 'Email and PDF buyers', title: 'Purchase orders in the inbox', text: 'POs arrive as PDFs. They are read, matched to your item codes and prices, and posted once your team approves.' },
    ],
    painsTitle: 'What medical suppliers tell us',
    pains: [
      { problem: 'Purchase orders arrive as emails and PDFs and are retyped', fix: 'POs are read, their codes matched to yours, checked against your ERP and posted as finished sales orders. Your team approves before anything posts.', link: { text: 'How emailed orders work', href: M } },
      { problem: 'Contract prices differ by customer and the shop cannot show them', fix: 'Each account sees its own prices, range and terms, live from your ERP.', link: { text: 'How the trade portal works', href: P } },
      { problem: 'Nobody can prove who ordered or approved what', fix: 'Each order keeps a record of who ordered, who approved and what changed, and it lands in your ERP.', link: { text: 'How the ERP link works', href: E } },
    ],
    handlesTitle: 'What B2Bware handles for medical suppliers',
    handles: [
      { title: 'Contract and tiered pricing', text: 'Per hospital, clinic or distributor, from your ERP.' },
      { title: 'Approval steps', text: 'Orders above a limit wait for a named approver.' },
      { title: 'Separate catalogues', text: 'Distributors and clinics each see the range meant for them.' },
      { title: 'Live stock', text: 'Buyers see availability before they order.' },
      { title: 'A record of every order', text: 'Who ordered, who approved and what changed, kept for each order.' },
      { title: 'Bulk and repeat orders', text: 'Ward consumables reordered in one click.' },
    ],
    fit: {
      yes: ['You sell standard equipment and consumables on account', 'Customers have contract prices and need approvals', 'Purchase orders arrive by email or PDF and someone retypes them', 'You run an ERP, whichever one it is'],
      no: ['You need device registration or regulatory submissions handled', 'High-value equipment is quoted and negotiated one deal at a time'],
    },
    faqTitle: 'What medical suppliers ask first',
    faq: [
      erpAnswer,
      { q: 'Can orders need approval before they post?', a: 'Yes. Orders above a limit you set wait for an approver. Only approved orders go to your ERP.' },
      { q: 'Can we keep a record of who ordered what?', a: 'Yes. Each order keeps who ordered it, who approved it and what changed.' },
      { q: 'Does this cover device regulation?', a: 'No. B2Bware handles ordering, pricing and the link to your ERP. Regulatory work stays with you.' },
      bigJob,
    ],
  },
];

export const bySlug = (slug: string) => industries.find((i) => i.slug === slug)!;
