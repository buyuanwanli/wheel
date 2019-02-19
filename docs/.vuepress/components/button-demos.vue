<template>
<div>
    <u-button :icon="setting">dsfds</u-button>
    <u-button :load="true">dsfds</u-button>
    <u-button>默认按钮</u-button>
    <pre>
        <code>
        <u-button :icon="setting">dsfds</u-button>
        <u-button :load="true">dsfds</u-button>
        <u-button>默认按钮</u-button>
        </code>
    </pre>
</div>
</template>

<script>
    import Button from '../../../src/components/button'

    export default {
        components:{
            'u-button':Button
        }
    }
</script>


