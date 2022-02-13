<template>
  <div class="crop">
    <img :src="require(`@/assets/${imgSrc}`)" alt="" @click="routerFunction()">
	</div>
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

<style >

</style>
