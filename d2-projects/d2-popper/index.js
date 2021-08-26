import popper from './src/popper.jsx'

popper.install = app => {
  app.component(popper.name, popper)
}

export default popper
