import { createApp } from 'vue'
import App from './App.vue'

import d2Admin from './plugins/d2-admin.js'
import d2Projects from './plugins/d2-projects.js'

createApp(App)
  .use(d2Admin)
  .use(d2Projects)
  .mount('#app')
