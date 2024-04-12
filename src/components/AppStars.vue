<template>
  <div class="stars" :style="{ visibility: visible ? 'visible' : 'hidden' }" aria-hidden="true">
    <div v-once v-for="_ of (16 * density)" :class="`star delay-${random(3)}`" :style="{
      top: `${random(100)}vmax`,
      left: `${random(100)}vmax`,
      width: `${random(size)}px`}"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ size: number, density: number, visible: boolean }>()

function random(range: number) {
  return Math.floor(Math.random() * range) + 1;
}
</script>

<style scoped lang="scss">
.stars {
  overflow: hidden;
  position: absolute;
  inset: 0;
  z-index: -5;
  opacity: .5;
}
.star {
  position: absolute;
  width: 4px;
  aspect-ratio: 1/1;
  border-radius: 4px;
  background-color: var(--white);

  animation: star-blink 5s infinite both ease;
  &.delay-1 { animation-delay: 1s; }
  &.delay-2 { animation-delay: 2s; }
  &.delay-3 { animation-delay: 3s; }
}

@media(prefers-reduced-motion) {
  .star {
    animation: none;
    &.delay-1 { opacity: 0.33; }
    &.delay-2 { opacity: 0.67; }
    &.delay-3 { opacity: 1; }
  }
}

@keyframes star-blink {
  0%, 100% { opacity: 0 }
  33%, 67% { opacity: 1 }
}
</style>