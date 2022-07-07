<template>
  <div class="my-profile">
    <div class="image">
      <ProfilePhoto source="/src/assets/images/profile-pic.png" />
    </div>

    <div class="form">
      <Input label="Name" name="name" backgroundColor="#D9D9D9" />
      <Input label="Username" name="username" backgroundColor="#D9D9D9" />
      <Input label="E-mail" name="email" backgroundColor="#D9D9D9" />
      <Input
        label="Description"
        name="description"
        backgroundColor="#D9D9D9"
        textarea
        rows="10"
      />

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
          <p>Save</p>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/atoms/Button.vue";
import Input from "../../components/organisms/Input.vue";
import ProfilePhoto from "../../components/organisms/ProfilePhoto.vue";
export default {
  name: "MyProfileView",
  components: { Button, Input, ProfilePhoto },
};
</script>

<style scoped>
.my-profile {
  display: flex;
  flex-direction: column;
}

.buttons {
  width: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
