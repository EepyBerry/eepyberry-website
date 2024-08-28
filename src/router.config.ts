import { createRouter, createWebHistory } from "vue-router";
import { SITE_TITLE } from "./utils/constants";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/HomeView.vue"),
      meta: { attached: true }
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./views/AboutView.vue"),
      meta: { attached: true }
    },
    {
      path: "/page-not-found",
      name: "Not Found",
      component: () => import("./views/NotFoundView.vue"),
      meta: { attached: true }
    },
    {
      path: "/null",
      name: "null",
      component: () => import("./views/NullPage.vue"),
      meta: { attached: false }
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
