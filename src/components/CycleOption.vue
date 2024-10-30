

<template>
    <div>Hola mundo</div>
</template>
  
<script lang="ts" setup>
    //Option API
    /*
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CycleOption',
        created() {
            console.log('CycleOption created');
        },
        mounted() {
            console.log('CycleOption mounted');
        },
        updated() {
            console.log('CycleOption unmounted');
        },
        unmounted() {
            console.log('CycleOption unmounted');
        }
    });
    */

    //Composition API - utiliza hooks - El hook tiene una función callback que se ejecuta cuando se ejecuta el hook
    import { onMounted, onUpdated } from 'vue';

    onMounted(() => {
        console.log('CycleOption mounted');
    });

    onUpdated(() => {
        console.log('CycleOption updated');
    });
</script>
  
<style>
</style>
  