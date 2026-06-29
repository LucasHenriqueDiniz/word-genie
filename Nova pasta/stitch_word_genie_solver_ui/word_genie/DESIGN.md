---
name: Word Genie
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#424754'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#495e8a'
  on-secondary: '#ffffff'
  secondary-container: '#b6ccff'
  on-secondary-container: '#405682'
  tertiary: '#924700'
  on-tertiary: '#ffffff'
  tertiary-container: '#b75b00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#b1c6f9'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#304671'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  letter-grid:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  container-max: 768px
  gutter: 20px
---

## Brand & Style
The design system is built on a philosophy of **Functional Minimalism**. For a utility-driven word solver, the UI must disappear to let the content—letters and words—take center stage. The emotional response should be one of "effortless intelligence": clean, fast, and reliable.

The aesthetic utilizes a **Corporate Modern** framework with heavy inspiration from **Minimalism**. It features vast white space (or deep slate in dark mode), high-quality sans-serif typography, and subtle micro-interactions that provide feedback without distraction. The interface avoids unnecessary decorative elements, using only light borders and tonal shifts to define hierarchy.

## Colors
The palette is intentionally restrained to maintain focus. 

- **Primary Blue (#3b82f6):** Used exclusively for primary actions, active input focus states, and key highlights. It represents the "magic" of the solver.
- **Neutral Grays:** We use a Slate-based scale. `Slate-900` for primary text in light mode, and `Slate-50` for primary text in dark mode.
- **Semantic Colors:** Success (Green-500) for "correct" letter placements and Warning (Amber-500) for "misplaced" letters, adhering to standard word-game conventions.

**Dark Mode Strategy:**
The system defaults to a light mode but supports a deep "Midnight" dark mode using `Slate-950` as the base background. Surfaces should use `Slate-900` to create a subtle lift.

## Typography
We utilize **Inter** across all levels for its exceptional legibility and systematic feel. 

- **Display & Headlines:** High weight (Bold/ExtraBold) with tighter letter spacing to create a strong visual anchor.
- **The Letter Grid:** This is a specialized role for the game interface. Characters should be centered, uppercase, and bold to mimic physical game tiles.
- **Body Text:** Standard weight with generous line height (1.5 - 1.6) to ensure long FAQ sections or instructions remain readable.

## Layout & Spacing
The layout follows a **Fixed Grid** approach for the main solver interface, centered on the screen to minimize eye travel. 

- **Maximum Width:** The core application container is capped at `768px` to maintain focus. 
- **Vertical Rhythm:** A strict 4px baseline grid is used. Sections (Input vs. Results) are separated by `xl` (48px) spacing.
- **Responsive Behavior:** On mobile, side margins shrink to `md` (16px). The word grid should scale fluidly to fit the screen width while maintaining square aspect ratios for tiles.

## Elevation & Depth
This design system uses **Tonal Layers** and **Low-contrast outlines** instead of heavy shadows to maintain a flat, modern aesthetic.

- **Level 0 (Base):** The main background.
- **Level 1 (Cards/Grids):** Subtle border (1px) using `Slate-200` (light) or `Slate-800` (dark). No shadow.
- **Level 2 (Active/Floating):** Used for tooltips or dropdowns. A very soft, diffused shadow: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`.

Depth is communicated through color density; interactive elements become slightly darker (light mode) or lighter (dark mode) on hover.

## Shapes
We use a **Soft** shape language. 

- **Input Fields & Buttons:** `0.25rem` (4px) corner radius to feel precise and professional.
- **Game Tiles:** `0.375rem` (6px) to give them a slightly more tactile, "object-like" feel compared to UI buttons.
- **Accordions/Cards:** `0.5rem` (8px) for larger container groupings.

## Components
- **Word Grids:** Tiles should have a 1px border. Empty tiles use a dashed border; filled tiles use a solid border with a subtle background lift.
- **Input Fields:** Use a 2px solid primary blue border for the `focus` state. Add a gentle outer glow (ring) of 4px with 20% opacity of the primary color.
- **Buttons:** 
    - *Primary:* Solid Blue background, White text. 
    - *Secondary:* Ghost style (transparent background) with a neutral border.
- **Stats Bars:** Horizontal bars with rounded ends. The "fill" should use the primary blue, while the "track" uses a light gray.
- **FAQ Accordions:** Use a simple chevron icon. The header should have a hover state that slightly shifts the background color. No borders between items—use a single 1px divider line.
- **Chips:** Small, pill-shaped tags for "Word Length" or "Difficulty" filters, using a light tonal background of the neutral color.