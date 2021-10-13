import { registerModules, getModule } from './utils/index.js'
import { countStore } from './modules/count.js'
import { headerMenuStore } from './modules/header-menu.js'
import { menuMainStore } from './modules/menu-main.js'

const modules = [
  countStore,
  headerMenuStore,
  menuMainStore
]

export const useStore = getModule

export const creatStore = () => registerModules(modules)
