<template>
  <div ref="starContainer" class="star-container" :style="{ visibility: visible ? 'visible' : 'hidden' }" aria-hidden="true">
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
import { random, randomMinMax, vec_randomUnit } from '@/utils/functions'
import { onMounted, onUnmounted, onUpdated, ref, type Ref } from 'vue';

const $props = defineProps<{ size: number, density: number, visible: boolean, mode: 'svg' | 'dot' }>()

const vmax = window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight
const starContainer: Ref<HTMLElement | null> = ref(null)
const stars: { el$: HTMLElement, left: number, top: number, dirX: number, dirY: number, rot: number }[] = []

const intervalRateMs = 1000 / 60 // <- FPS = 60
let stepMultiplier = $props.mode === 'svg' ? 0.0125 : 0.0025
let startAnimTime = performance.now()
let lastAnimTime: number = startAnimTime
let currentAnimTime: number = 0
let animDeltaTime = 0

onMounted(() => {
  stepMultiplier = $props.mode === 'svg' ? 0.0125 : 0.0025
  init().then(() => window.requestAnimationFrame(animate))
})
onUpdated(() => {
  stepMultiplier = $props.mode === 'svg' ? 0.0125 : 0.0025
  init().then(() => window.requestAnimationFrame(animate))
})
onUnmounted(() => window.cancelAnimationFrame(currentAnimTime))

async function init(): Promise<void> {
  stars.splice(0)
  for (let i = 0; i < starContainer.value!.children!.length; i++) {
    const child: HTMLElement = starContainer.value!.children.item(i) as HTMLElement
    const top = (Number(child.style.top.replace('vmax', '')) / 100) * vmax
    const left = (Number(child.style.left.replace('vmax', '')) / 100) * vmax
    const dirVec = vec_randomUnit()
    stars.push({ el$: child, left: left, top: top, dirX: dirVec[0], dirY: dirVec[1], rot: randomMinMax(0, 45) })
  }
}

function animate(timestamp: number) {
  currentAnimTime = timestamp
  animDeltaTime = currentAnimTime - lastAnimTime

  if (animDeltaTime > intervalRateMs) {
    lastAnimTime = currentAnimTime - (animDeltaTime % intervalRateMs)
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i]
      const matrix = new DOMMatrixReadOnly(window.getComputedStyle(star.el$).getPropertyValue('transform'))

      const coords = { x: matrix.m41, y: matrix.m42 }
      if (coords.x > (vmax - star.left)) {
        coords.x = -star.left
      }
      if (coords.x < (-star.left)) {
        coords.x = vmax - star.left
      }
      if (coords.y > (vmax - star.top)) {
        coords.y = -star.top
      }
      if (coords.y < (-star.top)) {
        coords.y = vmax - star.top
      }
      star.el$.style.transform = `translateX(${coords.x}px) translateY(${coords.y}px) rotateZ(${star.rot}deg)`

      const x = coords.x + (stepMultiplier * animDeltaTime * star.dirX)
      const y = coords.y + (stepMultiplier * animDeltaTime * star.dirY)
      star.el$.style.transform = `translateX(${x}px) translateY(${y}px) rotateZ(${star.rot}deg)`
    }
  }
  window.requestAnimationFrame(animate)
}
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