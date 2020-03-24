<template>
<div class= "wrapper">
  <iframe width="560" height="315" v-bind:src="video"
  frameborder="0" allow="accelerometer; autoplay;
  encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
  <div class="card text-center">
    <div class="card-body">
      <h3 class="card-title"><strong>My Github Link</strong></h3>
      <a class="button" href="https://github.com/PresideMoon/StudyPlaylist.git">For instructors, TAs and inquisitive souls.</a>
    </div>
  </div>
</div>
</template>
<script>
export default {
computed: {
  video: function() {
    return this.$root.$data.current_playlist;
  }
}
}
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 400px) {
iframe {
width: 300px;
height: 240px;
}
}

/* Tablet Styles */
@media only screen and (min-width: 401px) and (max-width: 960px) {

}

/* Desktop Styles */
@media only screen and (min-width: 961px) {

}
</style>
