<script lang="ts">
  import { ArrowUpRight } from '@lucide/svelte';
  import type { PostMeta } from '#lib/blog';

  let { posts }: { posts: PostMeta[] } = $props();

  const fmt = (d: string) =>
    new Date(d + 'T00:00:00Z').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
</script>

{#if posts.length}
  <section class="py-20 bg-canvas border-t border-neutral-200/60">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <div
          class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4"
        >
          [ LATEST POSTS ]
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
          Guides for
          <span class="font-serif-italic text-saga font-normal">creators & builders</span>
        </h2>
      </div>

      <ul class="space-y-4">
        {#each posts as post (post.slug)}
          <li>
            <a
              href={`/blog/${post.slug}`}
              class="block bg-white rounded-2xl border border-neutral-200/90 p-6 shadow-xs hover:border-saga/40 transition-colors"
            >
              <div class="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                {fmt(post.date)}
              </div>
              <h3 class="mt-1.5 text-lg sm:text-xl font-extrabold text-ink tracking-tight">
                {post.title}
              </h3>
              <p class="mt-1.5 text-sm text-neutral-600 leading-relaxed">{post.description}</p>
            </a>
          </li>
        {/each}
      </ul>

      <div class="mt-8 text-center">
        <a
          href="/blog"
          class="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:text-saga"
        >
          All posts <ArrowUpRight class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
{/if}
