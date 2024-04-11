<template>
  <div class="eepy-tooltip-wrapper">
    <div ref="reference" class="eepy-tooltip-ref"
      @mouseenter="displayTooltip(true)" @mouseleave="displayTooltip(false)"
      @focus="displayTooltip(true)" @blur="displayTooltip(false)"
    >
      <slot name="reference"></slot>
    </div>
    <div ref="floating" class="eepy-tooltip-inner" :style="floatingStyles">
      <slot name="panel"></slot>
      <div ref="floatingArrow" class="eepy-tooltip-inner-arrow"
      :style="{
        position: 'absolute',
        left: middlewareData.arrow?.x != null
          ? `${middlewareData.arrow.x}px`
          : `${-floatingArrow?.offsetWidth / 2}px`,
        top: middlewareData.arrow?.y != null
          ? `${middlewareData.arrow.y}px`
          : `${-floatingArrow?.offsetHeight / 2}px`,
      }"
      ></div>
    </div>
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useFloating, autoUpdate, offset, arrow, type Placement } from '@floating-ui/vue';

const $props = defineProps<{ placement: Placement }>()

const reference: Ref<any | null> = ref(null)
const floating: Ref<any | null> = ref(null)
const floatingArrow: Ref<any | null> = ref(null)
  
const { floatingStyles, middlewareData } = useFloating(reference, floating, {
  placement: $props.placement ?? 'bottom',
  middleware: [
    offset(4),
    arrow({ element: floatingArrow, padding: 8 })
  ],
  whileElementsMounted: autoUpdate,
});

function displayTooltip(value: boolean) {
  floating.value.style.display = value ? 'block' : '';
}

</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.eepy-tooltip-inner {
  display: none;
  position: absolute;
  width: max-content;

  padding: 2px 8px;
  border-radius: 8px;

  background-color: var(--eepy-color-tooltip);
  font-family: Dosis;
  font-weight: 600;
  color: var(--white);
}
.eepy-tooltip-inner-arrow {
  background: var(--eepy-color-tooltip);
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  pointer-events: none;
}
</style>