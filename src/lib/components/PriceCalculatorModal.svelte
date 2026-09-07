<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog';
  import { Calculator, ArrowUpRight } from '@lucide/svelte';
  import { ui } from '$lib/stores/ui.svelte';

  let videoCount = $state(8);
  let turnaround = $state<'48h' | '24h'>('48h');
  let addThumbnails = $state(true);
  let addWebPage = $state(false);
  let addMotion3D = $state(false);

  // NPR — Nepal market rates
  const basePerVideo = 1800;
  const addOnThumbnails = 3000; // per month
  const addOnWebPage = 25000; // one-time
  const addOnMotion3D = 12000; // one-time

  const totalEstimate = $derived.by(() => {
    let videoTotal = videoCount * basePerVideo;
    if (turnaround === '24h') videoTotal *= 1.25;
    let total = videoTotal;
    if (addThumbnails) total += addOnThumbnails;
    if (addWebPage) total += addOnWebPage;
    if (addMotion3D) total += addOnMotion3D;
    return total;
  });
</script>

<Dialog.Root bind:open={ui.calculatorOpen}>
  <Dialog.Content
    showCloseButton
    class="bg-white rounded-[32px] border border-neutral-200 shadow-2xl max-w-lg p-6 sm:p-8"
  >
    <div
      class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saga/10 text-saga text-[11px] font-bold mb-3"
    >
      <Calculator class="w-3.5 h-3.5" />
      Interactive Quote Engine
    </div>

    <Dialog.Title class="text-2xl font-extrabold text-ink tracking-tight mb-1">
      Calculate Your Custom Package
    </Dialog.Title>
    <Dialog.Description class="text-xs text-neutral-500 mb-6">
      Adjust video volume, turnaround speed, and optional design addons.
    </Dialog.Description>

    <div class="space-y-6">
      <div>
        <div class="flex justify-between items-center mb-2">
          <label for="pc-videos" class="text-xs font-bold text-neutral-800">
            Videos / Reels per month:
          </label>
          <span class="text-sm font-black text-saga bg-saga/10 px-3 py-0.5 rounded-full">
            {videoCount} Videos / mo
          </span>
        </div>
        <input
          id="pc-videos"
          type="range"
          min={4}
          max={30}
          step={1}
          bind:value={videoCount}
          class="w-full accent-saga cursor-pointer"
        />
        <div class="flex justify-between text-[10px] text-neutral-400 mt-1 font-medium">
          <span>4 videos (1/wk)</span>
          <span>12 videos (3/wk)</span>
          <span>30 videos (1/day)</span>
        </div>
      </div>

      <div>
        <span class="block text-xs font-bold text-neutral-800 mb-2">Delivery Turnaround</span>
        <div class="grid grid-cols-2 gap-3 text-xs font-semibold">
          <button
            type="button"
            onclick={() => (turnaround = '48h')}
            class={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              turnaround === '48h'
                ? 'bg-ink text-white border-ink'
                : 'bg-canvas hover:bg-neutral-100 border-neutral-200 text-neutral-700'
            }`}
          >
            <div class="font-bold">Standard 48 Hours</div>
            <div class="text-[10px] opacity-75">Included in base price</div>
          </button>

          <button
            type="button"
            onclick={() => (turnaround = '24h')}
            class={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
              turnaround === '24h'
                ? 'bg-ink text-white border-ink'
                : 'bg-canvas hover:bg-neutral-100 border-neutral-200 text-neutral-700'
            }`}
          >
            <div class="font-bold text-saga">Express 24 Hours</div>
            <div class="text-[10px] opacity-75">+25% rush delivery fee</div>
          </button>
        </div>
      </div>

      <div>
        <span class="block text-xs font-bold text-neutral-800 mb-2">Optional Addon Services</span>
        <div class="space-y-2">
          <label
            class="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-canvas cursor-pointer text-xs font-medium text-neutral-800 hover:bg-neutral-100"
          >
            <span class="flex items-center gap-2">
              <input type="checkbox" bind:checked={addThumbnails} class="accent-saga" />
              Custom YouTube Shorts & Reel Thumbnails
            </span>
            <span class="font-bold text-saga">+NPR 3,000/mo</span>
          </label>

          <label
            class="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-canvas cursor-pointer text-xs font-medium text-neutral-800 hover:bg-neutral-100"
          >
            <span class="flex items-center gap-2">
              <input type="checkbox" bind:checked={addWebPage} class="accent-saga" />
              High-Converting Landing Page Web Dev
            </span>
            <span class="font-bold text-blue-600">+NPR 25,000 one-time</span>
          </label>

          <label
            class="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-canvas cursor-pointer text-xs font-medium text-neutral-800 hover:bg-neutral-100"
          >
            <span class="flex items-center gap-2">
              <input type="checkbox" bind:checked={addMotion3D} class="accent-saga" />
              Custom 3D Logo / Intro Animation
            </span>
            <span class="font-bold text-amber-600">+NPR 12,000 one-time</span>
          </label>
        </div>
      </div>

      <div class="bg-ink text-white p-5 rounded-2xl flex items-center justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            Estimated Total
          </span>
          <div class="text-3xl font-black text-white leading-tight">
            NPR {Math.round(totalEstimate).toLocaleString('en-IN')}
            <span class="text-xs font-medium text-neutral-400">/ month</span>
          </div>
        </div>

        <button
          onclick={() => {
            ui.closeCalculator();
            ui.openBooking();
          }}
          class="bg-saga hover:bg-saga-dark text-white text-xs font-bold py-3 px-5 rounded-xl inline-flex items-center gap-1.5 shadow-md cursor-pointer"
        >
          Lock In This Package <ArrowUpRight class="w-4 h-4" />
        </button>
      </div>
    </div>
  </Dialog.Content>
</Dialog.Root>
