// B2B glossary: /b2b-glossary. Merged from the two live pages (b2b-glossary and b2b-portal-glossary-a-z).
// English terms only (German duplicates dropped). Definitions are neutral: no marketing claims, no statistics.
// `link` points at our matching page where one exists. Brief: research/pages/compare-glossary-usecase-brief.md.

export type GlossaryTerm = { term: string; definition: string; link?: { text: string; href: string } };

const F = (slug: string, text: string) => ({ text, href: `/features/${slug}` });

export const glossaryIntro = {
  title: 'B2B glossary',
  highlight: 'Plain definitions for trade ordering, portals and ERP links.',
  lead: 'The terms you meet when you look at B2B ordering portals, ERP integration and order automation, defined in a sentence or two. Where we have a page on the subject, the term links to it.',
};

export const glossary: GlossaryTerm[] = [
  { term: 'Abandoned cart', definition: 'A basket of products a buyer starts and does not check out. In B2B it often happens because the price needs a quote, an approval is pending or information is missing.' },
  { term: 'Advanced filtering', definition: 'Narrowing a product list by attributes such as brand, price range, stock status or technical specification.', link: F('advanced-search-filtering', 'Search and filtering') },
  { term: 'Advanced search', definition: 'Product search that matches on more than the name, for example part code, manufacturer, specification or tag.', link: F('advanced-search-filtering', 'Search and filtering') },
  { term: 'Agent', definition: 'A user with extended permissions who acts on behalf of a customer, for example a sales rep who prepares an order or an offer for them.', link: F('onsite-order-entry', 'Onsite order entry') },
  { term: 'AI document recognition', definition: 'Software that reads uploaded documents such as PDFs and scans and pulls out fields like the purchase order number and product codes, so they do not have to be typed in.', link: F('ai-document-recognition', 'Order document reading') },
  { term: 'API', definition: 'Application programming interface: a defined way for one piece of software to request data from, or send data to, another.', link: F('rest-api', 'REST API') },
  { term: 'API integration', definition: 'Connecting two applications through their APIs so that data moves between them automatically.', link: F('rest-api', 'REST API') },
  { term: 'API-first design', definition: 'A way of building software where the API is designed before the user interface, so every function can also be used by other systems.', link: F('rest-api', 'REST API') },
  { term: 'Audit trail', definition: 'A time-stamped record of who did what in a system: each action, change or approval.', link: F('audit-trail-order-reporting', 'Audit trail and reporting') },
  { term: 'Automated order validation', definition: 'Checking each incoming order against set rules, such as valid part codes, credit status and pack sizes, before it is accepted.', link: F('automated-order-validation', 'Order validation') },
  { term: 'B2B automation', definition: 'Handing recurring business tasks, such as syncing orders or updating prices between systems, to software.', link: { text: 'ERP integration', href: '/solutions/erp-integration' } },
  { term: 'B2B contract management', definition: 'Recording and applying the terms agreed with each business customer, such as prices, discounts, range and how long they last.', link: F('contract-based-catalogs', 'Contract-based catalogues') },
  { term: 'B2B ecommerce platform', definition: 'Software that lets a company sell to other businesses online, usually with bulk ordering, account-specific prices and payment terms.', link: { text: 'Trade portal', href: '/solutions/trade-portal' } },
  { term: 'B2B integration', definition: 'Connecting the systems a business trades through, such as ERP, shop and CRM, so they exchange data without manual copying.', link: { text: 'ERP integration', href: '/solutions/erp-integration' } },
  { term: 'B2B ordering system', definition: 'A system that handles order entry, validation, processing and tracking for business buyers, typically with account-specific prices and approval rules.', link: { text: 'Trade portal', href: '/solutions/trade-portal' } },
  { term: 'Business intelligence (BI)', definition: 'Collecting, analysing and presenting business data so that people can spot trends and make decisions.', link: F('audit-trail-order-reporting', 'Audit trail and reporting') },
  { term: 'Client', definition: 'In a B2B portal, the company that owns and runs the portal and manages its set-up, integrations, roles and user access.' },
  { term: 'Cloud deployment', definition: 'Running software on servers operated by a cloud provider instead of on your own hardware.' },
  { term: 'Company', definition: 'A customer organisation of the portal owner, which can have several users logging in on its behalf.', link: F('role-based-access-control', 'Roles and access') },
  { term: 'Composable commerce', definition: 'An architecture where a commerce system is assembled from separate, replaceable components, each handling one job such as catalogue, checkout or search.' },
  { term: 'Contract-based catalogue', definition: 'A catalogue that shows each customer only the products and prices agreed with them.', link: F('contract-based-catalogs', 'Contract-based catalogues') },
  { term: 'CPQ (configure, price, quote)', definition: 'Software that helps build a configured product, work out its price under the customer’s terms and produce a quote.', link: F('cpq-configure-price-quote', 'Configure, price, quote') },
  { term: 'CRM integration', definition: 'Connecting a customer relationship management system to other systems so that customer records, sales history and contact logs stay in step.' },
  { term: 'Cross-selling', definition: 'Suggesting related or complementary products to a buyer based on what is in their basket or what they have bought before.' },
  { term: 'Custom workflows and approvals', definition: 'Approval steps defined by the business, for example requiring a manager to approve any order over a set value.', link: F('custom-workflows-approvals', 'Workflows and approvals') },
  { term: 'Customer', definition: 'A user account that logs in to a portal on behalf of a company to see products and place orders.', link: F('role-based-access-control', 'Roles and access') },
  { term: 'Customer portal', definition: 'A login area where business customers place and track orders, and see invoices, quotes and delivery information.', link: { text: 'Trade portal', href: '/solutions/trade-portal' } },
  { term: 'Customisable design', definition: 'The ability to change a portal’s layout, fields and processes to fit how the business works.', link: F('customizable-design', 'Customisable design') },
  { term: 'Data format', definition: 'The way information is structured so that systems can exchange it, for example JSON, XML, CSV or EDI.' },
  { term: 'Data mapping', definition: 'Defining which field in one system corresponds to which field in another, so data lands in the right place when it moves.', link: F('erp-pim-integration', 'ERP and PIM integration') },
  { term: 'Data transformation', definition: 'Converting data from one structure or format to another so a different system can use it.', link: F('erp-pim-integration', 'ERP and PIM integration') },
  { term: 'Digital customer file', definition: 'A single view of a customer’s profile, orders, prices and history, drawn live from the ERP.', link: F('digital-customer-file-live-data', 'Digital customer file') },
  { term: 'Digital signature', definition: 'A way to sign a document electronically, such as a quote or purchase order, with a record of who signed and when.', link: F('digital-signature-quote-dispatch', 'Digital signature and quote dispatch') },
  { term: 'EDI (electronic data interchange)', definition: 'A standard way for businesses to exchange structured documents such as purchase orders and invoices directly between their systems.', link: { text: 'Emailed and PDF orders', href: '/solutions/emailed-orders' } },
  { term: 'Emailed order', definition: 'An order a customer sends as an email, PDF or spreadsheet instead of entering it in a portal. Someone, or some software, has to turn it into a sales order.', link: { text: 'Emailed orders', href: '/solutions/emailed-orders' } },
  { term: 'Endpoint', definition: 'A specific address that an application exposes for sending or receiving a defined piece of data.', link: F('rest-api', 'REST API') },
  { term: 'ERP integration', definition: 'Connecting a portal or shop to an ERP so that prices, stock, customers and orders pass between them.', link: { text: 'ERP integration', href: '/solutions/erp-integration' } },
  { term: 'Headless architecture', definition: 'Separating the customer-facing front end from the back-end systems, so the front end can be built independently and talks to the back end through APIs.', link: F('rest-api', 'REST API') },
  { term: 'Intelligent process automation (IPA)', definition: 'Automation that combines rule-based steps with software that reads or classifies information, used for tasks such as checking orders or spotting anomalies.', link: F('intelligent-process-automation', 'Process automation') },
  { term: 'iPaaS', definition: 'Integration platform as a service: a hosted platform for connecting applications through prebuilt connectors and configurable workflows.', link: { text: 'ERP integration', href: '/solutions/erp-integration' } },
  { term: 'Middleware', definition: 'Software that sits between applications and lets them communicate and share data.' },
  { term: 'Minimum order quantity (MOQ)', definition: 'The smallest quantity of a product a buyer must order in one transaction.' },
  { term: 'Multi-client support', definition: 'One installation serving several separate clients or divisions, with their data kept apart.', link: F('multi-client-support', 'Multi-client support') },
  { term: 'Multi-currency support', definition: 'Showing and processing prices and transactions in more than one currency, for example by customer or contract.' },
  { term: 'Multilingual capability', definition: 'Letting users switch the interface between languages, with regional formats for dates and numbers.', link: F('multilingual-capability', 'Multilingual portal') },
  { term: 'Net payment terms', definition: 'The agreed period a buyer has to pay an invoice after it is issued, commonly written as net 30, net 45 or net 60 days.', link: F('multiple-payment-methods', 'Payment methods') },
  { term: 'Offline catalogue access', definition: 'Letting field sales reps browse the catalogue, check prices and draft orders without an internet connection, then sync when they are back online.', link: F('offline-product-catalog-access', 'Offline catalogue access') },
  { term: 'Omnichannel', definition: 'Selling through several channels, such as portal, shop, phone and email, with the same data, prices and stock behind each.' },
  { term: 'On-premise deployment', definition: 'Running software on your own servers or infrastructure instead of with a hosting provider.' },
  { term: 'Onsite order entry', definition: 'Letting a sales rep place an order for a customer during a visit, straight into the same system.', link: F('onsite-order-entry', 'Onsite order entry') },
  { term: 'Order history and quick reorder', definition: 'Showing a customer their past orders and letting them put the same items into a new order in a few clicks.', link: F('order-history-quick-reorder', 'Order history and reorder') },
  { term: 'Order management system (OMS)', definition: 'Software that takes in orders, validates them, tracks fulfilment and handles returns, usually alongside an ERP and warehouse system.' },
  { term: 'Order tracking', definition: 'Letting a buyer follow an order from placement to delivery and see its current status.', link: F('audit-trail-order-reporting', 'Audit trail and reporting') },
  { term: 'Permission management', definition: 'Setting what each user or role may see, change or approve.', link: F('permission-management', 'Permission management') },
  { term: 'PIM (product information management)', definition: 'A system that holds product data such as descriptions, attributes and images in one place for other systems to use.', link: F('unified-product-data-management', 'Product data management') },
  { term: 'PIM integration', definition: 'Connecting a PIM system to a portal or shop so product data flows to it without being re-entered.', link: F('erp-pim-integration', 'ERP and PIM integration') },
  { term: 'Protocol', definition: 'An agreed set of rules for how data is sent and interpreted between systems.' },
  { term: 'Quote dispatch', definition: 'Producing a price quote for a customer and sending it from the system, optionally with a signature step.', link: F('digital-signature-quote-dispatch', 'Digital signature and quote dispatch') },
  { term: 'REST API', definition: 'An API style that exchanges data between systems using standard web requests such as GET and POST.', link: F('rest-api', 'REST API') },
  { term: 'Role-based access control', definition: 'Giving users access according to their role, so a buyer, an approver and an administrator each see and do different things.', link: F('role-based-access-control', 'Roles and access') },
  { term: 'Secure user authentication', definition: 'Checking who a user is before giving access, for example with a password plus a second factor, or single sign-on.', link: F('secure-user-authentication', 'Secure sign-in') },
  { term: 'Self-learning order matching', definition: 'Matching the product codes on incoming orders to your own codes, and remembering each match so that the same customer’s next order is matched without help.', link: F('self-learning-order-matching', 'Order matching') },
  { term: 'Self-service portal', definition: 'A portal where business customers place orders, check status and find documents on their own, without going through a sales rep.', link: F('self-service-portal', 'Self-service portal') },
  { term: 'Single source of truth (SSOT)', definition: 'Keeping each piece of data, such as a price, authoritative in one system, with all other systems reading it from there.', link: F('single-source-of-truth', 'Single source of truth') },
  { term: 'SyncSpider', definition: 'The integration platform made by the team behind B2Bware. It connects ecommerce, ERP, CRM and logistics systems and runs the integration layer under B2Bware.', link: { text: 'ERP integration', href: '/solutions/erp-integration' } },
  { term: 'Tiered pricing', definition: 'Charging different prices by buyer type, order quantity or contract level.', link: F('tiered-pricing', 'Tiered pricing') },
  { term: 'Unified product data management', definition: 'Holding product data in one place and passing it to every channel automatically.', link: F('unified-product-data-management', 'Product data management') },
  { term: 'User', definition: 'A person who belongs to a company in the portal and has a role that sets what they can do.', link: F('role-based-access-control', 'Roles and access') },
  { term: 'Visit planning and reporting', definition: 'Tools for field sales to schedule customer visits, log what happened and report on it.', link: F('visit-planning-reporting', 'Visit planning and reporting') },
  { term: 'White-label', definition: 'A product that a reseller, distributor or agency can present under its own brand.', link: F('white-label', 'White-label') },
  { term: 'Workflow automation', definition: 'Having software run repetitive steps, such as routing an order or updating a record, when a set trigger happens.', link: F('custom-workflows-approvals', 'Workflows and approvals') },
];

glossary.sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }));

export const slugify = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export const grouped = letters
  .map((l) => ({ letter: l, terms: glossary.filter((g) => g.term[0].toUpperCase() === l) }))
  .filter((g) => g.terms.length);
