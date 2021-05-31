import SvgGroup from './src/index.vue'

SvgGroup.install = app => {
  app.component(SvgGroup.name, SvgGroup)
}

export default SvgGroup
