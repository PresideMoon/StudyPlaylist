<template>
  <div class="home">
    <PlaylistList :playlists="playlists" />
    <div class="card text-center">
      <div class="card-body">
        <h3 class="card-title"><strong>My Github Link</strong></h3>
        <p class="card-text"><strong>For instructors, TAs and inquisitive souls. </strong></p>
        <a href="https://github.com/PresideMoon/StudyPlaylist.git" class="btn btn-primary">Github.com/PresideMoon</a>
      </div>
    </div>
  </div>
</template>

<script>
import PlaylistList from "../components/PlaylistList.vue"
export default {
  name: 'Select',
  components: {
    PlaylistList
  },
  computed: {
    playlists() {
      return this.$root.$data.playlists;
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
.home {

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
