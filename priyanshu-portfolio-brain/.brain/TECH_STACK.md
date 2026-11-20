# Technical Stack Recommendation

This is a recommendation, not a claim about an existing repository. Inspect the target repository and preserve its working conventions before choosing or changing tools.

## Recommended default

- **Next.js + React + TypeScript:** suitable for a polished, content-forward portfolio, typed project metadata, route metadata, and static/SSR options. A single static-export-capable page is enough unless server functionality is approved.
- **Tailwind CSS or CSS Modules:** choose one based on the repository. Tailwind is efficient for a coherent token-driven UI; CSS Modules are a good option when the codebase values explicit component styles. Do not add both without reason.
- **Motion:** start with CSS transitions and IntersectionObserver. Add Framer Motion only if existing in the repo or if complex sequencing materially improves the experience. Avoid GSAP unless specifically justified.
- **Three.js / React Three Fiber:** not required. A CSS gradient, SVG motif, or static image should be default. Add a small, lazy-loaded, optional 3D hero only if it remains smooth on the specified Ryzen 3 7320U / Radeon 610M and has a static fallback.
- **Deployment:** Vercel, as requested. Prefer static generation/hosting for this content-only site; no server or database unless the owner approves a feature that needs one.

## Dependency policy

Inspect package manager, lockfile, existing app structure, framework version, build command, and lint/typecheck scripts before edits. Keep existing dependencies and pin/lock according to the repository. Do not install a visual library for a single simple effect. Avoid custom cursor libraries, heavy icon packs, analytics, forms, databases, and shader frameworks unless requirements are explicitly expanded.

## Suggested structure (adapt to repo)

```text
src/
  app/ or pages/              route, metadata, global styles
  components/
    site-header.tsx
    section-heading.tsx
    project-card.tsx
    contact-links.tsx
  sections/
    hero.tsx
    about.tsx
    skills.tsx
    projects.tsx
    contributions.tsx
    achievements.tsx
    education.tsx
    contact.tsx
  content/
    projects.ts                 typed, factual project records
  styles/                       tokens/global CSS if not utility-first
public/
  images/                       approved, optimized user assets
  fonts/                        only if licensed and justified
```

Use the repository’s conventions rather than creating duplicate `src/app` and `src/pages` structures. Keep content data separate from presentational components where it improves maintainability. Do not make project cards rely on user interaction to reveal the only description.

## No form backend by default

Direct email/phone links satisfy the contact requirement. If a form is later approved, separately specify a secure Vercel-compatible handler/provider, data retention, consent/privacy text, validation, spam protection, error handling, and contact delivery. Never fake success or expose secret credentials in browser code.
