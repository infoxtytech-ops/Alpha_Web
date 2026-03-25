/**
 * TYPOGRAPHY CONFIGURATION
 * 
 * This file documents the centralized typography system for Alpha Medi Lab.
 * 
 * ═════════════════════════════════════════════════════════════════════════════
 * TO CHANGE FONTS: Edit app/layout.tsx
 * ═════════════════════════════════════════════════════════════════════════════
 * 
 * Font variables are defined in: app/layout.tsx (lines 8-17)
 * CSS font-family declarations: app/globals.css (lines 4-23)
 * 
 */

/**
 * CURRENT TYPOGRAPHY SETUP
 * ─────────────────────────────────────────────────────────────────────────────
 * 
 * HEADINGS (H1-H6):
 * - Font Family: Montserrat (sans-serif)
 * - CSS Variable: --font-headings
 * - Weights: 500, 600, 700, 800, 900
 * - Tailwind Classes: font-medium, font-semibold, font-bold, font-extrabold, font-black
 * 
 * Used for: Page titles, section headings, card titles, labels
 * 
 * BODY TEXT:
 * - Font Family: Libre Baskerville (serif)
 * - CSS Variable: --font-body
 * - Weights: 400, 500
 * - Tailwind Classes: font-normal, font-medium
 * 
 * Used for: Paragraphs, descriptions, body content
 * 
 */

/**
 * HOW TO SWITCH FONTS
 * ─────────────────────────────────────────────────────────────────────────────
 * 
 * STEP 1: Open app/layout.tsx
 * 
 * STEP 2: Import new fonts from Google Fonts (or other sources):
 *   import { YourHeadingFont, YourBodyFont } from 'next/font/google';
 * 
 * STEP 3: Configure font variables (around line 8-17):
 *   const libreBaskerville = YourBodyFont({...})  // Body font
 *   const montserrat = YourHeadingFont({...})     // Heading font
 * 
 * STEP 4: Make sure weights include these minimum requirements:
 *   Body font:    400 (normal), 500 (medium) minimum
 *   Heading font: 600, 700, 800, 900 for proper bold/black rendering
 * 
 * STEP 5: Ensure CSS variables are correctly assigned:
 *   - Body font should have: variable: '--font-body'
 *   - Heading font should have: variable: '--font-headings'
 * 
 * STEP 6: The CSS in app/globals.css will automatically use these fonts
 *   (No changes needed in globals.css for simple font swaps)
 * 
 * EXAMPLE - To use Inter + Playfair Display:
 * ──────────────────────────────────────────
 * import { Inter, Playfair_Display } from 'next/font/google';
 * 
 * const inter = Inter({
 *   subsets: ['latin'],
 *   weight: ['400', '500'],
 *   variable: '--font-body',
 *   display: 'swap',
 * });
 * 
 * const playfair = Playfair_Display({
 *   subsets: ['latin'],
 *   weight: ['700', '800', '900'],
 *   variable: '--font-headings',
 *   display: 'swap',
 * });
 * 
 */

/**
 * FONT WEIGHTS MAPPING
 * ─────────────────────────────────────────────────────────────────────────────
 * 
 * Tailwind Font Weights → Font Weight Value:
 * 
 * font-thin       → 100
 * font-extralight → 200
 * font-light      → 300
 * font-normal     → 400  (Body text primary weight)
 * font-medium     → 500
 * font-semibold   → 600
 * font-bold       → 700
 * font-extrabold  → 800
 * font-black      → 900  (Hero headings)
 * 
 */

/**
 * TYPOGRAPHY USAGE ACROSS THE APP
 * ─────────────────────────────────────────────────────────────────────────────
 * 
 * Component         | Example Classes              | Font Used
 * ────────────────────────────────────────────────────────────────────────────
 * Hero Title        | text-7xl font-black          | Headings (900)
 * Section Title     | text-5xl font-black          | Headings (900)
 * Card Title        | text-2xl font-bold           | Headings (700)
 * Label/Badge       | text-xs font-bold uppercase  | Headings (700)
 * Button Text       | text-sm font-bold            | Headings (700)
 * Body Paragraph    | text-lg                      | Body (400)
 * Body Link         | text-sm font-semibold        | Headings (600)
 * 
 */

/**
 * FILES THAT DEPEND ON THIS CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * 
 * - app/layout.tsx          (Font imports & variable definitions)
 * - app/globals.css         (CSS font-family declarations)
 * - app/page.tsx            (Hero, sections)
 * - app/packages/page.tsx   (Package cards, titles)
 * - app/branches/page.tsx   (Branch cards, location titles)
 * - app/services/page.tsx   (Service cards)
 * - app/about/page.tsx      (About content)
 * - app/contact/page.tsx    (Form labels, headings)
 * - components/Navbar.tsx   (Logo, nav links)
 * - components/Footer.tsx   (Footer headings)
 * 
 * All components automatically inherit these fonts through CSS variables.
 * No individual component imports or overrides needed.
 * 
 */

/**
 * TAILWIND CONFIGURATION NOTE
 * ─────────────────────────────────────────────────────────────────────────────
 * 
 * The current setup uses Tailwind's default font-family utilities.
 * CSS variables (--font-body, --font-headings) are automatically applied to:
 * 
 * - body {} element (all body text inherits)
 * - h1, h2, h3, h4, h5, h6 {} elements (all headings inherit)
 * 
 * No additional Tailwind configuration needed for font changes to take effect.
 * Just update app/layout.tsx and restart the dev server.
 * 
 */

export const typographyConfig = {
  body: {
    name: 'Libre Baskerville',
    cssVariable: '--font-body',
    weights: ['400', '500'],
    usage: 'Paragraph text, body content',
  },
  headings: {
    name: 'Montserrat',
    cssVariable: '--font-headings',
    weights: ['500', '600', '700', '800', '900'],
    usage: 'Titles, headings, labels, buttons',
  },
  changeInstructions:
    'To change fonts, edit the font imports and configurations in app/layout.tsx',
};
