<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog';
  import { TrendingUp, Play, CircleCheckBig as CheckCircle2, ArrowUpRight } from '@lucide/svelte';
  import BrandIcon from '$lib/components/BrandIcon.svelte';
  import { ui } from '$lib/stores/ui.svelte';

  const work = $derived(ui.selectedWork);

  const applied = [
    'Hook Pacing & 3s Retention',
    'Animated Captions & SFX',
    'Trending Music Sync',
    'Color Grading & B-Roll'
  ];
</script>

<Dialog.Root
  open={work !== null}
  onOpenChange={(o) => {
    if (!o) ui.clearWork();
  }}
>
  <Dialog.Content
    showCloseButton
    overlayClass="bg-black/70"
    class="bg-white rounded-[32px] border border-neutral-200 shadow-2xl max-w-2xl p-6 sm:p-8"
  >
    {#if work}
      <div class="flex items-center gap-2 mb-4">
        <span
          class="px-3 py-1 rounded-full bg-saga/10 text-saga text-xs font-bold flex items-center gap-1.5"
        >
          {#if work.platform === 'instagram'}
            <BrandIcon name="instagram" class="w-3.5 h-3.5" />
          {:else if work.platform === 'youtube'}
            <BrandIcon name="youtube" class="w-3.5 h-3.5" />
          {:else if work.platform === 'tiktok'}
            <BrandIcon name="tiktok" class="w-3.5 h-3.5" />
          {/if}
          {work.clientHandle}
        </span>
        <span class="text-xs text-neutral-400 font-medium">Case Study Breakdown</span>
      </div>

      <Dialog.Title class="text-2xl font-extrabold text-ink tracking-tight mb-4">
        {work.title}
      </Dialog.Title>

      <div
        class="relative rounded-2xl overflow-hidden bg-neutral-900 aspect-[16/9] mb-6 shadow-md border border-neutral-200"
      >
        {#if work.videoUrl}
          <!-- svelte-ignore a11y_media_has_caption -->
          <video
            src={work.videoUrl}
            controls
            autoplay
            muted
            loop
            class="w-full h-full object-cover"
          ></video>
        {:else}
          <div class="relative w-full h-full">
            <img src={work.thumbnailUrl} alt={work.title} class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div
                class="w-16 h-16 rounded-full bg-saga text-white flex items-center justify-center shadow-lg"
              >
                <Play class="w-7 h-7 fill-current ml-1" />
              </div>
            </div>
          </div>
        {/if}
      </div>

      <div
        class="bg-canvas p-4 rounded-2xl border border-neutral-200 mb-6 flex items-center gap-3"
      >
        <div
          class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0"
        >
          <TrendingUp class="w-5 h-5" />
        </div>
        <div>
          <p class="text-sm font-extrabold text-ink">{work.metric}</p>
          <p class="text-xs text-neutral-500">{work.description}</p>
        </div>
      </div>

      <div class="space-y-2 mb-6">
        <h4 class="text-xs font-bold uppercase tracking-wider text-neutral-400">
          Services Applied by Saga
        </h4>
        <div class="grid grid-cols-2 gap-2 text-xs font-semibold text-neutral-700">
          {#each applied as item (item)}
            <div
              class="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-center gap-2"
            >
              <CheckCircle2 class="w-4 h-4 text-emerald-500" />
              {item}
            </div>
          {/each}
        </div>
      </div>

      <button
        onclick={() => {
          ui.clearWork();
          ui.openBooking();
        }}
        class="w-full bg-ink hover:bg-black text-white text-xs sm:text-sm font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm cursor-pointer"
      >
        Get Similar Results For Your Channel <ArrowUpRight class="w-4 h-4 text-saga" />
      </button>
    {/if}
  </Dialog.Content>
</Dialog.Root>
