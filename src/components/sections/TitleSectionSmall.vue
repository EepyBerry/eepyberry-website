<template>
  <section id="section-title-small">
    <div class="title-small">
      <SvgEepyBerryLogo id="avatar" :dark="$theme === 'dark'" />
      <hr />
      <p id="intro">developer&nbsp;& hobby-artist&nbsp;</p>
    </div>
  </section>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import SvgEepyBerryLogo from '@/components/svg/SvgEepyBerryLogo.vue';
import { inject } from 'vue';
const $theme = inject('$theme');
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
#section-title-small:before {
  display: none;
}

#section-title-small {
  position: relative;
  background: none;

  .title-small:before {
    content: '';
    position: absolute;
    inset: -6px;
    border: 2px solid var(--eepy-theme-background);
    border-radius: 12px;
  }

  .title-small {
    position: relative;
    padding: 1rem 1.25rem;
    background: var(--eepy-theme-background);
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    #avatar {
      width: clamp(120px, 25vw, 160px);
      filter: drop-shadow(0 4px 0 var(--eepy-theme-title-shadow));
      animation: bounce 4s ease-in-out infinite;
    }

    #intro {
      padding-left: 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: clamp(120px, 25vw, 180px);

      font-family: Dosis;
      font-size: clamp(1.5rem, 4.5vw, 2rem);
      font-weight: 500;
      line-height: 1;
    }

    hr {
      margin-left: 1rem;
      margin-right: 1rem;
      height: clamp(4rem, 15vw, 6rem);
      border: 1px solid var(--eepy-theme-primary);
    }
  }
}

@media screen and (max-width: 567px) {
  #section-title-small .title-small {
    flex-direction: column;
    padding: 0.5rem;

    #intro {
      width: unset;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    hr {
      display: none;
    }
  }
}

@media (prefers-reduced-motion) {
  #section-title-small .title-small > #avatar {
    animation: none;
  }
}
</style>
