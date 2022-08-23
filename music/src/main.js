import { createApp } from 'vue';
import { store } from './stores/index';
import validation from './includes/validation';
import { auth } from './includes/firebase';
import Icon from '@/directives/icon';

import App from './App.vue';
import router from './router';

import './assets/base.css';
import './assets/main.css';

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(store);
    app.use(router);
    app.use(validation);
    app.directive('icon', Icon);

    app.mount('#app');
  }
});
