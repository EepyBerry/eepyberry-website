import './assets/sass/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.config'
import { ThemeHelper } from './utils/theme.helper'

import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// FontAwesome icons
library.add(far, fab, fas)

// Main application
createApp(App)
  .use(router)
  .provide('ThemeHelper', new ThemeHelper())
  .component('fa-icon', FontAwesomeIcon)
  .mount('#app')
