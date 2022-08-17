import { createApp } from 'vue';
import {store} from './stores/index';
import validation from './includes/validation';

import App from './App.vue';
import router from './router';

import './assets/base.css';
import './assets/main.css';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(validation);

app.mount('#app');
