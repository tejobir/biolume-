---
name: Bio Lume
description: Quiet luxury dental studio — where precision and warmth share the same room.
colors:
  harbour-teal: "#1A6E7E"
  harbour-teal-light: "#2A8A9E"
  harbour-teal-dark: "#0F4F5C"
  misted-mint: "#5EBF8A"
  misted-mint-soft: "#8FD4AC"
  still-plum: "#2A1520"
  still-plum-deep: "#1C0D15"
  warm-greige: "#A09890"
  warm-linen: "#F0EEEB"
  cloud-cream: "#FAF9F7"
  soft-ash: "#D9D5D0"
typography:
  display:
    fontFamily: "var(--font-display), Playfair Display, Georgia, serif"
    fontSize: "clamp(2.8rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "var(--font-display), Playfair Display, Georgia, serif"
    fontSize: "clamp(2rem, 4.2vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "var(--font-display), Playfair Display, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "var(--font-body), Inter, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 300
    lineHeight: 1.8
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-body), Inter, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: "0.22em"
rounded:
  pill: "9999px"
  lg: "16px"
  md: "8px"
  sm: "4px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "72px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.warm-linen}"
    textColor: "{colors.still-plum}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.misted-mint}"
    textColor: "{colors.cloud-cream}"
  button-cta:
    backgroundColor: "{colors.still-plum}"
    textColor: "{colors.cloud-cream}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-cta-hover:
    backgroundColor: "{colors.harbour-teal}"
    textColor: "{colors.cloud-cream}"
  service-card:
    backgroundColor: "{colors.warm-linen}"
    textColor: "{colors.still-plum}"
    rounded: "0px"
    padding: "36px 40px"
  service-card-hover:
    backgroundColor: "{colors.cloud-cream}"
    textColor: "{colors.still-plum}"
---

# Design System: Bio Lume

## 1. Overview

**Creative North Star: "The Practitioner's Edit"**

Bio Lume's design system is built on a single conviction: that expertise speaks through what is removed, not what is added. Every token, spacing decision, and component choice exists because it earns its place — like an instrument tray where each tool has a precise reason for being there and nothing else. The system projects quiet authority: the kind of confidence that doesn't need to announce itself.

The palette carries warmth without softness, precision without coldness. Harbour Teal and Still Plum pair as complements that hold the site's emotional range, anchored by Warm Linen surfaces that read like good paper stock rather than clinical white. Misted Mint appears sparingly — the one voice that signals delight without performing it.

Motion is purposeful and rare. Entrances earn attention. Transitions confirm state. Nothing moves to decorate. Typography does the heavy lifting: the serif display face carries authority and unhurried confidence, while the light-weight sans body text signals clarity over effort.

This system explicitly rejects the clinical sterility of mainstream dental sites (white walls, blue cross icons, stock photo smiles), the overclaiming warmth of luxury spa aesthetics (marble, gold foil, "bespoke wellness journey" copy), the startup metric-obsession of SaaS templates, and the scroll-jacking anxiety of animation-first design.

**Key Characteristics:**
- Restrained color strategy: teal accent on ≤10% of surface; plum and linen carry the load
- Serif display font at tight negative tracking (-0.04em) for editorial authority
- Generous vertical rhythm (1.8 line-height in body) that slows the read down
- Flat surfaces with rare tonal hover transitions; no decorative shadows
- Motion: entrances only, expo ease-out, reduced-motion respected throughout

## 2. Colors: The Practitioner's Palette

A restrained palette where each color has a single job and does it without overlap.

### Primary

- **Harbour Teal** (`#1A6E7E`): The practice's accent voice. Used on interactive elements at rest (nav hover, selection highlight, teal text emphasis in headings), icon hover states, and the CTA button hover. Appears on ≤10% of any surface. Its rarity is the point. OKLCH canonical: `oklch(46% 0.085 200)`.
- **Harbour Teal Light** (`#2A8A9E`): Tonal step up; used sparingly for teal/8 tints (service icon circle background at rest: `bg-teal/8`).
- **Harbour Teal Dark** (`#0F4F5C`): Deep tonal step; available for high-contrast teal contexts, borders, or pressed states.

