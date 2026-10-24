<script lang="ts">
  import { CircleCheckBig as CheckCircle2, ArrowUpRight, ArrowLeft } from '@lucide/svelte';
  import ServiceIcon from '$lib/components/ServiceIcon.svelte';
  import { SERVICES } from '$lib/data/content';
  import { ui } from '$lib/stores/ui.svelte';

  let { data } = $props();
  const service = $derived(data.service);
  const seo = $derived(service.seo!);
  const others = $derived(SERVICES.filter((s) => s.slug !== service.slug));

  const serviceJsonLd = $derived(
    `<script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: seo.description,
      url: `https://saga.com.np/services/${service.slug}`,
      provider: { '@id': 'https://saga.com.np/#organization' },
      areaServed: 'Worldwide'
    }).replace(/</g, '\\u003c')}<\/script>`
  );
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  {@html serviceJsonLd}
</svelte:head>

<div class="py-12 bg-canvas min-h-screen">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <a
      href="/services"
      class="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-ink mb-8"
    >
      <ArrowLeft class="w-4 h-4" /> All services
    </a>

    <div class="space-y-4 mb-10">
      <div class={`w-14 h-14 rounded-2xl ${service.badgeBg} flex items-center justify-center`}>
        <ServiceIcon name={service.icon} class="w-6 h-6 text-saga" />
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-ink tracking-tight">{seo.h1}</h1>
      <p class="text-base text-neutral-600 leading-relaxed">{service.description}</p>
    </div>

    <div class="bg-white rounded-[32px] border border-neutral-200/90 p-8 sm:p-10 shadow-xs space-y-6">
      {#each seo.paragraphs as para, i (i)}
        <p class="text-sm text-neutral-600 leading-relaxed">{para}</p>
      {/each}

      <h2 class="text-xl font-extrabold text-ink tracking-tight pt-2">What's included</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {#each service.features as feat, i (i)}
          <div
            class="flex items-center gap-2 text-xs font-semibold text-neutral-800 bg-canvas p-3 rounded-xl border border-neutral-200/60"
          >
            <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{feat}</span>
          </div>
        {/each}
      </div>

      <h2 class="text-xl font-extrabold text-ink tracking-tight pt-2">How it works</h2>
      <ol class="space-y-2 text-sm text-neutral-700 list-decimal list-inside">
        {#each seo.steps as step, i (i)}
          <li>{step}</li>
        {/each}
      </ol>

      <button
        onclick={ui.openBooking}
        class="bg-ink hover:bg-black text-white text-xs font-bold py-3 px-5 rounded-xl inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
      >
        Request Service <ArrowUpRight class="w-4 h-4 text-saga" />
      </button>
    </div>

    <h2 class="text-xl font-extrabold text-ink tracking-tight mt-12 mb-4">Other services</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-semibold">
      {#each others as o (o.slug)}
        <li>
          <a href={`/services/${o.slug}`} class="text-neutral-700 hover:text-saga">{o.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>
