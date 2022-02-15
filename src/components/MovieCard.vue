<template>
  <div class="my-card">
    <img :src="require(`@/assets/${imgSrc}`)" alt="" @click="routerFunction()">
    <div class="my-content">
      <button><i class="fas fa-play"></i></button>
      <button><i class="fas fa-check"></i></button>
      <button><i class="far fa-thumbs-up"></i></button>
      <button><i class="far fa-thumbs-down"></i></button>
      <p>2h35m</p>
      <p>Drama, Action</p>
    </div>
  </div>
</template>

<script>
  export default ({
    props: ['id', 'imgSrc'],
    methods: {
      routerFunction() {
        let route = this.$router.resolve({
          path: "/details/" + this.id
        });
        window.open(route.href);
      }
    }
  })

</script>

<style scoped>
  .my-card {
    position: relative;
    margin-right: 30px;
  }
  .my-card:hover {
    cursor: pointer;
  }
  img {
    transition: transform .3s;
  }
  img:hover {
    transition: transform .3s;
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  img:hover + .my-content {
    z-index: 10;
  }
  .my-content {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));
    color: white;
    width: 100%;
    position: absolute;
    float: left;
    top: 61.5%;
    z-index: -1;
    padding: 10px;
  }
  .my-content p{
    padding-top: 5px;
    font-size: 16px;
  }
  button {
    background: none;
    color: white;
    cursor: pointer;
    border: 1px solid white; 
    border-radius: 50%;
    padding: 6px;
  }
  button:hover {
    border-color: gray;
  }

</style>
