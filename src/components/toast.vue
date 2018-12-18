<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "UToast"
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
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
        height: $toast-height;
        background: $toast-bg;
        color: $color;
        padding: 1em;
        box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, .8);
        border-radius: 5px;
    }
</style>
