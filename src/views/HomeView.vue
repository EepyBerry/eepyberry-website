<template>
  <section id="section-home">
    <img id="avatar" :src="`eepyberry_${$theme}.svg`" aria-label="Sleeping strawberry with the text 'eepy berry'">
    <div class="home-cards">
      <RouterLink to="about" class="button-link">
        <EepyButton>
          <fa-icon icon="fa-solid fa-flask" size="xl" />
          <span>Experiments!</span>
        </EepyButton>
      </RouterLink>
      <RouterLink to="about" class="button-link">
        <EepyButton>
          <fa-icon icon="fa-solid fa-mug-hot" size="xl" />
          <span>Buy me a coffee (˶ᵔ ᵕ ᵔ˶)</span>
        </EepyButton>
      </RouterLink>
      <RouterLink to="about" class="button-link">
        <EepyButton>
          <fa-icon icon="fa-solid fa-user" size="xl" />
          <span>About me :3</span>
        </EepyButton>
      </RouterLink>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { inject } from '@vue/runtime-dom';
import { useRouter } from 'vue-router';
const $theme = inject('$theme')

const router = useRouter()
</script>

<style scoped lang="scss">
#section-home {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  #avatar {
    width: min(80vw, 400px)
  }

  .home-cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }
}

[data-theme='dark'] #avatar {
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))
}
</style>