<template>
    <Title>{{ title }}</Title>
    <div class="bg-gray-100 text-gray-900 min-h-screen">
        <nav class="bg-white shadow text-lg p-6">
            <div class="container mx-auto flex items-center justify-between px-6">
                <div>
                    <NuxtLink to="/">Logo</NuxtLink>
                </div>
                <div>
                    <ul class="flex space-x-12">
                        <li><NuxtLink to="/">Home</NuxtLink></li>
                        <li><NuxtLink to="/create">Create</NuxtLink></li>
                        <li><NuxtLink to="/about">About</NuxtLink></li>
                        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    </ul>
                </div>
            </div>
        </nav>

        <slot></slot>
    </div>
</template>

<script setup>
const title = useState('title', () => 'Nuxt3 blog')
</script>

<style lang="scss" scoped>


</style>