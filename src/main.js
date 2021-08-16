import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router.js'

import 'virtual:svg-icons-register'
import '@purge-icons/generated'

createApp(App)
  .use(router)
  .mount('#app')
