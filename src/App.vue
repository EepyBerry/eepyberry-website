<template>
  <AppScatter :visible="themeHelper.themeRef.value === 'dark'"
            :size="themeHelper.themeRef.value === 'dark' ? 5 : 16"
            :density="themeHelper.themeRef.value === 'dark' ? 8 : 6"
  />
  <AppHeader />
  <aside>
    <AppNavigation />
  </aside>
  <main>
    <TitleSection />
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <component :key="route.path" :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import { defineAsyncComponent, inject, onMounted, onUnmounted, provide, ref, Transition, watch, type Ref } from 'vue';
import type { ThemeHelper } from '@/utils/theme.helper';
import AppNavigation from "@/components/main/AppNavigation.vue"
import AppFooter from './components/main/AppFooter.vue';
import TitleSection from '@/components/sections/TitleSection.vue';
import AppHeader from './components/main/AppHeader.vue';

const AppScatter = defineAsyncComponent(() => import('./components/AppScatter.vue'))
const themeHelper: ThemeHelper = inject("ThemeHelper") as ThemeHelper;

const displayMenuButton: Ref<boolean> = ref(false)
const menuOpen: Ref<boolean> = ref(false)
const showRightBlob: Ref<boolean> = ref(false)

onMounted(() => {
  themeHelper.loadCurrentTheme()
  window.addEventListener('resize', handleResize)
  handleResize()
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

function handleResize() {
  menuOpen.value = window.innerWidth >= 1024
  displayMenuButton.value = window.innerWidth < 1024
  showRightBlob.value = window.innerWidth < 768
}

provide('$theme', themeHelper.themeRef)
</script>

<style lang="scss">
main {
  flex-grow: 1;
  max-width: 1600px;
  width: 100%;
  padding: 0 var(--app-padding-main);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 4rem;
}
aside {
  position: fixed;
  top: var(--app-padding-border);
  padding: 0.25rem;
  left: var(--app-padding-border);
  border-radius: 0 1rem 1rem 0;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;

  &.expanded { transform: translateX(0); }
  &.collapsed { transform: translateX(-8rem); }
}

.blob {
  will-change: width height;
  position: absolute;
  width: clamp(100px, 4rem + 7.5vw, 180px);
  z-index: -1;

  &.bottom {
    left: 0;
    bottom: 0;
  }
  &.bottom.right {
    left: auto;
    right: 0;
    transform: rotateY(180deg)
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 767px) {
  aside {
    position: absolute;
  }
  main {
    gap: 2rem;
  }
}
</style>