---
name: B2Bware
description: ERP-to-commerce specialist for UK trade sellers. Messy ERP data made to work wherever customers buy, done for you.
colors:
  green: "#0B6B4E"
  green-deep: "#084F3A"
  green-bright: "#12875F"
  green-tint: "#E4F3EC"
  mint: "#9FE3C5"
  on-green: "#D8F1E6"
  navy: "#0A2540"
  navy-2: "#1F3A56"
  slate: "#48596B"
  slate-2: "#667788"
  white: "#FFFFFF"
  mist: "#F5F7F8"
  mist-2: "#ECF0F2"
  panel-head: "#FBFCFC"
  line: "#E1E6EA"
  line-2: "#CDD5DB"
  red: "#C23A2E"
  red-tint: "#FCECEA"
  red-wash: "#FFF8F7"
  amber: "#9A6200"
  amber-tint: "#FBF1DC"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(42px, 6vw, 80px)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(32px, 4.2vw, 52px)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(28px, 3vw, 38px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title-sm:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.022em"
  lead:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13.5px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  data:
    fontFamily: "Red Hat Mono, ui-monospace, Consolas, monospace"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
    fontFeature: "tnum"
  data-sm:
    fontFamily: "Red Hat Mono, ui-monospace, Consolas, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "tnum"
rounded:
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  pill: "999px"
spacing:
  gutter: "28px"
  gutter-sm: "16px"
  section: "104px"
  block: "88px"
  column-gap: "72px"
  card: "26px"
  row: "12px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 20px"
  button-primary-hover:
    backgroundColor: "{colors.navy-2}"
  button-on-green:
    backgroundColor: "{colors.white}"
    textColor: "{colors.green-deep}"
    rounded: "{rounded.pill}"
    padding: "14px 20px"
  button-on-green-hover:
    backgroundColor: "{colors.green-tint}"
  button-outline-on-green:
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 20px"
  button-app:
    backgroundColor: "{colors.green}"
    textColor: "{colors.white}"
    rounded: "9px"
    padding: "10px 14px"
  button-app-disabled:
    backgroundColor: "{colors.mist-2}"
    textColor: "{colors.slate-2}"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    rounded: "{rounded.md}"
    padding: "11px 12px"
  pill-ok:
    backgroundColor: "{colors.green-tint}"
    textColor: "{colors.green}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  pill-hold:
    backgroundColor: "{colors.amber-tint}"
    textColor: "{colors.amber}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  pill-wrong:
    backgroundColor: "{colors.red-tint}"
    textColor: "{colors.red}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  product-frame:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "{spacing.card}"
  tile:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.lg}"
    padding: "18px 16px"
  foundation-band:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.xl}"
    padding: "32px"
---

# Design System: B2Bware

## Overview

**Creative North Star: "The Clean Order"**

B2Bware sits in the established SaaS category standard and is executed at the craft level of Stripe and Intercom: a white page, navy ink, and one committed green field that opens and closes the story. The world's material is the product itself. Instead of screenshots or illustrations, the page draws working product UI in HTML: ERP exports with the wrong units flagged, a trade portal with contract prices, an order console that goes from wrong to right. Those drawn frames carry the only real depth on the page.

Density is calm at page level (104px section rhythm, generous 72px column gaps) and dense inside the product frames (12 to 14px rows, mono data, hairline dividers), which is how the world says "we sweat the details so you don't". Trade reality is shown, not described: codes, prices and pack sizes appear in Red Hat Mono and nowhere else.

Status is the second colour language. Green means correct and posted, amber means held, red means wrong. These appear as soft tinted pills and washes, never as loud fills.

**Key Characteristics:**
- White ground, navy ink, a single saturated green field for hero and close.
- Product UI drawn in HTML is the imagery; no photos, no stock illustrations.
- Hanken Grotesk for everything readable; Red Hat Mono only for ERP data.
- Pill-shaped marketing buttons, softly rounded app surfaces.
- Tinted status triad (green, amber, red) with sentence-case labels.

## Colors

A navy-on-white SaaS palette with one committed green field and a tinted green, amber, red status triad.

