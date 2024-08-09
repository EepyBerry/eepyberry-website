
<template>
  <section id="section-art">
    <h2 class="section-title">art corner!</h2>
    <div class="section-content">
      <ul class="gallery">
        <li class="image-wrapper" style="width: 36rem;">
          <a href="#/artwork/2024-08-03_1000-LC.jpg"><img src="/artwork/2024-08-03_1000-LC.jpg"></a>
        </li>
        <li class="image-wrapper" style="width: 20rem;">
          <a href="#/artwork/2023-01-09_Heart_of_the_Mountain.jpg"><img src="/artwork/2023-01-09_Heart_of_the_Mountain.jpg" style="scale: 120%"></a>
        </li>
        <li class="image-wrapper" style="width: 20rem;">
          <a href="#/artwork/2022-12-11_Niko_Holding_the_Sun.jpg"><img src="/artwork/2022-12-11_Niko_Holding_the_Sun.jpg" style="scale: 120%"></a>
        </li>
        <li class="image-wrapper" style="width: 20rem;">
          <a href="#/artwork/2022-02-12_Strange_Reflection.jpg"><img src="/artwork/2022-02-12_Strange_Reflection.jpg"></a>
        </li>
        <li class="image-wrapper placeholder" style="width: 20rem;">
          <a href="#/artwork/2024-08-03_1000-LC.jpg"></a><IconEepyBerry class="placeholder-icon" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconEepyBerry from '../svg/icons/IconEepyBerry.vue';
</script>

<!------------------------------------------------------------>
<style lang="scss">
#section-art {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .section-title {
    align-self: flex-start;
  }
  .section-content {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
}

.gallery {
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  .image-wrapper {
    flex-grow: 1;
    flex-shrink: 1;
    
    border-radius: 8px;
    max-width: 100%;
    width: 100%;
    height: 24rem;
    overflow: hidden;
    transition: transform 150ms ease;
    display: flex;

    &.placeholder {
      border: 2px dashed var(--eepy-color-accent);
      align-items: center;
      justify-content: center;
      opacity: 0.5;
      
      svg {
        color: var(--eepy-color-accent);
        object-position: center;
        height: 3.5rem;
      }
    }
    img {
      flex-grow: 1;
      object-position: center;
      object-fit: cover;
      width: 100%;
    }

    a {
      flex: 1;
    }
    a:hover, a:visited:hover {
      filter: brightness(100%);
      width: 100%;
    }
  }
  .image-wrapper:not(.placeholder):hover {
    transform: scale(101.5%);
  }
}

@media screen and (max-width: 767px) {
  #section-art {
    margin-top: 3rem;
    .section-title {
      align-self: center;
    }
    .section-content {
      gap: 1rem;
    }
  }
}

@media screen and (prefers-reduced-motion) {
  .gallery {
    .image-wrapper {
      transition: none;
    }
  }
}
</style>