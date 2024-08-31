import { createApp } from "vue";
import { ThemeHelper } from "./utils/theme.helper";
import App from "./App.vue";
import router from "./router.config";
import AppChip from "./components/AppChip.vue";

import "./assets/sass/index.scss";
import "iconify-icon";
import AppCard from "./components/AppCard.vue";
import { createHead } from "@unhead/vue";
import AppArticle from "./components/AppArticle.vue";
import AppGroup from "./components/AppGroup.vue";

// Main application
createApp(App)
  .use(router)
  .use(createHead())
  .provide("ThemeHelper", new ThemeHelper())
  .component("EepyArticle", AppArticle)
  .component("EepyCard", AppCard)
  .component("EepyGroup", AppGroup)
  .component("EepyChip", AppChip)
  .mount("#app");
