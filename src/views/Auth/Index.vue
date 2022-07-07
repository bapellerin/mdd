<template>
  <main>
    <div class="auth">
      <router-view />
    </div>
  </main>
</template>

<style scoped>
.auth {
  background-image: linear-gradient(rgb(24 24 24 / 0%), rgb(24 24 24)),
    url("../../assets/images/login-background.jpg");
  background-size: cover;
  height: 100vh;
}
</style>
