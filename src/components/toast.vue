<template>
    <div class="toast" ref="wrapper">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default"></div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "UToast",
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 300
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭', callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            close() {
                this.$el.remove();
                this.$destroy()
            },
            onClickClose() {
                this.close();
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
            this.$nextTick(() => {
                this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height
                    }px`
            })
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, .5);
    $color: #fff;
    .toast {
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        background: $toast-bg;
        color: $color;
        box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, .8);
        border-radius: 5px;
        padding: 0 1em;

        .close {
            flex-shrink: 0;
        }

        .line {
            border: .5px solid $color;
            height: 100%;
            margin: 0 .5em;
        }
    }


</style>
