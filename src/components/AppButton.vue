<template>
  <button class="eepy-button">
    <span v-if="rainbow" class="rainbow-background"></span>
    <span v-if="rainbow" class="rainbow-overlay"></span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{ rainbow: boolean }>()
</script>

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
  clip-path: inset(-3px round .9rem);

  font-size: 1.1rem;
  font-weight: 550;
  
  .material-symbols-rounded {
    transform: rotate(7.5deg);
  }

  .rainbow-overlay {
    position: absolute;
    background-color: var(--eepy-color-secondary);
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
      hsl(266, 100%, 50%),
      hsl(226, 100%, 52%),
      hsl(221, 100%, 50%),
      hsl(192, 100%, 44%),
      hsl(170, 100%, 50%),
      hsl(147, 100%, 50%),
      hsl(113, 100%, 50%),
      hsl(81, 100%, 50%),
      hsl(60, 100%, 50%),
      hsl(39, 100%, 50%),
      hsl(24, 100%, 50%),
      hsl(0, 100%, 50%),
      hsl(335, 100%, 50%),
      hsl(275, 100%, 50%),
    );
    z-index: -1;
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