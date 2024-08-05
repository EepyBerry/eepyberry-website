<template>
  <div>
    <TitleSection />
    <ProjectsSection />
  </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import TitleSection from '@/components/sections/TitleSection.vue';
import ProjectsSection from  '@/components/sections/ProjectsSection.vue';
import { useHead } from '@unhead/vue';
import { inject } from 'vue';
const $theme = inject('$theme')
useHead({ meta: [
  { name: 'description', content: 'A small website about myself, my projects, and general shenanigans. Welcome! 🍓' }
]})
</script>