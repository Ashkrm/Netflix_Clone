<template>
  <header>
    <div class="netflixLogo">
      <a id="logo" href="#home"><img src="../assets/logo.png" alt="Logo Image"></a>
    </div>
    <div class="main-nav">
      <a href="#home">Home</a>
      <a href="#tvShows">TV Shows</a>
      <a href="#movies">Movies</a>
      <a href="#originals">Originals</a>
    </div>
    <div class="sub-nav">
      <div class='search-box'>
        <input class="search-text" type="text" placeholder="Search Anything">
        <a href="#" class="search-btn">
          <i class="fas fa-search"></i>
        </a>
      </div>
      <div class="notifications"><a href="#"><i class="fas fa-bell sub-nav-logo"></i></a></div>
      <div class="account"><a href="#">Account</a> </div>
    </div>
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
    grid-gap: 5px;
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

  .sub-nav a {
    color: #F3F3F3;
    text-decoration: none;
    
  }

  .sub-nav a:hover {
    color: #686868;
  }

  .sub-nav div {
    display:inline-block;
  }

.search-box {
  background: #2f3640;
  height: 40px;
  border-radius: 40px;
}

.search-box:hover > .search-text{
  width: 240px;
  padding: 0 6px;
}

.search-box:hover > .search-btn{
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
.search-btn > i {
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

.notifications, .account {
  position: relative;
  top: -30%;
  padding-left: 15px;
}
</style>
