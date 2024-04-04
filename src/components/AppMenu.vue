<template>
  <nav>
    <router-link class="nav-link" to="about">
      <EepyIcon size="xl">sentiment_excited</EepyIcon>
    </router-link>
    <router-link class="nav-link" to="projects">
      <EepyIcon size="xl">data_object</EepyIcon>
    </router-link>
    <router-link class="nav-link" to="contact">
      <EepyIcon size="xl">mail</EepyIcon>
    </router-link>
  </nav>
</template>

<!------------------------------------------------------------>
<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  font-size: 2rem;
  text-decoration: none;
}
.nav-link .eepy-icon {
  transform: rotateZ(5deg);
}
</style>