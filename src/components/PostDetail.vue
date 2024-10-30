<template>
    <div class="post">
        <h3>{{ props.title }}</h3>
        <p>{{ props.content }}</p>
        <input type="text" v-model="message" />
        <button @click="handleClick()">Di hola</button>
    </div>
</template>
  
<script lang="ts" setup>
    // Composition API sin setup
    /*
    import { defineComponent, ref, Ref} from 'vue';
    export default defineComponent({
        name: 'PostDetail',
        props: {
            title: {
                type: String,
                required: true
            },
            content: {
                type: String,
                required: false,
                default: 'Este post no tiene contenido'
            }
        },
        emits: ['sayHi'],
        setup(props, {emit}) {
            let message: Ref<string> = ref('');
            const handleClick = () => {
                emit('sayHi', message.value);
            }
            return { props, message, handleClick }
        }
    });
    */

    // Composition API con setup
    import { defineProps, defineEmits, ref, Ref} from 'vue';

    const props = defineProps({
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            default: 'Este post no tiene contenido'
        }
    })

    const emit = defineEmits(['sayHi']);

    let message: Ref<string> = ref('');

    const handleClick = () => {
        emit('sayHi', message.value);
    }
</script>
  
<style scoped>
    .post {
        width: 300px;
        height: 200px;
        background-color: antiquewhite;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
    }
</style>
  