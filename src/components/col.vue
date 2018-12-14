<template>
    <div class="col"
         :class="colClass"
         :style="colPadding">
        <slot></slot>
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
        },
        computed: {
            colClass() {
                let {span, offset} = this;
                return [span && `col-${span}`,
                    offset && `offset-${offset}`]
            },
            colPadding() {
                let {gutter} = this;
                return {
                    paddingLeft: gutter / 2 + 'px',
                    paddingRight: gutter / 2 + 'px',
                }
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
