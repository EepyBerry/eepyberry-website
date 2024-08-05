<template>
  <section id="section-title">
    <SvgEepyBerryLogo id="avatar" :dark="$theme === 'dark'" aria-label="Sleeping strawberry with the text 'eepy berry'" />
    <hr>
    <div id="intro">
      <p class="intro-desc">developer &<br>hobby-artist</p>
      <!-- <div class="links">
        <a href="https://github.com/EepyBerry" target="_blank" rel="external nofollow noopener" aria-label="GitHub">
          <iconify-icon mode="style" icon="simple-icons:github" height="2rem" />
        </a>
        <a href="https://bsky.app/profile/eepyberry.bsky.social" target="_blank" rel="external nofollow noopener" aria-label="Bluesky">
          <iconify-icon mode="style" icon="simple-icons:bluesky" height="2rem" />
        </a>
      </div> -->
    </div>
  </section>
  
  <section id="section-links">
  </section>
</template>


<!------------------------------------------------------------>
<script setup lang="ts">
import SvgEepyBerryLogo from '@/components/svg/SvgEepyBerryLogo.vue';
import { useHead } from '@unhead/vue';
import { inject } from 'vue';
const $theme = inject('$theme')
useHead({ meta: [
  { name: 'description', content: 'A small website about myself, my projects, and general shenanigans. Welcome! 🍓' }
]})
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
#section-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;

  #avatar {
    width: clamp(180px, 95vw, 260px);
    filter: drop-shadow(0 4px 1px var(--eepy-color-accent));
  }

  #intro {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .intro-desc {
      font-family: Dosis;
      font-size: 2.25rem;
      font-weight: 700;
      line-height: 1;
    }
  }

  .links {
    display: flex;
    gap: 1rem;
  }

  & > hr {
    margin-right: 1.75rem;
    height: 7rem;
    border: 2px solid var(--eepy-color-accent);
  }

  .home-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
}
#section-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

@media screen and (max-width: 767px) {
  #section-title {
    flex-direction: column;
    text-align: center;
    padding-top: 4rem;

    hr {
      margin: 0;
      margin-bottom: 1rem;
      height: 0;
      width: 10rem;
    }
  }
}

@media (prefers-reduced-motion) {
  #section-title {
    #avatar {
      animation: none;
    }
  }
}
</style>