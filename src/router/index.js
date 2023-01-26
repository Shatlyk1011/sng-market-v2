import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Signup from "@/views/auth/Signup.vue";
import Signin from "@/views/auth/Signin.vue";
import MarketView from "@/views/MarketView.vue";
import ProductView from "@/views/ProductView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/sign-up",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/sign-in",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/market",
    name: "MarketView",
    component: MarketView,
  },
  {
    path: "/product/:id",
    name: "ProductView",
    component: ProductView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth",
    };
  },
});

export default router;
