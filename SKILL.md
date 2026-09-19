# SKILL: design-md-handoff

**Type:** Design-to-Code Workflow  
**Version:** 1.0.0  
**Provider:** HACODE SOLUTIONS  
**Trigger:** Use when converting DESIGN.md files or brand briefs into Next.js UI components

## When to use this skill

Use this skill when:

- User mentions "DESIGN.md" or design handoff
- User asks to generate components from a design specification
- User requests design token extraction
- User wants to scaffold UI from a brand brief
- User needs consistent design system implementation
- User asks to turn design into code with AI agents

Do NOT use for:

- Generic component creation without a design spec
- Modifying existing components unrelated to design tokens
- Non-design-related tasks

## Skill Description

This skill enables AI agents to systematically transform design specifications (DESIGN.md files) into production-ready Next.js applications. It handles design token extraction, Tailwind configuration, component generation, and validation.

## Usage Instructions

### Step 1: Read the DEVSPEC

Before starting, read `/workspace/DEVSPEC.md` (or wherever the DEVSPEC is located) to understand the complete workflow.

### Step 2: Locate DESIGN.md

Search for the DESIGN.md file in the project:

```bash
find . -name "DESIGN.md" -o -name "design.md"
```

Common locations:
- Project root: `/DESIGN.md`
- Design directory: `/design/DESIGN.md`
- Docs: `/docs/DESIGN.md`

### Step 3: Parse and Extract

Read the DESIGN.md file and extract:

1. **Brand Identity**
   - Project name, tagline
   - Brand personality and voice

2. **Design Tokens**
   - Colors (primary, secondary, neutrals, semantic)
   - Typography (families, sizes, weights, line-heights)
   - Spacing scale
   - Border radius, shadows, other visual properties

3. **Component Specifications**
   - Component names and purposes
   - Variants (e.g., button: primary, secondary, outline)
   - States (hover, active, disabled, focus)
   - Props and their types

4. **Layout Patterns**
   - Grid systems
   - Breakpoints
   - Container widths

5. **Interactions**
   - Transitions and animations
   - Hover effects
   - Loading states

### Step 4: Generate Tailwind Config

Create or update `tailwind.config.ts`:

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
        // Map extracted colors here
      },
      fontFamily: {
        // Map font families here
      },
      fontSize: {
        // Map typography scale here
      },
    },
  },
  plugins: [],
}

export default config
```

### Step 5: Create Component Structure

Set up the component directory:

```bash
mkdir -p components/ui
mkdir -p lib
```

Create the utility function (`lib/utils.ts`):

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Step 6: Generate Components

For each component in the spec:

1. Create a file in `components/ui/[component-name].tsx`
2. Define TypeScript interfaces for props
3. Implement variant logic using extracted tokens
4. Add accessibility attributes
5. Forward refs when appropriate
6. Export the component

**Template:**

```typescript
import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'variant1' | 'variant2'
}

const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base styles from design tokens
          'base-classes',
          // Variant styles
          {
            'variant-classes': variant === 'variant1',
          },
          className
        )}
        {...props}
      />
    )
  }
)

Component.displayName = 'Component'

export { Component }
```

### Step 7: Create Example Pages

Generate example pages that showcase the components:

```typescript
// app/page.tsx
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Design System</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>
      
      {/* More component examples */}
    </main>
  )
}
```

### Step 8: Validate

Check that:

- [ ] All design tokens from DESIGN.md are in `tailwind.config.ts`
- [ ] All specified components are generated
- [ ] Components use tokens (not hardcoded values)
- [ ] Variants match the specification
- [ ] TypeScript types are correct
- [ ] Components are accessible (ARIA, keyboard nav)
- [ ] Build succeeds (`npm run build`)

### Step 9: Document

Create a summary document showing:

- ✅ Extracted tokens
- ✅ Generated components
- ✅ Component variants implemented
- ⚠️ Any deviations from spec (with reasons)
- 📝 Usage examples

## AI Agent Prompts

### Prompt: Token Extraction

```
Read the DESIGN.md file and extract all design tokens into a structured JSON format:

