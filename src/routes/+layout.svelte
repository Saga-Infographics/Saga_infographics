<script lang="ts">
  import '../app.css';
  import { page } from '$app/state';
  import { afterNavigate } from '$app/navigation';
  import Navbar from '#lib/components/Navbar.svelte';
  import Footer from '#lib/components/Footer.svelte';
  import BookMeetingModal from '#lib/components/BookMeetingModal.svelte';
  // import WorkDetailModal from '#lib/components/WorkDetailModal.svelte';
  import PriceCalculatorModal from '#lib/components/PriceCalculatorModal.svelte';
  // Showreel modal is only opened from the hero video player / testimonials,
  // both of which are currently commented out.
  // import ShowreelModal from '#lib/components/ShowreelModal.svelte';

  let { children } = $props();

  const SITE = 'https://saga.com.np';
  const canonical = $derived(SITE + (page.url.pathname === '/' ? '' : page.url.pathname));

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE}/#organization`,
    name: 'Saga Infographics',
    url: SITE,
    logo: `${SITE}/logo.png`,
    image: `${SITE}/logo.png`,
    description:
      'Short-form video editing (YouTube Shorts, Instagram Reels, TikTok), motion graphics and web development agency in Kathmandu, Nepal.',
    email: 'info@saga.com.np',
    foundingLocation: 'Kathmandu, Nepal',
    areaServed: 'Worldwide',
    priceRange: '$$',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'info@saga.com.np',
      telephone: '+977 980-5677536',
      availableLanguage: ['English']
    },
    telephone: '+977 980-5677536',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kathmandu',
      addressCountry: 'NP'
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=100089148218291',
      'https://www.instagram.com/sagainfographics/',
      'https://www.tiktok.com/@sagainfographics',
      'https://www.linkedin.com/company/saga-infographic'
    ]
  };
  const orgJsonLd = `<script type="application/ld+json">${JSON.stringify(orgSchema).replace(/</g, '\\u003c')}<\/script>`;

  afterNavigate(({ to, type }) => {
    // Skip when the browser is only jumping to a hash on the same page.
    if (type === 'link' && to?.url.hash) return;
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  });
</script>

<svelte:head>
  <link rel="canonical" href={canonical} />
  {@html orgJsonLd}
</svelte:head>

<div
  class="min-h-screen bg-canvas text-ink flex flex-col justify-between selection:bg-saga selection:text-white"
>
  <Navbar />

  <div class="flex-1">
    {@render children?.()}
  </div>

  <Footer />
</div>

<BookMeetingModal />
<PriceCalculatorModal />
<!-- <WorkDetailModal /> -->
<!-- <ShowreelModal /> -->
