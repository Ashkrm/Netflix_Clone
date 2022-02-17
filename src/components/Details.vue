<template>
  <div>
    <div class="details">
      <img :src="responseObj.Poster" alt="MovieImage">
      <h2>{{ responseObj.Title }}</h2>
      <br>
      <div class="info">
        <div>
          <span><i class="imdb-icon fab fa-imdb"></i>{{ responseObj.imdbRating }}</span>
          <span class="rated">{{ responseObj.Rated }}</span>
          <span v-if='responseObj.Type == "series"'>{{ responseObj.totalSeasons }} Seasons</span>
          <span v-else>{{ responseObj.Runtime }}</span>
        </div>
        <br>
        <p class="plot">{{ responseObj.Plot }}</p>
        <br>
        <table>
          <tr>
            <td>Director:</td>
            <td>{{ responseObj.Director }}</td>
          </tr>
          <tr>
            <td>Cast:</td>
            <td>{{ responseObj.Actors }}</td>
          </tr>
          <tr>
            <td>Genres:</td>
            <td>{{ responseObj.Genre }}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{{ responseObj.Country }}</td>
          </tr>
          <tr>
            <td>Language:</td>
            <td>{{ responseObj.Language }}</td>
          </tr>
        </table>
        <br>
      </div>
    </div>
    <div class="trailer">
      <figure class="image is-16by9">
        <iframe class="has-ratio" width="64" height="36" :src='getTrailer(id)' frameborder="0" allowfullscreen></iframe>
      </figure>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex';
  import MovieDetailsService from '../services/MovieDetailsService'
  export default {
    data() {
      return {
        id: this.$route.params.id,
        responseObj: {}
      }
    },
    created() {
      var myMovieDetails = new MovieDetailsService()
      myMovieDetails.getMovieDetails(this.id)
        .then(response => {
          this.responseObj = response.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    computed: {
      ...mapGetters([
        'getTrailer'
      ])
    }
  }

</script>

<style scoped>
  h2 {
    padding-top: 60px;
    font-size: 64px;
    font-weight: 700;
  }

  .details {
    padding: 50px
  }

  .details img {
    padding-top: 60px;
    padding-right: 24px;
    float: right;
  }

  .info {
    padding-right: 400px;
  }

  .info div {
    font-size: 20px; color: gold;
  }

  .rated {
    border: 1px solid;
    padding: 0 5px 0 5px;
    margin: 0 60px 0 60px;
  }
  
  .imdb-icon {
    padding-right: 4px;
  }

  .plot {
    font-size: 24px;
  }

  tr {
    padding-top: 5px;
  }

  td:first-child {
    color: gray;
    padding-right: 30px;
  }

  .trailer {
    text-align: center;
    padding: 20px 250px 0 250px;
  }

</style>
