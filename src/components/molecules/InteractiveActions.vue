<template>
  <div class="actions">
    <Button to="#">
      <img src="../../assets/images/arrow-back.png" class="small" />
    </Button>

    <Button background="#FF00AE" size="68px" to="#">
      <img src="../../assets/images/close.png" class="large" />
    </Button>

    <Button size="46px" to="#">
      <img src="../../assets/images/play.png" class="medium" />
    </Button>

    <Button background="#E3F901" size="68px" to="/app/match/1">
      <img src="../../assets/images/love.png" class="large" />
    </Button>

    <Button to="#">
      <img src="../../assets/images/check.png" class="small" />
    </Button>
  </div>
</template>

<script>
import Button from "@/components/atoms/Button.vue";
export default {
  name: "InteractiveActions",
  components: { Button },
};
</script>

<style scoped>
.actions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.small {
  max-width: 50px;
}

.large {
  max-height: 31px;
}
.medium {
  max-height: 20px;
}
</style>
