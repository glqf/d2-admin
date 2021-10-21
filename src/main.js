import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index.js'

import App from './App.vue'

import 'd2-admin/index.js'
import d2Projects from './plugins/d2-projects.js'

createApp(App)
  .use(createPinia())
  .use(d2Projects)
  .use(router)
  .mount('#app')
