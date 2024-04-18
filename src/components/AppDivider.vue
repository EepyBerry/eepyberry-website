<template>
    <hr class="eepy-divider" :class="{'w': !!w, 'h': !!h}">
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
    border: 1px solid var(--eepy-color-text);
    background-color: var(--eepy-color-text);
    border-radius: 4px;
    opacity: 0.5;
    &.h { height: #{v-bind(h)}; margin: 0 4px; }
    &.w { width:  #{v-bind(w)}; margin: 4px 0; }

    &[dotted] { border-style: dotted; background-color: transparent; }
    &[dashed] { border-style: dashed; background-color: transparent; }
}
</style>