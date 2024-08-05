<template>
  <div>
    <ProjectsSection />
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import ProjectsSection from  '@/components/sections/ProjectsSection.vue';
import { useHead } from '@unhead/vue';
import { inject } from 'vue';
useHead({ meta: [
  { name: 'description', content: 'A small website about myself, my projects, and general shenanigans. Welcome! 🍓' }
]})
</script>