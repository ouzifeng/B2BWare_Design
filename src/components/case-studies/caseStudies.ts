// Case study content. Every fact here is sourced in research/pages/case-studies-brief.md.
// ERP names are deliberately absent: neither source names the customer's ERP.

export type Fact = { label: string; value: string };
export type Step = { title: string; text: string };
export type Result = { fig: string; label: string; note?: string };
export type CompareRow = { what: string; before: string; after: string };
export type Figure =
  | { type: 'bars'; title: string; rows: { label: string; value: string; share: number; tone: 'wrong' | 'ok' }[]; caption: string }
  | { type: 'compare'; title: string; beforeHead: string; afterHead: string; rows: CompareRow[]; caption: string };

export type CaseStudy = {
  slug: string;
  name: string;
  title: string;
  description: string;
  headline: string;
  highlight: string;
  lead: string;
  image: { src: string; alt: string };
  facts: Fact[];
  problem: { title: string; intro: string; points: string[] };
  built: { title: string; intro: string; points: string[]; figure: Figure };
  daily: { title: string; intro: string; steps: Step[] };
  results: { title: string; items: Result[]; source: string };
  next: { text: string; linkText: string; href: string };
};

export const kienesberger: CaseStudy = {
  slug: 'kienesberger',
  name: 'Kienesberger',
  title: 'Kienesberger: every customer sees their own prices | B2Bware',
  description: 'How an Austrian machinery maker and distributor gave each customer their own ERP prices in a B2B portal, with 70,000 price entries instead of over 20 million.',
  headline: 'Every Kienesberger customer sees their own prices.',
  highlight: 'Without 20 million price entries.',
  lead: 'Their old webshop could not carry customer-specific pricing. We built a portal that takes its prices from the ERP, so each customer logs in and sees their own.',
  image: { src: '/images/menu/menu-cs-kienesberger.webp', alt: 'Machinery on the Kienesberger shop floor' },
  facts: [
    { label: 'Company', value: 'Kienesberger Maschinen GmbH, Austria' },
    { label: 'Founded', value: '1986' },
    { label: 'What they do', value: 'Manufacture and wholesale industrial machinery, including circular saws and firewood processing machines' },
    { label: 'Brands they distribute', value: 'Kränzle, Atika, Endress, Starmix, Eibenstock, Scangrip' },
  ],
  problem: {
    title: 'The problem',
    intro: 'Every customer pays their own price, and the ERP knows it. The webshop did not.',
    points: [
      'The old webshop could not copy the way the ERP works out each customer’s price.',
      'Loading every price for every customer into it would have meant over 20 million entries, enough to risk the system failing.',
      'Costs change all the time, so a one-off price load would have gone out of date.',
    ],
  },
  built: {
    title: 'What we built',
    intro: 'A B2B portal that works from the ERP’s own pricing logic, so only the prices that matter are carried across.',
    points: [
      'The 20 million possible entries came down to 70,000, synced from the ERP.',
      'Prices refresh daily, in about 15 minutes.',
      'Customers can reorder quickly, keep favourites and download PDF price lists.',
    ],
    figure: {
      type: 'bars',
      title: 'Price entries the portal had to carry',
      rows: [
        { label: 'Every price for every customer', value: 'Over 20,000,000', share: 100, tone: 'wrong' },
        { label: 'Synced from the ERP', value: '70,000', share: 0.35, tone: 'ok' },
      ],
      caption: 'Bars drawn to scale. The second one really is that thin.',
    },
  },
  daily: {
    title: 'How it works day to day',
    intro: 'Nobody at Kienesberger maintains prices in the portal. The ERP stays the one place they are kept.',
    steps: [
      { title: 'Prices refresh from the ERP', text: 'Each day the portal picks up the latest prices. The update takes about 15 minutes.' },
      { title: 'A customer logs in', text: 'They see their own prices, not a general list.' },
      { title: 'They reorder', text: 'Favourites and repeat orders make the usual purchases quick.' },
      { title: 'They take a price list with them', text: 'A PDF price list can be downloaded from the portal.' },
    ],
  },
  results: {
    title: 'Results',
    items: [
      { fig: '20M', label: 'price entries avoided', note: 'Over 20 million would have been needed in the old webshop.' },
      { fig: '70,000', label: 'entries synced from the ERP', note: 'Carrying each customer’s own prices.' },
      { fig: '~15 min', label: 'for the daily price update', note: 'Prices update daily, not live.' },
    ],
    source: 'Figures from the original Kienesberger case study on b2bware.com.',
  },
  next: {
    text: 'Does your shop struggle to show each customer their own price?',
    linkText: 'See how a trade portal fixes it',
    href: '/solutions/trade-portal',
  },
};

