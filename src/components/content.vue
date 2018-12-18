<template>
    <div class="content">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "UContent"
    }
</script>

<style lang="scss" scoped>
    .content {
        flex-grow: 2;
    }
</style>
