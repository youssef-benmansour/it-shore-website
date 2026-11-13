---
name: IT Shore
description: Votre partenaire tech au service de vos métiers — a French B2B dev/ERP/AI consultancy site.
colors:
  graphite: "#313131"
  graphite-deep: "#404142"
  field-sage: "#94a750"
  field-sage-wash: "rgba(148, 167, 80, 0.1)"
  report-green: "#5f7a2e"
  report-green-deep: "#4c6225"
  ink: "#000000"
  paper: "#f9f9f9"
  white: "#ffffff"
  cloud: "#f5f5f5"
  mist: "#e0e0e0"
  slate: "#353535"
  signal-void: "#0b0f0d"
  signal-raised: "#121a15"
  ia-panel: "rgba(255, 255, 255, 0.04)"
  ia-panel-border: "rgba(255, 255, 255, 0.09)"
  console-text: "#f3f5f1"
  console-text-dim: "#a7b3ac"
  signal-lime: "#8ee05a"
  signal-lime-soft: "rgba(142, 224, 90, 0.12)"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 300
    lineHeight: 1.15
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "2rem"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'JetBrains Mono', 'SFMono-Regular', Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.03em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "14px"
  xl: "16px"
  full: "50%"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "20px"
  lg: "30px"
  xl: "40px"
  2xl: "60px"
components:
  button-primary:
    backgroundColor: "{colors.report-green}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.report-green-deep}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.report-green}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.report-green}"
    textColor: "{colors.white}"
---

# Design System: IT Shore

## Overview

**Creative North Star: "The Field Report"**

IT Shore reads like a technical consultant's field report by day and a live telemetry dispatch by night — two deliberate, coherent expressions of the same practical, no-nonsense partner. The main site (marketing pages, contact, method) is the **Day World**: an off-white paper background, graphite ink text, and a single Report Green accent doing all the calling-to-action, styled like the report itself — sober, structured, timeline- and diagram-driven. The AI landing page (`ia/parlons-ia.html`) is the **Night World**: near-black backgrounds, dim console-toned body text, and a saturated Signal Lime accent with pulsing "network node" animations — the same report read off a monitoring console, reserved specifically for talking about AI and automation. The two worlds never mix on the same page; the accent hue itself (muted green vs. saturated lime) is the tell for which register you're in.

Both worlds share the same skeleton: Poppins for every headline and body of text, a consistent hover-lift language on every clickable surface, and a tight 4px/8px/14–16px radius ladder. The Night World adds one accent typeface — JetBrains Mono — but strictly for numerals and technical labels (stats, counters, step markers), never for headlines or reading text; it's a second character, not a second voice. Nothing here is decorative for its own sake — every color and motion choice ties back to "we audit, then we build," the site's own stated method.

**Key Characteristics:**
- One accent color per world (Report Green by day, Signal Lime by night) — never both on the same page.
- Flat-at-rest surfaces that lift and deepen their shadow on hover; this is the site's signature interaction, not an occasional flourish.
- A tight radius ladder (4px controls, 8–16px containers, full-round icon badges) — no in-between values.
- Poppins carries every headline and body of text at every weight from 300 (display) to 700 (emphasis). JetBrains Mono is the one deliberate exception — Night World numerals and technical labels only (see Typography).

## Colors

The palette is a narrow, confident two-tone system per world rather than a broad brand palette — each world has exactly one accent, and everything else is structural neutral.

### Primary
- **Report Green** (`#5f7a2e`): the Day World's only call-to-action color — every button, active state, hover accent, and progress indicator on the main site and contact page. Never used for body text.
- **Report Green Deep** (`#4c6225`): Report Green's hover/pressed state. Always paired with Report Green, never used standalone.
- **Signal Lime** (`#8ee05a`): the Night World's equivalent — the AI page's only accent, used for eyebrows, stat values, network-node animation, and its two button variants. Considerably more saturated than Report Green; this saturation jump is what signals "you're in the AI world now."

### Secondary
- **Field Sage** (`#94a750`): a softer olive used for section-title underlines and a few structural accents (success-checkmark ring) where a full CTA-strength Report Green would be too loud.
- **Field Sage Wash** (`rgba(148, 167, 80, 0.1)`): the soft background tint behind service icons, tags, active FAQ rows, and contact-icon badges — Field Sage diluted to a wash rather than a fill.

### Neutral (Day World)
- **Graphite** (`#313131`): headings, default nav-underline color, icon accents, blog date badges — the structural "ink" color that is not the accent.
- **Graphite Deep** (`#404142`): Graphite's hover state on a handful of text links.
- **Ink** (`#000000`): true-black body text (`--text-color`) — deliberately pure black, not a soft gray.
- **Paper** (`#f9f9f9`, `--paper` token): the page background — intentionally a hair off-white from pure white, distinct from card surfaces.
- **White** (`#ffffff`): card, header, and dropdown surfaces — always a shade brighter than the page background.
- **Cloud** (`#f5f5f5`): placeholder/fallback background behind not-yet-loaded project images.
- **Mist** (`#e0e0e0`): borders, dividers, inactive dots, the unfilled timeline line.
- **Slate** (`#353535`): muted/secondary text (subtitles, card body copy, captions).

