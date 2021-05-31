import Iconify from './src/index.vue'

Iconify.install = app => {
  app.component(Iconify.name, Iconify)
}

export default Iconify
