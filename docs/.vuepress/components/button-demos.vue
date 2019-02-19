<template>
    <div>
        <u-button :icon="setting">按钮一</u-button>
        <u-button :load="true">按钮二</u-button>
        <u-button>默认按钮</u-button>
        <pre>
        <code>{{content}}</code>
    </pre>
    </div>
</template>

<script>
    import Button from '../../../src/components/button'

    export default {
        components: {
            'u-button': Button
        },
        data() {
            return {
                content: `
                <u-button :icon="setting">按钮一</u-button>
                <u-button :load="true">按钮二</u-button>
                <u-button>默认按钮</u-button>
            `
            }
        }
    }
</script>


