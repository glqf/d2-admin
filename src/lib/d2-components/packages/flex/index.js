import flex from './src/flex.vue'

flex.install = app => {
  app.component(flex.name, flex)
}

export default flex
