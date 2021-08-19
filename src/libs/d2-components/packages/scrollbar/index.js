import scrollbar from './src/scrollbar.jsx'

scrollbar.install = app => {
  app.component(scrollbar.name, scrollbar)
}

export default scrollbar
