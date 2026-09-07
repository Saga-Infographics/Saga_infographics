<script lang="ts">
  import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';
  import { cn } from '$lib/utils';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithoutChild<AccordionPrimitive.ContentProps> = $props();
</script>

<AccordionPrimitive.Content
  bind:ref
  data-slot="accordion-content"
  class={cn('overflow-hidden accordion-content', className)}
  {...restProps}
>
  {@render children?.()}
</AccordionPrimitive.Content>
