// Competitor comparison pages: /compare/<slug>. One shared template (components/compare/ComparePage.astro).
// Every competitor fact carries a source number that points at `sources`. Facts without a source were dropped.
// Evidence log: research/pages/compare-brief.md. B2Bware claims match src/data/b2b.ts and src/data/solutions.ts.

export const CHECKED = '8 October 2026';
const CHECK = '#order-check';

export type Source = { label: string; url: string };
export type Row = { label: string; ours: string; theirs: string; src?: number[] };
export type ComparePageData = {
  slug: string;
  name: string; // competitor, as written in running text
  meta: { title: string; description: string };
  hero: { headline: string; highlight: string; checks: string[]; lead: string };
  verdict: { title: string; theirs: string; ours: string };
  table: { title: string; intro: string; theirsHead: string; rows: Row[] };
  fit: { title: string; theirsTitle: string; theirs: string[]; oursTitle: string; ours: string[]; note: string };
  problems: ('portal' | 'erp' | 'emailed')[];
  faq: { q: string; a: string }[];
  sources: Source[];
};

export const compareHero = {
  primaryCta: { text: 'Book a free consultation', href: CHECK },
  secondaryCta: { text: 'Jump to the side-by-side', href: '#cmp-table' },
  priceLine: 'B2Bware: £5,000 to set up, £300 a month.',
  priceNote: 'Fixed price, agreed before we start.',
};

