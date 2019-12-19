<template>
  <van-tabbar v-model="active" class="tabbar-view" active-color="red" @change="onClickTab">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="filter-o" to="/sort">分类</van-tabbar-item>
    <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  methods: {
    onClickTab: function() {
      window.localStorage.setItem("itemIndex", this.active);
    }
  },
  created() {
    let itemIndex = parseInt(window.localStorage.getItem("itemIndex"));
    if (!isNaN(itemIndex)) {
      this.active = itemIndex;
    }
  }
};
</script>

<style scoped>
.tabbar-view {
  height: 3.125rem;
  position: fixed;
  bottom: 0;
  border-top: 0.0625rem solid black;
  width: 100%;
  display: flex;
  align-items: center;
}
.tabbar-view a {
  display: inline-block;
  width: 20%;
  text-align: center;
  line-height: 3.125rem;
  cursor: pointer;
}
</style>
