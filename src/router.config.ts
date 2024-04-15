import { createRouter, createWebHistory } from "vue-router"
import HomeView from "./views/HomeView.vue";
import { SITE_TITLE } from "./utils/constants";
import NotFoundView from "./views/NotFoundView.vue";
import AboutView from "./views/AboutView.vue";
import ExperimentsView from "./views/ExperimentsView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: () => import('./views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('./views/AboutView.vue')
      },
      {
        path: '/experiments',
        name: 'Experiments',
        component: () => import('./views/ExperimentsView.vue')
      },
      {
        path: '/page-not-found',
        name: 'Not Found',
        component: () => import('./views/NotFoundView.vue')
      },
      { 
        path: '/:pathMatch(.*)*',
        redirect: '/page-not-found'
      }
    ]
})
router.afterEach((to) => {
  document.title = (to.name ? `${String(to.name)} · ` : '') + SITE_TITLE;
})

export default router