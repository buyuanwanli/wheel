<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>

</template>

<script>
    export default {
        name: "Ulayout",
        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'USider') {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        border: 2px solid green;
        flex-grow: 1;

        &.hasSider {
            flex-direction: row;
        }
    }
</style>
