<template>
    <label v-font-size>Subtotal</label>
    <input type="number" v-model="subtotal" />
    <h3 v-custom-size="30" v-custom-color:g> Total impuestos a pagar: {{ totalVat }} ({{ vat }} %)</h3>
    <h3 v-custom-font.lg.blue> Prueba de modificadores personalizados</h3>
</template>
  
<script lang="ts" setup>
    import {ref, Ref, computed} from 'vue';

    const vat = 21
    let subtotal: Ref<number> = ref(0);
    const totalVat = computed(()=> (subtotal.value * vat) / 100);
</script>
  
<style scoped>
</style>
  