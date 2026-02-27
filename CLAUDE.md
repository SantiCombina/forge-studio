# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run lint:fix   # Auto-fix linting issues
```

No test suite is configured.

## Architecture

**Forge Studio** is a Next.js portfolio/marketing website for a software studio.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript 5 · Tailwind CSS 4 · Framer Motion · shadcn/ui (Radix) · next-safe-action · React Hook Form · Zod · Resend (email)

### Directory Structure

```
src/
├── app/                    # Next.js App Router — layout, page, globals.css
├── components/
│   ├── sections/           # Page sections composed into app/page.tsx
│   └── ui/                 # Reusable shadcn-based components (button, input, form, navbar, footer, etc.)
└── lib/
    ├── safe-actions.ts     # next-safe-action client with logging middleware
    ├── scroll.ts           # Scroll utilities
    └── utils.ts            # Tailwind cn() helper (clsx + tailwind-merge)
```

### Key Patterns

- **Page composition:** `app/page.tsx` imports from `components/sections/`. Add new sections there.
- **`use client` sparingly:** Default to Server Components; add `"use client"` only for interactivity/animations.
- **Server actions:** Use `next-safe-action` via `lib/safe-actions.ts` for all form submissions. Validate inputs with Zod.
- **Styling:** Tailwind CSS 4 (PostCSS-based, no `tailwind.config`). CSS variables defined in `globals.css` provide the design tokens (colors, radii, fonts). Use `cn()` from `@/lib/utils` for conditional classes.
- **Animations:** Framer Motion for entrance/scroll animations in section components.
- **Components:** shadcn "new-york" style with Lucide icons. Add new shadcn components via `npx shadcn@latest add <component>`.
- **Path alias:** `@/` maps to `src/`.

### Environment Variables

- `RESEND_API_KEY` — required for contact form email delivery (`.env.local`)

### Naming Conventions

- **Files:** Always use **kebab-case** — e.g., `staggered-menu.tsx`, `language-switcher.tsx`. Never PascalCase filenames.
- **Component location:** Reusable UI components go in `src/components/ui/`. Page sections go in `src/components/sections/`. No components directly in `src/components/`.

### Code Style

ESLint flat config (`eslint.config.mjs`) enforces Prettier formatting: `printWidth: 120`, trailing commas, semicolons required. Run `npm run lint:fix` before committing.
