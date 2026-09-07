<script lang="ts">
  import { PRICING_PLANS } from '$lib/data/content';
  import { CircleCheckBig as CheckCircle2, ArrowUpRight, Sparkles, Calculator } from '@lucide/svelte';
  import { ui } from '$lib/stores/ui.svelte';

  let isYearly = $state(false);
</script>

<section class="py-20 bg-canvas border-t border-neutral-200/60">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-12">
      <div
        class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4"
      >
        [ PRICING ]
      </div>

      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
        Pay monthly or
        <span class="font-serif-italic text-saga font-normal">pay as you need</span>
      </h2>
      <p class="mt-3 text-sm text-neutral-600 font-medium">
        No long-term lock-in. Scale up, pause, or cancel anytime.
      </p>

      <div
        class="mt-8 inline-flex items-center gap-3 bg-white border border-neutral-200 p-1.5 rounded-full shadow-2xs"
      >
        <button
          onclick={() => (isYearly = false)}
          class={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
            !isYearly ? 'bg-ink text-white' : 'text-neutral-600 hover:text-black'
          }`}
        >
          Monthly Billing
        </button>
        <button
          onclick={() => (isYearly = true)}
          class={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
            isYearly ? 'bg-ink text-white' : 'text-neutral-600 hover:text-black'
          }`}
        >
          Annual Billing
          <span
            class="px-2 py-0.5 text-[9px] bg-saga text-white rounded-full font-extrabold"
          >
            Save 20%
          </span>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
      {#each PRICING_PLANS as plan (plan.id)}
        {@const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice}
        <div
          class={`rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
            plan.popular
              ? 'bg-ink text-white border-2 border-saga shadow-xl scale-[1.02]'
              : 'bg-white text-ink border border-neutral-200/90 shadow-xs hover:shadow-md'
          }`}
        >
          {#if plan.badge}
            <div
              class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-saga text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1"
            >
              <Sparkles class="w-3 h-3" />
              {plan.badge}
            </div>
          {/if}

          <div>
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-extrabold tracking-tight">{plan.name}</h3>
              <span
                class={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                  plan.popular ? 'bg-white/10 text-white' : 'bg-neutral-100 text-neutral-600'
                }`}
              >
                {plan.description}
              </span>
            </div>

            <div class="my-6">
              <div class="flex items-baseline gap-1">
                <span class="text-4xl sm:text-5xl font-black tracking-tight">NPR {price.toLocaleString('en-IN')}</span>
                <span
                  class={`text-xs font-semibold ${plan.popular ? 'text-neutral-400' : 'text-neutral-500'}`}
                >
                  / month
                </span>
              </div>
            </div>

            <div class="space-y-3 pt-6 border-t border-neutral-200/30">
              {#each plan.features as feat, idx (idx)}
                <div class="flex items-start gap-2.5 text-xs font-medium">
                  <CheckCircle2
                    class={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-saga' : 'text-emerald-500'}`}
                  />
                  <span class={plan.popular ? 'text-neutral-200' : 'text-neutral-700'}>{feat}</span>
                </div>
              {/each}
            </div>
          </div>

          <div class="mt-8 pt-6 border-t border-neutral-200/30">
            <button
              onclick={ui.openBooking}
              class={`w-full text-xs sm:text-sm font-bold py-3.5 px-4 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer ${
                plan.popular
                  ? 'bg-saga hover:bg-saga-dark text-white shadow-lg shadow-saga/30'
                  : 'bg-ink hover:bg-black text-white shadow-xs'
              }`}
            >
              {plan.ctaText}
              <ArrowUpRight class="w-4 h-4" />
            </button>
          </div>
        </div>
      {/each}
    </div>

    <div
      class="mt-12 bg-white rounded-2xl border border-neutral-200 p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs"
    >
      <div class="flex items-center gap-3 text-center sm:text-left">
        <div
          class="w-10 h-10 rounded-xl bg-saga/10 text-saga flex items-center justify-center shrink-0"
        >
          <Calculator class="w-5 h-5" />
        </div>
        <div>
          <h4 class="text-sm font-bold text-ink">Need a custom volume video or dev package?</h4>
          <p class="text-xs text-neutral-500">
            Calculate exact turnaround and pricing based on your video volume.
          </p>
        </div>
      </div>

      <button
        onclick={ui.openCalculator}
        class="bg-canvas hover:bg-neutral-100 text-ink border border-neutral-300 text-xs font-bold px-4 py-2.5 rounded-xl whitespace-nowrap transition-colors cursor-pointer"
      >
        Open Interactive Calculator 🧮
      </button>
    </div>
  </div>
</section>
