import BreakPoint from './packages/break-point/index.js'
import Config from './packages/config/index.js'
import Flex from './packages/flex/index.js'
import Icon from './packages/icon/index.js'
import Scrollbar from './packages/scrollbar/index.js'
import Svg from './packages/svg/index.js'

import './packages/theme/index.scss'

const components = [
  BreakPoint,
  Config,
  Flex,
  Icon,
  Scrollbar,
  Svg
]

function install (app, option) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
