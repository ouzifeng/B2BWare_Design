# DACH opportunity: e-invoicing, orders into the ERP, and the Austrian advantage

Date: 23 Sep 2026. Question: should DACH be a lead market for B2Bware/SyncSpider, and is an e-invoicing package for German firms a sensible test?

Method note: the session's WebSearch budget was already used up. Research ran on direct page fetches and a limited number of Brave search result pages until those were rate limited. Several named items could not be checked (see section 9). Where this file relies on earlier work in this folder, it says so. Quotes come through WebFetch, which returns a model-made extract, so spot-check exact wording before using it in public copy.

Labels: **[E]** = evidence with URL. **[I]** = inference, reasoning from the evidence.

---

## 0. Bottom line

1. **E-invoicing on its own is mostly commoditised for SMEs.** [E] Main SME ERPs and accounting tools now include XRechnung/ZUGFeRD sending and receiving in the standard product or at very low prices (Business Central standard, Sage 100 from 9.0.8, Lexware "ohne Zusatzkosten", easybill from EUR 0 to 45 a month, sevdesk from EUR 4.45, banqup EUR 20 a month). Receiving only needs an email inbox. [I] A standalone "e-invoicing package" would be competing on price with software that is included or costs EUR 10 to 40 a month. That is a weak test for a service with a build fee.
2. **The paid pain sits in the gaps around the ERP, not in the format.** [E] Only 24% of firms have fully converted their systems (YouGov for easybill, Jun 2026), 6% fully meet the requirements (Quadient/OpinionWay, Jun 2026), technical implementation is the top blocker (36%), more than half plan to bring in service providers (KPMG), and archiving is a problem area (ZDH survey, early 2026). Business Central's own standard has real limits: one format per sending profile, Peppol needs an extra service integration, and emails go out silently without the attachment when master data is missing. [I] The paid work is: getting correct, complete data out of an older or customised ERP, a separate billing tool or a webshop; routing different formats to different customers; getting incoming e-invoices matched into purchasing; and archiving. That is integration work, which is B2Bware's core skill.
3. **The 2027 cohort is large.** [E/I] Between about 482,000 and 797,000 German VAT payers are above the EUR 800k threshold (Destatis turnover classes do not split at 800k). Almost all of the roughly 85,700 German manufacturers and wholesalers with 10 to 249 staff are in it (Eurostat average turnover per firm is well above EUR 800k even for 10 to 19 staff). There is no official count.
4. **The strongest DACH buyer pain is the inside sales team drowning in admin and manual order entry**, with integration gaps behind it. [E] ECC KÖLN B2BEST Barometer (22 Sep 2026, 200 wholesalers and manufacturers): 39% spend more than 40% of sales time on admin; 39% name manual order and quote entry as the biggest bottleneck; 34% name missing integration between sales, shop, ERP and CRM; 74% fear losing customers if requests are not answered the same day. Fax is still in use: 82% of German firms used fax in 2023, 33% often (Bitkom).
5. **Being Austrian and German-speaking is an asset, backed by evidence, but "German" beats "Austrian".** [E] Bitkom Cloud Report 2026 (603 firms): 91% of German companies prefer German providers, 68% EU providers, 8% US providers; 97% say server location matters in choosing a provider. [I] An Austrian company counts as EU and German-speaking, not German. The message should be "DACH team, German-language support, data hosted in Germany/EU, DSGVO", not "made in Austria".
6. **Recommendation (inference):** make DACH a lead market, but do not lead with e-invoicing as the product. Lead with "Aufträge und Rechnungen sauber rein und raus aus dem ERP" (orders in, invoices out), using the 2027 deadline as the reason to call. Test an "E-Rechnung-Check plus Auftragseingang" offer: a fixed-price audit and fix of ERP invoice output (formats, master data, routing, archive), sold with the email/PDF order-entry route as the upsell. Details in section 8.

---

## 1. E-invoicing in detail

### 1a. Rules and formats (quick check, confirmed)

