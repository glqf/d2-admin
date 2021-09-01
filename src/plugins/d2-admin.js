import router from '@/router/index.js'

import 'virtual:svg-icons-register'
import '@purge-icons/generated'

import 'd2-admin/assets/style/index.scss'

export default function (app) {
  app.use(router)
}
