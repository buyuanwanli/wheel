<template>
    <svg class="u-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "UIcon",
        props: {
            name: {}
        }
    }
</script>

<style lang="scss" scoped>
    .u-icon {
        width: 1.2em;
        height: 1.2em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
