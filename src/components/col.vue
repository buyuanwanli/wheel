<template>
    <div class="col"
         :class="colClass"
         :style="colPadding">
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        });
        return valid
    };
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
            },
            pad: {type: Object, validator,},
            narrowPc: {type: Object, validator,},
            pc: {type: Object, validator,},
            widePc: {type: Object, validator,}
        },
        methods: {
            createClass(spanAndOffset, string = '') {
                if (!spanAndOffset) {
                    return []
                }
                let array = [];
                if (spanAndOffset.span) {
                    array.push(`col-${string}-${spanAndOffset.span}`)
                }
                if (spanAndOffset.offset) {
                    array.push(`offset-${string}-${spanAndOffset.offset}`)
                }
                return array
            }
        },
        computed: {
            colClass() {
                let {span, offset, pad, narrowPc, pc, widePc} = this;
                return [
                    ...this.createClass(span, offset),
                    ...this.createClass(pad, 'pad'),
                    ...this.createClass(narrowPc, 'narrow-pc'),
                    ...this.createClass(pc, 'pc'),
                    ...this.createClass(widePc, 'wide-pc')
                ]
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
        border: 1px solid olivedrab;
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
        @media (min-width: 577px) {
            $class-prefix: col-pad-;
            @for $i from 1 through 24 {
                &.#{$class-prefix}#{$i} {
                    width: ($i/24)*100%;
                }
            }
            $class-prefix: offset-pad-;
            @for $i from 1 through 24 {
                &.#{$class-prefix}#{$i} {
                    margin-left: ($i/24)*100%;
                }
            }
        }
        @media (min-width: 769px) {
            $class-prefix: col-narrow-pc-;
            @for $i from 1 through 24 {
                &.#{$class-prefix}#{$i} {
                    width: ($i/24)*100%;
                }
            }
            $class-prefix: offset-narrow-pc-;
            @for $i from 1 through 24 {
                &.#{$class-prefix}#{$i} {
                    margin-left: ($i/24)*100%;
                }
            }
        }
        @media (min-width: 993px) {
            $class-prefix: col-pc-;
            @for $i from 1 through 24 {
                &.#{$class-prefix}#{$i} {
                    width: ($i/24)*100%;
                }
            }
            $class-prefix: offset-pc-;
            @for $i from 1 through 24 {
                &.#{$class-prefix}#{$i} {
                    margin-left: ($i/24)*100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-prefix: col-wide-pc-;
            @for $i from 1 through 24 {
                &.#{$class-prefix}#{$i} {
                    width: ($i/24)*100%;
                }
            }
            $class-prefix: offset-wide-pc-;
            @for $i from 1 through 24 {
                &.#{$class-prefix}#{$i} {
                    margin-left: ($i/24)*100%;
                }
            }
        }
    }

</style>
