<template>
    <p v-bind:class="{'danger':danger}">El mensaje se ha enviado satisfactoriamente.</p>
</template>


<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        'name': 'ClassBind',
        setup() {
            let danger = false;
            return { danger }
        }
    })
</script>

<style scoped>
.danger {
    color: red;
}
</style>