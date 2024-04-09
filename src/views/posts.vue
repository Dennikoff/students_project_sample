<template>
    <div>
        Posts
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, onUnmounted } from 'vue';


onMounted(async () => {
    // try {
    //     let promise = await new Promise((resolve, reject) => {
    //         setTimeout(() => resolve('1234'), 3000)
    //         setTimeout(() => reject('error in promise'), 2000)
    //     })

    //     console.log(promise)
    // } catch (e) {
    //     console.log(e)
    // }
    
})

onUnmounted(() => {
    console.log('unmount')
})
</script>

<style scoped>

</style>