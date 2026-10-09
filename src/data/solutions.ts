// Problem pages: /solutions/trade-portal, /solutions/erp-integration, /solutions/emailed-orders.
// Each page is a hero plus an ordered `sections` array. [slug].astro renders each section by its `type`.
// Plan: research/pages/page-plans.md. Items the plan flags for team confirmation use the plan's fallback wording.
// Mocks are illustrative.
import { hero as b2bHero, proof as b2bProof } from './b2b';

const CHECK = '#order-check';
const HOW = '#v2-how';
const PRICE_LINE = '£5,000 to set up. £300 a month.';

// Page-specific customer objects (the shared proof data on /solutions/b2b is not changed).
const [b2bKienesberger, , b2bDoppler] = b2bProof.customers;
const kienesberger = {
  name: 'Kienesberger',
  meta: 'Manufacturer, Austria',
  text: "Their old webshop couldn't carry customer-specific pricing: it would have needed over 20 million price entries. Now 70,000 entries, straight from the ERP.",
  image: b2bKienesberger.image,
};
const doppler = {
  name: 'Doppler',
  meta: 'Umbrella and parasol manufacturer, Austria',
  text: 'Sales agents order through a portal linked to the ERP.',
  image: b2bDoppler.image,
  stats: [{ fig: '70%', label: 'faster order entry' }],
};
const harrows = {
  name: 'Harrows Darts',
  meta: 'Manufacturer, UK',
  text: 'Login-only trade store, connected to the ERP.',
  image: '/images/customers/harrows-darts.webp',
};

const RUN_STEP = { title: 'We run it', text: 'Hosting, updates and fixes are on us. You get one contact who knows your setup.', free: false };
const PLAN_STEP = (text: string) => ({ title: 'Get a plan and a fixed price', text, free: true });
const HOW_INTRO = 'You see the plan and the fixed price before you pay anything. Live in weeks, not months.';
const HOW_CTA = { text: 'Get a plan and a fixed price', href: CHECK };
const ERP_FAQ = { q: 'Will it work with our ERP?', a: "Yes, your ERP and your setup, not just the brand. We have 400+ connectors, and if yours isn't covered we build the link as part of set-up. We confirm it in the free consultation." };
const CONSULT = 'Tell us in the consultation.';

const cards = {
  portal: { image: '/images/online-ordering.jpg', alt: 'Trade portal with customer-specific prices', title: "Customers can't order online", text: "They phone and email because your shop can't show their own prices.", linkText: 'See how we fix it →', href: '/solutions/trade-portal' },
  erp: { image: '/images/erp-sync.jpg', alt: 'ERP connection with prices, stock and orders in sync', title: 'Shop and ERP out of sync', text: 'Your webshop and ERP disagree on prices or stock, and nobody knows which is right.', linkText: 'See how we fix it →', href: '/solutions/erp-integration' },
  emailed: { image: '/images/emailed-orders.jpg', alt: 'Emailed PDF and spreadsheet orders read into the ERP', title: 'Emailed orders', text: 'Customers email PDFs. Someone retypes every line.', linkText: 'See how we fix it →', href: '/solutions/emailed-orders' },
};
export const problemCards = cards;

type Customer = { name: string; meta: string; text: string; image?: string; stats?: { fig: string; label: string }[] };
type Step = { title: string; text: string; free: boolean };
type Column = { title: string; tone: 'yes' | 'no' | 'neutral'; text?: string; items?: string[] };

export type Section = { variant?: string } & (
  | { type: 'symptoms'; title: string; lines: string[] }
  | { type: 'problemAnswer'; title: string; problemHead: string; answerHead: string; rows: { problem: string; answer: string }[] }
  | { type: 'features'; title: string; intro?: string; tiles: { title: string; text?: string }[]; callout?: string; limits?: string }
  | { type: 'text'; title: string; paragraphs: string[]; link?: { text: string; href: string } }
  | { type: 'twoCol'; title: string; intro?: string; columns: [Column, Column]; footer?: string }
  | { type: 'options'; title: string; heads: [string, string, string]; rows: { option: string; fits: string; watch: string; us?: boolean }[] }
  | { type: 'stepStrip'; title: string; steps: string[]; mock: any }
  | { type: 'comparison'; title: string; intro?: string; cards: { title: string; lead?: string; items?: string[]; close: string }[] }
  | { type: 'portalShowcase'; title: string; intro?: string }
  | { type: 'systems'; title: string; text: string }
  | { type: 'proof'; title: string; customers: Customer[] }
  | { type: 'pricing' }
  | { type: 'how'; title: string; intro: string; steps: Step[]; cta: { text: string; href: string } }
  | { type: 'faq'; title: string; items: { q: string; a: string }[] }
  | { type: 'cta'; title: string; subtitle: string; text: string; cta: { text: string; href: string } }
  | { type: 'doors'; title: string; cards: (typeof cards)[keyof typeof cards][] });

