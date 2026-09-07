<script lang="ts">
  import { FAQS } from '$lib/data/content';
  import { Plus, Minus } from '@lucide/svelte';
  import * as Accordion from '$lib/components/ui/accordion';

  let value = $state<string>('f1');
</script>

<section class="py-20 bg-canvas border-t border-neutral-200/60">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <div
        class="inline-block border border-neutral-300 bg-white/80 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-neutral-700 uppercase shadow-2xs mb-4"
      >
        [ FREQUENTLY ASKED QUESTION ]
      </div>

      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
        Everything You
        <span class="font-serif-italic text-saga font-normal">Need to Know</span>
      </h2>
    </div>

    <Accordion.Root type="single" bind:value class="space-y-4">
      {#each FAQS as faq (faq.id)}
        {@const isOpen = value === faq.id}
        <Accordion.Item
          value={faq.id}
          class={`rounded-2xl border transition-all duration-300 ${
            isOpen
              ? 'bg-white border-saga/40 shadow-sm'
              : 'bg-white/80 hover:bg-white border-neutral-200/80'
          }`}
        >
          <Accordion.Trigger class="w-full p-5 sm:p-6 cursor-pointer">
            <span class="text-base sm:text-lg font-bold text-ink leading-snug">
              {faq.question}
            </span>
            <div
              class={`p-1.5 rounded-full transition-colors shrink-0 ${
                isOpen ? 'bg-saga text-white' : 'bg-neutral-100 text-neutral-700'
              }`}
            >
              {#if isOpen}
                <Minus class="w-4 h-4" />
              {:else}
                <Plus class="w-4 h-4" />
              {/if}
            </div>
          </Accordion.Trigger>

          <Accordion.Content>
            <div
              class="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4"
            >
              {faq.answer}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</section>
