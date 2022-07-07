<template>
  <main>
    <div class="login">
      <div class="logo">
        <img src="../../assets/images/logo-color.png" class="logo-img" />
      </div>

      <div class="form">
        <Input label="Username" name="username" />
        <Input label="Password" name="password" type="password" />

        <div class="buttons">
          <Button
            background="#87005C"
            to="/app"
            size="50px"
            :style="{
              width: '100%',
              borderRadius: '30px',
              margin: '0 auto',
              marginBottom: '14px',
            }"
          >
            <p>Log in</p>
          </Button>

          <Button
            background="#B2C300"
            to="/app"
            size="50px"
            :style="{ width: '100%', borderRadius: '30px', margin: '0 auto' }"
          >
            <p>Log in with Spotify</p>
          </Button>

          <RouterLink to="/register" :style="{ marginTop: '20px' }"
            >Create account ></RouterLink
          >
        </div>

        <div class="footer">
          <div>
            <a href="#">Forget password?</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Input from "../../components/organisms/Input.vue";
import Button from "../../components/atoms/Button.vue";

export default {
  name: "LoginView",
  components: { Input, Button },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  height: 100vh;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
}

.logo-img {
  height: 171px;
}

.buttons {
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer {
  background: rgba(24, 24, 24, 0.8);
  opacity: 0.7;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>
