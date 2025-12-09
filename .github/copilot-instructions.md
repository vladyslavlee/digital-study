<!-- Copilot / AI agent instructions for the ppc-mastery-launch repo -->
# Repo summary
- Tech: Vite + React + TypeScript + Tailwind + shadcn-style UI (Radix wrappers).
- Entrypoint: `src/main.tsx` -> `src/App.tsx`.
- Routing: `react-router-dom` with routes declared in `src/App.tsx` (routes: `/` and `/ppc`).

# Quick start (commands verified in `package.json`)
- Install: `npm install`.
- Dev server: `npm run dev` (Vite server runs on port `8080` by default per `vite.config.ts`).
- Build: `npm run build` and preview with `npm run preview`.
- Lint: `npm run lint`.

# Project structure & important files
- `src/main.tsx`: imports global CSS (`index.css`), third-party styles (`animate.css`) and mounts `<App />`.
- `src/App.tsx`: top-level providers (React Query `QueryClientProvider`, `TooltipProvider`, `Toaster` components) and app routing.
- `src/pages/`: page-level components, e.g. `Index.tsx`, `Ppc.tsx`, `NotFound.tsx`.
- `src/components/`: page sections and feature components (Hero, Program, Testimonials, PaymentForm, etc.).
- `src/components/ui/`: shared UI primitives and wrappers (Radix + shadcn-style components). Prefer these over raw HTML elements for consistency.
- `src/hooks/` and `src/lib/utils.ts`: shared logic and helpers.
- `vite.config.ts`: alias `@` -> `./src` (use `@/path/to/file` imports).
- `tailwind.config.ts`: content paths and theme tokens — keep Tailwind classes and CSS variables consistent with this config.

# Conventions & patterns to follow (specific to this repo)
- Use the `@` alias for imports (e.g. `import { Button } from '@/components/ui/button'`).
- Prefer UI primitives in `src/components/ui/*` (these wrap Radix/third-party primitives and implement design tokens).
- Styling: Tailwind utility classes + theme tokens (see `tailwind.config.ts` for color tokens like `background`, `primary`, `destructive`, and custom `sidebar` group).
- State & data fetching: app uses `@tanstack/react-query` at top-level (`QueryClientProvider`). Place async hooks alongside components or under `src/hooks`.
- Forms: `react-hook-form` is available in dependencies; some simple forms use local `useState` (see `PaymentForm.tsx`) and toasts via `use-toast` hook — follow existing toast shape when adding UX feedback.

# Integration points & notable libraries
- Routing: `react-router-dom` (v6) — look at `src/App.tsx` routes.
- Data caching: `@tanstack/react-query` configured in `src/App.tsx`.
- Notifications: `src/components/ui/toaster` and `src/components/ui/sonner` are both included; use the existing wrapper hooks (`src/hooks/use-toast.ts`) when showing toasts.
- UI primitives: heavy use of Radix via `@radix-ui/*` packages and shadcn-style components in `src/components/ui`.
- Build tooling: Vite with `@vitejs/plugin-react-swc`. Dev server configured in `vite.config.ts` (port `8080`, host `::`).

# What an AI agent should do first (practical checklist)
- Read `src/main.tsx` and `src/App.tsx` to understand providers and routes.
- Read a representative component under `src/components/` (e.g. `PaymentForm.tsx`) to follow patterns for props, hooks, and toast usage.
- Use `@` imports and existing UI primitives when adding components; mimic `className` + Tailwind usage rather than adding global CSS.
- When running locally: `npm install` then `npm run dev` and open `http://localhost:8080` or the machine IP (host `::` exposes network interfaces).

# Notes about missing or unusual things found
- There is no `start` or `test` script in `package.json` — use `npm run dev` for local development and `npm run build` for production builds.

# Examples (small snippets)
- Import via alias: `import PaymentForm from '@/components/PaymentForm';`
- Show a toast: use the repo's `use-toast` helper: `toast({ title: '...', description: '...' })` (see `src/components/PaymentForm.tsx`).

# When to ask the user
- If a change affects theme tokens or Tailwind config, confirm desired color/token names (they are referenced throughout UI primitives).
- If you plan to introduce a new global dependency (add to `package.json`), ask before committing.

# Feedback
Please review for missing details or anything you'd like the AI agent to follow differently (naming, commit style, tests to add).
