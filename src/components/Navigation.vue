<template>
    <nav class="navigation-list">
        <ul>
            <li>
                <RouterLink :to="{name: 'home'}">
                    Home
                </RouterLink>
            </li>
            <li>
                <RouterLink :to="{name: 'info'}">
                    Info
                </RouterLink>
            </li>
            <li>
                <RouterLink :to="{name: 'posts'}">
                    Posts
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>