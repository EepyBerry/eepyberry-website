<template>
  <div class="page-container">
    <TitleSectionSmall />
    <MiscNerdSection />
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import MiscNerdSection from '@/components/sections/MiscNerdSection.vue'
import TitleSectionSmall from '@/components/sections/TitleSectionSmall.vue'
import { useHead } from '@unhead/vue'
useHead({
  title: 'Miscellaneous · EepyBerry',
  meta: [
    {
      name: 'description',
      content: "Who am I? What do I like to do? Why a berry? It's all in here!",
    },
  ],
})
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.page-container {
  gap: 3rem;
  margin-top: 3rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1199px) {
  .page-container {
    gap: 1.5rem;
  }
}
</style>
