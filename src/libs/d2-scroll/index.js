import scroll from './src/scroll.jsx'

scroll.install = app => {
  app.component(scroll.name, scroll)
}

export default scroll
