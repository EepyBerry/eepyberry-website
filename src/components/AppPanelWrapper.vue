<template>
  <div class="eepy-tooltip-wrapper">
    <div ref="reference" class="eepy-panel-ref"
      @mouseenter="hasAnyMode('hover', 'both') ? displayTooltip(true) : undefined"
      @mouseleave="hasAnyMode('hover', 'both') ? displayTooltip(false) : undefined"
      @focus="displayTooltip(true)"
      @blur="displayTooltip(false)"
      @click="hasAnyMode('click', 'both') ? togglePanel() : undefined"
      @focusout="$event.relatedTarget ? undefined : hidePanel()"
    >
      <slot name="reference"></slot>
    </div>
    <div ref="tooltip" class="eepy-tooltip-inner" :style="f_tooltip.floatingStyles.value">
      <slot name="tooltip"></slot>
      <!-- <div ref="tooltipArrow" class="eepy-tooltip-inner-arrow"
      :style="{
        position: 'absolute',
        left: f_tooltip.middlewareData.value.arrow?.x != null
          ? `${f_tooltip.middlewareData.value.arrow.x}px`
          : `${-tooltipArrow?.offsetWidth / 2}px`,
        top: f_tooltip.middlewareData.value.arrow?.y != null
          ? `${f_tooltip.middlewareData.value.arrow.y}px`
          : `${-tooltipArrow?.offsetHeight / 2}px`,
      }"
      ></div> -->
    </div>
    <div ref="panel" class="eepy-panel-inner" :style="f_panel.floatingStyles.value"
         @focusout="$event.relatedTarget ? undefined : hidePanel()"
    >
      <slot name="panel"></slot>
      <!-- <div ref="panelArrow" class="eepy-panel-inner-arrow"
      :style="{
        position: 'absolute',
        right: f_panel.middlewareData.value.arrow?.x != null
          ? `${f_panel.middlewareData.value.arrow.x}px`
          : `${-panelArrow?.offsetWidth / 2}px`,
        top: f_panel.middlewareData.value.arrow?.y != null
          ? `${f_panel.middlewareData.value.arrow.y}px`
          : `${-panelArrow?.offsetHeight / 2}px`,
      }"
      ></div> -->
    </div>
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { useFloating, autoUpdate, offset, arrow, type Placement } from '@floating-ui/vue';

const $props = defineProps<{ mode: 'click' | 'hover' | 'both', floatingPlacement?: Placement, panelPlacement?: Placement }>()

const reference: Ref<any | null> = ref(null)
const tooltip: Ref<any | null> = ref(null)
const tooltipArrow: Ref<any | null> = ref(null)
const panel: Ref<any | null> = ref(null)
const panelArrow: Ref<any | null> = ref(null)

const _panelDisplayed: Ref<boolean> = ref(false)

const f_tooltip = initFloatingElement(tooltip, tooltipArrow, $props.floatingPlacement)
const f_panel = initFloatingElement(panel, panelArrow, $props.panelPlacement)

function initFloatingElement(object: Ref<any | null>, objectArrow: Ref<any | null> | undefined, placement?: Placement) {
  return useFloating(reference, object, {
    placement: placement ?? 'bottom',
    middleware: [arrow({ element: objectArrow, padding: 8 })],
    whileElementsMounted: autoUpdate,
  });
}

function hasAnyMode(...modes: string[]) {
  return modes.includes($props.mode)
}

function displayTooltip(value: boolean) {
  tooltip.value.style.visibility = value ? 'visible' : 'hidden';
  tooltip.value.style.opacity = value ? '1' : '0';
}
function togglePanel() {
  _panelDisplayed.value = !_panelDisplayed.value
  panel.value.style.display = _panelDisplayed.value ? 'block' : '';
  displayTooltip(false)
}
function hidePanel() {
  panel.value.style.display = '';
  _panelDisplayed.value = false
}
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.eepy-tooltip-inner {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  width: max-content;

  padding: 2px 8px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 8px;

  //background-color: var(--eepy-color-panel);
  font-size: 1.125rem;
  font-family: Dosis;
  font-weight: 600;
  //color: var(--white);
  transition: opacity 150ms;

  .eepy-divider { border-color: var(--eepy-color-text); opacity: 0.5; }
}
.eepy-panel-inner {
  display: none;
  position: absolute;

  padding: 4px 6px;
  border-radius: 8px;

  //background-color: var(--eepy-color-secondary);
  font-family: Dosis;
  font-weight: 600;
  //color: var(--white);
}

.eepy-panel-ref {
  display: flex;
}

.eepy-panel-inner-arrow, .eepy-tooltip-inner-arrow {
  width: 6px;
  height: 6px;
  transform: rotate(45deg);
  pointer-events: none;
}
.eepy-tooltip-inner-arrow {
  //background: var(--eepy-color-panel);
  border-left: 3px solid var(--eepy-color-text);
  border-bottom: 3px solid var(--eepy-color-text);
  border-radius: 2px;
}
.eepy-panel-inner-arrow {
  background: var(--eepy-color-secondary);
}
</style>