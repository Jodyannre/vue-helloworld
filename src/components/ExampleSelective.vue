<template>
    <!-- El v-show es para elementos que cambian constantemente, el v-if es para elementos que no cambian constantemente -->
   <!--  <h3 v-if="age < 18"> Eres menor de edad</h3>
    <h3 v-else> Eres mayor de edad</h3> -->
    <h3 v-show="age < 18"> Eres menor de edad</h3>
    <h3 v-show="age > 18"> Eres mayor de edad</h3>
</template>

<script lang="ts" setup>
    let age = 10;
</script>


<style scoped>
</style>