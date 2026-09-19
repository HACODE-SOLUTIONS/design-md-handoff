import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">
            HACODE SOLUTIONS
          </h1>
          <p className="text-xl text-gray-600">
            Code smarter, ship faster
          </p>
          <Badge variant="primary" size="md">
            design-md-handoff Example
          </Badge>
        </header>

        {/* Buttons Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Buttons</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-700">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-700">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-700">States</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Normal</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Cards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default">
              <CardHeader>
                <h3 className="text-xl font-semibold">Default Card</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This is a default card with a border and no shadow.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <h3 className="text-xl font-semibold">Elevated Card</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This card has a shadow but no border.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                <h3 className="text-xl font-semibold">Outlined Card</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This card has a primary-colored border.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Badges Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Badges</h2>
          
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>

          <div className="flex flex-wrap gap-4">
            <Badge variant="primary" size="sm">Small</Badge>
            <Badge variant="primary" size="md">Medium</Badge>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="elevated">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">DESIGN.md Parsing</h3>
                <p className="text-gray-600">
                  Extract design tokens automatically from structured markdown files.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Tailwind Config</h3>
                <p className="text-gray-600">
                  Generate production-ready Tailwind configurations from design tokens.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Component Generation</h3>
                <p className="text-gray-600">
                  Build React components with proper TypeScript types and accessibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center space-y-4 pt-12 border-t">
          <p className="text-gray-600">
            This example was generated from{' '}
            <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">
              DESIGN.md
            </code>
            {' '}using the design-md-handoff DevSpec
          </p>
          <div className="flex justify-center gap-6">
            <a 
              href="https://hacode.solutions" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-700 transition-colors"
            >
              HACODE SOLUTIONS
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="https://hacode-solutions-site.vercel.app" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-700 transition-colors"
            >
              Live Demo
            </a>
          </div>
        </footer>
      </div>
    </main>
  )
}
