import Svg from './src/index.vue'

Svg.install = app => {
  app.component(Svg.name, Svg)
}

export default Svg
