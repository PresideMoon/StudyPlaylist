<template>
  <div class="home">
    <div class="option">
        <router-link to="/select">
          <div class="select">
            <img src="../../images/logo.jpg">
          </div>
      </router-link>
    </div>
    <div class="card text-center">
      <div class="card-body">
        <h3 class="card-title"><strong>My Github Link</strong></h3>
        <a class="button" href="https://github.com/PresideMoon/StudyPlaylist.git">For instructors, TAs and inquisitive souls.</a>

      </div>
    </div>
  </div>

</template>
<script>

</script>
<style scoped>
.card {
  border: 0px!important;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.card-body {
align-items: center;
justify-content: center;

}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home {
  display: flex-column;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}
.option {

  display: flex;
  align-items: center;
  justify-content: center;

}
i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}
@media only screen and (max-width: 400px) {
.select img {
  width: 300px;
}
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {
.select img {
  width: 600px;
}
}

/* Desktop Styles */
@media only screen and (min-width: 961px) {
.select img {
  width: 800px;
}
}
</style>
