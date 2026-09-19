# DEVSPEC: design-md-handoff

**Version:** 1.0.0  
**Author:** HACODE SOLUTIONS  
**Purpose:** Transform DESIGN.md files into production Next.js UI components

## Overview

This DevSpec defines a structured workflow for AI coding agents to convert design specifications into working Next.js applications. It handles design token extraction, Tailwind configuration, component generation, and validation.

## Workflow Phases

### Phase 1: DESIGN.md Ingestion

**Goal:** Parse and understand the design specification structure.

**Steps:**

1. **Locate** the DESIGN.md file (typically in project root or `/design` directory)
2. **Parse** markdown structure (headings, sections, code blocks)
3. **Extract** key sections:
   - Brand identity
   - Design tokens (colors, typography, spacing)
   - Component specifications
   - Layout patterns
   - Interaction guidelines

**Expected Structure:**

```markdown
# Project Name

## Brand Identity
- Name, tagline, personality

## Design Tokens

### Colors
- Primary, secondary, accent, neutrals, semantic

### Typography
- Font families, sizes, weights, line heights

### Spacing
- Scale (e.g., 4px, 8px, 16px, 24px, 32px)

### Components
- Buttons, cards, forms, navigation, etc.

## Layout
- Grid system, breakpoints, containers

## Interactions
- Hover states, transitions, animations
```

### Phase 2: Token Extraction

**Goal:** Convert design tokens into structured data.

**Extract the following:**

#### Colors

```typescript
interface ColorToken {
  name: string;        // e.g., "primary"
  value: string;       // e.g., "#3B82F6"
  variants?: {
    [key: string]: string;  // e.g., { "50": "#EFF6FF", "600": "#2563EB" }
  };
}
```

#### Typography

```typescript
interface TypographyToken {
  fontFamily: string[];
  fontSize: {
    [key: string]: [string, { lineHeight: string; letterSpacing?: string }];
  };
  fontWeight: {
    [key: string]: string;
  };
}
```

#### Spacing

```typescript
interface SpacingToken {
  [key: string]: string;  // e.g., { "xs": "4px", "sm": "8px" }
}
```

#### Component Specs

```typescript
interface ComponentSpec {
  name: string;
  description: string;
  variants?: string[];
  props?: {
    name: string;
    type: string;
    default?: any;
  }[];
  styling: {
    base: string[];        // Base classes
    variants?: {
      [key: string]: string[];  // Variant classes
    };
  };
}
```

**Parsing Strategies:**

- **Inline tokens:** Extract hex codes, font names, pixel values
- **Tables:** Parse markdown tables for token definitions
- **Code blocks:** Extract JSON/YAML token definitions
- **Lists:** Derive tokens from bulleted/numbered lists

### Phase 3: Tailwind Configuration

**Goal:** Generate `tailwind.config.ts` with extracted tokens.

**Template:**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Extracted color tokens
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          // ... other shades
        },
        // ... more colors
      },
      fontFamily: {
        // Extracted font families
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // Extracted typography scale
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        // ... more sizes
      },
      spacing: {
        // Custom spacing if needed
      },
    },
  },
  plugins: [],
}