### Neutral (Night World, scoped to `.ia-page`)
- **Signal Void** (`#0b0f0d`): the single background color for the entire page, top to bottom — hero through footer share one flat value with no per-section shift, so there's no visible seam between sections. Depth and separation come from component surfaces (IA Panel) and content rhythm, never from alternating the page background.
- **IA Panel** (`rgba(255, 255, 255, 0.04)`) / **IA Panel Border** (`rgba(255, 255, 255, 0.09)`): near-invisible glass-panel fill and hairline border for cards floating on Signal Void/Raised.
- **Console Text** (`#f3f5f1`) / **Console Text Dim** (`#a7b3ac`): primary and secondary text on dark backgrounds — never pure white, keeping the console feel slightly muted.

### Named Rules
**The Single Accent Rule.** Each world gets exactly one actionable color — Report Green by day, Signal Lime by night. Graphite/Ink and Console Text are structural, never clickable fills. If a design needs a second "pop" color, it's wrong; reach for the Field Sage wash or a panel border instead.

## Typography

**Body & Display Font:** Poppins (weights 300–700), with `sans-serif` fallback — every headline and every body of text, on both worlds, no exception.

**Accent Font (Night World only):** JetBrains Mono (weights 500, 700), with a `Consolas, monospace` fallback, via the `--ia-mono` custom property. Scoped strictly to numerals and short technical labels — stat values, the Resolver's step counter, Rail step markers, solution-card reference tags (`IA·01`). It never appears in a headline, a paragraph, or a button — the moment it would carry a sentence instead of a number or a short code, that's a sign it's the wrong tool for that spot.

**Character:** A single geometric sans carries the whole system at every register — bold weight (700) for the biggest display moments, medium/semibold (500–600) for anything actionable or emphasized. The pairing reads clean and slightly technical, never warm or editorial. JetBrains Mono's tabular numerals add a console-readout texture to the Night World's data points without touching the voice of the writing itself.

### Hierarchy
- **Display** (700, `clamp(2.5rem, 5vw, 4rem)`, 1.15): hero headlines on both worlds — the Day hero's `<h1>` and the Politique de confidentialité page's `<h1>` (2.5rem/700), the Night hero's `<h1>` (3.1rem/700). Bold, not light — see the Wordmark Echo rule below for why.
- **Headline** (400, 2rem, 1.2): every `.section-title` — always centered, always followed by a short accent-colored underline rule (80px × 4px).
- **Title** (600, 1.2–1.5rem, 1.4): card and component headings (service cards, testimonial names, FAQ questions, timeline items).
- **Body** (400, 1rem, 1.6): default paragraph text everywhere; the base `line-height: 1.6` is set once on `body` and inherited throughout.
- **Mono Label** (JetBrains Mono, 500–700, 0.7–0.85rem, tabular numerals): Night World stat values, resolver/rail counters and markers, dossier reference tags. The one place the type system deliberately steps outside Poppins.
- **Component-scoped sizes (Night World signature components only):** the Signal Story and Sector Ideas Gallery each carry a handful of one-off Poppins sizes (the Signal Story's pain-point/solution list items at 1.15rem, its `Résultat` beat's sentence at 1.35rem, section/story heads at 2.1rem, intro copy at 1.05rem, card copy at 0.9rem, the final CTA head at 2.3rem) that don't map onto the five roles above. These aren't drift — each size is scoped to exactly one component and reused consistently within it; treat new one-off Night World component sizes the same way rather than forcing everything onto the five-role ramp.

### Named Rules
**The 4px Corner Rule.** Nothing sits between 4px and 8px. If a new component needs "a little rounder than a button but not a full card," that's a sign it should become a card (8px+), not a new radius value.

