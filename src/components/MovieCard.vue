<template>
    <img :src="imgSrc" alt="" @click="routerFunction()">
</template>

<script>
export default ({
    props: ['id', 'imgSrc'],
    methods: {
        routerFunction() {
            let route = this.$router.resolve({ path: "/details/"+this.id});
            window.open(route.href);
        }
    }
})
</script>

<style scoped>

</style>
