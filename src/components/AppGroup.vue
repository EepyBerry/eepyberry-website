<template>
  <div class="eepy-group">
    <slot name="icon"></slot>
    <ul class="eepy-group-list">
      <slot name="items">
        <li>LIST_ITEM</li>
      </slot>
    </ul>
  </div>
</template>

<style lang="scss">
.eepy-group {
  padding: 1rem;
  min-height: 3rem;

  background: var(--eepy-theme-background);
  border: 1px solid var(--eepy-theme-accent-threequarter);
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  iconify-icon {
    color: var(--eepy-theme-accent);
    width: 2.5rem;
    height: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    flex: 1;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    li {
      flex: 1;
      position: relative;

      height: 3rem;
      padding: 0.5rem 0.75rem;

      background: var(--eepy-theme-item);
      //border: 1px solid var(--eepy-theme-accent-threequarter);
      border-radius: 6px;
      color: var(--eepy-color-white);

      font-family: Dosis;
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 1rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      iconify-icon {
        color: var(--eepy-color-white);
        filter: drop-shadow(0 1px 1px #000);
      }
    }
  }
}
.eepy-group.reverse {
  flex-direction: row-reverse;
}

@media screen and (max-width: 567px) {
  .eepy-group {
    flex-direction: column;
  }
}
</style>