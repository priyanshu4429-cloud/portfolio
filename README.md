# Priyanshu Kumar — Premium Developer Portfolio

Official production-quality developer portfolio website for **Priyanshu Kumar** (Developer | AI Builder | Aspiring Founder), built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.

## 🚀 Live Local Run Commands

To run and verify the portfolio locally:

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Or create and launch optimized production build
npm run build
npm run start
```
The portfolio runs locally at `http://localhost:3000`.

---

## 🛠️ Technologies Actually Used

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/) with React 19 and Turbopack compiler.
- **Language:** TypeScript 5 with strict type safety.
- **Styling:** Tailwind CSS v4 token-driven dark charcoal design system.
- **Typography:** Geist & Geist Mono loaded via `next/font/google`.
- **Icons:** Custom SVG brand ligature mark & social icons + Lucide React icons.
- **Quality & Accessibility:** WCAG 2.2 AA compliant contrast, semantic HTML, visible keyboard focus rings, and `prefers-reduced-motion` support.

---

## 🏛️ Project Architecture & Structure

```text
├── .brain/                         # Authoritative product specifications & changelog
├── public/
│   ├── assets/                     # Preserved candidate portrait references
│   └── ...                         # Static icons & vectors
├── src/
│   ├── app/
│   │   ├── globals.css             # Design tokens, keyframes & glassmorphism
│   │   ├── layout.tsx              # SEO metadata, OpenGraph, Viewport & font injection
│   │   └── page.tsx                # Single-page orchestrator with semantic landmarks
│   ├── components/
│   │   ├── brand-mark.tsx          # Custom geometric P/K ligature with orbital dot
│   │   ├── contact-card.tsx        # Direct contact actions, copy feedback & composer helper
│   │   ├── footer.tsx              # Semantic footer with runtime year & back-to-top
│   │   ├── navbar.tsx              # Sticky header, skip-to-content link & mobile drawer
│   │   ├── orbital-hero-visual.tsx # 3D/CSS orbital visual with portrait audit modal
│   │   ├── project-card.tsx        # Editorial project cards with attribution callouts
│   │   ├── section-header.tsx      # Reusable section heading with trajectory badge
│   │   └── social-icons.tsx        # Pixel-perfect GitHub & LinkedIn SVG icons
│   ├── content/
│   │   └── portfolio-data.ts       # Single source of truth for verified facts & claims
│   └── sections/
│       ├── hero-section.tsx        # Hero with editorial split layout & CTAs
│       ├── about-section.tsx       # Grounded biographical context & engineering ethos
│       ├── skills-section.tsx      # Verified competencies grouped by domain
│       ├── projects-section.tsx    # Showcase of verified projects with live links
│       ├── contributions-section.tsx # Detailed technical breakdown of systems authored
│       ├── achievements-section.tsx  # SIH 2026 Grand Finale Top 30 recognition
│       ├── education-section.tsx   # MCKV Institute of Engineering, B.Tech CSE 2nd Year
│       └── contact-section.tsx     # Direct outreach & messaging section
├── package.json
└── tsconfig.json
```

---

## 🛡️ Truth & Attribution Protocol

1. **AI Agency Automation Platform:** Represented as an in-development personal product exploring lead discovery, demo generation, and outreach/CRM workflows. Contains zero fabricated claims of revenue, paying customers, or commercial scale.
2. **Veyra Sentinel:** Collaborative project. Accurately highlights Priyanshu's contribution: Frontend engineering in React and TypeScript. Backend architecture and machine learning model training are explicitly attributed to fellow teammates. Reached Top 30 selection nationally and participated in the **Smart India Hackathon (SIH) 2026 Grand Finale**.
3. **TrustTrace:** Collaborative cybersecurity project. Accurately highlights Priyanshu's role as Worker 02 engineer (evidence ingestion, data normalization, persistence layer, and REST API integration). Full project ownership is not claimed.
4. **R K Traders:** Identified as a commercial client website project. Proprietary details and unverified internal metrics are withheld per client privacy guidelines.
5. **Portrait Identity:** In accordance with Rule 4 ("Never publish an unapproved portrait"), the public Hero features a high-craft 3D/CSS orbital system with the P/K geometric monogram. The candidate reference images are preserved under `public/assets/` and can be inspected via the review modal until final owner publishing approval is given.

---

## ☁️ Vercel Deployment Instructions

The project is pre-configured for instant zero-configuration deployment to Vercel:

1. Push this repository to GitHub under `priyanshu4429-cloud` (e.g. `priyanshu4429-cloud/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select the repository `portfolio`.
4. Leave build settings at default:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`
5. Click **Deploy**.
