<template>
  <TitleSectionSmall />
  <MiscNerdSection />
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import MiscNerdSection from '@/components/sections/MiscNerdSection.vue'
import TitleSectionSmall from '@/components/sections/TitleSectionSmall.vue'
import { useHead } from '@unhead/vue'
useHead({
  title: "Miscellaneous · EepyBerry's Website 🍓",
  meta: [
    {
      name: 'description',
      content: "Who am I? What do I like to do? Why a berry? It's all in here! :3",
    },
  ],
})
</script>
