<template>
  <div class="home">
    <PlaylistList :playlists="playlists" />
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
