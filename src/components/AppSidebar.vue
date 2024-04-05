
<template>
  <AppHomeButton />
  <nav class="mt">
    <router-link class="nav-link" to="about">
      <EepyIcon size="xxl">sentiment_excited</EepyIcon>
    </router-link>
    <router-link class="nav-link" to="projects">
      <EepyIcon size="xxl">science</EepyIcon>
    </router-link>
    <router-link class="nav-link" to="contact">
      <EepyIcon size="xxl">mail</EepyIcon>
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
  width: 3rem;
  height: 3rem;
  border-radius: .75rem;
  //background-color: var(--eepy-color-card);
  color: var(--eepy-color-text);
  .eepy-icon {
    transition: transform 100ms ease;
  }
}
.nav-link:hover .eepy-icon, .nav-link:focus-visible .eepy-icon {
  transform: scale(120%) rotateZ(-5deg);
}
.nav-link:active .eepy-icon {
  cursor: pointer;
  transform: scale(97.5%)
}
.nav-link .eepy-icon {
  transform: rotateZ(5deg);
}
</style>