<template>
  <div>
    <p>There's nothing for you here. <span>not yet.</span></p>
    <p>Turn back.</p>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';
useHead({
  title: "...huh? · EepyBerry's Website 🍓",
  meta: [
    { name: 'robots', content: 'noindex,nofollow' },
    { name: 'description', content: 'nothing' },
  ],
});
</script>

<style scoped lang="scss">
div {
  flex: 1;
  z-index: 1000;
  position: absolute;
  inset: 0;

  font-family:
    JetBrains Mono,
    monospace;
  background-color: #000;
  color: #fcfcfc;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
span {
  display: none;
}
</style>
