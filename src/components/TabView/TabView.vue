<template>
  <div class="tabbar-view">
    <router-link to="/home">首页</router-link>
    <router-link to="/sort">分类</router-link>
    <router-link to="/search">搜索</router-link>
    <router-link to="/cart">购物车</router-link>
    <router-link to="/my">我的</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tabbar-view {
  height: 3.125rem;
  position: fixed;
  bottom: 0;
  border-top: 0.0625rem solid black;
  width: 100%;
}
.tabbar-view a {
  display: inline-block;
  width: 20%;
  text-align: center;
  line-height: 3.125rem;
  cursor: pointer;
}
</style>
