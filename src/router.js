import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Login from './components/Login.vue';

// ルート定義
const routes = [
  {
    path: '/',
    name: 'Top',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
];

// ルーターインスタンスの作成
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
export default router;