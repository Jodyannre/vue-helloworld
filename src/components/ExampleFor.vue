<template>
    <ul>
        <li v-for="country in countries" :key="country.code">{{country.name}}</li>
    </ul>
    
</template>

<script lang="ts" setup>
    import {ref, Ref} from 'vue';

    interface ICountry {
        code: string;
        name: string;
    }

    let countries: Ref<Array<ICountry>> = ref([
        {
            code: 'es',
            name: 'Spain'
        },
        {
            code: 'fr',
            name: 'France'
        },
        {
            code: 'it',
            name: 'Italy'
        },
        {
            code: 'pt',
            name: 'Portugal'
        },
        {
            code: 'de',
            name: 'Germany'
        },
        {
            code: 'en',
            name: 'England'
        }

    ]);
</script>


<style scoped>
</style>