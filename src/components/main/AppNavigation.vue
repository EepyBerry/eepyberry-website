<template>
  <nav>
    <AppHomeButton @click.native="handleNativeClick" />
    <div class="links">
      <RouterLink
        class="nav-link button-link about-link"
        :to="{ name: 'Home' }"
        aria-label="Home page link"
        @click.native="handleNativeClick"
      >
        home
      </RouterLink>
      <RouterLink
        class="nav-link button-link about-link"
        :to="{ name: 'About' }"
        aria-label="About page link"
        @click.native="handleNativeClick"
      >
        about
      </RouterLink>
      <RouterLink
        class="nav-link button-link misc-link"
        :to="{ name: 'Miscellaneous' }"
        aria-label="Miscellaneous page link"
        @click.native="handleNativeClick"
      >
        miscellaneous
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import AppHomeButton from './AppHomeButton.vue';

function handleNativeClick(evt: Event) {
  evt.stopPropagation();
  evt.stopImmediatePropagation();
  evt.preventDefault();
}
</script>

<!------------------------------------------------------------>
<style lang="scss">
nav {
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 1rem;
  height: 80px;
  border-radius: 0 1rem 1rem 0;
  text-decoration: none;
  font-family: Poppins;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  .links {
    margin-right: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
}

.nav-link {
  padding: 0 0.5rem;
  height: 2rem;
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
  transform: scale(105%);
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
