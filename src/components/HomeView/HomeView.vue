<template>
  <div class="home-view">
    <!-- slideShow -->
    <van-swipe :autoplay="3000" indicator-color="white" class="banner-view">
      <van-swipe-item v-for="item in slideShow" :key="item.id">
        <!-- <img :src="item.img" alt="item.id" /> -->
        <img v-lazy="item.img" />
      </van-swipe-item>
    </van-swipe>
    <category-view></category-view>
    <TitleView icon="star-o">单品热卖</TitleView>
    <SellingView></SellingView>
    <TitleView icon="gift-o">精选活动</TitleView>
    <WinnowView></WinnowView>
    <TitleView icon="label-o">为你推荐</TitleView>
    <RecommendView></RecommendView>

    <ItemDetailView v-if="detailShow"></ItemDetailView>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import CategoryView from "../CategoryView/CategoryView.vue";
import TitleView from "../TitleView/TitleView.vue";
import SellingView from "../SellingView/SellingView.vue";
import WinnowView from "../WinnowView/WinnowView.vue";
import RecommendView from "../RecommendView/RecommendView.vue";
import ItemDetailView from "../ItemDetailView/ItemDetailView.vue";
export default {
  data() {
    return {
      title: "弗兰克眼镜商店",
      slideShow: []
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    CategoryView,
    TitleView,
    SellingView,
    WinnowView,
    RecommendView,
    ItemDetailView
  },
  computed: {
    detailShow() {
      return this.$store.state.itemDetailShow;
    }
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
.home-view {
  padding-top: 2.8125rem;
}
.home-view > .banner-view {
  height: 9.875rem;
}
.home-view .banner-view img {
  width: 100%;
}
</style>
