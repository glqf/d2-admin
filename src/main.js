import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router.js'

import 'virtual:svg-icons-register'
import '@purge-icons/generated'

import config from 'd2-projects/d2-config/index.js'

import 'd2-admin/assets/style/index.scss'

createApp(App)
  .use(router)
  .use(config)
  .mount('#app')