export default config
```

**Mapping Rules:**

1. **Colors:** Map to `theme.extend.colors`
   - Use nested objects for color scales
   - Include `DEFAULT` for base color

2. **Typography:**
   - Font families → `theme.extend.fontFamily`
   - Font sizes → `theme.extend.fontSize`
   - Font weights → `theme.extend.fontWeight`

3. **Spacing:**
   - Use Tailwind defaults when possible
   - Extend only for custom values

4. **Semantic naming:**
   - `primary`, `secondary`, `accent` for brand colors
   - `success`, `warning`, `error` for semantic colors

### Phase 4: Component Generation

**Goal:** Create React/Next.js components using extracted specs.

**Component Template:**

```typescript
import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          
          // Variant styles
          {
            'bg-primary text-white hover:bg-primary/90': variant === 'primary',
            'bg-secondary text-white hover:bg-secondary/90': variant === 'secondary',
            'border border-primary text-primary hover:bg-primary/10': variant === 'outline',
          },
          
          // Size styles
          {
            'h-9 px-3 text-sm': size === 'sm',
            'h-10 px-4 text-base': size === 'md',
            'h-11 px-6 text-lg': size === 'lg',
          },
          
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
```

**Generation Steps:**

1. **Create component file structure:**
   ```
   components/
     ui/
       button.tsx
       card.tsx
       input.tsx
       ...
   ```

2. **Implement base component:**
   - Props interface with variants
   - Forward refs for DOM elements
   - Base styling with `cn()` utility

3. **Apply design tokens:**
   - Use Tailwind classes from config
   - Map spec variants to className logic
   - Include responsive modifiers

4. **Add accessibility:**
   - ARIA attributes
   - Keyboard navigation
   - Focus states

**Utilities Required:**

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Phase 5: Acceptance Testing

**Goal:** Validate generated components against design specs.

**Test Categories:**

#### Visual Tests

```typescript
import { render } from '@testing-library/react'
import { Button } from './button'

describe('Button Visual Tests', () => {
  it('renders primary variant with correct styles', () => {
    const { container } = render(<Button variant="primary">Click me</Button>)
    const button = container.firstChild as HTMLElement
    
    expect(button).toHaveClass('bg-primary')
    expect(button).toHaveClass('text-white')
  })

  it('renders all size variants', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    sizes.forEach(size => {
      const { container } = render(<Button size={size}>Button</Button>)
      expect(container.firstChild).toBeInTheDocument()
    })
  })
})
```

#### Token Validation

```typescript
describe('Design Token Validation', () => {
  it('uses colors from tailwind config', () => {
    const config = require('../tailwind.config')
    
    expect(config.theme.extend.colors.primary).toBeDefined()
    expect(config.theme.extend.colors.secondary).toBeDefined()
  })

  it('includes required font families', () => {
    const config = require('../tailwind.config')
    
    expect(config.theme.extend.fontFamily.sans).toContain('Inter')
  })
})
```

#### Component API Tests

```typescript
import { render, fireEvent } from '@testing-library/react'
import { Button } from './button'

describe('Button API Tests', () => {
  it('handles onClick events', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button onClick={handleClick}>Click me</Button>
    )
    
    fireEvent.click(getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button disabled onClick={handleClick}>Click me</Button>
    )
    
    fireEvent.click(getByText('Click me'))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
```

**Acceptance Criteria Checklist:**

- [ ] All design tokens extracted and mapped
- [ ] Tailwind config generates correct CSS
- [ ] Components render all specified variants
- [ ] Component APIs match specifications
- [ ] Responsive behavior works across breakpoints
- [ ] Accessibility requirements met (WCAG 2.1 AA)
- [ ] Visual output matches design intent

### Phase 6: Documentation Generation

**Goal:** Create component documentation for developers.

**Generate Storybook stories or documentation pages:**

```typescript
// button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}
```

## AI Agent Prompts

### Prompt 1: Initial Analysis

```
Analyze the DESIGN.md file at [path]. Extract:
1. All color tokens (hex, RGB, semantic names)
2. Typography scale (families, sizes, weights)
3. Spacing values
4. Component specifications

Output the extracted tokens as a JSON structure.
```

### Prompt 2: Tailwind Generation

```
Using the extracted design tokens from the previous step, generate a complete
tailwind.config.ts file that:
1. Maps all color tokens to theme.extend.colors
2. Configures typography (fontFamily, fontSize)
3. Includes any custom spacing values
4. Uses TypeScript with proper types
```

### Prompt 3: Component Creation

```
Create a [ComponentName] component based on this specification:

[Paste component spec from DESIGN.md]

Requirements:
- Use TypeScript with proper types
- Support these variants: [list variants]
- Use Tailwind classes from the generated config
- Include proper accessibility attributes
- Forward refs for DOM elements
- Use the cn() utility for class merging
```

### Prompt 4: Testing

```
Generate comprehensive tests for the [ComponentName] component that:
1. Test all visual variants render correctly
2. Validate Tailwind classes are applied
3. Test component API (props, events)
4. Check accessibility (ARIA, keyboard nav)

Use @testing-library/react for tests.
```

### Prompt 5: Validation

```
Validate the generated code against the DESIGN.md specification:
1. Check all tokens are correctly applied
2. Verify component variants match the spec
3. Confirm responsive behavior
4. Validate accessibility compliance

Provide a report with any discrepancies found.
```

## Advanced Patterns

### Multi-Theme Support

When DESIGN.md includes multiple themes (light/dark):

```typescript
// tailwind.config.ts
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // light
          dark: '#60A5FA',    // dark mode variant
        },
      },
    },
  },
}
```

### Component Composition

For complex components, break into smaller pieces:

```
components/
  ui/
    card/
      card.tsx           # Container
      card-header.tsx    # Header section
      card-content.tsx   # Content section
      card-footer.tsx    # Footer section
      index.ts           # Re-exports
