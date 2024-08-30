<template>
  <section id="section-about-interests">
    <h2>interests and stuff!</h2>
    <ul class="interests-list">
      <li class="space">
        <iconify-icon mode="svg" icon="noto:ringed-planet" height="2.5rem" />
      </li>
      <li class="scpfoundation">
        <iconify-icon icon="simple-icons:scpfoundation" height="2.5rem" aria-hidden="true" />
      </li>
      <li class="boardgames">
        <iconify-icon mode="svg" icon="noto:game-die" height="2.5rem" />
      </li>
      <li class="videogames">
        <iconify-icon icon="noto:video-game" height="2.5rem" aria-hidden="true" />
      </li>
      <li class="videogames">
        <iconify-icon icon="noto:bicycle" height="2.5rem" aria-hidden="true" />
      </li>
      <li class="videogames">
        <iconify-icon icon="noto:lotus" height="2.5rem" aria-hidden="true" />
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
    grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
    gap: 1rem;

    li {
      position: relative;
      max-width: 100%;
      height: 5rem;
      padding: 1rem;
      background: var(--eepy-theme-monochrome);
      border: 1px solid var(--eepy-theme-accent-half);
      border-radius: 8px;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      iconify-icon {
        width: 2.5rem;
        height: 2.5rem;
        filter: drop-shadow(0 1px 1px #000);
      }
    }
  }
}
</style>
