<template>
  <div class="wrapper">
    <b-loading :is-full-page="true" v-model="isLoading"></b-loading>
    <div v-if="!checkLoading">
      <!-- HEADER -->
      <app-header ></app-header>
      <!-- Route Section -->
      <router-view ></router-view>
      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import {
    mapActions,
    mapGetters
  } from 'vuex';
  export default {
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
        'getShows'
      ]),
      checkLoading() {
        return this.isLoading = (this.getShows && this.getShows.length>0)?false:true;
      }
    }
  }

</script>

<style>
  .wrapper {
    margin: 0;
    padding: 0;
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

</style>
