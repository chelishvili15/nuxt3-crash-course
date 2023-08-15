<template>
    <div class="container mx-auto w-1/2 py-8 divide-y divide-gray-300 space-y-8">
        <PostItem v-for="post in posts" :key="post.id" :post="post"/>
    </div>
</template>

<script setup>
// const { data: posts } = await useFetch('http://localhost:8000/api/posts') 

const posts = await useNuxtApp().$apiFetch('/api/posts')
</script>

<style lang="scss" scoped>


</style>