<template>
  <section id="section-about-drawingtools">
    <div class="section-title" role="heading" aria-label="Tools & techs">
      <iconify-icon icon="mingcute:paint-brush-line" width="2.5rem" aria-hidden="true" />
    </div>
    <div class="section-content">
      <ul class="tool-list">
        <li>
          <EepyPatchCard id="tool-aseprite" style="transform: rotateZ(1deg)">
            <div>
              <img
                src="/svg/aseprite-icon.svg"
                :style="{ width: '2rem', height: '2.125rem' }"
                aria-label="Aseprite logo"
              />
              <span>Aseprite</span>
            </div>
            <p>Pixel art</p>
          </EepyPatchCard>
        </li>
        <li>
          <EepyPatchCard id="tool-krita" style="transform: rotateZ(-1deg)">
            <div>
              <img src="/svg/krita-icon.svg" :style="{ width: '2rem', height: '2rem' }" aria-label="Krita logo" />
              <span>Krita</span>
            </div>
            <p>Digital painting</p>
          </EepyPatchCard>
        </li>
        <li>
          <EepyPatchCard id="tool-illustrator" style="transform: rotateZ(0.5deg)">
            <div>
              <iconify-icon inline mode="svg" icon="logos:adobe-illustrator" height="2rem" aria-hidden="true" />
              <span>Illustrator</span>
            </div>
            <p>Vector graphics</p>
          </EepyPatchCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
#section-about-drawingtools {
  .section-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;

    ul.tool-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;
      color: var(--eepy-color-white);

      li {
        height: 10rem;
        flex: 1;
        min-width: 16rem;
      }
    }

    #tool-aseprite,
    #tool-krita,
    #tool-illustrator {
      height: 100%;

      :deep(.eepy-patchcard) {
        flex-direction: column;
      }
      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      p {
        font-size: 1.125rem;
        font-weight: 500;
      }
    }
    #tool-aseprite {
      background-color: var(--eepy-color-aseprite);
    }
    #tool-krita {
      background-color: var(--eepy-color-krita);
    }
    #tool-illustrator {
      background-color: var(--eepy-color-illustrator);
    }
  }
}

@media screen and (max-width: 1023px) {
  #section-about-drawingtools .section-content {
    grid-template-columns: 1fr;
    gap: 2rem;

    ul.tool-list {
      gap: 1.5rem;
    }
  }
}

@media screen and (max-width: 767px) {
  #section-about-drawingtools .section-content {
    ul.tool-list {
      gap: 1rem;
    }
  }
}
</style>
