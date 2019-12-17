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

<style>
#app {
  background-color: #f2f2f2;
}
.van-nav-bar {
  height: 2.8125rem;
  background-color: red;
  line-height: 2.8125rem;
  text-align: center;
}
.van-nav-bar .van-icon {
  color: white;
  font-size: 1rem;
  font-weight: 700;
}
.van-nav-bar__title {
  color: white;
  font-size: 1rem;
  font-weight: 700;
}
</style>
