<template>
  <span class="eepy-chip">
    <slot></slot>
  </span>
</template>

<style scoped lang="scss">
.eepy-chip {
  padding: 0.25rem 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 4px;

  border: 1px solid var(--eepy-theme-accent);
  border-radius: 6px;
  align-self: flex-start;
}
</style>
