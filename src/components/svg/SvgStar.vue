<template>
  <div class="svg-wrapper">
    <svg
      v-if="variant === '4p'"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 44.25 42.56"
    >
      <path
        class="cls-1"
        d="M25.69,1.57l6.7,7.32,9.04,4.11c2.58,1.17,3.6,4.31,2.2,6.77l-4.9,8.64-1.12,9.86c-.32,2.82-2.98,4.75-5.76,4.18l-9.73-1.99-9.73,1.99c-2.78.57-5.44-1.37-5.76-4.18l-1.12-9.86L.63,19.77c-1.4-2.46-.38-5.6,2.2-6.77l9.04-4.11,6.7-7.32c1.91-2.09,5.21-2.09,7.12,0Z"
      />
    </svg>
    <svg
      v-else-if="variant === '5p'"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 46.73 46.73"
    >
      <path
        class="cls-1"
        d="M27.58,2.37l6.33,10.45,10.45,6.33c3.16,1.92,3.16,6.5,0,8.42l-10.45,6.33-6.33,10.45c-1.92,3.16-6.5,3.16-8.42,0l-6.33-10.45-10.45-6.33c-3.16-1.92-3.16-6.5,0-8.42l10.45-6.33,6.33-10.45c1.92-3.16,6.5-3.16,8.42,0Z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps<{ variant: string }>();
</script>

<style scoped lang="scss">
.cls-1 {
  fill: #cfb5b5;
  stroke-width: 0px;
}
</style>
