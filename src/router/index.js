import { createRouter, createWebHistory } from "vue-router";
import OpenAi from '../views/OpenAi';
import LazyLoadedComponent from '../views/LazyLoadedComponent';

const routes = [
  {
    path: '/',
    name: 'OPEN AI',
    component: OpenAi,
    meta: {
      title: 'OPEN AI'
    }
  },
  {
    path: '/loading',
    name: 'LazyLoadedComponent',
    component: LazyLoadedComponent,
  },
  // {
  //   path: '/account',
  //   name: 'accountPage',
  //   component: accountPage,
  // },

];

// 創建 Vue Router 實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
