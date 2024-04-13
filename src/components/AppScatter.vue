<template>
  <div class="star-container" :style="{ visibility: visible ? 'visible' : 'hidden' }" aria-hidden="true">
    <div v-for="_ of (16 * density)"
      :class="`${mode === 'svg' ? `star-${random(2) + 3}` : 'dot'} delay-${random(5)}`"
      :style="{
        top: `${random(100)}vmax`,
        left: `${random(100)}vmax`,
        width: `${mode === 'svg' ? randomMinMax(4, size) : random(size)}px`,
        transform: `rotateZ(${random(180)}deg)`
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { random, randomMinMax } from '@/utils/functions'
defineProps<{ size: number, density: number, visible: boolean, mode: 'svg' | 'dot' }>()
</script>

<style scoped lang="scss">
.star-container {
  overflow: hidden;
  position: absolute;
  inset: 0;
  z-index: -5;
  opacity: .5;
}
.dot {
  position: absolute;
  width: 4px;
  aspect-ratio: 1/1;
  border-radius: 4px;
  background-color: var(--white);

  animation: blink 6s infinite both ease;
  &.delay-1 { animation-delay: -1s; }
  &.delay-2 { animation-delay: -2s; }
  &.delay-3 { animation-delay: -3s; }
  &.delay-4 { animation-delay: -4s; }
  &.delay-5 { animation-delay: -5s; }
}
.star-4 {
  position: absolute;
  content: url('/page_elements/star4.svg');
  width: 4px;
  aspect-ratio: 1/1;
}
.star-5 {
  position: absolute;
  content: url('/page_elements/star5.svg');
  width: 4px;
  aspect-ratio: 1/1;
}

@media(prefers-reduced-motion) {
  .dot {
    animation: none;
    &.delay-1 { opacity: 0.2; }
    &.delay-2 { opacity: 0.4; }
    &.delay-3 { opacity: 0.6; }
    &.delay-4 { opacity: 0.8; }
    &.delay-5 { opacity: 1; }
  }
}
</style>