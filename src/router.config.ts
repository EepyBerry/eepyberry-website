import { createRouter, createWebHistory } from "vue-router"
import HomeView from "./views/HomeView.vue";
import { SITE_TITLE } from "./utils/constants";
import NotFoundView from "./views/NotFoundView.vue";
import AboutView from "./views/AboutView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'About',
        component: AboutView
      },
      {
        path: '/page-not-found',
        name: 'Not Found',
        component: NotFoundView
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