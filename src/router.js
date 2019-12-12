import HomeView from "./components/HomeView/HomeView.vue";
import SortView from "./components/SortView/SortView.vue";
import CartView from "./components/CartView/CartView.vue";
import MyView from "./components/MyView/MyView.vue";
import SearchView from "./components/SearchView/SearchView.vue";
export const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: HomeView },
  { path: "/cart", component: CartView },
  { path: "/my", component: MyView },
  { path: "/search", component: SearchView },
  { path: "/sort", component: SortView }
];
