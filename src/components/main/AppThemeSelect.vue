<template>
  <span class="top-hider"></span>
  <button
    class="theme-select-button"
    aria-label="Open site theme selector"
    @click="toggleTheme"
  >
    <div class="lightbulb">
      <span class="cord"></span>
      <iconify-icon
        mode="svg"
        class="eepy-icon"
        :icon="
          themeHelper.themeRef.value === 'light'
            ? 'clarity:lightbulb-solid'
            : 'clarity:lightbulb-line'
        "
        height="2.25rem"
        aria-hidden="true"
      />
    </div>
  </button>
</template>

<script setup lang="ts">
import { inject } from "vue";
import type { ThemeHelper } from "@/utils/theme.helper";

const themeHelper: ThemeHelper = inject("ThemeHelper") as ThemeHelper;

function toggleTheme() {
  themeHelper.toggleSiteTheme();
}
</script>

<style scoped lang="scss">
button.theme-select-button {
  width: 3.5rem;
  height: 3.5rem;
  padding: 0;
  padding-top: 1rem;
  margin-top: 0.5rem;
  background: none;
  border: none;
  box-shadow: none;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .lightbulb {
    transition: transform 100ms ease;
    position: relative;

    .cord {
      position: absolute;
      inset: auto 0;
      top: -4rem;
      margin: 0 auto;
      width: 2px;
      height: 4rem;
      border-left: 2px dotted var(--eepy-theme-text);
    }
    .eepy-icon {
      transform: rotateZ(180deg);
      transition: transform 100ms ease;
      user-select: none;
      pointer-events: none;
    }
  }
}
button:hover,
button:focus-visible {
  background: none;
  border: none;
  box-shadow: none;
  .lightbulb {
    transform: translateY(0.125rem);
  }
}
button:active {
  background: none;
  border: none;
  box-shadow: none;
  .lightbulb {
    transform: translateY(0.5rem);
  }
}
</style>
