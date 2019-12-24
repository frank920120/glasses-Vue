<template>
  <div class="search-detail-view">
    <van-nav-bar fixed title="搜索详情" left-arrow @click-left="onBack" />
    <SearchItemView
      v-for="(goods, index) in serchDetails.list"
      :key="index"
      :goods="goods"
    ></SearchItemView>
  </div>
</template>

<script>
import { NavBar } from "vant";
import SearchItemView from "../SearchItemView/SearchItemView.vue";
export default {
  props: ["serchDetails"],
  components: {
    [NavBar.name]: NavBar,
    SearchItemView
  },
  methods: {
    onBack: function() {
      this.$emit("onBack");
    }
  }
};
</script>

<style scoped>
.search-detail-view {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: #f2f2f2;
  z-index: 999;
  padding-top: 2.8125rem;
  overflow: auto;
}
</style>
