import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);

  function login(userData) {
    user.value = userData;
  }

  function logout() {
    user.value = null;
  }

  const isLoggedIn = computed(() => !!user.value);
  
  const currentUser = computed(() => user.value);

  const fullAddress = computed(() => {
    const currentUserValue = user.value;
    if (currentUserValue) {
      return `${currentUserValue.address.suite}, ${currentUserValue.address.street}, ${currentUserValue.address.zipcode}, ${currentUserValue.address.city}`;
    }
    return '';
  });

  return {
    user,
    login,
    logout,
    isLoggedIn,
    currentUser,
    fullAddress
  };
});