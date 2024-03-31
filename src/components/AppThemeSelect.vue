<template>
  <button icon-button @click="themeHelper.toggleSiteTheme()" aria-label="Open site theme selector">
    <fa-icon :icon="['far', getThemeIcon()]" size="2x" />
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { ThemeHelper } from '@/utils/theme.helper'

const themeHelper: ThemeHelper = inject('ThemeHelper') as ThemeHelper

function getThemeIcon() {
  switch (themeHelper.themeRef.value) {
    case 'light': return 'sun'
    case 'dark': return 'moon'
    default: return 'hourglass-half'
  }
}

</script>