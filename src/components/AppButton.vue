<template>
  <button class="eepy-button">
    <slot></slot>
  </button>
</template>
<style lang="scss">
.eepy-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  background: var(--eepy-color-card);
  padding: .75rem;
  border: none;
  border-radius: .75rem;
  box-shadow: .2rem -.2rem 0 var(--eepy-color-card-shadow-light),
              -.2rem .2rem 0 var(--eepy-color-card-shadow);
  transition: transform 75ms ease;
  
  svg {
    transform: rotate(7.5deg);
  }
}
.eepy-button:hover {
  cursor: pointer;
  transform: translateY(-7.5%)
}
.eepy-button:active {
  cursor: pointer;
  transform: scale(97.5%)
}
</style>