import { registerModules, getModule } from './utils/index.js'

// modules

import { countStore } from './modules/count.js'
import { menuSecondaryStore } from './modules/menu-secondary.js'
import { menuMainStore } from './modules/menu-main.js'

export const useStore = getModule

export const creatStore = () => registerModules([
  countStore,
  menuSecondaryStore,
  menuMainStore
])
