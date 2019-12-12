<template>
  <div id="app">
    <NavView></NavView>
    <router-view></router-view>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <TabView></TabView>
  </div>
</template>

<script>
import NavView from "./components/NavView/NavView.vue";
import TabView from "./components/TabView/TabView.vue";
import { Button } from "vant";
export default {
  name: "app",
  components: {
    NavView,
    TabView,
    [Button.name]: Button
  }
};
</script>

<style></style>
