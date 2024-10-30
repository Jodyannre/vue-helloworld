<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>


<script lang="ts" setup>
    /* Formato Composition API*/
    import { /*defineComponent,*/ ref, Ref } from 'vue';
    /* Sin el setup se necesita importar tambien el defineComponent*/
    /*
    export default defineComponent({
        name: 'CounterOption',
        setup(){
            let counter: Ref = ref(0);
            const addCounter = (): void => {
                counter.value++
            };
            return {
                counter,
                addCounter
            }
        }     
    })
    */

    /* Con el setup en el script */
    let counter: Ref = ref(0);
    const addCounter = (): void => {
        counter.value++
    };
</script>