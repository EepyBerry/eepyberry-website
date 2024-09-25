import { createRouter, createWebHistory } from "vue-router";
import { SITE_TITLE } from "./utils/constants";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import MiscellaneousView from "./views/MiscellaneousView.vue";
import NotFoundView from "./views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: { attached: true },
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
      meta: { attached: true },
    },
    {
      path: "/miscellaneous",
      name: "Miscellaneous",
      component: MiscellaneousView,
      meta: { attached: true },
    },
    {
      path: "/page-not-found",
      name: "Not Found",
      component: NotFoundView,
      meta: { attached: true },
    },
    {
      path: "/nothing",
      name: "nothing",
      component: () => import("./views/NothingPage.vue"),
      meta: { attached: false },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/page-not-found",
    },
  ],
});
router.afterEach((to) => {
  document.title = (to.name ? `${String(to.name)} · ` : "") + SITE_TITLE;
});

export default router;
