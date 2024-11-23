<template>
  <TitleSectionSmall />
  <div id="not-found">
    <SvgNotFound />
    <p>The requested page could not be found :c</p>
  </div>
</template>

<script setup lang="ts">
import TitleSectionSmall from '@/components/sections/TitleSectionSmall.vue';
import SvgNotFound from '@/components/svg/SvgNotFound.vue';
import { useHead } from '@unhead/vue';
useHead({
  title: "Not found · EepyBerry's Website 🍓",
  meta: [
    { name: 'robots', content: 'noindex, nofollow' },
    { name: 'description', content: 'Page not found' },
  ],
});
</script>

<style scoped lang="scss">
#not-found {
  vertical-align: middle;
  width: fit-content;
  font-family: Dosis;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 500;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  &::before {
    clip-path: none;
    border-top-left-radius: 12px;
  }
}
#not-found-svg {
  width: clamp(260px, 40vw, 360px);
  fill: var(--eepy-theme-text);
}
</style>
