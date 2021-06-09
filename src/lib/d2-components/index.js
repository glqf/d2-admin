import { configDefault, configSet } from './utils/config.js'

import button from './packages/button/index.js'
import buttonGroup from './packages/button-group/index.js'
import flex from './packages/flex/index.js'
import icon from './packages/icon/index.js'
import iconGroup from './packages/icon-group/index.js'
import popper from './packages/popper/index.js'
import svg from './packages/svg/index.js'
import svgGroup from './packages/svg-group/index.js'

import './packages/Theme/index.scss'

const components = [
  button,
  buttonGroup,
  flex,
  icon,
  iconGroup,
  popper,
  svg,
  svgGroup
]

function install (app, option) {
  const optionMixed = Object.assign({}, configDefault, option)

  configSet(optionMixed)

  app.config.globalProperties.$D2COMPONENT = optionMixed

  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
