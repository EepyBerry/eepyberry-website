<template>
  <section id="section-home">
    <img id="avatar" :src="`eepyberry_${$theme}.svg`" aria-label="Sleeping strawberry with the text 'eepy berry'">
    <div class="home-cards">
      <RouterLink to="" class="button-link">
        <EepyButton tabindex="-1" aria-hidden="true">
          <EepyIcon size="lg">science</EepyIcon>
          <span>Experiments!</span>
        </EepyButton>
      </RouterLink>
      <RouterLink to="about" class="button-link">
        <EepyButton tabindex="-1" aria-hidden="true">
          <EepyIcon size="lg">sentiment_excited</EepyIcon>
          <span>About me :3</span>
        </EepyButton>
      </RouterLink>
      <a href="https://www.buymeacoffee.com/" target="_blank" rel="external nofollow noopener" class="button-link">
        <EepyButton tabindex="-1" aria-hidden="true">
          <EepyIcon size="lg">coffee</EepyIcon>
          <span>Buy me a coffee (˶ᵔ ᵕ ᵔ˶)</span>
        </EepyButton>
      </a>
    </div>
  </section>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import { inject } from '@vue/runtime-dom';
import { useRouter } from 'vue-router';
const $theme = inject('$theme')

const router = useRouter()
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
#section-home {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  #avatar {
    width: min(80vw, 480px)
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