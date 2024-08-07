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
  left: 0;
  right: 0;
  top: 0;
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