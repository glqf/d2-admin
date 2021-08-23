import {
  createApp
} from 'vue'
import App from './App.vue'
import router from '@/router.js'
import 'd2-projects/d2-modern-normalize/index.css'
import D2Components from 'd2-projects/d2-components/index.js'
import D2Scroll from 'd2-projects/d2-scroll/index.js'

import 'virtual:svg-icons-register'
import '@purge-icons/generated'

createApp(App)
  .use(router)
  .use(D2Components)
  .use(D2Scroll)
  .mount('#app')
