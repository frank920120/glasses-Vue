<template>
  <div class="home-view">
    <van-swipe :autoplay="3000" indicator-color="white" class="banner-view">
      <van-swipe-item v-for="item in slideShow" :key="item.id">
        <!-- <img :src="item.img" alt="item.id" /> -->
        <img v-lazy="item.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  data() {
    return {
      title: "弗兰克眼镜商店",
      slideShow: []
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  created() {
    this.$emit("onTitle", this.title);
    this.axios
      .get("/json/banner.json")
      .then(res => (this.slideShow = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
@import url("./temp.css");
</style>
