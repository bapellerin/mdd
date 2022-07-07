<template>
  <main>
    <div class="register-spotify">
      <div class="logo">
        <img src="../../assets/images/logo-color.png" class="logo-img" />
      </div>

      <div class="form">
        <h1 class="title">
          To continue with your <br />
          register please connect <br />
          your spotify account
        </h1>

        <div class="buttons">
          <Button
            background="#b2c300"
            to="/settings/my-profile"
            size="50px"
            :style="{
              width: '100%',
              borderRadius: '30px',
              margin: '0 auto',
              marginBottom: '14px',
            }"
          >
            <p>Connect your account</p>
          </Button>
        </div>

        <div class="footer">
          <div>
            <RouterLink to="/login" :style="{ marginTop: '20px' }"
              >Already have an account? <span> Login here!</span></RouterLink
            >
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
  name: "RegisterSpotifyView",
  components: { Input, Button },
};
</script>

<style scoped>
.register-spotify {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
}

.title {
  font-size: 20px;
  text-align: center;
  color: white;
  font-weight: 600;
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
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

a span {
  text-decoration-line: underline;
  color: #b2c300;
}
</style>
