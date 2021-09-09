import { registerModules, getModule } from './utils/index.js'
import { countStore } from './modules/count.js'
import { headerMenuStore } from './modules/header-menu.js'
import { asideMenuStore } from './modules/aside-menu.js'

const modules = [
  countStore,
  headerMenuStore,
  asideMenuStore
]

export const useStore = getModule

export const creatStore = () => registerModules(modules)
