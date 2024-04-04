// auth.js

import { defineStore } from 'pinia';
import { ref, computed, reactive } from 'vue';
import type { User } from '@/interfaces/user.interface'; 

export const useAuthStore = defineStore('auth', () => {
  const user =reactive({} as User);

  function login(userData: User) {
    Object.assign(user,userData)
  }

  function logout() {
    Object.assign(user,null)
  }

  

 
  return {
    user,
    login,
    logout,
  };
});
