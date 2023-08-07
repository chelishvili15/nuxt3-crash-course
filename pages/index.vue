<template>
    <Title> Main page </Title>
    <div>
        <Counter />
    </div>

    <div>
        x: {{ x }}
        y: {{ y }}
    </div>
</template>

<script setup>
const {x, y} = useMouse()
</script>

<style lang="scss" scoped>


</style>