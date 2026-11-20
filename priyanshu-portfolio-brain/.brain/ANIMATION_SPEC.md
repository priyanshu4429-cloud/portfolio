# Animation and Interaction Specification

## Principle

Motion should explain hierarchy, spatial relation, or feedback. The portfolio remains fully understandable without any animation. Prefer CSS transitions and the browser’s native behavior; introduce a motion dependency only if the chosen framework justifies its cost.

## Approved patterns

- **Initial reveal:** one small opacity/translate transition for hero copy and image, once, after first paint. Do not hide the page waiting for animation.
- **Section reveal:** optional IntersectionObserver-triggered fade/short vertical translation, once per section; content is visible by default and the enhancement must not cause layout shift.
- **Card hover:** subtle elevation (e.g. 2–4 px), border/lighting change, or tiny image scale; only on `hover: hover` devices. No scale that reflows adjacent content.
- **Navigation:** short color/underline transition; mobile menu has a clear state and supports Escape, focus management, and return focus.
- **Pointer parallax:** optional, limited to decorative hero art and desktop fine pointer; cap displacement to a few pixels, throttle updates, disable on touch/coarse pointers, keyboard use, and reduced motion.
- **Smooth anchors:** native CSS smooth scroll only when reduced motion is not requested; preserve direct URL fragments and browser history.

## Prohibited patterns

No fake loading progress or fake terminal typing, autoplay audio/video, scroll-jacking, continuous ambient animation that harms battery, cursor replacement, flashing, essential hover-only information, rapidly repeating effects, or decorative 3D that delays the first useful render.

## Reduced motion and resilience

Honor `prefers-reduced-motion: reduce` in CSS and JavaScript. Remove parallax, smooth scrolling, looping effects, and large transforms; render elements immediately. If JavaScript fails, all text, navigation links, and project links remain visible and usable. Avoid animating layout properties; use opacity/transform. Respect focus visibility throughout transitions.

## Performance bounds

Keep interactions local and composited. Use one observer for multiple sections rather than per-item animation orchestration. Avoid importing GSAP unless the final design has a specific complex sequence that cannot be achieved cleanly otherwise. See `PERFORMANCE_GUIDELINES.md`.
