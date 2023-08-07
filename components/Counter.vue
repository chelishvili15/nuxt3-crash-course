<template>
    <div>
        <h1>{{ count }}</h1>
        <button @click="inc(1)">Inc</button>
        <button @click="inc(-1)">Dec</button>
    </div>
</template>

<script setup>
const count = ref(0)

const inc = (val) => {
    count += val
}
</script>

<style lang="scss" scoped>


</style>