// auth.js

import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';
import type { User } from '@/interfaces/user.interface'; 

export const useAuthStore = defineStore('auth', () => {
  const user =ref<User>({} as User);

  function login(userData: User) {
    user.value=userData
 
  }

  function logout() {
   user.value={} as User
  }
 
  return {
    user,
    login,
    logout,
  };
});
