// Content for /solutions/b2c and the homepage Consumers view.

export const meta = {
  title: 'Switch to a consumer web shop built on your ERP | B2Bware',
  description: 'A consumer web shop built on your ERP: every order reaches it, checkout prices match it, stock is live. We build it, move you across and run it.',
};

export const hero = {
  headline: 'Stop using your current consumer shop.',
  highlight: 'Switch to one built on your ERP.',
  lead: 'Every order reaches your ERP. The price at checkout is the price in your ERP. We build the shop, move everything across, and run it.',
  priceLine: 'Fixed price, agreed after the free consultation.',
  priceNote: 'Whichever ERP you run.',
};

export const formIntro = "Tell us what's not working between your web shop and your ERP: missing orders, prices or stock that don't match, a link that keeps breaking. We'll come back with a plan and a fixed price. You keep the plan either way. What to bring: your ERP, your shop platform, and a few examples of what's gone wrong.";

export type ReasonKind = 'order' | 'price' | 'stock' | 'variants' | 'updates' | 'month';

export const reasonsIntro = {
  title: 'Six reasons to switch',
  intro: 'Each one is something your shop does today that it would not do if it were built on your ERP.',
};

export const reasons: { kind: ReasonKind; title: string; today: string; fix: string; brief: string }[] = [
  {
    kind: 'order',
    title: 'Every order reaches your ERP',
    today: 'Orders go missing or get retyped. You find out when the customer calls to ask where it is.',
    fix: 'We put every order into the ERP as a finished sales order, and we watch each one. A failed order is fixed before the customer calls.',
    brief: 'Every web order lands in the ERP, and we watch each one.',
  },
  {
    kind: 'price',
    title: 'The price at checkout is the price in your ERP',
    today: 'The shop holds its own prices. Promotions are set up twice and VAT gets worked out again.',
    fix: 'Prices, VAT and promotions come from the ERP, so the customer pays what your ERP says. Nothing is copied across.',
    brief: 'VAT and promotions included, with nothing copied across.',
  },
  {
    kind: 'stock',
    title: "You stop selling what you don't have",
    today: 'Stock is a copy made on a timer. The shop says in stock and the warehouse says otherwise.',
    fix: 'Stock is read live from the ERP, not from a copy made half an hour ago.',
    brief: 'Live stock from the ERP, not a copy made on a timer.',
  },
  {
    kind: 'variants',
    title: 'New products reach the shop without retyping',
    today: 'New items sit in the ERP until someone retypes them into the shop.',
    fix: 'The shop is built on your item master. Every variant is its own product with its own details. Change it in the ERP and the shop follows.',
    brief: 'The shop is built on your item master, variants included.',
  },
  {
    kind: 'updates',
    title: 'Updates stop breaking it',
    today: 'A plugin or shop update goes in and the link to the ERP stops working.',
    fix: 'We run the shop and the link. Fixing it after updates is in the monthly fee.',
    brief: 'We run it. Fixes after updates are in the monthly fee.',
  },
  {
    kind: 'month',
    title: 'Month end stops being manual',
    today: 'Someone matches web payments and refunds to orders by hand.',
    fix: 'Payments and refunds are matched to ERP orders, including prepayment and cash on delivery.',
    brief: 'Payments and refunds matched to ERP orders.',
  },
];

export const connected = {
  title: 'Everything your shop needs, already connected.',
  intro: 'Most shops add a plugin for each of these. Ours come connected.',
  groups: [
    { name: 'Payments', items: ['Cards', 'Apple Pay', 'Google Pay', 'PayPal', 'Klarna', 'Prepayment', 'Cash on delivery'] },
    { name: 'Shipping', items: ['DHL', 'DPD', 'UPS', 'Royal Mail', 'Tracking emails'] },
    { name: 'Accounting', items: ['Xero', 'QuickBooks'] },
    { name: 'Marketing', items: ['Google Shopping', 'Meta catalogue', 'GA4', 'Klaviyo', 'Mailchimp'] },
    { name: 'Reviews', items: ['Trustpilot', 'Reviews.io'] },
  ],
  marketplaces: {
    name: 'Marketplaces',
    items: ['Amazon', 'eBay', 'and more'],
    note: 'Through SyncSpider, with the same stock and orders as your shop.',
  },
  closing: "400+ integrations through SyncSpider. If yours isn't listed, we connect it.",
};

