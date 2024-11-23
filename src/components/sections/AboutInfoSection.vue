<template>
  <section id="section-about-info">
    <div class="section-title" role="heading" aria-label="About me">
      <iconify-icon icon="mingcute:happy-line" width="2.5rem" aria-hidden="true" />
    </div>
    <div class="section-content">
      <EepyPatchCard class="avatar-wrapper">
        <img class="avatar" src="/avatar.webp" alt="Avatar" aria-label="avatar" />
      </EepyPatchCard>
      <InfoTerminal />
    </div>
  </section>
</template>

<script setup lang="ts">
import InfoTerminal from '../InfoTerminal.vue';
</script>

<style scoped lang="scss">
#section-about-info {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .section-content {
    display: grid;
    grid-template-areas: 'avatar info';
    grid-template-columns: 1fr 2.5fr;
    align-items: center;
    margin: 0 auto;
    gap: 3rem;
    width: 100%;

    .avatar-wrapper {
      position: relative;
      grid-area: avatar;
      align-self: flex-end;
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      .avatar {
        width: clamp(140px, 20vw, 260px);
      }
    }
  }
}
[data-theme='light'] .avatar-wrapper {
  background-blend-mode: multiply;
}

[data-theme='dark'] .avatar-wrapper {
  background-blend-mode: overlay;
}

@media screen and (max-width: 1377px) {
  #section-about-info {
    .section-content {
      gap: 3rem;
    }
  }
}

@media screen and (max-width: 1199px) {
  #section-about-info {
    .section-content {
      gap: 2.5rem;
    }
  }
}

@media screen and (max-width: 895px) {
  #section-about-info {
    .section-content {
      grid-template-areas: 'info';
      grid-template-columns: 1fr;

      .avatar-wrapper {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  #section-about-info {
    .section-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
}
</style>
