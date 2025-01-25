<template>
  <div class="eepy-patchcard-wrapper">
    <div class="eepy-patchcard">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.eepy-patchcard-wrapper {
  padding: 0.75rem;
  background: var(--eepy-theme-patch);
  border: 1px solid var(--eepy-theme-border);
  border-radius: 6px;
  background-image: url('/misc/wooltexture.png');
  background-size: 192px;
}

/* [data-theme='light'] .eepy-patchcard-wrapper {
  background-blend-mode: multiply;
}

[data-theme='dark'] .eepy-patchcard-wrapper {
  background-blend-mode: overlay;
} */

.eepy-patchcard {
  padding: 0.5rem;
  width: 100%;
  height: 100%;

  color: var(--eepy-color-white);
  border-radius: 4px;

  font-family: Dosis;
  font-size: 1.75rem;
  font-weight: 600;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
