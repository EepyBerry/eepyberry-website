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
  border-radius: 16px;
  transform: rotateZ(-1.5deg);
  background-image: url('/misc/wooltexture.png');
  background-size: 192px;
}

[data-theme='light'] .eepy-patchcard-wrapper {
  background-blend-mode: multiply;
}

[data-theme='dark'] .eepy-patchcard-wrapper {
  background-blend-mode: overlay;
}

.eepy-patchcard {
  padding: 0.75rem;
  width: 100%;
  height: 100%;

  background-image: url('/svg/patch_dashes.svg');
  filter: drop-shadow(2px 2px 2px var(--eepy-theme-patch-shadow));
  color: var(--eepy-color-white);
  border-radius: 8px;

  font-family: Dosis;
  font-size: 1.75rem;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
}

[data-theme='dark'] .eepy-patchcard {
  background-image: url('/svg/patch_dashes_dark.svg');
}
</style>
