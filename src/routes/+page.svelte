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
  <title>Viral Reels & YouTube Shorts Editing Agency | Saga, Nepal</title>
  <meta
    name="description"
    content="Saga edits YouTube Shorts, Instagram Reels and TikTok videos with a 48-hour turnaround, plus React/Next.js web development, for creators and brands."
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
