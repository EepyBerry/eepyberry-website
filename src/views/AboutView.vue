<template>
  <div class="page-container">
    <TitleSectionSmall />
    <AboutInfoSection />
    <AboutDevToolsSection />
    <AboutDrawingToolsSection />
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import AboutInfoSection from '@/components/sections/AboutInfoSection.vue'
import AboutDevToolsSection from '@/components/sections/AboutDevToolsSection.vue'
import AboutDrawingToolsSection from '@/components/sections/AboutDrawingToolsSection.vue'
import TitleSectionSmall from '@/components/sections/TitleSectionSmall.vue'
import { useHead } from '@unhead/vue'
useHead({
  title: 'About · EepyBerry',
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
  width: 100%;
  gap: 3rem;
  margin-top: 3rem;

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
