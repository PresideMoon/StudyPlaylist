<template>
<div id="app">
  <div class="menu">
    <div class="brand">
      <router-link to="/">
        <img src="../images/edu.jpg">
      </router-link>
    </div>
    <div class="side">
      <router-link to="/select">
        <div class="browse">
          <img src="../images/hp.jpg">
          <p>Playlists</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
</div>
</template>
<script>


</script>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}
.app {

}
.menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

.menu a {
  color: #B84901;
}

.brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

.brand img {
  height: 120px;
}

.side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

.side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
@media only screen and (max-width: 400px) {

}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {

}

/* Desktop Styles */
@media only screen and (min-width: 961px) {

}
</style>
