import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Login from './components/Login.vue';
import Top from './components/Top.vue';

// ルート定義
const routes = [
  {
    path: '/welcome',
    name: 'Welcome',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Top',
    component: Top
  }
];

// ルーターインスタンスの作成
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
export default router;