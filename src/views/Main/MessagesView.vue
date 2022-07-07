<template>
  <div class="messages">
    <div class="search-section">
      <p class="title">Chats</p>
      <Input name="search" backgroundColor="#363636" />
    </div>

    <div class="list-section" v-for="message in messages" :key="message.id">
      <div class="item">
        <div class="image">
          <img :src="`src/assets/images/${message.image}`" />
        </div>

        <div class="message-content">
          <p class="title">{{ message.name }}</p>
          <p class="body">{{ message.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../../components/organisms/Input.vue";

export default {
  name: "ArtistView",
  data: () => ({
    messages: [
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Pvris",
        image: "ellipse-1.png",
        content:
          "Donec vel dui in libero fringilla congue sed aliquam quis elit quam. Integer eleifend",
      },
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Blink 182",
        image: "ellipse-2.png",
        content:
          "Donec vel dui in libero fringilla congue sed aliquam quis elit quam. Integer eleifend",
      },
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Boys Like Girls",
        image: "ellipse-3.png",
        content:
          "Donec vel dui in libero fringilla congue sed aliquam quis elit quam. Integer eleifend",
      },
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Rob Zombie",
        image: "ellipse-4.png",
        content:
          "Donec vel dui in libero fringilla congue sed aliquam quis elit quam. Integer eleifend",
      },
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "The Maine",
        image: "ellipse-5.png",
        content:
          "Donec vel dui in libero fringilla congue sed aliquam quis elit quam. Integer eleifend",
      },
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Machine Gun Kelly",
        image: "ellipse-6.png",
        content:
          "Donec vel dui in libero fringilla congue sed aliquam quis elit quam. Integer eleifend",
      },
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Tonight Alive",
        image: "ellipse-7.png",
        content:
          "Donec vel dui in libero fringilla congue sed aliquam quis elit quam. Integer eleifend",
      },
    ],
  }),
  components: {
    Input,
  },
};
</script>

<style scoped>
.messages {
  display: flex;
  flex-direction: column;
}

.search-section {
  padding: 20px;
}

.list-section {
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.1);
  height: 84px;
  padding: 5px 10px;
  border-bottom: 1px black solid;
}

.message-content {
  padding: 0 10px;
}

.body {
  font-size: 13px;
  font-weight: 300;
}
.image {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.image img {
  height: 64px;
  border-radius: 50%;
}
.title {
  font-size: 16px;
  font-weight: 400;
}

.location {
  font-weight: 300;
  font-size: 12px;
  margin-bottom: 15px;
}

.styles {
  font-size: 13px;
  line-height: 20px;
}

.styles-list {
  font-weight: 300;
  font-size: 13px;
}

.input {
  margin-top: 15px;
  padding: 0px;
}
</style>