| Item | Detail | Source |
|---|---|---|
| Receiving | All domestic businesses since 1 Jan 2025. "Für den Empfang einer elektronischen Rechnung genügt bereits ein E-Mail-Postfach." | [E] BMF FAQ, as of 23 Mar 2026: https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html |
| Issuing | Paper/PDF allowed to end 2026. From 1 Jan 2027 firms with prior-year turnover above EUR 800k must issue e-invoices. All firms from 1 Jan 2028. | [E] same; also DIHK: https://www.dihk.de/de/serviceportal/fuer-gewerbetreibende-unternehmer/e-rechnung-im-geschaeftsverkehr-160986 |
| Scope | Transactions between businesses established in Germany ("Umsätze zwischen inländischen Unternehmern"). Foreign suppliers without a German establishment are generally out of scope. | [E] BMF FAQ |
| Formats | Structured format per EN 16931: XRechnung; ZUGFeRD from version 2.0.1 "mit Ausnahme der Profile MINIMUM und BASIC-WL" (Factur-X is the French twin of ZUGFeRD); EDI that meets EN 16931. | [E] BMF FAQ |
| PDF | "ein einfaches PDF-Dokument fällt dann nicht mehr unter diese Definition" | [E] BMF FAQ |
| EDI transition | EDI procedures that do not meet the standard may be used until the end of 2027. | [E] BMF FAQ |
| Archiving | Keep the structured part unaltered in its original form for 8 years (per BMF FAQ extract). Handwerk guidance: "revisionssicher (also vollständig, nachvollziehbar, lesbar, manipulationssicher und maschinell auswertbar)". | [E] BMF FAQ; Deutsche Handwerks Zeitung: https://www.deutsche-handwerks-zeitung.de/20-praxisfragen-zur-e-rechnung-und-ihre-antworten-381804/ |
| Politics | ZDH asked for the 2027 step to move to 2028 (Jul 2026). The BMF FAQ (23 Mar 2026) still shows 2027. Not re-checked for any change since. | [E] https://www.boerse-express.com/news/articles/e-rechnung-pflicht-ab-januar-2027-fuer-unternehmen-ueber-800000-euro-929362 |

### 1b. What an SME actually has to change

[I] Built from the rules above and the ERP documentation in 1e:

- **Outgoing (from 2027):** the ERP, billing tool or webshop must produce a valid XRechnung or ZUGFeRD 2.x file with complete master data. Buyer reference (Leitweg-ID for public customers), VAT IDs, units, payment terms and delivery details must all be filled in. The file then has to reach each customer in the format that customer wants: email, Peppol or the customer's portal. Firms that invoice from more than one system (ERP plus Shopify/Shopware plus a separate service billing tool) must fix every source.
- **Incoming (since 2025):** receiving by email is legally enough. But the XML has to be made readable, checked, matched to the purchase order and goods receipt, and posted. Without that, staff open a viewer and key the invoice by hand, so the benefit is lost.
- **Archiving:** the XML (not just a printout) must be stored unchanged for 8 years in a GoBD-compliant way. The ZDH survey (early 2026) says archiving is a problem for many firms [E, DHZ link above].
- **EDI users:** check whether their EDI meets EN 16931 before the end of 2027 [E, BMF FAQ].

### 1c. Size of the 2027 cohort

| Item | Figure | Source |
|---|---|---|
| All VAT taxpayers (turnover above EUR 22k), 2024 | 3,131,417 | [E] Destatis Statistischer Bericht Umsatzsteuerstatistik (Voranmeldungen) 2024, table 73311-01, published 9 Mar 2026: https://www.destatis.de/DE/Themen/Staat/Steuern/Umsatzsteuer/Publikationen/Downloads-Umsatzsteuern/statistischer-bericht-umsatzsteuer-2140810247005.html (taken from demand-market-sizing.md in this folder) |
| Taxpayers with turnover of EUR 1m or more | 482,470 | [E] same |
| Taxpayers with EUR 500k to 1m | 314,872 | [E] same |
| Firms above EUR 800k in 2027 | **about 482,000 to 797,000** (all sectors) | [I] the classes do not split at 800k |
| German manufacturers (NACE C) plus wholesalers (G46) with 10 to 249 staff, 2024 | 61,712 + 23,982 = **about 85,700** | [E] Eurostat sbs_sc_ovw: https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/sbs_sc_ovw?format=JSON&geo=DE&nace_r2=C&indic_sbs=ENT_NR |
| Average turnover per firm, 10 to 19 staff | Manufacturing EUR 1.68m; wholesale EUR 7.42m (2023) | [E] Eurostat, same dataset |
| Official BMF or IfM estimate of firms affected in 2027 | **None found.** The BMF FAQ contains no count. IfM Bonn publishes 3,543,865 firms in total (Unternehmensregister 2024) but no split by turnover. | [E] BMF FAQ; https://www.ifm-bonn.org/statistiken/mittelstand-im-ueberblick/kennzahlen-der-kmu-nach-definition-des-ifm-bonn/kennzahlen-deutschland |

