<script setup lang="ts">
import { ref } from 'vue';
import Navigation from '@/components/Navigation.vue'



</script>

<template>
  <main class="main-container">
    <Navigation/>
    <RouterView/>
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
