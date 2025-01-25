<template>
  <div class="page-container">
    <MiscNerdSection />
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import MiscNerdSection from '@/components/sections/MiscNerdSection.vue';
import { useHead } from '@unhead/vue';
useHead({
  title: "Miscellaneous · EepyBerry's Website 🍓",
  meta: [
    {
      name: 'description',
      content: "Who am I? What do I like to do? Why a berry? It's all in here! :3",
    },
  ],
});
</script>
