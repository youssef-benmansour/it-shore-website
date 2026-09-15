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
- **Paper** (`#f9f9f9`): the page background — intentionally a hair off-white from pure white, distinct from card surfaces.
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

**Character:** A single geometric sans carries the whole system at every register — light weights (300) for the biggest display moments, medium/semibold (500–600) for anything actionable or emphasized. The pairing reads clean and slightly technical, never warm or editorial. JetBrains Mono's tabular numerals add a console-readout texture to the Night World's data points without touching the voice of the writing itself.

### Hierarchy
- **Display** (300, `clamp(2.5rem, 5vw, 4rem)`, 1.15): hero headlines on both worlds — the Day hero's `<h2>` (2.5rem/300) and the Night hero's `<h1>` (3.1rem/700, the one place Night breaks from light-display and goes bold for contrast against the dark ground).
- **Headline** (400, 2rem, 1.2): every `.section-title` — always centered, always followed by a short accent-colored underline rule (80px × 4px).
- **Title** (600, 1.2–1.5rem, 1.4): card and component headings (service cards, testimonial names, FAQ questions, timeline items).
- **Body** (400, 1rem, 1.6): default paragraph text everywhere; the base `line-height: 1.6` is set once on `body` and inherited throughout.
- **Mono Label** (JetBrains Mono, 500–700, 0.7–0.85rem, tabular numerals): Night World stat values, resolver/rail counters and markers, dossier reference tags. The one place the type system deliberately steps outside Poppins.
- **Component-scoped sizes (Night World signature components only):** the Signal Story and Sector Ideas Gallery each carry a handful of one-off Poppins sizes (story beat text at 1.35rem, section/story heads at 2.1rem, intro copy at 1.05rem, card copy at 0.9rem, the final CTA head at 2.3rem) that don't map onto the five roles above. These aren't drift — each size is scoped to exactly one component and reused consistently within it; treat new one-off Night World component sizes the same way rather than forcing everything onto the five-role ramp.

### Named Rules
**The 4px Corner Rule.** Nothing sits between 4px and 8px. If a new component needs "a little rounder than a button but not a full card," that's a sign it should become a card (8px+), not a new radius value.

## Layout

