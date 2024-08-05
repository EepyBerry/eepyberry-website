<template>
  <section id="section-title">
    <div class="title">
      <SvgEepyBerryLogo id="avatar" :dark="$theme === 'dark'" aria-label="Sleeping strawberry with the text 'eepy berry'" />
      <hr>
      <p id="intro">
        developer&nbsp;&
        <br>
        hobby-artist
      </p>
    </div>
    <div class="links">
      <a href="https://ko-fi.com" target="_blank" rel="external" aria-label="Ko-fi">
        <iconify-icon mode="style" icon="simple-icons:kofi" height="3rem" aria-hidden="true" />
      </a>
      <a href="https://github.com/EepyBerry" target="_blank" rel="external nofollow noopener" aria-label="GitHub">
        <iconify-icon mode="style" icon="mdi:github" height="3rem" aria-hidden="true" />
      </a>
      <a href="https://bsky.app/profile/eepyberry.bsky.social" target="_blank" rel="external nofollow noopener" aria-label="Bluesky">
        <iconify-icon mode="style" icon="ri:bluesky-fill" height="3rem" aria-hidden="true" />
      </a>
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
  gap: 1rem;

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    #avatar {
      width: clamp(180px, 95vw, 200px);
      filter: drop-shadow(0 4px 1px var(--eepy-color-accent));
      animation: bounce 4s ease-in-out infinite;
    }
    #intro {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: clamp(180px, 95vw, 200px);

      font-family: Dosis;
      font-size: 2.25rem;
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
    gap: 2rem;
  }
}
#section-links {
  padding: 0.25rem;
  border: 1px solid var(--eepy-color-accent);
  border-radius: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

@media screen and (max-width: 567px) {
  #section-title {
    gap: 1.5rem;

    .title {
      flex-direction: column;
      text-align: center;
      padding-top: 4rem;

      & > hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        height: 0;
        width: 10rem;
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