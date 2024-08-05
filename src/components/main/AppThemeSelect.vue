<template>
  <div class="theme-select" @click="toggleTheme">
    <button icon-button class="theme-select-button" aria-label="Open site theme selector">
      <span class="cord"></span>
      <iconify-icon mode="style" class="eepy-icon"
        :icon="themeHelper.themeRef.value === 'light' ? 'clarity:lightbulb-solid' : 'clarity:lightbulb-line'"
        height="2.25rem"
        aria-hidden="true"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { ThemeHelper } from '@/utils/theme.helper'

const themeHelper: ThemeHelper = inject('ThemeHelper') as ThemeHelper

function toggleTheme() {
  themeHelper.toggleSiteTheme()
}

</script>

<style scoped lang="scss">
.theme-select {
  position: relative;
  display: flex;
  width: 2.25rem;
  height: 2.25rem;

  .cord {
    position: absolute;
    top: -3.75rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 2px;
    height: 4rem;
    border-left: 2px dotted var(--eepy-color-text);
  }
  .eepy-icon {
    transform: rotateZ(180deg);
    transition: transform 100ms ease;
    user-select: none;
    pointer-events: none;
  }

  &-button {
    width: 100%;
    height: 100%;
    transition: transform 100ms ease;
  }

  button:hover, button:focus-visible {
    transform: translateY(0.125rem);
  }
  button:active {
    cursor: pointer;
    transform: translateY(0.5rem);
  }
}

.theme-panel {
  position: absolute;
  top: 3rem;
  right: 0;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>