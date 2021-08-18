import svg from './src/svg.jsx'

svg.install = app => {
  app.component(svg.name, svg)
}

export default svg
