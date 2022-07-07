<template>
  <div class="profile">
    <div
      class="image"
      :style="{
        backgroundImage: `linear-gradient(rgb(24 24 24 / 0%), rgb(24 24 24)), url('../src/assets/images/profile-1.png')`,
      }"
    ></div>
    <div class="profile-body">
      <div class="header">
        <div class="title">
          <p class="name">{{ profile.name }}</p>
          <p class="location">{{ profile.location }}</p>
        </div>

        <div class="social">
          <p class="section-title">Listen now on</p>

          <div class="icons">
            <Button to="#">
              <img src="../../assets/images/youtube.png" class="small" />
            </Button>

            <Button to="#">
              <img src="../../assets/images/apple.png" class="small" />
            </Button>

            <Button to="#">
              <img src="../../assets/images/spotify.png" class="small" />
            </Button>

            <Button to="#">
              <img src="../../assets/images/soundcloud.png" class="small" />
            </Button>
          </div>
        </div>

        <div class="about">
          <p class="section-title">About</p>
          <p>
            Infusing atmospheric alternative rock with sensational undertones of
            pop and hip-hop,
          </p>
        </div>
      </div>

      <div class="body"></div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";

export default {
  name: "ProfileView",
  data: () => ({
    profile: {
      id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
      name: "Pvris",
      location: "Lowell, Massachusetts",
      image: "profile-1.png",
      genre: "Alternative",
    },
  }),
  components: {
    Button,
  },
};
</script>

<style scoped>
.profile {
  height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.image {
  height: 75vh;
  width: 100vw;
}

.profile-body {
  padding: 20px;
}

p.name {
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
}

p.location {
  font-size: 12px;
}

.social {
  margin: 24px 0;
}

.icons {
  margin-top: 9px;
  display: flex;
}

.section-title {
  font-size: 18px;
}
</style>
