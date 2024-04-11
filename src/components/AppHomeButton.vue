<template>
  <EepyPanelWrapper id="about-tooltip" placement="right">
    <template v-slot:reference>
      <RouterLink class="home-link button-link" to="/"
        aria-label="Back to landing page"
        @mousedown="active = true"
        @mouseup="active = false"
        @mouseleave="active = false"
      >
        <img :src="`eepyberry_small_${active ? 'boop_' : ''}${$theme}.svg`" aria-label="Home link">
      </RouterLink>
    </template>
    <template v-slot:panel>Home!</template>
  </EepyPanelWrapper>
  
</template>

<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';

const $theme: string = inject("$theme") as string;
const active: Ref<boolean> = ref(false)
</script>

<style scoped lang=scss>
.home-link {
  transition: transform 200ms ease;
  img {
    width: 3.5rem; user-select: none; -webkit-user-drag: none;
    transform: scale(105%);
  }
}
.home-link:hover, .home-link:focus-visible {
  transform: scale(110%);
}
.home-link:active {
  transform: scale(97.5%);
}
</style>