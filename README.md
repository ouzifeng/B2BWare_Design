# B2Bware landing pages

Campaign landing pages for B2Bware. The main site stays in Webflow; these pages are built separately in Astro (static output) and are fully self-contained: the Webflow stylesheet, fonts, images and nav scripts are copied into this project, so nothing is loaded from Webflow at runtime.

Styling comes from the Webflow shared stylesheet (`public/css/webflow.css`) so pages match the main site. Page-specific rules live in `public/css/page.css`.

## Run

```
npm install
npm run dev      # http://localhost:4321 (redirects to /b2b)
npm run build    # static site in dist/
npm run preview  # serve dist/
```

## Structure

- `src/config.ts`: `SITE_URL`, the base for links back to the main site (default `https://b2bware.webflow.io`, switch to `https://b2bware.com` when live).
- `src/layouts/Base.astro`: html shell (`title`, `description` props, noindex), Webflow CSS, header, footer and nav scripts from `public/js/`.
- `src/data/b2b.ts`: all copy for the b2b page as data.
- `src/pages/`: one file per landing page. `index.astro` redirects to `/b2b`.
- `public/css`, `public/fonts`, `public/images`, `public/js`: local copies of Webflow assets.

## Components

Layout (`src/components/layout/`, verbatim copies of the live site markup, links prefixed with `SITE_URL`)
- `Header.astro`: full site nav with mega menus, language switcher and burger. No props.
- `Footer.astro`: full site footer. No props.

UI (`src/components/ui/`)
- `Button.astro`: link button. Props: `href`, `variant` (primary | secondary), `size` (default | large). Label via slot.
- `Section.astro`: section + container with optional header. Props: `id`, `tone` (white | light | dark), `title`, `intro`, `class`.
- `SectionHeader.astro`: heading + lead. Props: `title`, `intro`, `dark`, `level` (2 | 3).
- `Card.astro`: card box. Props: `class`. Content via slot.
- `CheckList.astro`: ticked list. Props: `items` (string[]).
- `Tag.astro`: green pill label (slot).
- `Chip.astro`: red code chip (slot).
- `StepCard.astro`: numbered step. Props: `number`, `title`, `text`, `free`.
- `RouteCard.astro`: image card with link. Props: `image`, `alt`, `title`, `text`, `linkText`, `href`.
- `FaqItem.astro`: question and answer card. Props: `q`, `a`.
- `CustomerCard.astro`: customer proof card. Props: `name`, `meta`, `text`.
- `PriceCard.astro`: price card. Props: `tag`, `title`, `text`.
- `OrderMock.astro`: illustrative order card. Props: `label`, `customer`, `meta`, `badge`, `rows` ({item, qty, codes, ok}[]), `footLeft`, `footRight`, `caption`.

Forms (`src/components/forms/`)
- `OrderCheckForm.astro`: free order check form. Props: `endpoint` (default `#`). Currently shows a preview message on submit; destination (HubSpot or Pipedrive) is not decided.

Sections (`src/components/`), each takes a `data` prop: `Hero`, `Doors`, `ToolsStop`, `HowItWorks`, `Faq`, `Proof`, `Pricing`, `OrderCheck` (also `endpoint`).

## Add a new landing page

1. Copy `src/data/b2b.ts` to `src/data/<name>.ts` and change the copy (same shape).
2. Copy `src/pages/b2b.astro` to `src/pages/<name>.astro`, import the new data file, reorder or drop sections as needed.
3. Need a new kind of block? Add a component under `src/components/` built from the `ui/` parts.
4. Put any new images in `public/images/` and reference them as `/images/<file>`.
