# Saga — SvelteKit

SvelteKit (Svelte 5 runes) + SSR rewrite of the original React/Vite Saga agency site.

## Stack

- **SvelteKit 2** with server-side rendering (`ssr = true`, no prerender)

- **Svelte 5** runes (`$state`, `$derived`, `$props`)
- **Tailwind CSS v4** via `@tailwindcss/vite` (`src/app.css`)
- **shadcn-svelte-style components** in `src/lib/components/ui` (Button, Dialog, Accordion) built on `bits-ui`
- **@lucide/svelte** icons
- **gsap** ScrollTrigger for the hero scroll-scale effect (client-only, dynamic import)
- `@sveltejs/adapter-cloudflare` — SSR on Cloudflare Pages / Workers

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # -> .svelte-kit/cloudflare/ (_worker.js + assets)
npm run preview
npm run check    # svelte-check / type check
```

## Deploying to Cloudflare Pages

Connect the repo in the Cloudflare dashboard (Workers & Pages → Create → Pages → Connect to Git):

| Setting | Value |
| --- | --- |
| Framework preset | SvelteKit |
| Build command | `npm run build` |
| Build output directory | `.svelte-kit/cloudflare` |
| Branch | `sveltekit-rewrite` (or whichever you promote to Production) |

`wrangler.jsonc` in the repo sets `compatibility_date` and enables `nodejs_compat`, and
declares `pages_build_output_dir`, so the dashboard picks the output directory automatically.

**Build note:** `@rolldown/binding-wasm32-wasi` is pinned in devDependencies as a fallback
for Vite 8's Rust bundler — Cloudflare's `npm ci` on Linux otherwise trips over
[npm bug #4828](https://github.com/npm/cli/issues/4828) and can't find the native binding.

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
