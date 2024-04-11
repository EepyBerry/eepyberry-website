<template>
  <img class="blob top" :src="`/blob_${themeHelper.themeRef.value}.svg`" aria-hidden="true">
  <header>
    <!-- <img class="blob header" :src="`/blob_${themeHelper.themeRef.value}.svg`" aria-hidden="true"> -->
    <AppThemeSelect />
  </header>
  <aside>
    <AppSidebar />
  </aside>
  <main>
    <RouterView />
  </main>
  <footer role="contentinfo">
    <AppFooter />
    <img class="blob bottom" :src="`/blob-strawberries_${themeHelper.themeRef.value}.svg`" aria-hidden="true">
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { inject, onMounted, provide } from 'vue';
import type { ThemeHelper } from '@/utils/theme.helper';
import AppThemeSelect from "@/components/AppThemeSelect.vue";
import AppSidebar from "@/components/AppSidebar.vue"
import AppFooter from './components/AppFooter.vue';

const themeHelper: ThemeHelper = inject("ThemeHelper") as ThemeHelper;
provide('$theme', themeHelper.themeRef)

onMounted(() => themeHelper.getCurrentTheme())

</script>

<style lang="scss">
header {
  position: sticky;
  inset: 0 0 auto;
  padding: var(--app-padding-border) var(--app-padding-border) 0;
  text-align: end;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: flex-end;
}
main {
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: 100%;
  padding: 0 var(--app-padding-main);
  margin: 0 auto;
}
footer {
  padding: 0 var(--app-padding-border) var(--app-padding-border);
  font-family: Dosis;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  text-align: end;
  font-weight: 500;
  z-index: 1;
}
aside {
  position: fixed;
  inset: 4rem auto auto 0;
  border-radius: 0 1rem 1rem 0;
  padding: .5rem 0;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
  background-color: var(--eepy-color-secondary);
  
  //box-shadow: inset -2px 0 .75rem var(--eepy-color-accent);
  //border: 3px solid var(--eepy-color-text);
  //border-left: none;
}

.blob {
  position: absolute;
  height: clamp(120px, 4rem + 7.5vw, 180px);

  &.header {
    height: clamp(80px, 4rem + 7.5vw, 120px);
  }
  &.top, &.header {
    transform: rotateZ(180deg);
    top: 0;
    right: 0;
  }
  &.bottom {
    left: 0;
    bottom: 0;
  }
}
</style>