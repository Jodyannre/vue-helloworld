<template>
    <form>
        <input type="text" v-model="inputText" />
        <input type="checkbox" v-model="agree" /> Acepto los términos y condiciones
        <select v-model="country">
            <option value="Spain">Spain</option>
            <option value="France">France</option>
            <option value="Italy">Italy</option>
        </select>
    </form>
    <h1>{{ inputText }}</h1>
</template>

<script lang="ts" setup>
    import { ref,Ref } from 'vue';
    let inputText:Ref<string> = ref('');
    let agree:Ref<boolean> = ref(true);
    let country:Ref<string> = ref('Spain');
</script>


<style scoped>
</style>