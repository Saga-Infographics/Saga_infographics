<script lang="ts">
  import { ArrowUpRight, DollarSign, Clock, Award, ShieldCheck } from '@lucide/svelte';
  import { ui } from '$lib/stores/ui.svelte';

  const cards = [
    {
      icon: DollarSign,
      title: 'Save 70-80% on salaries',
      desc: 'Our global talent pool unlocks cost savings of 70% on average compared to US/EU equivalents, with zero compromise on quality.'
    },
    {
      icon: Clock,
      title: 'Hire within days',
      desc: 'Streamline your hiring process with our pre-qualified video editors and developers available within 48 hours to 2 weeks.'
    },
    {
      icon: Award,
      title: 'Expertly trained',
      desc: 'Every team member is rigorously vetted and trained in short-form virality, hook optimization, and modern web frameworks.'
    }
  ];
</script>

<section class="py-16 bg-canvas">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      class="bg-saga text-white rounded-[32px] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xl"
    >
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none"
      ></div>

      <div class="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <span
          class="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-white text-[11px] font-bold uppercase tracking-wider mb-4 border border-white/20"
        >
          <ShieldCheck class="w-3.5 h-3.5" />
          Saga Talent Placements
        </span>

        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          Hire top-tier talent quickly without any headaches.
        </h2>
        <p class="mt-4 text-sm sm:text-base text-white/90 font-medium max-w-2xl mx-auto">
          Scale your video editing & digital dev pipeline with dedicated, pre-vetted specialists
          matched to your brand.
        </p>
      </div>

      <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-ink mb-12">
        {#each cards as card (card.title)}
          <div class="bg-white p-7 rounded-[24px] shadow-sm flex flex-col justify-between">
            <div>
              <div
                class="w-10 h-10 rounded-xl bg-saga/10 text-saga flex items-center justify-center mb-4"
              >
                <card.icon class="w-5 h-5" />
              </div>
              <h3 class="text-lg font-bold text-ink mb-2 leading-snug">{card.title}</h3>
              <p class="text-xs text-neutral-600 leading-relaxed">{card.desc}</p>
            </div>
          </div>
        {/each}
      </div>

      <div class="relative z-10 text-center">
        <button
          onclick={ui.openBooking}
          class="bg-ink hover:bg-black text-white text-sm font-semibold px-8 py-3.5 rounded-full inline-flex items-center gap-2 transition-all shadow-xl hover:scale-[1.03] cursor-pointer"
        >
          Book A Free Strategy Call
          <ArrowUpRight class="w-4 h-4 text-saga" />
        </button>
      </div>
    </div>
  </div>
</section>