No global `.container` max-width is set — `.container` is `width: 100%` with `20px` horizontal padding only; content width is constrained per-section instead (`.hero-grid` uses explicit left/right padding, `.timeline`/`.faq-list` cap at 700–900px, `.mega-menu` is a fixed 900px, the homepage's `.expertise-spotlight` caps at 1000px). Treat this as the established pattern: new sections should set their own max-width rather than relying on `.container` to do it. The Testimonial Wall is the one deliberate exception — it breaks out to full viewport width instead of capping (see Testimonial Wall below). Note: `.testimonial-grid`/`.testimonial-column`/`.testimonial-author`/`.author-info` still exist in the shared stylesheet purely for `contact.html`'s `.contact-testimonial-card` grid — the homepage no longer uses them.

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

### Mega Menu Dropdown
A compact white, shadowed, 16px-radius dropdown (720px, four narrow columns, hairline dividers between them) that fades in and slides down on hover, with a small rotated-square pointer connecting it to its trigger. Each column leads with a small circular Field-Sage-Wash icon badge (matching the client-logo and project-dossier icon idiom) next to a small (0.85rem) heading. **Only "Expertises" itself is clickable** — its hover treatment is the same underline+color language every other nav link uses, not a distinct pill/fill; the expertise names inside the panel (`.mega-menu-item`) are plain `<span>`s, not links — `cursor: default`, small (0.85rem) muted Slate text, zero hover reaction. The "Expertises" trigger links to `index.html#expertises` (the homepage's Expertise Spotlight section, see Components below) rather than a standalone page — there is no dedicated Expertises page. Deliberately opposite ends of the same visual language (react on hover vs. never react) rather than two different hover mechanisms, so there's no ambiguity about what navigates and what merely previews. Collapses to an inline expandable stacked list on mobile (≤992px), pointer removed.

### Timeline
A vertical center line (Mist at rest) that fills solid Report Green as the visitor scrolls past each step — a literal progress indicator, not just a decorative spine. Steps alternate left/right of the line; each step is a card (see Cards) with a circular dot marker (20px, 4px border) that switches from Mist to Report Green once "reached." Reused on both the homepage (`#methode`) and the contact page, always five or fewer steps.

### Client Logo Marquee
An infinite horizontal scroll of honest icon placeholders (dashed Mist border, muted building icon, `aria-hidden`) rather than real logo images — no client logos exist yet (see PRODUCT.md's Evidence on Hand), so the marquee doesn't fabricate any. Each tile solidifies its border and fills with the Field Sage wash on hover. When real client logos are supplied, they take over this same track; until then, this is the honest-placeholder version of the pattern.

### Hero Problem Resolver (signature component, Day World hero)
A single-slot transformer, not two fixed rows joined by an arrow: a problem statement (Graphite text, neutral exclamation icon) sits in a CSS Grid stack, gets a slow strikethrough (`text-decoration-color` fading in), then fades/lifts out as the matching solution (Report Green text, check icon) fades/rises into the exact same slot — the "problem becomes the solution" narrative staged as one continuous move rather than a static before/after. A small `01 / 05` counter (tabular numerals) and a thin Report Green progress-fill bar underneath give the rotation a visible rhythm — both pause together on hover via CSS `:hover`, no JS-driven pause state needed for the bar. Every phase uses the same eased curve as the rest of the system (`cubic-bezier(0.16, 1, 0.3, 1)`); nothing here uses a different timing function.

### The Rail (signature component, Day World hero)
A single continuous progress rail replaces discrete connected nodes: five 40px circular markers (Mist border) sit on one thin Mist line, and a Report Green fill grows from the first marker toward whichever step is active (`scaleX`, eased) — the fill level itself IS the "Pré-audit → Audit → Identification → Build → Monitoring" narrative, not a decoration next to it. Markers already passed stay solid Report Green at normal size (`.reached`); the current marker gets the same fill plus a `scale(1.15)` emphasis — completed and current are visually distinct, not just current-vs-not-yet. Its label follows the same green. Below, the step description crossfades in the same slot (grid-stacked, opacity+lift) rather than an instant `hidden` swap — the same single-slot transformer pattern as the Hero Problem Resolver, reused deliberately so the hero's two rotating widgets feel like one system. On mobile the rail becomes a static vertical guide (no fill) since a vertical progress transform isn't worth the added JS for the visual gain. The opening Pré-audit step is the free, no-commitment fit check — it exists specifically to lower the barrier before the real (paid) audit engagement begins at step two.

### Testimonial Wall (signature component, Day World)
Replaced the earlier Spotlight + Index treatment: the homepage now shows all six testimonials at once as two full-viewport-width rows of quote cards (`.testimonial-wall-row`, breaking out of `.container` via the `100vw` / negative-margin trick) scrolling continuously in opposite directions — a genuine "wall of praise," not a single card with a side list. Each card carries a quote mark, the full quote, and a name/role/company footer above a hairline divider. Deliberately different from the Client Logo Marquee it sits near: richer cards (not placeholder tiles), a second counter-scrolling row for real width and visual weight, and — because there's real text to read here, unlike a logo — each row pauses on hover (`animation-play-state: paused`) and respects `prefers-reduced-motion`. This is a knowing, disclosed exception to the "no auto-scrolling marquee" default (see craft-floor): the direction was chosen explicitly by the client from several presented options, not reached for by default. `contact.html` keeps the older flat `.testimonial-grid` of `.contact-testimonial-card`s untouched; this pattern is homepage-only.

### Project Dossier Card (signature component, Day World)
No fake photo standing in for imagery that doesn't exist yet — the recent-projects cards dropped the gradient-wash-plus-icon "pretend photo" entirely and now read as a case-file summary: a header row (`Dossier 0X` outlined pill + sector tags) over a hairline divider, then a small circular sector icon (same Field Sage Wash idiom as the contact page's icon badges), title, description, and an always-visible "Voir le dossier" link — nothing hidden behind a hover-reveal since there's no photo to reveal it from. The icon badge inverts to solid Report Green on card hover (Hover-Lift Rule); the link's arrow nudges up-right. When real project photography exists, it can return as the header's background — until then, this is the honest-placeholder version of the pattern, same principle as the Client Logo Marquee.

### Expertise Spotlight (signature component, Day World, homepage `#expertises`)
The mega-menu's own four columns (Développement Produit, Intégrateur ERP, Data & AI, Conseil & Transformation), expanded into a real, permanent section — but not as four identical cards side by side (that's the generic "icon + heading + text" page scaffold, refused on sight regardless of how the content is filled in). Instead it's a "Spotlight + Index" hierarchy: one pole shown large at a time (icon beside heading, a one-sentence synthesis, its sub-services as compact `.tag` chips, and a "Concrètement :" line closing on one concrete example — the Data & AI pole's example links onward to `ia/parlons-ia.html`), beside a compact 4-item index to switch between them, vertically centered against the taller main panel (`align-items: center`) rather than pinned to its top. Clicking an index item crossfades the main panel's content (same single-slot-transformer motion as the Hero Problem Resolver and the Rail: fade out, swap, fade back in) rather than an instant swap; the active index item gets the Field Sage Wash background + `translateX(4px)` shift + inverted icon. Deliberately no autoplay — each pole carries real content to read (description + tags + example), so the visitor picks the pace, not the section. Content is populated entirely from JS (`initExpertiseSpotlight()` in `animations.js`); the HTML markup is an empty shell.

