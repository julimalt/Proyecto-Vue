import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./components/home/home.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("./components/login/signUp.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("./components/login/signIn.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("./components/cart/cart.vue"),
    },
    {
      path: "/form",
      name: "form",
      component: () => import("./components/form/form.vue"),
    },
  ],
});
