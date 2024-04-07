<template>
  <div class="eepy-card">
    <div class="eepy-card-header">
      <slot name="title"><span></span></slot>
      <slot name="links"></slot>
    </div>
    <div class="eepy-card-content">
      <slot></slot>
    </div>
    <div class="eepy-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.eepy-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--eepy-color-card);
  border-radius: .5rem;
  overflow: hidden;

  &-header {
    width: 100%;
    padding: .75rem .75rem 0;
    font-family: Dosis;
    font-size: 1.75rem;
    font-weight: 700;

    display: flex;
    justify-content: space-between;
  }
  &-content {
    flex: 1;
    width: 100%;
    padding: 0 .75rem;
  }
  &-footer {
    width: 100%;
    padding: 0 .75rem .5rem;
  }

  &[placeholder] {
    .eepy-card-header { display: none }
    .eepy-card-footer { display: none }
    .eepy-card-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 2px dashed var(--eepy-color-text);
    color: var(--eepy-color-text);
    opacity: 0.5;
  }
  &[centered] {
    .eepy-card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>