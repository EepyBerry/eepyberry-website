import './assets/sass/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.config'
import { ThemeHelper } from './utils/theme.helper'

createApp(App)
  .use(router)
  .provide('ThemeHelper', new ThemeHelper())
  .mount('#app')
