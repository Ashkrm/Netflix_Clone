<template>
  <div class="wrapper">

    <!-- HEADER -->
    <app-header></app-header>
    
    <!-- Route Section -->
    <router-view></router-view>

    <!-- Footer -->
    <app-footer></app-footer>

  </div>
</template>

<script>
  export default {
    
  }

</script>

<style>
  html,
  body {
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #141414;
    color: #F3F3F3;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    line-height: 1.4;
  }

  img {
    max-width: 100%;
  }

  .wrapper {
    margin: 0;
    padding: 0;
  }
</style>
