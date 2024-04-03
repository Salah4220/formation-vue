<template>
  <p>{{msg}}</p>
  <ul>
	<li> <a v-bind:href="url1">DuckDuckGo 🦆</a> </li>
	<li> <a v-bind:href="url2">Ecosia 🌳</a> </li>
  <li> <a v-bind:href="url3">Brave Search 🛡️</a> </li>
</ul>
<button v-on:click="sayHello">Say Hello</button>
  <button @click="handleClick($event,'Moi')">Say Hello</button>
  <div v-html="htmlContent"></div>
  <input v-model="message" />
  {{ message }}
  <button @click="message = 'reset'">Reset</button>
</template>

<script setup lang="ts">
 import { ref } from 'vue'
   const msg = ref("Salah")
   const message =ref ()
   setTimeout(() => {
    (msg.value="un V pour dire Vue et pas Valence")
   }, 2000);
    const url1 = 'https://www.toto.com';
    const url2 = 'https://www.tutu.com';
    const url3 = 'https://www.tata.com';
    const htmlContent = '<h6>Exemple de contenu HTML</h6>'

    const sayHello = () => {
  alert('Bonjour !');
     
};
const handleClick =(event: Event, who: string) =>{
      alert('ça click, de la part de '+who)
      console.log(event)
     };
    

</script>

<style scoped>
  p {
    font-size: 18px;
    color: blue;
  }
</style>