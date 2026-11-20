# Website Architecture and Section Specification

Single-page, section-based portfolio, with semantic landmarks and stable IDs. Recommended order below. Each section owns its content and is independently responsive. No content depends on WebGL or animation.

## 1. Intro experience / preloader

**Purpose/content:** brief brand arrival only; not a required gate. **Layout/visual:** small monogram and restrained progress cue on the dark canvas. **Interaction/motion:** if used, transition quickly and only when real loading work justifies it; no fake percentage. **Responsive/accessibility:** skip entirely for reduced motion, slow connections, or when it would delay interaction; never trap focus; expose meaningful page content immediately. Default recommendation: no blocking preloader.

## 2. Hero

**Purpose:** identify the person and present a clear next action. **Content:** Priyanshu Kumar; “Developer | AI Builder | Aspiring Founder”; concise first-person intro [NEEDS OWNER APPROVAL]; primary “Explore projects” anchor; secondary contact action; optional GitHub/LinkedIn links. **Layout/visual:** editorial split, headline/text alongside approved portrait or abstract CSS art; cinematic blue-violet light, minimal orbit motif. **Interaction:** anchor scrolling and obvious links; no forced cursor. **Animation:** gentle entrance only. **Responsive:** stack on narrow screens; text and CTA before nonessential art; approved crop uses `object-position` chosen with owner.

## 3. About

**Purpose:** provide human context without fabricated biography. **Content:** concise paragraph based on confirmed study, interests (only if confirmed), and approach; preserve “second year” only after reconfirming. **Layout:** text-led section with a small identity/education note. **Visual/interaction:** calm surface, no card pile. **Motion/responsive:** optional fade/translate, disabled for reduced motion; single column on mobile.

## 4. Skills & technologies

**Purpose:** show relevant capabilities with evidence. **Content:** a skills inventory is not supplied [NEEDS CONFIRMATION]. React and TypeScript are confirmed only as frontend contribution on Veyra Sentinel; do not imply comprehensive proficiency from that alone. Build categories only after owner confirms items and levels. **Layout:** compact typographic groups, optionally linked to project evidence. **Visual:** labels and restrained line markers, not percentage bars. **Interaction:** none required. **Responsive:** wrap into readable groups; do not use horizontal scrolling as sole access.

## 5. Featured projects

**Purpose:** make verified work inspectable. **Content:** AI Agency Automation, Veyra Sentinel, TrustTrace, R K Traders; titles, accurate descriptions, contribution, status, and verified source/demo links per `PROJECT_DOCUMENTATION.md`. **Layout:** one larger feature followed by varied editorial rows/cards; all cards visibly signal collaboration/status where relevant. **Interaction:** clickable links have clear labels; card itself is not an inaccessible nested-link trap. **Visual/motion:** project-specific abstract previews or supplied screenshots only when approved; hover is a minor enhancement. **Responsive:** stacked cards, no critical hover-only details.

## 6. Experience / contributions

**Purpose:** explain project work, not imply employment. **Content:** project-based contributions for Veyra Sentinel and TrustTrace; optional AI Agency Automation builder role only as personal project activity. Label this section “Selected contributions” or “What I’ve worked on,” not formal job history. **Layout:** short timeline/list keyed to projects, no invented dates. **Interaction/motion:** static content first; no timeline animation required. **Responsive:** simple vertical list.

## 7. Achievements

**Purpose:** highlight substantiated recognition. **Content:** Veyra team Top 30 selection and participation in SIH 2026 Grand Finale. Phrase as team result and participation, not a win or individual award. Confirm exact event naming/year before launch. Do not add unsupported awards. **Layout:** one clear feature, linked to official evidence if available [NEEDS CONFIRMATION]. **Motion/responsive:** no counters; graceful single-column layout.

## 8. Education

**Purpose:** show current education. **Content:** B.Tech in Computer Science and Engineering, MCKV Institute of Engineering, Second Year (supplied; reconfirm status). No graduation date or grades. **Layout:** compact entry with degree/institution/status. **Responsive:** same hierarchy, stacked labels.

## 9. Contact

**Purpose:** enable direct outreach. **Content:** confirmed email, phone, LinkedIn, GitHub. Include concise, welcoming invitation. Public exposure of email/phone must be reconfirmed [NEEDS CONFIRMATION]. **Layout:** prominent contact panel with direct text links. **Interaction:** `mailto:` and `tel:` and external profiles with descriptive names; do not present a fake form. If a real form is later requested, define backend, privacy, validation, spam control, and success/error states before implementation. **Responsive:** full-width actions with comfortable touch targets.

## 10. Footer

**Purpose:** close with identity and navigation. **Content:** name, current year generated at runtime, section links, GitHub/LinkedIn, optional email. Do not state “all rights reserved” as legal advice; a simple copyright line is optional. **Visual/motion:** low contrast but readable, no motion requirement. **Responsive:** wrap links without clipping.

## Navigation and page semantics

Use a `<header>` with a skip link and compact nav, one `<main>`, one `<h1>`, ordered section headings, and `<footer>`. Desktop may use a compact sticky header; mobile navigation must be operable without a hover state and must expose open/closed state to assistive technology. Anchor targets need scroll offset for sticky headers. Include a useful document title and description; SEO details live in `SEO_STRATEGY.md`.
