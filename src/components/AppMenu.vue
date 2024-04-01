<template>
  <nav>
    <router-link to="about">
        <fa-icon icon="fa-solid fa-house" size="xl" />
      </router-link>
      <router-link to="about">
        <fa-icon icon="fa-regular fa-user" size="xl" />
      </router-link>
      <router-link to="projects">
        <fa-icon icon="fa-regular fa-hard-drive" size="xl" />
      </router-link>
      <router-link to="contact">
        <fa-icon icon="fa-regular fa-envelope-open" size="xl" />
      </router-link>
    </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
</style>