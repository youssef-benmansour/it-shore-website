# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Any business needing development or IT help — no fixed sector or company-size focus. The decision-maker is whoever commissions a dev, ERP, or AI project on the client side (director/founder/technical lead). The `/ia` page's sector art (finance, industrie, retail, santé) is illustrative, not a scoped ICP.

## Product Purpose

IT Shore is a French tech services partner (operating since 2011) that designs and builds digital solutions for businesses: web and mobile development, ERP integration (Odoo), generative AI and predictive systems, data engineering, and digital-transformation/IT-infrastructure consulting. Success is a prospect booking a discovery call (Calendly) and, ultimately, a delivered project that measurably improves the client's business (e.g., stated case outcomes like reduced logistics cost, increased sales).

## Positioning

Applied AI expertise layered onto classic dev/ERP delivery — few competitors credibly combine generative AI and predictive systems work with traditional web/mobile/ERP development in one in-house team. The homepage's "we build the tools ourselves" line and the audit → identify → build → monitor method support this: AI use cases are identified and built by the same team doing the underlying software work, not handed to a separate AI vendor.

## Operating Context

- Engagement model: discovery/audit → scoping → iterative delivery in 2–3 week sprints → QA → deployment & support, per the homepage timeline.
- Primary conversion path: a Calendly-embedded 30-minute discovery call (`#rdv` section on the homepage).
- Site structure: homepage (`index.html`), a dedicated AI landing page (`ia/parlons-ia.html`), a contact page (`contact/contact.html`), and a planned expertises mega-menu covering Développement Produit (web, mobile, reprise de code, audit d'applications, SaaS), Intégrateur ERP (Odoo, audit ERP), Data & AI (IA générative, systèmes prédictifs, data engineering), and Conseil & Transformation (transformation digitale, conseil IT & infrastructure, formations). Most of these linked expertise pages do not exist yet.
- Language: French only (`lang="fr"`); no i18n in place.
- No build tooling — static HTML/CSS/JS, no framework, no package manager.

## Capabilities and Constraints

- Static site: plain HTML/CSS/JS (`index.html`, `styles.css`, `main.js`, `animations.js`), no bundler, no framework, no backend.
- Third-party dependencies already wired in: Google Fonts (Poppins), Font Awesome (via CDN), Calendly inline widget/script.
- Many expertise/service pages referenced from the nav (e.g. `developpement-web.html`, `integrateur-odoo.html`, `ia-generative.html`, `references.html`) do not exist yet — nav currently links to pages that will 404. `expertises.html` is no longer one of them: the 4 expertise poles live directly on the homepage (`index.html#expertises`), and the "Expertises" nav trigger on every page links there rather than to a standalone page.

## Brand Commitments

- Name: IT Shore. Logo asset: `itshore_logo.jpeg`.
- Voice: French, professional/consultative B2B tone ("Votre partenaire tech au service de vos métiers").
- Founded/operating since 2011 — this is a stated, binding fact used in copy.

## Evidence on Hand

- **Client logos** (`images/clients/*.webp`) and **homepage testimonials** now come from signed reference attestations ("attestations de référence") supplied by IT Shore: Groupe Alliances, Ordre National des Notaires du Maroc, Vivo Energy Maroc (Shell), Compagnie Générale Immobilière (Groupe CDG), Auto Hall, ONEE, SOFAC, Les Eaux Minérales d'Oulmès, Ocean Akad International (Dubaï), Aryan's, La Voie Express. Logos were cropped from the letterheads (replace with official files when available, same file names).
- Testimonials are **faithful excerpts** of those letters, attributed to company + role (no personal names published). Do not paraphrase them into stronger claims or add metrics the letters don't contain.
- "Nos projets récents" lists projects described in those attestations (no contract amounts published).
- The `/ia` page's examples remain illustrative.

## Product Principles

1. Lead with applied AI + traditional dev/ERP combined — that pairing is the actual differentiator, not generic "we do everything" framing.
2. Never invent proof (testimonials, client logos, case metrics); flag placeholder evidence honestly rather than dressing it up as real.
3. Every path should point toward booking the discovery call — that's the one confirmed conversion goal.
4. Broad audience means clarity and low-friction navigation matter more than sector-specific messaging; don't over-narrow copy to one vertical without a confirmed ICP decision.
5. French-only, static-site constraints stay in force — don't introduce a framework or i18n scaffolding without the user asking.
