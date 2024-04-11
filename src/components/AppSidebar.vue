
<template>
  <AppHomeButton />
  <nav class="mt">
    <EepyTooltipWrapper id="about-tooltip" reference="">
      <template v-slot:reference>
        <router-link class="nav-link button-link" to="about" aria-describedby="about-tooltip">
          <EepyIcon size="xl">sentiment_excited</EepyIcon>
        </router-link>
      </template>
      <template v-slot:tooltip>About me :3</template>
    </EepyTooltipWrapper>
    <router-link class="nav-link button-link" to="experiments">
      <EepyIcon size="xl">science</EepyIcon>
    </router-link>
    <router-link class="nav-link button-link" to="contact">
      <EepyIcon size="xl">mail</EepyIcon>
    </router-link>
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
    transition: transform 100ms ease;
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