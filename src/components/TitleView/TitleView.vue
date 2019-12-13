<template>
  <div class="title-view">
    <h3><van-icon :name="icon" /><slot></slot></h3>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  props: ["icon"],
  components: {
    [Icon.name]: Icon
  }
};
</script>

<style scoped>
.title-view {
  height: 4.6875rem;
  line-height: 4.6875rem;
  text-align: center;
}
h3 {
  font-size: 1.125rem;
}
</style>
