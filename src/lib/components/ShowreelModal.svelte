<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog';
  import { X } from '@lucide/svelte';
  import { ui } from '$lib/stores/ui.svelte';
</script>

<Dialog.Root bind:open={ui.showreelOpen}>
  <Dialog.Content
    overlayClass="bg-black/80"
    class="bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-w-4xl aspect-video"
  >
    <Dialog.Title class="sr-only">Saga Showreel</Dialog.Title>
    <button
      onclick={ui.closeShowreel}
      class="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
      aria-label="Close showreel"
    >
      <X class="w-5 h-5" />
    </button>

    {#if ui.showreelOpen}
      <iframe
        class="w-full h-full"
        src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
        title="Saga Showreel"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    {/if}
  </Dialog.Content>
</Dialog.Root>
