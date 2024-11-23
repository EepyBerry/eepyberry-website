<template>
  <section id="section-art">
    <div class="section-title" role="heading" aria-label="Drawings">
      <iconify-icon icon="mingcute:paint-brush-line" width="2.5rem" aria-hidden="true" />
    </div>
    <div class="section-content">
      <ul class="gallery">
        <li class="image-wrapper" style="width: 36rem">
          <a href="#/artwork/2024-08-03_1000-LC_Carrier.jpg"
            ><img src="/artwork/2024-08-03_1000-LC_Carrier.jpg" aria-label="1000-LC" alt="1000-LC Carrier"
          /></a>
          <div class="drawing-title">
            <span>"1000-LC 'CARRIER'"</span>
          </div>
        </li>
        <li class="image-wrapper" style="width: 20rem">
          <a href="#/artwork/2023-01-09_Heart_of_the_Mountain.jpg"
            ><img
              src="/artwork/2023-01-09_Heart_of_the_Mountain.jpg"
              aria-label="Heart of the Mountain"
              alt="Heart of the Mountain"
              style="scale: 120%"
          /></a>
          <div class="drawing-title">
            <span>"Heart of the Mountain"</span>
          </div>
        </li>
        <li class="image-wrapper" style="width: 20rem">
          <a href="#/artwork/2022-12-11_Niko_Holding_the_Sun.jpg"
            ><img
              src="/artwork/2022-12-11_Niko_Holding_the_Sun.jpg"
              aria-label="Niko Holding the Sun"
              alt="Niko Holding the Sun"
              style="scale: 120%"
          /></a>
          <div class="drawing-title">
            <span>"Niko Holding the Sun"</span>
          </div>
        </li>
        <!-- placeholders -->
        <li class="image-wrapper placeholder" style="width: 20rem">
          <IconEepyBerry />
        </li>
        <li class="image-wrapper placeholder" style="width: 20rem">
          <IconEepyBerry />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconEepyBerry from '../svg/icons/IconEepyBerry.vue';
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
#section-art {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.gallery {
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  .image-wrapper {
    position: relative;
    flex-grow: 1;
    flex-shrink: 1;
    max-width: 100%;
    width: 100%;
    height: 24rem;
    overflow: hidden;

    border: 1px solid var(--eepy-theme-border);
    border-radius: 6px;

    transition: transform 150ms ease;
    display: flex;

    &.placeholder {
      border: 2px dashed var(--eepy-theme-primary);
      align-items: center;
      justify-content: center;
      opacity: 0.5;

      svg {
        color: var(--eepy-theme-primary);
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

    .drawing-title {
      z-index: 1;
      position: absolute;
      inset: auto auto 1rem 0.75rem;
      color: white;
      text-align: center;
      font-size: 0.875rem;

      span {
        background: black;
        padding: 0.25rem 0.5rem;
        border: 1px solid var(--eepy-theme-border);
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-radius: 8px;
      }
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
