<template>
  <div id="site-menu">
    <!-- <button icon-button><fa-icon :icon="['fas', 'bars']" size="xl" /></button> -->
    <nav>
      <router-link to="">
        <fa-icon :icon="['far', 'comment-dots']" size="xl" />
      </router-link>
      <router-link to="">
        <fa-icon :icon="['far', 'hard-drive']" size="xl" />
      </router-link>
      <router-link to="">
        <fa-icon :icon="['far', 'envelope-open']" size="xl" />
      </router-link>
    </nav>
  </div>
</template>

<style scoped lang="scss">
#site-menu {
  width: 32px;
  top: -28px;

  nav {
    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding: .75rem 0;
  }
}
</style>