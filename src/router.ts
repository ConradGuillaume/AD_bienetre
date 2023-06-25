import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import PageTwo from "./components/PageTwo.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/pageTwo", component: PageTwo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
