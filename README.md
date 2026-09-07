# Saga — SvelteKit

SvelteKit (Svelte 5 runes) + SSR rewrite of the original React/Vite Saga agency site.

## Stack

- **SvelteKit 2** with server-side rendering (`ssr = true`, no prerender)
- **Svelte 5** runes (`$state`, `$derived`, `$props`)
- **Tailwind CSS v4** via `@tailwindcss/vite` (`src/app.css`)
- **shadcn-svelte-style components** in `src/lib/components/ui` (Button, Dialog, Accordion) built on `bits-ui`
- **@lucide/svelte** icons
- **gsap** ScrollTrigger for the hero scroll-scale effect (client-only, dynamic import)
- `@sveltejs/adapter-auto` (Node SSR)

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run preview
npm run check    # svelte-check / type check
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/routes/+layout.svelte` | Navbar + Footer + globally-mounted modals, scroll-to-top on navigation |
| `src/routes/+page.svelte` | Home (Hero, marquees, process, works, reviews, pricing, FAQ) |
| `src/routes/{about,work,services,pricing,contact}/+page.svelte` | Inner pages |
| `src/lib/components/*.svelte` | Section + modal components |
| `src/lib/components/ui/*` | shadcn-svelte-style primitives |
| `src/lib/stores/ui.svelte.ts` | Runes singleton for modal / selected-work state |
| `src/lib/data/content.ts` | All copy + demo data |

## Notes

- The original `@google/genai` dependency was unused in the source and is not carried over.
- Modal open/close state lives in one runes store so any component can trigger the booking,
  calculator, showreel, or case-study dialogs.
