<template>
  <div class="eepy-card">
    <div class="eepy-card-header">
      <slot name="title"><span></span></slot>
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
import IconEepyBerry from "@/components/svg/icons/IconEepyBerry.vue";
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.eepy-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--eepy-color-card);
  border: 1px solid var(--eepy-color-accent-half);
  border-radius: 8px;
  overflow: hidden;

  &-header {
    position: relative;
    width: 100%;
    height: 2rem;
    padding: 0.75rem 0.75rem 0;
    font-family: Dosis;
    font-size: 1.75rem;
    font-weight: 700;

    display: flex;
    justify-content: space-between;
  }
  &-content {
    flex: 1;
    width: 100%;
    padding: 0 0.75rem;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &-footer {
    z-index: 1;
    height: 2rem;
    width: 100%;
    padding: 0 0.75rem 0.5rem;
  }
}
.eepy-card.placeholder {
  align-items: center;
  justify-content: center;
  background-color: var(--eepy-color-background);
  border: 2px dashed var(--eepy-color-accent);
  color: var(--eepy-color-accent);
  opacity: 0.5;

  &-header {
    display: none;
  }
  &-footer {
    display: none;
  }
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

:deep(.placeholder-icon) {
  height: 3.5rem;
}
</style>
