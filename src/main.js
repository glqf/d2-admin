import {
  createApp
} from 'vue'
import App from './App.vue'
import router from '@/router.js'
import 'd2-modern-normalize/index.css'
import D2Components from 'd2-components/index.js'

import 'virtual:svg-icons-register'
import '@purge-icons/generated'

createApp(App)
  .use(router)
  .use(D2Components)
  .mount('#app')
