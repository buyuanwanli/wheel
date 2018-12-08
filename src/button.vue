<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">

        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>

<style lang="scss">
    //$color: orange;
    .g-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        height: var(--button-height);
        font-style: var(--font-size);
        background: var(--button-bg);
        border: 1px solid var(--border-color);
        color: var(--color);
        padding: 0 1em;
        &:hover {
            color: var(--hover-color);
            background: var(--button-hover-bg);
        }
        &:active {
            outline: none;
            background: var(--active-color);
        }
        > .icon {
            order: 1;
            margin-right: .3em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            > .content {
                order: 1;
            }
        }

    }
</style>
