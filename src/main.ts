import { createApp } from 'vue'
import { ThemeHelper } from './utils/theme.helper'
import App from './App.vue'
import router from './router.config'
import AppChip from './components/AppChip.vue'
import AppCardlet from './components/AppCardlet.vue'

import './assets/sass/index.scss'
import 'iconify-icon';
import AppCard from './components/AppCard.vue'
import AppPanelWrapper from './components/AppPanelWrapper.vue'
import { createHead } from '@unhead/vue'
import AppArticle from './components/AppArticle.vue'

// Main application
createApp(App)
  .use(router)
  .use(createHead())
  .provide('ThemeHelper', new ThemeHelper())
  .component('EepyArticle', AppArticle)
  .component('EepyCard', AppCard)
  .component('EepyCardlet', AppCardlet)
  .component('EepyChip', AppChip)
  .component('EepyPanelWrapper', AppPanelWrapper)
  .mount('#app')
