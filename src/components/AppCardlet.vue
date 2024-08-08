<template>
  <div class="eepy-cardlet">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.eepy-cardlet {
  padding: 0 .5rem 0 .25rem;
  
  background-color: var(--eepy-color-cardlet);
  color: var(--white);
  //border: 1px solid var(--eepy-color-secondary);
  //box-shadow: 0 1px 2px rgba(0,0,0,0.5);
  border-radius: 8px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 2rem;
  gap: 6px;

  font-family: Dosis;
  font-weight: 600;
}
</style>