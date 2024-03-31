<template>
  <section id="section-home">
    <img id="avatar" :src="`eepyberry_${$theme}.svg`" aria-label="Sleeping strawberry with the text 'eepy berry'">
  </section>
</template>

<script setup lang="ts">
import { inject } from '@vue/runtime-dom';
const $theme = inject('$theme')
</script>

<style scoped lang="scss">
#section-home {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #avatar {
    width: min(80vw, 400px)
  }

}

[data-theme='dark'] #avatar {
  filter: drop-shadow(0 0 2px white)
}
</style>