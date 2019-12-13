<template>
  <van-tabbar v-model="active" class="tabbar-view">
    <router-link to="/home"
      ><van-tabbar-item icon="home-o">首页</van-tabbar-item></router-link
    >
    <router-link to="/sort"
      ><van-tabbar-item icon="search">分类</van-tabbar-item></router-link
    >
    <router-link to="/search">
      <van-tabbar-item icon="friends-o">搜索</van-tabbar-item></router-link
    >
    <router-link to="/cart"
      ><van-tabbar-item icon="setting-o">购物车</van-tabbar-item></router-link
    >
    <router-link to="/my">
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item></router-link
    >
  </van-tabbar>
  <!-- <router-link to="/home">首页</router-link>
    <router-link to="/sort">分类</router-link>
    <router-link to="/search">搜索</router-link>
    <router-link to="/cart">购物车</router-link>
    <router-link to="/my">我的</router-link> -->
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
