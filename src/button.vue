<template xmlns="">
    <button class="u-button" :class="{[`icon-${iconPosition}`]:true}">
        <u-icon name="loading" class="loading"></u-icon>
        <u-icon v-if="icon" :name="icon"></u-icon>
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
    @keyframes circle {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .u-button {
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
        border-radius: var(--border-radius);
        &:hover {
            color: var(--hover-color);
            background: var(--button-hover-bg);
        }
        &:active {
            outline: none;
            background: var(--active-color);
        }
        > .u-icon {
            order: 1;
            margin-right: .3em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .u-icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            > .content {
                order: 1;
            }
        }
        .loading {
            animation: circle 2s linear infinite;
        }
    }
</style>
