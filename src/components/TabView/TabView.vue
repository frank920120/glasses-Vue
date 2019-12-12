<template>
  <div class="tabbar-view">
    <a href="#">首页</a>
    <a href="#">分类</a>
    <a href="#">搜索</a>
    <a href="#">购物车</a>
    <a href="#">我的</a>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped>
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
}
</style>