**The Wordmark Echo.** The `itshore_logo.jpeg` mark itself sets a bold/light contrast — "IT" bold and tight, "SHORE" light and widely tracked, both in the site's own graphite/Field-Sage-adjacent colors — and the site's type system was deliberately tuned to echo it rather than fight it: Display headlines moved from a light 300 to bold 700 (mirroring "IT"'s weight), and every small reference-tag/label component (`.faq-number`, `.project-number`, `.hero-problems-counter`, `.ia-service-number`, `.ia-service-duration`, `.ia-story-phase-tag`, `.ia-story-tag`, `.ia-idea-sector`) carries `letter-spacing: 0.08em` (up from the 0.03–0.05em they started at), mirroring "SHORE"'s open tracking. A new small uppercase/mono label should default to this same 0.08em rather than inventing its own tracking value.

## Layout

No global `.container` max-width is set — `.container` is `width: 100%` with `20px` horizontal padding only; content width is constrained per-section instead (`.hero-grid` uses explicit left/right padding, `.timeline`/`.faq-list` cap at 700–900px, `.mega-menu` is a fixed 900px, the homepage's `.expertise-ledger` caps at 1140px). Treat this as the established pattern: new sections should set their own max-width rather than relying on `.container` to do it. The Testimonial Wall is the one deliberate exception — it breaks out to full viewport width instead of capping (see Testimonial Wall below). Note: `.testimonial-grid`/`.testimonial-column`/`.testimonial-author`/`.author-info` still exist in the shared stylesheet purely for `contact.html`'s `.contact-testimonial-card` grid — the homepage no longer uses them.

The homepage hero (`.hero-grid`) uses a two-column grid (`1.1fr 0.9fr`) that collapses to one column under 992px; the Night World's hero (`.ia-hero-v2`) is single-column by design — it's a short, direct question, not a copy-plus-widget layout, so it doesn't need the split. Card grids (services, testimonials, blog, key figures) are CSS Grid with 2–4 columns, stepping down to 2 then 1 column at 1200px and 768px respectively. The recent-projects section breaks the grid pattern deliberately: a horizontally-scrollable, snap-aligned, mouse-draggable track (a genuine signature interaction, not a fallback for a broken grid).

Section vertical rhythm is a flat `30px 0` by default, expanding to `70px 0` under 768px (mobile gets more breathing room, not less — sections stack, so each needs to read as its own block).

## Elevation & Depth

Flat at rest, lifted on interaction — there is no ambient/resting shadow philosophy here beyond the one default card shadow; depth is earned through state, not applied at rest for decoration.

### Shadow Vocabulary
- **Resting card** (`box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1)`, the `--shadow` token): the default for every card-like surface (service cards, testimonials, FAQ items, timeline content, figure items, blog cards, the contact form panel).
- **Hover-deepened** (`0 15px 30px rgba(0, 0, 0, 0.15)` to `0 20px 40px rgba(0, 0, 0, 0.12)`, varies slightly by component): paired with a `translateY(-5px to -15px)` lift on hover — the shadow always grows softer and larger, never just darker.
- **Accent glow** (`0 8px 15px rgba(148, 167, 80, 0.35)` on Report Green buttons; `0 10px 25px rgba(142, 224, 90, 0.25)` on Signal Lime buttons): buttons get a colored glow on hover instead of a neutral shadow — the one place shadow color matches the accent rather than staying neutral gray.

### Named Rules
**The Hover-Lift Rule.** Every clickable card and button lifts (`translateY` negative) and deepens its shadow on hover. A static hover state (color-only, no motion) is an incomplete implementation anywhere in this system.

**The `.reveal` fix.** The generic `.reveal`/`.reveal.active` scroll-in rule (opacity 0 → 1, `translateY(24px)` → `0`, driven by `initScrollReveal()` in `main.js`) only ever existed scoped to `.ia-page` — the Day World pages (`index.html`, `contact.html`, the legal page) had no base rule for it at all, so every element marked `.reveal` there rendered fully visible from load with no fade-in; `main.js` was dutifully toggling an `.active` class that had nothing to reveal. Fixed by adding the unscoped `.reveal`/`.reveal.active` pair to the shared root `styles.css`, matching the Night World version exactly. If a `.reveal` element is ever added to a new page, verify this base rule is in scope for it.

**Reduced-Motion Coverage.** Every continuous/infinite animation on the site — the Client Logo Marquee, the scroll-indicator's bouncing chevrons, the homepage hero's canvas particle field, the Night World's pulsing network nodes, and the generic `.reveal`/`.ia-page .reveal` scroll-in transform — is paired with a `@media (prefers-reduced-motion: reduce)` rule (or, for the JS-driven canvas particles, an equivalent `window.matchMedia` check before the effect ever starts). A new continuous or auto-playing animation is incomplete until it has a reduced-motion counterpart; this was added wholesale after an audit found only one of roughly six qualifying animations (the Testimonial Wall) had one.

## Shapes

A tight radius ladder, no freeform values: **4px** for anything rectangular and interactive (buttons, form inputs, tags/chips); **8–16px** for containers (cards at 8px, the mega-menu at 16px, the hero-problems panel and AI track cards at 14px, project cards at 16px); **fully circular (50%)** for icon badges, avatars, dots, and the diagram step-nodes; **pill (999px)** for small numeric/counter badges on a fixed-height rectangle, where a true 50% would distort into an ellipse (the recent-projects card's "01" index badge, the floating header capsule). Borders are hairline (1px, Mist) for dividers and card outlines, stepping up to a deliberate 4px accent-colored top border as a signature detail (the homepage's hero-problems card, marking it as "the answer panel").

**Night World's own ladder runs slightly softer** — 6px (the two IA buttons), 14px (the Signal Story's sticky photo frame and stat card, the Sector Ideas Gallery's cards) — never reconciled to the exact Day World numbers because the two worlds were built at different points and nobody has needed them to match pixel-for-pixel. Treat 6/14px as the Night World's real, intentional scale rather than drift to fix.

## Components

For each component, lead with a short character line, then specify shape, color assignment, states, and any distinctive behavior. Small rectangular badges (5px 10px padding, Field Sage Wash background, 4px radius) appear inside Service and Project cards to tag categories — they're a detail of those cards, not documented here as a standalone component.

### Buttons
- **Shape:** 4px radius (Day World); 6px on the Night World's dedicated `.btn-ia-primary`/`.btn-ia-secondary` — the one place radius nudges up, matching the slightly more relaxed dark-mode register.
- **Primary:** solid Report Green (Day) / solid Report Green with Signal Lime glow (Night), white text, `12–14px` vertical / `28–30px` horizontal padding. Hover: darker fill + `translateY(-3px)` + accent-colored glow shadow.
- **Secondary/Ghost:** transparent fill, 2px accent-colored border, accent-colored text. Hover inverts to a solid accent fill (Day) or fills with the accent-soft wash (Night, `.btn-ia-secondary`) rather than inverting fully — a deliberate softer treatment for the Night World's secondary action.

### Cards
- **Corner Style:** 8px (service/testimonial/blog/FAQ/figure cards), 16px (recent-project cards), 14px (Night World's `.ia-track`/`.ia-process-step` panels).
- **Background:** White on Day World cards; `IA Panel` (near-transparent white wash) on Night World cards, always with a hairline `IA Panel Border` since there's no shadow to read against a dark ground.
- **Shadow Strategy:** see Elevation & Depth — resting shadow on Day cards only; Night cards use the border instead of a shadow (shadows don't read on near-black).
- **Internal Padding:** 30–40px is the norm for primary content cards; compact variants drop to 5–20px.

### Inputs / Fields (contact form only)
- **Style:** 1px Mist border, 4px radius, white background, Poppins body text.
- **Focus:** border shifts to Graphite + a colored focus ring (`box-shadow: 0 0 0 3px rgba(148, 167, 80, 0.25)`) — no outline removal without a replacement ring.
- **Floating label variant exists** (`.form-label` rides inside the field until focus/fill, then jumps above it) but is only wired up via a `focused`/`:not(:placeholder-shown)` pattern split across two stylesheets — confirm both are loaded together before reusing this pattern elsewhere.

### Navigation
- **Style:** a floating capsule, not an edge-to-edge bar — inset 16px from the top and both sides, capped at 1180px wide and centered, `border-radius: 999px` (pill, clamped to half its own height). Translucent white (`rgba(255,255,255,0.75)`) with `backdrop-filter: blur(16px)` — content scrolling underneath blurs through it rather than vanishing behind an opaque edge — plus a faint Report Green-tinted hairline border (`rgba(95,122,46,0.16)`, not neutral gray) and a deliberately present shadow for real elevation. A separate full-width `.header-blur-mask` layer sits just behind the capsule, blurring the entire top strip of the viewport (not just the pill's own shape) and fading out via a mask-image gradient so scrolling content doesn't hit a visible sharp/blurred seam outside the capsule's edges. Scrolling deepens the shadow further rather than changing the capsule's shape or position. Nav links get a 2px accent underline that grows from 0 to full width on hover/active, rather than a color change alone. The single "Parlons IA" link is permanently accent-colored (`nav-highlight`) to stand out from the rest of the nav even at rest. The header CTA (`.cta-button .btn-primary`) is sized down from the generic button — full-size, it visually outweighs a 68px-tall capsule.
- **Mobile:** the capsule shrinks its insets (12px) and height (64px); the hamburger toggle reveals a full-height slide-in panel from the left, offset to start below the capsule's actual footprint rather than a hardcoded old header height; the mega-menu becomes a plain stacked list inside it.
- **Stays light on `ia/parlons-ia.html` too.** The header keeps the exact same translucent-white capsule, Report-Green-tinted border, and dark nav text on both worlds — a dark, Signal-Void-tinted version was tried and explicitly reverted: the client wants a light header regardless of which world the page underneath belongs to. What distinguishes the Night World page's header from the homepage's is where its links point (its own `#services`/`#methode` sections) and its mega-menu's content (see Mega Menu Dropdown below), not a different color skin. Treat "light header on every page" as a fixed constraint, not a default to reconsider.

### Mega Menu Dropdown
A compact white, shadowed, 16px-radius dropdown (four narrow columns on the homepage, 720px, hairline dividers between them) that fades in and slides down on hover, with a small rotated-square pointer connecting it to its trigger. Each column leads with a small circular Field-Sage-Wash icon badge (matching the client-logo and project-dossier icon idiom) next to a small (0.85rem) heading. **Only "Expertises" itself is clickable** — its hover treatment is the same underline+color language every other nav link uses, not a distinct pill/fill; the expertise names inside the panel (`.mega-menu-item`) are plain `<span>`s, not links — `cursor: default`, small (0.85rem) muted Slate text, zero hover reaction. The "Expertises" trigger links to `index.html#expertises` (the homepage's Expertise Ledger section, see Components below) rather than a standalone page — there is no dedicated Expertises page. Deliberately opposite ends of the same visual language (react on hover vs. never react) rather than two different hover mechanisms, so there's no ambiguity about what navigates and what merely previews. Collapses to an inline expandable stacked list on mobile (≤992px), pointer removed.

**`ia/parlons-ia.html` variant:** its own copy of the header markup carries a different mega-menu **content** — not the 4 Day World poles, but 2 columns matching this page's own offer: "Construire" (Claude Code security audit, SaaS MVP, custom AI agents) and "Automatiser" (custom AI automation, workflow automation, automation maintenance) — narrower (480px vs 720px) since there are only 2 columns, via a single `.ia-page .mega-menu { width: 480px; }` override. Everything else about it (white background, shadow, hairline column dividers, icon badges) stays exactly the Day World treatment — a dark-panel version was tried and reverted for the same reason as the header itself. Its "Expertises" trigger points at this page's own `#services` section rather than the homepage's.

### Timeline
A vertical center line (Mist at rest) that fills solid Report Green as the visitor scrolls past each step — a literal progress indicator, not just a decorative spine. Steps alternate left/right of the line; each step is a card (see Cards) with a circular dot marker (20px, 4px border) that switches from Mist to Report Green once "reached." Reused on both the homepage (`#methode`) and the contact page, always five or fewer steps. The exact same markup and `initTimelineProgress()` mechanic (fully generic, `document.querySelector('.timeline')`) power `ia/parlons-ia.html`'s own `#methode` section too — only `.ia-page .timeline*` color overrides differ (Signal Void dots, Signal Lime fill and cards on `--ia-panel`), no new JS needed for the Night World copy.

### Client Logo Marquee
An infinite horizontal scroll of honest icon placeholders (dashed Mist border, muted building icon, `aria-hidden`) rather than real logo images — no client logos exist yet (see PRODUCT.md's Evidence on Hand), so the marquee doesn't fabricate any. Each tile solidifies its border and fills with the Field Sage wash on hover. When real client logos are supplied, they take over this same track; until then, this is the honest-placeholder version of the pattern.

### Hero Problem Resolver (signature component, Day World hero)
A single-slot transformer, not two fixed rows joined by an arrow: a problem statement (Graphite text, neutral exclamation icon) sits in a CSS Grid stack, gets a slow strikethrough (`text-decoration-color` fading in), then fades/lifts out as the matching solution (Report Green text, check icon) fades/rises into the exact same slot — the "problem becomes the solution" narrative staged as one continuous move rather than a static before/after. A small `01 / 05` counter (tabular numerals) and a thin Report Green progress-fill bar underneath give the rotation a visible rhythm — both pause together on hover via CSS `:hover`, no JS-driven pause state needed for the bar. Every phase uses the same eased curve as the rest of the system (`cubic-bezier(0.16, 1, 0.3, 1)`); nothing here uses a different timing function.

### The Rail (signature component, Day World hero)
A single continuous progress rail replaces discrete connected nodes: five 40px circular markers (Mist border) sit on one thin Mist line, and a Report Green fill grows from the first marker toward whichever step is active (`scaleX`, eased) — the fill level itself IS the "Pré-audit → Audit → Identification → Build → Monitoring" narrative, not a decoration next to it. Markers already passed stay solid Report Green at normal size (`.reached`); the current marker gets the same fill plus a `scale(1.15)` emphasis — completed and current are visually distinct, not just current-vs-not-yet. Its label follows the same green. Below, the step description crossfades in the same slot (grid-stacked, opacity+lift) rather than an instant `hidden` swap — the same single-slot transformer pattern as the Hero Problem Resolver, reused deliberately so the hero's two rotating widgets feel like one system. On mobile the rail becomes a static vertical guide (no fill) since a vertical progress transform isn't worth the added JS for the visual gain. The opening Pré-audit step is the free, no-commitment fit check — it exists specifically to lower the barrier before the real (paid) audit engagement begins at step two.

### Testimonial Wall (signature component, Day World)
Replaced the earlier Spotlight + Index treatment: the homepage now shows all six testimonials at once as two full-viewport-width rows of quote cards (`.testimonial-wall-row`, breaking out of `.container` via the `100vw` / negative-margin trick) scrolling continuously in opposite directions — a genuine "wall of praise," not a single card with a side list. Each card carries a quote mark, the full quote, and a name/role/company footer above a hairline divider. Deliberately different from the Client Logo Marquee it sits near: richer cards (not placeholder tiles), a second counter-scrolling row for real width and visual weight, and — because there's real text to read here, unlike a logo — each row pauses on hover (`animation-play-state: paused`) and respects `prefers-reduced-motion`. This is a knowing, disclosed exception to the "no auto-scrolling marquee" default (see craft-floor): the direction was chosen explicitly by the client from several presented options, not reached for by default. `contact.html` keeps the older flat `.testimonial-grid` of `.contact-testimonial-card`s untouched; this pattern is homepage-only.

**Disclosed as illustrative.** A `.section-subtitle` line directly under "Nos clients témoignent" states plainly that these are the kind of feedback the team is aiming for, and that real testimonials will replace them once available — added after an audit flagged the quotes (named people, named companies, a specific sales-lift number) as reading like verified proof with zero disclosure, unlike the Client Logo Marquee's honest-placeholder treatment one section above it. Any future edit to this component should keep that line, or replace the content with real testimonials and remove it.

### Project Dossier Card (signature component, Day World)
No fake photo standing in for imagery that doesn't exist yet — the recent-projects cards dropped the gradient-wash-plus-icon "pretend photo" entirely and now read as a case-file summary: a header row (`Dossier 0X` outlined pill + sector tags) over a hairline divider, then a small circular sector icon (same Field Sage Wash idiom as the contact page's icon badges), title, description, and an always-visible `.project-link` — nothing hidden behind a hover-reveal since there's no photo to reveal it from. The icon badge inverts to solid Report Green on card hover (Hover-Lift Rule); the link's arrow nudges up-right. When real project photography exists, it can return as the header's background — until then, this is the honest-placeholder version of the pattern, same principle as the Client Logo Marquee. The link itself reads "Discuter d'un projet similaire" and points at `#rdv` — it used to say "Voir le dossier" and link to a per-project page that was never built (a verified 404 on all four cards); until real case-study pages exist, don't reintroduce a link promising detail that isn't there.

### Expertise Ledger (signature component, Day World, homepage `#expertises`)
The mega-menu's own four columns (Développement Produit, Intégrateur ERP, Data & AI, Conseil & Transformation), expanded into a real, permanent section — but not as four identical bordered cards side by side (the generic "icon + heading + text" page scaffold, refused on sight), and not hidden three-at-a-time behind a spotlight-plus-index either (an earlier version of this section did exactly that; replaced because it kept 3 of 4 poles out of view at rest). Instead: one continuous bordered block (`.expertise-ledger`, a single `--shadow`/8px-radius surface) divided into four columns by hairline dividers, like a spec table or a comparison chart in a printed report — all four poles fully readable at once, no click or hover required to see any of them. Each column: an icon badge beside its heading (`.expertise-ledger-head`, same side-by-side idiom as everywhere else on the site — see the icon-badge Do below), a one-sentence synthesis, its sub-services as a small dot-bulleted list (not `.tag` chips — chips imply a flat set of equal peers, a list reads as this pole's actual scope), and a "Concrètement :" line closing on one concrete example — the Data & AI column's example links onward to `ia/parlons-ia.html`. Hovering a column tints it Field Sage Wash and inverts its icon to solid Report Green, the same Hover-Lift-adjacent language as everywhere else, scoped to one column rather than a whole separate card so the reaction stays legible as "this column" and not "the whole block." Collapses to 2 columns (900px) then 1 (576px), dividers rotating from vertical to horizontal at each step.

### AI Track Card (signature component, Night World)
The dark-mode counterpart to the Service Card: a glass panel (near-transparent fill + hairline border) on Signal Void/Raised, no shadow, Signal Lime icon badge sitting beside its heading (not stacked above it — see the Named Rule below). Hover shifts the border toward Signal Lime and lifts slightly (`translateY(-4px)`) rather than deepening a shadow — the Night World's version of the Hover-Lift Rule, adapted for a ground where shadows don't read.

### Services Grid (signature component, Night World, `ia/parlons-ia.html` only)
Sits right after the hero (page order is now hero → Services Grid → Timeline `#methode` → Signal Story → Sector Ideas → final CTA), listing the page's six concrete AI/automation services (security audit, custom automation, workflow automation, AI agent development, SaaS MVP, automation maintenance) — grounding the page's narrative in an actual offer before the storytelling begins. A static 3×2 grid, one card per service, everything visible at once — the client asked explicitly for no click-to-expand, so this replaced an earlier accordion version. What keeps six image-plus-text cards from being the generic scaffold: each card leads with a real photo slot (`.ia-service-card-media`), not a generic icon — until real photography exists per service, it shows the same honest dashed-border placeholder idiom as the Client Logo Marquee (a labeled icon signaling "photo to come," never a fake gradient standing in for one); swap in `<img class="ia-service-card-img">` per card as photography arrives, no other markup changes needed. Below the photo: a `S0X` JetBrains Mono reference tag (Signal Lime on accent-soft — same idiom as the stat values and Signal Dossier tags) paired with a plain-text duration label (`1-2 semaines`, `Au projet`, `Sprint 30 jours`, `Continu`) in the same head row, then the title, a one-sentence hook (not a paragraph — kept deliberately short after the client flagged the first pass as a wall of text nobody would read), and 2–3 short capability tags (one or two words each) as plain hairline-bordered chips (no accent fill on the tags — that stays reserved for the reference tag, keeping the Single Accent Rule intact across six cards of detail).

### Signal Story (signature component, Night World, `ia/parlons-ia.html` only)
This page doesn't reuse the Day World hero's rotating widgets at all — it tells one scroll-driven story instead: a single company's process, before AI and after, illustrated by one photo beside it that stays visually fixed (`position: sticky`) for the whole sequence. Three beats, not six, and all three share one pinned slot: a grouped `Avant` beat (3 short pain points, dim tag, dash markers), a grouped `Avec l'IA` beat (3 short solutions, Signal Lime tag and markers), and a `Résultat` beat (its own tag, sentence, and two-stat card) — each one replacing the last in place rather than the reader scrolling past six separate statements (a "défilement" the client explicitly asked to remove in favor of a clean disappear/appear swap). All three sit in one CSS Grid cell (`.ia-story-slot`, all three on `grid-area: 1 / 1`) — the same single-slot-transformer idiom as the Day World hero's Problem Resolver and Rail, extended from two states to three. `.ia-story-slot` is itself `position: sticky` with the *exact same* `top`/`height`/`min-height` as `.ia-story-sticky` (the photo's own sticky wrapper) — not just visually similar values, but read from the same numbers — so the two stay pinned to the same screen position and share the same vertical center for the whole sequence; centering the text independently (e.g. via `align-items: center` on a plain flex box) doesn't guarantee this, only matching the sticky geometry does. The actual scroll runway lives one level up, in `.ia-story-stage` — a tall, plain, non-sticky spacer (`min-height: 210vh`) that the sticky slot rides inside of; its height is split into three equal thirds, one per beat, giving each roughly 70vh of dedicated scroll distance to be read before the next swap — a shorter stage (an earlier 90vh two-state version) made "Avec l'IA" arrive before "Avant" had been read, which is what pushed this to three explicit, evenly-paced thirds. The active third is tracked as `stage.dataset.phase` (`"0"`/`"1"`/`"2"`), recomputed on every scroll (rAF-throttled `scroll`/`resize` listener, not IntersectionObserver — a boundary-crossing observer doesn't reliably re-fire often enough across a tall element's full height to track a continuous three-way position) by comparing `.ia-story-stage`'s live `getBoundingClientRect()` against a fixed trigger line (55% of viewport height) and dividing that position into thirds; recomputing from the live position on every tick, not from a one-shot crossing event, is what makes the swap correctly reverse when the visitor scrolls back up, however far down they'd gone. The photo's own black-and-white → color cut piggybacks on the same phase value (`phase >= 1`) rather than a separate cue, so the image and the text always agree on "before" vs. "after." Reaching phase 2 also plays the stat card's count-up once — triggered directly by the phase change, not a separate scroll-visibility check, since the result card doesn't independently scroll into view (it's pinned in the same spot the whole time). Switching case chips resets to a sentinel phase and immediately recomputes from the *current* scroll position (rather than force-resetting to "Avant" and waiting for the next scroll tick) so new content reflects the right phase without a flash of stale state — though in practice, since the chip row isn't sticky, reaching any phase past the first also scrolls the chips out of view, so clicking a different case from deep in the story requires scrolling back up first, which naturally lands back on phase 0 anyway. Collapses to a static stacked column on mobile (all three beats stacked and always visible, no scroll-triggered swap, photo un-stickied) since that kind of scroll-scrubbed effect isn't legible at that viewport anyway — the mobile override has to repeat the exact `.ia-story-stage[data-phase="N"] ...` selectors at matching specificity (not just the bare `.ia-story-point-group`/`.ia-story-result` classes) or a stage left on an earlier phase from a prior scroll position wins the cascade and leaves two of the three beats stuck invisible.

**Case Switcher.** Above the sticky/beats layout, a row of pill chips (`.ia-case-switcher`/`.ia-case-chip`) lets the visitor pick which story plays — "Traitement d'une demande client" (`ia-entreprise.jpg`), "Prévision des ventes" (`b2b.jpg`), "Chatbot intelligent" (`sante.jpg`), "Prévention de la fraude" (`finance.jpg`), "Analyse des retours clients" (`retail.jpg`) — each case pairing its points with its own photo so the sticky image genuinely changes subject per case, not just phase. All five share the exact same shape (3 pain points, 3 solutions, 1 result), so switching cases rewrites the `<li>` text, the photo's `src`/`alt`, the result sentence, and the two stat values in place — the DOM structure and the scroll-driven phase tracking never get rebuilt. Clicking a chip marks it active (solid Signal Lime fill — the one clickable-fill treatment on this component, same idiom as an active state elsewhere). The chip row centers itself when it fits and becomes a drag-to-scroll strip when it doesn't (mouse drag + native touch scroll, no arrow buttons — a genuine drag is distinguished from a click by a 5px movement threshold so tapping a chip mid-scroll still works), with a soft edge mask hinting at overflow either way.

**Written for the Operational Decision-Maker, in tight business language, not narrative.** Every case's copy targets the same persona as the rest of the site (per PRODUCT.md: the director/founder/technical lead who commissions the project, not an end-user or a technical evaluator) — concretely, a DG/fondateur/COO of a PME/ETI who thinks in P&L terms. Each case groups exactly 3 pain points and 3 matching solutions rather than spelling out a 6-step narrative arc — the grouping itself is what signals "these three problems, this one AI response," without needing connective prose to say so. Copy is kept short and varied in rhythm on purpose: no repeated rhetorical scaffolding (no case leans on the same "assertion — dramatic consequence" em-dash construction as another), no hedge words, no restating "résultat" in the sentence when the beat's own tag already says it. The `Résultat` beat closes on the business outcome directly (coût, marge, trésorerie, chiffre d'affaires, taux de conversion, churn), and its two stat labels stay terse and business-scoped ("de coût de traitement par demande," "de fraudes stoppées avant impact sur la marge") rather than generic operational figures. This tightened, de-templated copy replaced an intermediate business-language pass that was still flagged as reading with too much AI-generated filler (repetitive em-dash rhetoric, restated "résultat :" framing, over-qualified clauses) even after it had already fixed an earlier, purely narrative-anecdote style (e.g. "le visiteur part voir ailleurs pendant que votre équipe dort").

**Per-case ambient glow, not a second accent.** Each case also sets a `--story-glow` RGB triple (via inline style, from JS) that feeds a soft radial-gradient wash behind the section's content — amber for sales forecasting, blue for the chatbot, red for fraud prevention, violet for feedback analysis, lime (the core accent hue) for the default customer-request case. This is deliberately kept as low-opacity ambient lighting fading into the standard Signal Void background, not a UI accent: it never touches a button, link, chip, or any interactive surface, all of which stay Signal Lime only. That distinction is what keeps this compatible with the Single Accent Rule below — mood lighting behind the content is a different vocabulary from the one accent color used to mean "click here." The gradient's soft falloff also means it introduces no hard seam with the flat-background sections before and after it.

### Sector Ideas Gallery (signature component, Night World, `ia/parlons-ia.html` only)
Four duotone-treated sector photos (Signal Void shadows, Signal Lime highlights via stacked `mix-blend-mode: color` overlays — its own static treatment, distinct from the Signal Story image's monochrome-to-color animation) in a simple card grid, each paired with a sector label (JetBrains Mono, Signal Lime) and one concrete, implementable use-case line — not a feature list, one sentence a visitor could picture in their own business. Cards lift and their duotone overlay intensifies slightly on hover (the Night World's Hover-Lift Rule); no icon badges, no bordered feature-tile stack — the photo itself is the visual anchor. Exists specifically to satisfy "montrer concrètement des cas d'usage IA qu'il peut implémenter" without turning into a generic feature-grid.

### FAQ Register (signature component, Day World)
Each question carries a `Q0X` reference pill (Field Sage Wash, same numbered-docket vocabulary as the Project Dossier cards and The Rail's markers) rather than reading as a generic accordion. A single chevron rotates 180° on open instead of swapping between separate plus/minus icons — one element, one eased transform, not an instant DOM swap. The whole row lifts (Hover-Lift Rule) and the reference pill inverts to solid Report Green when open, matching the diagram markers' "reached" treatment. `contact.html` keeps its own older plus/minus-innerHTML FAQ implementation untouched — the two never shared behavior even before this pass, just the same CSS class names.

### CTA Section (signature component, Day World)
The one section on the whole Day World that fills its full background with Report Green rather than using it as an accent — reserved for the single final conversion moment (`#rdv`), never reused for a generic section background. White text, two soft white (`rgba(255,255,255,0.1)`) decorative circles bleeding off the section's corners, and a short reassurance line sitting close under the headline paragraph before the Calendly embed. This is a deliberate, narrow exception to the Single Accent Rule's "accent is never a fill" posture elsewhere — earned specifically by being the page's one moment that asks for the action. The reassurance line runs at full opacity, not dimmed — an audit measured white text at 85% opacity against Report Green at ~3.93:1, below the 4.5:1 AA minimum; the smaller `font-size` alone carries the "secondary line" de-emphasis now, never opacity on body-sized text over a solid accent fill.

**One booking widget per page, every CTA points at it.** Each page that asks for the meeting embeds exactly one Calendly widget at its own `#rdv` anchor, and every CTA on that page — header, hero, final section — is an in-page `href="#rdv"` link to it, never a link out to another page or a raw external Calendly URL. `ia/parlons-ia.html` follows this exactly: its own `.ia-final-cta#rdv` embeds the widget (styled Night World, same `.calendly-embed-wrap` wrapper class as the homepage), and its header/hero CTAs both scroll to it rather than sending the visitor to `contact.html` or opening Calendly in a new tab. One page, one destination, no detours.

**Fallback text below the widget, on both pages.** `.calendly-fallback` / `.ia-calendly-fallback` sits just under the embed, always rendered (not conditional on a detected load failure — that's unreliable to detect reliably from third-party script behavior): an email address as a plan B if the widget doesn't load (ad-blockers commonly flag booking widgets), plus a one-line link to `politique-confidentialite.html`. The Calendly URL itself no longer carries `?hide_gdpr_banner=1` — suppressing Calendly's own consent notice with nothing first-party replacing it read as evasive right at the moment a visitor hands over contact details, not reassuring.

### Legal Page (`politique-confidentialite.html`)
The one page on the site that's deliberately **Read** mode, not Persuade — no hero animation, no CTA styling, no cards. A short centered title block (`.legal-intro`, h1 + a "Dernière mise à jour" line, no kicker), then a single `<article class="legal-content">` capped at 720px for comfortable line length, with plain `h2` section headings, `1.75` line-height body copy, and hairline-free structure — the content's own hierarchy does the work, nothing decorative added to a legal document. Reuses the shared header/footer chrome exactly as every other Day World page does.

## Do's and Don'ts

### Do:
- **Do** keep Report Green as the only clickable-fill color on Day World pages, and Signal Lime as the only one inside `.ia-page` — never introduce a second accent hue to either world.
- **Do** pair every new interactive card or button with a hover-lift + shadow-deepen (or glow, for buttons) — a flat hover state reads as unfinished in this system.
- **Do** hold new components to the 4px / 8–16px / full-circle radius ladder; nothing else.
- **Do** give Night World cards a hairline border instead of a shadow — shadows don't read against the near-black backgrounds.
- **Do** keep icon badges beside their heading (flex row), never stacked in a rounded tile above it — the stacked-tile shape is the generic template every AI-generated feature card defaults to; a side-by-side pairing is the one small choice that keeps a component from looking interchangeable with anyone else's.

### Don't:
- **Don't** put a kicker/eyebrow label above a heading, on either world. This is an outright ban, not a style preference — no brief earns it back. If the words matter, they belong in the heading or the body copy (removed from both the homepage and the AI page's hero and automation section during this pass).
- **Don't** let JetBrains Mono carry a headline, a paragraph, or a button label — it exists solely for Night World numerals and short technical tags (stats, counters, reference codes). The moment it would set a sentence, use Poppins instead.
- **Don't** mix Day World (paper/graphite/report green) and Night World (signal void/lime) tokens on the same page — the accent hue is the only signal separating "marketing site" from "AI story," and diluting it erases that signal.
- **Don't** use pill-shaped (fully rounded) buttons or inputs — every rectangular control in this system is a crisp 4px, never more.
- **Don't** invent a new testimonial, client logo, or case-study metric to fill an empty section — the existing ones are confirmed placeholders (see PRODUCT.md's Evidence on Hand); match their honest-placeholder treatment rather than adding more fabricated "proof."
- **Don't** rely on `.container` for content-width constraint — it has no max-width; constrain new sections explicitly the way existing ones do.
