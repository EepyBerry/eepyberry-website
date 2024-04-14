<template>
  <EepyPanelWrapper mode="click" floatingPlacement="bottom-end" panelPlacement="left">
    <template v-slot:reference>
      <button icon-button aria-label="Open site theme selector">
        <iconify-icon mode="style" class="eepy-icon" icon="fluent:dark-theme-20-filled" height="2rem" />
      </button>
    </template>
    <template v-slot:panel>
      <div class="theme-panel">
        <button icon-button @click="themeHelper.setSiteTheme('light')" aria-label="Open site theme selector">
          <EepyIcon size="lg">wb_sunny</EepyIcon>
        </button>
        <button icon-button @click="themeHelper.setSiteTheme('dark')" aria-label="Open site theme selector">
          <EepyIcon size="lg">dark_mode</EepyIcon>
        </button>
      </div>
    </template>
  </EepyPanelWrapper>
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

.theme-panel {
  display: flex;
  gap: 4px;
  button {
    color: var(--white);
  }
}
</style>