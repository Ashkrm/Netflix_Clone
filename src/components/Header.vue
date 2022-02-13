<template>
    <header>
      <div class="netflixLogo">
        <a id="logo" href="#home"><img src="../assets/logo.png" alt="Logo Image"></a>
      </div>      
      <nav class="main-nav">                
        <a href="#home">Home</a>
        <a href="#tvShows">TV Shows</a>
        <a href="#movies">Movies</a>
        <a href="#originals">Originals</a>      
      </nav>
      <nav class="sub-nav">
        <!-- <form action="" class="display: inline;"> -->
          <a href="#"><i class="fas fa-search sub-nav-logo"></i></a>
          <input type="text" placeholder="Search">
        <!-- </form> -->
        <a href="#"><i class="fas fa-bell sub-nav-logo"></i></a>
        <a href="#">Account</a>        
      </nav>      
    </header>
</template>

<script>
export default ({
    
})
</script>
  
<style scoped>
  header {
  padding: 20px 20px 0 20px;
  position: fixed;
  z-index: 1;
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
  width: 180px;
  max-height: 100%;
  padding-left: 30px;
  padding-top: 0px;  
}

.netflixLogo img {  
  width: 100%;     
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
</style>