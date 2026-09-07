<script lang="ts">
  import PricingSection from '$lib/components/PricingSection.svelte';
  import FaqSection from '$lib/components/FaqSection.svelte';
</script>

<svelte:head>
  <title>Pricing & Plans — Saga Infographics</title>
  <meta
    name="description"
    content="Transparent monthly Saga plans or custom project scope. No long-term lock-in — scale up, pause, or cancel anytime."
  />
</svelte:head>

<div class="bg-canvas min-h-screen">
  <PricingSection />
  <FaqSection />
</div>
