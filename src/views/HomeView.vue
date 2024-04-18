<template>
  <section id="section-home">
    <img id="avatar" :src="`eepyberry_${$theme}.svg`" aria-label="Sleeping strawberry with the text 'eepy berry'">
    <div class="home-cards">
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
    </div>
  </section>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { inject } from 'vue';
const $theme = inject('$theme')
useHead({ meta: [
  { name: 'description', content: 'A small website about myself, my projects, and general shenanigans. Welcome! 🍓' }
]})
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
#section-home {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  #avatar {
    width: clamp(280px, 60vw, 540px);
    filter: drop-shadow(0 6px 2px var(--eepy-color-accent));
    animation: bounce 4s ease-in-out infinite;
  }

  .home-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
}

@media screen and (max-width: 567px) {
  #section-home {
    #avatar {
      width: clamp(280px, 60vw, 480px);
      filter: drop-shadow(0 4px 2px var(--eepy-color-accent));
    }
  }
}

@media (prefers-reduced-motion: true) {
  #section-home {
    #avatar {
      animation: none;
    }
  }
}
</style>