### AI Track Card (signature component, Night World)
The dark-mode counterpart to the Service Card: a glass panel (near-transparent fill + hairline border) on Signal Void/Raised, no shadow, Signal Lime icon badge sitting beside its heading (not stacked above it — see the Named Rule below). Hover shifts the border toward Signal Lime and lifts slightly (`translateY(-4px)`) rather than deepening a shadow — the Night World's version of the Hover-Lift Rule, adapted for a ground where shadows don't read.

### Signal Story (signature component, Night World, `ia/parlons-ia.html` only)
This page doesn't reuse the Day World hero's rotating widgets at all — it tells one scroll-driven story instead: a single company's process, before AI and after, illustrated by one photo that transforms as the visitor scrolls past it. The photo runs pure black-and-white (`grayscale(1)`) for the "before" half and returns to its natural full color the moment the first "after" beat arrives — a straight monochrome-to-color cut, deliberately not tinted lime or any other hue; color itself, not a brand color, is the reward state. It sits in a `position: sticky` frame beside a column of six short "beat" statements — three tagged `Avant`, three tagged `Avec l'IA`. Each beat fades and lifts into place once (IntersectionObserver, unobserved after its first reveal) as it crosses the viewport. The color switch is a separate, non-one-shot observer watching only the first "after" beat, but it doesn't key off `isIntersecting` directly — once that beat scrolls fully out of view further down the page, `isIntersecting` goes false again and would wrongly flip the photo back to black-and-white mid-"after". Instead it compares the beat's `boundingClientRect.top` against a fixed trigger line (55% of viewport height) on every firing (via a rootMargin-shrunk root), which stays correct however far past the boundary the visitor scrolls; scrolling back up past that line is what returns the photo (and its phase tag) to black-and-white. The transformation is something the visitor watches happen to the image, not a claim made in a paragraph — this is the page's answer to "sans forcément des pavés de texte mais des animations." The final beat breaks from the plain-statement rhythm into a small stat card (two JetBrains Mono numbers: a percentage improvement and an availability figure) to close the story on something concrete. Collapses to a static single column on mobile (photo un-stickied, beats always visible) since a sticky-scroll effect isn't legible at that viewport anyway.

### Sector Ideas Gallery (signature component, Night World, `ia/parlons-ia.html` only)
Four duotone-treated sector photos (Signal Void shadows, Signal Lime highlights via stacked `mix-blend-mode: color` overlays — its own static treatment, distinct from the Signal Story image's monochrome-to-color animation) in a simple card grid, each paired with a sector label (JetBrains Mono, Signal Lime) and one concrete, implementable use-case line — not a feature list, one sentence a visitor could picture in their own business. Cards lift and their duotone overlay intensifies slightly on hover (the Night World's Hover-Lift Rule); no icon badges, no bordered feature-tile stack — the photo itself is the visual anchor. Exists specifically to satisfy "montrer concrètement des cas d'usage IA qu'il peut implémenter" without turning into a generic feature-grid.

### FAQ Register (signature component, Day World)
Each question carries a `Q0X` reference pill (Field Sage Wash, same numbered-docket vocabulary as the Project Dossier cards and The Rail's markers) rather than reading as a generic accordion. A single chevron rotates 180° on open instead of swapping between separate plus/minus icons — one element, one eased transform, not an instant DOM swap. The whole row lifts (Hover-Lift Rule) and the reference pill inverts to solid Report Green when open, matching the diagram markers' "reached" treatment. `contact.html` keeps its own older plus/minus-innerHTML FAQ implementation untouched — the two never shared behavior even before this pass, just the same CSS class names.

### CTA Section (signature component, Day World)
The one section on the whole Day World that fills its full background with Report Green rather than using it as an accent — reserved for the single final conversion moment (`#rdv`), never reused for a generic section background. White text, two soft white (`rgba(255,255,255,0.1)`) decorative circles bleeding off the section's corners, and a short reassurance line (smaller, 85% opacity) sitting close under the headline paragraph before the Calendly embed. This is a deliberate, narrow exception to the Single Accent Rule's "accent is never a fill" posture elsewhere — earned specifically by being the page's one moment that asks for the action.

**One booking widget per page, every CTA points at it.** Each page that asks for the meeting embeds exactly one Calendly widget at its own `#rdv` anchor, and every CTA on that page — header, hero, final section — is an in-page `href="#rdv"` link to it, never a link out to another page or a raw external Calendly URL. `ia/parlons-ia.html` follows this exactly: its own `.ia-final-cta#rdv` embeds the widget (styled Night World, same `.calendly-embed-wrap` wrapper class as the homepage), and its header/hero CTAs both scroll to it rather than sending the visitor to `contact.html` or opening Calendly in a new tab. One page, one destination, no detours.

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
