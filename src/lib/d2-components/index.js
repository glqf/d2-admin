import { configDefault, configSet } from './utils/config.js'

import D2Button from './packages/D2Button/index.js'
import D2ButtonGroup from './packages/D2ButtonGroup/index.js'
import D2Icon from './packages/D2Icon/index.js'
import D2IconGroup from './packages/D2IconGroup/index.js'
import D2Popper from './packages/D2Popper/index.js'
import D2Svg from './packages/D2Svg/index.js'
import D2SvgGroup from './packages/D2SvgGroup/index.js'

import './packages/Theme/index.scss'

const components = [
  D2Button,
  D2ButtonGroup,
  D2Icon,
  D2IconGroup,
  D2Popper,
  D2Svg,
  D2SvgGroup
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
