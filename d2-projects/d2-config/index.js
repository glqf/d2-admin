import config, {
  useConfig as _useConfig
} from './src/config.jsx'

config.install = app => {
  app.component(config.name, config)
}

export default config

export const useConfig = _useConfig
