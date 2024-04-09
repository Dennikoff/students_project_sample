import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/main.scss';
import router from '@/router/router'
import 'primevue/resources/themes/aura-light-green/theme.css'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button'
const app = createApp(App);


app.use(router);
app.use(PrimeVue);

app.component('Button', Button);

app.mount('#app');