### Primary
- **Field Green** (#0B6B4E): the committed brand field. Full-bleed background of the site header, hero and closing section; also the B2Bware hub mark, the app "Post" button, completed step markers and the 2px rule above promise columns. Also the "ok" text colour in status pills.
- **Deep Field Green** (#084F3A): text on white buttons that sit on the green field.
- **Signal Green** (#12875F): focus rings, input focus borders and the animated flow line. The interactive voice of green.
- **Green Tint** (#E4F3EC): background of ok pills, icon wells, the "matched" arrow strip and success notes; hover fill of white-on-green buttons.
- **Mint** (#9FE3C5): highlight only on dark or green grounds: the key fact in the navy customer story, checkmarks in the close list, text selection, and the soft radial glow in hero and close.
- **On-Green** (#D8F1E6): secondary text on the green field (sublines, nav links).

### Neutral
- **Navy Ink** (#0A2540): all headings and body text, primary buttons, the footer, the foundation band and the featured customer story.
- **Navy Hover** (#1F3A56): hover state of navy buttons; text inside example boxes.
- **Slate** (#48596B): secondary copy, section sublines, list descriptions.
- **Slate Light** (#667788): tertiary text in product UI (column headers, meta, crumbs, struck-through prices).
- **White** (#FFFFFF): the page ground and every product frame.
- **Mist** (#F5F7F8): alternating section band and app sidebars.
- **Mist Deep** (#ECF0F2): segmented control track, product thumbnail wells, disabled buttons.
- **Panel Head** (#FBFCFC): the header strip and footer strip of drawn tables and panels.
- **Hairline** (#E1E6EA): all 1px dividers and card borders.
- **Hairline Strong** (#CDD5DB): input borders, quantity boxes, inactive step rings, dashed "more" tiles.

### Status
- **Wrong Red** (#C23A2E) on **Red Tint** (#FCECEA): wrong prices, wrong units, invalid form fields. **Red Wash** (#FFF8F7) tints a whole wrong table row or cell.
- **Hold Amber** (#9A6200) on **Amber Tint** (#FBF1DC): credit holds and items waiting for approval.

### Named Rules
**The One Field Rule.** Green is used as a full-bleed field only at the top (header plus hero) and bottom (close) of a page. Between them the page is white and mist; green returns only as small signals (pills, icons, markers).

**The Status Triad Rule.** Red, amber and green mean wrong, held and correct. They appear as tinted pills or washes with an icon and a word, never as decoration and never without a text label.

## Typography

**Display Font:** Hanken Grotesk (with system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** Hanken Grotesk
**Label/Mono Font:** Red Hat Mono (with ui-monospace, Consolas, monospace), tabular numerals

**Character:** One confident grotesque carries every voice from 80px headline to 12px table meta, tightened with negative tracking at large sizes. The mono is a data material, not a style: it marks ERP codes, prices, quantities and totals so the reader sees real trade data.

### Hierarchy
- **Display** (800, clamp(42px, 6vw, 80px), 1.02, -0.035em): the hero headline only, set as two stacked lines.
- **Headline** (700, clamp(32px, 4.2vw, 52px), 1.06, -0.03em): section headings; the close heading steps up to clamp(34px, 4.6vw, 58px).
- **Title** (700, clamp(28px, 3vw, 38px), 1.1, -0.025em): service headings inside a section.
- **Title Small** (700, 19 to 20px, 1.25): list items, promise columns, steps, form titles.
- **Lead** (400, 19px, 1.55, max 42 to 58ch): section sublines and hero subline, in slate or on-green.
- **Body** (400, 17px, 1.6): running copy; 15.5 to 16px inside lists.
- **Label** (600, 13 to 14px, sentence case, normal tracking): panel headers, pills, column headers, form labels.
- **Data** (Red Hat Mono 500, 14px, tabular): prices and totals. **Data Small** (Red Hat Mono 400, 12.5px): part codes and account numbers.

### Named Rules
**The Mono Is Data Rule.** Red Hat Mono is reserved for codes, prices, quantities, account numbers and ERP values. Never for headings, labels or prose.

**The Sentence Case Rule.** All labels, headers and pills are sentence case at normal letter-spacing. Headings over 28px take negative tracking; nothing takes positive tracking.

## Layout

A centred 1200px container with 28px gutters (16px under 640px). Sections breathe at 104px vertical padding and alternate white and mist bands. Content is organised as asymmetric two-column splits (ratios around 0.9 : 1.4 or 1 : 1.1) with 64 to 72px gaps: copy on one side, a drawn product frame on the other, flipping sides between consecutive service blocks spaced 88px apart. Long explanatory lists use a sticky heading column beside a hairline-divided list.

The hero is a green field with the headline left and subline plus CTAs right; below it a white product frame overlaps 120px down into the white page (64px under 640px), with the following section padded to receive it.

Breakpoints: 980px collapses two-column splits to one column and the flow diagram to a vertical stack; 920px swaps nav links for a menu button; 860px hides the app sidebar and shows a chip picker; 640px reflows tables into stacked rows; 480px single-columns the remaining grids.

## Elevation & Depth

Page chrome is flat: sections, lists and tiles use hairline borders and tonal bands (white, mist) for separation. Shadows belong to the drawn product UI, which floats above the page as if it were the real application.

### Shadow Vocabulary
- **Frame Lift** (`box-shadow: 0 2px 4px rgba(10,37,64,.06), 0 28px 64px -20px rgba(10,37,64,.38)`): the hero flow panel, the order console and the booking form. The largest, most important product surfaces.
- **Card Lift** (`box-shadow: 0 1px 2px rgba(10,37,64,.06), 0 10px 28px -14px rgba(10,37,64,.22)`): service visual frames.
- **Selected Item** (`box-shadow: 0 1px 2px rgba(10,37,64,.08)`, up to `0 1px 3px rgba(10,37,64,.14)` on segmented controls): the active item inside app UI (nav row, inbox message, segment).
- **Hub Glow** (`box-shadow: 0 10px 24px -10px rgba(11,107,78,.6)`): the green B2Bware hub mark in the flow diagram.

### Named Rules
**The Product Floats Rule.** Only drawn product UI and the booking form cast shadows. Marketing content (lists, tiles, promises, steps) stays flat with hairlines. All shadows are navy-tinted and diffuse, never grey or hard-edged.

## Shapes

Two families. Marketing actions are full pills (999px): buttons, the mobile menu button, tech chips on the navy band, status pills. Surfaces are softly rounded rectangles on a scale of 16px (large product frames, feature panels, bands, form card), 14px (service visuals), 12px (panels, tiles, product rows), 10px (inputs, example boxes, thumbnails, notes) and 8px (small app controls). App-internal buttons use a squarer 9px radius to read as software, not marketing. Borders are 1px hairlines; 2px only for step rings and promise rules. Icons are 1.8px stroke line icons, rounded caps, inline SVG.

## Components

### Buttons
Confident, rounded, and few: at most two per group.
- **Shape:** full pill (999px), 600 weight at 16px, 14px by 20px padding.
- **Primary on white:** navy fill, white text; hover shifts to navy hover.
- **Primary on green:** white fill, deep green text; hover fills green tint.
- **Secondary on green:** transparent with a 45% white border, white text; hover adds a 10% white wash.
- **App button** (inside drawn product UI): green fill, white text, 9px radius, 14px text; disabled is mist deep with slate light text.
- **Focus:** 2px signal green outline, 3px offset. Transitions are colour-only, 0.2s on the out-expo curve.

### Chips / Status Pills
- **Style:** 12.5 to 13px, 600 weight, pill radius, 3px by 9px padding, a 13 to 14px stroke icon plus a word.
- **Variants:** ok (green on green tint), hold (amber on amber tint), wrong (red on red tint). Tech chips on navy use a 1px #2C4966 outline pill instead.

### Cards / Containers
- **Corner Style:** 12px for tiles and rows, 16px for large frames and bands.
- **Background:** white on mist bands; navy for the foundation band and featured story.
- **Shadow Strategy:** flat unless it is drawn product UI (see Elevation & Depth).
- **Border:** 1px hairline; dashed hairline strong for the "and more" tile.
- **Internal Padding:** 16 to 18px for tiles, 26 to 36px for frames and bands.

### Inputs / Fields
- **Style:** white, 1px hairline strong border, 10px radius, 11px by 12px padding, 16px text; labels 14px 600 stacked 6px above.
- **Focus:** border turns signal green with a 3px soft ring (`0 0 0 3px rgba(18,135,95,.18)`).
- **Error:** red border; red helper note. Success note sits in a green tint box.

### Navigation
- Sits on the green field: white logo lockup (800 weight, 21px), on-green links at 15.5px 500 turning white on hover, and a white pill CTA. Under 920px links collapse to a 42px round outline menu button that opens a stacked list of 17px 600 links with a 10% white hover wash.

### Drawn Product Frame (signature)
The world's imagery. A white frame with a panel-head strip (13.5px 600 title plus a lighter slate descriptor), hairline-divided rows, mono data cells, and status pills. Wrong values are red on a red wash; fixed values show the old price struck through in slate light before the new one. The order console variant adds a mist sidebar, a segmented "before / after" control and a footer summary with a total and a post button. Rows settle in with a short blur-to-sharp stagger (0.7s, 70ms per row) when state changes.

### Step Track
Five numbered 40px circles on a 2px line; free steps are filled green with the track green up to them, paid steps are white with a hairline strong ring. Collapses to a vertical track under 980px.

## Do's and Don'ts

### Do:
- **Do** open and close each page on the field green (#0B6B4E) and keep everything between white and mist.
- **Do** show the product by drawing it in HTML with real-looking trade data: part codes, contract prices, pack sizes, accounts.
- **Do** set every code, price and quantity in Red Hat Mono with tabular numerals, and nothing else.
- **Do** mark state with the status triad as tinted pills that carry an icon and a word.
- **Do** keep shadows on product frames and the booking form only, navy-tinted and diffuse.
- **Do** use pill buttons for marketing actions, at most one primary and one secondary per group.
- **Do** honour reduced motion: the flow line and row settle animations switch off.

### Don't:
- **Don't** use green as a full-bleed field in the middle of a page; mid-page emphasis uses the navy band.
- **Don't** use Red Hat Mono for headings, labels or body text.
- **Don't** add uppercase tracked labels or eyebrow text above headings; headings stand alone with a slate subline beneath.
- **Don't** use photos, stock illustrations or fake screenshots; the drawn UI is the imagery.
- **Don't** use red, amber or green as decoration without a status meaning.
- **Don't** cast shadows on marketing lists, tiles, promise columns or steps; separate them with hairlines and tonal bands.
- **Don't** use hard offset or grey shadows.