[I] Nearly every manufacturer or wholesaler in B2Bware's size band is in the 2027 cohort. The binding deadline is 1 Jan 2027, about 14 weeks from today, so buying decisions for 2027 compliance are being made now, in Q4 2026.

### 1d. Readiness surveys

| Finding | Survey | Sample / date | Sponsor note | URL |
|---|---|---|---|---|
| 24% have fully converted their systems; 33% have never sent an e-invoice; 42% send regularly; 26% feel well prepared; blockers: technical implementation 36%, legal 29%, knowledge 27%; 21% still invoice from Word or Excel | YouGov for easybill | 502 firms, published 3 Jun 2026 | easybill sells e-invoicing | https://www.ad-hoc-news.de/wirtschaft/e-rechnung-nur-jedes-vierte-unternehmen-bereit-fuer-pflicht/69474443 |
| Only about 6% fully meet the requirements; 75% call their invoicing digitised; 48% still send paper invoices | Quadient / OpinionWay | 300 German firms, reported 15 Jun 2026 | Quadient is a vendor | https://www.ad-hoc-news.de/wirtschaft/e-rechnung-ab-2026-nur-6-prozent-der-firmen-erfuellen-die-pflicht/69541216 |
| Firms mostly report difficulties receiving e-invoices; about a third issue e-invoices; archiving is a problem for many | ZDH (craft businesses) | about 2,000 craft firms, early 2026 | trade association | https://www.deutsche-handwerks-zeitung.de/20-praxisfragen-zur-e-rechnung-und-ihre-antworten-381804/ |
| 80% have taken steps; 56% feel well informed; more than half plan to use service providers ("Über die Hälfte plant die Einbindung von Dienstleistern") | KPMG | sample and date not shown | consultancy | https://hub.kpmg.de/de/e-rechnung-in-deutschland |
| 45% could receive e-invoices; 55% send some e-invoices; 96 to 99% still receive invoices by email, mostly PDF | Bitkom Research | 1,103 firms with 20+ staff, fieldwork spring 2024 | independent association | https://www.bitkom.org/Presse/Presseinformation/Weniger-als-die-Haelfte-deutscher-Unternehmen-empfaengt-E-Rechnungen |
| Among firms sending structured invoices: EDI 57%, ZUGFeRD 45%, XRechnung 26% | Bitkom Research | 502 firms, Sep 2021 (old) | independent | https://www.bitkom.org/Presse/Presseinformation/Elektronische-Rechnungen-in-der-Breite |

Not found: a 2025 or 2026 DIHK or IHK readiness survey on e-invoicing. The DIHK Digitalisierungsumfrage 2026 (about 5,000 firms, published 28 Jan 2026) contains no e-invoicing figures in its summary: https://www.dihk.de/en/newsroom/digitalisation-2026-businesses-stay-the-course-171684. No Sage, Lexware or DATEV readiness survey was reached.

[I] All sources point the same way: most firms can technically receive, far fewer issue compliant e-invoices from all systems, and small firms lag. Two of the three 2026 surveys are vendor-sponsored, so treat the exact percentages with caution. The direction is consistent.

### 1e. Do common ERPs handle it natively?

