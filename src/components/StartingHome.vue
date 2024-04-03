<template>
   <H1>home</H1>
   <div>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <StartingVue />
      <div v-if="showCard">
        <Carte @delete="handleDelete" />
      </div>
    </div>
  </template>
   
  <script setup lang="ts">
  import StartingVue from '../components/StartingVue.vue'
  import Carte from '../components/CarteMessage.vue'
  import { ref } from 'vue'
  const showCard = ref(true)
  const handleDelete = () => {
    console.log('Carte supprimée')
    showCard.value = false
  }
  </script>
   
  <style scoped></style>