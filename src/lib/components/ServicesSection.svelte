<script lang="ts">
  import { SERVICES } from '$lib/data/content';
  import ServiceIcon from '$lib/components/ServiceIcon.svelte';
  import { CircleCheckBig as CheckCircle2, ArrowUpRight } from '@lucide/svelte';

  const iconColor: Record<string, string> = {
    Youtube: 'text-[#FF0000]',
    Instagram: 'text-[#E1306C]',
    Video: 'text-black',
    Film: 'text-saga',
    Sparkles: 'text-saga',
    Code: 'text-blue-600'
  };
</script>

<section class="py-20 bg-canvas border-t border-neutral-200/60">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div
        class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4"
      >
        [ SERVICES WE OFFER ]
      </div>

      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
        Everything you need
        <span class="font-serif-italic text-saga font-normal">for views & growth</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {#each SERVICES as service (service.id)}
        <div
          class="bg-white rounded-[24px] border border-neutral-200/90 p-7 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 group"
        >
          <div>
            <div
              class={`w-12 h-12 rounded-2xl ${service.badgeBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              <ServiceIcon name={service.icon} class={`w-5 h-5 ${iconColor[service.icon] ?? 'text-saga'}`} />
            </div>

            <h3
              class="text-xl font-bold text-ink tracking-tight mb-3 group-hover:text-saga transition-colors"
            >
              {service.title}
            </h3>

            <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
              {service.description}
            </p>

            <div class="space-y-2 pt-4 border-t border-neutral-100">
              {#each service.features as feat, idx (idx)}
                <div class="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                  <CheckCircle2 class="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              {/each}
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
            <a
              href={`/services#${service.slug}`}
              class="text-xs font-bold text-ink group-hover:text-saga inline-flex items-center gap-1 transition-colors"
            >
              Explore Service <ArrowUpRight class="w-3.5 h-3.5" />
            </a>
            <span class="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">
              48H Delivery
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
