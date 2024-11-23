<template>
  <aside>
    <AppThemeSelect />
  </aside>
</template>

<script setup lang="ts">
import AppThemeSelect from './AppThemeSelect.vue';
</script>

<style lang="scss">
aside {
  grid-column: 3;
  position: sticky;
  top: 0;
  right: 0;
  padding: 0.75rem;
  text-align: end;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 1023px) {
  aside {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
