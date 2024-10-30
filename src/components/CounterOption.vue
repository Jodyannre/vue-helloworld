
<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>


<script lang="ts">
    /* Formato Options API */

    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'CounterOption',
        components:{/* Componentes que se esten utilizando*/},
        data(){
            let counter = 0;
            return {
                counter
            }
        },
        methods:{
            addCounter(){
                this.counter++;
            }
        }
    })
</script>

<style scoped>
</style>