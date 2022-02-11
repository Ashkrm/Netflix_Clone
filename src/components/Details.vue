<template>
  <div class="details">
    <img :src="responseObj.Poster" alt="">
    <h2>{{ responseObj.Title }}</h2>
    <br>
    <div>
      <div style="font-size: 20px">
        <span>{{ responseObj.imdbRating }}</span>
        <span class="rated">{{ responseObj.Rated }}</span>
        <span v-if='responseObj.Type == "series"'>{{ responseObj.totalSeasons }} Seasons</span>
        <span v-else>{{ responseObj.Runtime }}</span>
      </div>
      <br>
      <p style="font-size: 24px">{{ responseObj.Plot }}</p>
      <br>
      <p>Starring: {{ responseObj.Actors }}</p>
      <p>Genres: {{responseObj.Genre }}</p>
      <br>
      <a href="https://www.youtube.com" target="_blank">
        <button class="button"><i class="fas fa-play"></i> Play</button>
      </a>
    </div>
    <!-- <p>{{ responseObj }}</p> -->
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        id: this.$route.params.id,
        responseObj: {}
      }
    },
    watch: {
      '$route'(to, from) {
        this.id = to.params.id
      }
    },
    created() {
      this.callAPI()
    },
    methods: {
      callAPI() {
        axios.get('https://www.omdbapi.com/?i=' + this.id + '&apikey=7dfe4eee')
          .then(response => {
            console.log(response.data)
            this.responseObj = response.data
          })
          .catch(err => console.log(err))
      }
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

  .rated {
    border: 1px solid;
    border-radius: 3px;
    padding: 0 5px 0 5px;
    margin: 0 10px 0 10px;
  }

  .button {
    border: 1px solid white;
    color: rgb(207, 4, 4);
    padding: 15px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 32px;
  }

</style>
