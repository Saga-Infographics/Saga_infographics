<script lang="ts">
  import { SERVICES } from '$lib/data/content';
  import ServiceIcon from '$lib/components/ServiceIcon.svelte';
  import { CircleCheckBig as CheckCircle2, ArrowUpRight } from '@lucide/svelte';
  import { ui } from '$lib/stores/ui.svelte';

  const iconColor: Record<string, string> = {
    Youtube: 'text-[#FF0000]',
    Instagram: 'text-[#E1306C]',
    Video: 'text-black',
    Film: 'text-saga',
    Sparkles: 'text-saga',
    Code: 'text-blue-600'
  };
</script>

<svelte:head>
  <title>Services — Saga Infographics</title>
  <meta
    name="description"
    content="From viral short-form video editing to custom web application development, Saga provides scalable creative and engineering solutions."
  />
</svelte:head>

<div class="py-12 bg-canvas min-h-screen">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div
        class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4"
      >
        [ SAGA SERVICES ]
      </div>

      <h1 class="text-4xl sm:text-5xl font-extrabold text-ink tracking-tight">
        End-to-End Creative &
        <span class="font-serif-italic text-saga font-normal">Digital Engineering</span>
      </h1>
      <p class="mt-4 text-base text-neutral-600 leading-relaxed">
        From viral short-form video editing to custom web application development, Saga provides
        scalable solutions for creators and brands.
      </p>
    </div>

    <div class="space-y-12 max-w-5xl mx-auto">
      {#each SERVICES as serv (serv.id)}
        <div
          id={serv.slug}
          class="bg-white rounded-[32px] border border-neutral-200/90 p-8 sm:p-10 shadow-xs flex flex-col md:flex-row gap-8 items-start justify-between scroll-mt-28"
        >
          <div class="space-y-4 max-w-2xl">
            <div class={`w-14 h-14 rounded-2xl ${serv.badgeBg} flex items-center justify-center`}>
              <ServiceIcon name={serv.icon} class={`w-6 h-6 ${iconColor[serv.icon] ?? 'text-saga'}`} />
            </div>

            <h2 class="text-2xl font-extrabold text-ink tracking-tight">{serv.title}</h2>

            <p class="text-sm text-neutral-600 leading-relaxed">{serv.description}</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {#each serv.features as feat, i (i)}
                <div
                  class="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-canvas p-3 rounded-xl border border-neutral-200/60"
                >
                  <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              {/each}
            </div>
          </div>

          <div
            class="w-full md:w-auto bg-canvas p-6 rounded-2xl border border-neutral-200 text-center space-y-4 shrink-0"
          >
            <div class="text-xs font-bold text-neutral-500 uppercase tracking-wider">
              Guaranteed SLA
            </div>
            <div class="text-3xl font-black text-ink">48 Hours</div>
            <p class="text-[11px] text-neutral-500">Fast turnarounds with direct Slack updates.</p>
            <button
              onclick={ui.openBooking}
              class="w-full bg-ink hover:bg-black text-white text-xs font-bold py-3 px-5 rounded-xl inline-flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
            >
              Request Service <ArrowUpRight class="w-4 h-4 text-saga" />
            </button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
