<template>
    <!-- <div id="app"> -->
    <div class="wrapper">

    <!-- HEADER -->
    <header>
      <div class="netflixLogo">
        <a id="logo" href="#home"><img src="./assets/logo.png" alt="Logo Image"></a>
      </div>      
      <nav class="main-nav">                
        <a href="#home">Home</a>
        <a href="#tvShows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#originals">Originals</a>
        <a href="#">Recently Added</a>
        <a target="_blank" href="">Portfolio</a>        
      </nav>
      <nav class="sub-nav">
        <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
        <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a>
        <a href="#">Account</a>        
      </nav>      
    </header>
    <!-- END OF HEADER -->
    
    <!-- MAIN CONTAINER -->
    <section class="main-container" >
      <div class="location" id="home">
          <h1 id="home">Popular on Netflix</h1>
          <div class="box">
            <a href=""><img src="./assets/p1.png" alt=""></a>
            <a href=""><img src="./assets/p2.png" alt=""></a>
            <a href=""><img src="./assets/p3.png" alt=""></a>
            <a href=""><img src="./assets/p4.png" alt=""></a>
            <a href=""><img src="./assets/p5.png" alt=""></a>
            <a href=""><img src="./assets/p6.png" alt=""></a>
    
            <a href=""><img src="./assets/p7.png" alt=""></a>
            <a href=""><img src="./assets/p8.png" alt=""></a>
            <a href=""><img src="./assets/p9.png" alt=""></a>
            <a href=""><img src="./assets/p10.png" alt=""></a>
            <a href=""><img src="./assets/p11.png" alt=""></a>
            <a href=""><img src="./assets/p12.png" alt=""></a>        
          </div>
      </div>
      

      <h1 id="myList">Trending Now</h1>
      <div class="box">
        <a href=""><img src="./assets/t1.png" alt=""></a>
        <a href=""><img src="./assets/t2.png" alt=""></a>
        <a href=""><img src="./assets/t3.png" alt=""></a>
        <a href=""><img src="./assets/t4.png" alt=""></a>
        <a href=""><img src="./assets/t5.png" alt=""></a>
        <a href=""><img src="./assets/t6.png" alt=""></a>                  
      </div>
      
      <h1 id="tvShows">TV Shows</h1>
      <div class="box">
        <a href=""><img src="./assets/tv1.png" alt=""></a>
        <a href=""><img src="./assets/tv2.png" alt=""></a>
        <a href=""><img src="./assets/tv3.png" alt=""></a>
        <a href=""><img src="./assets/tv4.png" alt=""></a>
        <a href=""><img src="./assets/tv5.png" alt=""></a>
        <a href=""><img src="./assets/tv6.png" alt=""></a>

        <a href=""><img src="./assets/tv7.png" alt=""></a>
        <a href=""><img src="./assets/tv8.png" alt=""></a>
        <a href=""><img src="./assets/tv9.png" alt=""></a>
        <a href=""><img src="./assets/tv10.png" alt=""></a>
        <a href=""><img src="./assets/tv11.png" alt=""></a>
        <a href=""><img src="./assets/tv12.png" alt=""></a>              
      </div>
      

      <h1 id="movies">Blockbuster Action & Adventure</h1>
      <div class="box">
        <a href=""><img src="./assets/m1.png" alt=""></a>
        <a href=""><img src="./assets/m2.png" alt=""></a>
        <a href=""><img src="./assets/m3.png" alt=""></a>
        <a href=""><img src="./assets/m4.png" alt=""></a>
        <a href=""><img src="./assets/m5.png" alt=""></a>
        <a href=""><img src="./assets/m6.png" alt=""></a>                
      </div>

      <h1 id="originals">Netflix Originals</h1>
      <div class="box">
        <a href=""><img src="./assets/o1.png" alt=""></a>
        <a href=""><img src="./assets/o2.png" alt=""></a>
        <a href=""><img src="./assets/o3.png" alt=""></a>
        <a href=""><img src="./assets/o4.png" alt=""></a>
        <a href=""><img src="./assets/o5.png" alt=""></a>
        <a href=""><img src="./assets/o6.png" alt=""></a>                
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
    <!-- END OF LINKS -->

    <!-- FOOTER -->
    <footer>
      <p>&copy 1997-2022 Netflix, Inc.</p>
    </footer>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  
}
</script>

<style>

html, body {
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

h1 {
  padding-top: 60px;  
}

.wrapper {
  margin: 0;
  padding: 0;
}

/* HEADER */
header {
  padding: 20px 20px 0 20px;
  position: fixed;
  top: 0;
  display: grid;  
  grid-gap:5px;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas: 
   "nt mn mn sb . . . "; 
  background-color: #141414;
  width: 100%;
  margin-bottom: 0px;  
}

.netflixLogo {
  grid-area: nt;
  object-fit: cover;
  width: 100px;
  max-height: 100%;
  padding-left: 30px;
  padding-top: 0px;  
}

.netflixLogo img {  
  height: 35px;     
}

#logo {
  color: #E50914;  
  margin: 0; 
  padding: 0; 
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

.sub-nav a {
  color: #F3F3F3;
  text-decoration: none;
  margin: 5px;
}

.sub-nav a:hover {
  color: #686868;
}


/* MAIN CONTIANER */
.main-container {
  padding: 50px;
}

.box {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
}

.box a {
  transition: transform .3s;  
}

.box a:hover {
  transition: transform .3s;
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);  
  transform: scale(1.2);
}

.box img {
  border-radius: 2px;
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

.logos a{
  padding: 10px;
}

.logo {
  color: #686868;
}


/* FOOTER */
footer {
  padding: 20px;
  text-align: center;
  color: #686868;
  margin: 10px;
}

</style>
