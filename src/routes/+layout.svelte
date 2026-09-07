<script lang="ts">
  import '../app.css';
  import { afterNavigate } from '$app/navigation';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import BookMeetingModal from '$lib/components/BookMeetingModal.svelte';
  // import WorkDetailModal from '$lib/components/WorkDetailModal.svelte';
  import PriceCalculatorModal from '$lib/components/PriceCalculatorModal.svelte';
  // Showreel modal is only opened from the hero video player / testimonials,
  // both of which are currently commented out.
  // import ShowreelModal from '$lib/components/ShowreelModal.svelte';

  let { children } = $props();

  afterNavigate(({ to, type }) => {
    // Skip when the browser is only jumping to a hash on the same page.
    if (type === 'link' && to?.url.hash) return;
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  });
</script>

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