{
  "colors": {
    "primary": { "value": "#...", "variants": {} },
    ...
  },
  "typography": {
    "fontFamily": {},
    "fontSize": {},
    "fontWeight": {}
  },
  "spacing": {},
  "components": [
    {
      "name": "Button",
      "variants": ["primary", "secondary"],
      "props": [],
      "styling": {}
    }
  ]
}

Be thorough and capture all tokens mentioned in the file.
```

### Prompt: Component Generation

```
Generate a [ComponentName] component based on the DESIGN.md specification.

Requirements:
- TypeScript with proper interfaces
- Use Tailwind classes from the config
- Support variants: [list]
- Include accessibility (ARIA, focus states)
- Forward refs
- Use cn() utility for class merging

Follow the component template in DEVSPEC.md.
```

### Prompt: Validation

```
Validate the generated implementation against DESIGN.md:

1. Check all design tokens are in tailwind.config.ts
2. Verify all components are generated
3. Confirm variants match the spec
4. Check for hardcoded values (should use tokens)
5. Test accessibility compliance

Provide a detailed report.
```

## Example Workflow

**Input:** DESIGN.md with button specification

```markdown
## Components

### Button

Primary action button with three variants.

**Variants:**
- Primary: Blue background (#3B82F6), white text
- Secondary: Gray background (#6B7280), white text
- Outline: Transparent background, blue border and text

**Sizes:**
- Small: 32px height, 12px padding
- Medium: 40px height, 16px padding
- Large: 48px height, 20px padding
```

**Output:** Generated component

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
          'inline-flex items-center justify-center rounded-md font-medium',
          'transition-colors focus-visible:outline-none focus-visible:ring-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-blue-500 text-white hover:bg-blue-600': variant === 'primary',
            'bg-gray-500 text-white hover:bg-gray-600': variant === 'secondary',
            'border border-blue-500 text-blue-500 hover:bg-blue-50': variant === 'outline',
          },
          {
            'h-8 px-3 text-sm': size === 'sm',
            'h-10 px-4 text-base': size === 'md',
            'h-12 px-5 text-lg': size === 'lg',
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

## Dependencies

Ensure these packages are installed:

```bash
npm install clsx tailwind-merge
npm install -D @types/react @types/node typescript
```

## Troubleshooting

### Token Extraction Issues

**Problem:** Ambiguous token names or values

**Solution:** Make reasonable assumptions based on context, or use Tailwind defaults. Document any assumptions.

### Build Errors

**Problem:** TypeScript errors or missing imports

**Solution:** Check that all interfaces are properly defined and paths are configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Missing Tokens

**Problem:** Some tokens from DESIGN.md not found in generated code

**Solution:** Review the extraction step and ensure all sections were parsed. Re-run extraction with explicit focus on missing tokens.

## Best Practices

1. **Be Explicit:** Prefer explicit token mapping over assumptions
2. **Use TypeScript:** Always generate typed components
3. **Semantic Naming:** Use meaningful token names (e.g., `primary`, not `blue`)
4. **Accessibility First:** Include ARIA attributes and keyboard navigation
5. **Document Deviations:** If you deviate from the spec, document why
6. **Test Incrementally:** Validate tokens before generating components
7. **Version Control:** Commit after each major step (tokens → config → components)

## Integration with Other Skills

This skill works well with:

- **nextjs** skill — For Next.js app structure and routing
- **shadcn** skill — For base component patterns
- **vercel-cli** skill — For deployment after generation

## Success Criteria

A successful design-md-handoff should result in:

✅ All tokens extracted and mapped  
✅ Tailwind config reflects design system  
✅ All specified components generated  
✅ Components use tokens, not hardcoded values  
✅ Build succeeds without errors  
✅ Components are accessible  
✅ Example pages showcase components  

## Resources

- [DEVSPEC.md](./DEVSPEC.md) — Complete technical specification
- [Example DESIGN.md](./example/DESIGN.md) — Sample design file
- [HACODE SOLUTIONS](https://hacode.solutions) — More resources
- [Demo Site](https://hacode-solutions-site.vercel.app)

## Version History

- **1.0.0** (2026-09-19) — Initial release

---

**Built by HACODE SOLUTIONS** | MIT License
