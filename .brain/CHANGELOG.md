# Changelog

## Implementation Log — 2026-11-21

### Phase 1: Audit & Repository Foundation
- Audited all 16 specification files within `.brain/` following the defined reading order.
- Extracted verified facts from `Priyanshu_Kumar_GAO_Internship_Questionnaire final.docx` confirming Priyanshu Kumar's name, email, phone, location (West Bengal, India), institution (MCKV Institute of Engineering, B.Tech CSE 2nd Year), and SIH 2026 Grand Finale selection.
- Established clean Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4 repository structure in `D:\INTERNSHIP`.
- Preserved both supplied candidate portraits (`portrait-wide-reference.jpeg` and `portrait-headshot-reference.jpeg`) under `public/assets/` without publishing unapproved imagery to the public hero (enforcing Rule 4).

### Phase 2: Design Tokens & Typography
- Calibrated dark-first charcoal theme in `src/app/globals.css`:
  - Canvas background: `--bg: #080B12`
  - Surfaces: `--surface: #101522`, `--surface-raised: #171E2D`
  - Electric blue signature accent: `--blue: #5B8CFF`
  - Supporting creative accent: `--violet: #9A78FF`
  - Line borders: hairline `rgba(190, 205, 230, 0.14)` matching `.brain/DESIGN_SYSTEM.md`
- Implemented accessible focus rings (`:focus-visible`), WCAG 2.2 AA compliant contrast, and subtle glassmorphic styling.
- Bound Geist and Geist Mono via `next/font/google`.

### Phase 3 & 4: Website Architecture & Real-Time 3D Hero Experience
- Engineered responsive navigation header with skip link (`#main-content`), brand monogram, anchor navigation, and accessible mobile drawer with Escape key listener.
- **Real-Time 3D Hero Scene (`HeroScene.tsx`, `HeroSceneCanvas.tsx`, `Monogram3D.tsx`, `FloatingElements.tsx`):**
  - Upgraded the hero section with a true real-time 3D interactive scene built with **Three.js** and **React Three Fiber**.
  - **Procedural 3D Geometric P/K Monogram:** Extruded with real volumetric depth (`THREE.ExtrudeGeometry` with beveled edges) and layered dimensional facets.
  - **Premium Materials:** High-refraction `MeshPhysicalMaterial` featuring metallic charcoal base, electric blue-violet rim reflections (`metalness: 0.85`, `roughness: 0.22`, `clearcoat: 0.8`), and subtle emissive glow.
  - **Cinematic Multi-Point Lighting:** Neutral ambient illumination, cobalt key light (`#5B8CFF`), violet rim light (`#9A78FF`), and central depth point light with realistic quadratic falloff.
  - **Spatial Surroundings & Depth:** Concentric 3D orbital rings (`torusGeometry`), floating faceted geometric polyhedra (icosahedron, octahedron) positioned at varied z-depths (`z: -2.1` to `z: 1.2`), and an orbiting satellite beacon with traveling point light.
  - **Smooth Damped Parallax:** Camera rig with smooth `THREE.Vector3.lerp` mouse tracking.
  - **Hardware & Accessibility Adaptation:** Capped pixel ratio (`dpr={[1, 1.5]}`) optimized for the baseline AMD Ryzen 3 7320U / Radeon 610M, with automatic static fallback for `prefers-reduced-motion` and non-WebGL environments.
  - **Portrait Audit Modal:** Preserved review drawer for owner inspection of unapproved candidate portraits per Rule 4.

### Phase 5 & 6: Projects, Contributions & Attribution
- Authored `src/content/portfolio-data.ts` establishing single-source truth for:
  - **AI Agency Automation Platform:** Personal product in development; lead discovery, demo generation, and outreach/CRM workflows. Explicit disclaimer rejecting false claims of revenue or paying clients.
  - **Veyra Sentinel:** Collaborative project; SIH 2026 Grand Finale Top 30 selection. Explicit attribution: Priyanshu led frontend development in React & TypeScript; teammates handled backend services and ML training.
  - **TrustTrace:** Collaborative cybersecurity platform. Explicit attribution: Worker 02 pipeline engineer (evidence ingestion, normalization, persistence, API integration).
  - **R K Traders:** Client website project. All unverified internal metrics and proprietary client information withheld per privacy rules.
- Engineered `ProjectCard` component with visual separation for project type, verified individual contributions, and attribution boundaries.
- Designed `ProjectIllustration` component providing bespoke system diagrams (workflow node graph, telemetry waveform, schema ingestion architecture, and storefront layout) without fake marketing mockups.
- Built `ContributionsSection` providing an in-depth engineering breakdown of architectures authored.

### Phase 7: Achievements, Education, Contact & Footer
- Built `AchievementsSection` detailing the Smart India Hackathon (SIH) 2026 Grand Finale participation and Top 30 national selection.
- Built `EducationSection` detailing B.Tech in CSE at MCKV Institute of Engineering with academic coursework.
- Built `ContactSection` featuring `ContactCard` with direct `mailto:`, direct `tel:`, copy-to-clipboard functionality with live feedback, and a native direct email composer helper (avoiding fake backend forms).
- Built semantic `Footer` with dynamic runtime year and back-to-top anchor.

### Phase 8: Accessibility, Performance & Verification
- Full keyboard operability and visible focus rings (`:focus-visible`).
- Zero forced layout shift; all media dimensionally bounded.
- Support for `prefers-reduced-motion: reduce`.
- Full static generation compatibility with Next.js Turbopack compiler (`npm run build` exits 0 with optimized static content).
- ESLint passed with 0 errors and 0 warnings (`npm run lint` exits 0).
