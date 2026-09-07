<script lang="ts">
  import { PROCESS_STEPS } from '$lib/data/content';
  import { ArrowUpRight } from '@lucide/svelte';
  import { ui } from '$lib/stores/ui.svelte';
</script>

<section class="py-20 bg-canvas">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div
        class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4"
      >
        [ PROCESS ]
      </div>

      <h2
        class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight leading-tight"
      >
        How Saga turns your raw content into
        <span class="font-serif-italic text-saga font-normal">viral growth</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {#each PROCESS_STEPS as step (step.number)}
        <div
          class="bg-white rounded-[24px] border border-neutral-200/90 p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
        >
          <div>
            <div
              class="inline-block bg-canvas border border-neutral-200 text-neutral-900 text-xs font-bold px-3 py-1 rounded-lg mb-5 group-hover:bg-saga group-hover:text-white group-hover:border-saga transition-colors"
            >
              [ {step.number} ]
            </div>

            <h3
              class="text-xl font-bold text-ink tracking-tight mb-3 group-hover:text-saga transition-colors leading-snug"
            >
              {step.title}
            </h3>

            <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
              {step.description}
            </p>
          </div>

          <div
            class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-100 border border-neutral-100"
          >
            <img
              src={step.imageUrl}
              alt={step.alt}
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>
          </div>
        </div>
      {/each}
    </div>

    <div class="mt-12 text-center">
      <button
        onclick={ui.openBooking}
        class="bg-ink hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all shadow-xs hover:scale-[1.02] cursor-pointer"
      >
        Start Your First Video / Project
        <ArrowUpRight class="w-4 h-4 text-saga" />
      </button>
    </div>
  </div>
</section>
