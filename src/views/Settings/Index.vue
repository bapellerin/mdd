<template>
  <main class="settings">
    <router-view />
    <FooterNavigation />
  </main>
</template>

<script>
import FooterNavigation from "@/components/organisms/FooterNavigation.vue";

export default {
  name: "Settings",
  components: {
    FooterNavigation,
  },
};
</script>


<style lang="css">
.settings {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>