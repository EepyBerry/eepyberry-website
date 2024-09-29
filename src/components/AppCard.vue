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
  background-color: var(--eepy-theme-card);
  border: 1px solid var(--eepy-theme-accent-half);
  border-radius: 6px;
  overflow: hidden;

  &-header {
    position: relative;
    width: 100%;
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
