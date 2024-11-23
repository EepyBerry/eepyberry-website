<template>
  <AppScatter
    v-if="route.meta.attached"
    :visible="themeHelper.themeRef.value === 'dark'"
    :size="themeHelper.themeRef.value === 'dark' ? 5 : 16"
    :density="themeHelper.themeRef.value === 'dark' ? 8 : 6"
  />
  <AppNavigation v-if="route.meta.attached" />
  <AppAside v-if="route.meta.attached" />
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition :name="route.meta.attached ? 'fade' : ''" mode="out-in">
        <div class="transition-container" :key="route.path">
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </main>
  <AppFooter v-if="route.meta.attached" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, inject, onMounted, onUnmounted, provide, ref, Transition, watch, type Ref } from 'vue';
import type { ThemeHelper } from '@/utils/theme.helper';
import AppNavigation from '@/components/main/AppNavigation.vue';
import AppFooter from './components/main/AppFooter.vue';
import AppAside from './components/main/AppAside.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const AppScatter = defineAsyncComponent(() => import('./components/AppScatter.vue'));
const themeHelper: ThemeHelper = inject('ThemeHelper') as ThemeHelper;

const displayMenuButton: Ref<boolean> = ref(false);
const menuOpen: Ref<boolean> = ref(false);
const showRightBlob: Ref<boolean> = ref(false);

onMounted(() => {
  themeHelper.loadCurrentTheme();
  window.addEventListener('resize', handleResize);
  handleResize();
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  menuOpen.value = window.innerWidth >= 1024;
  displayMenuButton.value = window.innerWidth < 1024;
  showRightBlob.value = window.innerWidth < 768;
}

provide('$theme', themeHelper.themeRef);
</script>

<style lang="scss">
main {
  align-self: stretch;
  min-width: 0;
  min-height: 0;
  grid-column: 2;
  grid-row: 1;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .transition-container {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 1023px) {
  main {
    grid-column: 1;
  }
}

@media screen and (prefers-reduced-motion) {
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
}
</style>
