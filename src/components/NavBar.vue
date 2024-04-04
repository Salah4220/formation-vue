<template>
  <div>--{{authStore.user.name}}--</div>
<ul>
  <li><RouterLink to="/about">À propos</RouterLink></li>
  <li><RouterLink to="/login">login</RouterLink></li>
  <li><RouterLink to="/">Home</RouterLink></li> 
</ul>

  </template>
  <script setup lang="ts">
    import { useAuthStore } from '@/stores/auth';
    const authStore = useAuthStore();
  </script>
  <style>

  </style>
  