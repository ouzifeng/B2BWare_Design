import { SITE_URL } from '../config';

const CHECK = '#order-check';

export const hero = {
  headline: 'Trade orders straight into your ERP',
  highlight: 'from a portal, an email or your webshop',
  sub: 'Your team stops retyping emailed orders and taking the same reorders by phone. We build the portal, read the emails, fix the webshop link, and keep it all running for a fixed price.',
  primaryCta: { text: 'Book a free consultation', href: CHECK },
  secondaryCta: { text: 'See how it works', href: '#v2-how' },
  note: 'For manufacturers, distributors and wholesalers, whichever ERP you run.',
  mock: {
    label: 'Emailed order \u00b7 PDF attached',
    customer: 'Hargreaves Building Supplies',
    meta: 'Acct 10442 \u00b7 their codes, your prices',
    badge: 'Landed in your ERP',
    rows: [
      { item: 'Hex bolt M8 \u00d7 30, A2', qty: '4 boxes of 100', codes: 'HB-M8-30SS \u2192 933-0830-A2', ok: '\u2713 Contract price \u00a314.60' },
      { item: 'Nyloc nut M8, A2', qty: '2 boxes of 200', codes: 'NYL-M8 \u2192 985-08-A2', ok: '\u2713 In stock' },
      { item: 'Anchor resin 380ml', qty: '12 tubes', codes: 'CA-380-PE', ok: '\u2713 Quantity break at 10' },
      { item: 'Account check', qty: 'Terms 30 days', codes: 'Acct 10442', ok: '\u2713 Not on stop' },
    ],
    footLeft: 'Sales order SO-104420, ready to pick',
    footRight: 'No retyping',
    caption: 'Illustrative example.',
  },
};

export const doors = {
  title: 'Which of these costs you most?',
  cards: [
    {
      image: '/images/online-ordering.jpg',
      alt: 'Trade portal with customer-specific prices',
      title: 'Same reorders by phone and email',
      text: "Customers ring in the same orders every week because your shop can't show their own prices.",
      linkText: 'See how we fix it \u2192',
      href: '/solutions/trade-portal',
    },
    {
      image: '/images/erp-sync.jpg',
      alt: 'ERP connection with prices, stock and orders in sync',
      title: 'Shop and ERP out of sync',
      text: 'Your webshop and ERP disagree on prices or stock, and nobody knows which is right.',
      linkText: 'See how we fix it \u2192',
      href: '/solutions/erp-integration',
    },
    {
      image: '/images/emailed-orders.jpg',
      alt: 'Emailed PDF and spreadsheet orders read into the ERP',
      title: 'Emailed orders',
      text: 'Customers email PDFs. Someone retypes every line.',
      linkText: 'See how we fix it \u2192',
      href: '/solutions/emailed-orders',
    },
  ],
};

export const whatWeFix = {
  title: 'What we fix',
  intro: 'The problems trade suppliers describe most, and what we do about each.',
  items: [
    { problem: 'The same customers phone and email the same orders every week', fix: 'They reorder in a portal at their own prices, and every order lands in your ERP.' },
    { problem: 'Someone retypes every emailed or PDF order', fix: 'AI reads it and posts a finished sales order to your ERP.' },
    { problem: 'Every customer sends a different format, with their own codes', fix: 'Their codes are mapped to yours, in boxes, packs and units. Every correction is kept.' },
    { problem: 'Your team still checks every line', fix: 'Every order is checked against your ERP prices, stock and credit before it posts. Send us 50 real orders and see the match rate first.' },
    { problem: "The webshop shows the wrong price or stock, and nobody knows which is right", fix: 'Each account sees its own prices and stock, synced live with your ERP.' },
    { problem: 'The link broke after an update, or the vendor disappeared', fix: 'We take over the link or rebuild it. Fixing it after updates is in the monthly fee.' },
    { problem: 'The portal went live and nobody used it', fix: 'We set up every account, invite your customers with you, and check who is ordering after 30 days.' },
  ],
  limits: "What we won't pretend to fix: spot prices with no data behind them, and orders that are configured or priced one by one.",
};

export const how = {
  title: 'How it works',
  intro: 'You see the plan and the fixed price before you pay anything. Live in weeks, not months.',
  steps: [
    { title: 'Tell us what needs fixing', text: "Orders retyped from emails, the same reorders by phone, or a webshop that doesn't match your ERP. Show us your ERP and how you work today. Emailed orders? Send us 50 real ones and we show you the match rate before you pay.", free: true },
    { title: 'Get a plan and a fixed price', text: "What we'd build or connect, what it fixes, and what it costs to set up.", free: true },
    { title: 'We build, connect and test', text: 'Your trade portal, your order inbox or your ERP link, tested on your real customers, prices and orders. Nothing goes live until your team approves it.', free: false },
    { title: 'We run it', text: 'We watch every order and fix what breaks. When your ERP or shop updates, we fix the link, and that is in the monthly fee. One team owns it all, so nobody points the finger at another supplier.', free: false },
  ],
  cta: { text: 'Get a plan and a fixed price', href: CHECK },
};

