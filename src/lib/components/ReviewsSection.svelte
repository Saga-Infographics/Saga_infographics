<script lang="ts">
  import { TESTIMONIALS } from '$lib/data/content';
  import { ChevronLeft, ChevronRight, Star, Play, Quote, TrendingUp } from '@lucide/svelte';
  import { ui } from '$lib/stores/ui.svelte';

  let currentIndex = $state(0);
  const current = $derived(TESTIMONIALS[currentIndex]);

  const next = () => (currentIndex = (currentIndex + 1) % TESTIMONIALS.length);
  const prev = () =>
    (currentIndex = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
</script>

<section class="py-20 bg-canvas border-t border-neutral-200/60">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div
        class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4"
      >
        [ CUSTOMER REVIEWS ]
      </div>

      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
        Loved by
        <span class="font-serif-italic text-saga font-normal">top creators & founders</span>
      </h2>
    </div>

    <div
      class="bg-white rounded-[32px] border border-neutral-200/90 p-6 sm:p-10 shadow-sm max-w-5xl mx-auto relative overflow-hidden"
    >
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div
          class="md:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-900 group shadow-md"
        >
          <img
            src={current.videoThumbnail}
            alt={current.author}
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          ></div>

          <button
            onclick={ui.openShowreel}
            class="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/90 group-hover:bg-saga text-ink group-hover:text-white flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 cursor-pointer"
            aria-label="Play video testimonial"
          >
            <Play class="w-6 h-6 fill-current ml-0.5" />
          </button>

          <div
            class="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-2 text-white"
          >
            <div class="w-7 h-7 rounded-lg bg-saga flex items-center justify-center shrink-0">
              <TrendingUp class="w-4 h-4 text-white" />
            </div>
            <div>
              <p class="text-xs font-bold">{current.viewsGained}</p>
              <p class="text-[10px] text-white/70">{current.metricLabel}</p>
            </div>
          </div>
        </div>

        <div class="md:col-span-7 flex flex-col justify-between h-full py-2">
          <div>
            <div class="flex items-center gap-1 text-amber-400 mb-6">
              {#each Array(5) as _, i (i)}
                <Star class="w-4 h-4 fill-amber-400 text-amber-400" />
              {/each}
              <span class="text-xs font-bold text-neutral-800 ml-2">5.0 Star Client Review</span>
            </div>

            <div class="relative mb-8">
              <Quote class="w-10 h-10 text-saga/15 absolute -top-4 -left-3 pointer-events-none" />
              <p class="text-lg sm:text-xl font-bold text-ink leading-relaxed relative z-10">
                "{current.content}"
              </p>
            </div>
          </div>

          <div class="pt-6 border-t border-neutral-100 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <img
                src={current.avatarUrl}
                alt={current.author}
                class="w-12 h-12 rounded-full object-cover border-2 border-saga/20"
              />
              <div>
                <h4 class="text-sm font-bold text-ink">{current.author}</h4>
                <p class="text-xs text-neutral-500 font-medium">
                  {current.handle} • <span class="text-saga font-semibold">{current.followers}</span>
                </p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button
                onclick={prev}
                class="p-2.5 rounded-full border border-neutral-200 bg-white hover:bg-ink hover:text-white text-neutral-800 transition-all cursor-pointer shadow-2xs"
                aria-label="Previous testimonial"
              >
                <ChevronLeft class="w-4 h-4" />
              </button>
              <button
                onclick={next}
                class="p-2.5 rounded-full border border-neutral-200 bg-white hover:bg-ink hover:text-white text-neutral-800 transition-all cursor-pointer shadow-2xs"
                aria-label="Next testimonial"
              >
                <ChevronRight class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
