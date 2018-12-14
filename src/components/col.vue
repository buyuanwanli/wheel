<template>
    <div class="col"
         :class="[
         span&&`col-${span}`,
         offset&&`offset-${offset}`]"
         :style="{
         paddingLeft:gutter/2+'px',
         paddingRight:gutter/2+'px'}">
        <div style="border:1px solid #17e0e4;height: 100px;
">
        <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UCol",
        data() {
            return {
                gutter: 0
            }
        },
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        width: 100%;

        $class-prefix: col-;
        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i} {
                width: ($i/24)*100%;
            }
        }
        $class-prefix: offset-;
        @for $i from 1 through 24 {
            &.#{$class-prefix}#{$i} {
                margin-left: ($i/24)*100%;
            }
        }
    }
</style>
