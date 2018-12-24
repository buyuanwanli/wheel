<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "UTab",
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'row',
                validator(value) {
                    return ['row', 'column'].indexOf(value) >= 0
                }
            }
        },
        created() {
            // this.$emit('update:selected','xxx')
        }
    }
</script>

<style scoped>

</style>
