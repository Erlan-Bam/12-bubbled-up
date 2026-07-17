# Auto detailing prospect template design system

This file is the source of truth for standalone auto detailing prospect previews. Individual projects may override accent colors and copy through `src/data/prospect.ts`, but they must preserve the interaction, accessibility, and safety rules below.

## Direction

- Style: Cinematic precision with flat, touch-first controls
- Content emphasis: Show transformation potential through code-native vehicle art and owner-photo placeholders. Never invent packages, prices, coatings, warranties, or results.
- Recommendation adaptation: The recommendation engine suggested guarantees and specific performance metrics. Those are excluded because they require owner evidence.

## Section order

1. Hero and quote CTA
2. Public rating snapshot
3. Service paths
4. Three-step process
5. Owner-photo placeholders
6. Rating evidence
7. Service area
8. FAQ
9. Demo quote form
10. Sources and owner approvals

## Color tokens

| Role | Default | Token |
| --- | --- | --- |
| Background | `#111827` | `--theme-bg` |
| Surface | `#18212f` | `--theme-elevated` |
| Text | `#f8fafc` | `--theme-ink` |
| Muted text | `#b8c4d6` | `--theme-muted-text` |
| Default accent | `#f7c948` | `--theme-accent` |

The prospect config may change accent, surface, and ink values. Every foreground/background pair must retain at least WCAG AA contrast.

## Typography and spacing

- Use the system-first `Sora` display stack and `Manrope` body stack already defined in `src/styles/global.css`.
- Use a 4/8 px spacing rhythm and a maximum content width of 1200 px.
- Keep body text at 16 px or larger on mobile and keep interactive controls at least 44 px high.

## Reusable components

- `PreviewBanner.astro`: fixed unofficial-concept disclosure.
- `PreviewPage.astro`: industry-aware section composition.
- `HeroVisual.astro`: code-native placeholder artwork; never copied customer photography.
- `FaqAccordion.tsx`: keyboard-accessible disclosure of verified and owner-confirmation answers.
- `QuoteForm.tsx`: browser-only form with exact non-submission success copy and scroll recovery.
- `StickyMobileCTA.astro`: two-action mobile bar with reserved page padding.

## CTA behavior

Lead with a quote or consultation action, keep the public phone secondary, and retain the two-action sticky mobile bar.

The form must never have an `action` attribute or transmit data. Its success state must say: “This request was not sent. Preview form — connect to email or CRM after owner approval.”

## Content guardrails

- Keep the fixed “Unofficial website concept prepared for [BUSINESS NAME]” disclosure.
- Keep `noindex, nofollow, noarchive, nosnippet` in HTML and the matching Vercel response header.
- Do not add invented testimonials, customer names, licenses, insurance, awards, prices, warranties, response times, guarantees, staff, service areas, or review schema.
- Label volatile ratings and operational facts for confirmation before launch.
- Use code-native placeholders or owner-supplied, rights-cleared media only.

## Responsive and accessibility checks

- Verify at 390 × 844 and 1440 × 1000, plus a 375 px narrow-phone check.
- Require zero horizontal overflow.
- Keep the disclosure and sticky CTA fully contained after scrolling and form submission.
- Preserve visible focus styles, sequential headings, labeled controls, and reduced-motion behavior.
