<template>
  <nav>
    <AppHomeButton ref="homeLink" />
    <RouterLink
      ref="aboutLink"
      class="nav-link button-link about-link"
      to="/about"
      title="About me"
      aria-label="About page link"
    >
      <iconify-icon mode="svg" icon="mingcute:happy-line" height="2.25rem" aria-hidden="true" />
    </RouterLink>
    <RouterLink
      ref="miscLink"
      class="nav-link button-link misc-link"
      to="/miscellaneous"
      title="Miscellaneous"
      aria-label="Miscellaneous page link"
    >
      <iconify-icon mode="svg" icon="mingcute:star-line" height="2.25rem" aria-hidden="true" />
    </RouterLink>

    <!-- floating elements -->
    <!-- <EepyTooltip ref="homeFloating" class="tooltip-home" :style="styles.home.floatingStyles.value">
      <span>Home</span>
      <div
        ref="homeArrow"
        class="tooltip-arrow"
        :style="{
          top: (styles.home.middlewareData.value.arrow?.y ?? 0) + 'px',
          left: (styles.home.middlewareData.value.arrow?.x ?? 0) + 'px',
        }"
      ></div>
    </EepyTooltip>
    <EepyTooltip ref="aboutFloating" class="tooltip-about" :style="styles.about.floatingStyles.value">
      <span>About me</span>
      <div
        ref="aboutArrow"
        class="tooltip-arrow"
        :style="{
          top: (styles.about.middlewareData.value.arrow?.y ?? 0) + 'px',
          left: (styles.about.middlewareData.value.arrow?.x ?? 0) + 'px',
        }"
      ></div>
    </EepyTooltip>
    <EepyTooltip ref="miscFloating" class="tooltip-misc" :style="styles.misc.floatingStyles.value">
      <span>Miscellaneous</span>
      <div
        ref="miscArrow"
        class="tooltip-arrow"
        :style="{
          top: (styles.misc.middlewareData.value.arrow?.y ?? 0) + 'px',
          left: (styles.misc.middlewareData.value.arrow?.x ?? 0) + 'px',
        }"
      ></div>
    </EepyTooltip> -->
  </nav>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
import AppHomeButton from './AppHomeButton.vue'
import { arrow, autoUpdate, offset, shift, useFloating } from '@floating-ui/vue'

const homeLink: Ref<HTMLElement | null> = ref(null)
const aboutLink: Ref<HTMLElement | null> = ref(null)
const miscLink: Ref<HTMLElement | null> = ref(null)

const homeArrow: Ref<HTMLElement | null> = ref(null)
const homeFloating: Ref<HTMLElement | null> = ref(null)
const aboutArrow: Ref<HTMLElement | null> = ref(null)
const aboutFloating: Ref<HTMLElement | null> = ref(null)
const miscArrow: Ref<HTMLElement | null> = ref(null)
const miscFloating: Ref<HTMLElement | null> = ref(null)

const styles = {
  home: useFloating(homeLink, homeFloating, {
    placement: 'right',
    middleware: [offset(5), shift(), arrow({ element: homeArrow })],
    whileElementsMounted: autoUpdate,
  }),
  about: useFloating(aboutLink, aboutFloating, {
    placement: 'right',
    middleware: [offset(5), shift(), arrow({ element: aboutArrow })],
    whileElementsMounted: autoUpdate,
  }),
  misc: useFloating(miscLink, miscFloating, {
    placement: 'right',
    middleware: [offset(5), shift(), arrow({ element: miscArrow })],
    whileElementsMounted: autoUpdate,
  }),
}
</script>

<!------------------------------------------------------------>
<style lang="scss">
nav {
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  padding: 0.75rem;
  border-radius: 0 1rem 1rem 0;
  text-decoration: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.nav-link {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 125ms ease;

  & > iconify-icon {
    transform: rotateZ(5deg);
    user-select: none;
    pointer-events: none;
  }
}

.nav-link:not([disabled]):hover,
.nav-link:not([disabled]):focus-visible {
  transform: scale(110%) rotateZ(-10deg);
}

.nav-link:not([disabled]):active {
  cursor: pointer;
  transform: scale(97.5%);
}

.nav-link[disabled] {
  cursor: not-allowed;
  color: var(--eepy-theme-disabled);
  transition: none;
}

@media screen and (max-width: 1023px) {
  nav {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
