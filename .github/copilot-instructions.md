<!-- Copilot / AI agent instructions for the digital-study repo -->
# Repo summary
- Tech: Vite + React 18 + TypeScript + Tailwind CSS + shadcn-style UI (Radix wrappers).
- Entrypoint: `src/main.tsx` -> `src/App.tsx`.
- Routing: `react-router-dom` v6 with single landing page (`/ppc`); all other routes redirect to `/ppc`.

# Quick start (commands verified in `package.json`)
- Install: `npm install` or `bun install` (workspace uses `bun.lockb`).
- Dev server: `npm run dev` (Vite server runs on port `8080` with host `::` for network access per `vite.config.ts`).
- Build: `npm run build` (production) or `npm run build:dev` (development with unminified output).
- Preview: `npm run preview` (local preview of production build).
- Lint: `npm run lint` (ESLint + TypeScript).
# Project structure & important files
- `src/main.tsx`: imports global CSS (`index.css`), `animate.css` (animation library), and mounts `<App />`.
- `src/App.tsx`: top-level providers (`QueryClientProvider`, `TooltipProvider`, `Toaster`, `Sonner`), routing, and single route to `/ppc`.
- `src/pages/`: page-level components (currently only `Ppc.tsx` – the main landing page).
- `src/components/`: section components exported from `Ppc.tsx` (Header, HeroSection, ReasonsSection, ProgramSection, ResultsSection, FAQSection, MainFormSection, TestimonialsSection, ContactSection, Footer, PaymentForm, etc.).
- `src/components/ui/`: shared Radix-based UI primitives (Button, Input, Dialog, etc.) – **prefer these over raw HTML**.
- `src/hooks/use-toast.ts`: toast notification management via `sonner` library.
- `src/lib/utils.ts`: `cn()` utility (Tailwind + clsx merge) – use for conditional class composition.
- `vite.config.ts`: path alias `@` → `./src` (e.g., `@/components/Button`).
- `tailwind.config.ts`: theme tokens (colors, fonts); uses CSS variables like `--primary`, `--background`, etc.

# Conventions & patterns to follow (specific to this repo)
- **Imports**: Always use `@` alias (e.g., `import { Button } from '@/components/ui/button'`).
- **UI components**: Prefer `src/components/ui/*` primitives over HTML elements for consistency with Radix/design system.
- **Styling**: Use Tailwind utility classes + theme tokens (`--primary`, `--background`, `--destructive`, etc. from `tailwind.config.ts`). Merge classes conditionally with `cn()` utility (e.g., `cn("base-class", { "active-class": isActive }`).
- **Animations**: Use `animate.css` classes with `animate__` prefix (e.g., `animate__fadeInUp`, `animate__delay-1s`). See `HeroSection.tsx` for examples.
- **Forms & UX**: `PaymentForm.tsx` uses local `useState` (not `react-hook-form`) for simple forms. Show toast notifications via `useToast()` hook with shape: `{ title: "...", description: "...", variant?: "destructive" | undefined }`.
- **Data fetching**: `@tanstack/react-query` is available at top-level (`QueryClientProvider`); place async hooks in components or `src/hooks/`.
- **Styling edge cases**: Use `cn()` from `lib/utils.ts` to merge Tailwind classes safely (handles class conflicts).

# Integration points & notable libraries
- **Routing**: `react-router-dom` v6 – single route `/ppc`; redirects from `/` and catch-all `*` to `/ppc` (see `src/App.tsx`).
- **Notifications**: `sonner` library via `src/hooks/use-toast.ts` – use `const { toast } = useToast()` then `toast({ ... })`.
- **UI primitives**: Radix UI components wrapped in shadcn-style helpers (e.g., `Button`, `Dialog`, `Input`). All in `src/components/ui/`.
- **Build tool**: Vite with `@vitejs/plugin-react-swc` (SWC for faster JSX compilation). Dev server on `::`:`8080`.

# What an AI agent should do first (practical checklist)
1. Read `src/main.tsx` and `src/App.tsx` to understand entry point, providers, and routing.
2. Read `src/pages/Ppc.tsx` to see the landing page structure and section composition.
3. Read a representative component (e.g., `PaymentForm.tsx` or `HeroSection.tsx`) to understand:
   - Props typing, `useState` patterns, and `useToast()` usage.
   - Tailwind class usage, `animate.css` animations, and `@` imports.
4. For new components: use `@` imports, Radix-based UI primitives from `src/components/ui/`, and Tailwind + `cn()` for styling.
5. **Run locally**: `npm install` (or `bun install`), then `npm run dev` → visit `http://localhost:8080` (or machine IP since host is `::`).
6. Check `src/lib/utils.ts` for the `cn()` helper and `src/hooks/use-toast.ts` for toast patterns.

# Notable design patterns & quirks
- **Landing page**: All content in single page (`Ppc.tsx`); sections imported and composed sequentially. Each section is a standalone component with self-contained styling.
- **Animations**: Extensive use of `animate.css` (imported globally in `src/main.tsx`). Common classes: `animate__fadeInUp`, `animate__fadeInLeft`, `animate__delay-1s`, `animate__delay-2s`.
- **Forms**: `PaymentForm.tsx` demonstrates pattern: local `useState`, form validation (check for empty fields), and `useToast()` for feedback. Redirects to external URL on submit.
- **No test suite**: No `test` or `test:watch` scripts in `package.json`. Linting is via ESLint + TypeScript strict mode.

# Code examples
**Using UI primitives with Tailwind + animations:**
```tsx
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const MyComponent = () => {
  const { toast } = useToast();
  return (
    <div className="animate__animated animate__fadeInUp">
      <Button onClick={() => toast({ title: "Success", description: "Done!" })}>
        Click me
      </Button>
    </div>
  );
};
```

**Class merging with `cn()`:**
```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-class", isActive && "active-class", { "conditional": state })}>
  Content
</div>
```
