import config from './src/config.jsx'

config.install = app => {
  app.component(config.name, config)
}

export default config