export const doppler: CaseStudy = {
  slug: 'doppler',
  name: 'Doppler',
  title: 'Doppler: sales agents order at live ERP prices | B2Bware',
  description: 'How an Austrian umbrella and parasol maker moved its sales agents onto an ERP-linked ordering portal with live customer pricing, and sped up order entry by 70%.',
  headline: 'Doppler’s sales agents order with live ERP prices.',
  highlight: '70% faster order entry.',
  lead: 'An ERP change threatened the portal Doppler’s agents used to take orders. We built a new one, linked straight to the ERP.',
  image: { src: '/images/menu/menu-cs-doppler.webp', alt: 'A Doppler parasol on a terrace' },
  facts: [
    { label: 'Company', value: 'Doppler, an Austrian family company' },
    { label: 'Founded', value: '1946' },
    { label: 'What they make', value: 'Umbrellas, parasols and garden furniture' },
    { label: 'Brands', value: 'Knirps, Derby Umbrellas, Bugatti' },
  ],
  problem: {
    title: 'The problem',
    intro: 'The agents’ ordering portal was tied to the old ERP. A new ERP put it at risk.',
    points: [
      'Agents ordered through a legacy portal fed by a basic CSV link to the old ERP.',
      'Keeping that link on the new ERP would have needed a complex, costly overhaul.',
      'Agents picked variants, added them to the cart and changed quantities by hand, with no real-time pricing or product data.',
      'Customer-specific pricing and delivery planning were not available.',
    ],
  },
  built: {
    title: 'What we built',
    intro: 'A custom B2B portal for Doppler’s sales agents, connected directly to the ERP and to Doppler’s product information system.',
    points: [
      'Agents log in and place orders on behalf of their customers.',
      'Customer-specific prices and tiered discounts are applied from the ERP.',
      'Images, descriptions and specifications come from the product information system.',
      'The ordering screens were designed together with Doppler’s sales team.',
    ],
    figure: {
      type: 'compare',
      title: 'Taking an order, before and after',
      beforeHead: 'Legacy portal',
      afterHead: 'ERP-linked portal',
      rows: [
        { what: 'Link to the ERP', before: 'Basic CSV integration', after: 'Direct ERP connection' },
        { what: 'Pricing', before: 'No real-time pricing', after: 'Customer-specific prices and tiered discounts' },
        { what: 'Choosing items', before: 'Variants picked one by one', after: 'Several variants in seconds' },
        { what: 'Delivery', before: 'Planning not available', after: 'Split delivery dates per item' },
      ],
      caption: 'Based on the original Doppler project description.',
    },
  },
  daily: {
    title: 'How it works day to day',
    intro: 'An agent can build a customer’s order in one place, with the right prices already on it.',
    steps: [
      { title: 'The agent logs in', text: 'They place the order on behalf of their customer.' },
      { title: 'Prices and product data are already there', text: 'The customer’s own prices and tiered discounts, with live product and customer data from the ERP.' },
      { title: 'They build the order', text: 'Several variants go on quickly. A delivery date can be set per item, and a price override or a free-of-charge line added when needed.' },
      { title: 'They save or repeat', text: 'Carts can be saved, and past orders reused for repeat purchases.' },
      { title: 'The order lands in the ERP', text: 'It flows straight in, with no manual input.' },
    ],
  },
  results: {
    title: 'Results',
    items: [
      { fig: '70%', label: 'faster order entry', note: 'Orders are placed in minutes instead of working through manual steps.' },
      { fig: 'Live', label: 'prices and product data', note: 'Customer pricing and product data come from the ERP and product information system.' },
      { fig: 'Direct', label: 'into the ERP', note: 'Orders flow in without manual input.' },
    ],
    source: 'The 70% figure is from the original Doppler case study on b2bware.com.',
  },
  next: {
    text: 'Is your portal or shop tied to an ERP that is about to change?',
    linkText: 'See how ERP integration works',
    href: '/solutions/erp-integration',
  },
};
