# Accessibility Guidelines

Target WCAG 2.2 AA as the implementation goal, with manual keyboard and screen-reader review in addition to automated checks.

## Semantics and navigation

Use one `<h1>`, meaningful ordered heading levels, landmarks (`header`, `nav`, `main`, `section`, `footer`), list semantics for grouped links/projects, and a visible-on-focus skip link. Use real anchors for navigation and buttons for actions. Provide meaningful link text; avoid “click here.” Give icon-only controls accessible names and mobile-menu expanded state.

## Keyboard and focus

All controls must be keyboard operable with logical tab order, visible focus indicator, no keyboard trap, and Escape behavior for dismissible menus/overlays. Avoid positive `tabindex`. Do not remove outlines without a strong replacement. Ensure sticky headers do not cover focused controls or fragment targets.

## Contrast, typography, and visual state

Verify WCAG contrast for actual text, icons conveying meaning, borders and focus indicators. Do not use color alone to encode status or attribution. Support zoom and text resizing without loss of content/function. Avoid small, low-contrast meta labels; gradients cannot be the only text background.

## Images and motion

Write contextual alt for informative approved portraits/screenshots; use `alt=""` for decorative motifs. Do not put important information only inside a screenshot. Honor `prefers-reduced-motion`; motion is never necessary to read or navigate. Avoid flashing and auto-updating content.

## Forms (only if later added)

Label every control programmatically, describe required fields, identify errors in text, associate hints, preserve entered values after errors, and announce success/failure accessibly. Do not ship a form without actual delivery and privacy behavior.

## Validation

Test full keyboard-only operation, visible focus, reduced motion, screen-reader heading/landmark structure, high zoom, contrast, and a mobile screen reader. Automated audits are helpful but do not establish full accessibility.
