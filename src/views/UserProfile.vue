<template>
    <div>
    <h2>User Information</h2>
    <p><strong>ID:</strong> {{ user.id }}</p>
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Username:</strong> {{ user.username }}</p>
    <p><strong>Email:</strong> {{ user.email }}</p>
    <h3>Address</h3>
    <p><strong>Street:</strong> {{ user.address?.street }}</p>
    <p><strong>Suite:</strong> {{ user.address?.suite }}</p>
    <p><strong>City:</strong> {{ user.address?.city }}</p>
    <p><strong>Zipcode:</strong> {{ user.address?.zipcode }}</p>
    <p><strong>Geo:</strong> Lat {{ user.address?.geo?.lat }}, Lng {{ user.address?.geo?.lng }}</p>
    <p><strong>Phone:</strong> {{ user.phone }}</p>
    <p><strong>Website:</strong> <a :href="`http://${user.website}`">{{ user.website }}</a></p>
    <h3>Company</h3>
    <p><strong>Name:</strong> {{ user.company?.name }}</p>
    <p><strong>Catchphrase:</strong> {{ user.company?.catchPhrase }}</p>
    <p><strong>BS:</strong> {{ user.company?.bs }}</p>
    </div>
</template>
 
<script setup lang="ts">
import { ref, onMounted,computed } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const user = ref({});
const route = useRoute();
 const id =route.params.id;

onMounted(async () => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  user.value = response.data;
});
</script>