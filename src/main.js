import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";
import { routes } from "./router";
import { Lazyload } from "vant";

Vue.use(Lazyload);
Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.prototype.axios = axios;

const router = new VueRouter({
  mode: "history",
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
