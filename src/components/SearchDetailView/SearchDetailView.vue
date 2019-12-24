<template>
  <div class="search-detail-view">
    <van-nav-bar fixed title="搜索详情" left-arrow @click-left="onBack" />
    <div>
      {{ serchDetails.searchKey }}
    </div>
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  props: ["serchDetails"],
  components: {
    [NavBar.name]: NavBar
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
