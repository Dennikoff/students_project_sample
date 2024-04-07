<script setup lang="ts">
import { ref } from 'vue';
import Counter1 from './components/counter1.vue'
import Counter2 from './components/counter2.vue'

const counter = ref(0);

const name = ref('denis');



</script>

<template>
  <main class="main-container">
    <Counter1 v-model="counter"/>
    <div class="name-container">

    
    {{ name }}
    <input type="text" v-model="name">
  </div>
  </main>
</template>

<style scoped>
.main-container {
  max-width: 400px;
  margin-inline: auto;
  padding-top: 6rem;
}

.name-container {
  margin-top: 2rem;
  display: flex; 
  flex-direction: column;
  gap: 2rem;
}
</style>
