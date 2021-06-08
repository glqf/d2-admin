import D2Popper from './src/index.vue'

D2Popper.install = app => {
  app.component(D2Popper.name, D2Popper)
}

export default D2Popper
