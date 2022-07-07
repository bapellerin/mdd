<template>
  <div class="match">
    <div class="match-action">
      <img src="/src/assets/images/match.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchView",
  beforeMount() {
    setTimeout(() => {
      this.$router.push({
        name: "profile",
        arguments: {
          id: 1,
        },
      });
    }, 2000);
  },
};
</script>

<style scoped>
.match {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(rgb(24 24 24 / 0%), rgb(24 24 24)),
    url("/src/assets/images/profile-1.png") no-repeat;
  background-size: cover;
}

.match-action {
  display: flex;
  width: 100vw;
  height: 90vh;
  flex-direction: row;
  justify-content: center;
  padding-top: 150px;
}

.match-action img {
  margin-top: 150px;
  height: 303px;
}
</style>
