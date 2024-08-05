
<template>
  <AppHomeButton />
  <nav>
    <EepyPanelWrapper id="about-tooltip" mode="hover" floatingPlacement="right">
      <template v-slot:reference>
        <router-link class="nav-link button-link" to="about" aria-label="About page link">
          <iconify-icon class="icon flip" mode="style" icon="mingcute:happy-line" height="2.25rem" />
        </router-link>
      </template>
      <template v-slot:tooltip>About me!</template>
    </EepyPanelWrapper>
    <EepyPanelWrapper id="about-tooltip" mode="hover" floatingPlacement="right">
      <template v-slot:reference>
        <router-link class="nav-link button-link" to="contact" aria-label="Contact page link">
          <iconify-icon class="icon flip" mode="style" icon="mingcute:mail-line" height="2.25rem" />
        </router-link>
      </template>
      <template v-slot:tooltip>Contact me!</template>
    </EepyPanelWrapper>
  </nav>
</template>

<script setup lang="ts">
import AppHomeButton from './AppHomeButton.vue';
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
nav {
  text-decoration: none;
  backdrop-filter: blur(4px);

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
  gap: 0.5rem;
}
.nav-link {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  .icon {
    transform: rotateZ(5deg);
    transition: transform 100ms ease;
  }
}
.nav-link:hover .icon, .nav-link:focus-visible .icon {
  transform: scale(110%) rotateZ(-5deg);
}
.nav-link:active .icon {
  cursor: pointer;
  transform: scale(97.5%);
}

@media screen and (max-width: 767px) {
  .nav-link {
    color: white;
  }
}

</style>