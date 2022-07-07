<template>
  <div class="artists">
    <div class="search-section">
      <p class="title">Artists</p>
      <p class="help-text">Search for your artists list</p>
      <Input name="search" backgroundColor="#363636" />
    </div>

    <div class="list-section" v-for="artist in artists" :key="artist.id">
      <div class="item">
        <div class="image">
          <img :src="`src/assets/images/${artist.image}`" />
        </div>

        <div class="body">
          <p class="title">{{ artist.name }}</p>
          <p class="location">{{ artist.location }}</p>

          <p class="style">Style</p>
          <p class="styles-list">{{ artist.styles }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../../components/organisms/Input.vue";

export default {
  name: "ArtistView",
  data: () => ({
    artists: [
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Pvris",
        location: "Lowell, Massachusetts",
        image: "profile-1-square.png",
        styles: "Alternative Rock, Synthpop",
      },
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Rob Zombie",
        location: "Haverhill, Massachusetts",
        image: "profile-2-square.png",
        styles: "Heavy Metal, Rock",
      },
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Boys Like Girls",
        location: "Boston, Massachusetts",
        image: "profile-3-square.png",
        styles: "Alternative Rock, Pop Punk",
      },
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Pvris",
        location: "Lowell, Massachusetts",
        image: "profile-1-square.png",
        styles: "Alternative Rock, Synthpop",
      },
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Rob Zombie",
        location: "Haverhill, Massachusetts",
        image: "profile-2-square.png",
        styles: "Heavy Metal, Rock",
      },
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Boys Like Girls",
        location: "Boston, Massachusetts",
        image: "profile-3-square.png",
        styles: "Alternative Rock, Pop Punk",
      },
    ],
  }),
  components: {
    Input,
  },
};
</script>

<style scoped>
.artists {
  display: flex;
  flex-direction: column;
}

.search-section {
  padding: 20px;
}

.list-section {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  flex-direction: row;
  background: linear-gradient(269deg, #18191b, #000);
  height: 120px;
  border-bottom: 2px solid black;
}

.body {
  padding: 0 10px;
}

.image img {
  height: 120px;
}
.title {
  font-size: 20px;
  font-weight: bold;
}

.location {
  font-weight: 300;
  font-size: 12px;
  margin-bottom: 15px;
}

.styles {
  font-size: 13px;
  line-height: 20px;
}

.styles-list {
  font-weight: 300;
  font-size: 13px;
}

.input {
  margin-top: 15px;
  padding: 0px;
}
</style>
