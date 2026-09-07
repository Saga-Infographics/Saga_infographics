import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // SSR on Cloudflare Pages / Workers.
    // Build output: .svelte-kit/cloudflare
    adapter: adapter(),
    alias: {
      '@/*': './src/lib/*'
    }
  }
};

export default config;
