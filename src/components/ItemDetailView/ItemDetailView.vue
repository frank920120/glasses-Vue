<template>
  <div class="itemdetail-view">
    <van-nav-bar title="商品详情" left-arrow @click-left="goback" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="image in details.banners" :key="image.id">
        <img v-lazy="image.img" class="banner" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { NavBar, Swipe, SwipeItem } from "vant";
export default {
  data() {
    return {
      details: []
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  computed: {
    getId() {
      return this.$store.state.itemId;
    }
  },
  methods: {
    goback: function() {
      this.$store.commit("changeItemDetailsShow");
    }
  },
  created() {
    this.axios
      .get("/json/goods-detail.json")
      .then(res => (this.details = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
.itemdetail-view {
  background: blue;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 999;
}
.banner {
  width: 100%;
}
</style>
