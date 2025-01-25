<template>
  <AppScatter v-if="route.meta.attached" :visible="true" :size="5" :density="8" />
  <AppNavigation v-if="route.meta.attached" />
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition :name="route.meta.attached ? 'fade' : ''" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>
  <AppFooter v-if="route.meta.attached" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, Transition } from 'vue';
import AppNavigation from '@/components/main/AppNavigation.vue';
import AppFooter from './components/main/AppFooter.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const AppScatter = defineAsyncComponent(() => import('./components/AppScatter.vue'));
</script>

<style lang="scss">
main {
  flex: 1;
  align-self: stretch;
  min-width: 0;
  min-height: 0;
  width: 100%;
  margin-top: 80px;

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
    //justify-content: center;
    gap: 4rem;
    position: relative;
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
