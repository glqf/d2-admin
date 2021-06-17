import { configDefault } from './utils/config.js'

import breakPoint from './packages/break-point/index.js'
import button from './packages/button/index.js'
import buttonGroup from './packages/button-group/index.js'
import flex from './packages/flex/index.js'
import icon from './packages/icon/index.js'
import iconGroup from './packages/icon-group/index.js'
import input from './packages/input/index.js'
import popper from './packages/popper/index.js'
import svg from './packages/svg/index.js'
import svgGroup from './packages/svg-group/index.js'

import './packages/Theme/index.scss'

const components = [
  breakPoint,
  button,
  buttonGroup,
  flex,
  icon,
  iconGroup,
  input,
  popper,
  svg,
  svgGroup
]

function install (app, option) {
  const optionMixed = Object.assign({}, configDefault, option)

  // getCurrentInstance().appContext.config.globalProperties.$D2COM
  // getCurrentInstance().proxy.$D2COM
  app.config.globalProperties.$D2COM = optionMixed

  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
