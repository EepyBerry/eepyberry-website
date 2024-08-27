<template>
  <section id="section-title">
    <div class="title">
      <SvgEepyBerryLogo
        id="avatar"
        :dark="$theme === 'dark'"
        aria-label="Sleeping strawberry with the text 'eepy berry'"
      />
      <hr />
      <p id="intro">developer&nbsp;& illustrator&nbsp;</p>
    </div>
    <AppLinks />
    <iconify-icon class="scroll-indicator" icon="mingcute:arrow-down-line" width="3rem" aria-hidden="true" />
  </section>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import AppLinks from "../main/AppLinks.vue";
import SvgEepyBerryLogo from "@/components/svg/SvgEepyBerryLogo.vue";
import { inject } from "vue";
const $theme = inject("$theme");
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
#section-title {
  position: relative;
  height: 100dvh;
  //background: var(--eepy-color-inverted);
  //border: 1px dashed var(--eepy-color-accent-half);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    #avatar {
      width: clamp(200px, 25vw, 300px);
      filter: drop-shadow(0 4px 1px var(--eepy-color-accent));
      animation: bounce 4s ease-in-out infinite;
    }
    #intro {
      padding-left: 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: clamp(200px, 25vw, 300px);

      font-family: Dosis;
      font-size: clamp(2.5rem, 5vw, 3.5rem);
      font-weight: 500;
      line-height: 1;
    }
    & > hr {
      margin-left: 1.75rem;
      margin-right: 1.75rem;
      height: 10rem;
      border: 1px solid var(--eepy-color-accent);
    }
  }
  .scroll-indicator {
    color: var(--eepy-color-accent);
    position: absolute;
    bottom: 2rem;
  }
}

@media screen and (max-width: 567px) {
  #section-title {
    gap: 1rem;

    .title {
      flex-direction: column;
      text-align: center;
      padding: 1.75rem 2rem;

      #avatar {
        width: 240px;
      }
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