```

### Design System Integration

If DESIGN.md references an existing design system:

1. Import base configuration
2. Override with custom tokens
3. Extend with project-specific components

```typescript
import baseConfig from '@company/design-system/tailwind'

export default {
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      colors: {
        ...baseConfig.theme.extend.colors,
        // Custom project colors
      },
    },
  },
}
```

## Common Pitfalls

### Token Extraction

- **Issue:** Ambiguous color names
- **Solution:** Use context clues (section headings, descriptions)

- **Issue:** Inconsistent units (px, rem, em)
- **Solution:** Normalize to rem for typography, use Tailwind defaults

### Tailwind Configuration

- **Issue:** Conflicting color scales
- **Solution:** Namespace custom colors (e.g., `brand-primary`)

- **Issue:** Missing content paths
- **Solution:** Always include all component directories

### Component Generation

- **Issue:** Over-complicated class names
- **Solution:** Use variant objects with `cn()` utility

- **Issue:** Missing TypeScript types
- **Solution:** Define explicit interfaces for all props

### Testing

- **Issue:** Brittle class name tests
- **Solution:** Test behavior and rendered output, not implementation

- **Issue:** Missing edge cases
- **Solution:** Test disabled states, empty props, extreme values

## File Structure

Recommended project structure after generation:

```
project/
├── DESIGN.md                    # Source design spec
├── tailwind.config.ts           # Generated Tailwind config
├── components/
│   └── ui/                      # Generated components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── ...
├── lib/
│   └── utils.ts                 # Utility functions (cn)
├── app/                         # Next.js app directory
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── __tests__/                   # Component tests
│   └── components/
│       └── ui/
│           ├── button.test.tsx
│           └── ...
└── package.json
```

## Dependencies

**Required:**

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "next": "^14.0.0",
    "tailwindcss": "^3.4.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "@testing-library/react": "^14.0.0",
    "jest": "^29.0.0"
  }
}
```

**Optional:**

- `@storybook/react` - Component documentation
- `eslint-plugin-jsx-a11y` - Accessibility linting
- `@headlessui/react` - Accessible component primitives

## Success Metrics

A successful design-md-handoff implementation should achieve:

1. **Token Coverage:** 100% of design tokens extracted and applied
2. **Component Fidelity:** Visual output matches design intent
3. **Test Coverage:** >80% coverage on component tests
4. **Accessibility:** WCAG 2.1 AA compliance
5. **Performance:** No runtime overhead from token system
6. **Maintainability:** Clear, documented component APIs

## Resources

- **Tailwind CSS:** https://tailwindcss.com/docs
- **Next.js:** https://nextjs.org/docs
- **React:** https://react.dev
- **Testing Library:** https://testing-library.com
- **HACODE SOLUTIONS:** https://hacode.solutions

## Version History

- **1.0.0** (2026-09-19) — Initial release

---

**HACODE SOLUTIONS** | https://hacode-solutions-site.vercel.app
