# HACODE SOLUTIONS — Brand & Design Specification

**Version:** 1.0  
**Date:** September 2026  
**Purpose:** Design system specification for HACODE SOLUTIONS web properties

## Brand Identity

**Name:** HACODE SOLUTIONS

**Tagline:** Code smarter, ship faster

**Mission:** Empower developers with AI-powered DevSpec packs and modern web solutions

**Personality:**
- Professional yet approachable
- Technical and precise
- Innovation-focused
- Developer-first

**Voice:**
- Clear and concise
- Action-oriented
- Technically accurate
- Encouraging and supportive

## Design Tokens

### Colors

#### Primary Colors

- **Primary:** `#2563EB` (Blue 600)
  - Used for primary actions, links, focus states
  - Variants:
    - 50: `#EFF6FF`
    - 100: `#DBEAFE`
    - 200: `#BFDBFE`
    - 300: `#93C5FD`
    - 400: `#60A5FA`
    - 500: `#3B82F6`
    - 600: `#2563EB` (default)
    - 700: `#1D4ED8`
    - 800: `#1E40AF`
    - 900: `#1E3A8A`

- **Secondary:** `#10B981` (Green 500)
  - Used for success states, positive actions
  - Variants:
    - 50: `#ECFDF5`
    - 100: `#D1FAE5`
    - 200: `#A7F3D0`
    - 300: `#6EE7B7`
    - 400: `#34D399`
    - 500: `#10B981` (default)
    - 600: `#059669`
    - 700: `#047857`
    - 800: `#065F46`
    - 900: `#064E3B`

- **Accent:** `#F59E0B` (Amber 500)
  - Used for highlights, CTAs, emphasis
  - Variants:
    - 50: `#FFFBEB`
    - 100: `#FEF3C7`
    - 200: `#FDE68A`
    - 300: `#FCD34D`
    - 400: `#FBBF24`
    - 500: `#F59E0B` (default)
    - 600: `#D97706`
    - 700: `#B45309`
    - 800: `#92400E`
    - 900: `#78350F`

#### Neutral Colors

- **Gray Scale:**
  - 50: `#F9FAFB`
  - 100: `#F3F4F6`
  - 200: `#E5E7EB`
  - 300: `#D1D5DB`
  - 400: `#9CA3AF`
  - 500: `#6B7280`
  - 600: `#4B5563`
  - 700: `#374151`
  - 800: `#1F2937`
  - 900: `#111827`
  - 950: `#030712`

#### Semantic Colors

- **Success:** `#10B981` (Green 500)
- **Warning:** `#F59E0B` (Amber 500)
- **Error:** `#EF4444` (Red 500)
- **Info:** `#3B82F6` (Blue 500)

### Typography

#### Font Families

- **Sans Serif (Body):** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- **Heading:** `'Poppins', 'Inter', sans-serif`
- **Mono (Code):** `'JetBrains Mono', 'Fira Code', Consolas, monospace`

#### Font Sizes

| Name | Size | Line Height | Usage |
|------|------|-------------|-------|
| xs | 0.75rem (12px) | 1rem (16px) | Captions, labels |
| sm | 0.875rem (14px) | 1.25rem (20px) | Small text, metadata |
| base | 1rem (16px) | 1.5rem (24px) | Body text |
| lg | 1.125rem (18px) | 1.75rem (28px) | Large body, subtitles |
| xl | 1.25rem (20px) | 1.75rem (28px) | Small headings |
| 2xl | 1.5rem (24px) | 2rem (32px) | H4 headings |
| 3xl | 1.875rem (30px) | 2.25rem (36px) | H3 headings |
| 4xl | 2.25rem (36px) | 2.5rem (40px) | H2 headings |
| 5xl | 3rem (48px) | 1 | H1 headings |
| 6xl | 3.75rem (60px) | 1 | Hero text |

#### Font Weights

- **Light:** 300
- **Normal:** 400
- **Medium:** 500
- **Semibold:** 600
- **Bold:** 700
- **Extrabold:** 800

#### Letter Spacing

