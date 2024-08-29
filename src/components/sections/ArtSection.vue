<template>
  <section id="section-art">
    <div class="section-title" role="heading" aria-label="Drawings">
      <hr class="title-divider">
      <span class="title-icon">
        <span class="title-bracket" aria-hidden="true">[</span>
        <iconify-icon icon="mingcute:paint-brush-line" width="1.5em" aria-hidden="true" />
        <span class="title-bracket" aria-hidden="true">]</span>
      </span>
      <hr class="title-divider">
    </div>
    <div class="section-content">
      <ul class="gallery">
        <li class="image-wrapper" style="width: 36rem">
          <a href="#/artwork/2024-08-03_1000-LC.jpg"
            ><img src="/artwork/2024-08-03_1000-LC.jpg" aria-label="1000-LC"
          /></a>
        </li>
        <li class="image-wrapper" style="width: 20rem">
          <a href="#/artwork/2023-01-09_Heart_of_the_Mountain.jpg"
            ><img
              src="/artwork/2023-01-09_Heart_of_the_Mountain.jpg" aria-label="Heart of the Mountain"
              style="scale: 120%"
          /></a>
        </li>
        <li class="image-wrapper" style="width: 20rem">
          <a href="#/artwork/2022-12-11_Niko_Holding_the_Sun.jpg"
            ><img
              src="/artwork/2022-12-11_Niko_Holding_the_Sun.jpg" aria-label="Niko Holding the Sun"
              style="scale: 120%"
          /></a>
        </li>
        <!-- placeholders -->
        <li class="image-wrapper placeholder" style="width: 20rem">
          <IconEepyBerry class="placeholder-icon" />
        </li>
        <li class="image-wrapper placeholder" style="width: 20rem">
          <IconEepyBerry class="placeholder-icon" />
        </li>
        <li class="image-wrapper placeholder" style="width: 36rem">
          <IconEepyBerry class="placeholder-icon" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconEepyBerry from "../svg/icons/IconEepyBerry.vue";
</script>

<!------------------------------------------------------------>
<style lang="scss">
#section-art {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .section-title {
    align-self: center;
  }
  .section-content {
    padding-top: 2rem;
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
    a:hover,
    a:visited:hover {
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
