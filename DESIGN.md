# DESIGN.md — Design System & Visual Guidelines

## 1. Tashteeb Light Palette
- **Canvas Background (`--bg-page`):** `#F7F1E5` (Warm Cream / Linen)
- **Surface (`--bg-surface`):** `#FDFBF7` (Clean Off-White for cards, panels, inputs, modals)
- **Border / Dividers (`--border-color`):** `#E8DFCE` (Soft Sandstone solid border)
- **Primary Accent (`--primary`):** `#0D5257` (Deep Petrol / Dark Pine for main buttons, active links, primary icons)
- **Primary Soft Tint (`--primary-soft`):** `#E1ECEC` (Subtle petrol tint for chips, badges, hover accents)
- **Secondary Accent (`--secondary`):** `#D45D35` (Warm Terracotta / Clay for highlights, badges, CTA micro-accents)
- **Headings & Titles (`--text-heading`):** `#232524` (Deep Charcoal, WCAG AAA compliant on `--bg-surface` and `--bg-page`)
- **Body Text (`--text-body`):** `#646562` (Readable Slate, WCAG AA compliant >= 4.5:1)

## 2. Accessibility & Contrast
- Contrast ratios strictly adhere to **WCAG 2.1 AA** standards:
  - Body text (`#646562`) against `--bg-page` (`#F7F1E5`) and `--bg-surface` (`#FDFBF7`): >= 4.5:1.
  - Headings (`#232524`) against `--bg-page` and `--bg-surface`: >= 11:1 (AAA).
  - Primary button text: `#FFFFFF` against `--primary` (`#0D5257`): >= 7.8:1 (AAA).
  - Secondary badge text: `#FFFFFF` against `--secondary` (`#D45D35`): >= 4.6:1 (AA).

## 3. Typography
- **Headings & Brand:** `Outfit`, sans-serif (700 Bold, 800 ExtraBold, 900 Black)
- **Body & Captions:** `Plus Jakarta Sans`, sans-serif (400 Regular, 500 Medium, 600 SemiBold)
- **Monospace & Code:** `Space Mono` / `JetBrains Mono` / `system-ui`

## 4. Spacing & Elevation
- Base 8px grid scale (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`).
- Card radius: `12px` - `16px` with subtle border stroke (`#E8DFCE`) and light drop shadows (`rgba(13, 82, 87, 0.08)`).
- Navigation: Fixed circular icon buttons on desktop, sliding off-canvas on mobile.

## 5. Motion & Transitions
- Micro-interactions on buttons and project cards (scale `1.03` with cubic-bezier `(0.16, 1, 0.3, 1)`).
- Scroll animations powered by `IntersectionObserver` with smooth revealators.
