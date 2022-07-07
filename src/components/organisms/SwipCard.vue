<template>
  <ProfileCard
    v-if="profiles"
    v-for="profile in profiles"
    :name="profile.name"
    :location="profile.location"
    :image="profile.image"
    :genre="profile.genre"
    :v-key="profile.id"
  />

  <InteractiveActions />
</template>

<script>
import ProfileCard from "@/components/molecules/ProfileCard.vue";
import InteractiveActions from "@/components/molecules/InteractiveActions.vue";

export default {
  props: {
    profiles: Object,
  },
  setup(props) {},
  components: { ProfileCard, InteractiveActions },
};
</script>
