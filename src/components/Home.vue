<template>
  <div>
    <section class="main-container">
      <h1 id="popular">Popular on Netflix</h1>
      <section>
        <b-carousel-list v-model="values" :data="shows" :arrow="arrow" :arrow-hover="arrowHover"
          :items-to-show="perList" :items-to-list="increment">
          <template #item="show">
            <movie-card :id="show.imdbID" :imgSrc="show.poster" />
          </template>
        </b-carousel-list>
      </section>

      <h1 id="trending">Trending Now</h1>
      <div class="m-card">
        <a href=""><img src="../assets/t1.png" alt=""></a>
        <a href=""><img src="../assets/t2.png" alt=""></a>
        <a href=""><img src="../assets/t3.png" alt=""></a>
        <a href=""><img src="../assets/t4.png" alt=""></a>
        <a href=""><img src="../assets/t5.png" alt=""></a>
        <a href=""><img src="../assets/t6.png" alt=""></a>
      </div>

      <h1 id="tvShows">TV Shows</h1>
      <div class="m-card">
        <a href=""><img src="../assets/tv1.png" alt=""></a>
        <a href=""><img src="../assets/tv2.png" alt=""></a>
        <a href=""><img src="../assets/tv3.png" alt=""></a>
        <a href=""><img src="../assets/tv4.png" alt=""></a>
        <a href=""><img src="../assets/tv5.png" alt=""></a>
        <a href=""><img src="../assets/tv6.png" alt=""></a>             
      </div>
      

      <h1 id="movies">Blockbuster Action & Adventure</h1>
      <div class="m-card">
        <a href=""><img src="../assets/m1.png" alt=""></a>
        <a href=""><img src="../assets/m2.png" alt=""></a>
        <a href=""><img src="../assets/m3.png" alt=""></a>
        <a href=""><img src="../assets/m4.png" alt=""></a>
        <a href=""><img src="../assets/m5.png" alt=""></a>
        <a href=""><img src="../assets/m6.png" alt=""></a>                
      </div>

      <h1 id="originals">Netflix Originals</h1>
      <div class="m-card">
        <a href=""><img src="../assets/o1.png" alt=""></a>
        <a href=""><img src="../assets/o2.png" alt=""></a>
        <a href=""><img src="../assets/o3.png" alt=""></a>
        <a href=""><img src="../assets/o4.png" alt=""></a>
        <a href=""><img src="../assets/o5.png" alt=""></a>
        <a href=""><img src="../assets/o6.png" alt=""></a>                
      </div>

      <!-- <h1 id="trending">Trending Now</h1>
      <section>
        <b-carousel-list v-model="values" :data="items3" :arrow="arrow" :arrow-hover="arrowHover"
          :items-to-show="perList" :items-to-list="increment" />
      </section>

      <h1 id="tvShows">TV Shows</h1>
      <section>
        <b-carousel-list v-model="values" :data="items2" :arrow="arrow" :arrow-hover="arrowHover"
          :items-to-show="perList" :items-to-list="increment" />
      </section>


      <h1 id="movies">Blockbuster Action & Adventure</h1>
      <section>
        <b-carousel-list v-model="values" :data="items1
        " :arrow="arrow" :arrow-hover="arrowHover"
          :items-to-show="perList" :items-to-list="increment" />
      </section>

      <h1 id="originals">Netflix Originals</h1>
      <section>
        <b-carousel-list v-model="values" :data="items4" :arrow="arrow" :arrow-hover="arrowHover"
          :items-to-show="perList" :items-to-list="increment" />
      </section> -->
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
          <li><a href="#">Audio and Subtitles</a></li>
          <li><a href="#">Audio Description</a></li>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Gift Cards</a></li>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Legal Notices</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import MovieCard from './MovieCard.vue'
  export default ({
    components: {
      MovieCard
    },
    computed: {
      shows() {
        return this.$store.state.movieList.shows;
      }
    },
    data() {
      return {
        arrow: true,
        arrowHover: true,
        values: 0,
        perList: 6,
        increment: 6,
        items1: [{
            alt: 'Slide 1',
            title: 'tt6422066',
            image: require("@/assets/p1.png"),
          },
          {
            title: 'tt4878326',
            image: require("@/assets/p2.png")
          },
          {
            title: 'tt4680240',
            image: require("@/assets/p3.png")
          },
          {
            title: 'tt0413573',
            image: require("@/assets/p4.png")
          },
          {
            title: 'tt1023481',
            image: require("@/assets/p5.png")
          },
          {
            title: 'tt7850154',
            image: require("@/assets/p6.png")
          },
          {
            title: 'tt1837492',
            image: require("@/assets/p7.png")
          },
          {
            title: 'tt0388644',
            image: require("@/assets/p8.png")
          },
          {
            title: 'tt1877514',
            image: require("@/assets/p9.png")
          },
          {
            title: 'tt0475944',
            image: require("@/assets/p10.png")
          },
          {
            title: 'tt5269594',
            image: require("@/assets/p11.png")
          },
          {
            title: 'tt5420376',
            image: require("@/assets/p12.png")
          }
        ],
        items2: [{
            alt: 'Slide 1',
            title: 'Slide 1',
            image: require("@/assets/tv1.png"),
          },
          {
            title: 'Slide 2',
            image: require("@/assets/tv2.png")
          },
          {
            title: 'Slide 3',
            image: require("@/assets/tv3.png")
          },
          {
            title: 'Slide 4',
            image: require("@/assets/tv4.png")
          },
          {
            title: 'Slide 5',
            image: require("@/assets/tv5.png")
          },
          {
            title: 'Slide 6',
            image: require("@/assets/tv6.png")
          },
          {
            title: 'Slide 7',
            image: require("@/assets/tv7.png")
          },
          {
            title: 'Slide 8',
            image: require("@/assets/tv8.png")
          },
          {
            title: 'Slide 9',
            image: require("@/assets/tv9.png")
          },
          {
            title: 'Slide 10',
            image: require("@/assets/tv10.png")
          },
          {
            title: 'Slide 11',
            image: require("@/assets/tv11.png")
          },
          {
            title: 'Slide 12',
            image: require("@/assets/tv12.png")
          }
        ],
        items3: [{
            alt: 'Slide 1',
            title: 'Slide 1',
            image: require("@/assets/m1.png"),
          },
          {
            title: 'Slide 2',
            image: require("@/assets/m2.png")
          },
          {
            title: 'Slide 3',
            image: require("@/assets/m3.png")
          },
          {
            title: 'Slide 4',
            image: require("@/assets/m4.png")
          },
          {
            title: 'Slide 5',
            image: require("@/assets/m5.png")
          },
          {
            title: 'Slide 6',
            image: require("@/assets/m6.png")
          }
        ],
        items4: [{
            alt: 'Slide 1',
            title: 'Slide 1',
            image: require("@/assets/o1.png"),
          },
          {
            title: 'Slide 2',
            image: require("@/assets/o2.png")
          },
          {
            title: 'Slide 3',
            image: require("@/assets/o3.png")
          },
          {
            title: 'Slide 4',
            image: require("@/assets/o4.png")
          },
          {
            title: 'Slide 5',
            image: require("@/assets/o5.png")
          },
          {
            title: 'Slide 6',
            image: require("@/assets/o6.png")
          }
        ],
      }
    }
  })

</script>

<style>
  h1 {
    padding-top: 60px;
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

  .logos a {
    padding: 10px;
  }

  .logo {
    color: #686868;
  }

</style>
