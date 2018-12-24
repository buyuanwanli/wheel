<template>
    <div class="tab-item">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "UTabItem",
        props: {
            disabled: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>

</style>
