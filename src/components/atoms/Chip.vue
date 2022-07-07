<template>
  <div class="chip" :style="{ backgroundColor: color }">{{ content }}</div>
</template>

<script>
export default {
  props: {
    content: String,
    color: {
      type: String,
      default: "#FF00AE",
    },
  },
};
</script>

<style scoped>
.chip {
  border-radius: 30px;
  text-align: center;
  font-size: 10px;
  font-weight: 700;
  padding: 7px 20px
}
</style>
