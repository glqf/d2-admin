import Config from './packages/config/index.js'
import Icon from './packages/icon/index.js'
import Svg from './packages/svg/index.js'

const components = [
  Config,
  Icon,
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
