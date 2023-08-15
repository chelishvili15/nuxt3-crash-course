<template>
    <Title>{{ post.title }} | {{ title }}</Title>

    <div class="container mx-auto w-1/2 py-8">
        <h3 class="text-3xl font-bold">
            {{ post.title }}
        </h3>
        <div class="post-meta text-gray-700 flex space-x-2 items-center">
            <div>{{ format(new Date(post.created_at), 'MMMM dd, yyyy') }}</div>
            <div>&middot;</div>
            <div>{{ post.user.name }}</div>
        </div>
        <div class="mt-4">
            {{ post.body }}
        </div>
    </div>
</template>

<script setup>
import { format } from 'date-fns'

const title = useState('title')
const route = useRoute()

// const { data: post } = await useFetch(`http://localhost:8000/api/posts/${route.params.id}`)

const post = await useNuxtApp().$apiFetch(`/api/posts/${route.params.id}`)
</script>

<style lang="scss" scoped>


</style>