- **Tight:** -0.025em
- **Normal:** 0em
- **Wide:** 0.025em
- **Wider:** 0.05em

### Spacing

Use 8px base unit scale:

| Name | Value |
|------|-------|
| 0 | 0 |
| 0.5 | 0.125rem (2px) |
| 1 | 0.25rem (4px) |
| 1.5 | 0.375rem (6px) |
| 2 | 0.5rem (8px) |
| 2.5 | 0.625rem (10px) |
| 3 | 0.75rem (12px) |
| 4 | 1rem (16px) |
| 5 | 1.25rem (20px) |
| 6 | 1.5rem (24px) |
| 8 | 2rem (32px) |
| 10 | 2.5rem (40px) |
| 12 | 3rem (48px) |
| 16 | 4rem (64px) |
| 20 | 5rem (80px) |
| 24 | 6rem (96px) |

### Border Radius

- **None:** 0
- **sm:** 0.125rem (2px)
- **base:** 0.25rem (4px)
- **md:** 0.375rem (6px)
- **lg:** 0.5rem (8px)
- **xl:** 0.75rem (12px)
- **2xl:** 1rem (16px)
- **full:** 9999px

### Shadows

- **sm:** `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **base:** `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`
- **md:** `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- **lg:** `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`
- **xl:** `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`
- **2xl:** `0 25px 50px -12px rgb(0 0 0 / 0.25)`

## Components

### Button

Primary action button with multiple variants and sizes.

#### Variants

**Primary:**
- Background: `primary-600` (`#2563EB`)
- Text: `white`
- Hover: `primary-700`
- Focus: Ring `primary-500`, Ring offset 2px
- Disabled: Opacity 50%

**Secondary:**
- Background: `gray-600` (`#4B5563`)
- Text: `white`
- Hover: `gray-700`
- Focus: Ring `gray-500`, Ring offset 2px
- Disabled: Opacity 50%

**Outline:**
- Background: Transparent
- Border: 1px `primary-600`
- Text: `primary-600`
- Hover: Background `primary-50`
- Focus: Ring `primary-500`, Ring offset 2px
- Disabled: Opacity 50%

**Ghost:**
- Background: Transparent
- Text: `primary-600`
- Hover: Background `primary-50`
- Focus: Ring `primary-500`, Ring offset 2px
- Disabled: Opacity 50%

#### Sizes

- **Small:** Height 36px (2.25rem), Padding X 12px, Font size `sm`
- **Medium:** Height 40px (2.5rem), Padding X 16px, Font size `base`
- **Large:** Height 44px (2.75rem), Padding X 20px, Font size `lg`

#### States

- **Default:** Normal appearance
- **Hover:** Background color darkens slightly
- **Focus:** Ring visible, outline removed
- **Active:** Background color darker
- **Disabled:** Reduced opacity, no pointer events

#### Props

- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `disabled`: `boolean` (default: `false`)
- `onClick`: `() => void`

### Card

Container component for grouped content.

#### Structure

- **Card:** Main container
- **CardHeader:** Top section (optional)
- **CardContent:** Main content area
- **CardFooter:** Bottom section (optional)

#### Styling

- Background: `white`
- Border: 1px `gray-200`
- Border radius: `lg` (0.5rem)
- Padding: `6` (1.5rem)
- Shadow: `sm`

#### Variants

**Default:**
- Border: 1px `gray-200`
- No shadow

**Elevated:**
- No border
- Shadow: `md`

**Outlined:**
- Border: 2px `primary-200`
- No shadow

### Input

Text input field with label and validation states.

#### Styling

- Height: 40px (2.5rem)
- Padding: 12px horizontal, 8px vertical
- Border: 1px `gray-300`
- Border radius: `md` (0.375rem)
- Font size: `base`
- Background: `white`

#### States

**Default:**
- Border: `gray-300`

**Focus:**
- Border: `primary-500`
- Ring: `primary-500` with 2px offset

**Error:**
- Border: `red-500`
- Ring: `red-500` with 2px offset

