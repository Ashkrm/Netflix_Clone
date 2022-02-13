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
  import MovieListService from './services/MovieListService'
  export default {
    created() {
      var myMovieList = new MovieListService()
      myMovieList.getMovieList()
        .then(response => {
          this.$store.state.movieList = response.data
        })
        .catch(err => console.log(err))
    }
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
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    line-height: 1.4;
  }

  img {
    margin-top: -5px;
    max-width: 100%;
  }

  .wrapper {
    margin: 0;
    padding: 0;
  }
</style>
