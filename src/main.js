import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router/index.js'

import STable, { setLicenseKey } from '@surely-vue/table'
import '@surely-vue/table/dist/index.css'

import App from './App.vue'

import 'd2/index.js'

setLicenseKey('your license key')

createApp(App)
  .use(createPinia())
  .use(router)
  .use(STable)
  .mount('#app')
