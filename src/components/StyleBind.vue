<template>
    <p v-bind:style="{backgroundColor: '#ccc', color: c,}">El mensaje se ha enviado satisfactoriamente.</p>
    <button v-on:click="handleClick()">Cambiar color</button>
</template>


<script lang="ts" setup>
    import { ref } from 'vue';
    let c = ref('#fff');

    const handleClick = () => {
        c.value = '#ff0000';
    }
</script>

<style scoped>

</style>