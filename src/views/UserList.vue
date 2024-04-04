
<template>
    <div>
    <input type="text" v-model="searchTerm" placeholder="Rechercher..."/>
  </div>
 <div>
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
				{{ user.name }}
        <div><RouterLink :to="'/user/'+user.id">Profil</RouterLink></div>
			</li>
    </ul>
  </div>
</template>

  
  <script setup lang="ts">
import { ref, onMounted,computed } from 'vue';
import axios from 'axios';
import {type User} from  "@/interfaces/user.interface";
const users = ref<Array<User>>([]);
const searchTerm = ref("")

const filteredUsers = computed(() => {
  return users.value.filter(user => user.name.toLowerCase().includes(searchTerm.value.toLowerCase()));
});

onMounted(async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  users.value = response.data;
});
</script>