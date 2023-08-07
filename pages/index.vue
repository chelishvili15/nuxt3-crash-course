<template>
    <div>
        <Title> Main page </Title>
        <div>
            <Counter />
            <InsideComp />
        </div>

        <div>
            x: {{ x }}
            y: {{ y }}
        </div>

        <div>
            <ul>
                <li v-for="user in users" :key="user.id">{{ user.name }}</li>
            </ul>
        </div>

        <div>
            <ul>
                <li v-for="user in users2" :key="user.id">{{ user.id }}</li>
            </ul>
        </div>

        <pre>
            {{ user }}
        </pre>

        <div>
            {{ hi.greeting }}
        </div>
    </div>
</template>

<script setup>
const users = ref(['aaaa'])

const {x, y} = useMouse()

onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => users.value = data)
})

const { data: users2 } = await useFetch('https://jsonplaceholder.typicode.com/users')

const { data: user } = await useFetch('https://jsonplaceholder.typicode.com/users/1', { pick: ['id', 'name', 'email'] }) 

const { data: hi } = await useFetch('/api/hello') 

</script>

<style lang="scss" scoped>


</style>