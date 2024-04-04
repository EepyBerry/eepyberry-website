<template>
  <span class="eepy-icon material-symbols-rounded" :class="size">
    <slot></slot>
  </span>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
defineProps({
  size: { type: String, default: 'md' },
})
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
span.material-symbols-rounded {
  &.md { font-size: 1.25rem; }
  &.xl { font-size: 2rem; }
}
</style>