<script lang="ts">
  import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';
  import { cn } from '$lib/utils';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithoutChild<AccordionPrimitive.TriggerProps> = $props();
</script>

<AccordionPrimitive.Header class="flex">
  <AccordionPrimitive.Trigger
    bind:ref
    data-slot="accordion-trigger"
    class={cn('flex flex-1 items-center justify-between gap-4 text-left', className)}
    {...restProps}
  >
    {@render children?.()}
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
