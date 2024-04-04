<template>
    <div class="login">
      <h1>Login page</h1>
      <button @click="goToHome">redirect push</button>
  <button @click="replaceWithHome">Home avec replace</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter();
  
  const goToHome = () => {
    router.push({ path: '/' })
  }
  
  const replaceWithHome = () => {
    router.replace({ path: '/' })
  }
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


  