| System | Native support | Included or extra | Source |
|---|---|---|---|
| Microsoft Dynamics 365 Business Central (DE) | "Ab Version 26.3 unterstützt das E-Document-Framework für die deutsche Lokalisierung alle in Deutschland verfügbaren Formate: XRechnung (nur UBL), Peppol BIS 3 und ZUGFeRD." Incoming ZUGFeRD XML is extracted automatically, but "Die automatisierte Erstellung von E-Belegen bedeutet nicht die automatische Erstellung von Einkaufsrechnungen." One sending profile supports only one format. | Standard. Partner notes: email sending works "ohne Zusatzsoftware", but Peppol needs "zusätzlich eine Dienstintegration"; XRechnung for one customer and ZUGFeRD for another "ist im Standard nicht vorgesehen"; if no file is attached "geht die Mail trotzdem raus – ohne Abbruch, ohne Meldung". | [E] https://learn.microsoft.com/de-de/dynamics365/business-central/localfunctionality/germany/germany-einvoicing ; https://www.walter75.de/e-rechnung-in-business-central-zugferd-einrichten/ |
| Sage 100 | Receives and creates ZUGFeRD and XRechnung from version 9.0.8. Batch import, master data creation from e-invoices, UBL converter and similar features arrive in 9.0.10 to 9.0.12 (Nov 2025 to autumn 2026). | Newer features sit in the optional "Komfortpaket E-Rechnung" (price not published on the partner page). A Sage 100 partner offers free ZUGFeRD import. | [E] https://www.system.ag/ueber-uns/news/e-rechnung-in-der-sage-100-das-ist-geplant-fuer-2026 ; https://sage-software.desk-firm.de/blog/sage-100-e-rechnung-alle-informationen-auf-einen-blick/ |
| Lexware (Office and desktop faktura+auftrag, warenwirtschaft, buchhaltung) | Create, send, capture and process XRechnung/ZUGFeRD | "Ohne Zusatzkosten" | [E] https://www.lexware.de/e-rechnung/ |
| sevdesk | Send e-invoices on all plans; receive from the Buchhaltung plan | EUR 9.95 to 13.95 a month (24-month term), EUR 25.90 to 34.90 monthly | [E] https://sevdesk.de/preise/ |
| easybill | Send and receive XRechnung/ZUGFeRD on all plans | EUR 0 / 12 / 39 / 45 a month | [E] https://www.easybill.de/preise |
| Xentral | Has a help-centre article on the legal background to e-invoicing (page blocked for fetching, so native scope not confirmed) | not verified | https://help.xentral.com/hc/de/articles/15104297049500 |
| SAP Business One, DATEV, abas, proALPHA, weclapp, JTL-Wawi | **Not verified in this pass** (search budget exhausted, guessed URLs returned 404). The ERP partner ecosystem around Business Central (BELWARE, FORNAV, mseDoc365, B2Brouter) sells add-ons, which suggests a market for extras above the standard. | n/a | Business Central add-on examples from a Brave result list: https://www.belware.de/e-rechnung , https://www.fornav.com/e-invoicing-german/ , https://www.b2brouter.net/de/e-rechnung-business-central/ |

### 1f. Who sells e-invoicing to SMEs, and at what price

| Provider | Price | Source |
|---|---|---|
| easybill | EUR 0 to 45 a month, extra documents EUR 0.29 | [E] https://www.easybill.de/preise |
| sevdesk | EUR 4.45 to 34.90 a month | [E] https://sevdesk.de/preise/ |
| banqup (Unifiedpost) | E-invoicing plan EUR 20 a month (Peppol, OCR, archive, 3 users); with payments EUR 36 | [E] https://www.banqup.com/de-de/preise |
| Lexware | included in subscription | [E] https://www.lexware.de/e-rechnung/ |
| Comarch, Pagero, Tungsten/Kofax, DATEV | not verified in this pass | n/a |

### 1g. Verdict: paid pain or free feature?

- [E] The format itself is free or close to free in most SME tools (1e, 1f).
- [E] But readiness is low (24% fully converted, 6% fully compliant), technical implementation is the top blocker, more than half plan to use service providers, and the most widely used Mittelstand ERP (Business Central) has documented gaps in routing, Peppol and error handling.
- [I] **Conclusion:** there is a real paid pain, but it is an **integration and data-quality project**, not a product. Buyers will not pay a monthly fee for "we make XRechnung files" when their ERP or easybill does it for EUR 0 to 45. They may pay a fixed project fee for: invoice output from a customised or legacy ERP, a webshop or several systems; per-customer format and channel routing (email, Peppol, portals); incoming XML into purchasing with PO matching; and archiving. The monthly fee is only justified if it covers ongoing monitoring of those flows.
- [I] Timing risk: the 2027 step affects firms above EUR 800k, and most firms in B2Bware's band fall into it. After 1 Jan 2027 the trigger turns into clean-up (errors, rejected invoices, customers demanding Peppol), which is also sellable but less urgent. If the ZDH request to postpone to 2028 succeeds, urgency drops.

---

## 2. Link to orders: is "e-invoicing plus orders into the ERP" credible?

