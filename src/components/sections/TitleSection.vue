<template>
  <section id="section-title">
    <div class="title">
      <iconify-icon icon="mingcute:star-fill" class="deco-star star1" width="100%" />
      <iconify-icon icon="mingcute:star-fill" class="deco-star star2" width="100%" />
      <iconify-icon icon="mingcute:star-fill" class="deco-star star3" width="100%" />
      <span class="deco tl" />
      <span class="deco tr" />
      <span class="deco bl" />
      <span class="deco br" />
      <SvgEepyBerryLogo id="avatar" :dark="$theme === 'dark'"
        aria-label="Sleeping strawberry with the text 'eepy berry'" />
      <hr />
      <p id="intro">developer&nbsp;& illustrator&nbsp;</p>
    </div>
    <AppLinks class="title-links" />
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
@use "/src/assets/sass/animations" as anims;

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

    &>hr {
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

.star1 {
  top: -3rem;
  left: 7.5%;
  $size: clamp(4rem, 12vw, 6rem);
  width: $size;
  height: $size;

  opacity: 0.45;
  transform: rotateZ(45deg);
  @include anims.animate-backandforth('star1bnf', 9s, 45deg, 65deg);
}

.star2 {
  top: 25%;
  right: 1rem;
  $size: clamp(1rem, 12vw, 2rem);
  width: $size;
  height: $size;

  opacity: 0.45;
  transform: rotateZ(45deg);
  @include anims.animate-backandforth('star2bnf', 7s, -15deg, -45deg);
}

.star3 {
  bottom: 2rem;
  left: 60%;
  $size: clamp(1.5rem, 12vw, 3rem);
  width: $size;
  height: $size;

  opacity: 0.45;
  transform: rotateZ(45deg);
  @include anims.animate-backandforth('star3bnf', 10s, 35deg, 70deg);
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

      &>hr {
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

  .star1 {
    top: -1rem;
    left: 10%;
  }

  .star2 {
    top: 4rem;
    right: 1rem;
  }

  .star3 {
    bottom: 20%;
    left: 67.5%;
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
  #section-title>.title>#avatar {
    animation: none;
  }
}
</style>
