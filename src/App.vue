<template>
  <AppScatter :mode="themeHelper.themeRef.value === 'dark' ? 'dot' : 'svg'"
            :visible="true"
            :size="themeHelper.themeRef.value === 'dark' ? 5 : 16"
            :density="themeHelper.themeRef.value === 'dark' ? 8 : 6"
  />
  <!-- <img class="blob top" :src="`/page_elements/blob_${themeHelper.themeRef.value}.svg`" aria-hidden="true"> -->
  <header>
    <button :style="{ visibility: displayMenuButton ? 'visible' : 'hidden' }" icon-button @click="toggleMenu(!menuOpen)">
      <EepyIcon size="xl">{{ menuOpen ? 'menu_open' : 'menu' }}</EepyIcon>
    </button>
    <AppThemeSelect />
  </header>
  <aside :class="menuOpen ? 'expanded' : 'collapsed'" @focusout="$event.relatedTarget ? undefined : toggleMenu(false)">
    <AppSidebar />
  </aside>
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <component :key="$route.path" :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <footer role="contentinfo">
    <AppFooter />
    <img class="blob bottom" :src="`/page_elements/blob-strawberries_${themeHelper.themeRef.value}.svg`" aria-hidden="true">
  </footer>
</template>

<script setup lang="ts">
import { defineAsyncComponent, inject, onMounted, onUnmounted, provide, ref, Transition, watch, type Ref } from 'vue';
import type { ThemeHelper } from '@/utils/theme.helper';
import AppThemeSelect from "@/components/main/AppThemeSelect.vue";
import AppSidebar from "@/components/main/AppSidebar.vue"
import AppFooter from './components/main/AppFooter.vue';

const AppScatter = defineAsyncComponent(() => import('./components/AppScatter.vue'))
const themeHelper: ThemeHelper = inject("ThemeHelper") as ThemeHelper;

const displayMenuButton: Ref<boolean> = ref(false)
const menuOpen: Ref<boolean> = ref(false)

const resizeHandler = () => {
    menuOpen.value = window.innerWidth >= 768
    displayMenuButton.value = window.innerWidth < 768
}

onMounted(() => {
  themeHelper.loadCurrentTheme()
  if (window.innerWidth >= 768) menuOpen.value = true
  window.addEventListener('resize', resizeHandler)
})
onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler)
})

function toggleMenu(open: boolean) {
  if (!open && window.innerWidth >= 768) return
  menuOpen.value = open
}

provide('$theme', themeHelper.themeRef)
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
  transition: transform 250ms ease;
  //box-shadow: inset -2px 0 .75rem var(--eepy-color-accent);
  //border: 3px solid var(--eepy-color-text);
  //border-left: none;

  &.expanded { transform: translateX(0); }
  &.collapsed { transform: translateX(-4rem); }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.375s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media(prefers-reduced-motion) {
  aside { transition: none; }
}
</style>