<template>
  <button class="eepy-button">
    <span v-if="rainbow" class="rainbow-background"></span>
    <span v-if="rainbow" class="rainbow-overlay"></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  rainbow: { type: Boolean, default: false }
})
</script>

<style lang="scss">
.eepy-button {
  padding: .75rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  background: var(--eepy-color-secondary);
  //box-shadow: inset 0 4px .75rem var(--eepy-color-accent);
  color: var(--white);
  border: none;
  border-radius: .75rem;
  clip-path: inset(-3px round .9rem);

  transition: transform 75ms ease;
  font-size: 1.1rem;
  font-weight: 550;
  
  .material-symbols-rounded {
    transform: rotate(7.5deg);
  }

  .rainbow-overlay {
    position: absolute;
    background-color: var(--eepy-color-secondary);
    //box-shadow: inset 0 4px .75rem var(--eepy-color-accent);
    inset: 0;
    border-radius: .75rem;
  }
  .rainbow-background {
    position: absolute;
    width: calc(100% + 8px);
    aspect-ratio: 1/1;
    animation: 2s linear infinite rotate;
    background: conic-gradient(
      from 90deg,
      hsl(275, 100%, 50%),
      hsl(266, 100%, 52%),
      hsl(251, 100%, 53%),
      hsl(234, 100%, 54%),
      hsl(226, 100%, 52%),
      hsl(214, 100%, 50%),
      hsl(192, 100%, 44%),
      hsl(170, 100%, 50%),
      hsl(147, 100%, 50%),
      hsl(113, 100%, 50%),
      hsl(81, 100%, 50%),
      hsl(64, 100%, 50%),
      hsl(51, 100%, 50%),
      hsl(39, 100%, 50%),
      hsl(24, 100%, 50%),
      hsl(0, 100%, 50%),
      hsl(335, 100%, 50%),
      hsl(275, 100%, 50%),
    );
    z-index: -1;
  }
}
.eepy-button:hover, .eepy-button:focus-visible {
  cursor: pointer;
  transform: translateY(-6.25%)
}
.eepy-button:active {
  cursor: pointer;
  transform: scale(97.5%)
}

@media(prefers-reduced-motion) {
  .eepy-button {
    transition: none;
    .rainbow-background {
      animation: none;
    }
  }
  .eepy-button:hover, .eepy-button:focus-visible {
    transform: none;
  }
  .eepy-button:active {
    transform: scale(97.5%);
  }
}
</style>