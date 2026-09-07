<script lang="ts">
  import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';
  import { cn } from '$lib/utils';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChild<AccordionPrimitive.ItemProps> = $props();
</script>

<AccordionPrimitive.Item bind:ref data-slot="accordion-item" class={cn(className)} {...restProps} />
