<template>
    <div>
        Home page

        <button @click="buttonClicked">
            Click me
        </button>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';


const route = useRoute()
const router = useRouter()

function buttonClicked() {
    console.log('do work')
    router.push({name: 'info'})
}

</script>

<style scoped lang="scss">

</style>