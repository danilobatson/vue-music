import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Manage from '@/views/Manage.vue';
import { auth } from '@/includes/firebase';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  {
    path: '/manage-music',
    name: 'manage',
    component: Manage,
    meta: { requiresAuth: true },
  },
  { path: '/manage', redirect: { name: 'manage' } },
  { path: '/:catchAll(.*)*', redirect: { name: 'home' } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
});

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next();
    return;
  }
  if (auth.currentUser) {
    next();
  } else {
    next({ name: 'home' });
  }
});
export default router;
