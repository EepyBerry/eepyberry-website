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
  background: var(--eepy-color-secondary);
  color: white;
  padding: .75rem;
  border: none;
  border-radius: .75rem;
  transition: transform 75ms ease;

  font-size: 1.1rem;
  font-weight: 550;
  
  .material-symbols-rounded {
    transform: rotate(7.5deg);
  }
}
.eepy-button:hover, .eepy-button-visible {
  cursor: pointer;
  transform: translateY(-6.25%)
}
.eepy-button:active {
  cursor: pointer;
  transform: scale(97.5%)
}
</style>