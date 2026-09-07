<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  // import LogoTicker from '$lib/components/LogoTicker.svelte';
  import ProcessSection from '$lib/components/ProcessSection.svelte';
  // import RecentWorksSection from '$lib/components/RecentWorksSection.svelte';
  import ShortStorySection from '$lib/components/ShortStorySection.svelte';
  import ServicesSection from '$lib/components/ServicesSection.svelte';
  import TalentCallout from '$lib/components/TalentCallout.svelte';
  // import ReviewsSection from '$lib/components/ReviewsSection.svelte';
  import PricingSection from '$lib/components/PricingSection.svelte';
  import FaqSection from '$lib/components/FaqSection.svelte';
</script>

<svelte:head>
  <title>Saga Infographics — Creative & Digital Agency</title>
  <meta
    name="description"
    content="Saga is a digital & creative agency: viral short-form video editing, YouTube Shorts, Instagram Reels, motion graphics, and high-performance web engineering."
  />
</svelte:head>

<main class="min-h-screen">
  <Hero />
  <!-- Trusted-by brand logo ticker — hidden for now
  <LogoTicker />
  -->
  <ProcessSection />
  <!-- Recent Works / case-study section — hidden for now
  <RecentWorksSection />
  -->
  <ShortStorySection />
  <ServicesSection />
  <TalentCallout />
  <!-- Customer reviews / testimonials — hidden for now
  <ReviewsSection />
  -->
  <PricingSection />
  <FaqSection />
</main>
