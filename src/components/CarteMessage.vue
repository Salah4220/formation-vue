<template>
    
    <div>
      {{ titre }}
    </div>
    <p>ceci est une carte </p></br>
    <button @click="supprimer">Supprimer</button>

  </template>
  
  <script setup lang="ts">
   import { ref,onMounted ,onUpdated,onUnmounted} from 'vue'
     
       defineProps(['titre']);
       const emit = defineEmits(['supprimer'])
       const supprimer = () => emit('supprimer', 'carte supprimée')

       onMounted(() => {
          console.log('here we go!!');
      });
      onUnmounted(() => {
          console.log('oh no!!');
      });
      onUpdated(() => {
          console.log('something is happening!!');
      });
  </script>
  
  <style scoped>
   
  </style>