export const comparePages: Record<string, ComparePageData> = {
  'shopify-b2b-vs-b2bware': {
    slug: 'shopify-b2b-vs-b2bware',
    name: 'Shopify B2B',
    meta: {
      title: 'Shopify B2B vs B2Bware: a fair comparison | B2Bware',
      description: 'Shopify B2B or B2Bware for trade customers on their own prices? Catalogue limits, Plus cost, ERP link and where Shopify fits better.',
    },
    hero: {
      headline: 'Shopify B2B or B2Bware?',
      highlight: 'A fair comparison for trade sellers on an ERP.',
      checks: ['Every Shopify fact links to Shopify or Microsoft', 'Where Shopify fits better is in here too', `Checked ${CHECKED}`],
      lead: 'Shopify added B2B to every plan in April 2026. For some trade sellers that is all they need. For others the limits show up at the first contract price. Here is where the line sits.',
    },
    verdict: {
      title: 'The short answer',
      theirs: 'You sell mostly to consumers, trade customers share a few price lists, and nobody needs their own contract price.',
      ours: 'Trade customers each have their own prices, the ERP is the source of truth, and you want someone else to build and run the link.',
    },
    table: {
      title: 'Side by side',
      intro: 'Same questions, asked of both. Small numbers point to the sources below the table.',
      theirsHead: 'Shopify B2B',
      rows: [
        { label: 'What it is', ours: 'A trade portal, order reading and ERP link that we build and run for you.', theirs: 'B2B features inside the Shopify store: companies, payment terms, volume pricing, draft orders. Shopify’s own line is “Feels like DTC. Acts like B2B.”', src: [1, 4, 7] },
        { label: 'Customer-specific prices', ours: 'Each account sees its own prices, range and terms, live from your ERP.', theirs: 'Up to 3 catalogues on Basic, Grow and Advanced. Assigning a catalogue straight to a company, for customer-level pricing, is Plus only.', src: [2, 3] },
        { label: 'Link to your ERP', ours: 'Built new, or taken over and fixed, for any ERP. Fixing it after updates is in the monthly fee.', theirs: 'Shopify supports ERP integrations through its APIs; you choose and pay for the connector. Microsoft’s Business Central connector is free but has a 2.6 out of 5 rating from 28 reviews.', src: [1, 5, 6] },
        { label: 'Who does the work', ours: 'We build it, test it on your real orders, then run it.', theirs: 'Self-serve: you set up companies, catalogues and the ERP connector in the Shopify admin.', src: [1] },
        { label: 'What it costs', ours: '£5,000 to set up, £300 a month including your first 1,000 orders, then about 15p an order. No per-user fees.', theirs: 'Plans run from £25 to £344 a month. Plus, which unlocks unlimited catalogues, starts at £1,800 a month. ERP connectors and apps are separate.', src: [2] },
        { label: 'Where it stops', ours: 'Not for orders that are configured or priced one by one.', theirs: 'Customer-level pricing, more than 3 catalogues and deposits sit on the top plan.', src: [3] },
      ],
    },
    fit: {
      title: 'Which one fits you',
      theirsTitle: 'Shopify B2B fits better if',
      theirs: [
        'Most of your sales are to consumers, and trade is an add-on to the same store',
        'Your trade customers share a handful of price lists',
        'Prices are set in Shopify, not in an ERP',
        'You have a team or agency to run the store and the connector',
      ],
      oursTitle: 'B2Bware fits better if',
      ours: [
        'Customers each have their own prices, part codes or terms in your ERP',
        'You want one team to own the ERP link, so nobody points at another supplier',
        'Your link broke after an update, or the vendor disappeared',
        'You want a fixed price and no IT project',
      ],
      note: 'Already on Shopify? We can take over the link to your ERP and fix it. If the shop cannot handle trade pricing, we give your trade customers a portal instead.',
    },
    problems: ['portal', 'erp'],
    faq: [
      { q: 'Is Shopify B2B free?', a: 'The B2B features are included on every Shopify plan since April 2026, but the plan itself is not free, and customer-level pricing needs Plus. Plus starts at £1,800 a month on Shopify’s UK pricing page.' },
      { q: 'Can we keep our Shopify store?', a: 'Not necessarily a rebuild. We can take over the link to your ERP and fix it. If the shop cannot handle trade pricing, we give your trade customers a portal instead.' },
      { q: 'Does B2Bware work with our ERP?', a: 'Yes, your ERP and your setup, not just the brand. B2Bware is made by SyncSpider, the integration platform we have run for 10 years, with 400+ integrations. If yours is not covered we build the link as part of set-up.' },
      { q: 'What does B2Bware cost?', a: '£5,000 to set up, then £300 a month including your first 1,000 orders and about 15p an order after that. No per-user fees and no day rates for fixes.' },
      { q: 'What if Shopify is enough for us?', a: 'Then use it. If your trade customers share a few price lists, the native features may be all you need. The consultation is free and you keep the plan either way.' },
    ],
    sources: [
      { label: 'Shopify Help Centre, B2B on Shopify', url: 'https://help.shopify.com/en/manual/b2b' },
      { label: 'Shopify pricing, UK, plans and catalogue limits', url: 'https://www.shopify.com/pricing' },
      { label: 'Shopify Help Centre, B2B features by plan', url: 'https://help.shopify.com/en/manual/b2b/getting-started/plan-features' },
      { label: 'Shopify Changelog, key B2B features on non-Plus plans, 2 April 2026', url: 'https://changelog.shopify.com/posts/key-b2b-features-now-available-on-non-plus-plans' },
      { label: 'Microsoft Learn, Shopify connector for Business Central', url: 'https://learn.microsoft.com/en-us/dynamics365/business-central/shopify/shopify-connector-overview' },
      { label: 'Shopify App Store, Dynamics 365 Business Central connector rating', url: 'https://apps.shopify.com/dynamics-365-business-central' },
      { label: 'Shopify B2B page, headline', url: 'https://www.shopify.com/b2b' },
    ],
  },

  'orocommerce-vs-b2bware': {
    slug: 'orocommerce-vs-b2bware',
    name: 'OroCommerce',
    meta: {
      title: 'OroCommerce vs B2Bware: a fair comparison | B2Bware',
      description: 'OroCommerce or B2Bware for trade ordering on your ERP? Scope, cost model, time to go live and who does the work, with sources.',
    },
    hero: {
      headline: 'OroCommerce or B2Bware?',
      highlight: 'A platform you run, or a service we run.',
      checks: ['Oro facts come from Oro’s own site', 'Where Oro fits better is in here too', `Checked ${CHECKED}`],
      lead: 'OroCommerce is a large B2B platform that bundles commerce, CRM and more. B2Bware is the portal, order reading and ERP link, built and run for you. They solve different sizes of problem.',
    },
    verdict: {
      title: 'The short answer',
      theirs: 'You want one platform for commerce, CRM and quoting, across several sites or organisations, and you have the team or partner to run it.',
      ours: 'You want trade orders landing in your ERP at the right price, for a fixed fee, without owning a platform project.',
    },
    table: {
      title: 'Side by side',
      intro: 'Same questions, asked of both. Small numbers point to the sources below the table.',
      theirsHead: 'OroCommerce',
      rows: [
        { label: 'What it is', ours: 'A trade portal, order reading and ERP link that we build and run for you.', theirs: 'A platform that unifies commerce, CRM, quoting, AI, content and payments, built around a customer account hierarchy.', src: [1] },
        { label: 'Scale', ours: 'Built for manufacturers, distributors and wholesalers with 15 to 200 staff.', theirs: 'Aimed at enterprises: multi-organisation, multi-site and high-volume operations.', src: [1] },
        { label: 'Time to go live', ours: 'Live in weeks, not months. You see the plan and the fixed price before you pay anything.', theirs: 'Oro says: “Go live in months, not years.”', src: [1] },
        { label: 'What it costs', ours: '£5,000 to set up, £300 a month including your first 1,000 orders, then about 15p an order. No per-user fees.', theirs: 'No price on Oro’s site. It states there are no per-site or usage-based fees. Contact Oro for a quote.', src: [1] },
        { label: 'Who does the work', ours: 'We build it, test it on your real orders, then run it. Fixes after ERP updates are in the monthly fee.', theirs: 'Not stated on its site.', src: [1] },
        { label: 'Where it stops', ours: 'Not for orders that are configured or priced one by one. Not a CRM.', theirs: 'Oro describes a complete platform, not a single-purpose ERP link.', src: [1] },
      ],
    },
    fit: {
      title: 'Which one fits you',
      theirsTitle: 'OroCommerce fits better if',
      theirs: [
        'You want commerce, CRM and quoting in one platform',
        'You run several sites, brands or organisations from one place',
        'You have developers or a partner to build and run it',
        'Your catalogue and traffic are large',
      ],
      oursTitle: 'B2Bware fits better if',
      ours: [
        'The job is trade orders in the ERP at each customer’s own prices',
        'You also get orders by email, PDF or spreadsheet',
        'You want a fixed price and one team that runs it',
        'You do not want to own a platform project',
      ],
      note: 'Not sure which size of problem you have? The consultation is free and you get a plan and a fixed price before you pay anything.',
    },
    problems: ['erp', 'portal'],
    faq: [
      { q: 'Does B2Bware replace OroCommerce?', a: 'Only if the job is trade ordering connected to your ERP. If you also need a CRM and quoting platform across several sites, that is what Oro is built for.' },
      { q: 'How long does B2Bware take to go live?', a: 'Weeks, not months. You see the plan and the fixed price before you pay anything, then we build and test on your real orders. Nothing goes live until your team approves it.' },
      { q: 'Who runs it afterwards?', a: 'We do. We watch every order and fix what breaks, including after ERP updates. That is in the monthly fee.' },
      { q: 'What does B2Bware cost?', a: '£5,000 to set up, then £300 a month including your first 1,000 orders and about 15p an order after that. No per-user fees and no day rates for fixes.' },
      { q: 'Will it work with our ERP?', a: 'Yes, your ERP and your setup, not just the brand. B2Bware is made by SyncSpider, the integration platform we have run for 10 years, with 400+ integrations.' },
    ],
    sources: [
      { label: 'OroCommerce homepage', url: 'https://oroinc.com/' },
    ],
  },

  'sana-commerce-vs-b2bware': {
    slug: 'sana-commerce-vs-b2bware',
    name: 'Sana Commerce',
    meta: {
      title: 'Sana Commerce vs B2Bware: a fair comparison | B2Bware',
      description: 'Sana Commerce or B2Bware? Supported ERPs, how each reads ERP data, who does the work and what it costs, and where Sana fits better.',
    },
    hero: {
      headline: 'Sana Commerce or B2Bware?',
      highlight: 'A store that mirrors the ERP, or a service for any ERP.',
      checks: ['Every Sana fact comes from Sana’s own site', 'Where Sana fits better is in here too', `Checked ${CHECKED}`],
      lead: 'Sana is a webstore built on top of SAP and Microsoft Dynamics. B2Bware connects to any ERP and also reads emailed orders. Which one is right depends mostly on the ERP you run.',
    },
    verdict: {
      title: 'The short answer',
      theirs: 'You run SAP or Microsoft Dynamics and want a webstore that reads prices and stock from the ERP as the page loads.',
      ours: 'You run a different ERP, or you also get orders by email, and you want one team to build and run it for a fixed price.',
    },
    table: {
      title: 'Side by side',
      intro: 'Same questions, asked of both. Small numbers point to the sources below the table.',
      theirsHead: 'Sana Commerce',
      rows: [
        { label: 'What it is', ours: 'A trade portal, order reading and ERP link that we build and run for you.', theirs: 'A B2B commerce platform for manufacturers: a webstore whose data comes straight from the ERP.', src: [1] },
        { label: 'Which ERPs', ours: 'Any ERP. Built new, or taken over and fixed.', theirs: 'SAP (ECC, S/4HANA) and Microsoft Dynamics (365 Finance and Supply Chain, Business Central).', src: [1] },
        { label: 'How it reads ERP data', ours: 'Each account sees its own prices and stock, synced live with your ERP.', theirs: 'Reads pricing, stock and customer terms directly from the ERP when a buyer loads the page, with no middleware.', src: [1] },
        { label: 'Orders by email or PDF', ours: 'Emailed, PDF and Excel orders are read automatically, checked against your ERP, and approved by your team before they post.', theirs: 'Not described on its homepage. It offers an online store for buyers to order in.', src: [1] },
        { label: 'What it costs', ours: '£5,000 to set up, £300 a month including your first 1,000 orders, then about 15p an order. No per-user fees.', theirs: 'No price on its site. It offers a plan comparison and a call.', src: [1] },
        { label: 'Time to go live', ours: 'Live in weeks, not months.', theirs: 'Scoped in a discovery phase, depending on ERP set-up, number of catalogues and custom workflows.', src: [1] },
      ],
    },
    fit: {
      title: 'Which one fits you',
      theirsTitle: 'Sana Commerce fits better if',
      theirs: [
        'You run SAP or Microsoft Dynamics and expect to stay on it',
        'You want store and ERP to share one live source with nothing to sync',
        'You are a manufacturer who wants a large vendor with reference customers',
        'Your buyers order online and email is a small share',
      ],
      oursTitle: 'B2Bware fits better if',
      ours: [
        'You run any other ERP',
        'Customers also email PDFs and spreadsheets that someone retypes',
        'You want one team to build it and run it',
        'You want the price fixed before you start',
      ],
      note: 'Not sure how your ERP and orders would fit? Send us 50 real orders and we show you the match rate before you pay.',
    },
    problems: ['erp', 'emailed'],
    faq: [
      { q: 'Does B2Bware work if we run SAP or Dynamics?', a: 'Yes. B2Bware is made for any ERP, and works with yours and your setup, not just the brand. If Sana already fits your ERP and your orders, it may be the simpler choice.' },
      { q: 'Does B2Bware read emailed orders?', a: 'Yes. Emailed, PDF and Excel orders are read automatically, matched to your prices and part codes, checked against your ERP, and approved by your team before anything posts.' },
      { q: 'What does B2Bware cost?', a: '£5,000 to set up, then £300 a month including your first 1,000 orders and about 15p an order after that. No per-user fees and no day rates for fixes.' },
      { q: 'Who runs it after go-live?', a: 'We do. We watch every order and fix what breaks, including after ERP updates. That is in the monthly fee.' },
      { q: 'Is B2Bware a webstore?', a: 'It includes a trade portal where each account sees its own prices and range. It is one part of the service, alongside order reading and the ERP link.' },
    ],
    sources: [
      { label: 'Sana Commerce homepage, including its FAQ on ERPs and implementation', url: 'https://www.sana-commerce.com/' },
    ],
  },

  'virto-commerce-vs-b2bware': {
    slug: 'virto-commerce-vs-b2bware',
    name: 'Virto Commerce',
    meta: {
      title: 'Virto Commerce vs B2Bware: a fair comparison | B2Bware',
      description: 'Virto Commerce or B2Bware? A .NET platform you build on, or a service we build and run. Pricing model, effort and fit, with sources.',
    },
    hero: {
      headline: 'Virto Commerce or B2Bware?',
      highlight: 'A platform to build on, or a service we run.',
      checks: ['Every Virto fact comes from Virto’s own site', 'Where Virto fits better is in here too', `Checked ${CHECKED}`],
      lead: 'Virto Commerce is an API-first, .NET platform for teams that want to build their own commerce. B2Bware is the finished service: portal, order reading and ERP link, built and run for you.',
    },
    verdict: {
      title: 'The short answer',
      theirs: 'You have .NET developers or a partner and want to build a custom commerce or marketplace model.',
      ours: 'You want trade orders in your ERP at the right price without building anything yourself.',
    },
    table: {
      title: 'Side by side',
      intro: 'Same questions, asked of both. Small numbers point to the sources below the table.',
      theirsHead: 'Virto Commerce',
      rows: [
        { label: 'What it is', ours: 'A trade portal, order reading and ERP link that we build and run for you.', theirs: 'A modular, API-first and headless commerce platform on .NET Core, with an open-source .NET foundation.', src: [1] },
        { label: 'Business models', ours: 'Trade ordering for manufacturers, distributors and wholesalers.', theirs: 'B2B, B2B2C, marketplaces and portals.', src: [1] },
        { label: 'Link to your ERP', ours: 'Built new, or taken over and fixed, for any ERP. Fixing it after updates is in the monthly fee.', theirs: 'Integrates with ERP, CRM and PIM through its API-first design.', src: [1] },
        { label: 'Where it runs', ours: 'We host and run it for you, with updates, support and daily backups.', theirs: 'In your cloud or in Virto Cloud.', src: [1] },
        { label: 'What it costs', ours: '£5,000 to set up, £300 a month including your first 1,000 orders, then about 15p an order. No per-user fees.', theirs: 'Licence from 0.5% of GMV with 10K SKUs, or from $2 per order with 10K SKUs. Third-party software is extra.', src: [2] },
        { label: 'Who does the work', ours: 'We build it, test it on your real orders, then run it.', theirs: 'Not stated on its site. It is a developer platform with an open-source .NET foundation.', src: [1] },
      ],
    },
    fit: {
      title: 'Which one fits you',
      theirsTitle: 'Virto Commerce fits better if',
      theirs: [
        'You have .NET developers or a partner to build on it',
        'You want a headless storefront you design yourself',
        'You need a marketplace or B2B2C model, not just trade ordering',
        'You want open-source code you can extend',
      ],
      oursTitle: 'B2Bware fits better if',
      ours: [
        'You want it built and run for you',
        'The job is trade orders in the ERP at each customer’s own prices',
        'You also get orders by email, PDF or spreadsheet',
        'You want the price fixed before you start',
      ],
      note: 'The two prices are not like for like: Virto’s is a licence for a platform you build on, ours covers the build and the running.',
    },
    problems: ['portal', 'erp'],
    faq: [
      { q: 'Do we need developers for B2Bware?', a: 'No. We do the set-up for a fixed price agreed before we start, then run it for you. Your team checks orders, not a project plan.' },
      { q: 'Can B2Bware do marketplaces or B2B2C?', a: 'No. B2Bware is for trade selling on account: each customer sees its own prices, and orders land in your ERP. For a marketplace you want a platform like Virto.' },
      { q: 'What does B2Bware cost?', a: '£5,000 to set up, then £300 a month including your first 1,000 orders and about 15p an order after that. No per-user fees and no day rates for fixes.' },
      { q: 'Will it work with our ERP?', a: 'Yes, your ERP and your setup, not just the brand. B2Bware is made by SyncSpider, the integration platform we have run for 10 years, with 400+ integrations.' },
      { q: 'What if something breaks after an ERP update?', a: 'We fix the link. That is in the monthly fee, with no day rates for fixes. We watch every order and fix what breaks.' },
    ],
    sources: [
      { label: 'Virto Commerce homepage', url: 'https://virtocommerce.com/' },
      { label: 'Virto Commerce pricing', url: 'https://virtocommerce.com/pricing' },
    ],
  },
};
