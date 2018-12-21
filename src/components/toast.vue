<template>
    <div class="wrapper" :class="toastClass">
        <div class="toast" ref="toast">
            <div class="msg">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">
            {{closeButton.text}}
        </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UToast",
        props: {
            autoClose: {
                type: [Boolean, Number],
                default: 5,
                validator(value) {
                    return value === false || typeof value === "number";
                }
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
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoClose * 1000)
                }
            },
            updateStyle() {
                this.$nextTick(() => {
                    this.$refs.line.style.height =
                        `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove();
                this.$emit('close');
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this)
                }
            }
        },
        computed: {
            toastClass() {
                return {
                    [`position-${this.position}`]: true
                }
            }
        },
        mounted() {
            this.updateStyle();
            this.execAutoClose();
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, .5);
    $color: #fff;
    $animation-time: .3s;
    $animation-style: linear;
    @keyframes slide-up {
        0% {opacity: 0;transform: translateY(100%);}
        100% {opacity: 1;transform: translateY(0);}
    }

    @keyframes slide-down {
        0% {opacity: 0;transform: translateY(-100%);}
        100% {opacity: 1;transform: translateY(0);}
    }

    @keyframes slide-in {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    .wrapper {position: fixed;left: 50%;transform: translateX(-50%);

        &.position-top {top: 0;

            .toast {animation: slide-down $animation-time $animation-style;
                border-top-left-radius: 0;border-top-right-radius: 0;}
        }

        &.position-bottom {bottom: 0;

            .toast {animation: slide-up $animation-time $animation-style;
                border-bottom-left-radius: 0;border-bottom-right-radius: 0;}
        }

        &.position-middle {animation: slide-in $animation-time $animation-style;
            top: 50%;transform: translate(-50%, -50%)}

        .toast {display: flex;border-radius: 5px;
            align-items: center;font-size: $font-size;
            line-height: 1.8;min-height: $toast-min-height;
            background: $toast-bg;color: $color;
            box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, .8);

            .msg {padding: .5em 1em;}

            .close {flex-shrink: 0;padding-right: .5em;}

            .line {border: .5px solid $color;height: 100%;margin: 0 .5em;}
        }
    }

</style>
