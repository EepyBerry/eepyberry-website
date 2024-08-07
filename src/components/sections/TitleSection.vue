<template>
  <section id="section-title">
    <div class="title">
      <SvgEepyBerryLogo id="avatar" :dark="$theme === 'dark'" aria-label="Sleeping strawberry with the text 'eepy berry'" />
      <hr>
      <p id="intro">developer&nbsp;& illustrator&nbsp;:></p>
    </div>
    <div class="links">
      <span class="bracket">[</span>
      <a href="#" disabled @click="$event.preventDefault()" aria-label="Ko-fi">
        <iconify-icon mode="svg" icon="simple-icons:kofi" height="2.5rem" aria-hidden="true" />
        <span class="coming-soon" aria-hidden="true">coming soon!</span>
      </a>
      <a href="https://github.com/EepyBerry" target="_blank" rel="external nofollow noopener" aria-label="GitHub">
        <iconify-icon mode="svg" icon="mdi:github" height="2.5rem" aria-hidden="true" />
      </a>
      <a href="https://bsky.app/profile/eepyberry.bsky.social" target="_blank" rel="external nofollow noopener" aria-label="Bluesky">
        <iconify-icon mode="svg" icon="ri:bluesky-fill" height="2.5rem" aria-hidden="true" />
      </a>
      <span class="bracket">]</span>
    </div>
  </section>
</template>


<!------------------------------------------------------------>
<script setup lang="ts">
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

  .links {
    display: flex;
    align-items: center;
    gap: 2rem;

    & > .bracket {
      font-family: Dosis;
      font-size: 2.5rem;
      font-weight: 100;
      line-height: 1;
    }
    & > a {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      .coming-soon {
        position: absolute;
        bottom: -90%;
        text-align: center;
        line-height: 1.1;
        pointer-events: none;
      }
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