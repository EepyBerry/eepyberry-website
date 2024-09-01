<template>
  <section id="section-title">
    <div class="title">
      <span class="deco tl" />
      <span class="deco tr" />
      <span class="deco bl" />
      <span class="deco br" />
      <SvgEepyBerryLogo
        id="avatar"
        :dark="$theme === 'dark'"
        aria-label="Sleeping strawberry with the text 'eepy berry'"
      />
      <hr />
      <p id="intro">developer&nbsp;& illustrator&nbsp;</p>
    </div>
    <AppLinks class="title-links" />
    <iconify-icon
      class="scroll-indicator"
      icon="mingcute:arrow-down-line"
      width="3rem"
      aria-hidden="true"
    />
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
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    position: relative;
    z-index: 1;
    padding: clamp(0rem, 5vw, 4rem);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    #avatar {
      width: clamp(200px, 12vw, 300px);
      filter: drop-shadow(0 4px 1px var(--eepy-theme-title-shadow));
      animation: bounce 4s ease-in-out infinite;
    }
    #intro {
      padding-left: 0.75rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: clamp(200px, 12vw, 300px);

      font-family: Dosis;
      font-size: clamp(2.5rem, 2.375vw, 3.5rem);
      font-weight: 500;
      line-height: 1;
    }
    & > hr {
      margin-left: 1.75rem;
      margin-right: 1.75rem;
      height: clamp(7rem, 7.5vw, 10rem);
      border: 1px solid var(--eepy-theme-accent);
    }
  }

  .title-links {
    margin-top: 0;
    transform: translateY(-1.5rem);
  }

  .scroll-indicator {
    color: var(--eepy-theme-accent);
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
    .deco {
      display: none;
    }
  }
}

@media screen and (max-height: 567px) {
  #section-title {
    height: 110dvh;
    .scroll-indicator {
      display: none;
    }
  }
}

@media (prefers-reduced-motion) {
  #section-title > .title > #avatar {
    animation: none;
  }
}
</style>
