<template>
    <div class="login">
      <h1>Login page</h1>
      <button @click="goToHome">redirect push</button>
  <button @click="replaceWithHome">Home avec replace</button>
    </div>
    <div class="login">
    <h1>Login page</h1>
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="submitForm">Login</button>
  </div>

  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

  const router = useRouter();
  
  const goToHome = () => {
    router.push({ path: '/' })
  }
  
  const replaceWithHome = () => {
    router.replace({ path: '/' })
  }


  const authStore = useAuthStore();

const username = ref('');
const password = ref('');

const submitForm = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  const users = response.data;
  const user = users.find(u => u.username === username.value && u.username === password.value);
  if (user) {
    authStore.login(user);
    router.push({ path: '/' });
  } else {
    alert('Invalid username or password');
  }
};

  </script>

  <style>
  @media (min-width: 1024px) {
    .login {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>


  