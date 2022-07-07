<template>
  <main>
    <SwipCard :profiles="profiles" />
  </main>
</template>

<script>
import SwipCard from "@/components/organisms/SwipCard.vue";

export default {
  // props: {
  //   profiles: Object,
  // },

  data: () => ({
    profiles: [
      {
        id: "fe23ee41-4a82-4fa0-a16d-bce6e708a96d",
        name: "Pvris",
        location: "Lowell, Massachusetts",
        image: "profile-1.png",
        genre: "Alternative",
      },
    ],
  }),
  components: { SwipCard },
};
</script>
