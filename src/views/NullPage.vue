<template>
  <div>
    <p>There's nothing for you here. <span>not yet.</span></p>
    <p>Turn back.</p>
  </div>
</template>
<style scoped lang="scss">
div {
  z-index: 1000;
  position: absolute;
  inset: 0;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
}
span {
  display: none;
}
</style>