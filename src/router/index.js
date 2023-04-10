import { createRouter, createWebHistory } from "vue-router";
import OpenAi from '../views/OpenAi'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact'
import CartPage from '../views/CartPage'
import historyPage from '../views/history'
import accountPage from '../views/account'



const routes = [
  {
    path: '/',
    name: 'OPEN AI',
    component: OpenAi,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  },
  {
    path: '/history',
    name: 'historyPage',
    component: historyPage,
  },
  {
    path: '/account',
    name: 'accountPage',
    component: accountPage,
  },

];

// 創建 Vue Router 實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
