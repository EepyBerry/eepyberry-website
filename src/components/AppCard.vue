<template>
  <div class="eepy-card">
    <div class="eepy-card-header">
      <slot name="title"></slot>
    </div>
    <div class="eepy-card-links">
      <slot name="links"></slot>
    </div>
    <div class="eepy-card-content">
      <slot>
        <IconEepyBerry class="placeholder-icon" />
      </slot>
    </div>
    <div class="eepy-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import IconEepyBerry from '@/components/svg/icons/IconEepyBerry.vue'
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.eepy-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--eepy-theme-card);
  border: 1px solid var(--eepy-theme-accent-half);
  border-radius: 6px;
  overflow: hidden;

  &-links {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
  }
  &-header {
    position: absolute;
    inset: 0 0 auto;

    width: 100%;
    min-height: 2rem;
    padding: 0.75rem 0.75rem 0;

    font-family: Dosis;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    filter: drop-shadow(0 0 4px #0008);
  }
  &-content {
    flex: 1;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &-footer {
    position: absolute;
    inset: auto 0 0;
    z-index: 1;

    width: 100%;
    min-height: 2rem;
    padding: 0 0.75rem 0.5rem;
  }
}
.eepy-card.center {
  text-align: center;
  .eepy-card-header {
    justify-content: center;
  }
}
.eepy-card.placeholder {
  align-items: center;
  justify-content: center;
  background-color: var(--eepy-theme-background);
  border: 2px dashed var(--eepy-theme-accent);
  color: var(--eepy-theme-accent);
  opacity: 0.5;

  .eepy-card-header {
    display: none;
  }
  .eepy-card-footer {
    display: none;
  }
  .eepy-card-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

:deep(.placeholder-icon) {
  height: 3.5rem;
}
</style>
