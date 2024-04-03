<script setup lang="ts">
import StartingVue from './components/StartingVue.vue'
import NavBar from './components/NavBar.vue'
import CarteMessage from './components/CarteMessage.vue'
/*import UserList from './components/UserList.vue'*/
/*import { reactive, ref,computed,watch } from 'vue'

const unTitre = "send to carteMessage"
const message = 'la carte a été supprimé'

const showCarteMessage = ref(true); 

const handleMyClick = () => {
    showCarteMessage.value = false; 
}
const annuler = () => {
    showCarteMessage.value = true; 
}

const books = [
    { id: 1, title: "Les Misérables", emoji: "📖" },
    { id: 2, title: "Le Petit Prince", emoji: "🌟" },
    { id: 3, title: "1984", emoji: "👁️" },
    { id: 4, title: "Le Seigneur des Anneaux", emoji: "💍" },
    { id: 5, title: "Harry Potter", emoji: "⚡" }
];

const booksDetails = [
    {
        id: 1,
        title: "Les Misérables",
        emoji: "📖",
        genres: ["Roman", "Historique"],
    },
    {
        id: 2,
        title: "Le Petit Prince",
        emoji: "🌟",
        genres: ["Conte", "Philosophique"],
    },
    {
        id: 3,
        title: "1984",
        emoji: "👁️",
        genres: ["Science-fiction", "Politique"],
    },
    {
        id: 4,
        title: "Le Seigneur des Anneaux",
        emoji: "💍",
        genres: ["Fantasy", "Aventure"],
    },
    {
        id: 5,
        title: "Harry Potter",
        emoji: "⚡",
        genres: ["Fantasy", "Jeunesse"],
    }
];
const reactiveObject = reactive({count:0})
const doubledCount = computed(() => reactiveObject.count * 2);

const incrementCount = () => {
  reactiveObject.count++
}

watch(reactiveObject, (newreactiveObject, oldreactiveObject) => {
  console.log(newreactiveObject.count, oldreactiveObject.count);
});*/
</script>

<template>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <!--    <StartingVue/> 

    <CarteMessage v-if="showCarteMessage" :titre="unTitre" @supprimer="handleMyClick"></CarteMessage>
    <button @click="annuler">annuler suppression</button>
    <ul>
  <li v-for="item in books" :key="item.id">
    {{ item.emoji }}{{ item.title }}
  </li>
</ul>

<ul>
  <li v-for="item in booksDetails" :key="item.id">
    <p v-for="(id, title, emoji, genres) in item">  {{ id }}. {{ title }}.{{ emoji }}.{{ genres }}  </p>
  </li>
</ul>

<div>
    <p>Count: {{ reactiveObject.count }}</p>
    <p>Count: {{ doubledCount }}</p>
    <button @click="incrementCount">Increment</button>
  </div>  -->
  <div>

    <NavBar/>
  </div>
  <RouterView/>

</template>