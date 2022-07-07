<template>
  <main class="app-main">
    <div class="app-view">
      <router-view />
    </div>
    <FooterNavigation />
  </main>
</template>

<script>
import FooterNavigation from "@/components/organisms/FooterNavigation.vue";

export default {
  name: "Main",
  components: {
    FooterNavigation,
  },
};
</script>

<style lang="css">
.app-main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.app-view {
  height: 94vh;
  overflow: auto;
}
</style>
