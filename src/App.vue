<template>
  <header>
    <AppMenu></AppMenu>
    <AppThemeSelect />
  </header>
  <main>
    <RouterView />
  </main>
  <footer role="contentinfo">
    <p>© 2024, EepyBerry</p>
    <hr width="24">
    <p>
      made with 🌈 & ❤️<br>powered by
      <a href="https://vuejs.org" target="_blank" rel="external nofollow noopener">VueJS</a>
      &
      <a href="https://vitejs.dev" target="_blank" rel="external nofollow noopener">Vite</a>
    </p>
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { inject, onMounted, provide } from 'vue';
import type { ThemeHelper } from '@/utils/theme.helper';
import AppThemeSelect from "@/components/AppThemeSelect.vue";
import AppMenu from "@/components/AppMenu.vue"

const themeHelper: ThemeHelper = inject("ThemeHelper") as ThemeHelper;
provide('$theme', themeHelper.themeRef)

onMounted(() => themeHelper.getCurrentTheme())

</script>

<style lang="scss">
header {
  padding: 1.25rem 1.25rem 0;
  text-align: end;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
main {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
footer {
  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  text-align: end;
  font-size: 0.875rem;
  font-weight: 500;
  z-index: 1;
}
</style>