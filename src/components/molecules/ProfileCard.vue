<template>
  <div
    class="profile-card"
    :style="{
      backgroundImage: `linear-gradient(rgb(24 24 24 / 0%), rgb(24 24 24)), url('./src/assets/images/${image}')`,
    }"
  >
    <div class="genre">
      <Chip :content="genre" />
    </div>

    <div class="data">
      <p class="name">{{ name }}</p>
      <p class="location">{{ location }}</p>
    </div>
  </div>
</template>

<script>
import Chip from "../atoms/Chip.vue";
export default {
  props: {
    id: String,
    name: String,
    location: String,
    image: String,
    genre: String,
  },
  setup(props) {},
  components: { Chip },
};
</script>

<style scoped>
.profile-card {
  border-radius: 20px;
  height: 65vh;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.data {
  padding: 20px;
  width: 100%;
}

.genre {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 26px 20px;
}

.name {
  font-size: 20px;
}

.location {
  font-size: 12px;
}
</style>
