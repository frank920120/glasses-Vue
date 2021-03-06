import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";
import { routes } from "./router";
import { Lazyload } from "vant";
import Vuex from "vuex";

Vue.use(Lazyload);
Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.prototype.axios = axios;

const router = new VueRouter({
  mode: "history",
  routes
});

//vuex
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    itemDetailShow: false,
    itemId: 0
  },
  mutations: {
    changeItemDetailsShow(state, id) {
      state.itemDetailShow = !state.itemDetailShow;
      state.itemId = id;
    }
  }
});

router.beforeEach((to, from, next) => {
  const routesArray = router.options.routes.map(route => route.path);
  let pathIndex = routesArray.indexOf(to.path) - 1;
  window.localStorage.setItem("itemIndex", pathIndex);
  next();
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
