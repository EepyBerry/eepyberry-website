<template>
  <button icon-button @click="themeHelper.toggleSiteTheme()" aria-label="Open site theme selector">
    <EepyIcon size="xl">{{ getThemeIcon() }}</EepyIcon>
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { ThemeHelper } from '@/utils/theme.helper'

const themeHelper: ThemeHelper = inject('ThemeHelper') as ThemeHelper

function getThemeIcon() {
  switch (themeHelper.themeRef.value) {
    case 'light': return 'wb_sunny'
    case 'dark': return 'dark_mode'
    default: return 'hourglass-half'
  }
}
</script>

<style scoped lang="scss">
.eepy-icon {
  transform: rotateZ(5deg);
  transition: transform 100ms ease;
}
.eepy-icon:hover, .eepy-icon:focus-visible {
  transform: scale(110%) rotateZ(-5deg);
}
.eepy-icon:active {
  cursor: pointer;
  transform: scale(97.5%)
}
</style>