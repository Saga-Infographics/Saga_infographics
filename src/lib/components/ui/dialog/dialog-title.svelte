<script lang="ts">
  import { Dialog as DialogPrimitive, type WithoutChild } from 'bits-ui';
  import { cn } from '$lib/utils';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChild<DialogPrimitive.TitleProps> = $props();
</script>

<DialogPrimitive.Title bind:ref data-slot="dialog-title" class={cn(className)} {...restProps} />
