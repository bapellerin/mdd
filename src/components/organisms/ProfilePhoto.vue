<template>
  <div class="profile-photo">
    <img :src="source" />
  </div>
</template>

<script>
export default {
  name: "ProfilePhoto",
  props: {
    source: {
      type: String,
      default: "temp",
    },
  },
};
</script>

<style scoped>
.profile-photo {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>