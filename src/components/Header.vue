<template>
  <header>
    <div class="netflix-logo">
      <a id="logo" href="#home"><img src="../assets/logo.png" alt="Logo Image"></a>
    </div>
    <div class="main-nav">
      <a href="#home">Home</a>
      <a href="#tvShows">TV Shows</a>
      <a href="#movies">Movies</a>
      <a href="#originals">Originals</a>
    </div>

    <div class="sub-nav">
      <div class="search-box">
        <div class="dropdown is-active">
          <b-dropdown can-close position="is-bottom-left" append-to-body aria-role="list" scrollable max-height="200"
            trap-focus>
            <template #trigger>
              <label class="search-btn" for="search">
                <i class="fas fa-search"></i>
              </label>
            </template>
            <b-dropdown-item custom aria-role="listitem">
              <b-input v-model="searchTerm" id="search" placeholder="search" expanded @input="searchMovies" />
            </b-dropdown-item>
            <b-dropdown-item v-for="item of searchMovies()" :key="item.imdbID" aria-role="listitem" @click="routeToDetails(item.imdbID)">
              {{item.title}}
            </b-dropdown-item>
          </b-dropdown>

        </div>
      </div>

      <div class="notifications"><a href="#"><i class="fas fa-bell sub-nav-logo"></i></a></div>

      <b-dropdown class="account-dropdown" aria-role="list">
        <template #trigger="{ active }">
          <b-button class="has-background-black-bis" label="Account" type="is-dark"
            :icon-right="active ? 'menu-up' : 'menu-down'" />
        </template>

        <b-dropdown-item class="has-background-black-bis" aria-role="listitem">My Profile<i class="fas fa-user"></i>
        </b-dropdown-item>
        <b-dropdown-item class="has-background-black-bis" aria-role="listitem">Help Center</b-dropdown-item>
        <b-dropdown-item class="has-background-black-bis" aria-role="listitem">Sign Out</b-dropdown-item>
      </b-dropdown>
    </div>
  </header>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  export default ({
    data() {
      return {
        searchTerm: '',
        showList: []
      }
    },
    async mounted() {
      this.showList = this.getShows
    },
    computed: {
      ...mapGetters([
        'getShows'
      ])
    },
    methods: {
      searchMovies() {
        return this.showList.filter((item) => item.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0);
      },
      routeToDetails(imdbID) {
        const route = this.$router.resolve({
          path: "/details/" + imdbID
        });
        window.open(route.href);
      }
    }
  })

</script>

<style lang="scss" scoped>
  header {
    padding: 20px 20px 0 20px;
    position: fixed;
    z-index: 1;
    top: 0;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "nt mn mn sb . . . ";
    background-color: #141414;
    width: 100%;
    margin-bottom: 0px;
  }

  .netflix-logo {
    grid-area: nt;
    object-fit: cover;
    width: 180px;
    max-height: 100%;
    padding-left: 30px;
    padding-top: 0px;
  }

  .netflix-logo img {
    margin-top: -10px;
    width: 100%;
  }

  .main-nav {
    grid-area: mn;
    padding: 0 30px 0 20px;
  }

  .main-nav a {
    color: #F3F3F3;
    text-decoration: none;
    margin: 5px;
  }

  .main-nav a:hover {
    color: #686868;
  }

  .sub-nav {
    grid-area: sb;
    padding: 0 40px 0 40px;
  }

  .sub-nav a:hover {
    color: #686868;
  }

  .sub-nav div {
    display: inline-block;
  }

  .search-box {
    background: #2f3640;
    height: 40px;
    border-radius: 40px;
  }

  .search-btn:focus .search-text {
    width: 240px;
    padding: 0 6px;
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    font-weight: normal;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
  }

  .search-box:hover .search-btn {
    background: white;
    color: black;
    margin: 3px 6px 0 6px;
    width: 34px;
    height: 34px;
  }

  .search-btn {
    color: #e84118;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    cursor: pointer;
    text-decoration: none;

  }

  .search-btn>i {
    font-size: 30px;
  }

  .search-text {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    font-weight: normal;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
  }

  .account {
    padding-left: 16px;
  }

  .notifications {
    position: relative;
    top: 20%;
    padding-left: 16px;
  }

  a {
    color: white;
  }

  .button.is-dark:focus:not(:active) {
    box-shadow: none;
  }

  .account-dropdown {
    ::v-deep {
      
        .dropdown-content {
          background-color: #141414;
        }
      
    }
  }

</style>
