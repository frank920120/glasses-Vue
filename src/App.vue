<template>
  <div id="app">
    <NavView></NavView>
    <div class="content">主体</div>
    <TabView></TabView>
  </div>
</template>

<script>
import NavView from "./components/NavView/NavView.vue";
import TabView from "./components/TabView/TabView.vue";
export default {
  name: "app",
  components: {
    NavView,
    TabView
  }
};
</script>

<style>
</style>
