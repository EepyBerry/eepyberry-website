<template>
  <div class="eepy-patchcard-wrapper">
    <div class="eepy-patchcard">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.eepy-patchcard-wrapper {
  padding: 1rem;
  background: var(--eepy-theme-patch);
  border-radius: 16px;
  box-shadow: 3px 6px 4px var(--eepy-theme-accent-half);
  transform: rotateZ(-1deg);
  background-image: url('/misc/wooltexture.png');
  background-size: 128px;
}

[data-theme='light'] .eepy-patchcard-wrapper {
  background-blend-mode: multiply;

}

[data-theme='dark'] .eepy-patchcard-wrapper {
  background-blend-mode: overlay;
}

.eepy-patchcard {
  padding: 1rem;
  color: var(--eepy-color-white);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/svg/patch_dashes.svg');
  border-radius: 8px;
}
</style>