export const builtIn = {
  title: 'Built in, not bolted on.',
  intro: 'These usually mean another plugin. Here they are part of the shop.',
  items: [
    { kind: 'search', title: 'Search that forgives typos', text: 'A customer types "sheos" and still finds shoes.' },
    { kind: 'promo', title: 'Promotions and vouchers', text: 'Set up once and applied at checkout.' },
    { kind: 'variants', title: 'Sizes and colours as one product', text: 'One page for the product, one choice per variant.' },
    { kind: 'multi', title: 'Several shops, one catalogue', text: 'One catalogue and one stock level behind every shop.' },
    { kind: 'trade', title: 'Trade customers on the same system', text: 'They log in to the same shop and see their own prices.' },
  ],
  caption: 'Illustrative examples.',
};

export const speed = {
  title: 'Fast without an optimisation project',
  text: 'There are no plugins slowing the shop down, so there is no speed project to pay for.',
  score: '98',
  outOf: '/ 100',
  label: 'Google PageSpeed',
  note: 'Measured on a B2Bware customer shop. Scores vary by shop.',
};

export const drift = {
  title: 'Why switch, not patch',
  intro: 'You can mend the link between your shop and your ERP. The shop will still hold its own copy of your prices, stock and products, and copies drift.',
  patchedTitle: 'Patch the link',
  patchedText: 'The shop keeps a copy. Every update is another chance for the copy and the ERP to disagree.',
  builtTitle: 'Build the shop on the ERP',
  builtText: 'The shop reads the ERP. There is no copy, so there is nothing to drift.',
};

export const safe = {
  title: 'Switching is safe',
  intro: 'We do the move. You approve it before anything goes live.',
  steps: [
    { title: 'You see the design', text: 'We rebuild the design and show it to you before we build.' },
    { title: 'We build and move', text: 'Your products, customers, order history and reviews move across.' },
    { title: 'You approve', text: 'Nothing goes live until you say so.' },
    { title: 'Live in about two months', text: 'Customers set a new password at go-live. We send them the link.' },
  ],
  movedTitle: 'What moves with you',
  moved: ['Products, with their variants and images', 'Customers', 'Order history', 'Reviews'],
  redirectTitle: 'Every old URL is redirected',
  redirectText: 'Each old page is mapped to its new address, so your Google rankings hold.',
  guarantee: 'Not happy before go-live? Stop, and pay only for the hours worked.',
};

export const faq = {
  title: 'What buyers ask us first',
  items: [
    { q: 'Will it work with our ERP?', a: 'Yes, whichever ERP you run. B2Bware is made by SyncSpider, the integration platform we have run for 10 years, with 400+ integrations. We confirm the connection in the free consultation.' },
    { q: 'Will we lose our Google rankings?', a: 'No. We map every old page to its new address and redirect it, so the traffic you have built follows you.' },
    { q: 'We also sell to trade customers. Can they use it too?', a: 'Yes. Consumers and trade customers use the same system, each with their own prices.' },
    { q: 'What if we change ERP later?', a: 'We reconnect the shop to the new ERP. The shop stays.' },
    { q: 'Who fixes it when something breaks?', a: 'We do. We run the shop and the link, and fixing it after updates is in the monthly fee.' },
    { q: 'Our shop is fine. It is just the link to the ERP.', a: 'Then we fix the link instead of rebuilding the shop. See <a href="/solutions/erp-integration">ERP integration</a>.' },
    { q: 'What does it cost?', a: 'A fixed set-up price and a monthly fee, agreed in the free consultation before we start.' },
  ],
};
