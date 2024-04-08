<template>
  <header>
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
  padding: 1.25rem;
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
  padding: 1.25rem;
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
  //border: 3px solid var(--eepy-color-text);
  //border-left: none;
}
</style>