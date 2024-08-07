<template>
  <div ref="starContainer" class="star-container" :style="{ visibility: visible ? 'visible' : 'hidden' }" aria-hidden="true">
    <span v-for="_ of (16 * density)"
      :class="`dot delay-${random(5)}`"
      :style="{
        top: `${random(100)}vmax`,
        left: `${random(100)}vmax`,
        width: `${random(size)}px`
      }"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { random } from '@/utils/functions'
import { onMounted, ref, type Ref } from 'vue';

defineProps<{ size: number, density: number, visible: boolean }>()

const vmax = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight
const starContainer: Ref<HTMLElement | null> = ref(null)
const stars: { el$: HTMLElement, left: number, top: number }[] = []

onMounted(() => init())

async function init(): Promise<void> {
  stars.splice(0)
  for (let i = 0; i < starContainer.value!.children!.length; i++) {
    const child: HTMLElement = starContainer.value!.children.item(i) as HTMLElement
    const top = (Number(child.style.top.replace('vmax', '')) / 100) * vmax
    const left = (Number(child.style.left.replace('vmax', '')) / 100) * vmax
    stars.push({ el$: child, left: left, top: top })
  }
}
</script>

<style scoped lang="scss">
.star-container {
  overflow: hidden;
  position: fixed;
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