import './assets/sass/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.config'
import { ThemeHelper } from './utils/theme.helper'

import AppButton from './components/AppButton.vue'
import AppDivider from './components/AppDivider.vue'
import '@material-symbols/font-700/rounded.css';
import AppIcon from './components/AppIcon.vue'
import AppChip from './components/AppChip.vue'

// Main application
createApp(App)
  .use(router)
  .provide('ThemeHelper', new ThemeHelper())
  .component('EepyButton', AppButton)
  .component('EepyDivider', AppDivider)
  .component('EepyIcon', AppIcon)
  .component('EepyChip', AppChip)
  .mount('#app')
