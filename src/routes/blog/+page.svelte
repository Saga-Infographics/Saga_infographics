<script lang="ts">
  let { data } = $props();

  const fmt = (d: string) =>
    new Date(d + 'T00:00:00Z').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC'
    });
</script>

<svelte:head>
  <title>Blog — Short-Form Video Editing & Web Tips | Saga</title>
  <meta
    name="description"
    content="Practical guides on short-form video editing, YouTube Shorts, Instagram Reels, TikTok and web development from the Saga team in Kathmandu."
  />
</svelte:head>

<div class="py-12 bg-canvas min-h-screen">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-14">
      <div
        class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4"
      >
        [ SAGA BLOG ]
      </div>
      <h1 class="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
        Guides on video editing &
        <span class="font-serif-italic text-saga font-normal">digital growth</span>
      </h1>
      <p class="mt-4 text-base text-neutral-600 leading-relaxed">
        Practical tips on short-form video, Reels, Shorts, TikTok and web development.
      </p>
    </div>

    {#if data.posts.length === 0}
      <p class="text-center text-neutral-500 text-sm">New posts are coming soon.</p>
    {:else}
      <ul class="space-y-6">
        {#each data.posts as post (post.slug)}
          <li>
            <a
              href={`/blog/${post.slug}`}
              class="block bg-white rounded-[28px] border border-neutral-200/90 p-7 sm:p-8 shadow-xs hover:border-saga/40 transition-colors"
            >
              <div class="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                {fmt(post.date)}
              </div>
              <h2 class="mt-2 text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
                {post.title}
              </h2>
              <p class="mt-2 text-sm text-neutral-600 leading-relaxed">{post.description}</p>
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
