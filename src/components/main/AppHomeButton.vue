<template>
  <RouterLink
    class="home-link button-link"
    to="/"
    title="About me"
    aria-label="Back to landing page"
    @mousedown="active = true"
    @mouseup="active = false"
    @mouseleave="active = false"
  >
    <SvgEepyBerrySmall v-show="!active" :dark="$theme === 'dark'" class="home-symbol" />
    <SvgEepyBerrySmallBoop v-show="active" :dark="$theme === 'dark'" class="home-symbol" />
  </RouterLink>
</template>

<script setup lang="ts">
import { inject, ref, type Ref } from 'vue'
import SvgEepyBerrySmall from '../svg/SvgEepyBerrySmall.vue'
import SvgEepyBerrySmallBoop from '../svg/SvgEepyBerrySmallBoop.vue'

const $theme: string = inject('$theme') as string
const active: Ref<boolean> = ref(false)
</script>

<style scoped lang="scss">
.home-link {
  transition: transform 125ms ease;

  .home-symbol {
    width: 3.5rem;
    user-select: none;
    -webkit-user-drag: none;
  }
}

.home-link:hover,
.home-link:focus-visible {
  transform: scale(110%);
}

.home-link:active {
  transform: scale(97.5%);
}
</style>