**Disabled:**
- Background: `gray-100`
- Cursor: not-allowed
- Opacity: 60%

#### Props

- `label`: `string` (optional)
- `error`: `string` (optional) - Error message
- `disabled`: `boolean`
- `placeholder`: `string`
- `type`: `'text' | 'email' | 'password' | 'number'`

### Badge

Small status indicator or label.

#### Variants

**Default:**
- Background: `gray-100`
- Text: `gray-800`
- Border radius: `full`

**Primary:**
- Background: `primary-100`
- Text: `primary-800`

**Success:**
- Background: `green-100`
- Text: `green-800`

**Warning:**
- Background: `amber-100`
- Text: `amber-800`

**Error:**
- Background: `red-100`
- Text: `red-800`

#### Sizes

- **Small:** Padding 4px 8px, Font size `xs`
- **Medium:** Padding 6px 12px, Font size `sm`

#### Props

- `variant`: `'default' | 'primary' | 'success' | 'warning' | 'error'`
- `size`: `'sm' | 'md'`

## Layout

### Grid System

Use CSS Grid for layouts:

- **Columns:** 12-column grid
- **Gap:** `4` (1rem) default, adjustable
- **Responsive:** `sm`, `md`, `lg`, `xl`, `2xl` breakpoints

### Breakpoints

| Name | Min Width |
|------|-----------|
| sm | 640px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1536px |

### Container

- **Max Width:**
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px
- **Padding:** `4` (1rem) on mobile, `6` (1.5rem) on tablet+
- **Centered:** `mx-auto`

## Interactions

### Transitions

Default transition: `all 150ms ease-in-out`

- **Fast:** 100ms
- **Normal:** 150ms
- **Slow:** 300ms

### Hover Effects

- **Buttons:** Background color change + slight transform
- **Links:** Underline or color change
- **Cards:** Shadow increase or border color change

### Focus States

- Ring: 2px solid color
- Ring offset: 2px
- Outline: none

### Animations

- **Fade in:** Opacity 0 → 1 over 150ms
- **Slide up:** Transform Y 10px → 0, Opacity 0 → 1 over 200ms
- **Bounce:** Keyframe animation for loading states

## Accessibility

### Guidelines

- **Color Contrast:** WCAG AA compliant (4.5:1 for text)
- **Focus Indicators:** Always visible
- **Keyboard Navigation:** Full support
- **Screen Readers:** ARIA labels on interactive elements
- **Touch Targets:** Minimum 44x44px

### ARIA Attributes

- `aria-label`: Descriptive label for icon-only buttons
- `aria-describedby`: Link to error messages or help text
- `aria-disabled`: Indicate disabled state
- `role`: Define element roles when needed

## Usage Guidelines

### Do's

✅ Use design tokens for all styling  
✅ Maintain consistent spacing  
✅ Follow color hierarchy (primary > secondary > tertiary)  
✅ Ensure accessibility standards  
✅ Use semantic HTML  
✅ Test on multiple screen sizes  

### Don'ts

❌ Don't hardcode colors or spacing  
❌ Don't use more than 3 font families  
❌ Don't rely on color alone for information  
❌ Don't create overly complex component variants  
❌ Don't ignore focus states  
❌ Don't use tiny touch targets (<44px)  

## Examples

### Hero Section

```
Background: gradient from primary-600 to primary-800
Heading: font-heading, text-6xl, font-bold, text-white
Subheading: text-xl, text-primary-100
CTA Button: variant="primary", size="lg"
```

### Feature Card

```
Card component with "elevated" variant
Icon: w-12 h-12, text-primary-600
Title: text-2xl, font-semibold, text-gray-900
Description: text-base, text-gray-600
```

### Navigation Bar

```
Background: white, border-bottom 1px gray-200
Logo: height 40px
Links: text-base, text-gray-700, hover:text-primary-600
CTA Button: variant="primary", size="md"
```

---

**HACODE SOLUTIONS**  
https://hacode.solutions | https://hacode-solutions-site.vercel.app

**Generated with design-md-handoff DevSpec**
