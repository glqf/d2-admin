import config, {
  useConfig as use
} from './src/config.jsx'

config.install = app => {
  app.component(config.name, config)
}

export default config

export const useConfig = use
