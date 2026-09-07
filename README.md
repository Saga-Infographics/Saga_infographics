# Saga — SvelteKit

SvelteKit (Svelte 5 runes) + SSR rewrite of the original React/Vite Saga agency site.

## Stack

- **SvelteKit 2** with server-side rendering (`ssr = true`, no prerender)
- **Svelte 5** runes (`$state`, `$derived`, `$props`)
- **Tailwind CSS v4** via `@tailwindcss/vite` (`src/app.css`)
- **shadcn-svelte-style components** in `src/lib/components/ui` (Button, Dialog, Accordion) built on `bits-ui`
- **@lucide/svelte** icons
- **gsap** ScrollTrigger for the hero scroll-scale effect (client-only, dynamic import)
- `@sveltejs/adapter-node` — builds a standalone Node SSR server (`build/index.js`)

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # -> build/ (Node server)
npm run start    # node build  (serve the production build)
npm run preview
npm run check    # svelte-check / type check
```

## Deploying to cPanel (Node.js App / Passenger)

1. Build locally: `npm run build`.
2. Upload to the server: the `build/` folder, `package.json`, and `package-lock.json`
   (do **not** upload `node_modules` or `.svelte-kit`).
3. cPanel → **Setup Node.js App** → *Create Application*:
   - Node.js version: 20.x
   - Application root: the folder you uploaded to
   - Application startup file: `build/index.js`
4. Click **Run NPM Install** (installs production deps).
5. Add environment variables:
   - `NODE_ENV` = `production`
   - `ORIGIN` = `https://saga.com.np` (your real domain, no trailing slash)
6. **Restart** the app. cPanel/Passenger proxies the domain to the Node process
   and picks the port automatically.

To redeploy: rebuild, replace `build/` on the server, re-run NPM Install only if
dependencies changed, then Restart.

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
