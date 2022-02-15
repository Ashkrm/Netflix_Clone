<template>
  <div>
    <section class="main-container">
      <h1 id="popular">Popular on Netflix</h1>
      <section>
        <b-carousel-list v-model="values" :data="getShows" :arrow="arrow" :arrow-hover="arrowHover"
          :items-to-show="perList" :items-to-list="increment">
          <template #item="show">
            <movie-card :id="show.imdbID" :imgSrc="show.poster" />
          </template>
        </b-carousel-list>
      </section>

      <h1 id="trending">Trending Now</h1>
      <div class="m-card">
        <div v-for="item in trending" :key="item.imdbID">
          <router-link :to="item.imdbID" target='_blank'><img :src="item.src" :alt="item.alt"></router-link>
        </div>
      </div>

      <h1 id="tvShows">TV Shows</h1>
      <div class="m-card">
        <div v-for="item in tvShows" :key="item.imdbID">
          <router-link :to="item.imdbID" target='_blank'><img :src="item.src" :alt="item.alt"></router-link>
        </div>            
      </div>
      

      <h1 id="movies">Blockbuster Action & Adventure</h1>
      <div class="m-card">
        <div v-for="item in movies" :key="item.imdbID">
          <router-link :to="item.imdbID" target='_blank'><img :src="item.src" :alt="item.alt"></router-link>
        </div>               
      </div>

      <h1 id="originals">Netflix Originals</h1>
      <div class="originals">
        <div v-for="item in items4" :key="item.imdbID">
          <router-link :to="item.imdbID" target='_blank'><img :src="item.src" :alt="item.alt"></router-link>
        </div>               
      </div>
    </section>
    <!-- END OF MAIN CONTAINER -->

    <!-- LINKS -->
    <section class="link">
      <div class="logos">
        <a href="#"><i class="fab fa-facebook-square fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-instagram fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-twitter fa-2x logo"></i></a>
        <a href="#"><i class="fab fa-youtube fa-2x logo"></i></a>
      </div>
      <div class="sub-links">
        <ul>
          <li v-for="link in links" :key="link"><a href="#">{{ link }}</a></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import MovieCard from './MovieCard.vue'
  import {trending, tvShows, movies, originals, links} from '../common/constants'
  export default ({
    components: {
      MovieCard
    },
    computed: {
      ...mapGetters([
        'getShows'
      ])
    },
    data() {
      return {
        arrow: true,
        arrowHover: true,
        values: 0,
        perList: 6,
        increment: 6,
        trending,
        tvShows,
        movies,
        originals, 
        links
      }
    }
  })

</script>

<style scoped>
  h1 {
    padding: 40px 0 16px 0;
  }

  .main-container {
    padding: 50px;
  }

  .m-card {
    margin-top: 5px;
    display: grid;
    grid-template-columns: repeat(6, minmax(100px, 1fr));
  }

  img {
    padding-right : 30px;
    transition: transform .3s;
  }

  img:hover {
    transition: transform .3s;
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .carousel-arrow .icon.has-icons-right {
    right: 3rem;
  }

  .carousel-arrow .icon {
    background-color: darkgray;
    color: white;
    border: 1px solid white;
  }

  .carousel-arrow .icon:hover {
    border: 1px solid rgb(197, 1, 1);;
    color: rgb(197, 1, 1);
  }

  /* LINKS */
  .link {
    padding: 50px;
    text-align: center;
  }

  .sub-links ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }

  .sub-links a {
    color: #686868;
    text-decoration: none;
  }

  .sub-links a:hover {
    color: #686868;
    text-decoration: underline;
  }

  .logos {
    margin-bottom: 1.5rem;
  }

  .logos a {
    padding: 10px;
  }

  .logo {
    color: #686868;
  }

</style>
