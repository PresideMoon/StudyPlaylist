<template>
  <div class="home">
    <p> It's almost like life seeks to distract from our responsibilities. </p>
    <p> Pick a playlist to study without distractions! </p>
    <div class="option">
        <router-link to="/select">
          <div class="select">
          <p>Playlists</p>
            <img src="../../images/logo.jpg">
          </div>
      </router-link>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home {

}
.select img {
  width: 400px;
}
.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
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
