<template>
  <section id="section-about-info">
    <h2>byte-sized info!</h2>
    <ul class="info-list">
      <li>
        <div>
          <iconify-icon
            mode="svg"
            icon="noto:transgender-flag"
            height="2.5rem"
          />
        </div>
        <span>Transfem and proud!</span>
      </li>
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:books" height="2.5rem" />
          <span class="bite-mark"></span>
        </div>
        <span>Full-Stack Software Engineer!</span>
      </li>
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:artist-palette" height="2.5rem" />
        </div>
        <span>Does pixel, digital & vector&nbsp;art!</span>
      </li>
      <li>
        <div>
          <iconify-icon
            mode="svg"
            icon="noto:woman-raising-hand"
            height="2.5rem"
          />
        </div>
        <span>Very, very smol :></span>
      </li>
      <li>
        <div>
          <iconify-icon
            mode="svg"
            icon="noto:exclamation-question-mark"
            height="2.5rem"
          />
          <span class="bite-mark-alt"></span>
        </div>
        <span>Often curious :3</span>
      </li>
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:zzz" height="2.5rem" />
        </div>
        <span>Sleepy half the time...</span>
      </li>
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:strawberry" height="2.5rem" />
          <span class="bite-mark-alt"></span>
        </div>
        <span>Fav. fruit: strawberries!</span>
      </li>
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:waffle" height="2.5rem" />
          <span class="bite-mark"></span>
        </div>
        <span>Fav. dessert: waffles!</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
#section-about-info {
  .info-list {
    list-style-type: none;
    max-width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    gap: 1rem;

    li {
      position: relative;
      flex-grow: 1;
      flex-shrink: 1;
      max-width: 100%;
      min-height: 5rem;
      height: 5rem;
      padding: 1rem;
      background: var(--eepy-color-accent-semi);
      border: 1px solid var(--eepy-color-accent-half);
      border-radius: 8px;

      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;

      font-family: Dosis;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1rem;

      & > div {
        height: 2.5rem;
        width: 2.5rem;
      }
      & > span {
        text-wrap: wrap;
      }
    }
  }
}
.bite-mark {
  position: absolute;
  top: -1px;
  right: -1px;
  width: 1.25rem;
  height: 1rem;
  background: var(--eepy-color-background);
  border-bottom-left-radius: 1rem;
  border-bottom: 1px solid var(--eepy-color-accent-half);
  border-left: 1px solid var(--eepy-color-accent-half);
}
.bite-mark-alt {
  position: absolute;
  left: -1px;
  bottom: -1px;
  width: 1.25rem;
  height: 1rem;
  background: var(--eepy-color-background);
  border-top-right-radius: 1rem;
  border-top: 1px solid var(--eepy-color-accent-half);
  border-right: 1px solid var(--eepy-color-accent-half);
}
iconify-icon {
  filter: drop-shadow(0 1px 1px var(--eepy-color-primary));
}

@media screen and (max-width: 1199px) {
  #section-about-info {
    .info-list {
      grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
    }
  }
}
@media screen and (max-width: 1023px) {
  #section-about-info {
    .info-list {
      grid-template-columns: repeat(auto-fill, minmax(11rem, 1fr));
    }
  }
}
@media screen and (max-width: 895px) {
  #section-about-info {
    .info-list {
      grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    }
    h2 {
      text-align: center;
    }
  }
}
</style>
