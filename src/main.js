import { createApp } from 'vue';
import App from './App.vue';
import Aos from 'aos';
import './assets/styles/style.scss';
import '@fontsource/m-plus-1p/300.css';

Aos.init();

const app = createApp(App);
app.mount('#app');