| Evidence | Detail | Source |
|---|---|---|
| A German standard for electronic purchase orders exists | Order-X 1.0 (FeRD and FNFE-MPE, published April 2021) is a hybrid PDF plus XML order format that shares its structure with ZUGFeRD/Factur-X, so ordering and invoicing can be one workflow ("durchgängig digitalisierter Workflow"). | [E] https://www.ferd-net.de/aktuelles-veranstaltungen/aktuelles/news/order-x-10-hybridformat-fuer-digitalisierte-auftragsverarbeitung-veroeffentlicht-1 ; https://www.ferd-net.de/standards/order-x |
| Order-X can travel over Peppol | Since 3 Mar 2025 Peppol's approved document types include ZUGFeRD/Factur-X and Order-X, plus status messages. | [E] https://www.ferd-net.de/aktuelles-veranstaltungen/aktuelles/news/zugferd-factur-x-und-order-x-koennen-nun-auch-via-peppol-versendet-werden |
| A large buyer pushes it to suppliers | Adolf Würth introduced Order-X 1.0 from April 2023, aimed at SMEs and trade firms, without individual agreements or custom mappings: "Mittels Order-X wird eine reibungslose Kommunikation von Bestellung bis Rechnung mit den Geschäftspartnern gewährleistet". | [E] https://www.zugferd-community.net/de/blog/2023-03-29-standardisierung_im_belegdatenaustausch_-_adolf_wuerth_gmbh_co_kg_fuehrt_bestell-standard_order-x_1_0_ein |
| Business Central links incoming e-invoices to purchase orders | Automatic purchase invoice creation needs configuration or "Bestellzuordnung" (PO matching). | [E] Microsoft Learn link in 1e |
| Survey evidence that the mandate makes customers demand digital ordering | **None found.** | n/a |

[I] The bundle holds together logically: the same master data (items, customer numbers, prices, units) drives the order coming in and the invoice going out, and the same middleware can handle both. Order-X plus Peppol gives a standards story. But there is no evidence yet that buyers connect the two or that the mandate drives demand for digital orders. The bundle should be sold as "one data flow, order to invoice", with e-invoicing as the dated trigger and order entry as the value. Do not claim that customers are demanding Order-X.

---

## 3. Austria and Switzerland

### Austria

| Item | Detail | Source |
|---|---|---|
| B2B | No national e-invoicing mandate. "Österreich hat aktuell keine nationale E-Rechnungspflicht" (EY, 18 Mar 2026). | [E] https://www.ey.com/de_at/insights/tax/e-rechnungspflicht |
| B2G | E-invoicing required for federal government suppliers (via e-Rechnung.gv.at, ebInterface or UBL, Peppol). Secondary source dates this to 2014. | [E] https://www.erechnung.gv.at/erb?p=info_allgemeines ; https://invoissy.com/blog/e-rechnung-oesterreich (secondary) |
| ViDA | Structured e-invoicing and digital reporting for cross-border intra-EU B2B from 1 Jul 2030; harmonisation of existing national systems by 2035. | [E] WKO, 1 Apr 2026: https://www.wko.at/oe/news/e-rechnung-im-umsatzsteuerrecht-update ; EY link above |
| Political stance | WKO lobbies for "keine Verpflichtung zu elektronisch strukturierten Rechnungen für Umsätze in Österreich". | [E] WKO link above |
| Austrian firms and the German mandate | The German rules cover transactions between businesses established in Germany, so Austrian suppliers without a German establishment are generally out of scope. WKO still tells exporters to adapt their ERP for foreign rules. | [E] BMF FAQ; https://www.wko.at/aussenwirtschaft/e-rechnung-pflicht |

[I] There is no compliance urgency in Austria before 2030. Austria's value is as a home base and reference market, not as an e-invoicing market.

### Switzerland

| Item | Detail | Source |
|---|---|---|
| B2G | "Rechnungen an den Bund müssen elektronisch eingereicht werden", small purchases exempt; by PDF email or structured data via a service provider. The threshold and start date were not on the page. | [E] https://www.efv.admin.ch/de/elektronische-rechnungen-stellen-und-empfangen |
| eBill | 4 million registered users; 95% of Swiss financial institutions connected; approaching 100 million transactions a year. Mainly invoices paid through online banking (B2C and SME). | [E] https://www.ebill.ch/de/home.html |
| B2B mandate | None found. Switzerland is not in the EU, so ViDA does not apply directly. | [I] no source says otherwise; not fully verified |
| Order channels | ZHAW online retailer survey 2020 (330 Swiss online retailers): 28% accept orders by fax (n=332), "Jeder dritte Onlinehändler nimmt noch immer Bestellungen über Faxgeräte entgegen, die vor allem im B2B noch immer verbreitet sind." | [E] https://www.zhaw.ch/storage/hochschule/medien/news/2020/zumstein-oswald-onlinehaendler-studie-2020.pdf |

