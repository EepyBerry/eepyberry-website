
<template>
  <AppHomeButton />
  <nav class="mt">
    <EepyPanelWrapper id="about-tooltip" mode="hover" placement="right">
      <template v-slot:reference>
        <router-link class="nav-link button-link" to="about" aria-label="About page link">
          <EepyIcon size="xl">sentiment_excited</EepyIcon>
        </router-link>
      </template>
      <template v-slot:panel>About me :3</template>
    </EepyPanelWrapper>

    <EepyPanelWrapper id="about-tooltip" mode="hover" placement="right">
      <template v-slot:reference>
        <router-link class="nav-link button-link" to="experiments" aria-label="Experiments page link">
          <EepyIcon size="xl">science</EepyIcon>
        </router-link>
      </template>
      <template v-slot:panel>Experiments!</template>
    </EepyPanelWrapper>

    <EepyPanelWrapper id="about-tooltip" mode="hover" placement="right">
      <template v-slot:reference>
        <router-link class="nav-link button-link" to="contact" aria-label="Contact page link">
          <EepyIcon size="xl">mail</EepyIcon>
        </router-link>
      </template>
      <template v-slot:panel>Contact me!</template>
    </EepyPanelWrapper>
    
  </nav>
</template>

<script setup lang="ts">
import AppHomeButton from './AppHomeButton.vue';
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
}
.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 2rem;
  //background-color: var(--eepy-color-text);
  color: var(--white);
  .eepy-icon {
    transform: rotateZ(5deg);
    transition: transform 200ms ease;
  }
}
.nav-link:hover .eepy-icon, .nav-link:focus-visible .eepy-icon {
  transform: scale(110%) rotateZ(-5deg);
}
.nav-link:active .eepy-icon {
  cursor: pointer;
  transform: scale(97.5%)
}
</style>