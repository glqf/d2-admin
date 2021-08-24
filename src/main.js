import {
  createApp
} from 'vue'
import App from './App.vue'
import router from '@/router.js'

import D2Admin from './plugins/d2-admin/d2-admin.js'

import 'virtual:svg-icons-register'
import '@purge-icons/generated'

createApp(App)
  .use(router)
  .use(D2Admin)
  .mount('#app')
