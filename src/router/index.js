import { createRouter, createWebHashHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

console.log('routes', routes)

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