### Secondary

- **Misted Mint** (`#5EBF8A`): One step warmer and lighter than teal. Used for positive emphasis: the italic "luxury" in the hero headline, the book-visit button hover, the mobile menu CTA, and the dot in the logo lockup. It appears where delight is intentional, not incidental. OKLCH canonical: `oklch(72% 0.12 155)`.
- **Misted Mint Soft** (`#8FD4AC`): Soft tonal step; available for mint tints and disabled or muted mint contexts.

### Neutral

- **Still Plum** (`#2A1520`): The system's primary text color and main CTA background. Almost-black with a warm red-violet undertone that prevents clinical coldness. Every heading, body paragraph, and button label uses this as its text ground. OKLCH canonical: `oklch(16% 0.04 330)`.
- **Still Plum Deep** (`#1C0D15`): Deepest tone; used for the mobile overlay background at 95% opacity and other maximum-depth contexts.
- **Warm Greige** (`#A09890`): Mid-range neutral for secondary text (subheadings, captions, labels at reduced opacity). Warm undertone keeps it from going grey-blue.
- **Warm Linen** (`#F0EEEB`): The site's canvas. Background color for every section and most components. A warm off-white with a faint tan cast — closer to uncoated paper stock than a painted wall. Never pure white.
- **Cloud Cream** (`#FAF9F7`): The elevated surface. Used for card hover states and the body background in elevated contexts. One step lighter than Warm Linen.
- **Soft Ash** (`#D9D5D0`): Dividers, borders, and hairlines. Low-contrast; separates without interrupting.

### Named Rules

**The One Voice Rule.** Harbour Teal appears on ≤10% of any given screen. Its scarcity makes it meaningful. If a new element reaches for teal because it "feels premium," reconsider — it probably wants Warm Linen and Still Plum instead.

**The No-Pure-White Rule.** `#fff` is prohibited. Every surface uses Warm Linen (`#F0EEEB`) or Cloud Cream (`#FAF9F7`). The warmth is intentional; clinical white belongs to the anti-reference, not the product.

## 3. Typography: Serif Authority, Sans Clarity

**Display Font:** `var(--font-display)`, Playfair Display, Georgia, serif
**Body Font:** `var(--font-body)`, Inter, system-ui, sans-serif

**Character:** The serif display face carries editorial authority with Italian elegance — the same personality as a well-designed consultation card. The light-weight sans body is its counterpart: neutral, clear, and deferential. They do not compete. The display speaks; the sans assists.

### Hierarchy

- **Display** (regular/400, `clamp(2.8rem, 7vw, 6rem)`, line-height 1.0, tracking -0.04em): Hero headline only. Pinned to the bottom-third of the hero section, word-by-word entrance animation. Occasional italic word in Misted Mint for selective emphasis.
- **Headline** (regular/400, `clamp(2rem, 4.2vw, 3.4rem)`, line-height 1.05, tracking -0.02em): Section headings (About, Services, Testimonials, Contact). Always `text-balance`. Italic `<em>` in Harbour Teal for emphasis words.
- **Title** (regular/400, `1.5rem`, line-height 1.2, tracking -0.015em): Component headings — service names, pillar titles, doctor name. Serif; pairs with body text below.
- **Body** (light/300, `15.5px` / `15px`, line-height 1.8): All paragraph copy. Max line length 65–72ch. Color: `still-plum/65` (65% opacity) for secondary body; full opacity for primary. `text-pretty` wrapping.
- **Label** (medium/500, `11px`, tracking 0.22em, uppercase): Section eyebrows ("The Clinic", "Treatments", "Our Doctor"). Teal at 80% opacity. Always preceded by a short hairline (`h-px w-8 bg-teal/40`).
- **Caption / Small** (light/300 or regular/400, `14px`, line-height 1.7): Supporting text inside cards, blurbs, metadata.

