import { createRouter, createWebHistory } from 'vue-router';
import StartingHome from '../views/StartingHome.vue';
import About from '../views/AboutView.vue';
import UserList from '../views/UserList.vue';
import Login from '../views/Login.vue';

const routes = [
  { path: '/about', component: About },
  { path: '/', name: 'home', component: UserList },
  { path: '/login', name: 'login', component: Login }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;