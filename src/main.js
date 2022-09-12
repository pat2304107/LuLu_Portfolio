import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/style.scss';
import '@fontsource/m-plus-1p/300.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);
app.use(VueAxios, axios);
app.mount('#app');
