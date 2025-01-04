<template>
  <section id="section-title">
    <div class="title">
      <iconify-icon icon="mingcute:star-fill" class="deco-star star1" width="100%" />
      <iconify-icon icon="mingcute:star-fill" class="deco-star star2" width="100%" />
      <iconify-icon icon="mingcute:star-fill" class="deco-star star3" width="100%" />
      <SvgEepyBerryLogo
        id="avatar"
        :dark="$theme === 'dark'"
        aria-label="Sleeping strawberry with the text 'eepy berry'"
      />
      <hr />
      <p id="intro">developer&nbsp;& artist&nbsp;</p>
      <AppLinks class="title-links" />
    </div>
    <button class="scroll-indicator icon-button" v-on:click="scrollToProjects()" aria-label="Scroll to projects">
      <iconify-icon icon="mingcute:arrow-down-line" style="width: 3rem; height: 3rem" width="3rem" aria-hidden="true" />
    </button>
  </section>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import AppLinks from '../main/AppLinks.vue';
import SvgEepyBerryLogo from '@/components/svg/SvgEepyBerryLogo.vue';
import { inject } from 'vue';
const $theme = inject('$theme');

function scrollToProjects() {
  const projectsRect = document.querySelector('#section-projects > .section-title')!.getBoundingClientRect();
  window.scrollTo({ behavior: 'smooth', top: projectsRect.top - projectsRect.height });
}
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
@use '/src/assets/sass/animations' as anims;

#section-title:before {
  display: none;
}

#section-title {
  position: relative;
  height: 100dvh;
  border-radius: 6px;
  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title:before {
    content: '';
    position: absolute;
    inset: -6px;
    border: 2px solid var(--eepy-theme-background);
    border-radius: 12px;
    --diff: calc(50% - 12.25rem);
    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      calc(50% + 6rem + 1px) 100%,
      calc(50% + 6rem + 1px) 95%,
      calc(50% - 6rem - 1px) 95%,
      calc(50% - 6rem - 1px) 100%,
      0 100%
    );
  }

  .title {
    position: relative;
    z-index: 1;
    padding: clamp(0rem, 5vw, 4rem);
    background: var(--eepy-theme-background);
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    #avatar {
      z-index: 1;
      width: clamp(200px, 12vw, 300px);
      filter: drop-shadow(0 4px 0 var(--eepy-theme-title-shadow));
      animation: bounce 4s ease-in-out infinite;
    }

    #intro {
      z-index: 1;
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
      border: 1px solid var(--eepy-theme-primary);
    }
  }

  .title-links {
    z-index: 0;
    position: absolute;
    bottom: -3.5rem;
    margin-top: 0;
    transform: translateY(-1.5rem);
  }
  .title-links::before {
    clip-path: polygon(0 2.625rem, 100% 2.625rem, 100% 100%, 0 100%);
  }

  .scroll-indicator {
    color: var(--eepy-theme-text);
    position: absolute;
    bottom: 2rem;

    &:hover {
      transform: scale(105%);
    }
    &:active {
      transform: scale(97.5%);
    }
  }
}

.star1 {
  top: -3rem;
  left: 7.5%;
  $size: clamp(4rem, 12vw, 6rem);
  width: $size;
  height: $size;

  transform: rotateZ(45deg);
  @include anims.animate-backandforth('star1bnf', 9s, 45deg, 65deg);
}

.star2 {
  top: 25%;
  right: 1rem;
  $size: clamp(1rem, 12vw, 2rem);
  width: $size;
  height: $size;

  transform: rotateZ(45deg);
  @include anims.animate-backandforth('star2bnf', 7s, -15deg, -45deg);
}

.star3 {
  bottom: 2rem;
  left: 65%;
  $size: clamp(1.5rem, 12vw, 3rem);
  width: $size;
  height: $size;

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

  .star1 {
    top: -1rem;
    left: 10%;
  }

  .star2 {
    top: 4rem;
    right: 1rem;
  }

  .star3 {
    bottom: 25%;
    left: 72.5%;
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
