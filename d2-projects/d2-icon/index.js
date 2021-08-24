import icon from './src/icon.jsx'

icon.install = app => {
  app.component(icon.name, icon)
}

export default icon
