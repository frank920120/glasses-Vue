<template>
  <van-nav-bar :title="title" fixed />
</template>

<script>
import { NavBar } from "vant";
export default {
  props: ["title"],
  components: {
    [NavBar.name]: NavBar
  }
};
</script>

<style scoped>
.van-nav-bar {
  height: 2.8125rem;
  background-color: red;
  line-height: 2.8125rem;
  text-align: center;
}
.van-nav-bar .van-nav-bar__title {
  color: white;
  font-size: 1rem;
  font-weight: 700;
}
</style>
