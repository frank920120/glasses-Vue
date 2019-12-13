<template>
  <div id="app">
    <NavView :title="title" v-if="isNavShow"></NavView>
    <router-view @onTitle="getTitle" @onNavShow="getNavShow"></router-view>
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
  },
  data() {
    return {
      title: "",
      isNavShow: true
    };
  },
  methods: {
    getTitle: function(title) {
      this.title = title;
      this.isNavShow = true;
    },
    getNavShow: function(isNavShow) {
      this.isNavShow = isNavShow;
    }
  }
};
</script>

<style></style>
