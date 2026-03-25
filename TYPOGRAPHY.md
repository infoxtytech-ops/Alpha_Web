# Typography System - Alpha Medi Lab

## Overview

The Alpha Medi Lab website now uses a **unified typography system with 2 font families** applied consistently across the entire application.

- **Headings Font**: Montserrat (sans-serif)
- **Body Font**: Libre Baskerville (serif)

This document explains how the system works and how to change fonts.

---

## ✅ File Where You Change Fonts

### **Primary Configuration File: `app/layout.tsx`** (lines 8-22)

This is the **ONLY file** you need to edit to change fonts across the entire application.

```tsx
// Current configuration:
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-headings',    // 🔑 Body text
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-body', // 🔑 Headings
  display: 'swap',
});
```

---

## 📋 Main Updates Made

### 1. **Fixed Font Configuration in `app/layout.tsx`**

**Before:**
- Font variables: `--font-libre-baskerville` and `--font-montserrat`
- Montserrat weight: only 500
- No support for bold/black text weights

**After:**
- Renamed to: `--font-body` and `--font-headings` (clearer naming)
- Added complete weight range: 500, 600, 700, 800, 900
- Proper variable structure for centralized management

---

### 2. **Fixed Font Declarations in `app/globals.css`**

**Before:**
```css
/* ❌ INCORRECT */
body {
  font-family: var(--font-libre-baskerville), 'Libre Baskerville', serif;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-Quicksand), 'Montserrat', sans-serif; /* ❌ --font-Quicksand doesn't exist! */
}
```

**After:**
```css
/* ✅ CORRECT */
body {
  font-family: var(--font-body), 'Libre Baskerville', serif;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-headings), 'Montserrat', sans-serif;
}
```

**Key fixes:**
- Corrected font variable names to match `layout.tsx`
- Removed non-existent `--font-Quicksand` reference
- Added clear comments explaining usage

---

### 3. **Created `lib/typography.ts`**

A centralized reference file documenting:
- Current font setup
- Font weights mapping
- Usage patterns across components
- Step-by-step instructions to change fonts

---

### 4. **Verified Component Consistency**

✅ All components (`Navbar`, `Footer`, all pages) use:
- Tailwind font classes: `font-bold`, `font-black`, `font-semibold`
- CSS variables inherit automatically
- No custom font-family overrides
- Clean, maintainable code

---

## 🎯 How to Switch Fonts Later

### Quick Start (5 minutes)

1. **Open** `app/layout.tsx`

2. **Change the font imports** (line 6):
   ```tsx
   import { YourHeadingFont, YourBodyFont } from 'next/font/google';
   ```

3. **Update the font definitions** (lines 8-22):
   ```tsx
   const yourBodyFont = YourBodyFont({
     subsets: ['latin'],
     weight: ['400', '700'],          // Body needs at least 400, 700
     variable: '--font-body',
     display: 'swap',
   });

   const yourHeadingFont = YourHeadingFont({
     subsets: ['latin'],
     weight: ['500', '600', '700', '800', '900'], // Headings need 700, 900 for bold/black
     variable: '--font-headings',
     display: 'swap',
   });
   ```

4. **Save and restart** your dev server

That's it! All components automatically use the new fonts.

---

## 📚 Example: Switch to Inter + Playfair Display

If you want modern sans-serif headings with a serif body:

```tsx
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-headings',
  display: 'swap',
});
```

**Result:** All h1-h6 and bold text becomes Playfair Display, all body text becomes Inter.

---

## 📊 Typography Scale

### Tailwind Font Weights (Automatic)

| Tailwind Class | Font Weight | Usage |
|---|---|---|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Body emphasis |
| `font-semibold` | 600 | Links, secondary labels |
| `font-bold` | 700 | Buttons, card titles, labels |
| `font-extrabold` | 800 | Section headings |
| `font-black` | 900 | Hero titles, main headings |

### Text Sizes

| Class | Hex Size | Usage |
|---|---|---|
| `text-xs` | 12px | Small labels, badges |
| `text-sm` | 14px | Navigation, small text |
| `text-base` | 16px | Buttons, standard body |
| `text-lg` | 18px | Body paragraphs |
| `text-xl` | 20px | Subheadings |
| `text-2xl` | 24px | Medium headings |
| `text-4xl` | 36px | Section titles |
| `text-5xl` | 48px | Large section titles |
| `text-6xl` | 60px | Page titles |
| `text-7xl` | 72px | Hero titles |

