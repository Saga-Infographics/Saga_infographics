<script lang="ts">
  import { ArrowLeft, ArrowUpRight } from '@lucide/svelte';
  import { ui } from '#lib/stores/ui.svelte';

  let { data } = $props();
  const meta = $derived(data.meta);

  const fmt = (d: string) =>
    new Date(d + 'T00:00:00Z').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });

  const articleJsonLd = $derived(
    `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: meta.title,
      description: meta.description,
      datePublished: meta.date,
      dateModified: meta.date,
      mainEntityOfPage: `https://saga.com.np/blog/${meta.slug}`,
      author: { '@id': 'https://saga.com.np/#organization' },
      publisher: { '@id': 'https://saga.com.np/#organization' }
    }).replace(/</g, '\\u003c')}<\/script>`
  );
</script>

<svelte:head>
  <title>{meta.title} | Saga Blog</title>
  <meta name="description" content={meta.description} />
  {@html articleJsonLd}
</svelte:head>

<div class="py-12 bg-canvas min-h-screen">
  <article class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <a
      href="/blog"
      class="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-ink mb-8"
    >
      <ArrowLeft class="w-4 h-4" /> All posts
    </a>

    <div class="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
      {fmt(meta.date)}
    </div>
    <h1 class="mt-2 text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-tight">
      {meta.title}
    </h1>

    <div class="prose-saga mt-8">
      {@html data.html}
    </div>

    <div class="mt-12 bg-ink text-white p-8 rounded-[28px] text-center">
      <h2 class="text-xl sm:text-2xl font-extrabold">Want this done for you?</h2>
      <p class="text-xs text-neutral-400 mt-2 mb-5">
        Saga edits YouTube Shorts, Reels and TikToks in 48 hours.
      </p>
      <button
        onclick={ui.openBooking}
        class="bg-saga hover:bg-saga-dark text-white text-xs font-bold py-3 px-5 rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
      >
        Book A Free Call <ArrowUpRight class="w-4 h-4" />
      </button>
    </div>
  </article>
</div>
