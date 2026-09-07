<script lang="ts">
  import { WORK_ITEMS } from '$lib/data/content';
  import { Play, TrendingUp, ArrowUpRight, Sparkles } from '@lucide/svelte';
  import BrandIcon from '$lib/components/BrandIcon.svelte';
  import { ui } from '$lib/stores/ui.svelte';

  let activeCategory = $state('all');

  const tabs = [
    { id: 'all', label: 'All Works' },
    { id: 'reels', label: 'Reels & Shorts' },
    { id: 'web', label: 'Web Apps' }
  ];

  const filteredWorks = $derived(
    activeCategory === 'all'
      ? WORK_ITEMS
      : WORK_ITEMS.filter((w) => w.category === activeCategory)
  );

  const marqueeWorks = $derived([...filteredWorks, ...filteredWorks, ...filteredWorks]);
</script>

<section class="py-20 bg-canvas border-t border-neutral-200/60 relative overflow-hidden">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
      <div>
        <div
          class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4"
        >
          [ WORKS MARQUEE ]
        </div>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
          Recent works for
          <span class="font-serif-italic text-saga font-normal">clients</span>
        </h2>
        <p class="mt-2 text-xs text-neutral-500 font-medium flex items-center gap-1.5">
          <Sparkles class="w-3.5 h-3.5 text-saga" /> Hover any card to pause scrolling & click for
          case study details
        </p>
      </div>

      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {#each tabs as tab (tab.id)}
          <button
            onclick={() => (activeCategory = tab.id)}
            class={`px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-ink text-white shadow-xs'
                : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200/80'
            }`}
          >
            {tab.label}
          </button>
        {/each}
      </div>
    </div>
  </div>

  <div class="relative w-full overflow-hidden py-4">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-canvas to-transparent z-20"
    ></div>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-canvas to-transparent z-20"
    ></div>

    {#key activeCategory}
      <div class="animate-marquee-slow flex items-stretch gap-6 px-4">
        {#each marqueeWorks as work, idx (`${work.id}-${idx}`)}
          <button
            type="button"
            onclick={() => ui.selectWork(work)}
            class="w-[280px] sm:w-[320px] bg-white rounded-[24px] border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between shrink-0 text-left"
          >
            <div class="relative aspect-[4/5] bg-neutral-900 overflow-hidden">
              <img
                src={work.thumbnailUrl}
                alt={work.title}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
              ></div>

              <div class="absolute top-4 left-4 z-10">
                <span
                  class="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-semibold border border-white/10 flex items-center gap-1.5"
                >
                  {#if work.platform === 'instagram'}
                    <BrandIcon name="instagram" class="w-3.5 h-3.5 text-[#E1306C]" />
                  {:else if work.platform === 'youtube'}
                    <BrandIcon name="youtube" class="w-3.5 h-3.5 text-red-500" />
                  {:else if work.platform === 'tiktok'}
                    <BrandIcon name="tiktok" class="w-3.5 h-3.5 text-cyan-400" />
                  {/if}
                  {work.clientHandle}
                </span>
              </div>

              <div
                class="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/90 group-hover:bg-saga text-ink group-hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110"
              >
                <Play class="w-5 h-5 fill-current ml-0.5" />
              </div>

              <div class="absolute bottom-4 left-4 right-4 z-10">
                <div
                  class="bg-white/95 backdrop-blur-md p-3 rounded-xl border border-neutral-200 shadow-sm flex items-center gap-2"
                >
                  <div
                    class="w-7 h-7 rounded-lg bg-saga/10 text-saga flex items-center justify-center shrink-0"
                  >
                    <TrendingUp class="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p class="text-xs font-extrabold text-ink leading-snug">{work.metric}</p>
                    <span class="text-[9px] text-neutral-500 font-medium">Verified Result</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4">
              <h3
                class="text-sm font-bold text-ink group-hover:text-saga transition-colors flex items-center justify-between"
              >
                <span class="truncate">{work.title}</span>
                <ArrowUpRight
                  class="w-4 h-4 text-neutral-400 group-hover:text-saga transition-colors shrink-0 ml-1"
                />
              </h3>
              <div class="flex flex-wrap gap-1 mt-2">
                {#each work.tags as tag, i (i)}
                  <span
                    class="px-2 py-0.5 rounded-md bg-canvas text-neutral-600 text-[10px] font-medium border border-neutral-200/60"
                  >
                    {tag}
                  </span>
                {/each}
              </div>
            </div>
          </button>
        {/each}
      </div>
    {/key}
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="mt-10 text-center">
      <a
        href="/work"
        class="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-saga underline underline-offset-8 transition-colors"
      >
        Explore Full Case Study Portfolio →
      </a>
    </div>
  </div>
</section>
