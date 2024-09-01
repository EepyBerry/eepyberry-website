<template>
  <div class="tooltip" role="tooltip">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.tooltip {
  visibility: hidden;
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2px 8px;
  border-radius: 6px;
  background: var(--eepy-theme-item);
  color: var(--eepy-color-white);
  font-family: Dosis;
  font-weight: 500;

  .tooltip-arrow {
    z-index: -1;
    position: absolute;
    background: var(--eepy-theme-item);
    width: 16px;
    height: 16px;
    transform: rotate(45deg);
  }
}
</style>
