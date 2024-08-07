<template>
  <section id="section-title">
    <div class="title">
      <SvgEepyBerryLogo id="avatar" :dark="$theme === 'dark'" aria-label="Sleeping strawberry with the text 'eepy berry'" />
      <hr>
      <p id="intro">developer&nbsp;& illustrator&nbsp;:></p>
    </div>
    <AppLinks />
  </section>
</template>


<!------------------------------------------------------------>
<script setup lang="ts">
import AppLinks from '../main/AppLinks.vue';
import SvgEepyBerryLogo from '@/components/svg/SvgEepyBerryLogo.vue';
import { inject } from 'vue';
const $theme = inject('$theme')
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
#section-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    #avatar {
      width: clamp(160px, 25vw, 200px);
      filter: drop-shadow(0 4px 1px var(--eepy-color-accent));
      animation: bounce 4s ease-in-out infinite;
    }
    #intro {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: clamp(160px, 25vw, 200px);

      font-family: Dosis;
      font-size: clamp(1.75rem, 5vw, 2.25rem);
      font-weight: 400;
      line-height: 1;
    }
    & > hr {
      margin-left: 1.75rem;
      margin-right: 1.75rem;
      height: 6rem;
      border: 1px solid var(--eepy-color-accent);
    }
  }
}

@media screen and (max-width: 567px) {
  #section-title {
    gap: 1rem;

    .title {
      flex-direction: column;
      text-align: center;

      #intro {
        width: fit-content;
      }
      & > hr {
        margin-top: 0.5rem;
        margin-bottom: 0.75rem;
        height: 0;
        width: 4rem;
      }
    }
  }
}

@media (prefers-reduced-motion) {
  #section-title > .title > #avatar {
    animation: none;
  }
}
</style>