# DESIGN.md — Design System & Visual Guidelines

## 1. Color System
- **Background (Canvas):** `#111111` (Deep Matte Obsidian)
- **Surface (Cards & Containers):** `#1e1e1e` / `#161f30`
- **Primary Accent (Default Gold):** `#f59e0b` / Hover: `#d97706`
- **Text Main:** `#ffffff` (Headings) / `#e5e5e5` (Body)
- **Text Muted:** `#a0a0a0` / `#94a3b8`
- **Border / Divider:** `rgba(245, 158, 11, 0.15)` & `rgba(255, 255, 255, 0.1)`

## 2. Dynamic 10-Color Palette
Selectable via client theme switcher (`Switcher.tsx`):
- `yellow` (#f59e0b) [Default]
- `green` (#10b981)
- `orange` (#f97316)
- `blue` (#3b82f6)
- `red` (#ef4444)
- `purple` (#8b5cf6)
- `goldenrod` (#eab308)
- `magenta` (#ec4899)
- `yellowgreen` (#84cc16)
- `blueviolet` (#6366f1)

## 3. Typography
- **Headings & Brand:** `Outfit`, sans-serif (700 Bold, 800 ExtraBold, 900 Black)
- **Body & Captions:** `Plus Jakarta Sans`, sans-serif (400 Regular, 500 Medium, 600 SemiBold)
- **Monospace & Code:** `JetBrains Mono` / `system-ui`

## 4. Spacing & Elevation
- Base 8px grid scale (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`).
- Card radius: `12px` - `16px` with subtle border stroke and drop shadows.
- Navigation: Fixed circular icon buttons on desktop, sliding off-canvas on mobile.

## 5. Motion & Transitions
- Micro-interactions on buttons and project cards (scale `1.03` with cubic-bezier `(0.16, 1, 0.3, 1)`).
- Scroll animations powered by `IntersectionObserver`.

