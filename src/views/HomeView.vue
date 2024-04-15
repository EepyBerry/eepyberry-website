<template>
  <section id="section-home">
    <img id="avatar" :src="`eepyberry_${$theme}.svg`" aria-label="Sleeping strawberry with the text 'eepy berry'">
    <div class="home-cards">
      <RouterLink to="experiments" class="button-link" aria-label="Experiments page link">
        <EepyButton rainbow id="button-experiments" tabindex="-1" aria-hidden="true">
          <EepyIcon size="lg">science</EepyIcon>
          <span>Experiments!</span>
        </EepyButton>
      </RouterLink>
      <RouterLink to="about" class="button-link" aria-label="About page link">
        <EepyButton id="button-about" tabindex="-1" aria-hidden="true">
          <EepyIcon size="lg">sentiment_excited</EepyIcon>
          <span>About me :3</span>
        </EepyButton>
      </RouterLink>
      <a href="https://www.buymeacoffee.com/" target="_blank" rel="external nofollow noopener"
        class="button-link"
        aria-label="Buy Me a Coffee website link"
      >
        <EepyButton id="button-coffee" tabindex="-1" aria-hidden="true">
          <EepyIcon size="lg">coffee</EepyIcon>
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
    width: clamp(280px, 60vw, 480px);
  }

  .home-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
}
</style>