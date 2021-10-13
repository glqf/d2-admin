import { registerModules, getModule } from './utils/index.js'
import { countStore } from './modules/count.js'
import { menuSecondaryStore } from './modules/menu-secondary.js'
import { menuMainStore } from './modules/menu-main.js'

const modules = [
  countStore,
  menuSecondaryStore,
  menuMainStore
]

export const useStore = getModule

export const creatStore = () => registerModules(modules)
