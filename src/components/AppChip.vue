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
    
    border: 1px solid var(--eepy-color-accent);
    border-radius: 8px;
    align-self: flex-start;
}
</style>