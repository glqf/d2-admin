import Button from './src/D2Button.vue'

Button.install = app => {
  app.component(Button.name, Button)
}

export default Button
