<script lang="ts">
  import Video from '@lucide/svelte/icons/video';
  import Film from '@lucide/svelte/icons/film';
  import Sparkles from '@lucide/svelte/icons/sparkles';
  import Code from '@lucide/svelte/icons/code';
  import Zap from '@lucide/svelte/icons/zap';
  import BrandIcon from './BrandIcon.svelte';

  let { name, class: className = 'w-5 h-5' }: { name: string; class?: string } = $props();
</script>

{#if name === 'Youtube'}
  <BrandIcon name="youtube" class={className} />
{:else if name === 'Instagram'}
  <BrandIcon name="instagram" class={className} />
{:else if name === 'Video'}
  <Video class={className} />
{:else if name === 'Film'}
  <Film class={className} />
{:else if name === 'Sparkles'}
  <Sparkles class={className} />
{:else if name === 'Code'}
  <Code class={className} />
{:else}
  <Zap class={className} />
{/if}
