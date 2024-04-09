<template>
    <div class="posts-container">
        <input type="number" v-model="postMaximum">
        <Button label="name" @click="someAction"/>
        <ul class="posts-list">
            <li v-for="postItem in filtredArr" :key="postItem.id">
                <div>{{ postItem.id }}</div>
                <div>{{ postItem.body }}</div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import type {Post} from '@/ interfaces/post'

const postMaximum = ref(100)

const posts = ref<Post[]>([])

const someAction = () => {
    console.log('work')
}


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
    
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts.value = response.data;
    console.log(posts.value)
    
})

onUnmounted(() => {
    console.log('unmount')
})



const filtredArr = computed(() => {
    return posts.value.filter((value) => value.id < postMaximum.value)
})
</script>

<style scoped lang="scss">
.posts-container {
    margin-top: 5rem;
}

.posts-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    li {
        border: 1px solid red;
    }
}
</style>