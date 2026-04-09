# Alpha Medi Lab - Project Architecture & Structure

**Project Name:** AI Studio Applet / Alpha Medi Lab  
**Version:** 0.1.0  
**Framework:** Next.js 15 with React 19 & TypeScript  
**Styling:** Tailwind CSS 4  
**Date:** April 2026

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Directory Structure](#directory-structure)
3. [Core Directories & Files](#core-directories--files)
4. [Component Architecture](#component-architecture)
5. [Data Flow](#data-flow)
6. [Configuration Files](#configuration-files)
7. [Dependencies](#dependencies)
8. [Scripts & Commands](#scripts--commands)

---

## 🎯 Project Overview

**Alpha Medi Lab** is a professional medical diagnostics laboratory website built with modern web technologies. The site includes:

- **Multi-page navigation** with responsive design
- **Dark/Light theme support** using `next-themes`
- **Contact form functionality** with email integration (Nodemailer)
- **Branch locations showcase** with images
- **Animated components** using LottieFiles
- **Server-side rendering** with client-side interactivity
- **Google Generative AI integration** (Google Genai library)

**Purpose:** Showcase medical services, packages, offers, and branch locations while enabling customer contact and inquiries.

---

## 📁 Directory Structure

```
Alpha_Web/
├── app/                          # Next.js App Router (pages & routes)
│   ├── layout.tsx               # Root layout (theme, navbar, footer)
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── services/
│   │   └── page.tsx             # Services page
│   ├── packages/
│   │   └── page.tsx             # Packages page
│   ├── offers/
│   │   └── page.tsx             # Offers page
│   ├── branches/
│   │   └── page.tsx             # Branches page
│   ├── contact/
│   │   ├── page.tsx             # Contact page
│   │   └── test.tsx             # Test component
│   └── api/
│       └── contact/
│           └── route.ts         # Contact form POST endpoint
│
├── components/                    # Reusable React components
│   ├── Navbar.tsx               # Navigation header
│   ├── Footer.tsx               # Footer
│   ├── ThemeProvider.tsx        # Theme provider setup
│   ├── ThemeToggle.tsx          # Theme toggle UI
│   ├── DarkModeToggle.tsx       # Dark mode switch
│   └── About.tsx                # About section component
│
├── hooks/                         # Custom React hooks
│   └── use-mobile.ts            # Mobile device detection
│
├── lib/                           # Utility functions & helpers
│   ├── utils.ts                 # CSS class merger (cn function)
│   └── typography.ts            # Typography system documentation
│
├── public/                        # Static assets
│   ├── alpha/                   # Branch location images
│   │   ├── hunupitiya.png
│   │   ├── kadawatha.png
│   │   ├── kiribathgoada.png
│   │   ├── koholwila.png
│   │   ├── makola.png
│   │   ├── mawaramandiya.png
│   │   ├── sapugaskanda.png
│   │   └── thorana j.png
│   ├── assets/                  # Media assets organized by category
│   │   ├── branches/
│   │   ├── images/
│   │   └── services/
│   ├── DNA Loader.json          # Lottie animation
│   ├── Tape Medical.json        # Lottie animation
│   └── ec8baa38-e544-41fc-8931-029e4b3f0439.json  # Lottie animation
│
├── Configuration Files
│   ├── package.json             # Dependencies & scripts
│   ├── tsconfig.json            # TypeScript configuration
│   ├── next.config.ts           # Next.js configuration
│   ├── postcss.config.mjs       # PostCSS setup
│   ├── eslint.config.mjs        # ESLint rules
│   ├── tailwind.config.js       # Tailwind customization
│   └── declarations.d.ts        # TypeScript declarations
│
├── Root Files
│   ├── server.js                # Custom server setup
│   ├── client-code.js           # Client-side code
│   ├── metadata.json            # Metadata configuration
│   ├── next-env.d.ts            # Next.js TypeScript types
│   ├── README.md                # Project readme
│   ├── TYPOGRAPHY.md            # Typography documentation
│   └── package-lock.json        # Locked dependency versions
```

---

## 🗂️ Core Directories & Files

### **`app/` - Next.js App Router**

The `app/` directory is the heart of the application using Next.js 13+ file-based routing.

#### **`app/layout.tsx`** ⭐ Critical Root Layout
```typescript
Purpose: Wraps all pages on the site
Imports:
  - Navbar, Footer components
  - ThemeProvider for dark/light mode
  - Google fonts (Open Sans, Montserrat)
  - globals.css for global styles

Key Setup:
  - Defines metadata for SEO
  - Configures typography system
  - Sets up theme provider with suppressHydrationWarning
  - Wraps children with Navbar → Main → Footer structure
  - Enables system theme detection (dark mode defaults to system preference)

Font Variables:
  - Body: Open Sans (weights: 400, 700)
  - Headings: Montserrat (weights: 500, 600, 700, 800, 900)
  - Variables injected as CSS custom properties (--font-body, --font-headings)
```

#### **`app/page.tsx`** - Homepage
```typescript
Purpose: Main landing page
Imports:
  - Dynamic imports for Lottie Player and Controls (optimized for client)
  - lucide-react icons (CheckCircle2, ArrowRight, PhoneCall)
  - motion/react for animations
  - Image and Link from Next.js

Features:
  - Client-side component ("use client")
  - Animated elements using motion library
  - Lottie animations from public/*.json files
  - Call-to-action buttons linking to other pages
```

#### **`app/api/contact/route.ts`** - Contact Form API
```typescript
Purpose: Backend endpoint for contact form submissions
Method: POST
Handler: async POST(req: Request)

Process:
  1. Extracts form data: name, phone, email, subject, message
  2. Creates Nodemailer transporter with Gmail SMTP
  3. Uses environment variables: EMAIL_USER, EMAIL_PASS
  4. Sends formatted HTML email to: miriyamrodrigo@gmail.com
  5. Returns success/error response

Security: Validates email configuration via environment variables
Email Template: HTML formatted with form data fields
```

#### **Page Routes**

| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Homepage with hero section |
| `/about` | `app/about/page.tsx` | Company information |
| `/services` | `app/services/page.tsx` | Medical services offered |
| `/packages` | `app/packages/page.tsx` | Service packages & pricing |
| `/offers` | `app/offers/page.tsx` | Special offers/promotions |
| `/branches` | `app/branches/page.tsx` | Branch locations with images |
| `/contact` | `app/contact/page.tsx` | Contact form |

---

### **`components/` - Reusable Components**

#### **`Navbar.tsx`** - Navigation Header
```typescript
Purpose: Main navigation component
Type: Client component ("use client")

Features:
  - Sticky header with backdrop blur
  - Responsive mobile menu (hamburger icon)
  - Active link detection using usePathname()
  - Animation transitions using motion/react
  - Links: Services, Packages, Offers, Branches, About, Contact
  - Contact info: Phone & Email icons
  - Logo/branding area

State:
  - isOpen: Mobile menu visibility toggle
  - Uses useState for menu state management
```

#### **`Footer.tsx`** - Footer Component
```typescript
Purpose: Site footer
Elements: Company info, links, social media, copyright
```

#### **`ThemeProvider.tsx`** - Theme Setup
```typescript
Purpose: Wraps entire app with dark/light theme capability
Technology: next-themes library
Props: attribute="class", defaultTheme="system", enableSystem, disableTransitionOnChange

Allows components to use hooks like useTheme() for theme switching
```

#### **`ThemeToggle.tsx` & `DarkModeToggle.tsx`** - Theme Controls
```typescript
Purpose: UI components for switching between light/dark modes
Uses: useTheme() hook from 'next-themes'
Functionality: Toggle button in navbar or header for theme switching
```

#### **`About.tsx`** - About Section
```typescript
Purpose: Company information component
Content: History, mission, team, credentials of Alpha Medi Lab
```

---

### **`hooks/` - Custom React Hooks**

#### **`use-mobile.ts`** - Responsive Utility
```typescript
Purpose: Detects if device is mobile
Returns: Boolean indicating mobile screen size
Use case: Conditional rendering for mobile-responsive layouts
Typically checks viewport width < 768px (Tailwind md breakpoint)
```

---

### **`lib/` - Utility Functions**

#### **`utils.ts`** - CSS Utility
```typescript
function cn(...inputs: ClassValue[]): string
  - Merges Tailwind CSS class names intelligently
  - Combines clsx (conditional classes) + tailwind-merge
  - Resolves conflicting Tailwind classes
  - Example: cn("px-2 px-4") → "px-4" (takes rightmost)

Used throughout components for flexible styling
```

#### **`typography.ts`** - Typography Documentation
```typescript
Purpose: Configuration docs for typography system
Covers:
  - Current font setup (Montserrat headings, Open Sans body)
  - Font variables (--font-headings, --font-body)
  - CSS Class mappings
  - How to change fonts (edit app/layout.tsx)
  - Weights available for each font
```

---

### **`public/` - Static Assets**

#### **`public/alpha/`** - Branch Images
Directory containing PNG images for each branch location:
- hunupitiya.png
- kadawatha.png
- kiribathgoada.png
- koholwila.png
- makola.png
- mawaramandiya.png
- sapugaskanda.png
- thorana j.png

**Used by:** branches/page.tsx to display branch locations

#### **`public/`** - Lottie Animations
JSON files containing LottieFiles animation data:
- `DNA Loader.json` - DNA animation for loading/hero
- `Tape Medical.json` - Medical tape animation
- `ec8baa38-e544-41fc-8931-029e4b3f0439.json` - Unnamed animation

**Used by:** homepage (page.tsx) with @lottiefiles/react-lottie-player

#### **`public/assets/`** - Organized Media
```
assets/
  ├── branches/     # Branch-related images
  ├── images/       # General images
  └── services/     # Service-related images
```

---

## 🔗 Component Architecture

### **Hierarchy & Data Flow**

```
┌─────────────────────────────────────────────────┐
│           layout.tsx (ROOT)                     │
│   - Loads fonts (Open Sans, Montserrat)        │
│   - Sets up ThemeProvider                      │
│   - Creates page structure                     │
└─────────────────────────────────────────────────┘
           ↓ wraps all children
    ┌──────────────────────────┐
    │    <ThemeProvider>       │
    └──────────────────────────┘
           ↓
    ┌──────────────────────────┐
    │    <Navbar />            │ ← Navigation to all routes
    │    <main>{children}</main>│ ← Page content rendered here
    │    <Footer />            │ ← Site footer
    └──────────────────────────┘
           ↓
    Page Components (route-based)
    ├── page.tsx (/) - Homepage
    │   ├── Player (Lottie animation)
    │   ├── motion animations
    │   └── Call-to-action links
    │
    ├── about/page.tsx - About component
    ├── services/page.tsx - Services list
    ├── packages/page.tsx - Pricing packages
    ├── offers/page.tsx - Promotions
    ├── branches/page.tsx - Branch cards with images
    └── contact/page.tsx - Contact form
        └── Sends POST to /api/contact/route.ts

```

### **Client vs Server Components**

| Component | Type | Reason |
|-----------|------|--------|
| `layout.tsx` | Server | No interactivity needed |
| `Navbar.tsx` | Client | useState, usePathname, animations |
| `page.tsx` (home) | Client | Animations, interactions |
| `ThemeProvider.tsx` | Client | Context provider, theme state |
| `contact/page.tsx` | Client | Form handling, state |
| API routes | Server | Backend logic |

---

## 📊 Data Flow

### **User Navigation Flow**
```
1. User visits site (/)
   ↓
2. layout.tsx loads
   - Applies theme (light/dark)
   - Renders Navbar with theme provider
   ↓
3. User clicks navigation link
   - Navbar detects pathname with usePathname()
   - Highlights active link
   - Navigates to /services, /packages, etc. using Next.js Link
   ↓
4. Page content loads
   - Specific page.tsx renders
   - Components styled with Tailwind + typography system
```

### **Contact Form Flow**
```
1. User fills contact form on /contact page
   ↓
2. Submits form
   - Client-side validation (if implemented)
   ↓
3. POST request to /api/contact/route.ts
   - Extracts: name, phone, email, subject, message
   ↓
4. Server-side processing
   - Creates Nodemailer transporter
   - Validates EMAIL_USER and EMAIL_PASS from env
   ↓
5. Sends email via Gmail SMTP
   - From: EMAIL_USER (configured in .env.local)
   - To: miriyamrodrigo@gmail.com
   - Format: HTML with form data
   ↓
6. Returns response to client
   - Success: redirect or confirmation message
   - Error: error message displayed
```

### **Theme Switching Flow**
```
1. User clicks theme toggle (Navbar)
   ↓
2. ThemeToggle/DarkModeToggle calls useTheme()
   ↓
3. next-themes updates theme state
   - Updates HTML class: "dark" or empty
   ↓
4. Tailwind CSS responds
   - dark: prefixed styles activate/deactivate
   ↓
5. Components re-render with new colors
```

### **Animation Flow**
```
1. Page loads with motion/react imported
   ↓
2. motion components animate on mount
   - Fade-in effects
   - Slide animations
   - Hover states
   ↓
3. LottieFiles Player loads .json animations
   - DNA Loader animation plays
   - Loops or plays on interaction
   ↓
4. lucide-react icons render
   - Scalable SVG icons
   - Color responsive (light/dark)
```

---

## ⚙️ Configuration Files

### **`package.json`** - Dependencies & Scripts
```json
{
  "name": "ai-studio-applet",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",           // Start dev server
    "build": "next build",        // Production build
    "start": "next start",        // Start production server
    "lint": "eslint .",           // Run ESLint
    "clean": "next clean"         // Clean build cache
  },
  
  "dependencies": [
    "next@15.4.9",
    "react@19.2.1",
    "react-dom@19.2.1",
    "@google/genai@1.17.0",       // AI integration
    "@lottiefiles/react-lottie-player",  // Animations
    "next-themes",                // Dark mode support
    "nodemailer",                 // Email sending
    "tailwindcss@4.1.11",         // Styling
    "motion"                      // Animations
  ]
}
```

### **`tsconfig.json`** - TypeScript Config
```json
{
  "compilerOptions": {
    "target": "es2020",
    "lib": ["es2020", "dom", "dom.iterable"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./*"]  // Alias for imports
    }
  }
}
```

### **`next.config.ts`** - Next.js Config
```typescript
{
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false      // Strict type checking
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' }
    ]
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  turbopack: {}  // Enable Turbopack (faster builds)
}
```

### **`postcss.config.mjs`** - PostCSS Setup
- Configures Tailwind CSS processing
- Enables Autoprefixer for browser compatibility

### **`eslint.config.mjs`** - Code Linting
- Enforces consistent code style
- Catches potential errors
- ESLint 9 with Next.js configuration

### **`declarations.d.ts`** - TypeScript Declarations
- Custom type definitions for the project

---

## 📦 Dependencies

### **Core Framework**
- **next**: Next.js framework (v15.4.9)
- **react**: React library (v19.2.1)
- **react-dom**: React DOM rendering

### **Styling & Animation**
- **tailwindcss**: CSS utility framework (v4.1.11)
- **@tailwindcss/postcss**: Tailwind CSS processing
- **@tailwindcss/typography**: Text styling plugin
- **motion**: Animation library (smooth animations)
- **autoprefixer**: CSS browser prefixes
- **postcss**: CSS transformation tool

### **Dark Mode**
- **next-themes**: Theme provider library

### **Icons & Animation**
- **lucide-react**: React icon library
- **react-icons**: Alternative icon library
- **@lottiefiles/react-lottie-player**: Lottie animation player

### **Email & Forms**
- **nodemailer**: Email sending library
- **@hookform/resolvers**: Form validation
- **react-hook-form**: Form handling (implied from resolvers)

### **AI Integration**
- **@google/genai**: Google Generative AI library

### **Utilities**
- **clsx**: Conditional CSS classes
- **tailwind-merge**: Smart Tailwind class merging
- **class-variance-authority**: Component variant system

### **Development Tools**
- **typescript**: Type checking
- **eslint**: Code linting
- **firebase-tools**: Firebase deployment (if used)

---

## 🚀 Scripts & Commands

```bash
# Development
npm run dev       # Start dev server (http://localhost:3000)

# Production
npm run build     # Build for production (optimized bundle)
npm run start     # Start production server

# Maintenance
npm run lint      # Check code for errors/style issues
npm run clean     # Clear Next.js build cache

# Installation
npm install       # Install all dependencies
```

---

## 🔑 Environment Variables Required

To run this project, create a `.env.local` file with:

```env
# Email Configuration (for contact form)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password

# Optional: Google Genai API key (if using AI features)
NEXT_PUBLIC_GOOGLE_API_KEY=your-api-key
```

---

## 📝 File Purposes Summary

| File | Purpose | Type |
|------|---------|------|
| `layout.tsx` | Root page wrapper | Server |
| `page.tsx` | Homepage | Client |
| `globals.css` | Global styles | CSS |
| `Navbar.tsx` | Navigation header | Client Component |
| `Footer.tsx` | Page footer | Component |
| `ThemeProvider.tsx` | Dark/Light theme setup | Client Provider |
| `utils.ts` | CSS class merging utility | Utility |
| `typography.ts` | Font system documentation | Config Doc |
| `use-mobile.ts` | Mobile detection hook | Hook |
| `/api/contact/route.ts` | Email form backend | API Route |
| Branch pages | Location/service info | Client Pages |

---

## 🎨 Design System

### **Typography**
- **Headings**: Montserrat (500, 600, 700, 800, 900)
- **Body**: Open Sans (400, 700)
- **System**: CSS custom properties (--font-headings, --font-body)

### **Color System**
- **Light Mode**: Light backgrounds with dark text
- **Dark Mode**: Dark backgrounds with light text
- **Theme Toggle**: Stored in next-themes

### **Spacing & Breakpoints**
- Follows Tailwind CSS defaults
- Responsive classes (sm:, md:, lg:, xl:)
- Max-width container: 7xl (80rem)

---

## 🔄 How to Extend the Project

1. **Add New Page**: Create `app/newpage/page.tsx` with route
2. **Add Component**: Create `.tsx` file in `components/` folder
3. **Add Route/API**: Create `app/api/endpoint/route.ts`
4. **Update Navbar**: Edit navigation links in `Navbar.tsx`
5. **Change Fonts**: Edit font configuration in `app/layout.tsx`
6. **Add Environment Variables**: Update `.env.local` and use in code

---

## 📞 Contact & Email Setup

The contact form integrates with Gmail via Nodemailer:
- All contact submissions send to: **miriyamrodrigo@gmail.com**
- Requires Gmail app password (not regular password)
- Configure via `.env.local`

