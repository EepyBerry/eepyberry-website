<template>
  <section id="section-about-interests">
    <h2>interests and stuff!</h2>
    <ul class="interests-list">
      <li class="space">
        <div>
          <iconify-icon mode="svg" icon="noto:ringed-planet" height="2.5rem" />
        </div>
        <span>Planets & Space!</span>
      </li>
      <li class="scpfoundation">
        <div>
          <iconify-icon icon="simple-icons:scpfoundation" height="2.5rem" aria-hidden="true" />
        </div>
        <span>SCP Foundation!</span>
      </li>
      <li class="boardgames">
        <div>
          <iconify-icon mode="svg" icon="noto:game-die" height="2.5rem" />
        </div>
        <span>Board Games!</span>
      </li>
      <li class="videogames">
        <div>
          <iconify-icon icon="noto:video-game" height="2.5rem" aria-hidden="true" />
        </div>
        <span>Video Games!</span>
      </li>
      <li class="videogames">
        <div>
          <iconify-icon icon="noto:bicycle" height="2.5rem" aria-hidden="true" />
        </div>
        <span>Bicycling!</span>
      </li>
      <li class="videogames">
        <div>
          <iconify-icon icon="noto:lotus" height="2.5rem" aria-hidden="true" />
        </div>
        <span>Yoga (sometimes)!</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
#section-about-interests {
  .interests-list {
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
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      font-family: Dosis;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1rem;

      &>div {
        width: 2.5rem;
        height: 2.5rem;
      }
      &>span {
        text-wrap: wrap;
      }
    }
  }
}
iconify-icon {
  filter: drop-shadow(0 1px 1px var(--eepy-color-primary))
}

@media screen and (max-width: 767px) {
  #section-about-interests {
    h2 {
      text-align: center;
    }
  }
}
</style>