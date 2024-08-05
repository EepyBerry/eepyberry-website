<template>
  <div class="page-container">
    <ProjectsSection />
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import ProjectsSection from  '@/components/sections/ProjectsSection.vue';
import { useHead } from '@unhead/vue';
useHead({ meta: [
  { name: 'description', content: 'A small website about myself, my projects, and general shenanigans. Welcome! 🍓' }
]})
</script>

<style scoped lang="scss">
.page-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>