export const problemPages: Record<string, {
  meta: { title: string; description: string };
  hero: any;
  sections: Section[];
  formIntro?: string;
}> = {
  'trade-portal': {
    meta: {
      title: 'Trade portal linked to your ERP | B2Bware',
      description: 'A trade portal on your ERP. Each customer sees their own prices, range and terms, and every order lands in your ERP. Fixed price to set up, then we run it.',
    },
    hero: {
      variant: 'portal',
      image: '/images/solutions/hero-wholesale.webp',
      alt: 'Warehouse team preparing trade orders',
      headline: 'Same customers phoning in the same reorders?',
      highlight: 'We build your online ordering portal, synced to your ERP',
      checks: [
        'Customer-specific pricing',
        'Live stock levels',
        'One-click reorder',
        'ERP agnostic',
      ],
      lead: 'Your team stops taking the same reorders by phone and email. We build your trade portal, link it to your ERP and keep it running.',
      priceLine: PRICE_LINE,
      primaryCta: { text: 'Book a free consultation', href: CHECK },
      secondaryCta: { text: 'See how it works', href: HOW },
    },
    sections: [
      {
        type: 'symptoms',
        variant: 'bubbles',
        title: 'Sound familiar?',
        lines: [
          'The same customers call and email the same orders every week.',
          'Someone checks their price list before every order.',
          'Then types it into your ERP.',
          'A customer asks: "Can I just order online?"',
          'Or you have a webshop, and it shows them the wrong price.',
        ],
      },
      {
        type: 'problemAnswer',
        variant: 'rows',
        title: 'Why trade portals go quiet, and how we build ours',
        problemHead: 'Why customers ignore a portal',
        answerHead: 'What we do',
        rows: [
          { problem: "They see a price that isn't theirs, so they ring to check", answer: 'Every account sees the prices your ERP gives it: contract prices, quantity breaks, terms' },
          { problem: 'Ordering online is slower than phoning', answer: 'Their order history and one-click reorder, search by product code' },
          { problem: 'Reps keep taking orders the old way', answer: "Reps order for customers in the same portal, at the customer's price" },
          { problem: 'Nobody shows customers how to use it', answer: 'We set up every account, invite your customers with you, and check who is ordering after 30 days' },
        ],
      },
      {
        type: 'text',
        title: 'The ERP link is the job, and we own it',
        paragraphs: [
          "Off-the-shelf portals carry a few price lists. They break when every customer has its own price. Ours takes each price straight from your ERP's own rules, so nobody copies prices across by hand.",
          'Prices and stock sync live with your ERP, not in an overnight file. Orders go back in as sales orders. When your ERP updates, we fix the link, and that is in the monthly fee.',
          'One team owns the portal and the link, so nobody points the finger at another supplier.',
        ],
      },
      { type: 'portalShowcase', title: 'What your customers see' },
      {
        type: 'text',
        title: 'Customers who still email',
        paragraphs: ['Some customers will always email. Their orders can go into your ERP too, without retyping.'],
        link: { text: 'See how we fix it →', href: '/solutions/emailed-orders' },
      },
      { type: 'proof', title: 'Already running', customers: [kienesberger, doppler, harrows] },
      { type: 'pricing' },
      {
        type: 'how',
        title: 'How it works',
        intro: HOW_INTRO,
        steps: [
          { title: 'Tell us how customers order today', text: 'Which accounts, which prices, which ERP. Show us where it goes wrong.', free: true },
          PLAN_STEP('Your portal, what we connect, and what it costs to set up.'),
          { title: 'We build, connect and test', text: 'Your portal, loaded with your customers, prices and stock from your ERP, tested on your real accounts and prices.', free: false },
          { title: 'Launch', text: 'We invite your customers with you and show them how to order. After 30 days we check who is ordering and follow up the rest.', free: false },
          RUN_STEP,
        ],
        cta: HOW_CTA,
      },
      {
        type: 'twoCol',
        title: 'Is this right for you?',
        columns: [
          { title: 'A good fit', tone: 'yes', items: [
            'Customers reorder from a known range by phone or email',
            'You run an ERP with a way in, whichever one it is',
            'You sell on account',
          ] },
          { title: 'Not a fit', tone: 'no', items: [
            'Most sales are over a trade counter',
            'Products are configured or priced one by one',
            "You're part-way through changing ERP? " + CONSULT,
          ] },
        ],
      },
      {
        type: 'faq',
        title: 'What buyers ask us first',
        items: [
          ERP_FAQ,
          { q: 'Will customers see their exact prices?', a: 'Yes. Each account sees the prices your ERP gives it: contract prices, quantity breaks and terms.' },
          { q: "What if our customers don't use it?", a: "Portals go quiet for four reasons: customers see a price that isn't theirs, ordering online is slower than phoning, reps keep taking orders the old way, and nobody shows customers how to use it. We build against each: their own prices from your ERP, order history and one-click reorder, reps ordering in the same portal, and we set up every account, invite your customers with you, and check who is ordering after 30 days." },
          { q: 'Do our reps lose out?', a: "No. Your reps order for customers in the same portal, at the customer's price." },
          { q: 'What does it cost all in, and above 1,000 orders?', a: '£5,000 to set up, then £300 a month including the first 1,000 orders a month. After that it is about 15p an order. No per-user fees, no day rates for fixes.' },
          { q: 'What happens when our ERP updates?', a: 'We check the link and fix what breaks. That is part of the monthly fee, not an extra charge.' },
          { q: 'We already have a webshop. Do we start again?', a: "Not necessarily. We can take over the link to your ERP and fix it. If the shop can't handle trade pricing, we give your trade customers a portal instead." },
        ],
      },
      { type: 'doors', title: 'Other things we fix', cards: [cards.erp, cards.emailed] },
    ],
  },

  'erp-integration': {
    meta: {
      title: 'Webshop and ERP integration, fixed and run for you | B2Bware',
      description: 'Webshop and ERP out of sync? We take over or rebuild the link for a fixed price, keep your ERP as the master, then run it.',
    },
    hero: {
      variant: 'erp',
      image: '/images/hero-bg-warehouse.webp',
      alt: 'Warehouse stock ready for trade orders',
      headline: "Webshop and ERP don't agree?",
      highlight: 'We fix your webshop and ERP integration, then run it',
      checks: [
        'Your ERP stays the master',
        'Customer prices, stock, orders and accounts synced live',
        'Taken over or rebuilt, at a fixed price',
        'Watched and fixed after go-live, for a monthly fee',
      ],
      lead: "Prices that don't match, stock that's wrong, orders that stopped syncing after an update. We take over or rebuild the link between your webshop and your ERP, then run it.",
      priceLine: 'Fixed price, agreed after the free consultation.',
      primaryCta: { text: 'Book a free consultation', href: CHECK },
      secondaryCta: { text: 'See how it works', href: HOW },
    },
    formIntro: "Tell us what's not working: orders retyped from emails, a webshop that doesn't match your ERP, or customers who can't order online. We'll come back with a plan and a fixed price. You keep the plan either way. What to bring: your ERP and version, your webshop, and a few examples of what's gone wrong.",
    sections: [
      {
        type: 'symptoms',
        variant: 'alerts',
        title: 'Sound familiar?',
        lines: [
          'It only syncs overnight, so stock and credit are wrong by morning.',
          'The sync says "successful". Nothing changed.',
          'Contract prices never reach the shop.',
          'It broke after the last update, and orders are back to being typed in.',
          'The agency built the shop. Nobody built the link.',
          'The developer who set it up has gone quiet.',
          'You oversold again, or a customer got the wrong price.',
        ],
      },
      {
        type: 'text',
        variant: 'timeline',
        title: "It's a moving target, so we maintain it",
        paragraphs: [
          "Your ERP and your webshop never stand still. Business Central gets two major updates a year. Shopify releases a new API version every quarter. Sage, NetSuite and the rest change too. In 2025 Microsoft told merchants to upgrade before 1 July or their Shopify link would stop working.",
          'Your business moves as well: new price lists, new customers, new warehouses, new products. A link built once, for how things were on the day, slowly falls apart.',
          "So we don't hand over a build and walk away. We maintain the connection: we watch every order, fix what breaks, and change it as your systems and your business change. That's what the monthly fee is for.",
        ],
      },
      {
        type: 'features',
        title: 'What we take over',
        tiles: [
          { title: 'Customer and contract prices' },
          { title: 'Stock' },
          { title: 'Web orders into your ERP as sales orders' },
          { title: 'Customer accounts and terms' },
          { title: 'Credit limits and accounts on stop' },
        ],
        callout: 'Your ERP stays the master. Nothing else keeps a second copy of the truth.',
      },
      {
        type: 'options',
        title: 'Your options, honestly',
        heads: ['Option', 'Fits when', 'Watch out for'],
        rows: [
          { option: 'The free connector', fits: 'A standard shop with one price group', watch: 'Rated 2.6/5. One price group to a standard store. Microsoft sends hard cases to partners' },
          { option: 'DIY tools (Power Automate, n8n)', fits: 'You have someone to build and watch it', watch: 'When that person leaves, so does the know-how' },
          { option: 'An agency project', fits: 'You want a one-off build', watch: 'UK agencies publish builds from £8,000, with monitoring billed separately' },
          { option: 'Us', fits: 'You want it fixed and looked after', watch: 'Fixed price agreed before we start, with watching and fixing included', us: true },
        ],
      },
      {
        type: 'how',
        title: 'How it works',
        intro: HOW_INTRO,
        steps: [
          { title: "Tell us what's out of sync", text: 'Which shop, which ERP, and what goes wrong: prices, stock, orders or accounts.', free: true },
          PLAN_STEP('Whether we take over your link or rebuild it, and what it costs to set up.'),
          { title: 'We fix and test', text: 'Tested on your real prices, stock and orders before we switch over.', free: false },
          RUN_STEP,
        ],
        cta: HOW_CTA,
      },
      { type: 'proof', title: 'Already running', customers: [harrows, kienesberger, doppler] },
      {
        type: 'systems',
        title: 'Built on our own integration platform',
        text: "B2Bware is made by SyncSpider, the integration platform we have run for 10 years, with 400+ integrations. Building and maintaining connections between shops and ERPs is what we do every day. Whichever ERP you run, we confirm the connection in the consultation.",
      },
      {
        type: 'faq',
        title: 'What buyers ask us first',
        items: [
          { q: 'How often does it update?', a: 'Live. Prices, stock and orders sync as they change, not in an overnight batch.' },
          { q: 'Which system is the master?', a: 'Your ERP. Prices, stock and accounts come from it, and orders go back into it.' },
          { q: 'What happens when our ERP or webshop updates?', a: 'We watch every order and fix what breaks. Fixing it is in the monthly fee.' },
          { q: 'Can you take over our current connector?', a: 'We take over or rebuild, whichever is right, at a fixed price agreed before we start.' },
          { q: "We're about to change ERP.", a: CONSULT },
          { q: 'Is on-premise OK?', a: 'Yes. We work with cloud or on-premise ERPs.' },
        ],
      },
      { type: 'doors', title: 'Other things we fix', cards: [cards.portal, cards.emailed] },
    ],
  },

  'emailed-orders': {
    meta: {
      title: 'Emailed and PDF orders straight into your ERP | B2Bware',
      description: 'We read emailed, PDF and Excel orders, match their codes to yours, check them against your ERP and post a finished sales order. Fixed price, then we run it.',
    },
    hero: {
      variant: 'email',
      image: '/images/solutions/wholesale-warehouse.webp',
      alt: 'Warehouse worker scanning boxes for a trade order',
      headline: 'Still retyping emailed orders?',
      highlight: 'We post them to your ERP as finished sales orders',
      checks: [
        'PDF, Excel or the email itself, as customers send it',
        'Their part codes, packs and units matched to yours',
        'Prices, stock and credit checked against your ERP',
        'Your team approves before anything posts',
      ],
      lead: 'Customers keep ordering the way they do now. We read the order, check it and post it, then keep it working as customers change their formats.',
      priceLine: PRICE_LINE,
      primaryCta: { text: 'Book a free consultation', href: CHECK },
      secondaryCta: { text: 'See how it works', href: HOW },
    },
    sections: [
      {
        type: 'symptoms',
        variant: 'chips',
        title: 'The mess, named',
        lines: [
          'Every customer sends a different format.',
          "Their part codes aren't your part codes.",
          'They order in boxes. You stock in units.',
          'Their price is a contract price, not your list price.',
          'And some of them are on stop.',
        ],
      },
      {
        type: 'stepStrip',
        title: 'One order, start to finish',
        steps: [
          'PDF arrives from the customer',
          'Their codes matched to yours, boxes converted to units',
          'Price, stock and credit checked against your ERP',
          'One line held, with the reason',
          'Your team approves',
          'Sales order number in your ERP',
        ],
        mock: b2bHero.mock,
      },
      {
        type: 'comparison',
        title: "Already have a tool? Or Business Central's agent?",
        intro: 'If it works, keep it.',
        cards: [
          {
            title: "Business Central's Sales Order Agent",
            lead: "In Microsoft's own documentation:",
            items: [
              'Up to 15 lines per order',
              'Reads the email, PDFs and images, not spreadsheets',
              'Leaves variant codes empty',
              'Always creates a quote first',
              "Doesn't post",
              'Business Central only',
            ],
            close: 'For short PDF orders from known customers, try it first.',
          },
          {
            title: 'Order-reading tools',
            close: 'If yours gives you a file someone still uploads, or mapping changes wait on the vendor, we finish the job and keep the mapping up to date.',
          },
        ],
      },
      {
        type: 'features',
        title: 'What we run for you after go-live',
        tiles: [
          { title: 'New customer formats added' },
          { title: 'Their codes kept mapped' },
          { title: 'Failed orders watched and fixed' },
          { title: 'One contact who knows your setup' },
        ],
      },
      {
        type: 'text',
        title: 'How much checking your team still does',
        paragraphs: ['AI reads every order. Clean lines arrive ready to approve. Problem lines are held, with the reason. Nothing posts until your team approves it.', 'Every correction your team makes is kept, so the same mistake does not come back.'],
      },
      {
        type: 'text',
        title: 'See it on your own orders first',
        paragraphs: ['Send us 50 real orders, the messy ones included. We run them and show you how many lines match cleanly, before you pay anything.'],
      },
      { type: 'pricing' },
      {
        type: 'twoCol',
        variant: 'checklist',
        title: 'Is this right for you?',
        columns: [
          { title: 'Right for you', tone: 'yes', items: [
            'Standard products with codes',
            'Dozens of emailed orders a week or more',
            'Any ERP with a way in',
            'A team doing the keying',
          ] },
          { title: 'Not for you', tone: 'no', items: [
            'A handful of orders a week',
            'Products configured or priced one by one',
            'Spot prices with no data behind them',
            'All your orders already arrive by EDI',
            "You're part-way through changing ERP? " + CONSULT,
          ] },
        ],
      },
      {
        type: 'how',
        title: 'How it works',
        intro: HOW_INTRO,
        steps: [
          { title: 'Tell us how orders arrive', text: 'Which customers email, in what formats, and which ERP the orders go into. Send us 50 real orders and we show you the match rate.', free: true },
          PLAN_STEP('What we read, how it reaches your ERP, and what it costs to set up.'),
          { title: 'We build, connect and test', text: 'Tested on your real orders, codes and prices. Nothing posts until your team approves it.', free: false },
          RUN_STEP,
        ],
        cta: HOW_CTA,
      },
      {
        type: 'faq',
        title: 'What buyers ask us first',
        items: [
          { q: 'How accurate is it?', a: 'Send us 50 real orders and we show you the match rate before you pay anything. Nothing posts until your team approves it, and every correction is kept, so the same mistake does not come back.' },
          { q: 'What if a customer changes their format?', a: "We add the new format and keep their codes mapped. That's part of what we run for you after go-live." },
          { q: "Our customers' codes are a mess.", a: 'We map their codes to yours, including boxes, packs and units.' },
          { q: 'Which formats do you read?', a: 'PDF, Excel or the email itself, as customers send it.' },
          { q: 'Which ERPs do you post to?', a: 'Any ERP with a way in. We confirm yours in the consultation.' },
          { q: 'Our big customers use EDI.', a: 'Keep it. EDI covers the big accounts. We handle the emailed orders from everyone else, and can add an EDI link if you need one.' },
          { q: 'Will it replace our staff?', a: 'No. It takes the keying off them, so they can deal with the exceptions and the customers.' },
          { q: "We're changing ERP.", a: CONSULT },
        ],
      },
      {
        type: 'cta',
        title: 'Bring the orders you retype today',
        subtitle: 'Get a plan and a fixed price.',
        text: 'Send us 50 real orders and see the match rate before you pay anything. You keep the plan either way.',
        cta: { text: 'Book a free consultation', href: CHECK },
      },
      { type: 'doors', title: 'Other things we fix', cards: [cards.portal, cards.erp] },
    ],
  },
};

export type ProblemSlug = keyof typeof problemPages;
