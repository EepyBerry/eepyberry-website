<template>
    <div class="eepy-tooltip-wrapper">
        <div ref="reference">
            <slot name="reference"></slot>
        </div>
        <div ref="floating" class="eepy-tooltip" role="tooltip">
            <slot name="tooltip"></slot>
        </div>
    </div>
</template>

<!------------------------------------------------------------>
<script setup lang="ts">
import { ref, useSlots } from 'vue';
import { useFloating } from '@floating-ui/vue';

const $props = defineProps<{ reference: any }>()
const $slots = useSlots()
console.log($slots.reference)

const floating = ref(null);
const {floatingStyles} = useFloating($props.reference, floating, {
    placement: 'right'
});
</script>

<!------------------------------------------------------------>
<style scoped lang="scss">
.eepy-tooltip {
    position: absolute;
    width: max-content;

    padding: 0 6px;
    border-radius: 4px;

    background-color: var(--eepy-color-tooltip);
    font-family: Dosis;
    font-weight: 600;
    color: var(--white);
}
</style>