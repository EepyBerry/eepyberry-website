import { createApp } from 'vue';
import App from './App.vue';
import router from './router.config';

import './assets/sass/index.scss';
import 'iconify-icon';
import AppCard from './components/AppCard.vue';
import { createHead } from '@unhead/vue';
import AppPatchCard from './components/AppPatchCard.vue';

// Main application
createApp(App)
  .use(router)
  .use(createHead())
  .component('EepyCard', AppCard)
  .component('EepyPatchCard', AppPatchCard)
  .mount('#app');
