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
import AboutInfoSection from '@/components/sections/AboutInfoSection.vue';
import AboutDevToolsSection from '@/components/sections/AboutDevToolsSection.vue';
import AboutDrawingToolsSection from '@/components/sections/AboutDrawingToolsSection.vue';
import TitleSectionSmall from '@/components/sections/TitleSectionSmall.vue';
import { useHead } from '@unhead/vue';
useHead({
  title: "About · EepyBerry's Website 🍓",
  meta: [
    {
      name: 'description',
      content: "Who am I? What do I like to do? Why a berry? It's all in here!",
    },
  ],
});
</script>
