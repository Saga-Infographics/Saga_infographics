import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-cloudflare';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      // SSR on Cloudflare Pages / Workers.
      // Build output: .svelte-kit/cloudflare
      adapter: adapter()
    })
  ]
});
