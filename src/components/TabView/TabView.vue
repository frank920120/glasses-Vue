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
  height: 50px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid black;
  width: 100%;
}
.tabbar-view a {
  display: inline-block;
  width: 20%;
  text-align: center;
  line-height: 50px;
}
</style>