# Design System

## Brand essence

**Positioning:** An emerging developer and AI builder who makes ambitious product ideas tangible through careful frontend craft and collaborative engineering. **Personality:** curious, composed, inventive. This is a proposed creative framing, not an additional biographical claim.

## Movement and principles

**Movement:** cinematic editorial technology — a restrained blend of dark digital studio, precise typography, and dimensional product interfaces. Principles: (1) content before spectacle; (2) depth through light and layering rather than constant glow; (3) clear ownership and honest attribution; (4) interaction should clarify, never obstruct.

## Color philosophy and proposed tokens

A near-black canvas creates focus; blue suggests clarity and engineering, violet contributes creative warmth. Keep accents localized, with neutral surfaces carrying most reading. Proposed CSS tokens (calibrate in implementation): `--bg: #080B12`, `--surface: #101522`, `--surface-raised: #171E2D`, `--text: #F3F5FA`, `--muted: #A2ACBD`, `--line: rgba(190,205,230,.14)`, `--blue: #5B8CFF`, `--violet: #9A78FF`, `--focus: #B6D0FF`. Verify text contrast rather than relying on these values by appearance. Reserve gradients for hero lighting, section transitions, and selected project artwork; avoid gradient text for long or small copy.

## Layout and depth

Use an editorial, asymmetrical composition rather than repeated centered cards: a compact navigation rail/header, hero with offset portrait/art panel and deliberate negative space, then alternating section alignments and occasional full-width project feature. Establish a readable max-width and generous gutters, but let project compositions break the column. Surface depth uses restrained blur and hairline borders; avoid blur behind dense text and avoid stacking multiple translucent panels.

## Typography system

Proposed pairing: a high-quality contemporary sans for interface/body (e.g. Geist or Inter) and a restrained display face from the same family or a complementary grotesk for headlines. Self-host only if licensing and loading are resolved; otherwise use robust system fallbacks. Use responsive `clamp()` sizes, comfortable body line height (~1.55–1.7), short line lengths (~60–75 characters), and explicit hierarchy. Avoid tiny uppercase labels as the only identifier.

## Signature motifs and brand mark

1. A fine “orbit / trajectory” line: one curved or angled line connecting a small point, used sparingly in hero and section dividers.
2. A soft blue-to-violet light field behind a single focal element, not a glowing outline around every component.
3. A monogram concept built from a custom geometric P/K ligature and one orbital dot. Treat as a proposed mark; do not use a default text glyph as the final logo without review.

Ownable signature color: **electric cobalt blue** (proposed `#5B8CFF`), paired with violet as a supporting accent.

## Interaction philosophy and motion

Hover effects should preview affordances with a small lift, color shift, or image parallax only on capable pointers; focus states should be equally clear. Scroll reveal is subtle and progressive, never required to access content. No fake terminal, fabricated counters, autoplay sound, cursor replacement, or scroll-jacking. See `ANIMATION_SPEC.md` for behavior and reduced-motion rules.

## Voice

Write in first person, specific and grounded. Headline voice: concise, confident without claiming seniority. CTA voice: direct and useful. Example directions: “I build useful interfaces for ambitious ideas.” / “Explore what I’ve been building.” These are candidate copy, not claims of demonstrated outcomes. Avoid generic filler, inflated adjectives, and unverified metrics.

## Responsive identity

Keep the blue/violet light treatment and orbit motif at every size, but reduce dimensional decoration on mobile. Maintain the editorial rhythm with stacked text/image and intentional overlap only when it does not obscure content. On small screens, prioritize the portrait crop and key CTA over decorative orbit elements.
