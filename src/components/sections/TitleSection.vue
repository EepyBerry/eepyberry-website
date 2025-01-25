<template>
  <section id="section-title">
    <div class="title">
      <iconify-icon icon="mingcute:star-fill" class="deco-star star1" width="100%" />
      <iconify-icon icon="mingcute:star-fill" class="deco-star star2" width="100%" />
      <iconify-icon icon="mingcute:star-fill" class="deco-star star3" width="100%" />
      <SvgEepyBerryLogo id="avatar" aria-label="Sleeping strawberry with the text 'eepy berry'" />
      <div class="title-intro">
        <p>software engineer</p>
        <p>occasional artist</p>
      </div>
    </div>
    <button class="scroll-indicator icon-button" v-on:click="scrollToProjects()" aria-label="Scroll to projects">
      <iconify-icon icon="mingcute:arrow-down-line" style="width: 3rem; height: 3rem" width="3rem" aria-hidden="true" />
    </button>
  </section>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import SvgEepyBerryLogo from '@/components/svg/SvgEepyBerryLogo.vue';

function scrollToProjects() {
  const projectsRect = document.querySelector('#section-projects > .section-title')!.getBoundingClientRect();
  window.scrollTo({ behavior: 'smooth', top: projectsRect.top - projectsRect.height });
}
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
@use '/src/assets/sass/animations' as anims;

#section-title {
  position: relative;
  height: calc(100dvh - 80px);
  border-radius: 6px;
  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    position: relative;
    transform: translateY(-40px);
    z-index: 1;
    padding: clamp(0rem, 5vw, 4rem);
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    #avatar {
      z-index: 1;
      width: clamp(200px, 14vw, 300px);
      filter: drop-shadow(0 4px 0 var(--eepy-theme-title-shadow));
      animation: bounce 4s ease-in-out infinite;
    }

    .title-intro {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
    .title-intro > p {
      width: clamp(200px, 14vw, 300px);
      font-family: Dosis;
      font-size: clamp(2.25rem, 2.5vw, 3.25rem);
      font-weight: 500;
      line-height: 1;
      text-wrap: nowrap;
    }
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
  top: 0;
  left: 0;
  $size: clamp(3rem, 12vw, 5rem);
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

      .title-intro {
        align-items: center;
      }
      .title-intro > p {
        width: fit-content;
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
    top: 2rem;
    right: 1rem;
  }

  .star3 {
    bottom: 30%;
    left: 45%;
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
