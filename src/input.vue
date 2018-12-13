<template>
    <!--:class="{'error'=error}"-->
    <div class="wrapper">
        <input type="text" :value="value" :class="{warning}" :disabled="disabled" :readonly="readonly"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)">
        <template v-if="warning">
            <icon name="warning" class="icon-warning"></icon>
            <span class="warningMessage">{{warning}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon';

    export default {
        name: "UInput",
        components: {Icon},
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            readonly: {
                type: Boolean,
                default: false
            },
            warning: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $gray: #666;
    $blue: #409EFF;
    $red: #FB6B91;
    $border-radius: 4px;
    $font-size: 12px;
    .wrapper {font-size: $font-size;display: inline-flex;
        justify-content: center;align-items: center;

        > input {margin: 10px;color: $gray;outline: none;height: $height;
            font-size: inherit;border: 1px solid $gray;
            border-radius: $border-radius;padding: 0 .5em;

            &:focus, &:hover {border: 1px solid $blue;}

            &[disabled], &[readonly] {border-color: #999;color: #999;
                cursor: not-allowed;}

            &.error {border: 2px solid $red;}
        }

        .icon-warning {fill: $red;}

        .warningMessage {color: $red;}
    }
</style>
