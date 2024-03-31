<template>
  <main>
    <div class="main-content">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { inject, onMounted } from 'vue';
import type { ThemeHelper } from '@/utils/theme.helper';

const themeHelper: ThemeHelper = inject("ThemeHelper") as ThemeHelper;

onMounted(() => {
  themeHelper.getCurrentTheme()
})

</script>

<style lang="scss">
body {
  max-height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr;
}

</style>