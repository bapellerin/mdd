<template>
  <main>
    <div class="register">
      <div class="logo">
        <img src="../../assets/images/logo-color.png" class="logo-img" />
      </div>

      <div class="form">
        <h1 class="title">Register</h1>

        <Input label="Name" name="name" />
        <Input label="Username" name="username" />
        <Input label="E-mail" name="email" />
        <Input label="Password" name="password" type="password" />

        <div class="buttons">
          <Button
            background="#87005C"
            to="/register-spotify"
            size="50px"
            :style="{
              width: '100%',
              borderRadius: '30px',
              margin: '0 auto',
              marginBottom: '14px',
            }"
          >
            <p>Register</p>
          </Button>

          <RouterLink to="/login" :style="{ marginTop: '20px' }"
            >Already have an account? <span> Login here!</span></RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Input from "../../components/organisms/Input.vue";
import Button from "../../components/atoms/Button.vue";

export default {
  name: "RegisterView",
  components: { Input, Button },
};
</script>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.title {
  font-size: 20px;
  text-align: center;
  color: #87005c;
  font-weight: bold;
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

a span {
  text-decoration-line: underline;
  color: #B2C300;
}
</style>
