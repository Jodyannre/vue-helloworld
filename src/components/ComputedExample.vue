<template>
    <input type="text" v-model="message" />
    <h3>{{ message }}</h3>
    <h3>{{ reverse }}</h3>
</template>
  
<script lang="ts" setup>
    // Option API
    /*
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ComputedExample',
        data() {
            return {
                message: ''
            }
        },
        computed: {
            reverse(): string {
                return this.message.split('').reverse().join('');
            }
        }
    }) 
    */

    // Composition API
    /*
    import { defineComponent, ref, computed, Ref } from 'vue';

    export default defineComponent({
        name: 'ComputedExample',
        setup() {
            let message: Ref<string> = ref('');
            const reverse = computed(()=> message.value.split('').reverse().join(''));
            return { message, reverse }
        }
    }) 
    */
    // Composition API con setup
    
    import { ref, computed, Ref } from 'vue';

    let message: Ref<string> = ref('');
    const reverse = computed(()=> message.value.split('').reverse().join(''));

</script>
  
<style scoped>
</style>
  