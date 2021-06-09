import D2Svg from './src/svg.vue'

D2Svg.install = app => {
  app.component(D2Svg.name, D2Svg)
}

export default D2Svg
