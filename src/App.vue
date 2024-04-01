<template>
  <header>
    <AppThemeSelect />
  </header>
  <aside>
    <AppMenu />
  </aside>
  <main>
    <RouterView />
  </main>
  <footer role="contentinfo">
    <p>
      made with 🌈 & ❤️<br>powered by
      <a href="https://vuejs.org" target="_blank" rel="external nofollow noopener">VueJS</a>
      &
      <a href="https://vitejs.dev" target="_blank" rel="external nofollow noopener">Vite</a>
    </p>
    <hr width="12">
    <p>© 2024, EepyBerry</p>
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
  position: sticky;
  inset: 0 0 auto;
  padding: 1.25rem;
  text-align: end;
}
main {
  padding: 1.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}
footer {
  padding: 1.25rem;

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
  inset: 0 auto 0 0;
  padding: 1.25rem;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
}

[data-theme='dark'] header {
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))
}
</style>