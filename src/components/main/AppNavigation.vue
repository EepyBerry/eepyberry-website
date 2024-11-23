<template>
  <nav>
    <AppHomeButton @click.native="handleNativeClick" />
    <RouterLink
      class="nav-link button-link about-link"
      to="/about"
      title="About me"
      aria-label="About page link"
      @click.native="handleNativeClick"
    >
      <iconify-icon mode="svg" icon="mingcute:happy-line" height="2.25rem" aria-hidden="true" />
    </RouterLink>
    <RouterLink
      class="nav-link button-link misc-link"
      to="/miscellaneous"
      title="Miscellaneous"
      aria-label="Miscellaneous page link"
      @click.native="handleNativeClick"
    >
      <iconify-icon mode="svg" icon="mingcute:star-line" height="2.25rem" aria-hidden="true" />
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import AppHomeButton from './AppHomeButton.vue';

function handleNativeClick(evt: Event) {
  evt.preventDefault();
}
</script>

<!------------------------------------------------------------>
<style lang="scss">
nav {
  grid-column: 1;
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
