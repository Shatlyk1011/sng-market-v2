import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Signup from "@/views/auth/Signup.vue";
import Signin from "@/views/auth/Signin.vue";
import Market from "@/views/Market.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
    name: "Market",
    component: Market,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
