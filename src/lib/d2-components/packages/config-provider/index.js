import configProvider from './src/config-provider.jsx'

configProvider.install = app => {
  app.component(configProvider.name, configProvider)
}

export default configProvider
