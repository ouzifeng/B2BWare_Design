// Objections raised on real sales calls (research/sdr-call-evidence.md).
// Wording reused from src/data/solutions.ts and src/data/b2b.ts where it exists.
export type Objection = { q: string; lead: string; text: string };
export type ObjectionPage = 'manufacturers' | 'distributors' | 'wholesalers' | 'pricing';

const tool = (): Objection => ({
  q: 'We already use an AI order tool.',
  lead: 'If it works, keep it.',
  text: 'If your tool gives you a file someone still checks and uploads, or mapping changes wait on the vendor, we finish the job: their codes, your prices and accounts on stop handled, then the finished order posted to your ERP.',
});

const edi = (text: string): Objection => ({ q: 'Our big accounts use EDI.', lead: 'Keep it.', text });

const manual = (text: string): Objection => ({
  q: 'Manual is fine.',
  lead: 'If you get a handful of orders a week, stay manual.',
  text,
});

const inhouse = (text: string): Objection => ({ q: 'It is cheaper to build it ourselves.', lead: 'The first build is the easy part.', text });

const KEEP_FIXED =
  'The cost comes after go-live: an ERP or shop update breaks the link, and someone has to notice and fix it. The monthly fee covers us watching every order and fixing the link when that happens, with no day rates for fixes.';

export const objections: Record<ObjectionPage, { title: string; items: Objection[] }> = {
  manufacturers: {
    title: 'Fair questions before you book',
    items: [
      tool(),
      edi('EDI covers the big accounts. Dealers who order from inside their own buying system can use punchout at their own prices, and we handle the emailed and phoned orders from everyone else. We can add an EDI link if you need one.'),
      manual('We would tell you so on the call. If someone retypes dealer orders into the ERP every day, that is the cost: their hours, plus every slip when a price, code or quantity is typed twice. One manufacturer on a public forum says their admins spend 2 to 3 hours a day on it.'),
      inhouse(KEEP_FIXED),
    ],
  },
  distributors: {
    title: 'Fair questions before you book',
    items: [
      edi('EDI covers the big accounts. A large customer can also order from inside its own procurement system with punchout, and the order lands in your ERP. We handle the emailed and phoned orders from everyone else, and can add an EDI link if you need one.'),
      tool(),
      manual('We would tell you so on the call. If your sales desk keys the same reorders every day, count those hours, then the cost of every wrong line that reaches a customer. One manufacturer on a public forum says their admins spend 2 to 3 hours a day on it.'),
      inhouse(KEEP_FIXED),
    ],
  },
  wholesalers: {
    title: 'Fair questions before you book',
    items: [
      manual('We would tell you so on the call. If someone takes phone and WhatsApp orders and types each one into the ERP every day, count those hours. One manufacturer on a public forum says their admins spend 2 to 3 hours a day on it.'),
      tool(),
      edi('EDI covers the big accounts. We handle the phoned, WhatsApp and emailed orders from everyone else, and can add an EDI link if you need one.'),
      inhouse(KEEP_FIXED),
    ],
  },
  pricing: {
    title: 'Is it worth paying for?',
    items: [
      inhouse(KEEP_FIXED + ' That is what the £300 a month buys.'),
      manual('We would tell you so on the call. If someone retypes orders every day, set that against the price: their hours a week, plus every mistake. One manufacturer on a public forum says their admins spend 2 to 3 hours a day on it.'),
      tool(),
      edi('EDI covers the big accounts. We handle the emailed orders from everyone else, and can add an EDI link if you need one.'),
    ],
  },
};
