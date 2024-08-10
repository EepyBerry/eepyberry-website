<script setup lang="ts">
import AppThemeSelect from './AppThemeSelect.vue';
</script>

<template>
  <header>
    <AppThemeSelect />
  </header>
</template>


<style lang="scss">
header {
  position: fixed;
  right: var(--app-padding-border);
  top: var(--app-padding-border);
  padding: 0.25rem;
  text-align: end;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 767px) {
  header {
    position: absolute;
  }
}
</style>