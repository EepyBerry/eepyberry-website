<template>
  <section id="not-found">
    <SvgNotFound />
    <p>The requested page could not be found :c</p>
  </section>
</template>

<script setup lang="ts">
import SvgNotFound from '@/components/svg/SvgNotFound.vue';
import { useHead } from '@unhead/vue';
useHead({ meta: [
  { name: 'robots', content: 'noindex' },
  { name: 'description', content: 'Page not found' }
]})
</script>

<style scoped lang="scss">
#not-found {
  flex: 1;
  width: 100%;
  height: 100%;
  font-family: Dosis;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 500;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
#not-found-svg {
  width: clamp(260px, 40vw, 360px);
  fill: var(--eepy-color-text);
}
</style>