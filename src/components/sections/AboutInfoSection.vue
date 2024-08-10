<template>
  <section id="section-about-info">
    <h2>byte-sized info!</h2>
    <ul class="info-list">
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:transgender-flag" height="2.5rem" />
        </div>
        <span>Came out as transfem in May 2024!</span>
      </li>
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:books" height="2.5rem" />
        </div>
        <span>Full-Stack Software&nbsp;Engineer!</span>
      </li>
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:artist-palette" height="2.5rem" />
        </div>
        <span>Does pixel art, digital painting & vector graphics!</span>
      </li>
      <li>
        <div>
          <iconify-icon mode="svg" icon="noto:woman-raising-hand" height="2.5rem" />
        </div>
        <span>Very, very smol :></span>
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    max-width: 100%;

    li {
      flex-grow: 1;
      flex-shrink: 1;
      max-width: 100%;
      min-width: 16rem;
      min-height: 5rem;
      height: 5rem;
      padding: 1rem;

      background: var(--eepy-color-accent-semi);
      //border: 1px solid var(--eepy-color-accent-half);
      border-radius: 8px;
      backdrop-filter: blur(4px);

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
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
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 1199px) {
  #section-about-info {
    h2 {
      text-align: center;
    }
    .info-list {
      li {
        min-width: 0;
        min-height: 3.5rem;
        height: 3.5rem;
        flex-direction: row;
        justify-content: space-between;

        & > span {
          text-align: end;
        }
      }
    }
  }
}
</style>