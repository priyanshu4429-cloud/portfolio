# Responsive Guidelines

## Approach

Design mobile-first from content priorities, then expand the composition for tablet and desktop. Breakpoints should be chosen where the layout requires them, not copied mechanically; document actual values in code/design tokens. Verify at approximately 320–375 px narrow mobile, 390–430 px large mobile, 768 px tablet, 1024 px compact desktop, and 1280–1440 px desktop, plus browser zoom.

## Layout

- Keep body copy within a comfortable measure; use fluid type and spacing with bounded `clamp()` values.
- At mobile widths, stack hero content, portrait/art, and CTA in a deliberate reading order. Never position essential text over a busy image.
- Convert project cards to a single column at narrow widths; retain complete summaries and contribution labels without hover.
- Avoid fixed widths, horizontal page overflow, clipped labels, and content that depends on sideways scrolling.
- Sticky navigation must not obscure anchor targets or take excessive vertical space. Use a real menu button with state announcement on mobile.
- Images need appropriate responsive crops; preserve face visibility and permit owner-approved focal position.

## Touch and input

Interactive targets should be comfortably tappable (aim at least 44×44 CSS px where practical) with spacing between adjacent actions. No pointer-only controls, hover-only descriptions, or cursor-dependent interactions. Ensure keyboard focus order matches visual order.

## Responsive behavior under constraints

Reduce decoration and disable pointer parallax on touch/coarse input. Do not load or render a separate heavy mobile 3D model by default; use the static fallback. Respect browser text scaling and do not lock orientation. Test long project titles, zoom, and the largest text expansion expected from wrapping.
