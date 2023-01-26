import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Signup from "@/views/auth/Signup.vue";
import Signin from "@/views/auth/Signin.vue";
const MarketView = () => import("@/views/MarketView.vue");
import ProductView from "@/views/ProductView.vue";
import CreateProductView from "@/views/CreateProductView.vue";

import { projectAuth } from "@/firebase/config";
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Signin" });
  } else {
    next();
  }
};

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
  {
    path: "/create-product",
    name: "CreateProductView",
    component: CreateProductView,
    beforeEnter: requireAuth,
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
