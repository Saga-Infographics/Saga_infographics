import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // Node server output for cPanel "Setup Node.js App" (Passenger).
    // Build produces build/index.js — set that as the app's startup file.
    adapter: adapter({ out: 'build' }),
    alias: {
      '@/*': './src/lib/*'
    }
  }
};

export default config;
