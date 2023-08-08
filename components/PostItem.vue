<template>
    <div class="post-container py-8">
        <h3 class="text-3xl font-bold">
            <NuxtLink to="/posts/1">Title of post</NuxtLink>
        </h3>
        <div class="post-meta text-gray-700 flex space-x-2 items-center">
            <div>08 Aug 2023</div>
            <div>&middot;</div>
            <div>Daviti Chelishvili</div>
        </div>

        <div class="post-preview leading-relaxed mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente dolorum maxime, ipsa voluptas nostrum perspiciatis blanditiis unde soluta incidunt quibusdam sint numquam, beatae doloribus rem corporis a consequatur necessitatibus atque veniam est dolore! Incidunt nisi, esse eligendi maxime dolorem vero!
        </div>

        <div class="mt-4">
            <NuxtLink to="/posts/1" class="bg-blue-700 hover:bg-blue-800 text-white rounded px-4 py-2 inline-block">Read More</NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>


</style>