### Named Rules

**The Tracking Contract.** Display type is tight (-0.04em); label type is wide (+0.22em). Nothing in between uses arbitrary tracking. This range is the system's typographic signature.

**The Italic Emphasis Rule.** Italic is reserved for a single emphasis word per section heading — the word that carries the section's emotional argument. It appears in Harbour Teal or Misted Mint, never in Still Plum (which reads as a styling mistake, not emphasis).

## 4. Elevation

Bio Lume is a flat-first system. Surfaces rest at the same visual plane. Depth is expressed through tonal contrast (Warm Linen → Cloud Cream), gentle opacity stacking, and spatial separation via whitespace — not shadows.

Two shadow tokens exist for specific, purposeful use:

### Shadow Vocabulary

- **Soft ambient** (`0 8px 30px rgba(42, 21, 32, 0.06)`): Subtle lift for components that float above the canvas — modals, popovers, or any element that needs to read as detached. Low opacity keeps it from reading as designed. Named `shadow-soft` in Tailwind.
- **Teal glow** (`0 12px 40px rgba(26, 110, 126, 0.15)`): Directional highlight. Used on teal-accented elements when a glow reinforces the primary color's presence (hover states on CTA buttons, focused teal components). Named `shadow-glow` in Tailwind.

### Named Rules

**The Flat-By-Default Rule.** Components are flat at rest. A shadow appears only in response to state (hover elevation, modal layer, focused CTA). If you're reaching for a shadow on a static card, reach for a background tint instead.

## 5. Components

### Buttons

Pill shape is the system's primary button form — rounded ends signal approachability within the restrained palette.

- **Shape:** Full pill (`border-radius: 9999px`). Internal padding: `14px 28px` (primary), `10px 20px` (nav CTA).
- **Primary (hero / section CTA):** Warm Linen background, Still Plum text. On hover: Misted Mint background, Cloud Cream text. Transition: 300ms `ease-out-expo`. Icon (ArrowDownRight, 16px, strokeWidth 1.5) translates +0.5px on hover.
- **Nav CTA:** Still Plum background, Cloud Cream text, mint dot accent. On hover: Harbour Teal background.
- **Ghost / text link:** Small sans text, white/70 opacity, underline offset 6px, decoration at 30% white opacity. On hover: full white. No pill, no background.
- **Mobile menu CTA:** Misted Mint background, Still Plum text, pill shape.

### Service Cards

The site's primary content unit. A grid of 6 cards using gap-px separation on a `bg-plum/10` backing — creating hairline dividers without a border property.

- **Shape:** Square corners (`border-radius: 0`). Grid container has `rounded-2xl` overflow-hidden to round the outer corners as a group.
- **Background:** Warm Linen at rest; Cloud Cream on hover. Transition: 500ms.
- **Icon circle:** 48×48px circle, `bg-teal/8` at rest → `bg-harbour-teal` on hover. Icon color: Harbour Teal at rest → Cloud Cream on hover.
- **Arrow:** `ArrowUpRight` top-right corner, plum/30 at rest → Harbour Teal on hover, +0.5px translate.
- **Bottom accent line:** 1px `bg-teal` positioned `bottom-0 left-9 right-9`, `scaleX(0)` at rest → `scaleX(1)` on hover via `origin-left`. This is the system's one permitted bottom-line accent (full-width bottom, not a side stripe).
- **Internal padding:** `36px 40px` (p-9 / p-10 at md).

### Pillar List

Used in the About section for the three practice pillars.

- **Separator:** `border-t border-plum/10` with `padding-top: 28px`. No cards; no backgrounds. Whitespace and the hairline do the structural work.
- **Index:** Display serif, 24px, `text-teal/70` at rest → `text-harbour-teal` on hover.
- **Layout:** Two-column grid (`grid-cols-[auto_1fr]`), gap 28–40px. No equal-height constraints.

### Navbar

