<template>
  <div class="theme-select">
    <button icon-button ref="buttonOpen" aria-label="Open site theme selector">
      <iconify-icon mode="style" class="eepy-icon" icon="fluent:dark-theme-20-filled" height="2rem" aria-hidden="true" />
    </button>
    <div class="theme-panel" ref="panel" v-if="isOpen">
      <button icon-button @click="setTheme('light')" aria-label="Open site theme selector">
        <iconify-icon mode="style" class="eepy-icon" icon="material-symbols:wb-sunny-outline-rounded" height="1.75rem" />
      </button>
      <button icon-button @click="setTheme('dark')" aria-label="Open site theme selector">
        <iconify-icon mode="style" class="eepy-icon" icon="material-symbols:mode-night-outline-rounded" height="1.75rem" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, onMounted, onUnmounted, ref, type Ref } from 'vue'
import type { ThemeHelper } from '@/utils/theme.helper'

const themeHelper: ThemeHelper = inject('ThemeHelper') as ThemeHelper
const buttonOpen: Ref<HTMLElement|null> = ref(null)
const panel: Ref<HTMLElement|null> = ref(null)
const isOpen: Ref<boolean> = ref(false)

onMounted(() => window.addEventListener('click', handleClick))
onUnmounted(() => window.removeEventListener('click', handleClick))

function handleClick(evt: MouseEvent) {
  if (evt.target === buttonOpen.value) {
    isOpen.value = !isOpen.value
  } else if (evt.target !== panel.value && isOpen.value) {
    isOpen.value = false
  }
}

function setTheme(theme: string) {
  themeHelper.setSiteTheme(theme)
}

</script>

<style scoped lang="scss">
.eepy-icon {
  transform: rotateZ(5deg);
  transition: transform 100ms ease;
  user-select: none;
  pointer-events: none;
}
.theme-select > button:hover, .theme-select > button:focus-visible {
  transform: scale(110%) rotateZ(-5deg);
}
.theme-select > button:active {
  cursor: pointer;
  transform: scale(97.5%)
}

.theme-panel {
  position: absolute;
  top: 0;
  right: 3rem;
  
  display: flex;
  gap: 1rem;
  padding-right: 4px;
}
</style>