<template>
  <span>_</span>
</template>

<style scoped lang="scss">
span {
  animation: 1s linear infinite forwards blink;
  animation-timing-function: steps(1, end);
}

@keyframes blink {
  0%,
  100% {
    color: white;
  }
  50% {
    color: transparent;
  }
}
</style>
