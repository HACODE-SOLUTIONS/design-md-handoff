# design-md-handoff

**Turn DESIGN.md / brand briefs into Next.js UI with AI coding agents**

A free DevSpec pack by [HACODE SOLUTIONS](https://hacode.solutions) that helps AI agents (Cursor, Claude, etc.) transform design specifications into production-ready Next.js components.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://hacode-solutions-site.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

## 🎯 What is this?

This DevSpec pack provides a structured workflow for AI coding agents to:

1. **Ingest** design specifications from DESIGN.md files
2. **Extract** design tokens (colors, typography, spacing, components)
3. **Map** tokens to Tailwind CSS configuration
4. **Generate** Next.js components with proper styling
5. **Validate** output against acceptance criteria

Inspired by the [getdesign.md](https://getdesign.md) workflow, this pack bridges the gap between design handoff and implementation.

## 📦 What's included?

- **DEVSPEC.md** — Complete workflow guide for AI agents
- **SKILL.md** — Cursor Agent skill definition
- **example/DESIGN.md** — Sample design specification
- **example/** — Working Next.js implementation
- **Prompts & patterns** — Ready-to-use AI prompts

## 🚀 Quick Start

### For AI Agents (Cursor, Claude)

1. Read `SKILL.md` to understand the workflow
2. Ingest the target `DESIGN.md` file
3. Follow the steps in `DEVSPEC.md`
4. Generate components using extracted tokens

### For Developers

```bash
# Clone and explore the example
cd example
npm install
npm run dev
```

Visit `http://localhost:3000` to see the generated components.

## 📖 Documentation

- [DEVSPEC.md](./DEVSPEC.md) — Technical specification & workflow
- [SKILL.md](./SKILL.md) — AI agent skill definition
- [example/DESIGN.md](./example/DESIGN.md) — Sample design file

## 🏢 Use Cases

- **Design-to-code handoff** — Automate component generation from design specs
- **Brand consistency** — Ensure design tokens are consistently applied
- **Rapid prototyping** — Quickly scaffold UIs from briefs
- **AI-assisted development** — Enhance agent understanding of design intent

## 🛠️ Workflow Overview

```
DESIGN.md → Extract Tokens → Tailwind Config → Components → Tests → Ship
```

1. **Parse** DESIGN.md structure
2. **Extract** design tokens and component specs
3. **Generate** `tailwind.config.ts` with custom tokens
4. **Build** React/Next.js components
5. **Write** acceptance tests
6. **Validate** against design spec

## 🤝 Contributing

This is a free DevSpec pack. Contributions welcome! See [HACODE SOLUTIONS](https://hacode.solutions) for more resources.

## 📄 License

MIT © HACODE SOLUTIONS

## 🔗 Links

- [HACODE SOLUTIONS](https://hacode.solutions)
- [Live Demo](https://hacode-solutions-site.vercel.app)
- [getdesign.md](https://getdesign.md) — Inspiration

---

**Built for AI agents, by HACODE SOLUTIONS**
