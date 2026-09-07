<script lang="ts">
  import { Eye, Video, DollarSign } from '@lucide/svelte';

  const stats = [
    {
      icon: Eye,
      iconWrap: 'bg-saga/10 text-saga',
      value: '1M+',
      label: 'Total Organic Views',
      desc: 'Driven across YouTube Shorts, Instagram Reels, and TikTok algorithms.'
    },
    {
      icon: Video,
      iconWrap: 'bg-blue-500/10 text-blue-600',
      value: '100+',
      label: 'Videos & Apps Delivered',
      desc: 'Edited and engineered with strict 48-hour turnaround benchmarks.'
    },
    {
      icon: DollarSign,
      iconWrap: 'bg-emerald-500/10 text-emerald-600',
      value: 'NPR 5 Lakh+',
      label: 'Client Revenue Generated',
      desc: 'Turned audience attention into direct sales, sponsorships, and conversions.'
    }
  ];
</script>

<section class="py-20 bg-canvas border-t border-neutral-200/60">
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <div
      class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-6"
    >
      [ OUR SHORT STORY ]
    </div>

    <h2
      class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink tracking-tight leading-relaxed max-w-4xl mx-auto"
    >
      We're a
      <span class="px-3 py-1 rounded-xl bg-saga/10 text-saga font-bold border border-saga/20">
        short-form
      </span>
      video editing and digital agency helping creators and brands turn raw clips into
      <span class="px-3 py-1 rounded-xl bg-ink text-white font-bold">viral Reels</span>
      , Shorts, and
      <span class="px-3 py-1 rounded-xl bg-saga text-white font-bold">TikToks</span>
      — fast, engaging, and tailored to trends that perform.
    </h2>

    <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
      {#each stats as s (s.label)}
        <div
          class="bg-white p-7 rounded-[24px] border border-neutral-200/90 shadow-xs hover:shadow-md transition-all"
        >
          <div class={`w-10 h-10 rounded-xl ${s.iconWrap} flex items-center justify-center mb-4`}>
            <s.icon class="w-5 h-5" />
          </div>
          <div class="text-4xl font-black text-ink tracking-tight mb-1">{s.value}</div>
          <p class="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-1">{s.label}</p>
          <p class="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
