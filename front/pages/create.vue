<template>
    <div class="container mx-auto w-1/3 mt-20">
        <ul v-if="errors.length" class="list-disc list-inside text-red-600 text-sm mb-10">
            <li v-for="(error, index) in errors" :key="index">
                {{ error }}
            </li>
        </ul>
        <div class="mb-10">
            <h3 class="mb-1 font-semibold">Title:</h3>
            <input v-model="title" type="text" class="h-10 px-4 w-full outline-1 outline-blue-200 rounded-lg shadow">
        </div>

        <div class="mb-5">
            <h3 class="mb-1 font-semibold">Body:</h3>
            <textarea v-model="body" rows="10" cols="10" class="px-4 py-2 w-full outline-blue-200 rounded-lg shadow"></textarea>
        </div>

        <div @click="createPost" class="cursor-pointer bg-blue-500 inline px-6 py-2 text-white rounded">Create Post</div>
    </div>
</template>

<script setup>
const title = ref('')
const body = ref('')
const errors = ref([])

const createPost  = async () => {
    
    try {
        const posts = await useNuxtApp().$apiFetch('/api/post', {
            method: 'POST',
            body: {
                title: title.value,
                body: body.value
            }
        })

        title.value = ''
        body.value = ''

        alert('created ne post')

        useRouter().push('/')
    } catch(err) {
        console.log(err.data)
        errors.value = Object.values(err.data.errors).flat()
    }
}
</script>