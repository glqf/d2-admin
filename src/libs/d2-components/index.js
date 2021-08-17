import Config from './packages/config/index.js'
import Icon from './packages/icon/index.js'

// import './packages/theme/index.scss'

const components = [
  Config,
  Icon
]

function install (app, option) {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