[I] Switzerland has no regulatory urgency. Its order-channel pain (fax, email) is similar to Germany's, but the evidence is old (2020).

---

## 4. DACH buyer pains, in German

| Pain | Evidence | Source |
|---|---|---|
| Vertrieb/Innendienst overloaded with admin | "Verwaltungsarbeit bei 39 Prozent der Unternehmen mehr als 40 Prozent der Vertriebszeit"; 8% above 60% | [E] ECC KÖLN, synaigy, Intershop, B2BEST Barometer, 200 wholesalers and manufacturers, 22 Sep 2026: https://www.etailment.de/magazin/2026-09-22-b2b-vertrieb-kunden-draengeln-formulare-bremsen (Intershop is a vendor) |
| Manual order and quote entry | 39% name manual entry of orders and quotes as the biggest bottleneck | [E] same |
| Medienbrüche / missing integration | 34% name missing system integration between sales, shop, ERP and CRM | [E] same |
| Speed pressure | 74% fear losing customers if requests are not answered the same day; 77% say AI has raised speed expectations | [E] same |
| Weak self-service | 56% offer only basic ordering; 33% offer comprehensive self-service | [E] same |
| Fax still in use | 82% of German firms (20+ staff) used fax in 2023; 33% often or very often (40% in 2022, 62% in 2018) | [E] Bitkom, 505 firms, 4 May 2023: https://www.bitkom.org/Presse/Presseinformation/Digital-Office-Faxen-Unternehmen |
| Fax, later figure | "62% still regularly use fax" is quoted in the easybill/YouGov coverage (Jun 2026), but the original source is unclear | [E, weak] https://www.ad-hoc-news.de/wirtschaft/e-rechnung-nur-jedes-vierte-unternehmen-bereit-fuer-pflicht/69474443 |
| Hiring for order entry | StepStone: about 2,089 "Auftragssachbearbeiter" and 2,111 "Vertriebsinnendienst" openings | [E] taken from demand-market-sizing.md: https://www.stepstone.de/jobs/auftragssachbearbeiter |
| Share of B2B sales through shops | 9.7% of German B2B sales go through online shops and marketplaces; about 15% in wholesale | [E] IFH Köln B2B-Marktmonitor 2023: https://www.ifhkoeln.de/b2b-marktmonitor/ |
| Buyers prefer online ordering | 73% of German B2B buyers prefer ordering online; phone and email each below 50% and falling | [E] Sana B2B-Käuferstudie 2025 (Sana is a vendor): https://www.sana-commerce.com/de/blog-de/b2b-e-commerce-statistik-deutschland/ |
| How German competitors describe the pain | Workist: "Critical talent shortage", "No time for sales", "Team burnout". Turian: "endlosem Copy-and-Paste", "lästiger Produktsuche", "unbeantworteten Anfragen". BI2run: "manuelle Auftragserfassung", "Korrekturschleifen und Rückfragen". it.conex: "manuelle Bestellbearbeitung", "Übertragungsfehler". | [E] https://workist.com/en ; https://www.turian.ai/de/use-cases/auftragserfassung ; https://bi2run.de/smartorders/ ; https://itconex.de/reorder |

Not found: an independent German figure for the share of orders arriving by fax, phone or email (ibi research, BGA, BVL and Handelsverband were not reached). The ECC figures are the best recent independent-ish measure (Intershop co-sponsored).

[I] German vocabulary for copy: "Auftragserfassung", "Vertriebsinnendienst entlasten", "Medienbrüche", "Copy-and-Paste ins ERP", "Rückfragen", "Fachkräftemangel", "Anfragen am selben Tag beantworten". The DACH pain is framed around **people and capacity** more than cost. This matches the finding in competitor-problem-claims.md that only the DACH vendors name labour shortage.

---

## 5. Trust and buying behaviour

