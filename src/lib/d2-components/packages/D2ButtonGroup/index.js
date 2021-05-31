import ButtonGroup from './src/index.vue'

ButtonGroup.install = app => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
