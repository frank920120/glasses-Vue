import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "./axios-auth";
import { routes } from "./router";
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
