<template>
    <span class="eepy-chip">
        <slot></slot>
    </span>
</template>

<style scoped lang="scss">
.eepy-chip {
    padding: .25rem .5rem;
    display: flex;
    flex-direction: row;
    gap: 4px;
    
    background-color: var(--eepy-color-background);
    border-radius: .5rem;
    align-self: flex-start;
}
</style>