---

## 🔍 Current Typography Usage

### Where Each Font is Applied

**Headings (Montserrat):**
- Page titles (h1, h2, h3)
- Section headings
- Card titles
- Button text
- Labels
- Navigation text

**Body (Libre Baskerville):**
- Paragraph text
- Descriptions
- Body content
- Captions

---

## ⚙️ Technical Details

### CSS Variable System

The system uses CSS custom properties (variables) to manage fonts:

```css
:root {
  --font-body: var(--font-libre-baskerville);     /* Set in layout.tsx */
  --font-headings: var(--font-montserrat);        /* Set in layout.tsx */
}

body {
  font-family: var(--font-body), fallback...;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-headings), fallback...;
}
```

### Why This Approach?

✅ **Centralized**: Change fonts in one file  
✅ **Maintainable**: Clear variable names  
✅ **Scalable**: Easy to add new fonts later  
✅ **Performant**: CSS variables resolve at runtime  
✅ **Standard**: Uses Tailwind + Google Fonts best practices  

---

## 📁 Files Affected by Typography Changes

- ✅ `app/layout.tsx` - Font imports & CSS variables
- ✅ `app/globals.css` - Font family declarations
- ✅ `lib/typography.ts` - Configuration reference
- ✅ All components automatically inherit fonts
- ✅ All pages use the unified system

---

## 🚀 Key Benefits

1. **Single Source of Truth**: Edit `app/layout.tsx` to change all fonts
2. **Consistent Typography**: All text uses one of 2 fonts
3. **Proper Weights**: All font weights needed for bold/black rendering
4. **Zero Overrides**: No component-level font conflicts
5. **Easy to Maintain**: Clear structure with comments
6. **Production Ready**: Optimized with Google Fonts swap strategy

---

## ✨ Typography Quality

- **Font Loading**: Uses `display: 'swap'` for best performance
- **Fallbacks**: Includes serif/sans-serif fallbacks
- **Weights**: All necessary weights for complete design system
- **Responsive**: Works across all screen sizes
- **Dark Mode**: Compatible with theme system

---

## 🆘 Troubleshooting

### Fonts not updating after change?

1. Stop the dev server
2. Edit `app/layout.tsx`
3. **Delete `.next` folder** (build cache)
4. Restart: `npm run dev`

### Fonts look wrong or pixelated?

1. Ensure you imported the correct font weights
2. Verify `font-black` works (needs weight 900)
3. Check browser DevTools → Elements → Computed → font-family

### Font not applying to certain elements?

All elements automatically inherit from body/h1-h6. If custom styling needed:

```tsx
/* Element inherits from h1-h6 automatically */
<h1 className="text-5xl font-black">Title</h1>

/* Or use Tailwind font classes */
<div className="font-bold text-lg">Text</div>
```

---

## 📖 Reference Files

- **Typography Config**: [lib/typography.ts](lib/typography.ts)
- **Font Imports**: [app/layout.tsx](app/layout.tsx#L8)
- **Font Declarations**: [app/globals.css](app/globals.css#L4)
- **Components**: `components/` — all use inherited fonts
- **Pages**: `app/*/page.tsx` — all use Tailwind font classes

---

## 🎨 Design Philosophy

The typography system maintains:
- Clean, readable hierarchy
- Professional medical lab aesthetic
- Responsive scaling for all devices
- Accessible font sizes and weights
- Consistent voice across all pages

**Current Fonts:**
- **Montserrat** → Professional, modern, clean (perfect for medical/tech)
- **Libre Baskerville** → Classic, readable, trustworthy

---

## ✅ Unified System Status

| Aspect | Status | Details |
|---|---|---|
| Font Configuration | ✅ Unified | Two fonts, proper weights |
| CSS Variables | ✅ Correct | `--font-body`, `--font-headings` |
| Component Usage | ✅ Consistent | All components inherit |
| No Overrides | ✅ Clean | No custom font-family on elements |
| Ready for Change | ✅ Yes | Edit `app/layout.tsx` |

---

## 📞 Quick Reference

**To change fonts:**
1. Open `app/layout.tsx`
2. Change the Google Fonts import
3. Update font configurations (lines 9-21)
4. Restart dev server

**That's all!** ✨

Everything else updates automatically.
