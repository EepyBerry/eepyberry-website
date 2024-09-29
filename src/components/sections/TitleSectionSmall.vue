<template>
  <section id="section-title-small">
    <SvgEepyBerryLogo id="avatar" :dark="$theme === 'dark'" />
    <hr />
    <p id="intro">developer&nbsp;& illustrator&nbsp;</p>
  </section>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import AppLinks from '../main/AppLinks.vue'
import SvgEepyBerryLogo from '@/components/svg/SvgEepyBerryLogo.vue'
import { inject } from 'vue'
const $theme = inject('$theme')
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
#section-title-small {
  position: relative;
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  #avatar {
    width: clamp(120px, 25vw, 160px);
    filter: drop-shadow(0 4px 1px var(--eepy-theme-title-shadow));
    animation: bounce 4s ease-in-out infinite;
  }
  #intro {
    padding-left: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: clamp(120px, 25vw, 160px);

    font-family: Dosis;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: 500;
    line-height: 1;
  }
  hr {
    margin-left: 1rem;
    margin-right: 1rem;
    height: clamp(4rem, 15vw, 6rem);
    border: 1px solid var(--eepy-theme-accent);
  }
}

@media screen and (max-width: 567px) {
  #section-title-small {
    flex-direction: column;
    #intro {
      width: unset;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
    hr {
      display: none;
    }
  }
}

@media (prefers-reduced-motion) {
  #section-title-small > #avatar {
    animation: none;
  }
}
</style>
