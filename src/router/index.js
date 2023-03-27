import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AnimalsListView from "@/views/AnimalsListView";
import AnimalDetailsView from "@/views/AnimalDetailsView";
import NotFoundView from "@/views/NotFoundView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AnimalDetailsView.vue"),
  },
  {
    path: "/animals",
    name: "AnimalsList",
    component: AnimalsListView,
  },
  {
    path: "/animals/:animal",
    name: "AnimalDetail",
    component: AnimalDetailsView,
  },
  {
    path: "*",
    name: "404",
    component: NotFoundView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
