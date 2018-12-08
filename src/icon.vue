<template>
    <svg class="u-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "icon",
        props: {
            name: {}
        }
    }
</script>

<style scoped>
    .u-icon {
        width: 1em;
        height: 1em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
