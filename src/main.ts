import { createApp } from "vue";
import { ThemeHelper } from "./utils/theme.helper";
import App from "./App.vue";
import router from "./router.config";
import AppChip from "./components/AppChip.vue";

import "./assets/sass/index.scss";
import "iconify-icon";
import AppCard from "./components/AppCard.vue";
import { createHead } from "@unhead/vue";
import AppGroup from "./components/AppGroup.vue";
import AppTooltip from "./components/main/AppTooltip.vue";
import AppPatchCard from "./components/AppPatchCard.vue";

// Main application
createApp(App)
  .use(router)
  .use(createHead())
  .provide("ThemeHelper", new ThemeHelper())
  .component("EepyCard", AppCard)
  .component("EepyPatchCard", AppPatchCard)
  .component("EepyGroup", AppGroup)
  .component("EepyChip", AppChip)
  .component("EepyTooltip", AppTooltip)
  .mount("#app");
