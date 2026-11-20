# Performance Guidelines

## Device and network context

The specified owner laptop is AMD Ryzen 3 7320U with integrated AMD Radeon 610M on Windows 11. Treat this as a baseline constraint, not the only supported device. Target good usability on average mobile hardware and ordinary connections. Content and contact actions must work if WebGL is unavailable.

## Rendering and scripts

- Prefer server-rendered/static HTML for primary copy and project content.
- Keep the initial client JavaScript small; hydrate only genuinely interactive components.
- Avoid a large canvas/3D scene in the critical path. If introduced, lazy-load after the hero is visible, test frame stability on the specified device, cap pixel ratio, pause when hidden, and offer a CSS/static fallback.
- Avoid unnecessary animation/runtime libraries; split noncritical code and third-party integrations.
- Reserve image dimensions/aspect ratio to prevent layout shift.

## Images and fonts

Use owner-approved originals; generate appropriately sized WebP/AVIF variants and keep an acceptable fallback. Use `srcset`/`sizes`, descriptive filenames, intrinsic dimensions, and lazy loading below the fold. Do not lazy-load the true above-the-fold LCP image; prioritize it appropriately. Crop with `object-fit` only after owner review. Limit blur/backdrop-filter area and layers. Use WOFF2/self-hosted fonts only with license approval and subset where appropriate; preload at most the truly critical face, and retain system fallbacks.

## UX and monitoring

Avoid blocking intro screens, excessive scroll effects, layout shifts, and autoplay. Use Vercel/Web Vitals measurement only with explicit privacy/analytics decision. Engineering target: meet “good” Core Web Vitals at the 75th percentile when real field data exists; during development inspect LCP, INP, and CLS on representative throttled mobile/desktop profiles. Do not claim performance results without measurement.

## Quality gates

- Build is reproducible from the committed lockfile using documented commands.
- No large asset or heavy component is loaded where not needed.
- No console errors or unhandled missing-asset requests.
- Test fallback mode with WebGL disabled/unavailable and with reduced motion enabled.
- Check on a low-powered device or browser throttle before adding optional effects.
