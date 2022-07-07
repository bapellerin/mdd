<template>
  <RouterLink
    :to="to"
    class="btn"
    :style="{
      width: size,
      height: size,
      backgroundColor: background,
    }"
  >
    <slot />
  </RouterLink>
</template>

<script>
export default {
  name: "Button",
  props: {
    size: {
      type: String,
      default: "30px",
    },
    padding: {
      type: String,
      default: "20px",
    },
    background: {
      type: String,
      default: "white",
    },
    to: String,
  },
  setup(props) {},
};
</script>

<style scoped>
.btn {
  padding: 5px;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  align-content: stretch;
  align-items: center;
  justify-content: center;
  width: 39px;
  width: 39px;
}

.btn:nth-child(even) {
  margin: 0 10px;
}
</style>
