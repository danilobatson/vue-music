import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { store } from './stores/counter copy.js';

import App from './App.vue';
import router from './router';

import './assets/base.css';
import './assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(store);
app.use(router);

app.mount('#app');
