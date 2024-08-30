<template>
  <nav>
    <AppHomeButton />
    <router-link
      class="nav-link button-link"
      to="about"
      aria-label="About page link"
    >
      <iconify-icon mode="svg" icon="mingcute:happy-line" height="2.25rem" />
    </router-link>
    <router-link
      class="nav-link button-link"
      to=""
      aria-label="Contact page link"
      disabled
    >
      <iconify-icon mode="svg" icon="mingcute:mail-line" height="2.25rem" />
    </router-link>
  </nav>
</template>

<script setup lang="ts">
import AppHomeButton from "./AppHomeButton.vue";
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
nav {
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
  transition: transform 100ms ease;

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
</style>
