import { createRouter, createWebHistory } from 'vue-router';
import WomensShopPage from './views/WomensShopPage.vue';
import HomePage from './views/HomePage.vue'; // your main page

const routes = [
  { path: '/', component: HomePage },
  { path: '/women', component: WomensShopPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;