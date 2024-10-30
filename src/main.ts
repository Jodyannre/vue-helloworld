import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App);

// Configuración de directivas del usuario

// Sin argumentos
app.directive('font-size', {
    // el binding es un objeto que contiene la información de la directiva, los argumentos que trae el elemento
    beforeMount(el, binding) {
        el.style.fontSize = '70px';
    }
})

// Con value de los binds
app.directive('custom-size', {
    beforeMount(el, binding) {
        el.style.fontSize = binding.value + 'px';
    }
})

// Con args
app.directive('custom-color', {
    beforeMount(el, binding) {
        let color = 'black'
        switch (binding.arg) {
            case 'r':
                color = 'red'
                break
            case 'b':
                color = 'blue'
                break
            case 'g':
                color = 'green'
                break
        }
        el.style.color = color;
    }
})

app.directive('custom-font', {
    beforeMount: (el,binding) => {
        let size = 18;

        if (binding.modifiers.sm){
            size = 10;
        }else if (binding.modifiers.lg){
            size = 25;
        }else if (binding.modifiers.xxl){
            size = 72;
        }

        el.style.fontSize = size + 'px';

        if (binding.modifiers.red){
            el.style.color = 'red';
        }else if (binding.modifiers.blue){
            el.style.color = 'blue';
        }else if (binding.modifiers.green){
            el.style.color = 'green';
        }
    }
})

app.mount('#app')

