import { registerModules, getModule } from './utils/index.js'
import { countStore } from './modules/count.js'
import { headerMenuStore } from './modules/header-menu.js'
import { asideMenuStore } from './modules/aside-menu.js'

export const useStore = getModule

export function creatStore () {
  registerModules(
    countStore,
    headerMenuStore,
    asideMenuStore
  )
}
