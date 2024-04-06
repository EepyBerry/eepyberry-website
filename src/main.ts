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

// Main application
createApp(App)
  .use(router)
  .provide('ThemeHelper', new ThemeHelper())
  .component('EepyCardlet', AppCardlet)
  .component('EepyButton', AppButton)
  .component('EepyDivider', AppDivider)
  .component('EepyIcon', AppIcon)
  .component('EepyChip', AppChip)
  .mount('#app')
