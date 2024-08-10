<template>
  <section id="section-about-info">
    <h2>byte-sized info!</h2>
    <ul class="info-list">
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:transgender-flag" height="2.5rem" />
        </div>
        <span>Transfem and proud!</span>
      </li>
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:books" height="2.5rem" />
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
          <iconify-icon mode="svg" icon="noto:woman-raising-hand" height="2.5rem" />
        </div>
        <span>Very, very smol :></span>
      </li>
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:exclamation-question-mark" height="2.5rem" />
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
        </div>
        <span>Fav. fruit: strawberries!</span>
      </li>
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:waffle" height="2.5rem" />
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
    grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
    gap: 1rem;

    li {
      flex-grow: 1;
      flex-shrink: 1;
      max-width: 100%;
      min-height: 5rem;
      height: 5rem;
      padding: 1rem;
      backdrop-filter: blur(4px);
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
iconify-icon {
  filter: drop-shadow(0 1px 1px var(--eepy-color-primary))
}

@media screen and (max-width: 1199px) {
  #section-about-info {
    .info-list {
      grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    }
    h2 {
      text-align: center;
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