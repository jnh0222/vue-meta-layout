import Vue from "vue";
import Router from "vue-router";
import List from "./components/List.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: List
    },
    {
      path: "/list",
      name: "list",
      component: List,
      meta: {
        layout: "resizable"
      }
    },
    {
      path: "/print",
      name: "print",
      component: List,
      meta: {
        layout: "clear"
      }
    },
    {
      path: "*",
      name: "notFound",
      component: () => import("./components/NotFound.vue"),
      meta: {
        layout: "clear"
      }
    }
  ],
  mode: "history"
});
