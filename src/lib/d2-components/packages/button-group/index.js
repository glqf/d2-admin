import buttonGroup from '../button/src/button-group.vue'

buttonGroup.install = app => {
  app.component(buttonGroup.name, buttonGroup)
}

export default buttonGroup
