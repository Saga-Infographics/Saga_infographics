<script lang="ts">
  const LOGOS = [
    { name: 'MonZap', symbol: '⚡' },
    { name: 'Craftgram', symbol: '✦' },
    { name: 'Pulse', symbol: '〰' },
    { name: 'SwiftEngine', symbol: '❖' },
    { name: 'SparkleMedia', symbol: '❇' },
    { name: 'LumLabs', symbol: '◉' },
    { name: 'NepalTech', symbol: '▲' },
    { name: 'CreatorForge', symbol: '★' },
    { name: 'VibeFlow', symbol: '❋' }
  ];

  const marqueeLogos = [...LOGOS, ...LOGOS, ...LOGOS];
</script>

<section class="py-8 bg-canvas border-y border-neutral-200/60 overflow-hidden relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
    <p class="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400">
      Trusted by 500+ creators, agency founders & scale-up brands
    </p>
  </div>

  <div
    class="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-canvas to-transparent z-10"
  ></div>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-canvas to-transparent z-10"
  ></div>

  <div class="flex overflow-hidden py-2">
    <div
      class="animate-marquee flex items-center gap-10 sm:gap-16 shrink-0 opacity-80 hover:opacity-100 transition-opacity"
    >
      {#each marqueeLogos as logo, idx (idx)}
        <div
          class="flex items-center gap-2.5 text-neutral-700 hover:text-black font-extrabold text-base sm:text-lg tracking-tight transition-colors whitespace-nowrap cursor-pointer shrink-0"
        >
          <span class="text-saga text-xl">{logo.symbol}</span>
          <span>{logo.name}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
