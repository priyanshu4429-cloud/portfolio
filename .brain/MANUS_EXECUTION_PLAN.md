# Manus Execution Plan

## Purpose and interpretation

Treat this `.brain/` directory as the authoritative product specification for a later portfolio implementation. Read the complete directory before making changes. The supplied owner/source repository is authoritative for current code; inspect it first and preserve existing work. These documents are authoritative for content accuracy and design intent. Do not treat candidate copy, proposed tokens, or unresolved placeholders as verified facts.

## Authority order

1. `PROJECT_MASTER.md` for scope, verified facts, exclusions, and attribution.
2. `PROJECT_DOCUMENTATION.md` for project claims and links.
3. `DESIGN_SYSTEM.md` for visual direction/tokens.
4. `WEBSITE_ARCHITECTURE.md` for section order and page structure.
5. `CONTENT_STRATEGY.md` for approved/candidate wording.
6. `ACCESSIBILITY_GUIDELINES.md`, `PERFORMANCE_GUIDELINES.md`, `RESPONSIVE_GUIDELINES.md`, `SEO_STRATEGY.md`, `ANIMATION_SPEC.md` for cross-cutting implementation constraints.
7. `TECH_STACK.md` as a recommendation subordinate to existing repository conventions.
8. `QUALITY_CHECKLIST.md` for later acceptance. Record decisions/confirmed facts in `CHANGELOG.md`.

If requirements collide, factual accuracy and owner consent take precedence, then accessibility, performance, and visual preference. Ask the owner for missing material facts; otherwise omit unresolved claims/assets rather than block unrelated implementation.

## Phase 1 — Inspect before editing

Inspect repository root, branch/status, README, package manifest, lockfile, routes, components, styles, assets, build/lint/typecheck commands, and deployment configuration. Identify uncommitted or existing work. Report the discovered stack and propose a minimal implementation plan consistent with it. Never replace an existing app or asset directory wholesale. If no repository is provided, request/locate the intended project workspace before starting a managed website build.

## Phase 2 — Resolve launch-critical unknowns

Confirm (a) final portrait identity/provenance/approval, (b) permission to publish contact email/phone, (c) current education wording, (d) SIH 2026 exact official name/result phrase, (e) R K Traders permission/facts or omit it, (f) collaborator permission for TrustTrace, and (g) working demo/repository links. Confirm the approved skill inventory and deployment domain before presenting skill badges or social metadata. Do not fabricate while awaiting answers.

## Phase 3 — Implement structure and design

Use the existing routing and styling conventions. Build semantic single-page sections in the specified order, reusable navigation/section heading/project card/contact components, and typed content data only where it reduces repetition. Keep page content visible without JavaScript. Apply dark tokens, editorial asymmetric compositions, cobalt/violet accent, and a restrained portrait treatment. Integrate only approved assets and preserve original files. Use CSS/SVG rather than WebGL by default.

## Phase 4 — Content and assets

Populate each project only from `PROJECT_DOCUMENTATION.md`. Mark collaboration, contribution, and project status explicitly. Use actual demo/repository URLs only after checking destination and permission. Render R K Traders only with confirmed facts, or omit. Do not include internal `[NEEDS CONFIRMATION]` strings in the published UI. Use approved portrait; absent approval, use an abstract decorative treatment or omit the portrait, not a generated face.

## Phase 5 — Responsive, motion, and accessibility

Implement mobile-first breakpoints based on content. Ensure keyboard/touch navigation, semantic markup, focus states, contrast, reduced-motion support, no hover-only content, and direct contact link behavior. Add only subtle, nonessential motion. WebGL is optional with graceful static fallback; no blocking preloader.

## Phase 6 — Performance and SEO

Prefer static/crawlable content and minimize client code. Optimize responsive image sources and fonts; reserve dimensions and prioritize only true LCP media. Check low-powered hardware and WebGL fallback. Add metadata and social preview only for confirmed copy, approved artwork, and confirmed domain. Do not add backend/database/analytics unless requirements are approved.

## Phase 7 — Validation and deployment preparation

Run available format/lint/type checks and production build from the repository's documented lockfile workflow. Review all acceptance clauses in `QUALITY_CHECKLIST.md`, test supported viewport sizes, reduced motion, keyboard-only use, external links and contact actions, and inspect network/console errors. Verify factual claims against source files or owner evidence. Prepare Vercel build settings based on actual repository and verify no secret is exposed to client code. Do not publish or expose personal details/unapproved portrait before explicit owner approval. Record material implementation decisions and newly confirmed facts in `CHANGELOG.md`.

## Suggested file/component shape

Adapt to the actual repo; do not force a migration. Keep page shell/metadata, reusable components, section components, typed project content, global tokens, and approved public assets in distinct logical locations. Avoid duplicate routing systems and unused libraries. The proposed tree in `TECH_STACK.md` is illustrative.