| Finding | Source |
|---|---|
| 91% of German companies would prefer German cloud providers (53% use them today); 68% EU providers (45% use them); 8% US providers (71% use them) | [E] Bitkom Cloud Report 2026, 603 firms 20+ staff, fieldwork weeks 14 to 20 of 2026, published 17 Jun 2026: https://www.bitkom.org/Presse/Presseinformation/Deutsche-Cloud-4-von-10-Unternehmen-wuerden-Abstriche-in-Kauf-nehmen |
| 37% would accept drawbacks for a German-only cloud (27% in 2025); 12% would pay a 10 to 20% premium (7% in 2025); 85% think Germany is too dependent on US cloud providers | [E] same |
| 97% say server location matters when choosing a cloud provider; Germany 100% acceptable, other EU 68% preferred and 1% rejected, USA 51% rejected | [E] Bitkom, 20 Jul 2026, same survey: https://www.bitkom.org/Presse/Presseinformation/Unternehmen-wollen-Rechenzentren-Deutschland |
| DIHK: 46% of firms see complete dependence on non-EU countries for hardware and operating systems | [E] DIHK Digitalisierungsumfrage 2026: https://www.dihk.de/en/newsroom/digitalisation-2026-businesses-stay-the-course-171684 |
| Preference for German-language support or regional providers in software selection | **Not found** in this pass | n/a |