- **Scrolled state:** `bg-offwhite/80 backdrop-blur-xl border-b border-plum/5`. Transition 500ms.
- **Transparent state:** `bg-transparent`. Nav links: white.
- **Scrolled links:** `text-plum/70`, hover `text-harbour-teal`.
- **Logo lockup:** "Bio" in Still Plum serif, "Lume" italic in Harbour Teal serif, followed by a 6×6px mint dot.
- **Mobile overlay:** Still Plum Deep at 95% opacity + `backdrop-blur-md`. Links stagger-animate in display serif at 4xl.

### Inputs (Contact Form)

The codebase uses `react-hook-form` with `zod` validation. Visual treatment follows the system's flat doctrine.

- **Style:** Thin border (`border border-plum/15`), Warm Linen background, Still Plum text.
- **Focus:** Border shifts to Harbour Teal (`border-harbour-teal`). No glow shadow on focus; border color alone.
- **Error:** Border shifts to an error red (outside the current palette; use `oklch(55% 0.18 25)` when needed). Error message below in body/small.
- **Radius:** `rounded-lg` (16px) consistent with section containers.

### Section Label (Eyebrow)

A recurring pattern across all sections:

```
<div class="label-eyebrow">
  <span class="hairline" />
  Section Name
</div>
```

11px uppercase, tracking 0.22em, Harbour Teal at 80% opacity. Preceded by a 32×1px horizontal rule in `bg-teal/40`, vertically aligned to the middle of the text.

## 6. Do's and Don'ts

### Do

- **Do** use `text-pretty` and `text-balance` on all heading and paragraph copy. These are table stakes, not optional.
- **Do** use serif italics for a single emphasis word per section heading. One word, in Harbour Teal or Misted Mint.
- **Do** use the label eyebrow pattern (hairline + uppercase label) to open every section before the headline.
- **Do** keep spacing varied for rhythm: section verticals at `py-28 md:py-36`, internal component gaps non-uniform.
- **Do** keep Harbour Teal on ≤10% of any surface. Count before adding.
- **Do** respect `prefers-reduced-motion`. Every Framer Motion transition includes a `useReducedMotion` check.
- **Do** use Warm Linen (`#F0EEEB`) as the universal canvas. Cloud Cream (`#FAF9F7`) only for elevated or hovered surfaces.
- **Do** use the bottom-line reveal (scaleX 0→1, origin-left) as the hover accent for service-style cards. It is the system's permitted accent line.
- **Do** write section copy that earns its specificity: "Class-B autoclaved instruments, sealed packaging" beats "highest standards of hygiene."

### Don't

- **Don't** use `#fff` or `#000`. Both are banned. Warm Linen and Still Plum Deep are the limits.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored stripe on any card, list item, or callout. Rewrite with background tints or the bottom-line reveal pattern instead.
- **Don't** use `background-clip: text` with a gradient. Gradient text is prohibited. Emphasis is weight and color, not decoration.
- **Don't** apply glassmorphism decoratively. Backdrop blur appears only on the navbar scroll state and the mobile overlay; nowhere else.
- **Don't** create identical card grids. Service cards avoid this via the gap-px grid pattern (no individual borders) and hover transitions. Any new grid should have a structural reason to differ from this pattern before reaching for cards.
- **Don't** make the site look like a dental clinic. No blue crosses, no stock photo smiles, no clinical white, no "Your Smile, Our Priority" copy.
- **Don't** import luxury spa aesthetics. No marble textures, no gold foil, no over-kerned display at 400% opacity as a background watermark, no "wellness journey" framing.
- **Don't** use SaaS metric templates. No hero numbers ("2,000+ smiles restored"), no identical icon-grid feature lists, no gradient accents on stat cards.
- **Don't** animate layout properties (width, height, padding, margin). Framer Motion transitions use `opacity` and `y`/`x` transforms only. Ease-out-expo (`cubic-bezier(0.16, 1, 0.3, 1)`) is the system's easing signature.
- **Don't** open a modal when an inline or progressive disclosure would work. Modals are a last resort.
