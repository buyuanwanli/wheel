<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "UCol",
        props: {
            span: {
                type: [Number, String]
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;
        width: 100%;
        background: #16bac0;
        border: 1px solid #ff741b;

        $class-prefix: col-;
        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i} {
                width: ($i/24)*100%;
            }
        }
    }
</style>
