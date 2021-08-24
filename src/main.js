import {
  createApp
} from 'vue'
import App from './App.vue'
import router from '@/router.js'

import 'd2-projects/d2-modern-normalize/index.css'

import D2Components from 'd2-projects/d2-components/index.js'
import 'd2-projects/d2-components/packages/theme/index.scss'

import D2BreakPoint from 'd2-projects/d2-break-point/index.js'

import D2Scroll from 'd2-projects/d2-scroll/index.js'
import 'd2-projects/d2-scroll/src/scroll.scss'

import D2Flex from 'd2-projects/d2-flex/index.js'
import 'd2-projects/d2-flex/src/flex.scss'

import 'virtual:svg-icons-register'
import '@purge-icons/generated'

createApp(App)
  .use(router)
  .use(D2Components)
  .use(D2BreakPoint)
  .use(D2Scroll)
  .use(D2Flex)
  .mount('#app')