export const faq = {
  title: 'What buyers ask us first',
  items: [
    { q: 'Will it work with our ERP?', a: "Yes, your ERP and your setup, not just the brand. B2Bware is made by SyncSpider, the integration platform we have run for 10 years, with 400+ integrations. If yours isn't covered we build the link as part of set-up. We confirm it in the free consultation." },
    { q: 'Can each customer see their own prices?', a: 'Yes. Each account sees its own prices, range and terms, live from your ERP.' },
    { q: 'We already have a webshop. Do we start again?', a: "Not necessarily. We can take over the link to your ERP and fix it. If the shop can't handle trade pricing, we give your trade customers a portal instead." },
    { q: 'Will orders go into our ERP, or just sit in a portal or inbox?', a: "Into the ERP, as finished sales orders. If anyone still retypes them, we haven't done the job." },
    { q: 'Is this going to be a big IT project?', a: 'No. We do the set-up for a fixed price agreed before we start, then run it for you. Your team checks orders, not a project plan.' },
    { q: 'What if something goes wrong?', a: 'We run it, so we watch every order and fix what breaks, including after ERP updates. That is in the monthly fee. Nothing posts until your team approves it.' },
    { q: 'We already have an order-reading tool.', a: "If your tool gives you a file someone still checks and uploads, we finish the job: their codes, your prices and accounts on stop handled, then the finished order posted to your ERP." },
    { q: 'Will it replace our staff?', a: 'No. It takes the keying off them, so they can deal with the exceptions and the customers.' },
    { q: 'Is it right for us?', a: 'Yes, if you sell standard products with codes to trade accounts on their own prices. Not if every order is configured or priced one by one.' },
  ],
};

export const proof = {
  title: 'Already running',
  intro: 'Ask us to put you in touch.',
  customers: [
    { name: 'Kienesberger', meta: 'Manufacturer, Austria', text: "Each customer's own prices from the ERP in their portal, across about 70,000 price entries.", image: '/images/menu/menu-cs-kienesberger.webp' },
    { name: 'Harrows Darts', meta: 'Manufacturer, UK', text: 'Trade customers order through a portal connected to the ERP.' },
    { name: 'Doppler', meta: 'Umbrella and parasol manufacturer, Austria', text: 'Sales agents order with live ERP pricing.', image: '/images/menu/menu-cs-doppler.webp', stats: [{ fig: '70%', label: 'faster order entry' }] },
  ],
};

export const pricing = {
  title: 'The price, before you call',
  intro: 'One price, whichever way your orders arrive.',
  cards: [
    { tag: 'Before you pay anything', title: 'Free consultation', text: 'Tell us what needs fixing. We come back with a plan and a fixed price.', cta: { text: 'Book a free consultation →', href: CHECK } },
    { tag: 'One-off, agreed before we start', title: '\u00a35,000 to set up', text: 'Everything below, set up and tested on your real orders before anything goes live.' },
    { tag: 'To run it', title: '\u00a3300 a month', text: 'First 1,000 orders a month included, then about 15p an order. No per-user fees, no day rates for fixes.' },
  ],
  includedTitle: "What's included",
  included: [
    "Trade portal with each customer's own prices and catalogue",
    'Emailed, PDF and Excel orders read automatically',
    'Their part codes, packs and units matched to yours',
    'Prices, stock and credit checked against your ERP',
    'Your team approves before anything posts',
    'Finished sales orders in your ERP, whichever ERP you run',
    'Hosting, updates, support and daily backups',
    'We watch every order and fix what breaks',
  ],
  includedMore: [
    'Order history and one-click reorder', 'Search and filters', 'Variants, bundles and kits', 'Tiered and quantity-break pricing', 'Stock across warehouses', 'A full audit trail', 'ERP link built new, or taken over and fixed', 'Cloud or on-premise ERP', 'REST API', 'Roles and permissions', 'Several brands or companies from one setup', 'White label and languages', 'Reporting', 'Encryption',
  ],
  addonsLead: 'Add-ons, a flat monthly fee each:',
  addons: [
    'EDI link for retail customers',
    'Sales app for field reps, not priced per rep',
    'Approval workflows beyond the first review',
    'Payment methods',
    'Quotes with e-signature',
    'WhatsApp ordering',
  ],
  addonsNote: 'Anything custom gets a fixed quote before we start, at \u00a3500 a day.',
};

export const orderCheck = {
  title: 'Book a free consultation',
  intro: "Tell us what's not working: orders retyped from emails, the same reorders by phone, or a webshop that doesn't match your ERP. We'll come back with a plan and a fixed price. You keep the plan either way.",
};

export const meta = {
  title: 'Trade ordering connected to your ERP | B2Bware',
  description: "Orders retyped from emails, the same reorders by phone, webshop prices that don't match your ERP. We fix it for a fixed price, then keep it running. Free consultation.",
};
