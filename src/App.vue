<template>
  <div class="wrapper">
    <div v-if="checkLoading && !isErrorMovieAPI">
      <b-loading :is-full-page="true" :active.sync="checkLoading"></b-loading>
    </div>
    <div v-if="!checkLoading && !isErrorMovieAPI">
      <!-- HEADER -->
      <app-header ></app-header>
      <!-- Route Section -->
      <router-view ></router-view>
      <!-- Footer -->
      <app-footer></app-footer>
    </div>
    <div class="error-state" v-if="isErrorMovieAPI && !checkLoading">
      <h2>Sorry!!! 😵‍💫</h2>
      <p>Could not load Movie List</p>
    </div>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex';
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
    },
    data() {
      return {
        isLoading: true
      }
    },
    created() {
      this.setMovieList()
    },
    methods: {
      ...mapActions([
        'setMovieList'
      ])
    },
    computed: {
      ...mapGetters([
        'getShows',
        'isErrorMovieAPI'
      ]),
      checkLoading() {
        this.isLoading = (this.getShows && this.getShows.length>0)?false:true;
        if(this.isErrorMovieAPI) this.isLoading = false;
        return this.isLoading
      }
    }
  }

</script>

<style>
  .wrapper {
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

  .error-state {
    padding: 50px;
  }

  .error-state h2 {
    font-size: 64px;
  }

  .error-state p {
    font-size: 32px;
  }

</style>
