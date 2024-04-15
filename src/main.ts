import { createApp } from 'vue'
import { ThemeHelper } from './utils/theme.helper'
import App from './App.vue'
import router from './router.config'
import AppButton from './components/AppButton.vue'
import AppDivider from './components/AppDivider.vue'
import AppIcon from './components/AppIcon.vue'
import AppChip from './components/AppChip.vue'
import AppCardlet from './components/AppCardlet.vue'

import '@material-symbols/font-700/rounded.css';
import './assets/sass/index.scss'
import 'iconify-icon';
import AppCard from './components/AppCard.vue'
import AppPanelWrapper from './components/AppPanelWrapper.vue'
import { createHead } from '@unhead/vue'

// Main application
createApp(App)
  .use(router)
  .use(createHead())
  .provide('ThemeHelper', new ThemeHelper())
  .component('EepyCard', AppCard)
  .component('EepyCardlet', AppCardlet)
  .component('EepyButton', AppButton)
  .component('EepyDivider', AppDivider)
  .component('EepyIcon', AppIcon)
  .component('EepyChip', AppChip)
  .component('EepyPanelWrapper', AppPanelWrapper)
  .mount('#app')