Channels:
- [E] IHK München runs an e-invoicing guide and a "Marktübersicht E-Rechnung" (provider directory) in its tax section: https://www.ihk-muenchen.de/ratgeber/steuern/steuerliche-sonderthemen/elektronische-rechnungen/ . [I] Getting listed in IHK provider overviews is a low-cost channel to test. The page content did not load, so listing criteria are unknown.
- [E] Bitkom Akademie runs paid e-invoicing workshops (https://bitkom-akademie.de/workshop/e-rechnung), so there is an education market around the topic.
- [E] The Business Central partner ecosystem already sells e-invoicing add-ons (BELWARE, FORNAV, B2Brouter links in 1e). [I] ERP partners are both competitors and a possible referral channel for integration work they do not want.
- Trade fairs (LogiMAT, Hannover Messe), Verbände (BGA) and Xing/LinkedIn usage: **not verified in this pass.**

[I] The value of an Austrian, German-speaking team is supported for **language and EU/data location**, not for nationality. Bitkom shows German firms prefer German, then EU, providers and care about where servers are. B2Bware should host in Germany or the EU, say so on every page, sell in German with native speakers and a German contract (DSGVO, AVV). "Österreichisches Team" is neutral to mildly positive (EU, same language, same time zone). The evidence does not support leading with "made in Austria".

---

## 6. DACH competitors: one line each

| Competitor | Pitch | Source |
|---|---|---|
| Workist | "Automate order entry - from inbox to ERP within seconds"; leads with talent shortage and "No time for sales" | https://workist.com/en |
| Turian | "Der erste KI-Agent für die Automatisierung von Kundenaufträgen"; ends copy-and-paste and unanswered requests | https://www.turian.ai/de/use-cases/auftragserfassung |
| it.conex re:order | "KI-basierte Bestellverarbeitung"; fewer transfer errors, DATEV/SAP/BC, 50 to 5,000+ orders a month | https://itconex.de/reorder |
| BI2run SmartOrders | "Aufträge & Bestellungen automatisch verarbeiten mit KI"; pay per processed document, live in about 5 days | https://bi2run.de/smartorders/ |
| P&M Agentur (OrderAI) | Agency for B2B commerce, portals and ERP interfaces plus own AI order processing; OrderAI integration EUR 8,000 one-off | https://www.pmagentur.com/en/ki-bestellverarbeitung |
| B2B Commerce Agentur | Published fixed prices: B2B shop from EUR 14,900, shop with ERP about EUR 39,000, maintenance EUR 249 to 990 a month | https://www.b2b-commerce-agentur.de/de/ |
| breadcrumb | Shopify B2B on Business Central, "Festpreise nach Workshop", EUR 19,000 to 30,000, support from EUR 290 a month | https://www.breadcrumb-solutions.de/software/shopify/ |
| Sana Commerce (DACH) | ERP-integrated B2B webstore for manufacturers | https://www.sana-commerce.com/de/blog-de/b2b-e-commerce-statistik-deutschland/ |

(Rows for P&M, B2B Commerce Agentur and breadcrumb are taken from gap-check-dach-us-uk.md.)

[I] No DACH competitor found links e-invoicing to order entry in its pitch. The order-capture vendors sell software; the agencies sell projects. "One accountable team for orders in and invoices out of the ERP" is an open angle, but see gap-check-dach-us-uk.md: the parts exist, so it is packaging, not a unique product.

---

## 7. Evidence vs inference summary

| Claim | Status |
|---|---|
| Mandate dates, formats, scope, EDI transition, email inbox is enough | Evidence (BMF FAQ, 23 Mar 2026) |
| 2027 cohort of about 482k to 797k firms, nearly all of the about 85.7k target firms | Inference from official statistics |
| Full readiness about 6 to 24% in mid-2026 | Evidence, mostly vendor-sponsored surveys |
| E-invoicing formats are commoditised in SME tools | Evidence for BC, Sage 100, Lexware, sevdesk, easybill, banqup; not verified for SAP B1, DATEV, abas, proALPHA, weclapp, JTL, Xentral |
| Paid pain is integration, routing, inbound matching and archiving | Inference, supported by BC limits, the ZDH archiving finding and KPMG "more than half plan service providers" |
| Mandate drives demand for digital ordering | No evidence; Order-X and Würth show it is possible |
| German firms prefer German/EU providers and German data location | Evidence (Bitkom Cloud Report 2026) |
| Inside sales admin overload and manual order entry are top DACH pains | Evidence (ECC KÖLN B2BEST, Sep 2026) |
| Austria and Switzerland have no near-term B2B e-invoicing urgency | Evidence for AT (EY, WKO); CH partly verified |

---

## 8. Recommendation (inference)

1. **Make DACH a lead market, with Germany as the target and Austria as the home base.** Reasons: a dated trigger (1 Jan 2027) covering nearly all target firms, a measured readiness gap, a documented admin and manual-entry pain in the exact segment (ECC, Sep 2026), and a clear buyer preference for German/EU providers that a German-speaking EU team with German hosting meets.
2. **Do not sell "e-invoicing" as a standalone product or monthly fee.** The format is included in the ERP or costs EUR 0 to 45 a month. Sell a fixed-price **"E-Rechnung-Check & Fix"** for firms whose invoices come from more than one system, a customised or older ERP, or a webshop: output validation, per-customer format and channel (email, Peppol), inbound XML into purchasing with PO matching, and an archive check. Price it as a project in line with DACH benchmarks (ERP connectors from about EUR 4,900; see gap-check-dach-us-uk.md), then a small monitoring fee.
3. **Use it as the door opener for the order routes.** Positioning line (German): "Aufträge rein, Rechnungen raus: sauber verbunden mit Ihrem ERP." The upsell is email/PDF order entry into the ERP and the B2B portal. Take the Order-X/Peppol angle as a forward-looking point, not as a claim that customers are asking for it.
4. **Tests (4 to 6 weeks, before 1 Jan 2027):**
   - Test A: a German landing page and cold email to about 200 German manufacturers and wholesalers on Business Central and Sage 100 (10 to 249 staff): "E-Rechnung ab 1.1.2027: Prüfen, ob Ihr ERP korrekt ausstellt, in 5 Tagen, Festpreis." Measure reply and booking rate against the same list with an order-entry message ("Vertriebsinnendienst entlasten: E-Mail- und PDF-Bestellungen direkt ins ERP").
   - Test B: approach 5 to 10 Business Central and Sage partners in Germany as a referral channel for integration jobs they do not want (multi-system invoicing, webshop invoices, inbound matching).
   - Test C: ask for a listing in IHK e-invoicing provider overviews (IHK München first).
   - Success signal: calls booked where the conversation moves from e-invoicing to order entry. If e-invoicing replies stay "our ERP does that", drop it as a lead and keep the deadline only as a line in the order-entry message.
5. **Austria and Switzerland:** use them for references and case studies (same language) but do not expect regulatory urgency before ViDA 2030. In Switzerland the order-channel pain (fax, email) exists, but the evidence is older.
6. **Trust copy:** "Deutschsprachiges Team, Hosting in Deutschland/EU, DSGVO und AVV, fester Ansprechpartner". Avoid leading with Austrian origin.

---

## 9. Not verified in this pass (search budget exhausted)

- Native e-invoicing scope and pricing for SAP Business One, DATEV, abas, proALPHA, weclapp, JTL-Wawi, Xentral.
- Prices for Comarch, Pagero, Tungsten/Kofax and DATEV e-invoicing services; the Sage 100 Komfortpaket price.
- Any change to the 2027 deadline after the ZDH request of July 2026.
- DIHK/IHK e-invoicing readiness surveys for 2025 and 2026; Sage, Lexware or DATEV readiness surveys.
- Independent figures on the share of German B2B orders by fax, phone or email (ibi research, BGA, BVL, Handelsverband).
- Surveys on German-language support or regional preference in software (as opposed to cloud) vendor selection; trade fair and association channel effectiveness (LogiMAT, Hannover Messe, BGA, Xing/LinkedIn).
- Swiss federal e-invoice threshold and start date; the Austrian B2G start date from a primary source.
