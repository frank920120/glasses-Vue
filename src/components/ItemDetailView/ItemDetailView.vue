<template>
  <div class="itemdetail-view">
    <van-nav-bar title="商品详情" left-arrow @click-left="goback" />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="image in details.banners" :key="image.id">
        <img v-lazy="image.img" class="banner" />
      </van-swipe-item>
    </van-swipe>
    <div class="content-view">
      <div class="price-view">
        <p class="new-price">¥ {{ details.newPrice }}</p>
        <p class="old-price">原价 ¥ {{ details.oldPrice }}</p>
        <span class="sale-item" v-if="details.sale">特价</span>
      </div>
      <div class="standard-view"></div>
      <div class="desc-view"></div>
      <div class="explain-view"></div>
    </div>
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
  background: #f2f2f2;
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
.content-view {
  background: white;
  border: 1px solid #bbbbbb;
  border-left: 0;
  border-right: 0;
}
.price-view {
  height: 2.8125rem;
  line-height: 2.8125rem;
}
.new-price {
  float: left;
  font-size: 1.3125rem;
  font-weight: 900;
  margin-right: 1.25rem;
  margin-left: 1.25rem;
  color: red;
}
.old-price {
  font-size: 0.75rem;
  color: #7c7c7c;
  float: left;
  margin-right: 1.25rem;
  text-decoration: line-through;
}
.sale-item {
  display: inline-block;
  font-size: 0.75rem;
  color: white;
  background: red;
  width: 1.875rem;
  height: 1.125rem;
  line-height: 1.125rem;
  text-align: center;
}
</style>
