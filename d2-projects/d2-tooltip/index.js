import tooltip from './src/tooltip.jsx'

tooltip.install = app => {
  app.component(tooltip.name, tooltip)
}

export default tooltip
