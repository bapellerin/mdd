<template>
  <div class="input">
    <label :for="name">{{ label }}</label>
    <input
      v-if="!textarea"
      :type="type"
      :name="name"
      :id="name"
      :style="{
        background: backgroundColor
          ? backgroundColor
          : white
          ? `#D9D9D9`
          : '#181818',
        color: white ? `black` : 'white',
      }"
    />

    <textarea
      v-if="textarea"
      :rows="rows"
      :style="{
        background: backgroundColor
          ? backgroundColor
          : white
          ? `#D9D9D9`
          : '#181818',
        color: white ? `black` : 'white',
      }"
    >
    </textarea>
  </div>
</template>

<script scoped>
export default {
  name: "Input",
  props: {
    label: String,
    name: String,
    type: {
      type: String,
      default: "text",
    },
    backgroundColor: {
      type: String,
      default: "#181818",
    },
    white: {
      type: Boolean,
      default: false,
    },
    textarea: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 4,
    },
  },
  setup(props) {},
};
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  padding: 6px 25px;
}

input {
  border-radius: 30px;
  border: none;
  height: 50px;
  padding: 0 20px;
}

textarea {
  border-radius: 30px;
}

label {
  margin-bottom: 2px;
}
</style>
