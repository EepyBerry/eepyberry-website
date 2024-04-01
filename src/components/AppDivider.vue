<template>
    <hr :class="{'w': !!w, 'h': !!h}">
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
defineProps({
    w: { type: String, default: undefined },
    h: { type: String, default: undefined }
})
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
hr {
    opacity: 0.5;
    border: 1px solid var(--eepy-color-text);
    background-color: var(--eepy-color-text);
    border-radius: 4px;
    &.h { height: #{v-bind(h)}; margin: 0 4px; }
    &.w { width:  #{v-bind(w)}; margin: 4px 0; }
}
</style>