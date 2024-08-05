<template>
  <section id="section-title">
    <SvgEepyBerryLogo id="avatar" :dark="$theme === 'dark'" aria-label="Sleeping strawberry with the text 'eepy berry'" />
    <hr>
    <h1>developer &<br>illustrator</h1>
    <!-- <div class="home-cards">
      <RouterLink to="experiments" class="button-link" aria-label="Experiments page link">
        <EepyButton rainbow id="button-experiments" tabindex="-1" aria-hidden="true">
          <iconify-icon class="icon" mode="style" icon="mingcute:flask-line" height="1.75rem" />
          <span>Experiments!</span>
        </EepyButton>
      </RouterLink>
      <RouterLink to="about" class="button-link" aria-label="About page link">
        <EepyButton id="button-about" tabindex="-1" aria-hidden="true">
          <iconify-icon class="icon flip" mode="style" icon="mingcute:happy-line" height="1.75rem" />
          <span>About me :3</span>
        </EepyButton>
      </RouterLink>
      <a href="https://www.buymeacoffee.com/" target="_blank" rel="external nofollow noopener"
        class="button-link"
        aria-label="Buy Me a Coffee website link"
      >
        <EepyButton id="button-coffee" tabindex="-1" aria-hidden="true">
          <iconify-icon class="icon" mode="style" icon="circum:coffee-cup" height="2rem" />
          <span>Buy me a coffee (˶ᵔ ᵕ ᵔ˶)</span>
        </EepyButton>
      </a>
    </div> -->
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
  padding-top: 2rem;

  #avatar {
    width: clamp(180px, 80vw, 300px);
    filter: drop-shadow(0 4px 1px var(--eepy-color-accent));
    animation: bounce 4s ease-in-out infinite;
  }

  hr {
    margin-right: 1.75rem;
    height: 6rem;
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