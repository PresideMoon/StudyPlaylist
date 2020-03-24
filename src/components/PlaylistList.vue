<template>
<div class="wrapper">
  <div class="playlists">
    <div class="playlist" v-for="playlist in playlists" :key="playlist.id">
    <router-link to="/Play" @click.native="playVideo(playlist)">
    <div class = "item">
      <div class="info">
        <h1>{{playlist.name}} -- Genre: {{playlist.genre}} </h1>
        <p>{{playlist.description}}</p>
      </div>
        <div class="image">
          <img :src="'/images/playlists/'+playlist.image">
        </div>
      </div>
      </router-link>
    </div>
  </div>

</div>
</template>
<script>
export default {
  name: 'PlaylistList',
  props: {
    playlists: Array
  },
  methods: {
    playVideo: function(playlist){
      this.$root.$data.current_playlist = playlist.link
    }
  }
}
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.playlists {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}
.item {
    background: #D3D3D3;
}
.playlist {
  margin: 10px;
  margin-top: 50px;
  width: 400px;
}

.playlist img {
  border: 2px solid #333;
  height: 250px;
  width: 380px;
  margin-bottom: 10px;
  object-fit: cover;
}

.playlist .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  font: Times New Roman;
  font-size: 18px;
  color: #000;
  padding: 10px 30px;
  height: 80px;
  text-align: center;
}
p {
font-size: 14px!important;
}
.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
@media only screen and (max-width: 400px) {
.playlist img {
  width: 250px;
}
.playlist {
width: 230px;
}
}
</style>
