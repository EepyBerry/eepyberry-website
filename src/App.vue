<template>
  <AppScatter :visible="themeHelper.themeRef.value === 'dark'"
            :size="themeHelper.themeRef.value === 'dark' ? 5 : 16"
            :density="themeHelper.themeRef.value === 'dark' ? 8 : 6"
  />
  <header>
    <button :style="{ visibility: displayMenuButton ? 'visible' : 'hidden' }" icon-button @click="toggleMenu(!menuOpen)">
      <iconify-icon mode="style" class="eepy-icon" :icon="`material-symbols:menu-${menuOpen ? 'open-' : null}rounded`" height="3rem" />
    </button>
    <AppThemeSelect />
  </header>
  <aside :class="menuOpen ? 'expanded' : 'collapsed'" @focusout="$event.relatedTarget ? undefined : toggleMenu(false)">
    <AppSidebar />
  </aside>
  <main>
    <TitleSection />
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <component :key="route.path" :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <footer role="contentinfo">
    <AppFooter />
  </footer>
</template>

<script setup lang="ts">
import { defineAsyncComponent, inject, onMounted, onUnmounted, provide, ref, Transition, watch, type Ref } from 'vue';
import type { ThemeHelper } from '@/utils/theme.helper';
import AppThemeSelect from "@/components/main/AppThemeSelect.vue";
import AppSidebar from "@/components/main/AppSidebar.vue"
import AppFooter from './components/main/AppFooter.vue';
import TitleSection from '@/components/sections/TitleSection.vue';

const AppScatter = defineAsyncComponent(() => import('./components/AppScatter.vue'))
const themeHelper: ThemeHelper = inject("ThemeHelper") as ThemeHelper;

const displayMenuButton: Ref<boolean> = ref(false)
const menuOpen: Ref<boolean> = ref(false)
const showRightBlob: Ref<boolean> = ref(false)

const handleResize = () => {
    menuOpen.value = window.innerWidth >= 1024
    displayMenuButton.value = window.innerWidth < 1024
    showRightBlob.value = window.innerWidth < 768
}

onMounted(() => {
  themeHelper.loadCurrentTheme()
  window.addEventListener('resize', handleResize)
  handleResize()
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

function toggleMenu(open: boolean) {
  if (!open && window.innerWidth >= 768) return
  menuOpen.value = open
}

provide('$theme', themeHelper.themeRef)
</script>

<style lang="scss">
header {
  position: fixed;
  inset: 0 0 auto;
  padding: var(--app-padding-border) var(--app-padding-border) 0;
  text-align: end;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
  //background-image: url('/ground.svg');
  background-position: 50% 0;
  background-size: cover;
  padding: var(--app-padding-border);
  font-family: Dosis;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;
  text-align: end;
  font-weight: 500;
}
aside {
  position: fixed;
  inset: auto 0;
  border-radius: 0 1rem 1rem 0;
  padding: var(--app-padding-border) calc(var(--app-padding-border) / 2);
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

@media screen and (max-width: 1023px) {
  aside {
    top: 4rem;
    padding: calc(var(--app-padding-border) / 2);
    padding-right: .25rem;
    background-color: var(--eepy-color-secondary);
    transition: transform 250ms ease;
  }
}

@media screen and (max-width: 767px) {
  footer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media(prefers-reduced-motion) {
  aside { transition: none; }
}
</style>