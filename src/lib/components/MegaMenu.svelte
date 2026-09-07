<script lang="ts">
  import { MEGA_MENU_ITEMS } from '$lib/data/content';
  import { getIcon } from '$lib/components/icons';
  import { ArrowUpRight, CircleCheckBig as CheckCircle2 } from '@lucide/svelte';
  import { ui } from '$lib/stores/ui.svelte';

  let {
    isOpen = false,
    onClose,
    onOpen
  }: { isOpen?: boolean; onClose: () => void; onOpen?: () => void } = $props();

  const iconColor: Record<string, string> = {
    Play: 'text-saga',
    Code: 'text-blue-600',
    Layout: 'text-purple-600',
    Sparkles: 'text-amber-500',
    FolderGit2: 'text-emerald-600',
    Tag: 'text-rose-500'
  };
</script>

{#if isOpen}
  <div
    class="absolute top-full left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-white/98 backdrop-blur-xl border border-neutral-200/90 rounded-[28px] shadow-2xl py-6 px-5 sm:px-8 z-50 animate-in fade-in slide-in-from-top-2 duration-300 mt-2"
    role="presentation"
    onmouseenter={onOpen}
    onmouseleave={onClose}
  >
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
      <!-- Main Services Column -->
      <div class="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          class="col-span-full pb-2 border-b border-neutral-100 flex items-center justify-between"
        >
          <span class="text-xs font-bold uppercase tracking-wider text-neutral-400">
            Core Services & Solutions
          </span>
          <span class="text-[11px] text-saga font-medium flex items-center gap-1">
            <CheckCircle2 class="w-3 h-3" /> Pre-vetted team
          </span>
        </div>

        {#each MEGA_MENU_ITEMS as item, idx (idx)}
          {@const Icon = getIcon(item.iconName)}
          <a
            href={item.path}
            onclick={onClose}
            class="group p-3.5 rounded-xl hover:bg-canvas transition-all border border-transparent hover:border-neutral-200/80 flex items-start gap-3"
          >
            <div
              class="p-2.5 rounded-lg bg-neutral-100 group-hover:bg-white group-hover:shadow-xs transition-all shrink-0"
            >
              <Icon class={`w-4 h-4 ${iconColor[item.iconName] ?? 'text-saga'}`} />
            </div>
            <div>
              <div class="flex items-center gap-2">
                <span
                  class="text-sm font-semibold text-neutral-900 group-hover:text-saga transition-colors"
                >
                  {item.title}
                </span>
                {#if item.badge}
                  <span
                    class="px-2 py-0.5 text-[10px] font-bold bg-saga/10 text-saga rounded-full"
                  >
                    {item.badge}
                  </span>
                {/if}
              </div>
              <p class="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </a>
        {/each}
      </div>

      <!-- Highlight / Promo Column -->
      <div
        class="md:col-span-5 bg-ink text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group"
      >
        <div
          class="absolute -right-10 -bottom-10 w-48 h-48 bg-saga/20 rounded-full blur-3xl pointer-events-none group-hover:bg-saga/30 transition-all duration-500"
        ></div>

        <div>
          <div
            class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-[11px] font-semibold mb-4 border border-white/10"
          >
            <span class="w-2 h-2 rounded-full bg-saga animate-pulse"></span>
            Saga Express Onboarding
          </div>

          <h4 class="text-xl font-bold tracking-tight mb-2 leading-snug">
            Need video editors or developers
            <span class="font-serif-italic text-saga">within 48 hours?</span>
          </h4>

          <p class="text-xs text-neutral-400 leading-relaxed mb-6">
            We maintain a bench of pre-vetted creators & developers ready to scale your agency or
            brand instantly.
          </p>
        </div>

        <div class="space-y-3">
          <button
            onclick={() => {
              onClose();
              ui.openBooking();
            }}
            class="w-full bg-saga hover:bg-saga-dark text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-saga/20 cursor-pointer"
          >
            Book A Free 15-Min Strategy Call <ArrowUpRight class="w-4 h-4" />
          </button>

          <div class="flex items-center justify-between text-[11px] text-neutral-400 px-1 pt-1">
            <span>⚡ No credit card required</span>
            <span>⭐ 4.9/5 Client Rating</span>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
