import { createRouter, createWebHistory } from 'vue-router';
import StartingHome from '../views/StartingHome.vue';
import About from '../views/AboutView.vue';
import UserList from '../views/UserList.vue';
import Login from '../views/Login.vue';
import UserProfile from '../views/UserProfile.vue';

const routes = [
  { path: '/about', component: About },
  { path: '/', name: 'home', component: UserList },
  { path: '/login', name: 'login', component: Login },
  { path: '/user/:id', name: 'UserProfile', component: UserProfile }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;