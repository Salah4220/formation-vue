<template>
  <template v-if="authStore.user.name">
    Hello {{ authStore.user.name }}
  </template>
  <template v-else>
    <RouterLink to="/login">Login</RouterLink>
  </template>

  <div :class="isDark && 'dark-mode'">
    <button @click="toggle">Basculer le mode</button>
  </div>

  <ul>
    <li>
      <RouterLink to="/about">À propos</RouterLink>
    </li>
    <li>
      <RouterLink to="/login">login</RouterLink>
    </li>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
  </ul>

</template>
<script setup lang="ts">
import { useAuthStore } from '@/stores/auth';
import useDarkMode from '@/Composables/userDarkMode';
const authStore = useAuthStore();
const { isDark, toggle } = useDarkMode();
</script>
<style></style>